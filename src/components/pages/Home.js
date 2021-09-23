import React from 'react';
import '../../App.css';
//import Cards from '../Cards';
import HeroSection from '../HeroSection';


import Aboutus1 from '../Aboutus1';
import Pricing from '../Pricing'
//import Who from '../Who1'
import "../pages/home.css";


function Home() {
  
  return (
    <div className='home-div'>
      <HeroSection />
      {/* <Ice/> */}
      <Pricing/>
     
      <Aboutus1/>
    </div>
  );
}

export default Home;
