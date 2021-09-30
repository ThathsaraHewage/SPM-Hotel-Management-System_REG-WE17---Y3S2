import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { deleteFoodItem, getAllFoodItems } from "./helper/userapicall";
import ImageHelper from "../core/helper/ImageHelper";

const ManageFoodItems = () => {
  const [FoodItem, setFoodItem] = useState([]);

  const { user, token } = isAutheticated();

  const preload = () => {
    getAllFoodItems().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setFoodItem(data);
        console.log(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisFoodItem = (productId) => {
    deleteFoodItem(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <Base navigation="" title="Admin" description="Manage Food Items">
      <div className="container  p-4" id="themeColor">
        <Link className="btn btn=md btn-dark mb-3" to={`/dinning`}>
          <span className="">Go Back</span>
        </Link>
        <br />
        <div className="bg-dark text-white rounded">
          <div className="col-12 mt-3 py-3">
            <h2 className="text-center my-3">All Food Types</h2>
            <div className="container p-4">
              <table border="0" width="100%">
                <tr>
                  <th className="text-white" id="themeColor">
                    {" "}
                    Index
                  </th>
                  <th className="text-white" id="themeColor">
                    {" "}
                    Image
                  </th>
                  <th className=" p-4" id="themeColor">
                    {" "}
                    Name
                  </th>
                  <th className="container  p-4" id="themeColor">
                    {" "}
                    Description
                  </th>
                  <th className=" p-4" id="themeColor">
                    {" "}
                    Category
                  </th>
                  <th className=" p-4" id="themeColor">
                    {" "}
                    discount
                  </th>
                  <th className=" p-4" id="themeColor">
                    {" "}
                    Price
                  </th>
                  <th className=" p-4" id="themeColor">
                    {" "}
                    Status
                  </th>
                  <th className=" p-4" id="themeColor">
                    {" "}
                    Update
                  </th>
                  <th className=" p-4" id="themeColor">
                    {" "}
                    Delete
                  </th>
                </tr>
                {FoodItem.map((FoodItem, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <ImageHelper className="mr-3" product={FoodItem} />
                      </td>
                      <td>{FoodItem.name}</td>
                      <td>{FoodItem.description}</td>
                      <td>{FoodItem.category}</td>
                      <td>{FoodItem.discount}</td>
                      <td>{FoodItem.price}</td>
                      <td>{FoodItem.status}</td>

                      <td>
                        <Link
                          className="btn btn-warning"
                          to={`/admin/foodItem/${FoodItem._id}`}
                        >
                          <span className="">Update</span>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            deleteThisFoodItem(FoodItem._id);
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

export default ManageFoodItems;
