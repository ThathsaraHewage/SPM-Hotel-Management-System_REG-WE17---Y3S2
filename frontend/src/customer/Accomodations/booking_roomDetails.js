import React, { useState, useEffect } from "react";
import Base from "../../core/Base";
import { Link } from "react-router-dom";
import { getAllRoomTypes,getRoom} from "../../admin/helper/userapicall";
import { isAutheticated } from "../../auth/helper/index";

const BookingroomDetails = ({ match }) => {
  const { user, token } = isAutheticated();
  const [values, setValues] = useState({
    title: "",
    condition: "",
    price:"",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: "",
  });

  const {
    title,condition,price,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData,
  } = values;


  const preload = (roomId) => {
    getRoom(roomId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        preloadCategories();
        setValues({
          ...values,
          title: data.title,
          condition: data.condition,
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
    preload(match.params.roomId);
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

  const bookingForm = () => (
    <form>    
      <br/>
      <center><h4>Booking Details</h4></center>
      <br/>
      <br/>
      <span>Room Type :</span>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("title")}
          name="photo"
          className="form-control"
          placeholder="Room Type"
          value={title}
        />
      </div>
      
  
      <span>Room Condition :</span>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("condition")}
          type="text"
          className="form-control"
          placeholder="Room Condition"
          value={condition}
        />
      </div>

      <span>Price per day :</span>
      <div className="form-group mt-2">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder=""
          value={price}
        />
      </div><br/>
      <br/>
          <div className="d-grid mt-3">
            <Link
                className="btn btn-outline-primary mb-3 rounded-pill"
                to={`/book/complete`}
            >
                        <span className="">Complete Your Booking</span>
                      </Link>
          
          </div>
    </form>
  );

  return (
    <Base navigation="" title="Book a Room" description=" You can book a room of your selected category">
      
      <div class="progress" style={{height: "1px"}}>
  <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress"  style={{height: "1px"}}>
  <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    
      <div className="container bg-primary p-4"> 
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2 mt-3 py-3">
          {errorMessage()}
          {successMessage()}
          {bookingForm()}
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

export default BookingroomDetails;
