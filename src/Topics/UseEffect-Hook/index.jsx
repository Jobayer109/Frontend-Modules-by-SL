import React, { useEffect, useState } from "react";
import AjaxWithUseEffect from "./AJAX/Ajax";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [timeCount, setTimeCount] = useState(5);

  useEffect(() => {
    if (count === 5) {
      setLock(true);
    }
  }, [count]);

  useEffect(() => {
    let time = null;

    if (lock) {
      time = setInterval(() => {
        if (timeCount !== 0) {
          setTimeCount(timeCount - 1);
        } else {
          setCount(0);
          setLock(false);
          clearTimeout(time);
          return;
        }
      }, 1000);
    }
  }, [lock, timeCount]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>
      <button disabled={lock} onClick={() => setCount(count + 1)}>
        Increment {`(${timeCount})`}
      </button>
      <hr />
      <hr />
      <AjaxWithUseEffect />
    </div>
  );
};

export default UseEffectHook;
