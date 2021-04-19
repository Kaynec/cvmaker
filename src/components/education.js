/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/education.scss";
import EducationValueOrInput from "./educationValueOrInput";
import uniqid from "uniqid";

const initialState = {
  schoolName: "",
  degree: " ",
  from: "",
  to: "",
  id: uniqid(),
  completed: false,
};
const Education = (props) => {
  const [visible, setVisible] = useState(true);
  const [educationArr, setEducationArr] = useState([initialState]);
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

  const toggleChildState = (e) => {
    const copy = educationArr.map((item) => {
      if (item.id === e.target.id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setEducationArr(copy);
  };

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
