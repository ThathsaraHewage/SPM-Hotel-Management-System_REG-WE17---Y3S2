import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getAllRoomTypes,getRoom,updateRoom} from "./helper/userapicall";
import { isAutheticated } from "../auth/helper/index";
import '../styles.css';

const UpdateResearchPapers = ({ match }) => {
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

  const {
    title,
    description,
    condition,
    rooms,
    price,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData,
  } = values;

  const preload = (productId) => {
    getRoom(productId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        preloadCategories();
        setValues({
          ...values,
          title: data.title,
          description: data.description,
          condition: data.condition,
          rooms: data.rooms,
          price: data.price,
          formData: new FormData(),
        });
      }
    });
  };

  const preloadCategories = () => {
    getAllRoomTypes().then((data) => {
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
    updateRoom(match.params.productId, user._id, token, formData).then(
      (data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            title: "",
            description: "",
            condition: "",
            photo: "",
            rooms: "",
            price:"",
            loading: false,
            createdProduct: data.title,
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
        <h4 style={{color:"black"}}>{error} Room update is failed !..Try again...</h4>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success mt-3"
        style={{ display: createdProduct ? " " : "none" }}
      >
        <h4 style={{color:"black"}}>Room Updated successfully..</h4>
      </div>
    );
  };

  const updateRoomForm = () => (
    <form>
      <span>Re-select an image</span>
      <div className="form-group d-grid">
        <label className="btn btn-block" id="themeColor" >
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
          placeholder="Research Paper Title"
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
          placeholder="Room Condition"
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
          placeholder="Number of Rooms"
          value={rooms}
        />
      </div>
      <span>Price</span>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price Range .USD"
          value={price}
        />
      </div>
      <div className="d-grid mt-3">
        <button
          type="submit"
          onClick={onSubmit}
          className="btn btn-outline-dark mb-3 rounded-pill"
          id="themeColor" 
        >
          Update Room 
        </button>
      </div>
    </form>
  );

  return (
    <Base title="Admin" description="Update room details">
      
      <div className="container p-4" id="themeColor" >
        <Link className="btn btn=md btn-dark mb-3" to={`/admin/manage-rooms`}>
          <span className="">Go Back</span>
        </Link><br/>
        <Link className="btn btn=md btn-dark mb-3" to={`/admin/accomodation`}>
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

export default UpdateResearchPapers;
