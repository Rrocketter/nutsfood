import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Project Information
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          EquiHacks Monmouth Hackathon 2023 Submission
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Date
        </p>
        <p className="p__opensans">Friday October 20, 2023 - </p>
        <p className="p__opensans">Sunday October 22, 2023</p>

        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Team
        </p>
        <p className="p__opensans">Solo</p>
        <p className="p__opensans">Rahul Gupta</p>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
