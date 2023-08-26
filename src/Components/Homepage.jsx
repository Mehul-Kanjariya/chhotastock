import React from 'react'
import styles from './Homepage.module.css';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import image from "../Resources/stack.PNG";
import feature from "../Resources/features.PNG";
import connect from "../Resources/connect.PNG";
import Invest from "../Resources/Invest.PNG";
import mobile from "../Resources/Mobile.PNG";
import Deposit from "../Resources/Deposits.PNG";
import MobDep from "../Resources/MobDep.PNG";
import { TiTick } from 'react-icons/ti';
import kotak from '../Resources/partners.PNG';
import business from "../Resources/business.PNG";
import mutual from "../Resources/MutualFunds.PNG";
import Footer from './Footer';

const Homepage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.stack}>
            <div>
                <div>
                    <p style={{textAlign:"left", margin:0, fontWeight:"700", fontSize:"50px", color:"orange"}}>INVESTMENT STACK</p>
                    <p style={{textAlign:"left", margin:0, fontWeight:"700", fontSize:"50px"}}>for India</p>
                </div>
                <div>
                    <p style={{textAlign:"left", marginTop:"20px", fontSize:"35px"}}>Elevate Your Investment Strategy with Our <span style={{color:"#3dbc7e"}}>Comprehensive APIs</span></p>
                </div>
            </div>
            <div>
                <div>
                    <p style={{textAlign:"left", margin:0, fontSize:"30px"}}>Launch financial services in a matter of days. Take your pick from our flexible APIs, SDKs, or ready-to-use screens.</p>
                </div>
                <div style={{display:"flex"}}>
                    <p style={{textAlign:"left", marginTop:"20px", fontSize:"20px", textDecoration:"underline", display:"flex", alignItems:"center"}}>See our products</p>
                    <p style={{display:"flex", alignItems:"center", fontSize:"25px"}}>&nbsp;&nbsp;<IoIosArrowDropdownCircle/></p>
                </div> 
                <div>
                    <div className={styles.Contact}>Contact Us</div>
                </div>
            </div>
        </div>
        <img src={image} width={"100%"}/>
        <div className={styles.features}>
            <div>
                <p style={{marginTop:"10px", color:"#3dbc7e", fontSize:"17px", fontWeight:"500"}}>FEATURES</p>
                <p style={{marginTop:"10px", fontSize:"35px", fontWeight:"700"}}>Launch the most engaging Invest-Tech Solutions</p>
                <p style={{marginTop:"10px", fontSize:"23px", color:"gray", fontWeight:500}}>
                    We offer a suite of B2B Invest-tech solutions, that are cost-effective way to offer an engaging investment experience to your customers, with a faster time to market
                </p>
                <div style={{display:"flex", gap:"10%"}}>
                    <div>
                        <div className={styles.Contact}>Get Started</div>
                    </div>
                    <div style={{display:"flex", alignItems:"center",}}>
                        <p style={{margin:0, textAlign:"left", fontSize:"20px", textDecoration:"underline"}}>Learn more</p>
                    </div>
                </div>
            </div>
            <div className={styles.feature} style={{}}>
                <div>
                    <p>Protection</p>
                    <img src={feature} alt="" />
                    <p>Data protection and guarantees</p>
                </div>
                <div>
                    <p>Protection</p>
                    <img src={feature} alt="" />
                    <p>Data protection and guarantees</p>
                </div>
                <div>
                    <p>Protection</p>
                    <img src={feature} alt="" />
                    <p>Data protection and guarantees</p>
                </div>
                <div>
                    <p>Protection</p>
                    <img src={feature} alt="" />
                    <p>Data protection and guarantees</p>
                </div>
            </div>
        </div>
        <div className={styles.connect}>
            <div>
                <div style={{fontSize:"270%", fontWeight:700}}>Connect your platform finances now with InvestPe Gateway</div>
                <div>
                    <p style={{color:"gray", fontSize:"150%", fontWeight:500}}>We help brokers, wealth managers, fund managers & other businesses / startups server their customers better with our suite of modern digital investment stack</p>
                </div>
                <div>
                    <div className={styles.Contact} style={{color:"black"}}>Try InvestPe Now</div>
                </div>
            </div>
            <div style={{display:"flex"}}>
                <img src={connect} alt="" />
            </div>
        </div>
        <div className={styles.solutions}>
            <div>
               <p style={{marginTop:"10px", color:"#3dbc7e", fontSize:"17px", fontWeight:"500"}}>SOLUTION</p>
               <p style={{width:"35%", marginTop:"10px", fontSize:"35px", fontWeight:"700"}}>Stay ahead with our Wealth-tech as a service</p>
            </div>
            <div className={styles.solutionContainer}>
                <div className={styles.item1} style={{background:"#fef8ec", padding:"30px", border:"1px solid #fdebc6"}}>
                    <img src={Invest} alt="" />
                    <p style={{color:"#7c59cf", fontWeight:"500"}}>INVESTPE</p>
                    <p style={{margin:0, color:"#7c59cf", fontSize:"30px", fontWeight:"700"}}>Why does it make sense to start with us?</p>
                </div>
                <div className={styles.item2} style={{background:"#fafcfd", padding:"20px", border:"1px solid #fdebc6", display:"flex"}}>
                    <div>
                        <p style={{margin:0, color:"#7c59cf", fontSize:"25px", fontWeight:"700"}}>We value your precious time.</p>
                        <p style={{fontSize:"17px", fontWeight:"400", fontSize:"25px"}}>No regulatory licenses required as we have everything for your to get started.</p>
                    </div>
                    <div>
                        <img src={mobile}/>
                    </div>
                </div>
                <div className={styles.item3} style={{background:"#fef8ec", border:"1px solid #fdebc6"}}>
                    <div style={{margin:"30px"}}>
                        <img src={Deposit} />
                        <p style={{color:"#7c59cf", fontWeight:"500"}}>DEPOSITS</p>
                        <p style={{margin:0, color:"#7c59cf", fontSize:"25px", fontWeight:"700"}}>Fully digital FDs for your users</p>
                        <p>Offer fixed deposits on your app or website, from multiple banks. Embed a pre-built SDK and go live in weeks.</p>
                    </div>
                    <div style={{margin:"0 20px", display:"flex", justifyContent:"center"}}>
                        <img src={MobDep}/>
                    </div>
                </div>
                <div className={styles.item4} style={{background:"#fafcfd", border:"1px solid #fdebc6"}}>
                    <div style={{margin:"40px"}}>
                        <p style={{color:"#7c59cf", fontWeight:"500"}}>MUTUAL FUNDS</p>
                        <p style={{margin:0, color:"#7c59cf", fontSize:"25px", fontWeight:"700"}}>Get the complete MF infra & focus on customer engagement</p>
                        <div>
                            <p style={{fontSize:"20px"}}><TiTick/>&#160;&#160;SEBI compliant KYC process</p>
                            <p style={{fontSize:"20px"}}><TiTick/>&#160;&#160;Multi-AMC empanelments</p>
                            <p style={{fontSize:"20px"}}><TiTick/>&#160;&#160;Transact & Track orders</p>
                            <p style={{fontSize:"20px"}}><TiTick/>&#160;&#160;Advanced reporting</p>
                        </div>
                    </div>
                </div>
                <div className={styles.item5} style={{background:"#fafcfd", border:"1px solid #fdebc6"}}>
                    <div style={{margin:"40px"}}>
                        <p style={{color:"#7c59cf", fontWeight:"500"}}>INDIAN EQUITY</p>
                        <p style={{margin:0, color:"#7c59cf", fontSize:"25px", fontWeight:"700"}}>One gateway for all top securities</p>
                        <div>
                            <p style={{fontSize:"20px"}}><TiTick/>&#160;&#160;Enable stocks, ETFs & expert curated stock baskets in your app</p>
                            <p style={{fontSize:"20px"}}><TiTick/>&#160;&#160;Integrates with all major brokers</p>
                            <p style={{fontSize:"20px"}}>Offer expert curated & monitored stock basket solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.line}>
            <hr />
        </div>
        <div className={styles.partners}>
            <div className={styles.partner}>
                <div>
                    <p style={{margin:"20px", color:"#7f7f7f", fontSize:"25px", textAlign:"left"}}>Some partners who make InvestPe products possible-</p>
                </div>
                <div className={styles.partnerImg}>
                    <div>
                        <img src={kotak}/>
                    </div>
                    <div>
                        <img src={kotak}/>
                    </div>
                    <div>
                        <img src={kotak}/>
                    </div>
                    <div>
                        <img src={kotak}/>
                    </div>
                    <div>
                        <img src={kotak}/>
                    </div>
                    <div>
                        <img src={kotak}/>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className={styles.partner}>
                <div>
                    <p style={{margin:"20px", color:"#7f7f7f", fontSize:"25px", textAlign:"left"}}>...and few of the businesses building some incredible solutions with InvestPe</p>
                </div>
                <div className={styles.businessImg}>
                    <div>
                        <img src={business}/>
                    </div>
                    <div>
                        <img src={business}/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.form}>
            <div>
                <div>
                    <p style={{marginTop:"10px", fontSize:"30px", fontWeight:"700"}}>How would you like to work with us?</p>
                    <p style={{fontSize:"22px", fontWeight:"500", color:"rgb(93, 92, 92)"}}>Tell us more about yourself and we will reach out to you as soon as possible.</p>
                    <form>
                        <label>Work email</label><br />
                        <input placeholder='abc@xyz.com'/><br /><br /><br />
                        <label>Company name</label><br />
                        <input/><br /><br /><br />
                        <label>Mobile Number</label><br />
                        <input type="number"/>
                    </form>
                </div>
                <div style={{display:"flex", alignItems:"center "}}>
                    <div style={{width:"100%"}}> 
                        <p style={{fontSize:"17px", fontWeight:"500", color:"rgb(93, 92, 92)"}}>Which products are you interested in?</p>
                        <div style={{display:"grid", gridTemplateColumns:"repeat(3,30%)", width:"100%", gap:"20px"}}>
                            <div style={{background:"white", borderRadius:"15px", padding:"15px"}}>
                                <p style={{margin:"0", fontSize:"18px", fontWeight:"500"}}>Mutual Funds</p>
                                <div style={{display:"flex", width:"100%"}}>
                                    <p style={{color:"gray", fontSize:"15px"}}>
                                        E2E infrastructure for mutual fund investing
                                    </p>
                                    <div style={{display:"flex", width:"100%", flexDirection:"column-reverse"}}>
                                        <img src={mutual} alt="" width="100%"/>
                                    </div>
                                </div>
                            </div>
                            <div style={{background:"white", borderRadius:"15px", padding:"15px"}}>
                                <p style={{margin:"0", fontSize:"18px", fontWeight:"500"}}>Mutual Funds</p>
                                <div style={{display:"flex", width:"100%"}}>
                                    <p style={{color:"gray", fontSize:"15px"}}>
                                        E2E infrastructure for mutual fund investing
                                    </p>
                                    <div style={{display:"flex", width:"100%", flexDirection:"column-reverse"}}>
                                        <img src={mutual} alt="" width="100%"/>
                                    </div>
                                </div>
                            </div>
                            <div style={{background:"white", borderRadius:"15px", padding:"15px"}}>
                                <p style={{margin:"0", fontSize:"18px", fontWeight:"500"}}>Mutual Funds</p>
                                <div style={{display:"flex", width:"100%"}}>
                                    <p style={{color:"gray", fontSize:"15px"}}>
                                        E2E infrastructure for mutual fund investing
                                    </p>
                                    <div style={{display:"flex", width:"100%", flexDirection:"column-reverse"}}>
                                        <img src={mutual} alt="" width="100%"/>
                                    </div>
                                </div>
                            </div>
                            <div style={{background:"white", borderRadius:"15px", padding:"15px"}}>
                                <p style={{margin:"0", fontSize:"18px", fontWeight:"500"}}>Mutual Funds</p>
                                <div style={{display:"flex", width:"100%"}}>
                                    <p style={{color:"gray", fontSize:"15px"}}>
                                        E2E infrastructure for mutual fund investing
                                    </p>
                                    <div style={{display:"flex", width:"100%", flexDirection:"column-reverse"}}>
                                        <img src={mutual} alt="" width="100%"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{display:"flex", flexDirection:"row-reverse"}}>
                            <div style={{fontWeight:"400", fontSize:"19px", color:"white", padding:"10px 20px", background:"black", borderRadius:"20px", width:"fit-content"}}>
                                Submit
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Homepage