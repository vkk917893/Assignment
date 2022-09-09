import React from "react";

import "./App.css";

const Deshboard = ({ name, number }) => {
  return (
    <div>
      <input placeholder="Name" value={name} />
      <br />
      <input placeholder="Number" value={number} />
      <br />
      <button>Sumit</button>
    </div>
  );
};

export default Deshboard;
