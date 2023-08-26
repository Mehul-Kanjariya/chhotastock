import React from 'react';
import styles from "./Dropdown.module.css";
import Mutual from '../Resources/Mutual.PNG';

const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
        <div>
            <h2>INVESTMENTS</h2>
            <div>
                <div className={styles.Investment}>
                    <div>
                        <div>
                            <img src={Mutual} alt="" />
                        </div>
                        <div>
                            <h2>Mutual Funds</h2>
                            <p>E2E infrastructure for mutual fund investing</p>
                        </div>
                    </div>
                </div>
                <div className={styles.Investment}>
                    <div>
                        <div>
                            <img src={Mutual} alt="" />
                        </div>
                        <div>
                            <h2>India Equity</h2>
                            <p>Ready-made stock baskets with major broker integration</p>
                        </div>
                    </div>
                </div>
                <div className={styles.Investment}>
                    <div>
                        <div>
                            <img src={Mutual} alt="" />
                        </div>
                        <div>
                            <h2>Digital Gold</h2>
                            <p>Allow your users to buy and sell digital gold.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.Investment}>
                    <div>
                        <div>
                            <img src={Mutual} alt="" />
                        </div>
                        <div>
                            <h2>Fixed deposits</h2>
                            <p>Book FDs in one click without opening a bank account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h2>DATA</h2>
            <div>
            <div className={styles.Investment}>
                    <div>
                        <div>
                            <img src={Mutual} alt="" />
                        </div>
                        <div>
                            <h2>Market Research</h2>
                            <p>Deep-tech stock research analysis</p>
                        </div>
                    </div>
                </div>
                <div className={styles.Investment}>
                    <div>
                        <div>
                            <img src={Mutual} alt="" />
                        </div>
                        <div>
                            <h2>Historical performance</h2>
                            <p>Multi timeframe historical data for stocks, mutual funds and digital gold</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dropdown