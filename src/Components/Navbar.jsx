import React, { useState } from 'react'
import styles from "./Navbar.module.css";
import { IoIosArrowDown } from 'react-icons/io';
import InvestPe from '../Resources/chotastock.PNG';
import Dropdown from './Dropdown';

const Navbar = () => {

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [border, setBorder] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
    setBorder(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
    setBorder(false);
  };

  return (
    <div>
        <div className={styles.Parent}>
            <div className={styles.NavRight}>
              <div>
                <img src={InvestPe} alt="investpe logo" />
              </div>
              <div></div>
            </div>
            <div className={styles.NavLeft}>
              <div 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={styles.dropdown}
                style={{borderBottom:border ? "3px solid white" : "3px solid"}}
              >
                <p>Products&#160;&#160;</p><p style={{fontSize:30}}><IoIosArrowDown/></p>
              </div>
              <div>
                <p>AboutUs</p>
              </div>
            </div>
        </div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isDropdownVisible && <Dropdown />}
        </div>
    </div>
  )
}

export default Navbar;