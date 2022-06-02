import React from "react";
import "./home.css";
import Slider from "./slider/slider-items";
import SearchBox from "./searchBox/searchBox";
export const Home = () => {
  return (
    <div className="home-blackboard">
      <Slider />
      <SearchBox />
    </div>
  );
};
