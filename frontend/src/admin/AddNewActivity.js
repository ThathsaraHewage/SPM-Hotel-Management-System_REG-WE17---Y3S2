import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { addNewActivity } from "./helper/activityAPIcall";

const AddNewActivity = () => {
    const { user, token } = isAutheticated();

    const [values, setValues] = useState({
        title: "",
        description: "",
        inclusions: "",
        price:"",
        availableTime:"",
        availableDate:"",
        photo: "",
        loading: false,
        error: "",
        createdProduct: "",
        getaRedirect: false,
        formData: "",
    });

    const {title,description,inclusions,availableTime,availableDate,price,loading,error,createdProduct,getaRedirect,formData,} = values;

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
        addNewActivity(user._id, token, formData)
            .then((data) => {
                if (data.error) {
                    setValues({ ...values, error: data.error });
                } else {
                    setValues({
                        ...values,
                        title: "",
                        description: "",
                        inclusions: "",
                        price:"",
                        availableTime:"",
                        availableDate:"",
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
                    <h4 style={{color:"black"}}>{error} <br></br> New activity adding was failed...!!!</h4>
                </div>
            </div>
        );
    };

    // Success message//
    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-center alert alert-success mt-3" style={{ display: createdProduct ? " " : "none" }}>
                    <h4 style={{color:"black"}}>New activity added Successfully...!!!</h4>
                </div>
            </div>
        );
    };

    //form
    const AddaNewActivityForm = () => (
        <form>
            <span>Upload an image</span>
            <div className="form-group">
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

            <label htmlFor="activity name">Enter Activity Name</label>
            <div className="form-group mt-2">
                <input
                    onChange={handleChange("title")}
                    name="photo"
                    type="text"
                    className="form-control"
                    placeholder="Activity Name"
                    value={title}
                />
            </div><br/>

            <label htmlFor="descriptio9n">Enter Description</label>
            <div className="form-group mt-2">
        <textarea
            onChange={handleChange("description")}
            name="photo"
            className="form-control"
            placeholder="Description"
            value={description}
        />
            </div><br/>

            <label htmlFor="inclusions">Enter Inclusions</label>
            <div className="form-group mt-2">
                <input
                    onChange={handleChange("inclusions")}
                    type="text"
                    className="form-control"
                    placeholder="inclusions"
                    value={inclusions}
                />
            </div><br/>


            <label htmlFor="available time">Enter Avaialable Time</label>
            <div className="form-group mt-2">
                <input
                    onChange={handleChange("availableTime")}
                    type="time"
                    className="form-control"
                    placeholder="available Time"
                    value={availableTime}
                />
            </div><br/>


            <label htmlFor="available date">Enter Available Days</label>
            <div className="form-group mt-2">
                <select
                    onChange={handleChange("availableDate")}
                    type="text"
                    className="form-control"
                    placeholder="available Date"
                    value={availableDate}
                >
                     <option>Available Days</option>
                    <option>Weekdays</option>
                    <option>Weekend</option>
                    <option>Poya Day</option>
                </select>
            </div><br/>

            <label htmlFor="price">Enter Price For A Day</label>
            <div className="form-group mt-2">
                <input
                    onChange={handleChange("price")}
                    type="number"
                    className="form-control"
                    placeholder="Price .USD "
                    value={price}
                />
            </div><br/>

            <div className="mt-4 d-grid mb-3">
                <button
                    type="submit"
                    onClick={onSubmit}
                    className="btn btn-outline-danger rounded-pill"
                >
                    Add New Activity
                </button>
            </div>
        </form>
    );


    //by this return portion : rendering components
    return (
        <Base navigation="" title="Admin" description="Add a new activity"  >

            <div className="container p-4" id="themeColor">
                <Link to="/admin/manage-activities" className="btn btn=md btn-dark mb-3">
                    Go Back
                </Link>

                <div className="row bg-dark text-white rounded">
                    <div className="col-md-8 offset-md-2 mt-3 py-3">
                        {AddaNewActivityForm()}
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

export default AddNewActivity;
