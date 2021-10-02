import React, { useState, useEffect } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import Image from "../core/images/Kingsbury.jpg";
import image1 from "../core/images/A.jpg";
import image22 from "../core/images/F.jpg";
import logo from "../core/images/loggo.png";
import image4 from "../core/images/D.jpg";

export default function CustomerHome() {
  return (
    <Base
      navigation=""
      title="Atrium Leisure"
      description="Welcome to Atrium leisure"
    >
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src={image22} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src={image1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src={Image} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
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

      <div className="card mt-5 mb-5">
        <div className="card card-header text-center text-light bg-primary">
          <h2 style={{ fontFamily: "initial" }}>About Atrium</h2>
        </div>
        <div className="card card-body text-center">
          <p style={{ fontFamily: "sans-serif" }}>
            The is a well reputed hotel in sri lanka which provides high
            quality. facilities to all sri lankans and foreigners. The prices
            are also to based on the standard of the services provided by this
            hotel. There are various food items, rooms and extra activities
            available in this hotel. <br /> Enjoy the Fun with Atrium!
          </p>
        </div>
      </div>
      <div className="d-flex flex-row">
        <div className="col-sm-3">
          <div className="card">
            <div className="card-header text-center text-light bg-primary">
              <h3 style={{ fontFamily: "initial" }}>Accomodation</h3>
            </div>
            <div className="card card-body">
              <p>
                There re various kinds of rooms available in Atrium leisure. To
                Find more please navigate to Accomodation
              </p>
              <Link
                className="btn btn-primary"
                style={{
                  border: "none",
                  width: "75%",
                  alignSelf: "center",
                }}
                to={`/view/rooms/ac`}
              >
                Go to Accomodation
              </Link>
            </div>
          </div>
        </div>
        <div className="card col-sm-3">
          <div className="card-header text-center text-light bg-primary">
            <h3 style={{ fontFamily: "initial" }}>Wedding and Events</h3>
          </div>
          <div className="card card-body">
            <p>
              There re various kinds of rooms available in Atrium leisure. To
              Find more please navigate to Accomodation
            </p>
            <Link
              className="btn btn-primary"
              style={{
                border: "none",
                width: "75%",
                alignSelf: "center",
              }}
              to={`/customer/venue`}
            >
              Go to Wedding and Events
            </Link>
          </div>
        </div>
        <div className="card col-sm-3">
          <div className="card-header text-center text-light bg-primary">
            <h3 style={{ fontFamily: "initial" }}>Dinning</h3>
          </div>
          <div className="card card-body">
            <p>
              There re various kinds of rooms available in Atrium leisure. To
              Find more please navigate to Accomodation
            </p>
            <Link
              className="btn btn-primary"
              style={{
                border: "none",
                width: "75%",
                alignSelf: "center",
              }}
              to={`/customer-dinning`}
            >
              Go to Dinning
            </Link>
          </div>
        </div>
        <div className="card col-sm-3">
          <div className="card-header text-center text-light bg-primary">
            <h3 style={{ fontFamily: "initial" }}>Activities</h3>
          </div>
          <div className="card card-body">
            <p>
              There re various kinds of rooms available in Atrium leisure. To
              Find more please navigate to Accomodation
            </p>
            <Link
              className="btn btn-primary"
              style={{
                border: "none",
                width: "75%",
                alignSelf: "center",
              }}
              to={`/customer/activities`}
            >
              Go to Activities
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <center>
        <img src={logo} style={{ width: "300px" }} />
      </center>
      <br />
      <center>
        <p style={{ color: "gray", fontSize: "14px", marginTop: 30 }}>
          Atrium Leisure, all rights reserved.
        </p>
      </center>
    </Base>
  );
}
