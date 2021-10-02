import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getAllFoodItems } from "../admin/helper/userapicall";
import { DinningImageHelper } from "../core/helper/ImageHelper";

const ViewFoodItems = () => {
  const [FoodItem, setFoodItem] = useState([]);

  const preload = () => {
    getAllFoodItems().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setFoodItem(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <Base
      navigation="Home > Dinning"
      title="Dinning"
      description="Find variety of Food items here..."
    >
      <br />
      <center>
        <p>
          Discover the true meaning of elegance, grace & splendour at The Atrium
          Leisure, where we bring you regal indulgence, outstanding individual
          comforts & the best service amongst hotels in Badulla. Our 150 rooms
          are expertly designed with every luxury in mind with affordable price
          ranges specially for you, with a host of amenities and dining options;
          whether in-room or from our restaurants, intuitive service & heavenly
          Frette linen bedding, we guarantee a one of a kind holiday, fit for
          you.
        </p>
      </center>
      <br />
      <br />
      <br />
      <div class="row">
        {FoodItem.map((FoodItem, index) => {
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
                      <DinningImageHelper
                        product={FoodItem}
                        className="card-img-top"
                        alt="Food Items"
                      />
                    </div>
                    <div className="card-body bg-white text-dark rounded m-3">
                      <h3 className="card-title">{FoodItem.title}</h3>
                      <p className="card-text m-2">
                        <b>Description:</b> <br />
                        {FoodItem.description}
                      </p>
                      <p className="card-text m-2">
                        <b>Category:</b> {FoodItem.category}
                      </p>
                      <button
                        type="button"
                        class="btn btn-secondary btn-lg rounded m-2"
                        disabled
                      >
                        <p className="card-text m-0">
                          <b>Price: </b>LKR {FoodItem.price}
                        </p>
                      </button>
                      <p className="card-text m-0">
                        <b>Status:</b> {FoodItem.status}
                      </p>
                    </div>

                    <Link to={`/order/food/${FoodItem._id}`}>
                      <div class="d-grid gap-2 col-6 mx-auto">
                        <span className="btn btn-primary">Book Now</span>
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
      {/* </div> */}
      <br />
      <br />
      <br />{" "}
      <center>
        <img src="#" style={{ width: "300px" }} />
      </center>
      <br />
      <br />
      <center>
        <p style={{ color: "gray", fontSize: "14px" }}>
          Atrium Leisure, all rights reserved.
        </p>
      </center>
    </Base>

    // <Base
    //   navigation=""
    //   title="Feel Free to Choose!"
    //   description="Find variety of food items..."
    // >
    //   <div className="container p-4 rounded" id="themeColor">
    //     <Link className="btn btn=md btn-dark mb-3" to={`/dinning`}>
    //       <span className="">Go Back</span>
    //     </Link>
    //     <br />

    //     <div className="row bg-dark">
    //       {FoodItem.map((FoodItem, index) => {
    //         return (
    //           <div className="col-sm-3 bg-dark">
    //             <div key={index} className="text-white rounded m-3 ">
    //               <div className="card text-center" id="themeColor">
    //                 <div
    //                   style={{
    //                     alignSelf: "center",

    //                     margin: 10,
    //                   }}
    //                   id="themeColor"
    //                 >
    //                   <ImageHelper
    //                     product={FoodItem}
    //                     className="card-img-top"
    //                     alt="Food Item"
    //                   />
    //                 </div>
    //                 <div className="card-body bg-dark rounded m-3">
    //                   <h5 className="card-title">{FoodItem.name}</h5>{" "}
    //                   {console.log(FoodItem)}
    //                   <p className="card-text m-0">
    //                     <b>Description:</b> {FoodItem.description}
    //                   </p>
    //                   <p className="card-text m-0">
    //                     <b>Category:</b> {FoodItem.category}
    //                   </p>
    //                   <p className="card-text m-0">
    //                     <b>Price:</b> {FoodItem.price}
    //                   </p>
    //                   <p className="card-text m-0">
    //                     <b>Status:</b> {FoodItem.status}
    //                   </p>
    //                 </div>

    //                 <Link
    //                   className="btn btn=md btn-dark rounded"
    //                   to={`/dinning`}
    //                   style={{ width: "60%", alignSelf: "center", margin: 10 }}
    //                 >
    //                   <span className="">Select</span>
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //     <br />

    //     {/* <div className="bg-dark text-white rounded">
    //       <div className="col-12 mt-3 py-3">
    //         <h2 className="text-center my-3">Here You Go!</h2>
    //         <div className="container p-4">
    //           <table border="0" width="100%">
    //             <tr>
    //               <th className="text-white" id="themeColor">
    //                 {" "}
    //                 Index
    //               </th>
    //               <th className="text-white" id="themeColor">
    //                 {" "}
    //                 Image
    //               </th>
    //               <th className=" p-4" id="themeColor">
    //                 {" "}
    //                 Name
    //               </th>
    //               <th className="container  p-4" id="themeColor">
    //                 {" "}
    //                 Description
    //               </th>
    //               <th className=" p-4" id="themeColor">
    //                 {" "}
    //                 Category
    //               </th>
    //               <th className=" p-4" id="themeColor">
    //                 {" "}
    //                 discount
    //               </th>
    //               <th className=" p-4" id="themeColor">
    //                 {" "}
    //                 Price
    //               </th>
    //               <th className=" p-4" id="themeColor">
    //                 {" "}
    //                 Status
    //               </th>
    //             </tr>
    //             {FoodItem.map((FoodItem, index) => {
    //               return (
    //                 <tr key={index}>
    //                   <td>{index + 1}</td>
    //                   <td>
    //                     <ImageHelper className="mr-3" product={FoodItem} />
    //                   </td>
    //                   <td>{FoodItem.name}</td>
    //                   <td>{FoodItem.description}</td>
    //                   <td>{FoodItem.category}</td>
    //                   <td>{FoodItem.discount}</td>
    //                   <td>{FoodItem.price}</td>
    //                   <td>{FoodItem.status}</td>
    //                 </tr>
    //               );
    //             })}
    //           </table>
    //         </div>
    //       </div>
    //     </div> */}
    //   </div>

    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <center>
    //     <p style={{ color: "gray", fontSize: "14px" }}>
    //       Atrium Leisure, all rights reserved.
    //     </p>
    //   </center>
    // </Base>
  );
};

export default ViewFoodItems;
