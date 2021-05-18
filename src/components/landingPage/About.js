import React from "react";
import  about_img from "../static/About.png"
import {Button} from "@material-ui/core";
import "./css/About.css";

function About() {
  return (
    <div className="About">
      <div className="About_left">
        <div className="About_left_main">
          <p>GetWell where Healing, Teaching, Discovery come together.</p>
        </div>
        <div className="About_left_sub">
          <p>Don't Spend thousands on doctor consultation</p>
        </div>
        <div className="About_left_sub_2">
          <p>
            our passionate and verified doctors will do it for free or for 1% of
            the cost.
          </p>
        </div>
        <Button variant="contained" color="primary">
            Consult Now
        </Button>
      </div>
      <div className="About_right">
          <img src={about_img}></img>
      </div>
    </div>
  );
}

export default About;
