import React, { useState, useEffect } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import Base from "./Base";
import Image from "./images/Kingsbury.png";

export default function Home() {
  return (
    <Base navigation="" title="Atrium Leisure" description="Admin">
      <div className="row text-center">
        <div className="row"></div>

        <img src={Image} alt="home" width="400px" height="800px" />
      </div>
    </Base>
  );
}

