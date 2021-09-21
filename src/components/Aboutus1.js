import React from 'react';
import './Cards.css';


import './HeroSection.css';
import './Aboutus.css'
import ReactPlayer from 'react-player/youtube'
function Aboutus1() {
  return (
    <body>
    <div class="about-section">
      <div class="inner-width">
        <h1 style={{color:"white"}}>About Us</h1>
        <div class="border"></div>
        <div class="about-section-row">
          
            <div class="about">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga provident ea hic, neque amet sequi temporibus iure aliquid placeat inventore. Quae dolores dolore, cum nulla quas ipsum facere maxime, necessitatibus!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga provident ea hic, neque amet sequi temporibus iure aliquid placeat inventore. Quae dolores dolore, cum nulla quas ipsum facere maxime, necessitatibus!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga provident ea hic, neque amet sequi temporibus iure aliquid placeat inventore. Quae dolores dolore, cum nulla quas ipsum facere maxime, necessitatibus!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga provident ea hic, neque amet sequi temporibus iure aliquid placeat inventore. Quae dolores dolore, cum nulla quas ipsum facere maxime, necessitatibus!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga provident ea hic, neque amet sequi temporibus iure aliquid placeat inventore. Quae dolores dolore, cum nulla quas ipsum facere maxime, necessitatibus!
              </p>
            
            </div>
          
          <div class="about-section-col" >
          <ReactPlayer
          width="100%" 
          
                url="https://www.youtube.com/watch?v=YJB7Y727orc&list=RDGMEM916WJxafRUGgOvd6dVJkeQVMYJB7Y727orc&start_radio=1"
                light="https://i.postimg.cc/rFnpghLT/history-of-the-piano.jpg"
                
                // other props
            />
          </div>
        </div>
        
      </div>
      <div className='btn-abt'>
            <a href='http://localhost:3000/'>Read More</a>
            
            </div>
    </div>
</body>
  );
}

export default Aboutus1;
