import React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const ActivityMenu = () => {

    const FirstBox = () => {
        return (
            <div className="card" style={{width:"400%"}}>
                <h4 className="card-header bg-dark text-white text-center">
                    Activities
                </h4>
                <center>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to="/admin/create/activity" className="nav-link text-danger">Add a new activity</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/admin/get-activities" className="nav-link text-danger">Manage Activities</Link>
                        </li>
                    </ul>
                </center>
            </div>
        );
    };


    return (
        <Base navigation="" title="Admin" description="Manage Activity" >
            <div className="row" className="container p-4" id= "themeColor" >
                <div className="col-3">{FirstBox()}</div><br/>
            </div>

            <br/><br/><br/><br/><br/><br/><br/>
            <center><p style={{color:"gray",fontSize:"14px"}}>Atrium Leisure, all rights reserved.</p></center>
        </Base>

    );
};

export default ActivityMenu;
