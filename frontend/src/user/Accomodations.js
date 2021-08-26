import React from "react";
import Base from "../core/Base";
//import { isAutheticated } from "../auth/helper";
import { Link } from "react-router-dom";
import '../styles.css';

const Accomodations = () => {

  const FirstBox = () => {
    return (
      <div className="card" style={{width:"400%"}}>
        <h4 className="card-header bg-dark text-white text-center">
          Accomodations
        </h4>
        <center>
        <ul className="list-group">
          <li className="list-group-item">
              <Link to="/admin/create/roomtype" className="nav-link text-dark">Add a new room type</Link>
          </li>
          <li className="list-group-item">
              <Link to="/admin/manage-rooms" className="nav-link text-dark">Manage Accomodations</Link>
          </li>
          {/* <li className="list-group-item">
              <Link to="/available-rooms" className="nav-link text-dark">Available Room Types</Link>
          </li> */}

        </ul>
        </center>
      </div>
    );
  };


  return (
    <Base navigation="" title="Admin" description="Manage Accomodations" >
      <div className="row" className="container p-4"  id="themeColor">
        <div className="col-3">{FirstBox()}</div><br/>
      </div>
      
      <br/><br/><br/><br/><br/><br/><br/>
      <center><p style={{color:"gray",fontSize:"14px"}}>Atrium Leisure, all rights reserved.</p></center>
    </Base>
    
  );
};

export default Accomodations;
