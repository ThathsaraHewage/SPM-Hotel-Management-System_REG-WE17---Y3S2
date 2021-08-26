import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { AddNewRoomType } from "./helper/userapicall";
import '../styles.css';

const AddNewRoomTypes = () => {
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
    title: "",
    description: "",
    condition: "",
    rooms: "",
    price:"",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: "",
  });

  const {title,description,condition,rooms,price,loading,error,createdProduct,getaRedirect,formData,} = values;

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
    AddNewRoomType(user._id, token, formData)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            title: "",
            description: "",
            condition: "",
            rooms: "",
            price:"",
            photo: "",
            loading: false,
            createdProduct: data.title,
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
          <h4 style={{color:"black"}}>{error} <br></br> New room type adding was failed...!!!</h4>
        </div>
      </div>
    );
  };

    // Success message//
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-center alert alert-success mt-3" style={{ display: createdProduct ? " " : "none" }}>
          <h4 style={{color:"black"}}>New room type added Successfully...!!!</h4>
        </div>
      </div>
    );
  };

  //form
  const AddaNewRoomForm = () => (
    <form>
      <span>Upload an image</span>
      <div className="form-group">
        <label className="btn btn-block d-grid py-2"  id="themeColor">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose an image"
          />
        </label>
      </div>
      <span>Room Type</span>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("title")}
          name="photo"
          className="form-control"
          placeholder="Room Type"
          value={title}
        />
      </div>
      <span>Description</span>
      <div className="form-group mt-2">
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <span>Room Condition</span>
      <div className="form-group mt-2">
        <select
          onChange={handleChange("condition")}
          type="text"
          className="form-control"
          placeholder="Condition"
          value={condition}
        >
            <option>select condition...</option>
            <option>AC</option>
            <option>Non-AC</option>

        </select>
      </div>
      <span>Number of rooms</span>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("rooms")}
          type="number"
          className="form-control"
          placeholder="Number of rooms"
          value={rooms}
        />
      </div><br/>
      <span>Price</span>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price Range .USD "
          value={price}
        />
      </div><br/>
    
      <div className="mt-4 d-grid mb-3">
        <button
          type="submit"
          onClick={onSubmit}
          className="btn btn-outline-dark rounded-pill"
          id="themeColor" 
        >
          Add New Room Type
        </button>
      </div>
    </form>
  );


  //by this return portion : rendering components
  return (
    <Base navigation="" title="Admin" description="Add a new room type"  >
      
      <div className="container p-4" id="themeColor">
      <Link to="/admin/accomodation" className="btn btn=md btn-dark mb-3">
        Go Back
      </Link>

      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2 mt-3 py-3">
          {AddaNewRoomForm()}
          {errorMessage()}
          {successMessage()}
        </div>
      </div>
      </div>
      <br/><br/><br/><br/>
      <center><p style={{color:"gray",fontSize:"14px"}}>Atrium Leisure, all rights reserved.</p></center>
    </Base>
  );
};

export default AddNewRoomTypes;
