import React from "react";
import "./css/Covidsection.css";
import talk_3_img from "../static/Doctor.jpg";
import talk_2_img from "../static/vacine.jpg";
import talk_1_img from "../static/covid_3.png";

function Covidsection() {
  return (
    <div className="Covid">
      <div className="Covid_head">
        <h1>Covid-19 Helping Hands</h1>
      </div>
        <div className="Covid_card">
          <div class="card card-1">
            <div class="top">
              <img src={talk_1_img} alt="material ui" />
            </div>
            <div class="bottom">
              <p>Precatutios</p>
            </div>
          </div>
          <div class="card card-1">
            <div class="top">
              <img src={talk_2_img} alt="material ui" />
            </div>
            <div class="bottom">
              <p>Vaccination</p>
            </div>
          </div>
          <div class="card card-1">
            <div class="top">
              <img src={talk_3_img} alt="material ui" />
            </div>
            <div class="bottom">
              <p>Doctor Consult</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Covidsection;
