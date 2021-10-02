import React, { useState, useEffect } from "react";
import Base from "../../core/Base";
import { Link } from "react-router-dom";
import { getAllVenueTypes, getVenue } from "../../admin/helper/userapicall";
import { isAutheticated } from "../../auth/helper/index";

const BookingvenueDetails = ({ match }) => {
  const { user, token } = isAutheticated();
  const [values, setValues] = useState({
    venueName: "",
    venueLocation: "",
    price: "",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: "",
  });

  const {
    venueName,
    venueLocation,
    price,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData,
  } = values;

  const preload = (venueId) => {
    getVenue(venueId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        preloadCategories();
        setValues({
          ...values,
          venueName: data.venueName,
          venueLocation: data.venueLocation,
          price: data.price,
          formData: new FormData(),
        });
      }
    });
  };

  const preloadCategories = () => {
    getAllVenueTypes().then((data) => {
      if (data.error) {
        console.log("Finding the error !", data.err);
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          categories: data,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    preload(match.params.venueId);
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger mt-3"
        style={{ display: error ? " " : "none" }}
      >
        <h4 style={{ color: "black" }}>{error} failed !..Try again...</h4>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success mt-3"
        style={{ display: createdProduct ? " " : "none" }}
      >
        <h4 style={{ color: "black" }}>successfully..</h4>
      </div>
    );
  };

  const bookingForm = () => (
    <form>
      <br />
      <center>
        <h4>Booking Details</h4>
      </center>
      <br />
      <br />
      <span>Venue Name :</span>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("venueName")}
          name="photo"
          className="form-control"
          value={venueName}
        />
      </div>

      <span>Venue Location :</span>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("venueLocation")}
          type="text"
          className="form-control"
          value={venueLocation}
        />
      </div>

      <span>Price per five hours :</span>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          value={price}
        />
      </div>
      <br />
      <br />
      <div className="d-grid mt-3">
        <Link
          className="btn btn-outline-primary mb-3 rounded-pill"
          to={`/customer/bookingVenue`}
        >
          <span className="">Next</span>
        </Link>
      </div>
    </form>
  );

  return (
    <Base
      navigation=""
      title="Book a Venue"
      description=" You can book you favourite venue as per your choice"
    >
      <div className="container bg-primary p-4">
        <div className="row bg-dark text-white rounded">
          <div className="col-md-8 offset-md-2 mt-3 py-3">
            {errorMessage()}
            {successMessage()}
            {bookingForm()}
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <center>
        {" "}
        <p style={{ color: "gray", fontSize: "14px" }}>
          Atrium Leisure, all rights reserved.
        </p>
      </center>
    </Base>
  );
};

export default BookingvenueDetails;
