import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getAllActivities } from "../admin/helper/userapicall";
import { isAutheticated } from "../auth/helper";
import { ActivitiesImageHelper } from "../core/helper/ImageHelper";

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
    <Base navigation="" title="Customer Activities" description="Discover the true meaning of elegance, grace & splendour at The Atrium
    Leisure, where we bring you regal indulgence, outstanding individual
    comforts & the best service amongst hotels in Badulla. Our 150 rooms
    are expertly designed with every luxury in mind with affordable price
    ranges specially for you, with a host of amenities and dining options;
    whether in-room or from our restaurants, intuitive service & heavenly
    Frette linen bedding, we guarantee a one of a kind holiday, fit for
    you.">
      <div className="container p-4" id="themeColor">
        <Link className="btn btn=md btn-dark mb-3" to={`/customer-home`}>
          <span className="">Go Back</span>
        </Link>
        <br />
        <div class="row">
        {Activities.map((Activities, index) => {
          return (
            <div class="col-sm-4">
              <div className="card-body text-center  ">
                <center>
                  <div
                    key={index}
                    className="text-white mb-5 card border-info m-5"
                  >
                    <div
                      style={{
                        alignSelf: "center",
                        margin: 30,
                      }}
                    >
                      <ActivitiesImageHelper
                        product={Activities}
                        className="card-img-top"
                        alt=""
                      />
                    </div>
                    <div className="card-body bg-white text-dark rounded m-3">
                      <h3 className="card-title">{Activities.title}</h3>
                      <p className="card-text m-2">
                        <b>Description:</b> <br />
                        {Activities.description}
                      </p>
                      <p className="card-text m-2">
                        <b>Inclusions:</b> {Activities.inclusions}
                      </p>
                      <button
                        type="button"
                        class="btn btn-secondary btn-lg rounded m-2"
                        disabled
                      >
                        <p className="card-text m-0">
                          <b>Price: </b>LKR {Activities.price}
                        </p>
                      </button>
                      <p className="card-text m-0">
                        <b>Available on:</b> {Activities.availableDate}
                      </p>
                      <p className="card-text m-0">
                        <b>Available from:</b> {Activities.availableTime}
                      </p>
                    </div>

                    <Link to={`/customer/bookactivity`}>
                      <div class="d-grid gap-2 col-6 mx-auto">
                        <span className="btn btn-primary rounded">Book Now</span>
                      </div>
                    </Link>
                    <br />
                    <br />
                  </div>
                </center>
              </div>
            </div>
          );
        })}
      </div>
        <br />
        <div className="bg-dark text-white rounded"></div>
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
