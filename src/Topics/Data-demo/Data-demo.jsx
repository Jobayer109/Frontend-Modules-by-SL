import React from "react";
import classes from "./Data-demo.module.css";

const DataDemo = () => {
  return (
    <div>
      <h2 style={{ margin: "2rem", textAlign: "center" }}>Simple form</h2>
      <form style={{ width: "500px", margin: "0 auto" }}>
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
