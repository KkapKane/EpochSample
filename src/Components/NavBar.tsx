import "../Styles/navBar.scss"
import logo from "../assets/Logo.svg"

export default function NavBar() {
    return (

      <div id='nav-bar'>
        <div className="logo-container">
            <img src={logo} alt="" />
            <div className="text-container">
            <span id="company-name1">Epoch</span>
            <span id="company-name2">Geo</span>
            </div>


        </div>
        <div className='link-container'>
          <span className="links">Map</span>
          <span className="links">Careers</span>
          <span className="links">Blog</span>
          <span className="links">About Us</span>
        </div>
      </div>
    );
}