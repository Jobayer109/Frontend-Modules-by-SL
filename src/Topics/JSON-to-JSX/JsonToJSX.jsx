import React from "react";

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
};

// Make an array of object using "formData" object
const objToArrayFunc = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e.target.value);
};

const JsonToJSX = () => {
  const formData = objToArrayFunc(formFields);
  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
        JSON to JSX (Form)
      </h3>
      <form onSubmit={handleSubmit}>
        {formData.map(({ label, type, name, placeholder }, index) => (
          <div key={index}>
            <label>{label}</label>
            <input type={type} name={name} placeholder={placeholder} />
          </div>
        ))}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default JsonToJSX;
