import React from 'react'
import '../price/price.css';
import qrImg from "../../assets/qr-link.svg";
const Price = () => {
    return (
        <div>
              <div className="lead-mid-content">
        <div className="text-content">
          <h1 className="first-text">1 USDT Equals</h1>
          <h1 className="second-text">73.5 DELTA-COIN</h1>
        </div>
        <div className="qr-code">
          <img className="qr-img" src={qrImg} alt="qr-link" />
        </div>
      </div>
        </div>
    )
}

export default Price
