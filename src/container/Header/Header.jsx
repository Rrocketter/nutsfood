import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Tell whether or not nuts are in your food" />
      <h1 className="app__header-h1">NutsinFood NN</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        This convolution nerual network helps determine if there are nuts in your food. It's very simple, all you have to do it 
        upload a jpg image of your food and then it will tell you the probability of nuts in your food! {" "}
      </p>
      <a href = "https://github.com/Rrocketter/nonutsfoodcnn" type="_button" className="custom__button">
        Nuts CNN
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.nuts} alt="header_img" />
    </div>
  </div>
);

export default Header;
