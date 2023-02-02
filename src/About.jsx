import React from "react";
import Common from "./Commmon";
import web from "../src/images/cartoon.png";


function About() {
  return <div>
      <Common 
      Title ="Welcome to "
      brandname ="About Page"
      visit ="/contact"
      imgSrc ={web}
      btnname="Contact me"/>
  </div>;
}

export default About;
