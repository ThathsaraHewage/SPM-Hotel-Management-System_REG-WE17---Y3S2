import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getFoodItem, getAllFoodItems } from "../admin/helper/userapicall";

const OrderFoodItems = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    category: "",
    discount: "",
    price: 0,
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
    discount,
    price,
    loading,
    error,
    createdProduct,
    getaRedirect,
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
      <span>Food Name :</span>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("title")}
          name="photo"
          className="form-control"
          placeholder="Room Type"
          value={name}
        />
      </div>

      <span>Description :</span>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("condition")}
          type="text"
          className="form-control"
          placeholder="Room Condition"
          value={description}
        />
      </div>

      <span>Category :</span>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("condition")}
          type="text"
          className="form-control"
          placeholder="Room Condition"
          value={category}
        />
      </div>

      <span>Discount :</span>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder=""
          value={discount}
        />
      </div>
      <span>Price :</span>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder=""
          value={price}
        />
      </div>
      <br />
      <br />
      <div className="d-grid mt-3">
        <Link
          className="btn btn-outline-primary mb-3 rounded-pill"
          to={`/book/food/complete`}
        >
          <span className="">Complete Your Booking</span>
        </Link>
      </div>
    </form>
  );

  return (
    <Base
      navigation=""
      title="Book a Room"
      description=" You can book a room of your selected category"
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

export default OrderFoodItems;
