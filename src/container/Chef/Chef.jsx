import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Developer's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            It's important to recognize that the Nerual Network is accurate but not perfect. 
            Please use the program responsible and the developer is not responsible or liable to anyone.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          This technology ensures the safety of individuals with nut allergies by accurately detecting and flagging the presence of nuts in food products. 
          Additionally, it streamlines quality control processes in food manufacturing, reducing the risk of accidental nut exposure and product recalls.{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Rahul Gupta</p>
        <p className="p__opensans">Creator & Developer</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
