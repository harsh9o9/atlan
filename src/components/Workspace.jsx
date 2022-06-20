import React, { useState } from "react";
import run from "../image/play-solid.svg";
import Header from "./Header";

const Workspace = ({ changeData }) => {
  const [value, setValue] = useState("SELECT * FROM customers");
  const handleChange = (e) => {
    changeData(e.target.value);
  };
  const handleClick = () => {
    changeData("selectAll");
  };
  return (
    <section className="workspace">
      <Header header="SQL Workspace" />
      <main className="workspace__queries">
        <select className="query__selector" onChange={handleChange}>
          <option value="">Choose Query...</option>
          <option value="marketingManagers">
            SELECT * FROM customers WHERE contactTitle = 'Marketing Manager';
          </option>
          <option value="postalNULL">
            SELECT * FROM customers WHERE postalCode IS NULL;
          </option>
          <option value="selectAll">SELECT * FROM customers ;</option>
        </select>
        <textarea
          className="queries__textarea"
          placeholder="Enter SQL Query..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
        <button className="img__container" onClick={handleClick}>
          <img src={run} alt="" />
        </button>
      </main>
    </section>
  );
};

export default Workspace;
