
import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { AddNewVenueType } from "./helper/userapicall";

const AddNewVenueTypes = () => {
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
    venueName: "",
    venueType: "",
    venueDescription: "",
    venueLocation: "",
    occupacy:"",
    area:"",
    features:"",
    price:"",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: "",
  });

  const {venueName,venueType,venueDescription,venueLocation,occupacy,area,features,price,loading,error,createdProduct,getaRedirect,formData,} = values;

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

  // on submit function 
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    AddNewVenueType(user._id, token, formData)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            venueName: "",
            venueType: "",
            venueDescription: "",
            venueLocation: "",
            occupacy:"",
            area:"",
            features:"",
            price:"",
            photo: "",
            loading: false,
            createdProduct: data.venueName,
            getaRedirect: true,
          });
        }
      })
      .catch(console.log("Some Error Occured!"));
  };

  // Error message  //
  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-center alert alert-danger mt-3" style={{ display: error ? " " : "none" }}>
          <h4 style={{color:"black"}}>{error} <br></br> New Venue adding was failed...!!!</h4>
        </div>
      </div>
    );
  };

    // Success message//
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-center alert alert-success mt-3" style={{ display: createdProduct ? " " : "none" }}>
          <h4 style={{color:"black"}}>New Venue added Successfully...!!!</h4>
        </div>
      </div>
    );
  };

  //form
  const AddNewVenueTypes = () => (
    <form>
   
      
      <div className="form-group mt-2">
      <label htmlFor="venueName">Venue Name</label>
        <input
          onChange={handleChange("venueName")}
          name="photo"
          className="form-control"
          placeholder="Venue Name"
          value={venueName}
        />
      </div><br/>
    
      <div className="form-group mt-2">
      <label htmlFor="venueType">Venue Name</label>
        <select
          onChange={handleChange("venueType")}
          type="text"
          className="form-control"
          placeholder="Select the Venue Type"
          value={venueType}
        >
            <option>select condition...</option>
            <option>Weddings</option>
            <option>Conference Hall</option>
            <option>Parties</option>
        </select>
        </div><br/>
      <div className="form-group mt-2">
      <label htmlFor="venueDescription">Venue Description</label>
        <textarea
          onChange={handleChange("venueDescription")}
          name="photo"
          className="form-control"
          placeholder="Venue Description"
          value={venueDescription}
        />
      </div><br/>
      <div className="form-group mt-2">
      <label htmlFor="venueLocation">Venue Location</label>
        <input
          onChange={handleChange("venueLocation")}
          className="form-control"
          placeholder="Venue Location"
          value={venueLocation}
        />
      </div><br/>
      <div className="form-group mt-2">
      <label htmlFor="occupacy">Occupacy</label>
        <input
          onChange={handleChange("occupacy")}
         
          className="form-control"
          placeholder="Occupacy "
          value={occupacy}
        />
      </div><br/>

      <div className="form-group mt-2">
      <label htmlFor="area">Area</label>
        <input
          onChange={handleChange("area")}
         
          className="form-control"
          placeholder="Area "
          value={area}
        />
      </div><br/>
      <div className="form-group mt-2">
      <label htmlFor="features">Features</label>
        <input
          onChange={handleChange("features")}
        
          className="form-control"
          placeholder="Features "
          value={features}
        />
      </div><br/>
      <div className="form-group mt-2">
      <label htmlFor="price">Price</label>
        <input
          onChange={handleChange("price")}
        
          className="form-control"
          placeholder="price "
          value={price}
        />
      </div><br/>
      <div className="form-group">
      <label htmlFor="photo">Upload an Image</label>
        <label className="btn btn-block d-grid py-2" id="themeColor">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose an image"
          />
        </label>
      </div><br/>
      <div className="mt-4 d-grid mb-3">
        <button
          type="submit"
          onClick={onSubmit}
          className="rounded-pill" id="themeColor" style={{height:"55px"}}
        >
          Add New Venue 
        </button>
      </div>
    </form>
  );


  //by this return portion : rendering components
  return (
    <Base navigation="" title="Admin" description="Add a new venue"  >
      
      <div className="container" id = "themeColor">
      <Link to="/admin/events-task" className="btn btn=md btn-dark mb-3">
        Go Back
      </Link>

      <div className="row bg-dark text-white rounded" style={{height:"1000px"}}>
        <div className="col-md-8 offset-md-2 mt-3 py-3">
          {successMessage()}
          {AddNewVenueTypes()}
          {errorMessage()}
         
        </div>
      </div>
      </div>
      <br/><br/><br/><br/>
      <center><p style={{color:"gray",fontSize:"14px"}}>Atrium Leisure, all rights reserved.</p></center>
    </Base>
  );
};

export default AddNewVenueTypes;
