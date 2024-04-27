"use client";

import { useState } from "react";

import "./Header.css";
import Image from "next/image";

import Logo from "/Images/Logo.png"
import Person from "/Images/user.png";
import Notification from "/Images/notifications.png";
import Hamburger from "/Images/hamburger.png"
import CloseMenu from "/Images/close.png"




export default function Header() {

  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  return (
    <header> 
      <Image
        src={Logo}
        width={80}
        height={80}
        alt="Plant Swap Logo"
        className="logo"
      />
      <nav className="navigation">
        <button className="menu" onClick={toggleActiveClass} >
          {isActive ? (
            <Image className={`hamburgerImgClosed ${isActive ? 'active' : ''}`} src={CloseMenu} alt="navclosed"></Image>  
          ):(
            <Image className="hamburgerImg" src={Hamburger} alt="navopen"></Image>
          )}
        </button> 

        <div className={`mainNav ${isActive ? 'active' : 'mainNavInactive'}`}>
          <ul>
            <li>HOME</li>
            <li>SWAP</li>
            <li>ABOUT</li>
            <li>GET IN TOUCH</li>
          </ul>
        </div>

      </nav>
      <div className="navIcons">
        <Image src={Person} alt="Your SVG" />  
        <Image src={Notification} alt="Your SVG" />  
      </div>
    </header>
  ); 
}
