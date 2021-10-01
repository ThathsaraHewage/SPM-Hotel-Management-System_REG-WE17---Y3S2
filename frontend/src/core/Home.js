import React, { useState, useEffect } from "react";
import "../styles.css";
import {Link} from "react-router-dom";
import Base from "./Base";
import img from '../core/images/image.png';

export default function Home() {

 
  
  return (
    <Base  navigation="" title="Atrium Leisure" description=" Welcome Admin">
      <div className="row text-center">
          <div className="row">
             <img src={img}/>
          </div>
      </div>
 
    


    </Base>
  );
}
