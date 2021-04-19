/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/education.scss";
import EducationValueOrInput from "./educationValueOrInput";
import uniqid from "uniqid";
// initial state object
const initialState = {
  schoolName: "",
  degree: " ",
  from: "",
  to: "",
  id: uniqid(),
  completed: false,
};
const Education = (props) => {
  // state for visibility and the array that holds education objects
  const [visible, setVisible] = useState(true);
  const [educationArr, setEducationArr] = useState([initialState]);
  // use this on change
  const onChildChange = (e) => {
    const copy = educationArr.map((item) => {
      if (item.id === e.target.id) {
        const newItem = { ...item };
        newItem[e.target.name] = e.target.value;
        return newItem;
      }

      return item;
    });

    setEducationArr((prev) => copy);
  };
  // change state of child
  const toggleChildState = (e) => {
    const copy = educationArr.map((item) => {
      if (item.id === e.target.id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setEducationArr(copy);
  };
  // reset childs data
  const resetChildData = (e) => {
    const copy = educationArr.map((item) => {
      if (item.id === e.target.id) {
        const newItem = {
          schoolName: "",
          degree: " ",
          from: "",
          to: "",
          id: uniqid(),
          completed: false,
        };
        return newItem;
      }
      return item;
    });

    setEducationArr(copy);
  };

  const removeChildFromState = (e) => {
    const copy = educationArr.filter((item) => item.id !== e.target.id);
    setEducationArr(copy);
  };
  // add a new education object
  const incrementState = () => {
    setVisible((prev) => true);
    const tempObj = {
      schoolName: "",
      degree: " ",
      from: "",
      to: "",
      id: uniqid(),
      completed: false,
    };

    setEducationArr((prev) => [...prev, tempObj]);
  };
  // if app is working mode
  if (props.working === true) {
    return (
      <>
        <div className="educationPreview">
          <p>
            Education <i className="gg-notes"></i>
          </p>
          <hr />
          <ul>
            {educationArr.map((item) => {
              return (
                <li key={item.id}>
                  {item.schoolName} --- {item.from} _ {item.to}
                  <ul>
                    <li>{item.degree}</li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  } else {
    // if app is in preview mode
    return (
      <>
        <div id="education">
          <div
            onClick={() => {
              setVisible((prev) => !prev);
            }}
          >
            <p>
              Education <i className="gg-notes"></i>
            </p>
            {visible ? (
              <span style={{ marginLeft: 150 }} className="gg-arrow-up"></span>
            ) : (
              <span style={{ marginLeft: 150 }} class="gg-arrow-down"></span>
            )}
          </div>
          {/* the child components that renders everything  */}
          <EducationValueOrInput
            className
            educationArray={educationArr}
            onChange={onChildChange}
            toggleStateCompleted={toggleChildState}
            resetChildState={resetChildData}
            removeChild={removeChildFromState}
            visible={visible}
          />

          <div id="addEducation">
            <button onClick={incrementState}> Add Education</button>
          </div>
        </div>
      </>
    );
  }
};
//   educationRef={educationState}
export default React.memo(Education);
