import "../Styles/navBar.scss";
import logo from "../assets/Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
  isMobile: boolean;
}

export default function NavBar({ isMobile }: Props) {
  return (
    <div id='nav-bar'>
      <div className='logo-container'>
        <img src={logo} alt='' style={{ width: isMobile ? "35px" : "50px" }} />
        <div className='text-container'>
          <span
            id='company-name1'
            style={{ fontSize: isMobile ? "1.4rem" : "2rem" }}
          >
            Epoch
          </span>
          <span
            id='company-name2'
            style={{ fontSize: isMobile ? "1.4rem" : "2rem" }}
          >
            Geo
          </span>
        </div>
      </div>
      <div className='link-container'>
        {isMobile ? <RxHamburgerMenu size={25} /> : null}
        <span className='links'>Map</span>
        <span className='links'>Careers</span>
        <span className='links'>Blog</span>
        <span className='links'>About Us</span>
      </div>
    </div>
  );
}
