import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import {
  getAllFoodItems,
  getFoodItem,
  updateFoodItem,
} from "./helper/userapicall";
import { isAutheticated } from "../auth/helper/index";

const UpdateFoodItem = ({ match }) => {
  const { user, token } = isAutheticated();
  const [values, setValues] = useState({
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
    // loading,
    error,
    createdProduct,
    // getaRedirect,
    formData,
  } = values;

  const preload = (productId) => {
    getFoodItem(productId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        preloadCategories();
        setValues({
          ...values,
          name: data.name,
          description: data.description,
          category: data.category,
          discount: data.discount,
          price: data.price,
          formData: new FormData(),
        });
      }
    });
  };

  const preloadCategories = () => {
    getAllFoodItems().then((data) => {
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
    updateFoodItem(match.params.productId, user._id, token, formData).then(
      (data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            description: "",
            category: "",
            photo: "",
            discount: "",
            price: "",
            loading: false,
            createdProduct: data.name,
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
        <h4 style={{ color: "black" }}>
          {error} Food Item update is failed !..Try again...
        </h4>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success mt-3"
        style={{ display: createdProduct ? " " : "none" }}
      >
        <h4 style={{ color: "black" }}>Food Item Updated successfully..</h4>
      </div>
    );
  };

  const updateFoodItemForm = () => (
    <form>
      <span>Re-select an image</span>
      <div className="form-group d-grid">
        <label className="btn btn-block " id="themeColor">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose an image"
          />
        </label>
      </div>
      <div className="form-group mt-2">
        <label>Item Name</label>
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="enter food item name..."
          value={name}
        />
      </div>
      <div className="form-group mt-2">
        <label>Item Description</label>
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control"
          placeholder="enter food item description..."
          value={description}
        />
      </div>
      <div className="form-group mt-2">
        <label>Item Category</label>
        <select
          onChange={handleChange("category")}
          type="text"
          className="form-control"
          placeholder="select food category..."
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
          placeholder="enter food item discount..."
          value={discount}
        />
      </div>

      <div className="form-group mt-2">
        <label>Item Price</label>
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="enter food item price..."
          value={price}
        />
      </div>
      <div className="d-grid mt-3">
        <button
          type="submit"
          onClick={onSubmit}
          className="btn btn-outline-light text white mb-3 rounded-pill"
        >
          Update Food Item
        </button>
      </div>
    </form>
  );

  return (
    <Base title="Admin" description="Update room details">
      <div className="container  p-4" id="themeColor">
        <Link className="btn btn=md btn-dark mb-3" to={`/admin/foodItems`}>
          <span className="">Go Back</span>
        </Link>
        <br />
        <Link className="btn btn=md btn-dark mb-3" to={`/dinning`}>
          <span className="">Menu</span>
        </Link>
        <div className="row bg-dark text-white rounded">
          <div className="col-md-8 offset-md-2 mt-3 py-3">
            {errorMessage()}
            {successMessage()}
            {updateFoodItemForm()}
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

export default UpdateFoodItem;
