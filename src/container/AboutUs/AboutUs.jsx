import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Nut Allergies</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Nut Allergies are one of the most common allergies in the world. In America alone, it affect nearly
          6 million people of all ages. Around 1 in 50 children have some sort of an allergy to nuts and this number
          is only on the rise.
        </p>
        <a href="https://www.ncbi.nlm.nih.gov/books/NBK538526/" target="_blank" className="custom__button">
          Learn More
        </a>


      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.almond} alt="about_knife" style={{ width: '400px', height: '400px' }}/>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Food Reactions</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Every year 200,000 Americans require some sort of medical attention because of a food reaction. 33 million Americans
          have some sort of food allergy (1 in 10 adults) and more than half of them have experienced a severe food reaction. 
        </p>
        <a href = "https://www.foodallergy.org/resources/facts-and-statistics" type="_button" className="custom__button">
          Learn More
        </a>
      </div>
    </div>
  </div>
);

export default AboutUs;
