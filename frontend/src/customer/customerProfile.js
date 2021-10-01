import React from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper";
import '../styles.css';
import logo from '../core/images/loggo.png';

const userProfile = () => {
  const {
    user: { name, email,type},
  } = isAutheticated();



  const FirstBox = () => {
    return (
      <div className="card mb-4" style={{width:"135%"}}>
      
        <ul className="list-group">
            <li className="list-group-item ">
                <h5 style={{color: "#1D2026",fontSize:"20px"}}><span className="badge bg-dark text-white mr-5" > Name: </span> {   name} </h5>
            </li>
            <li className="list-group-item">
                <h5 style={{color: "#1D2026",fontSize:"20px"}}><span className="badge bg-dark text-white mr-2"> Email: </span> {   email}</h5>
            </li> 
        </ul>
      </div>
    );
  };

  return (
    <Base  navigation="Home > Your profile" title="Atrium Leisure" description="Your Profile">
      <div className="row" className="container p-4" id="themeColor">
          <div className="col-9">{FirstBox()}</div>
      </div>
      
    <br />
    <br />
    <br />  <center><img src={logo} style={{width:"300px"}}/></center>
    <br />
    <br />
      <center><p style={{color:"gray",fontSize:"14px"}}>Atrium Leisure, all rights reserved.</p></center>
    </Base>
  );
};

export default userProfile;
