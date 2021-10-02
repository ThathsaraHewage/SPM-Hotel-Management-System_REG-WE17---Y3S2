import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { deleteVenueType, getAllVenueTypes } from "./helper/userapicall";
import { ImageHelper } from "../core/helper/ImageHelper";

const ManageVenues = () => {
  const [Venues, setVenueTypes] = useState([]);

  const { user, token } = isAutheticated();

  const preload = () => {
    getAllVenueTypes().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setVenueTypes(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisRoomType = (productId) => {
    deleteVenueType(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <Base navigation="" title="Admin" description="venues">
      <div id="themeColor">
        <Link className="btn btn=md btn-dark m-3" to={`/admin/events-task`}>
          <span className="">Go Back</span>
        </Link>
        <br />
        <div className="bg-dark text-white rounded">
          <div className="col-12 py-3">
            <h2 className="text-center my-3">Venue Details</h2>
            <div className="p-4">
              <table border="0" width="100%">
                <tr>
                  <th className=" text-white" id="themeColor">
                    {" "}
                    Index
                  </th>
                  <th className=" text-white" id="themeColor">
                    {" "}
                    Image
                  </th>
                  <th className="  p-4" id="themeColor">
                    {" "}
                    Name
                  </th>
                  <th className="  p-4" id="themeColor">
                    {" "}
                    Type
                  </th>
                  <th className="container  p-4" id="themeColor">
                    {" "}
                    Description
                  </th>
                  <th className="  p-4" id="themeColor">
                    {" "}
                    Location
                  </th>
                  <th className="  p-4" id="themeColor">
                    {" "}
                    Occupacy
                  </th>
                  <th className="  p-4" id="themeColor">
                    {" "}
                    Area
                  </th>
                  <th className=" container  p-4" id="themeColor">
                    {" "}
                    Features
                  </th>
                  <th className="  p-4" id="themeColor">
                    {" "}
                    Price
                  </th>
                  <th className="  p-4" id="themeColor">
                    {" "}
                    Update
                  </th>
                  <th className="  p-4" id="themeColor">
                    {" "}
                    Delete
                  </th>
                </tr>
                {Venues.map((Venues, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <ImageHelper className="mr-3" product={Venues} />
                      </td>
                      <td>{Venues.venueName}</td>
                      <td>{Venues.venueType}</td>
                      <td>{Venues.venueDescription}</td>
                      <td>{Venues.venueLocation}</td>
                      <td>{Venues.occupacy}</td>
                      <td>{Venues.area}</td>
                      <td>{Venues.features}</td>
                      <td>{Venues.price}</td>

                      <td>
                        <Link
                          className="btn btn-warning"
                          to={`/admin/product/update/${Venues._id}`}
                        >
                          <span className="">Update</span>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            deleteThisRoomType(Venues._id);
                          }}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <center>
        <p style={{ color: "gray", fontSize: "14px" }}>
          Atrium Leisure, all rights reserved.
        </p>
      </center>
    </Base>
  );
};

export default ManageVenues;
