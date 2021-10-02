import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { getAllACRooms } from "../admin/helper/userapicall";
import { AccomodationImageHelper } from "../core/helper/ImageHelper";
import "../styles.css";
import logo from "../core/images/loggo.png";
import image1 from "../core/images/A.jpg";
import image22 from "../core/images/B.jpg";
import image3 from "../core/images/C.jpg";
import image4 from "../core/images/D.jpg";

const ViewACRooms = () => {
  const [RoomTypes, setRoomTypes] = useState([]);

  const { user, token } = isAutheticated();

  const preload = () => {
    getAllACRooms().then((data) => {
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

  return (
    <Base
      navigation="Home > Accomodations > A/C Rooms"
      title="Accomodations"
      description="Our Air Conditioned Room Categories"
    >
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={image1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={image22} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image4} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
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
      {/* <div className="container p-4" id="themeColorCustomer"> */}
      <br />
      <div className="row bg-white">
        {RoomTypes.map((RoomTypes, index) => {
          return (
            <center>
              <div className="card text-center " style={{ width: "80%" }}>
                <div
                  key={index}
                  className="text-white rounded m-3 card border-primary mb-3"
                >
                  <div className="card text-center">
                    <div
                      style={{
                        alignSelf: "center",
                        margin: 30,
                      }}
                    >
                      <AccomodationImageHelper
                        product={RoomTypes}
                        className="card-img"
                        alt="Room Types"
                      />
                    </div>
                    <div className="card-body bg-white text-dark rounded m-3">
                      <h3 className="card-title">{RoomTypes.title}</h3>
                      <p className="card-text m-0">
                        <b>Facilities:</b> <br />
                        {RoomTypes.description}
                      </p>
                      <p className="card-text m-0">
                        <b>Category:</b> {RoomTypes.condition}
                      </p>
                      <button
                        type="button"
                        class="btn btn-secondary btn-lg"
                        disabled
                      >
                        <p className="card-text m-0">
                          <b>Price:</b> {RoomTypes.price} <b>USD. per day</b>
                        </p>
                      </button>
                      <p className="card-text m-0">
                        <b>Status:</b> {RoomTypes.status}
                      </p>
                    </div>
                    {/* <button
                    style={{
                      width: "60%",
                      alignSelf: "center",
                      margin: "10px",
                      padding: "5px",
                      color: "white",
                    }}
                    className="btn btn-primary"
                  >
                    Book Now
                  </button> */}

                    <Link to={`/book/room/${RoomTypes._id}`}>
                      <div class="d-grid gap-2 col-6 mx-auto">
                        <span className="btn btn-primary">Book Now</span>
                      </div>
                    </Link>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </center>
          );
        })}
      </div>
      <br />
      {/* </div> */}
      <br />
      <br />
      <br />{" "}
      <center>
        <img src={logo} style={{ width: "300px" }} />
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

export default ViewACRooms;
