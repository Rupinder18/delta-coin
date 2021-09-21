import React from "react";
import "./Cards.css";
import { useState } from "react";
import { Button } from "./Button";
import qrImg from "../assets/qr-link.png";

import "./HeroSection.css";
import "./Aboutus.css";

import "./Ice.css";
function ButtonIncrement(props) {
  return (
    <button style={{ marginLeft: ".5rem" }} onClick={props.onClickFunc}>
      ^
    </button>
  );
}
function ButtonDecrement(props) {
  return (
    <button style={{ marginLeft: ".5rem" }} onClick={props.onClickFunc}>
      v
    </button>
  );
}
function Display(props) {
  return (
    <span style={{ fontSize: "30px" }}>
      <input
        type="text"
        name=" {props.message}"
        placeholder={props.message}
        style={{ fontSize: "30px" }}
      />
    </span>
  );
}

function Ice() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 0) {
    decrementCounter = () => setCounter(1);
  }

  return (
    <div class="lead-testimonial-cont">
      {/* <div class="row">
      <div class="col-25" style={{fontSize:"30px"}}>
        <label for="fname">1 USDT Equals</label>
        <p style={{color:"blue"}}>73.5 DELTA-COIN</p>
        <input type="text" id="fname" name="firstname" placeholder=""/>
      </div>
     
    </div> */}
      <div className="lead-mid-content">
        <div className="text-content">
          <h1 className="first-text">1 USDT Equals</h1>
          <h1 className="second-text">73.5 DELTA-COIN</h1>
        </div>
        <div className="qr-code">
          <img className="qr-img" src={qrImg} alt="qr-link" />
        </div>
      </div>
      {/* <div class="col-75">
      
      <div class="col-25">
      <label style={{ marginLeft: '.5rem',fontSize:"30px"}}>
    Value
    <Display message={counter}/>
    <ButtonIncrement onClickFunc={incrementCounter}/>
      <ButtonDecrement onClickFunc={decrementCounter}/>
    </label>
      </div>

      <div class="col-25">
      <label style={{ marginLeft: '.5rem',fontSize:"30px"}}>
    Value
    <Display message={counter}/>
    <ButtonIncrement onClickFunc={incrementCounter}/>
      <ButtonDecrement onClickFunc={decrementCounter}/>
    </label>
      </div>


      <div class="col-25">
      <label style={{ marginLeft: '.5rem',fontSize:"30px"}}>
   Receiving  Address (BEP20)
    <input type="text" id="fname" name="firstname" placeholder="kalyansomalaraju@gmail.com" style={{width:"550px"}}/>
     
    </label>
      </div>

      <div class="col-25" style={{alignContent:"flex-end"}}>
      <label>
          
   
    </label>
      </div>

      <div class="col-25" style={{alignContent:"flex-end"}}>
      <label style={{color:"white"}}>
          abc
      
    </label>
      </div>
      <div class="col-25" style={{alignContent:"flex-end"}}>
      <label>
         
    <a href="localhost:3000">  <Button buttonStyle='btn--outline'>Buy Now</Button></a>
    </label>
      </div>
     
     
     
      </div> */}
    </div>
  );
}

export default Ice;
