import React from "react";
import hero_img from "../static/Hero.png"
import "./css/Herosection.css";

function Herosection() {
  return (
    <div className="Hero">
      <div className="Hero_img">
        <img src={hero_img}/>
      </div>
      <div className="Hero_text">
        <div className="Hero_text_main">
          <h1>About The Platform</h1>
        </div>
        <div className="Hero_text_sub">
          <p>
            GetWell is the all in one solution for people who can't consult to
            the doctor due to the panedemic with very minimal or no fees at all.
            We know these are very tough times. So, we also have mental care
            section where people can talk with others with similar interests so
            that everyone has someone to talk to.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
