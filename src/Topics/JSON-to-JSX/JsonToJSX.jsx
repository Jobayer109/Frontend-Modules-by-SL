import React, { useState } from "react";
import classes from "./Json.module.css";

const formFields = {
  name: {
    type: "text",
    label: "Your name",
    placeholder: "Jobayer Ahmed",
  },
  email: {
    type: "email",
    label: "Your email",
    placeholder: "example@gmail.com",
  },
  password: {
    type: "password",
    label: "Your password",
    placeholder: "***********",
  },
  phone: {
    type: "number",
    label: "Phone Number",
    placeholder: "Phone number",
  },
};

const transformObject = (obj) => {
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = {
      ...obj[cur],
      value: "",
    };
    return acc;
  }, {});
};

// Make an array of object using "formData" object
const objToArrayFunc = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

const JsonToJSX = () => {
  const [formSate, setFormState] = useState(transformObject(formFields));
  const formData = objToArrayFunc(formSate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.keys(formSate).reduce((acc, cur) => {
      acc[cur] = formSate[cur].value;

      return acc;
    }, {});
    console.log(values);
  };

  const handleChange = (e) => {
    setFormState({
      ...formSate,
      [e.target.name]: {
        ...formSate[e.target.name],
        value: e.target.value,
      },
    });
  };

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          margin: "2rem",
          backgroundColor: "black",
          color: "white",
          padding: "10px",
        }}
      >
        JSON to JSX (Form)
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{ width: "400px", margin: "0 auto" }}
      >
        {formData.map(({ label, type, name, value, placeholder }, index) => (
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
          <button className={classes.button} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default JsonToJSX;
