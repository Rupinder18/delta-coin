import React from 'react';
import './Cards.css';


import './HeroSection.css';
import './Aboutus.css'
import kal from "../pablo.jpeg";
import './Who1.css'



function Who() {
  


  return (
    
<div class="lead-testimonial-cont">
    <h2 class="tstmnl-hndg">Quote</h2>
    <div class="lead-tstmnl-slider">
      <div class="lead-tstmnl-slide">
        <div class="lead-tstmnl-img">
        <img src={kal} alt="kalyan" />
        </div>
        <div class="lead-tstmnl-text-cont">
          <span class="lead-tstmnl-comment" style={{fontSize:"30px"}}>
          “All empires are created of blood and fire.” ...
          </span>
        
          <ul class="lead-tstmnl-nm-dsg">
            <li>Pablo Escobar</li>

            <li>Columbia</li>
          </ul>
        </div>
      </div>
      <div class="lead-tstmnl-slide">
        <div class="lead-tstmnl-img">
        <img src={kal} alt="kalyan" />
        </div>
        <div class="lead-tstmnl-text-cont">
          <span class="lead-tstmnl-comment">
            Sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </span>
          <ul class="lead-tstmnl-nm-dsg">
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="lead-tstmnl-slide">
        <div class="lead-tstmnl-img">
        <img src={kal} alt="kalyan" />
        </div>
        <div class="lead-tstmnl-text-cont">
          <span class="lead-tstmnl-comment">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate.
          </span>
          <ul class="lead-tstmnl-nm-dsg">
            <li>Kalyan Somalaraju</li>
            <li>Ux/Ui, Graphic &amp; Frond-end Designer</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
 
  );
}

export default Who;
