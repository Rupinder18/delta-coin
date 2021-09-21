import React from 'react';
import './Footer.css';

import './HeroSection.css';
import kal from "../pablo.jpeg"

function Footer() {
  return (

<div class="footer">
  <div class="contain">
  <div class="col">
    <h1>Company</h1>
    <ul>
      <li>About</li>
      <li>Mission</li>
      <li>Services</li>
      <li>Social</li>
      <li>Get in touch</li>
    </ul>
  </div>
  <div class="col">
    <h1>Products</h1>
    <ul>
      <li>About</li>
      <li>Mission</li>
      <li>Services</li>
      <li>Social</li>
      <li>Get in touch</li>
    </ul>
  </div>
  <div class="col">
    <h1>Accounts</h1>
    <ul>
      <li>About</li>
      <li>Mission</li>
      <li>Services</li>
      <li>Social</li>
      <li>Get in touch</li>
    </ul>
  </div>
  <div class="col">
    <h1>Resources</h1>
    <ul>
      <li>Webmail</li>
      <li>Redeem code</li>
      <li>WHOIS lookup</li>
      <li>Site map</li>
      <li>Web templates</li>
      <li>Email templates</li>
    </ul>
  </div>
  <div class="col">
    <h1>Support</h1>
    <ul>
      <li>Contact us</li>
      <li>Web chat</li>
      <li>Open ticket</li>
    </ul>
  </div>
  {/* <div class="col social" >
    <h1>Social</h1>
    <img src={kal} alt="kalyan" style={{width:"50px"}}/>
    <img src={kal} alt="kalyan" style={{width:"50px"}}/>
    <img src={kal} alt="kalyan" style={{width:"50px"}}/>
  </div> */}
<div>

</div>
</div>
<div className='footer-last-div'>
  <a id='footer-a' href="#"><i id="footer-logo" class="fa fa-instagram" aria-hidden="true"></i></a>
  <a id='footer-a' href="#"><i id="footer-logo" class="fa fa-twitter" aria-hidden="true"></i></a>
  <a id='footer-a' href="#"><i i id="footer-logo" class="fa fa-facebook-official" aria-hidden="true"></i></a>

</div>
<p className='footer-p'>© 2021 Copyright by Deltacoin. All right reserved.</p>
</div>




  );
}

export default Footer;
