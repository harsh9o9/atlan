import React, { useState } from "react";
import "./App.css";
import Output from "./components/Output";
import Workspace from "./components/Workspace";
import {
  data as userData,
  titles,
  marketManagers,
  nullPostalData,
} from "./data";

const App = () => {
  const [data, setData] = useState([]);
  function changeData(selectValue) {
    if (selectValue === "marketingManagers") {
      setData(marketManagers);
    } else if (selectValue === "postalNULL") {
      setData(nullPostalData);
    } else if (selectValue === "selectAll") {
      setData(userData);
    } else if (selectValue === "") {
      setData([]);
    }
  }
  return (
    <div className="container">
      <Workspace changeData={changeData} />
      <Output data={data} titles={titles} />
    </div>
  );
};

export default App;
