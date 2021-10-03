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
                      <h3 className="card-title">{FoodItem.name}</h3>
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
  );
};

export default ViewFoodItems;
