/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/general.scss";
import ValueOrInput from "./generalValueOrInput";
// The general Component
const General = (props) => {
  // Two States (one  for style and the other one is equal to that of child)
  const [divIsVisible, setDivIsVisible] = useState(true);
  const [input, setInput] = useState({
    fName: "",
    lName: "",
    email: "",
    pNumber: "",
    description: "",
  });
  //  get the state of chid components (generalValueOrInput)
  const toggleVisible = () => setDivIsVisible((divIsVisible) => !divIsVisible);
  const getChildState = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      inputError: "",
    }));
  };
  // // // // // //
  // if the app is one working mode
  if (props.working === true) {
    return (
      <>
        <div className="generalPreview">
          <div>
            <p>
              {input.fName}
              <span style={{ marginLeft: 6, fontSize: "2.5rem" }}>
                {input.lName}
              </span>
            </p>
            <span>
              {input.pNumber}
              {input.email}
            </span>
          </div>
          <div>
            Description
            <hr />
            <p>{input.description}</p>
          </div>
        </div>
      </>
    );
    // if the app is not working mode
  } else {
    return (
      <div id="General">
        <div onClick={toggleVisible}>
          <p>
            Profile <i className="fa fa-user-circle" aria-hidden="true"></i>
          </p>
          {divIsVisible ? (
            <span style={{ marginLeft: 175 }} className="gg-arrow-up"></span>
          ) : (
            <span style={{ marginLeft: 175 }} class="gg-arrow-down"></span>
          )}
        </div>

        <div id="profileDiv" className={divIsVisible ? "visible" : ""}>
          <ValueOrInput sharedState={getChildState} />
        </div>
      </div>
    );
  }
};

export default General;
