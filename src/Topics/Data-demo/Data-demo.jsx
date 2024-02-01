import React from "react";
import classes from "./Data-demo.module.css";

const DataDemo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
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
        Simple Traditional form
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{ width: "400px", margin: "0 auto" }}
      >
        <div>
          <label>Your name</label>
          <input
            className={classes.input}
            type="text"
            name="name"
            placeholder="name"
          />
        </div>
        <div>
          <label>Your email</label>
          <input
            className={classes.input}
            type="email"
            name="email"
            placeholder="email"
          />
        </div>
        <div>
          <label>Your password</label>
          <input
            className={classes.input}
            type="password"
            name="password"
            placeholder="********"
          />
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

export default DataDemo;
