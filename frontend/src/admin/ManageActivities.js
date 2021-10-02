import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { deleteActivities, getAllActivities } from "./helper/userapicall";
import { ActivitiesImageHelper } from "../core/helper/ImageHelper";

const ManageActivities = () => {
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

  const deleteThisActivity = (productId) => {
    deleteActivities(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <Base navigation="" title="Admin" description="Manage Activities">
      <div className="container p-4" id="themeColor">
        <Link
          className="btn btn=md btn-dark mb-3"
          to={"/admin/manage-activities"}
        >
          <span className="">Go Back</span>
        </Link>
        <br />
        <div className="bg-dark text-white rounded">
          <div className="col-12 mt-3 py-3">
            <h2 className="text-center my-3">All Activities</h2>
            <div className="container p-4">
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
                  <th className="container p-4" id="themeColor">
                    {" "}
                    Activity Name
                  </th>
                  <th className="container p-4" id="themeColor">
                    {" "}
                    Description
                  </th>
                  <th className="container p-4" id="themeColor">
                    {" "}
                    Inclusions
                  </th>
                  <th className="container p-4" id="themeColor">
                    {" "}
                    Available Days
                  </th>
                  <th className="container p-4" id="themeColor">
                    {" "}
                    Available Time
                  </th>
                  <th className="container p-4" id="themeColor">
                    {" "}
                    Price
                  </th>
                  <th className="container p-4" id="themeColor">
                    {" "}
                    Update
                  </th>
                  <th className="container p-4" id="themeColor">
                    {" "}
                    Delete
                  </th>
                </tr>
                {Activities.map((Activities, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <ActivitiesImageHelper
                          className="mr-3"
                          product={Activities}
                        />
                      </td>
                      <td>{Activities.title}</td>
                      <td>{Activities.description}</td>
                      <td>{Activities.inclusions}</td>
                      <td>{Activities.availableDate}</td>
                      <td>{Activities.availableTime}</td>
                      <td>{Activities.price}</td>
                      <td>
                        <Link
                          className="btn btn-warning"
                          to={`/admin/product/update/${Activities._id}`}
                        >
                          <span className="">Update</span>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            deleteThisActivity(Activities._id);
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

export default ManageActivities;
