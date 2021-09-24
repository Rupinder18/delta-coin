import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";


function HeroSection() {


  
  return (
    <div  id="particle-canvas" className="hero-container">
      <h5>kjdkjhjfhdjshfkdskh</h5>
      
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
          buttonSize="btn--large">
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
