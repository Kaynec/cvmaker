/* eslint-disable no-useless-constructor */
import "./styles/App.scss";
import React, { useState, useRef } from "react";
import General from "./components/generalinformation";
import Education from "./components/education";
import Skills from "./components/skills";
import Experience from "./components/experience";
import "./styles/preview.scss";
import { useScreenshot } from "use-react-screenshot";
import { jsPDF } from "jspdf";
const App = (props) => {
  const [prevmode, setPrevmode] = useState(false);
  const [image, takeScreenshot] = useScreenshot();
  const container = useRef(null);
  // making button visible or not
  const styleVisible = {
    display: "block",
  };
  const styleNotVisile = {
    display: "none",
  };
  const getImage = () => {
    takeScreenshot(container.current);
    console.log(image);
  };
  return (
    <>
      <img src={image} style={{ width: 500 }} alt="someImage" />
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
          <button
            onClick={getImage}
            style={prevmode ? styleVisible : styleNotVisile}
          >
            Get Pdf
          </button>
        </div>
      </label>
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

function generatePDF(imgPath) {
  console.log(imgPath);
  // var img = new Image();
  // img.src = imgPath;

  // var doc = new jsPDF("p", "mm", "a3"); // optional parameters
  // doc.addImage(img, "JPEG", 1, 2);
  // doc.save("new.pdf");
}
