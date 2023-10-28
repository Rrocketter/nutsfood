import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay,  } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    {/* <FooterOverlay /> */}
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Me</h1>
        <p className="p__opensans">https://rgupta.vercel.app</p>
        <p className="p__opensans">rahul.rocket711@gmail.com</p>
        <p className="p__opensans">https://github.com/Rrocketter</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        {/* <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div> */}
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Information</h1>
        <p className="p__opensans">Solo Developer</p>
        <p className="p__opensans">Neural Network</p>
        <p className="p__opensans">Python & Juypter Notebook</p>
        <p className="p__opensans">JavaScript, React, Nextjs</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Rahul Gupta. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
