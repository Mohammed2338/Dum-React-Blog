import React, { useContext } from "react";
import { ContextData } from "../BlogData/BlogContextApi";
import { Link } from "react-router-dom";
const Food = () => {
  const [FoodData] = useContext(ContextData);
  return (
    <>
      <h1>Food</h1>
      <div className="main-container">
        <div className="cont1">
          {FoodData.filter((item) => item.catg === "food")
            .slice(0, 7)
            .map((i, index) => {
              return (
                <div className="cards" key={index}>
                  <img src={i.img} alt="kjuashdfkask" />

                  <Link className="link" to={`/Dynamic/${i.head}`} state={i}>
                    <h2>{i.head}</h2>
                  </Link>
                  <p>{i.descr}</p>
                </div>
              );
            })}
        </div>

        <div className="cont2">
          <h1>Top Posts</h1>
          {FoodData.filter((remain) => remain.catg === "food")
            .slice(7, 15)
            .map((i, index) => {
              return (
                <div className="remainCards" key={index}>
                  <img src={i.img} alt="itsme" />
                  <Link className="link" to={`/Dynamic/${i.head}`} state={i}>
                    <h2>{i.head}</h2>
                  </Link>
                  <p>{i.descr}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Food;
