import React from 'react';
import "../staking/staking.css";
import Logo from "../../assets/logo-primary.png";
const Staking = () => {
    return (
        <div className="staking-main-div">
          <div className='staking-container'>
              <img src={Logo}/>
              <div className='fafaicons'>
                  <a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-youtube-square" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
              </div>
             <div className='ss-link'>
             <a id='s-link' href="#">WWW.WAY2HAPPINESS.INFO</a>
             </div>
             <div className='ss-link' >
             <a id='s-link' href="#">WHITEPAPER</a>
             </div>
             <div className='join'>
                 <h1>JOIN</h1>
                 <input type="text" placeholder="HEllo"></input>
             </div>
             <div className='staking-btn'>
                 <button>RESET</button>
                 <button>STAKE</button>
             </div>
             <div className='stat' >
                 <h1>STATISTICS</h1>
                 <p>SMART CONTRACT INFO</p>
                 <div className='stat-link'>
                     <div id="stat-one">
                         <label>Total Circulation</label><br/>
                         <label>Market Circulation</label><br/>
                         <label>HAPPINESS (HPNS) COIN</label><br/>
                         <label>Amount Earned By Members</label><br/>
                         <label>Referred By</label>
                     </div>
                     <div id='stat-two'>
                     <label>51.51 CR</label><br/>
                         <label>10 CR</label><br/>
                         <label><a href="">Token Address</a></label><br/>
                         <label>-</label><br/>
                         <label>-</label>
                     </div>
                 </div>
             </div>
             <div className='stat' >
                
                 <p>PERSONAL STATISTIC</p>
                 <div className='stat-link'>
                     <div id="stat-one">
                         <label>Your Address</label><br/>
                         <label>Staking Income</label><br/>
                         <label>Referral Income</label><br/>
                         <label>Level On Staking</label><br/>
                         <label>Withdrawable Income</label>
                     </div>
                     <div id='stat-two'>
                     <label>-</label><br/>
                         <label>-</label><br/>
                         <label><a href="">Token Address</a></label><br/>
                         <label>-</label><br/>
                         <label>-</label>
                     </div>
                    
                 </div>
                <div className='btn-with'>
                <button>Withdraw</button>
                </div>
             </div>
             <div className='stat' >
                
                <p>STATISTIC</p>
                <div className='stat-link'>
                    <div id="stat-one">
                        <label>Total Amount Of Staked HPNS</label><br/>
                        <label>Total Amount Of Received HPNS</label><br/>
                        <label>Downline Bussiness</label><br/>
                       
                    </div>
                    <div id='stat-two'>
                    <label>-</label><br/>
                        <label>-</label><br/>
                        <label>-</label><br/>
                       
                    </div>
                   
                </div>
               
            </div>
            <div id='view' className='stat' >
                
                <p>LEVEL VIEW</p> 
            </div>
            <div className='stat' >
                
                <p>ORGANIZATION</p>
                <div className='stat-link'>
                    <div id="stat-one">
                        <label>Invitation Link</label><br/>
                        <label>Personal Invited Partners</label><br/>
                        
                       
                    </div>
                    <div id='stat-two'>
                    <label id="label-btn"><button id="label-btn" >Copy</button></label><br/>
                        <label>-</label><br/>
                        
                       
                    </div>
                   
                </div>
               
            </div>
            <div className='stat' >
                
                <p>PROMOTIONAL VIDEOS</p>
                <div className='stat-link'>
                    <div id="stat-one">
                        <label><i id='last-div' class="fa fa-youtube-square" aria-hidden="true"></i></label><br/>
                        <label><i id='last-div' class="fa fa-youtube-square" aria-hidden="true"></i></label><br/>
                        <label><i id='last-div' class="fa fa-youtube-square" aria-hidden="true"></i></label><br/>
                        <label><i id='last-div' class="fa fa-youtube-square" aria-hidden="true"></i></label><br/>
                        <label><i id='last-div' class="fa fa-youtube-square" aria-hidden="true"></i></label><br/>
                        <label><i id='last-div' class="fa fa-youtube-square" aria-hidden="true"></i></label><br/>
                        <label><i id='last-div' class="fa fa-youtube-square" aria-hidden="true"></i></label>
                    </div>
                    <div id='stat-two'>
                    <label>link one here you want to visit</label><br/>
                        <label>link one here you want to visit</label><br/>
                        <label>link one here you want to visit</label><br/>
                        <label>link one here you want to visit</label><br/>
                        <label>link one here you want to visit</label><br/>
                        <label>link one here you want to visit</label><br/>
                        <label>link one here you want to visit</label><br/>
                        <label>link one here you want to visit</label>
                       
                    </div>
                   
                </div>
              
            </div>
            <div id="view-two" className='stat' >
                
                <p>EXCHANGES ON WHICH HPNS IS TRADING SUCESSFULLY</p> 
                <label id='view-three' >HAPPINESS(HPNS) IS TRADING LIVE ON DIFFERENT EXCHANGES -:</label>
            </div>
          </div>
        </div>
    )
}

export default Staking
