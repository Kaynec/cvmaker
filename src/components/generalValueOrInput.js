/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

const initialInput = {
  fName: "",
  lName: "",
  email: "",
  pNumber: "",
  description: "",
  inputError: "",
};

const ValueOrInput = (props) => {
  // ToggleCompleted
  const toggleStateCompleted = (e) => {
    e.preventDefault();
    if (e.target.id === "Change")
      return setCompleted((completed) => !completed);
    else {
      const error = formError();
      if (error !== false) {
        setInput((prev) => ({
          ...prev,
          inputError: error,
        }));
      } else if (error === false) {
        setCompleted((completed) => !completed);
        setInput((prev) => ({
          ...prev,
          inputError: "",
        }));
      }
    }
  };

  const formError = () => {
    let { fName, lName, email, pNumber } = input;
    if (!fName || !lName || !email) return "Please Enter All Fields";
    else if (pNumber.length < 5)
      return "Number Should Be At Least 5 Digit Long And A Valid Phone Number";
    else if (pNumber.length > 21) return "Number Should Be Less Than 21 Digits";

    return false;
  };

  const [completed, setCompleted] = useState(false);
  const [input, setInput] = useState(initialInput);

  const resetInput = () => {
    setInput((prev) => ({
      ...prev,
      ...initialInput,
    }));
  };

  const onChange = (e) => {
    props.sharedState(e);
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      inputError: "",
    }));
  };

  // The return Statement

  if (completed === true) {
    return (
      <>
        <div>
          <span>First Name:{input.fName}</span>
        </div>

        <div>
          <span>Last Name:{input.lName}</span>
        </div>

        <div>
          <span>Email:{input.email}</span>
        </div>

        <div>
          <span>Phone Number:{input.pNumber}</span>
        </div>
        <div className="fifthDiv">
          <p>{input.description}</p>
        </div>

        <div>
          <button id="Change" onClick={toggleStateCompleted}>
            Change
          </button>
        </div>
      </>
    );
  } else if (completed === false) {
    return (
      <>
        <div>
          <label>First Name</label>
          <input
            name="fName"
            required
            minLength="2"
            onChange={onChange}
            type="text"
            value={input.fName}
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            name="lName"
            minLength="2"
            required
            onChange={onChange}
            type="text"
            value={input.lName}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            name="email"
            required
            onChange={onChange}
            type="email"
            value={input.email}
          />
        </div>

        <div>
          <label>Phone Number</label>
          <input
            name="pNumber"
            required
            onChange={onChange}
            type="number"
            minLength="5"
            maxLength="21"
            value={input.pNumber}
          />
        </div>

        <div>
          <label>A Brief Summray Of Yourself</label>
          <textarea
            value={input.description}
            required
            onChange={onChange}
            name="description"
            minLength={5}
            maxLength={120}
          ></textarea>
        </div>

        <div>
          <button onClick={toggleStateCompleted}>Save</button>
          <button onClick={resetInput}>Reset</button>
        </div>

        <p className="formError">{input.inputError}</p>
      </>
    );
  }
};

export default React.memo(ValueOrInput);
