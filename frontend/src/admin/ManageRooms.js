import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { deleteRoomType, getAllRoomTypes } from "./helper/userapicall";
import { AccomodationImageHelper } from "../core/helper/ImageHelper";
import "../styles.css";

const ManageRooms = () => {
  const [RoomTypes, setRoomTypes] = useState([]);

  const { user, token } = isAutheticated();

  const preload = () => {
    getAllRoomTypes().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRoomTypes(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisRoomType = (productId) => {
    deleteRoomType(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <Base navigation="" title="Admin" description="Manage Rooms">
      <div className="container p-4" id="themeColor">
        <Link className="btn btn=md btn-dark mb-3" to={`/admin/accomodation`}>
          <span className="">Go Back</span>
        </Link>
        <br />
        <div className="bg-dark text-white rounded">
          <div className="col-12 mt-3 py-3">
            <h2 className="text-center my-3">All Room Types</h2>
            <div className="container p-4">
              <table border="0" width="100%">
                <tr>
                  <th className="text-white" id="themeColor">
                    {" "}
                    Index
                  </th>
                  <th className=" text-white" id="themeColor">
                    {" "}
                    Image
                  </th>
                  <th className="container  p-4" id="themeColor">
                    {" "}
                    Room Type
                  </th>
                  <th className="container p-4" id="themeColor">
                    {" "}
                    Description
                  </th>
                  <th className="container  p-4" id="themeColor">
                    {" "}
                    Condition
                  </th>
                  <th className="container  p-4" id="themeColor">
                    {" "}
                    No.of Rooms
                  </th>
                  {/* <th className="container bg-danger p-4"> Price Range</th> */}
                  <th className="container  p-4" id="themeColor">
                    {" "}
                    Status
                  </th>
                  <th className="container  p-4" id="themeColor">
                    {" "}
                    Update
                  </th>
                  <th className="container  p-4" id="themeColor">
                    {" "}
                    Delete
                  </th>
                </tr>
                {RoomTypes.map((RoomTypes, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <AccomodationImageHelper
                          className="mr-3"
                          product={RoomTypes}
                        />
                      </td>
                      <td>{RoomTypes.title}</td>
                      <td>{RoomTypes.description}</td>
                      <td>{RoomTypes.condition}</td>
                      <td>{RoomTypes.rooms}</td>
                      {/* <td>{ResearchPapers.price}</td> */}
                      <td>{RoomTypes.status}</td>

                      <td>
                        <Link
                          className="btn btn-warning"
                          to={`/admin/product/update/${RoomTypes._id}`}
                        >
                          <span className="">Update</span>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            deleteThisRoomType(RoomTypes._id);
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

export default ManageRooms;
