import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//signin and signup 
import Signin from "./user/Signin";
import Signup from "./user/Signup";

//role routes
import UserRoutes from "./auth/helper/AdminRoutes";
import PrivateRoutes from "./auth/helper/PrivateRoutes";

//management dashboards
import HomeAfterLogin from "./core/Home";

//profiles
import userProfile from "./user/userProfile";

//Accomodations
import Events from './user/Events';
import AddNewVenueType from "./admin/AddNewVenueType";
import ManageVenues from "./admin/ManageVenues";
import UpdateVenues from "./admin/UpdateVenues";

 
 import DetailedVenue from "./customer/WeddingEvents/DetailedVenue";
 import Booking_venueDetails from './customer/WeddingEvents/booking_venueDetails';
 import booking_venue from './customer/WeddingEvents/booking_venue';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login-home" exact component={HomeAfterLogin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={Signin} />

        <UserRoutes path="/user/profile" exact component={userProfile}/>

        <UserRoutes path="/admin/create/venuetype" exact component={AddNewVenueType}/>

        <UserRoutes path="/admin/manage-venues" exact component={ManageVenues} />
        
        <UserRoutes path="/admin/product/update/:productId" exact component={UpdateVenues}/>

        
        <Route path="/customer/detailedVenue" exact component={DetailedVenue}/>
        <Route path="/book/venue/:venueId" exact component={Booking_venueDetails}/>
        <Route path="/customer/bookingVenue" exact component={booking_venue}/>
         {/* events -cutomer*/}
         {/* <Route path="/view/viewVenues" exact component={ViewVenues} /> */}


        {/* <UserRoutes path="/available-rooms" exact component={ApprovedReseachPaper} /> */}
        <UserRoutes path="/admin/events-task" exact component={Events}/>

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
