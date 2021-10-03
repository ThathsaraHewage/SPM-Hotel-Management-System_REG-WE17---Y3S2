import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { AddBooking } from "../admin/helper/userapicall";
import { isAutheticated } from "../auth/helper";


const BookActivity = ({ match }) => {
  const { user, token } = isAutheticated();
  const [values, setValues] = useState({
    firstname:"",
    lastname:"",
    address:"",
    city:"",
    hours:"",
    checkindate:"",
    holdersname:"",
    cardnumber:"",
    cvv:"",
    expdate:"",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: "",
  });

  const {
    firstname,lastname,address,city,hours,checkindate,holdersname,cardnumber,cvv,expdate,
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
    AddBooking(formData)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            firstname:"",
            lastname:"",
            address:"",
            city:"",
            hours:"",
            checkindate:"",
            holdersname:"",
            cardnumber:"",
            cvv:"",
            expdate:"",
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
        <h4 style={{color:"black"}}>{error} failed !..Try again...</h4>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success mt-3"
        style={{ display: createdProduct ? " " : "none" }}
      >
        <h4 style={{color:"black"}}>successfully..</h4>
      </div>
    );
  };

  const bookActivityForm = () => (
    <form>
      <center><h3>Booking Details</h3></center>
        <br/>
      <br/>
      <center><h4>Your Details</h4></center>
      <br/>
      <div class="row g-3">
          <div class="col-md-6">
            <label  class="form-label">First Name</label>
            <input type="text"
              onChange={handleChange("firstname")}
              className="form-control"
              placeholder="Kamal"
              value={firstname} />
          </div>
          <div class="col-md-6">
            <label class="form-label">Last Name</label>
            <input type="text"
             onChange={handleChange("lastname")}
             className="form-control"
             placeholder="De Silva"
             value={lastname}/>
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input  type="text"
             onChange={handleChange("address")}
             className="form-control"
             placeholder="1234 Main St"
             value={address}/>
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text"
             onChange={handleChange("city")}
             className="form-control"
             placeholder="Colombo"
             value={city}/>
          </div>
          <div class="col-md-2">
            <label class="form-label">Number of hours</label>
            <input type="number"
              onChange={handleChange("hours")}
              className="form-control"
              placeholder=""
              value={hours}/>
          </div>
          <div class="col-md-3">
            <label for="inputZip" class="form-label">Check-In Date</label>
            <input type="date" 
                      onChange={handleChange("checkindate")}
                      className="form-control"
                      placeholder=""
                      value={checkindate}/>
          </div>
  </div>

      <br/>
      <br/>
      <br/>
      <center><h4>Payment Details</h4></center>
      <br/>
<div class="row g-3">

          <div class="col-md-6">
              <label  class="form-label">Card Holder's Name</label>
                <input  type="text" 
                    onChange={handleChange("holdersname")}
                    className="form-control"
                    placeholder="H.K.De Silva"
                    value={holdersname} />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">Card Number</label>
              <input  type="tel" 
                 minLength= {12}
                 maxLength= {12}
                 onChange={handleChange("cardnumber")}
                 className="form-control"
                 placeholder="xxxxxxxxxxxxxx"
                 value={cardnumber}/>
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">CVV code</label>
              <input type="number" 
                maxLength= {3}
                onChange={handleChange("cvv")}
                className="form-control"
                placeholder="000"
                value={cvv}/>
            </div>
            <div class="col-md-3">
              <label for="inputZip" class="form-label">Expire Date</label>
              <input  type="date" 
               onChange={handleChange("expdate")}
               className="form-control"
               placeholder=""
               value={expdate}/>
            </div>

            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                <label class="form-check-label" for="gridCheck">
                  Agree with terms and conditions
                </label>
              </div>
</div>
</div>
<br/>
<br/>
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
    <Base navigation="" title="Booking Activity" description=" You can book any activity according to your desire">
      
      <div className="container bg-primary p-4">
     
      
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2 mt-3 py-3">
          {bookActivityForm()}
          {errorMessage()}
          {successMessage()}
          
        </div>
      </div>
      </div>
      
      <br/><br/><br/><br/>
      <center>  <p style={{ color: "gray", fontSize: "14px" }}>
        Atrium Leisure, all rights reserved.
      </p></center>
    </Base>
  );
  };
  export default BookActivity