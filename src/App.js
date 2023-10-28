import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
  ImageUpload,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <ImageUpload />
    <Chef />
    {/* <Intro /> */}
    <Laurels />
    {/* <Gallery /> */}
    <FindUs />
    <Footer />
    
  </div>
);

export default App;
