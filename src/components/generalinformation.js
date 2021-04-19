/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/general.scss";
import ValueOrInput from "./generalValueOrInput";

const General = (props) => {
  const [divIsVisible, setDivIsVisible] = useState(true);
  const [input, setInput] = useState({
    fName: "",
    lName: "",
    email: "",
    pNumber: "",
    description: "",
  });
  const toggleVisible = () => setDivIsVisible((divIsVisible) => !divIsVisible);
  const getChildState = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      inputError: "",
    }));
  };
  //
  if (props.working === true) {
    return (
      <>
        <div className="generalPreview">
          <div>
            <p>
              {input.fName}
              {input.lName}
            </p>
            <span>{input.pNumber}</span>,<span>{input.email}</span>
          </div>
          <div>
            Description
            <hr />
            <p>{input.description}</p>
          </div>
        </div>
      </>
    );
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
