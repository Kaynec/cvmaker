import React, { useState } from "react";
import "../styles/skills.scss";
import uniqid from "uniqid";
const Skills = (props) => {
  const [skillArr, setSkillArr] = useState(() => []);
  const [skiil, setSkill] = useState("");
  const handleChange = (e) => {
    setSkill((prev) => e.target.value);
  };
  const removeSkill = (e) => {
    setSkillArr((currentArr) => {
      return currentArr.filter((item) => item.id !== e.target.parentElement.id);
    });
  };
  const handleSubmit = (e) => {
    const currentTask = {
      name: skiil,
      id: uniqid(),
    };
    setSkillArr((prev) => [...prev, currentTask]);
    setSkill((prev) => "");
  };

  if (props.working === true) {
    return (
      <div className="previewSkills">
        <p>
          Skills <i className="gg-pen"></i>
        </p>
        <div>
          {skillArr.map((item) => {
            return <span key={item.id}>{item.name}</span>;
          })}
        </div>
      </div>
    );
  } else if (props.working === false) {
    return (
      <>
        <div className="skillForm">
          <p>
            Skills<i className="gg-pen"></i>
          </p>
          <div>
            <label htmlFor="skillForm"> Add A Skill </label>
            <input
              onChange={handleChange}
              type="text"
              id="skillForm"
              minLength={2}
              value={skiil}
            />
            <button onClick={handleSubmit}>Add</button>
          </div>
        </div>

        <div className="skillData">
          {skillArr.map((item) => {
            return (
              <div key={item.id} id={item.id}>
                {item.name} <i onClick={removeSkill} className="gg-trash"></i>
              </div>
            );
          })}
        </div>
      </>
    );
  }
};
export default React.memo(Skills);
