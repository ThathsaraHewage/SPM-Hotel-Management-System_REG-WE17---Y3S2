import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getAllActivities } from "../admin/helper/userapicall";
import { isAutheticated } from "../auth/helper";
import ImageHelper from "../core/helper/ImageHelper";

const ViewAllActivities = () => {
    const [Activities, setActivities] = useState([]);

    const { user, token } = isAutheticated();
  
  
    const preload = () => {
      getAllActivities().then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setActivities(data);
        }
      });
    };

    useEffect(() => {
        preload();
      }, []);

      return (
            <Base navigation="" title="Customer" description="View All Activities">
           <div className="container p-4" id="themeColor">
        <Link className="btn btn=md btn-dark mb-3" to={`/dinning`}>
          <span className="">Go Back</span>
        </Link>
        <br />
        <div className="row bg-dark">
          {Activities.map((Activities, index) => {
            return (
              <div className="col-sm-3 bg-dark">
                <div key={index} className="text-white rounded m-3 ">
                  <div className="card text-center" id="themeColor">
                    <div
                      style={{
                        alignSelf: "center",

                        margin: 10,
                      }}
                      id="themeColor"
                    >
                      <ImageHelper
                        product={Activities}
                        className="card-img-top"
                        alt="activity"
                      />
                    </div>
                    <div className="card-body bg-dark rounded m-3">
                      <h5 className="card-title">{Activities.title}</h5>
                      <p className="card-text m-0">
                        <b>Description:</b> {Activities.description}
                      </p>
                      <p className="card-text m-0">
                        <b>Inclusions:</b> {Activities.inclusions}
                      </p>
                      <p className="card-text m-0">
                        <b>Available Days:</b> {Activities.availableDate}
                      </p>
                      <p className="card-text m-0">
                        <b>Available Time:</b> {Activities.availableTime}
                      </p>
                      <p className="card-text m-0">
                        <b>Price:</b> {Activities.price}
                      </p>
                    </div>
                    <Link to="/customer/bookactivity"
                      style={{
                        width: "60%",
                        alignSelf: "center",
                        margin: "10px",
                        padding: "5px",
                        color: "white",
                      }}
                      className="bg-dark rounded"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <div className="bg-dark text-white rounded">
        </div>
      </div>
      <center>
        <p style={{ color: "gray", fontSize: "14px" }}>
          Atrium Leisure, all rights reserved.
        </p>
      </center>
            </Base>
          
      );
};
export default ViewAllActivities;