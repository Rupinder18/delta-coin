import React from 'react';
import '../Contact/Contact.css';
import Logo from "../../assets/Delta_coin_logo_nobg.png";
const Contact = () => {
    return (
        <div className="contact-main-div">
             <div class="bubbles">
      <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    
  </div>
          <div className="main-container">
          <label id='contact-hddr'>Contact</label>
          <h2>Get In Touch</h2>
          <div id="reach">Reach out to us & we will respond as soon as we can.</div>
          </div>
          <div className='form-div'>
              <div id='form-one'>
                  {/* <input type="text" placeholder={<p>'what is your name?'+<sup>*</sup></p>}></input> */}
                  <input type="text" placeholder="What is your name?"></input>
                  <input type="text" placeholder="Your email address"></input>
                  <input type="text" placeholder="Subject"></input>
              </div>
              <div id='form-two'>
                  <textarea placeholder="Write your message here" rows="8"  ></textarea>
                 <div>
                 <button className='form-btn'>Send a Message</button>
                 </div>
              </div>
          </div>
          <div className='contact-footer'>
             <img src={Logo}/>
             <p>info@DeltaCoin.info</p>
             <div className='fafaicons'>
                  <a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-youtube-square" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
              </div>
              <p>© 2021 Copyright by DeltaCoin. All right reserved.</p>
          </div>
        </div>
    )
}

export default Contact
