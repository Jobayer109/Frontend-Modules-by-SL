import React, { useEffect, useState } from "react";

const AjaxWithUseEffect = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .catch((data) => console.log(data));
  }, []);

  return (
    <div>
      <h2>AJAX With useEffect</h2>
    </div>
  );
};

export default AjaxWithUseEffect;
