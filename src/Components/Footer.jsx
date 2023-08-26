import React from 'react'
import styles from "./Footer.module.css";
import InvestPe from "../Resources/InvestPe.PNG";
import Googlestore from "../Resources/GooglePlay.PNG";
import social from "../Resources/social.PNG";
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.Footer}>
        <div className={styles.container}> 
          <div>
            <div style={{textAlign:"left"}}>
              <img src={InvestPe} alt="" />
            </div>
          </div>
          <div className={styles.contactus}>
            <div>
              <h4>Contact Us</h4>
              <p style={{margin:0, color:"gray"}}>8089225625</p>
              <p style={{margin:0, color:"gray"}}>contact@chhotastock.com</p>
            </div>
            <div>
              <h4>Company</h4>
              <p style={{margin:0, color:"gray"}}>About Us</p>
              <p style={{margin:0, color:"gray"}}>Privacy policy</p>
              <p style={{margin:0, color:"gray"}}>Terms & conditions</p>
            </div>
            <div>
              <h4>About Us</h4>
              <p style={{margin:0, color:"gray"}}>Home</p>
              <p style={{margin:0, color:"gray"}}>Gateway</p>
              <p style={{margin:0, color:"gray"}}>Blog</p>
            </div>
            <div>
              <h4>Download the App Now !</h4>
              <img src={Googlestore} alt="" />
            </div>
          </div>
          <div style={{textAlign:"left"}}>
              <h3>Find Us On</h3>
              <img src={social} alt="" />
          </div>
          <div style={{textAlign:"left", color:"gray", fontSize:"14px", fontWeight:"400", marginBottom:"80px"}}>
            <div>
              <p>
                <FaCopyright/> 2022 Chhotastock Technologies Private Limited. All rights reserved. CIN - U74999WB2012PTC184187 Chhotastock Technologies Private Limited.
              </p>
            </div>
            <div>
              <p style={{margin:0}}>
                Chhotastock Technologies builds platforms and investment products to invest better in Indian investment asset classes.
              </p>
              <p style={{margin:0}}>
                Investing in Stocks/ETFs (Exchange Trade Funds) are subject to market risks. Read all the related documents before investing. Investors should consider all risk factors and consult their financial advisor before investing.
              </p>
            </div>
            <div>
              <p>
                Registered office:L151 3rd Floor, CK Pearl, 5th Main Road, HSR Layout Sector 6, Bengaluru, Karnataka - 560102, India
              </p>
            </div>
            <div>
              <p>
                For any query / feedback / clarifications, email at contact@chhotastock.com.
              </p>
            </div>
            <div>
              <p>
                All investment ideas, model portfolios & advisory are built by SEBI Registered Investment Advisors (RIAs) & chhotastock only facilitates investments in such baskets, portfolios.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer