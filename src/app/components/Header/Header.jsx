
import "./Header.css";
import Image from "next/image";

import Logo from "/Images/Logo.png"
import Person from "/Images/person_FILL0_wght400_GRAD0_opsz24.svg";
import Notification from "/Images/notifications_FILL0_wght400_GRAD0_opsz24.svg";

export default function Header() {
    return <header> 
<Image
      src={Logo}
      width={80}
      height={80}
      alt="Plant Swap Logo"
      className="logo"
    />
    <nav className="navigation">
<ul className="mainNav" >
  <li>HOME</li>
  <li>SWAP</li>
  <li>ABOUT</li>
  <li>GET IN TOUCH</li>
</ul>
    </nav>
<div className="navIcons">
    <Image src={Person} alt="Your SVG" />  
    <Image src={Notification} alt="Your SVG" />  
    </div>
    </header>;

  }
  
