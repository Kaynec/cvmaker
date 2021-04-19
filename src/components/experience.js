/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/experience.scss";
import uniqid from "uniqid";

const initialState = {
  name: "",
  company: " ",
  from: "",
  to: "",
  id: uniqid(),
  completed: false,
};
const Experience = (props) => {
  // The States for visibility and the array that contains the objects
  const [experienceArr, setExperienceArr] = useState(() => [initialState]);
  const [visible, setVisible] = useState(() => true);

  // Toggle The Completed State
  //
  const toggleCompleted = (e) => {
    const experienceArrCopy = experienceArr.map((item) => {
      if (item.id === e.target.id) {
        const tempObj = { ...item };
        tempObj.completed = !tempObj.completed;
        return tempObj;
      }
      return item;
    });
    setExperienceArr((prev) => experienceArrCopy);
  };
  //
  // Visible Or Not
  const visibleStyle = {
    maxHeight: 1000,
    visibility: "visible",
    opacity: 1,
    transition: "opacity .2s ease",
  };
  const notVisibleStyle = {
    maxHeight: 0,
    visibility: "hidden",
    opacity: 0,
    transition: "opacity .2s ease",
  };

  //
  // for adding a empty experience object
  const addExperience = () => {
    const currentObj = {
      name: "",
      company: " ",
      from: "",
      to: "",
      id: uniqid(),
      completed: false,
    };
    setExperienceArr((prev) => [...prev, currentObj]);
    setVisible((prev) => true);
  };
  //
  // this  function reset tha target experience object
  const resetExperience = (e) => {
    const experienceArrCopy = experienceArr.map((item) => {
      if (item.id === e.target.id) {
        const tempObj = {
          name: "",
          company: " ",
          from: "",
          to: "",
          id: uniqid(),
          completed: false,
        };
        return tempObj;
      }
      return item;
    });
    setExperienceArr((prev) => experienceArrCopy);
  };
  //
  // removing the experience object from state
  const removeExperience = (e) => {
    const experienceArrCopy = experienceArr.filter(
      (item) => item.id !== e.target.id
    );
    setExperienceArr((prev) => experienceArrCopy);
  };
  //
  // on change for out form
  const onChange = (e) => {
    const shallowCopy = experienceArr.map((item) => {
      if (item.id === e.target.id) {
        const newItem = { ...item };
        newItem[e.target.name] = e.target.value;
        return newItem;
      }
      return item;
    });
    setExperienceArr((prev) => shallowCopy);
  };
  //
  // Conditionally Rendering The Correct Dom Nodes If The App Is In Preview Mode
  if (props.working === true) {
    return (
      <div className="experiencePreview">
        <p>
          Experience<i className="gg-work-alt"></i>
        </p>
        <hr />
        <ul>
          {experienceArr.map((item) => {
            return (
              <li key={item.id}>
                {item.name} --- {item.from} _ {item.to}
                <ul>
                  <li>{item.company}</li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  // // If The App Is In Working  Mode
  else if (!props.working) {
    return (
      <>
        <div className="experienceParentDiv">
          <div
            className="experienceLogo"
            onClick={() => setVisible((prev) => !prev)}
          >
            <p>
              Experience <i className="gg-work-alt"></i>
            </p>
            {visible ? (
              <span style={{ marginLeft: 150 }} className="gg-arrow-up"></span>
            ) : (
              <span
                style={{ marginLeft: 150 }}
                className="gg-arrow-down"
              ></span>
            )}
          </div>
          {experienceArr.map((item) => {
            if (item.completed === false) {
              return (
                <div
                  className="experienceForm"
                  style={visible ? visibleStyle : notVisibleStyle}
                  key={item.id}
                  id={"addEducation"}
                >
                  <div>
                    <div>
                      <label>Title</label>
                      <input
                        name="name"
                        required
                        minLength="2"
                        onChange={onChange}
                        type="text"
                        value={item.title}
                        id={item.id}
                      />
                    </div>

                    <div>
                      <label>Company</label>
                      <input
                        name="company"
                        required
                        minLength="2"
                        onChange={onChange}
                        type="text"
                        value={item.title}
                        id={item.id}
                      />
                    </div>

                    <div>
                      <label>From</label>
                      <input
                        name="from"
                        required
                        minLength="2"
                        onChange={onChange}
                        type="date"
                        value={item.title}
                        id={item.id}
                      />
                    </div>

                    <div>
                      <label>To</label>
                      <input
                        name="to"
                        required
                        minLength="2"
                        onChange={onChange}
                        type="date"
                        value={item.title}
                        id={item.id}
                      />
                    </div>
                    <div>
                      <button id={item.id} onClick={toggleCompleted}>
                        Save
                      </button>
                      <button id={item.id} onClick={resetExperience}>
                        Reset
                      </button>
                      <button id={item.id} onClick={removeExperience}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            } else if (item.completed === true) {
              return (
                <>
                  <div
                    className={"experienceData"}
                    style={visible ? visibleStyle : notVisibleStyle}
                    key={item.id}
                  >
                    <div>
                      <p>Title: {item.name}</p>
                    </div>
                    <div>
                      <p>Company: {item.company}</p>
                    </div>
                    <div>
                      <p>From: {item.from}</p>
                    </div>
                    <div>
                      <p>To: {item.to}</p>
                    </div>
                    <div>
                      <button id={item.id} onClick={toggleCompleted}>
                        Change
                      </button>
                    </div>
                  </div>
                </>
              );
            }
          })}
          <div className="experienceHolder">
            <button onClick={addExperience}>Add Experience</button>
          </div>
        </div>
      </>
    );
  }
};
export default React.memo(Experience);
