import React from "react";
import classes from "./P1.module.css";
import data from "./data";

const makeObjectToArray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

const DynamicPracticeOne = () => {
  const formData = makeObjectToArray(data);
  return (
    <div className={classes.container}>
      <h2>Dynamic Form: Practice One</h2>
      <form>{formData.map({})}</form>
    </div>
  );
};

export default DynamicPracticeOne;
