import { React, useState } from "react";
import classes from "./Json.module.css";
import data from "./data.js";

const transformObject = (obj) => {
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = {
      ...data[cur],
      value: "",
    };

    return acc;
  }, {});
};

const createObjToArray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

const AdvanceForm = () => {
  const [formState, setFormState] = useState(transformObject(data));
  const [selected, setSelected] = useState("");

  const formData = createObjToArray(formState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.keys(formState).reduce((acc, key) => {
      acc[key] = formState[key].value;
      return acc;
    }, {});
    console.log(values);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: {
        ...formState[e.target.name],
        value: e.target.value,
      },
    });
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className={classes.positioned}>
      <h2>Advance Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        {formData.map(({ name, type, value, placeholder, label }, index) => (
          <div key={index}>
            <label>{label}</label>
            <input
              className={classes.input}
              type={type}
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={handleChange}
            />
          </div>
        ))}
        <div>
          <label style={{ fontSize: "1.15rem" }}> Select your role</label>
          <select name="name" value={selected} onChange={handleSelect}>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full-stack Developer">Full-stack Developer</option>
          </select>
        </div>

        <div>
          <button className={classes.button} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdvanceForm;
