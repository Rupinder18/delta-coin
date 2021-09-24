import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Coin from '../assets/logomain.png';

function HeroSection() {


  
  return (
    <div  id="particle-canvas" className="hero-container">
     
      {/* <img id='delta-img' src={Coin}/> */}
     
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
