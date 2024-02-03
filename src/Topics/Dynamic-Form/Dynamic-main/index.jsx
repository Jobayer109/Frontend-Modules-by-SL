import React, { useState } from "react";
import data from "./data";
import classes from "./main.module.css";

const objToArray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

const transformObject = (obj) => {
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = {
      ...data[cur],
      value: "",
    };
    return acc;
  }, {});
};

const DynamicMainForm = () => {
  const [formState, setFormState] = useState(transformObject(data));
  const formData = objToArray(formState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = Object.keys(formState).reduce((acc, cur) => {
      acc[cur] = formState[cur].value;
      return acc;
    }, {});
    console.log(values);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: {
        ...formState[e.target.name],
        value: e.target.type === "checkbox" ? e.target.checked : e.target.value,
      },
    });

    console.log(e.target.value);
  };

  return (
    <div className={classes.container}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Dynamic Form
      </h2>
      <form onSubmit={handleSubmit}>
        {formData.map(
          ({ type, name, label, value, options, placeholder }, index) => (
            <div key={index}>
              <label>{label}</label>
              {type === "select" ? (
                <select
                  className={classes.input}
                  name={name}
                  value={value}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    {label}
                  </option>
                  {options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : type === "checkbox" ? (
                <input
                  type={type}
                  name={name}
                  checked={value}
                  onChange={handleChange}
                />
              ) : (
                <input
                  className={classes.input}
                  value={value}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  onChange={handleChange}
                />
              )}
            </div>
          )
        )}

        <div>
          <button className={classes.button} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DynamicMainForm;
