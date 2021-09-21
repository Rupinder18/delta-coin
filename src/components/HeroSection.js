import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import img from "../assets/Delta_img_home_bg.jpeg";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <img src={img} alt="delta-coin" className="delta-img-bg" /> */}
      {/* <video src="/videos/ledger1.mp4" autoPlay loop muted /> */}
      {/* <h1 style={{ fontFamily: "serif" }}> DELTA Coin</h1> */}
      <p>
        "Whatever happens to economy, cryptocurrencies are gaining ground and
        more respect."{" "}
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
