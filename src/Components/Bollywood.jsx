import React, { useContext } from "react";
import "./Bolly.css";
//  dta ku access karna hai context wala
import { ContextData } from "../BlogData/BlogContextApi";
import { Link } from "react-router-dom";
const Bollywood = () => {
  //  ab access karna hai isku context data se
  //  bollywoos ku array main converrt karna [ ] laga k
   const [Bollydata] = useContext(ContextData);
  return (
    <>
      <h1>Bollywood</h1>
      <div className="main-container">
        <div className="cont1">
          {Bollydata.filter((item) => item.catg === "bollywood")
            .slice(0, 8)
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
          {Bollydata.filter((remain) => remain.catg === "bollywood")
            .slice(8, 15)
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

export default Bollywood;
