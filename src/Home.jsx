import React from "react";
import Common from "./Commmon";
import web from "../src/images/goku2.png";


function Home() {
  return (
    <div>
      <Common 
      Title ="Grow your business with"
      brandname ="Shobhit goyal"
      visit ="/services"
      imgSrc ={web}
      btnname="Get started"/>
    </div>
  );
}

export default Home;
