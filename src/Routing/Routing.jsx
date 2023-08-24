import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Bollywood from "../Components/Bollywood";
import Hollywood from "../Components/Hollywood";
import Fitness from "../Components/Fitness";
import Food from "../Components/Food";
import Technology from "../Components/Technology";

// import NavBar from "./NavBar";
import NavbarMenu from "./NavvBar";
import { ProvideData } from "../BlogData/BlogContextApi";
import Dynamic from "../DynamicData/Dynamic";
import Footer from "../Components/Footer";
const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <ProvideData>
          {/* <NavBar /> */}
          <NavbarMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/Dynamic/:id" element={<Dynamic />} />
            <Route path="/hollywood" element={<Hollywood />} />

            <Route path="/fitness" element={<Fitness />} />

            <Route path="/food" element={<Food />} />

            <Route path="/technology" element={<Technology />} />
          </Routes>
        </ProvideData>

      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default Routing;
