import React from 'react';
import './Cards.css';
import ReactPlayer from 'react-player/youtube'
import './HeroSection.css';

function Cards() {
  return (
    <body>
    <div class="about-section">
      <div class="inner-width">
        <h1 style={{color:"white"}}>Gallery</h1>
        <div class="border"></div>
        <div class="about-section-row">
        <div class="about-section-col" >
        <ReactPlayer
          width="100%"
          
                url="https://www.youtube.com/watch?v=YJB7Y727orc&list=RDGMEM916WJxafRUGgOvd6dVJkeQVMYJB7Y727orc&start_radio=1"
                light="https://i.postimg.cc/rFnpghLT/history-of-the-piano.jpg"
                
                // other props
            />
          </div>
          <div class="about-section-col" >
          <ReactPlayer
          width="100%"
          
                url="https://www.youtube.com/watch?v=YJB7Y727orc&list=RDGMEM916WJxafRUGgOvd6dVJkeQVMYJB7Y727orc&start_radio=1"
                light="https://i.postimg.cc/rFnpghLT/history-of-the-piano.jpg"
                
                // other props
            />
          </div>
          <div class="about-section-col" >
          <ReactPlayer
          width="100%"
          
                url="https://www.youtube.com/watch?v=YJB7Y727orc&list=RDGMEM916WJxafRUGgOvd6dVJkeQVMYJB7Y727orc&start_radio=1"
                light="https://i.postimg.cc/rFnpghLT/history-of-the-piano.jpg"
                
                // other props
            />
          </div>
          <div class="about-section-col" >
          <ReactPlayer
          width="100%"
          
                url="https://www.youtube.com/watch?v=YJB7Y727orc&list=RDGMEM916WJxafRUGgOvd6dVJkeQVMYJB7Y727orc&start_radio=1"
                light="https://i.postimg.cc/rFnpghLT/history-of-the-piano.jpg"
                
                // other props
            />
          </div>
       
          <div class="about-section-col" >
         
         
             <ReactPlayer
          width="100%"
                url="https://www.youtube.com/watch?v=YJB7Y727orc&list=RDGMEM916WJxafRUGgOvd6dVJkeQVMYJB7Y727orc&start_radio=1"
                light="https://i.postimg.cc/rFnpghLT/history-of-the-piano.jpg"
                
                // other props
            />
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
    </div>
</body>
  );
}

export default Cards;
