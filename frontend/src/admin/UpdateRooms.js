import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getAllVenueTypes,getProduct,updateProduct} from "./helper/userapicall";
import { isAutheticated } from "../auth/helper/index";

const UpdateVenues = ({ match }) => {
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

  const {
    venueName,
    venueType,
    venueDescription,
    venueLocation,
    occupacy,
    area,
    features,
    price,
    photo,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData,
  } = values;

  const preload = (productId) => {
    getProduct(productId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        preloadCategories();
        setValues({
          ...values,
          venueName: data.venueName,
          venueType: data.venueType,
          venueDescription: data.venueDescription,
          venueLocation: data.venueLocation,
          occupacy: data.occupacy,
          area: data.area,
          features: data.features,
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
    preload(match.params.productId);
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    updateProduct(match.params.productId, user._id, token, formData).then(
      (data) => {
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
            loading: false,
            createdProduct: data.venueName,
          });
        }
      }
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger mt-3"
        style={{ display: error ? " " : "none" }}
      >
        <h4 style={{color:"black"}}>{error} Venue update is failed !..Try again...</h4>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success mt-3"
        style={{ display: createdProduct ? " " : "none" }}
      >
        <h4 style={{color:"black"}}>Venue Updated successfully..</h4>
      </div>
    );
  };

  const updateRoomForm = () => (
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
        <label className="btn btn-block  d-grid py-2" id="themeColor">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose an image"
          />
        </label>
      </div><br/><br/>

      <div className="d-grid mt-3">
        <button
          type="submit"
          onClick={onSubmit}
          className="mb-3 rounded-pill" id="themeColor" style={{height:"55px"}}
        >
          Update Venue
        </button>
      </div>
    </form>
  );

  return (
    <Base title="Admin" description="Update venue details">
      
      <div className="container" id="themeColor">
        <Link className="btn btn=md btn-dark mb-3" to={`/admin/manage-venues`}>
          <span className="">Go Back</span>
        </Link><br/>
        <Link className="btn btn=md btn-dark mb-3" to={`/admin/events-task`}>
          <span className="">Menu</span>
        </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2 mt-3 py-3">
          {errorMessage()}
          {successMessage()}
          {updateRoomForm()}
        </div>
      </div>
      </div>
      
      <br/><br/><br/><br/>
      <center><p style={{color:"gray",fontSize:"14px"}}>Atrium Leisure, all rights reserved.</p></center>
    </Base>
  );
};

export default UpdateVenues;
