import React from 'react';
import './Cards.css';

import './HeroSection.css';
import './Pricing.css'


function Pricing() {
  return (
    <div class="background">
  <div class="container">
    <div class="panel pricing-table">
      
      <div class="pricing-plan">
        <img src="https://i.postimg.cc/C1v7h0V6/bulb.png" alt="" class="pricing-img"/>
        <h2 class="pricing-header">Output</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Custom domains</li>
          <li class="pricing-features-item">Sleeps after 30 mins of inactivity</li>
        </ul>
        <span class="pricing-price">-----</span>
        <a href="#/" class="pricing-button">Get now</a>
      </div>
      
      <div id='ultility' class="pricing-plan">
        <img src="https://i.postimg.cc/0ypzGCr8/1ut.png" alt="" class="pricing-img"/>
        <h2 class="pricing-header">Utility</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Never sleeps</li>
          <li class="pricing-features-item">Multiple workers for more powerful apps</li>
        </ul>
        <span class="pricing-price">----</span>
        <a href="#/" class="pricing-button">Get now</a>
      </div>
      
      <div class="pricing-plan">
        <img src="https://i.postimg.cc/5NrTNvV1/lock.png" alt="" class="pricing-img"/>
        <h2 class="pricing-header">Security</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Dedicated</li>
          <li class="pricing-features-item">Simple horizontal scalability</li>
        </ul>
        <span class="pricing-price">----</span>
        <a href="#/" class="pricing-button">Get now</a>
      </div>
      
    </div>
  </div>
</div>
   
    
  );
}

export default Pricing;
