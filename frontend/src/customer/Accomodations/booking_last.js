import React, { useState, useEffect } from "react";
import Base from "../../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../../auth/helper";
import { AddNewRoomType } from "../../admin/helper/userapicall";
import '../../styles.css';

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


// import React, { useState, useEffect } from "react";
// import Base from "../../core/Base";
// import { Link } from "react-router-dom";
// import { AddBooking} from "../../admin/helper/userapicall";
// import { isAutheticated } from "../../auth/helper/index";

// const BookingroomDetails = ({ match }) => {
//   const { user, token } = isAutheticated();
//   const [values, setValues] = useState({
//     firstname:"",
//     lastname:"",
//     address:"",
//     city:"",
//     days:"",
//     checkindate:"",
//     norooms:"",
//     holdersname:"",
//     cardnumber:"",
//     cvv:"",
//     expdate:"",
//     photo: "",
//     loading: false,
//     error: "",
//     createdProduct: "",
//     getaRedirect: false,
//     formData: "",
//   });

//   const {
//   firstname,lastname,address,city,days,checkindate,norooms,holdersname,cardnumber,cvv,expdate,
//     loading,
//     error,
//     createdProduct,
//     getaRedirect,
//     formData,
//   } = values;

//   const preload = () => {      
//     setValues({ ...values, formData: new FormData() });
//   };
  
//   useEffect(() => {
//     preload();
//   }, []);

//   const handleChange = (name) => (event) => {
//     const value = name === "photo" ? event.target.files[0] : event.target.value;
//     formData.set(name, value);
//     setValues({ ...values, [name]: value });
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//     setValues({ ...values, error: "", loading: true });
//     AddBooking(user._id, token, formData)
//       .then((data) => {
//         if (data.error) {
//           setValues({ ...values, error: data.error });
//         } else {
//           setValues({
//             ...values,
//             firstname:"",
//             lastname:"",
//             address:"",
//             city:"",
//             days:"",
//             checkindate:"",
//             norooms:"",
//             holdersname:"",
//             cardnumber:"",
//             cvv:"",
//             expdate:"",
//             photo: "",
//             loading: false,
//             createdProduct: data.title,
//             getaRedirect: true,
//           });
//         }
//       })
//       .catch(console.log("Some Error Occured!"));
//   };

//   const errorMessage = () => {
//     return (
//       <div
//         className="alert alert-danger mt-3"
//         style={{ display: error ? " " : "none" }}
//       >
//         <h4 style={{color:"black"}}>{error} failed !..Try again...</h4>
//       </div>
//     );
//   };

//   const successMessage = () => {
//     return (
//       <div
//         className="alert alert-success mt-3"
//         style={{ display: createdProduct ? " " : "none" }}
//       >
//         <h4 style={{color:"black"}}>successfully..</h4>
//       </div>
//     );
//   };

//   const bookingForm = () => (
//     <form>
//       <div className="form-group d-grid">
//         <label className="btn btn-block btn-primary">
//           <input
//             onChange={handleChange("photo")}
//             type="file"
//             name="photo"
//             accept="image"
//             placeholder="choose a file"
            
//           />
//         </label>
//       </div>
    
//     <br/>
//       <br/>
//       <center><h4>Your Details</h4></center>
//       <br/>
//       <div class="row g-3">
//           <div class="col-md-6">
//             <label  class="form-label">First Name</label>
//             <input
//               type="text"
//               onChange={handleChange("firstname")}
//               className="form-control"
//               placeholder="Jason"
//               value={firstname}
//               />
//           </div>

//           <div class="col-md-6">
//             <label class="form-label">Last Name</label>
//             <input 
//              type="text"
//              onChange={handleChange("lastname")}
//              className="form-control"
//              placeholder="Derulo"
//              value={lastname}
//             />
//           </div>

//           <div class="col-12">
//             <label for="inputAddress" class="form-label">Address</label>
//             <input 
//              type="text"
//              onChange={handleChange("address")}
//              className="form-control"
//              placeholder=""
//              value={address}/>
//           </div>

//           <div class="col-md-6">
//             <label for="inputCity" class="form-label">City</label>
//             <input
//              type="text"
//              onChange={handleChange("city")}
//              className="form-control"
//              placeholder=""
//              value={city}/>
//           </div>

//           <div class="col-md-4">
//             <label for="inputState" class="form-label">Number of days</label>
//             <input 
//               type="number"
//               onChange={handleChange("days")}
//               className="form-control"
//               placeholder=""
//               value={days}/>
//           </div>

//           <div class="col-md-2">
//             <label for="inputZip" class="form-label">Check-In Date</label>
//             <input type="date" 
//                       onChange={handleChange("checkindate")}
//                       className="form-control"
//                       placeholder=""
//                       value={checkindate}/>
//           </div>

//           <div class="col-md-6">
//             <label for="inputCity" class="form-label">Number of Rooms</label>
//             <input type="number"
//               onChange={handleChange("norooms")}
//               className="form-control"
//               placeholder=""
//               value={norooms}/>
//           </div>
//   </div>

//       <br/>
//       <br/>
//       <br/>
//       <center><h4>Payment Details</h4></center>
//       <br/>
//       <div class="row g-3">

//           <div class="col-md-6">
//               <label  class="form-label">Card Holder's Name</label>
//                 <input type="text" 
//                     onChange={handleChange("holdersname")}
//                     className="form-control"
//                     placeholder=""
//                     value={holdersname}/>
//             </div>
//             <div class="col-md-6">
//               <label for="inputCity" class="form-label">Card Number</label>
//               <input type="text" 
//                  onChange={handleChange("cardnumber")}
//                  className="form-control"
//                  placeholder=""
//                  value={cardnumber}/>
//             </div>
//             <div class="col-md-4">
//               <label for="inputState" class="form-label">CVV code</label>
//               <input type="number" 
//                 onChange={handleChange("cvv")}
//                 className="form-control"
//                 placeholder=""
//                 value={cvv}/>
//             </div>
//             <div class="col-md-2">
//               <label for="inputZip" class="form-label">Expire Date</label>
//               <input type="date" 
//                onChange={handleChange("expdate")}
//                className="form-control"
//                placeholder=""
//                value={expdate}/>
//             </div>

//             <div class="col-12">
//               <div class="form-check">
//                 <input class="form-check-input" type="checkbox" id="gridCheck"/>
//                 <label class="form-check-label" for="gridCheck">
//                   Agree with terms and conditions
//                 </label>
//               </div>
//             </div>
//             </div>
//             <br/>
//             <br/>
//           <div className="d-grid mt-3">
//             <button
//               type="submit"
//               onClick={onSubmit}
//               className="btn btn-outline-primary mb-3 rounded-pill"
//             >
//               Complete Your Booking
//             </button>
//           </div>
//     </form>
//   );

//   return (
//     <Base navigation="" title="Book a Room" description=" You can book a room of your selected category">
      
//       <div className="container bg-primary p-4">
     
      
//       <div className="row bg-dark text-white rounded">
//         <div className="col-md-8 offset-md-2 mt-3 py-3">
//           {errorMessage()}
//           {successMessage()}
//           {bookingForm()}
//         </div>
//       </div>
//       </div>
      
//       <br/><br/><br/><br/>
//       <center>  <p style={{ color: "gray", fontSize: "14px" }}>
//         Atrium Leisure, all rights reserved.
//       </p></center>
//     </Base>
//   );
// };

// export default BookingroomDetails;
