import React from "react";
import data from "./data.js";

const createObjToArray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

const AdvanceForm = () => {
  const formData = createObjToArray(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };

  return (
    <div>
      <h2>Advance Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        {formData.map(({ name, type, placeholder, label }, index) => (
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

export default AdvanceForm;
