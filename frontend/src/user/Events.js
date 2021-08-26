import React from "react";
import Base from "../core/Base";
//import { isAutheticated } from "../auth/helper";
import { Link } from "react-router-dom";

const Events = () => {

  const FirstBox = () => {
    return (
      <div className="card" style={{width:"400%"}}>
        <h4 className="card-header bg-dark text-white text-center">
          Wedding And Events
        </h4>
        <center>
        <ul className="list-group">
          <li className="list-group-item">
              <Link to="/admin/create/roomtype" className="nav-link text-dark">Add Venue Details</Link>
          </li>
          <li className="list-group-item">
              <Link to="/admin/manage-venues" className="nav-link text-dark">Manage Venue Details</Link>
          </li>
        

        </ul>
        </center>
      </div>
    );
  };


  return (
    <Base navigation="" title="Admin" description="Manage Events" >
      <div className="row" className="container" id="themeColor" >
        <div className="col-3">{FirstBox()}</div><br/>
      </div>
      
      <br/><br/><br/><br/><br/><br/><br/>
      <center><p style={{color:"gray",fontSize:"14px"}}>Atrium Leisure, all rights reserved.</p></center>
    </Base>
    
  );
};

export default Events;
