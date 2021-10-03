import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Base from "../../core/Base";
import { PlaceBooking } from "../../admin/helper/userapicall";
import { isAutheticated } from "../../auth/helper/index";

const BookingVenue = ({ match }) => {
  const { user, token } = isAutheticated();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    // emailAddress: "",
    phoneNumber: "",
    preferredDate: "",
    // additionalComment: "",
    venueName: "",
    occupancy: "",
    holdersname: "",
    cardnumber: "",
    cvv: "",
    expdate: "",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: "",
  });

  const {
    firstname,
    lastname,
    // emailAddress,
    phoneNumber,
    preferredDate,
    // additionalComment,
    venueName,
    occupancy,
    holdersname,
    cardnumber,
    cvv,
    expdate,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData,
  } = values;

  const preload = () => {
    setValues({ ...values, formData: new FormData() });
  };

  useEffect(() => {
    preload();
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    PlaceBooking(formData)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            firstname: "",
            lastname: "",
            phoneNumber: "",
            preferredDate: "",
            venueName: "",
            occupancy: "",
            holdersname: "",
            cardnumber: "",
            cvv: "",
            expdate: "",
            photo: "",
            loading: false,
            createdProduct: data.title,
            getaRedirect: true,
          });
        }
      })
      .catch(console.log("Some Error Occured!"));
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
      <br />
      <center>
        <h4>Your Details</h4>
      </center>
      <br />
      <div class="row g-3">
        <div class="col-md-6">
          <label class="form-label">First Name</label>
          <input
            type="text"
            onChange={handleChange("firstname")}
            className="form-control"
            placeholder="Jason"
            value={firstname}
          />
        </div>
        <div class="col-md-6">
          <label class="form-label">Last Name</label>
          <input
            type="text"
            onChange={handleChange("lastname")}
            className="form-control"
            placeholder="Derulo"
            value={lastname}
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            PhoneNumber
          </label>
          <input
            type="text"
            onChange={handleChange("phoneNumber")}
            className="form-control"
            placeholder=""
            value={phoneNumber}
          />
        </div>
        <div class="col-md-6">
          <label for="inputZip" class="form-label">
            Preferred Date
          </label>
          <input
            type="date"
            onChange={handleChange("preferredDate")}
            className="form-control"
            placeholder=""
            value={preferredDate}
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Occupancy
          </label>
          <input
            type="text"
            onChange={handleChange("occupancy")}
            className="form-control"
            placeholder=""
            value={occupancy}
          />
        </div>
        venueName
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Venue Name
          </label>
          <input
            type="text"
            onChange={handleChange("venueName")}
            className="form-control"
            placeholder=""
            value={venueName}
          />
        </div>
        <br />
      </div>

      <br />
      <br />
      <br />
      <center>
        <h4>Payment Details</h4>
      </center>
      <br />
      <div class="row g-3">
        <div class="col-md-6">
          <label class="form-label">Card Holder's Name</label>
          <input
            type="text"
            onChange={handleChange("holdersname")}
            className="form-control"
            placeholder=""
            value={holdersname}
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Card Number
          </label>
          <input
            type="text"
            onChange={handleChange("cardnumber")}
            className="form-control"
            placeholder=""
            value={cardnumber}
          />
        </div>
        <div class="col-md-6">
          <label for="inputState" class="form-label">
            CVV code
          </label>
          <input
            type="number"
            onChange={handleChange("cvv")}
            className="form-control"
            placeholder=""
            value={cvv}
          />
        </div>
        <div class="col-md-6">
          <label for="inputZip" class="form-label">
            Expire Date
          </label>
          <input
            type="date"
            onChange={handleChange("expdate")}
            className="form-control"
            placeholder=""
            value={expdate}
          />
        </div>

        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Agree with terms and conditions
            </label>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="d-grid mt-3">
        <button
          type="submit"
          onClick={onSubmit}
          className="btn btn-outline-primary mb-3 rounded-pill"
        >
          Complete Your Booking
        </button>
      </div>
    </form>
  );

  return (
    <Base
      navigation=""
      title="Book a Venue"
      description=" Book your Favourite Venue"
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

export default BookingVenue;
