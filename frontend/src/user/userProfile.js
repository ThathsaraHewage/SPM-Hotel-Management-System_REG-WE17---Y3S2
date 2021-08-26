import React from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper";

const userProfile = () => {
  const {
    user: { name, email,type},
  } = isAutheticated();



  const FirstBox = () => {
    return (
      <div className="card mb-4" style={{width:"135%"}}>
        <h4 className="card-header bg-dark text-white text-center">
          Account Infomation
        </h4>
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
    <Base  navigation="" title="Admin" description="Your Profile">
      <div className="row" className="container bg-danger p-4">
          <div className="col-9">{FirstBox()}</div>
      </div>
      <br/><br/><br/><br/>
      <center><p style={{color:"gray",fontSize:"14px"}}>Atrium Leisure, all rights reserved.</p></center>
    </Base>
  );
};

export default userProfile;
