import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" style={{ width: '100px', height: 'auto' }} />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#">Nutsinfoods</a>
        </li>
      </ul>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="https://github.com/Rrocketter/nutsfood">GitHub Link</a>
        </li>
      </ul>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="https://rgupta.vercel.app">Contact</a>
        </li>
      </ul>
      
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#" onClick={() => setToggleMenu(false)}>
                  Nutsinfoods
                </a>
              </li>
              <li>
                <a href="https://rgupta.vercel.app" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
