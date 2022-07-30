import React, { useState } from "react";
import Cotigories from "../Catigories/Cotigories";
import Menu from "../Menu/Menu";
import data from "../data";
import "./Main.scss";

const allCategories = ['all', ...new Set(data.map(item => item.category))];
// console.log(allCategories);

const Main = () => {
  const [infoData, setInfoData] = useState(data);
  const [catigories, setCatigories] = useState(allCategories);

  const filterData = (category) => {
    if (category === "all") {
      setInfoData(data);
      return;
    }

    const newData = data.filter((item) => item.category === category);
    setInfoData(newData);
  };

  return (
    <>
      <section className="container">
        <div className="menuContainer">
          <div className="menuBox">
            <h1>Our Menu</h1>
            <div className="underline"></div>
          </div>
        </div>
        <Cotigories catigories={catigories} filterData={filterData} />
        <Menu dataInfomation={infoData} />
      </section>
    </>
  );
};

export default Main;
