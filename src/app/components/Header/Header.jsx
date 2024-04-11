"use client";

import { useState } from "react";

import "./Header.css";
import Image from "next/image";

import Logo from "/Images/Logo.png"
import Person from "/Images/person_FILL0_wght400_GRAD0_opsz24.svg";
import Notification from "/Images/notifications_FILL0_wght400_GRAD0_opsz24.svg";
import Hamburger from "/Images/hamburger.svg"
import CloseMenu from "/Images/close_menu.svg"



export default function Header() {

  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleLinkClick = () => {
    setNavbarOpen(false);
  }


    return <header> 
<Image
      src={Logo}
      width={80}
      height={80}
      alt="Plant Swap Logo"
      className="logo"
    />
    <nav className="navigation">

    <button className="mobile-menu-toggle" onClick={toggle}>
    <Image className="hamburgerImg" src={Hamburger} alt="navopen"></Image>
          </button>
          {navbarOpen ? (
          <div className="menu-open">
              <button onClick={toggle}>
                <Image className="hamburgerImgClosed" src={CloseMenu} alt="navclosed"></Image>
              </button>

<ul className="mainNav" >
  <li>HOME</li>
  <li>SWAP</li>
  <li>ABOUT</li>
  <li>GET IN TOUCH</li>
</ul>
</div>
          ) : null}
    </nav>
<div className="navIcons">
    <Image src={Person} alt="Your SVG" />  
    <Image src={Notification} alt="Your SVG" />  
    </div>
    </header>;

  }
  
