import React from "react";

const formData = {
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

const objToArrayFunc = (obj) => {
  const newArr = Object.keys(obj).map((data) => console.log(data));
  return newArr;
};

objToArrayFunc(formData);

const JsonToJSX = () => {
  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "2rem" }}>JSON to JSX</h3>
    </div>
  );
};

export default JsonToJSX;
