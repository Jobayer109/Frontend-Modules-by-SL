import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  useEffect(() => {
    if (count === 5) {
      setLock(true);
    }
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>
      <button disabled={lock} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default UseEffectHook;
