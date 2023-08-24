import React, { useContext } from "react";
import { ContextData } from "../BlogData/BlogContextApi";
import { Link } from "react-router-dom";
const Fitness = () => {
  const [FitnessData] = useContext(ContextData);
  return (
    <>
      <h1>Fitness</h1>
      <div className="main-container">
        <div className="cont1">
          {FitnessData.filter((item) => item.catg === "fitness")
            .slice(0, 7)
            .map((i,index) => {
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
          {FitnessData.filter((remain) => remain.catg === "fitness")
            .slice(7, 15)
            .map((i,index) => {
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

export default Fitness;
