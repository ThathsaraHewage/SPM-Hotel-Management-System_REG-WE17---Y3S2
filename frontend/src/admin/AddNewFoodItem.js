import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
// import { AddNewRoomType } from "./helper/userapicall";
import { AddNewFoodItem } from "./helper/userapicall";
import ManageFoodItems from "./ManageFoodItems";

const AddNewRoomTypes = () => {
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
    // title: "",
    // description: "",
    // condition: "",
    // rooms: "",
    // price:"",
    // photo: "",
    // loading: false,
    // error: "",
    // createdProduct: "",
    // getaRedirect: false,
    // formData: "",

    name: "",
    description: "",
    price: "",
    category: "",
    discount: 0,
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: "",
  });

  const {
    name,
    description,
    category,
    price,
    discount,
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

  // on submit function
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    AddNewFoodItem(user._id, token, formData)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            description: "",
            category: "",
            discount: 0,
            price: "",
            photo: "",
            loading: false,
            createdProduct: data.name,
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
        <div
          className="col-md-6 offset-sm-3 text-center alert alert-danger mt-3"
          style={{ display: error ? " " : "none" }}
        >
          <h4 style={{ color: "black" }}>
            {error} <br></br> New Food item adding was failed...!!!
          </h4>
        </div>
      </div>
    );
  };

  // Success message//
  const successMessage = () => {
    return (
      <div className="row">
        <div
          className="col-md-6 offset-sm-3 text-center alert alert-success mt-3"
          style={{ display: createdProduct ? " " : "none" }}
        >
          <h4 style={{ color: "black" }}>
            New Food item added Successfully...!!!
          </h4>
        </div>
      </div>
    );
  };

  const AddaNewFoodItemForm = () => (
    <form>
      <span>Upload an image</span>
      <div className="form-group">
        <label className="btn btn-block  d-grid py-2" id="themeColor">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose an image"
          />
        </label>
      </div>
      <label>Item Name</label>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group mt-2">
        <label>Item Description</label>
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group mt-2">
        <label>Item Category</label>
        <select
          onChange={handleChange("category")}
          type="text"
          className="form-control"
          placeholder="Category"
          value={category}
        >
          <option>Select Category...</option>
          <option>Sri lankan</option>
          <option>Chinese</option>
          <option>Indian</option>
          <option>Japanese</option>
        </select>
      </div>

      <div className="form-group mt-2">
        <label>Item Discount</label>
        <input
          onChange={handleChange("discount")}
          type="number"
          className="form-control"
          placeholder="discount amount"
          value={discount}
        />
      </div>
      <br />
      <div className="form-group mt-2">
        <label>Item Price</label>
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price Range .USD "
          value={price}
        />
      </div>
      <br />

      <div className="mt-4 d-grid mb-3">
        <button
          type="submit"
          onClick={onSubmit}
          className="btn btn-outline-light text white rounded-pill"
        >
          Create
        </button>
      </div>
    </form>
  );

  //by this return portion : rendering components
  return (
    <Base navigation="" title="Admin" description="Add a new room type">
      <div className="container  p-4" id="themeColor">
        <Link to="/dinning" className="btn btn=md btn-dark mb-3">
          Go Back
        </Link>

        <div className="row bg-dark text-white rounded">
          <div className="col-md-8 offset-md-2 mt-3 py-3">
            {AddaNewFoodItemForm()}
            {errorMessage()}
            {successMessage()}
          </div>
        </div>
      </div>
      <br />
      <br />
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

export default AddNewRoomTypes;
