import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "./img.png";
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import clap from "./rythm-1.svg";
import share from "./share.png.svg";
const Dynamic = () => {
  const Navigate = useNavigate();
  const locate = useLocation().state;
  return (
    <>
      <div className="mainDiv">
        <h3>5 ways to Animate a React App</h3>
        <div className="logocard">
          <img src={logo} alt="fsfs" />
          <h3>Mohammed Fasiuddin</h3>
        </div>
        <div className="icons2">
          <FaFacebookSquare className="icons" />
          <FaInstagram className="icons" />
          <FaTwitter className="icons" />
          <FaYoutube className="icons" />
        </div>
        <div className="sticky-claps">
          <img src={clap} alt="asdfasdf" />
          <img src={share} alt="sdfa" />
        </div>
        <div className="dynamic">
          <img src={locate.img} alt="asdfsafasffd" />
          <h2>{locate.head} </h2>
          <p>{locate.descr}</p>
        </div>
        <div className="GoBackBtn">
          <button onClick={() => Navigate(-1)}>Go back</button>
        </div>
      </div>
    </>
  );
};

export default Dynamic;
