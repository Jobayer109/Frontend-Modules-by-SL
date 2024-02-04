import React, { useState } from "react";
import classes from "./P1.module.css";
import data from "./data";

const makeObjectToArray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

const transferObject = (obj) => {
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = {
      ...data[cur],
      value: "",
    };
    return acc;
  }, {});
};

const DynamicPracticeOne = () => {
  const [formState, setFormState] = useState(transferObject(data));
  const formData = makeObjectToArray(formState);
  console.log(formState);

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
  };

  return (
    <div className={classes.container}>
      <h2>Dynamic Form: Practice One</h2>
      <form onSubmit={handleSubmit}>
        {formData.map(
          ({ type, name, label, value, placeholder, options }, index) => (
            <div key={index}>
              <label>{label}</label>
              {type === "select" ? (
                <select
                  type={type}
                  value={value}
                  name={name}
                  onChange={handleChange}
                >
                  {options.map((option, indx) => (
                    <option key={indx}>{option}</option>
                  ))}
                </select>
              ) : type === "checkbox" ? (
                <input
                  type={type}
                  value={value}
                  name={name}
                  onChange={handleChange}
                  placeholder={placeholder}
                />
              ) : (
                <input
                  className={classes.input}
                  type={type}
                  name={name}
                  value={value}
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

export default DynamicPracticeOne;
