import React from "react";
import "./css/Talk.css";
import  talk_1_img from "../static/talk_1.jpg"
import  talk_2_img from "../static/talk_2.jpg"


function Talk() {
  return (
    <div className="Talk">
      <h1>Talk to a..</h1>
      <div className="Talk_card">
        <div class="card card-1">
          <div class="top">
            <img
              src={talk_1_img}
              alt="material ui"
            />
          </div>
          <div class="bottom">
            <p>Covid Recovered Person</p>
          </div>
        </div>
        <div class="card card-1">
          <div class="top">
            <img
              src={talk_2_img}
              alt="material ui"
            />
          </div>
          <div class="bottom">
            <p>Stranger</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talk;
