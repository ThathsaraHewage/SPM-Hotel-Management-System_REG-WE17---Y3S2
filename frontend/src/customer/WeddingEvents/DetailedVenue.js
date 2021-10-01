import React, { useState, useEffect } from "react";
import Base from "../../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../../auth/helper";
import { getAllVenueTypes } from "../../admin/helper/userapicall";
import ImageHelper from "../../core/helper/ImageHelperCustomer";
import '../../styles.css';
import logo from '../../core/images/loggo.png';
import image1 from '../../core/images/image1.jpg';
import image22 from '../../core/images/image22.jpg';
import image3 from '../../core/images/image3.jpg';
import image4 from '../../core/images/image4.jpg';

const DetailedVenue = () => {
  const [Venues, setVenueTypes] = useState([]);

  //   const { user, token } = isAutheticated();

  const preload = () => {
    getAllVenueTypes().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setVenueTypes(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);



  return (
    <Base navigation="Home > WeddingAndEvents > Venues" title="" description="">
<center><b><h1>Venues</h1></b> </center><br/><br/>
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={image1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={image22} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image4} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br/><br/>

    <center><p><b>Offering a wide variety of venues that are suited for both corporate and social functions, the versatile meeting and banquet rooms at Atrium Leisure are some of the finest event venues in Colombo. From outdoor spaces such as The Oval to grand reception halls and conference facilities found in The Dorchester or The Balmoral, we provide the ideal setting for your event, whether large or small.</b></p></center><br/><br/>

    {/* <div className="container p-4" id="themeColorCustomer"> */}
      <br />
      <div className="row bg-white">
        {Venues.map((Venues, index) => {
          return (
            <center><div className="card text-center " style={{width:"70%"}}>
              <div key={index} className="text-white rounded m-3 card border-primary mb-3">
                <div className="card text-left">
                  <div
                    style={{
                      alignSelf: "center",
                      margin: 30,
                    }}
                
                  >
                    <ImageHelper
                      product={Venues}
                      className="card-img"
                      alt="Venue Types"
                    />
                  </div>
                  <div className="card-body bg-white text-dark rounded m-3">
                    <h3 className="card-title">{Venues.venueName}</h3>
                    <p className="card-text m-0">
                     <br/>{Venues.venueDescription}
                    </p>
                   
                    <p className="card-text m-0">
                     <br/> <b>Suitable For:</b>{Venues.venueType}
                    </p>
                    <p className="card-text m-0">
                     <br/> <b>Location:</b>{Venues.venueLocation}
                    </p>
                    <p className="card-text m-0">
                     <br/> <b>Occupancy:</b>{Venues.occupacy}
                    </p>
                    <p className="card-text m-0">
                     <br/> <b>Area:</b>{Venues.area}
                    </p>
                    <p className="card-text m-0">
                     <br/> <b>Features:</b>{Venues.features}
                    </p><br/>
                    <button type="button" class="btn btn-secondary btn-lg" disabled>
                    <p className="card-text m-0">
                      <b>Price:</b> {Venues.price} <b>Rupees per 5 hours</b>
                    </p>
                    </button>
                  </div>
                

                        <Link
                        to={`/book/venue/${Venues._id}`}
                      >
                        <div class="d-grid gap-2 col-6 mx-auto">
                        <span className="btn btn-primary">BOOK</span>
                        </div>
                      </Link>
                  <br/><br/>
                </div>
              </div>
            </div></center>
          );
        })}
      </div>
      <br />

    {/* </div> */}

    <br />
    <br />
    <br />  <center><img src={logo} style={{width:"300px"}}/></center>
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

export default DetailedVenue;

