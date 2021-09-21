import React from 'react';
import '../../App.css';
//import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

import Aboutus1 from '../Aboutus1';
import Pricing from '../Pricing'
//import Who from '../Who1'
import Ice from '../Ice'


function Home() {
  
  return (
    <>
      <HeroSection />
      <Ice/>
      <Pricing/>
     
      <Aboutus1/>
      

      <Footer />
    </>
  );
}

export default Home;
