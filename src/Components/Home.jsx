import React from "react";
import "./Home.css";
import { useContext } from "react";
import { ContextData } from "../BlogData/BlogContextApi";
import { Link } from "react-router-dom";
const Home = () => {
  const [homeData] = useContext(ContextData);
  return (
    <div className="homeMainCont">
      <div className="topCont">
        <div className="topleft"></div>
        <div className="top">
          <div className="topRight1">
            <img
              src="https://e0.pxfuel.com/wallpapers/267/708/desktop-wallpaper-hrithik-roshan-bollywood-actor-bodybuilding-thumbnail.jpg"
              alt="asfdfss"
            />
          </div>
          <div className="topRight2">
            <img
              src="https://t3.ftcdn.net/jpg/04/29/35/62/360_F_429356296_CVQ5LkC6Pl55kUNLqLisVKgTw9vjyif1.jpg"
              alt="fsafd"
            />
          </div>
        </div>
      </div>
      <h1>The latest</h1>
      <div className="ParentLatest">
        {homeData
          .filter((item) => item.catg === "fitness")
          .slice(0, 3)
          .map((i, index) => {
            return (
              <div className="card1" key={index}>
                <img src={i.img} alt="fggsdfgdfg" />
                <Link className="link" to={`/Dynamic/${i.head}`} state={i}>
                  <h2>{i.head}</h2>
                </Link>
                <p>{i.descr}</p>
              </div>
            );
          })}
      </div>
      <div className="maindiv">
        <div className="div2">{}</div>
        <div className="div3"></div>
      </div>
      <h1>The Latest Articles</h1>
      <div className="latestAtricles">
        {homeData
          .filter((item) => item.catg === "food")
          .slice(0, 3)
          .map((i, index) => {
            return (
              <div className=" ArticleCard1" key={index}>
                <img src={i.img} alt="fggsdfgdfg" />
                <Link className="link" to={`/Dynamic/${i.head}`} state={i}>
                  <h2>{i.head}</h2>
                </Link>
                <p>{i.descr}</p>
              </div>
            );
          })}
      </div>
      <div className="topPsts">
        <h1>Top Posts</h1>
        <div className="TopPostsCont">
          {homeData
            .filter((item) => item.catg === "bollywood")
            .slice(0, 3)
            .map((i, index) => {
              return (
                <div className="topPostCard" key={index}>
                  <img src={i.img} alt="fasf" />
                  <Link className="link" to={`/Dynamic/${i.head}`} state={i}>
                    <h2>{i.head}</h2>
                  </Link>
                  <p>{i.descr}</p>
                </div>
              );
            })}
        </div>
      </div>

      <h1>The Latest Stories</h1>
      <div className="latestStories">
        {homeData
          .filter((item) => item.catg === "hollywood")
          .slice(0, 3)
          .map((i, index) => {
            return (
              <div className="card1" key={index}>
                <img src={i.img} alt="fggsdfgdfg" />
                <Link className="link" to={`/Dynamic/${i.head}`} state={i}>
                  <h2>{i.head}</h2>
                </Link>
                <p>{i.descr}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
