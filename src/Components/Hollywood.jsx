import React, { useContext } from "react";
import { ContextData } from "../BlogData/BlogContextApi";
import { Link } from "react-router-dom";

const Hollywood = () => {
  const [HollyData] = useContext(ContextData);
  return (
    <>
      <h1>Hollywood</h1>
      <div className="main-container">
        <div className="cont1">
          {HollyData.filter((item) => item.catg === "hollywood")
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
          {HollyData.filter((remain) => remain.catg === "hollywood")
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

export default Hollywood;
