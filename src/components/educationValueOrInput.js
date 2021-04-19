/* eslint-disable array-callback-return */
import React from "react";

const EducationValueOrInput = (props) => {
  const styleNotVisible = {
    maxHeight: 0,
    visibility: "hidden",
    opacity: 0,
    transition: "all .2s ease ",
  };
  const styleVisible = {
    maxHeight: 500,
    visibility: "visible",
    opacity: 1,
    transition: "all .4s ease",
  };
  return props.educationArray.map((item) => {
    if (item.completed === false) {
      return (
        <div
          className="divForm"
          style={props.visible === false ? styleNotVisible : styleVisible}
          key={item.id}
          id={"addEducation"}
        >
          <div>
            <div>
              <label>School Name</label>
              <input
                name="schoolName"
                required
                minLength="2"
                onChange={props.onChange}
                type="text"
                value={item.schoolName}
                id={item.id}
              />
            </div>

            <div>
              <label>Title</label>
              <input
                name="degree"
                minLength="2"
                required
                onChange={props.onChange}
                type="text"
                value={item.degree}
                id={item.id}
              />
            </div>

            <div>
              <label>From</label>
              <input
                name="from"
                required
                onChange={props.onChange}
                type="date"
                value={item.from}
                id={item.id}
              />
            </div>

            <div>
              <label>To</label>
              <input
                name="to"
                required
                onChange={props.onChange}
                type="date"
                value={item.to}
                id={item.id}
              />
            </div>

            <div>
              <button id={item.id} onClick={props.toggleStateCompleted}>
                Save
              </button>
              <button id={item.id} onClick={props.resetChildState}>
                Reset
              </button>
              <button id={item.id} onClick={props.removeChild}>
                Remove
              </button>
            </div>
          </div>
        </div>
      );
    } else if (item.completed === true) {
      return (
        <div
          style={props.visible === false ? styleNotVisible : styleVisible}
          key={item.id}
          id={item.id}
          className={`educationData`}
        >
          <div>
            <div>
              <div>
                <p>School Name: {item.schoolName}</p>
              </div>
              <div>
                <p>Title: {item.degree}</p>
              </div>
              <div>
                <p>From: {item.from}</p>
              </div>
              <div>
                <p>To: {item.to}</p>
              </div>
              <div>
                <button id={item.id} onClick={props.toggleStateCompleted}>
                  Change
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      );
    }
  });
};

export default React.memo(EducationValueOrInput);
