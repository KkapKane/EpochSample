import React from "react";
import "../Styles/navBar.scss";
import logo from "../assets/Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
  isMobile: boolean;
}

function Logo({ isMobile }: Props) {
  return (
    <div className="logo-container">
      <img src={logo} alt="" style={{ width: isMobile ? "35px" : "50px" }} />
      <div className="text-container">
        <span id="company-name1" style={{ fontSize: isMobile ? "1.4rem" : "2rem" }}>
          Epoch
        </span>
        <span id="company-name2" style={{ fontSize: isMobile ? "1.4rem" : "2rem" }}>
          Geo
        </span>
      </div>
    </div>
  );
}

function NavBar({ isMobile }: Props) {
  const links = ["Map", "Careers", "Blog", "About Us"];

  return (
    <div id="nav-bar">
      <Logo isMobile={isMobile} />
      <div className="link-container">
        {isMobile ? <RxHamburgerMenu size={25} /> : null}
        {links.map((link, index) => (
          <span key={index} className="links">
            {link}
          </span>
        ))}
      </div>
    </div>
  );
}

export default NavBar;




