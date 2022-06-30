import React, { useEffect } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import "../App.css";

export default function Carousel() {

  useEffect(()=>{
    let tabs = document.querySelectorAll(".slider");
    M.Slider.init(tabs, {interval: 4000});
  })
  return (
    <>
<div className="slider container">
    <ul className="slides">
      <li>
        <img src={require("../assets/trust1.jpg")} alt="trust" className='imageSize'/>

      </li>
      <li>
        <img src={require("../assets/trustchild.jpg")} alt="trust"/> 

      </li>
      <li>
        <img src={require("../assets/trustchild2.jpg")} alt="trust"/> 
      </li>
      <li>
        <img src={require("../assets/trustfund.jpeg")} alt="trust"/>
      </li>
    </ul>
  </div>
      </>

  )
}
