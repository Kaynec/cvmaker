/* eslint-disable no-useless-constructor */
import "./styles/App.scss";
import React, { useState, useRef } from "react";
import General from "./components/generalinformation";
import Education from "./components/education";
import Skills from "./components/skills";
import Experience from "./components/experience";
import "./styles/preview.scss";
import ReactToPdf from "react-to-pdf";
//

const App = (props) => {
  const [prevmode, setPrevmode] = useState(false);
  // ref for creating pdf from container div
  const container = useRef(null);
  // making button visible or not
  const styleVisible = {
    display: "block",
  };
  const styleNotVisile = {
    display: "none",
  };
  //  main container and two buttons (one is a switch)
  return (
    <>
      <label className="label">
        <div className="toggle">
          <input
            className="toggle-state"
            type="checkbox"
            name="check"
            value="check"
            onChange={() => {
              setPrevmode((prev) => !prev);
            }}
          />
          <div className="indicator"></div>
        </div>
        <div className="label-text">
          {prevmode ? "Previw Mode" : "Working Mode"}
        </div>
        <div>
          <div>
            <ReactToPdf targetRef={container} filename="div-blue.pdf">
              {({ toPdf }) => (
                <button
                  onClick={toPdf}
                  style={prevmode ? styleVisible : styleNotVisile}
                >
                  Get Pdf
                </button>
              )}
            </ReactToPdf>
          </div>
        </div>
      </label>
      {/* The components  */}
      <div id="container" ref={container}>
        <General working={prevmode} />
        <Education working={prevmode} />
        <Skills working={prevmode} />
        <Experience working={prevmode} />
      </div>
    </>
  );
};
export default App;
