import React, { useState, useEffect } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import Image from "../core/images/Kingsbury.jpg";

export default function CustomerHome() {
  return (
    <Base
      navigation=""
      title="Atrium Leisure"
      description="Welcome to Atrium leisure"
    >
      <div className="row text-center">
        <div className="row"></div>
        <img src={Image} alt="home" width="400px" height="800px" />
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
                to={`/customer-dinning`}
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
      <center>
        <p style={{ color: "gray", fontSize: "14px", marginTop: 30 }}>
          Atrium Leisure, all rights reserved.
        </p>
      </center>
    </Base>
  );
}
