import React from "react";
import "./Catigories.scss";

const Cotigories = ({ catigories, filterData }) => {
  return (
    <div className="btnContainer">
      {catigories.map((category, index) => (
        <button key={index} type="button" className="item-btn" onClick={() => filterData(category)}>{category}</button>
      ))}
    </div>
  );
};

export default Cotigories;
