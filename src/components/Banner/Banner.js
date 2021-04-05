import React, { useState, useEffect } from "react";
import "./Banner.css";
import Navbar from '../Navbar/Navbar'
function Banner() {
  return (
    <>
    <div className="banner container-fluid">
      <div class="row">
        <div className="banner_info offset-lg-1 offset-md-1 offset-sm-1 col-lg-5 col-md-7 col-sm-9 col-9 offset-1">
          <h1 className="banner_title">Money Heist</h1>
          <div className="">
            <button className="banner_button">Play</button>
            <button className="banner_button">More Info</button>
          </div>
          <p className="banner_description">
            A criminal mastermind who goes by "The Professor" has a plan to pull
            off the biggest heist in recorded history -- to print billions of
            euros in the Royal Mint of Spain.
          </p>
        </div>
      </div>
      <div className="banner_fade"></div>
    </div>
    </>
  );
}

export default Banner;
