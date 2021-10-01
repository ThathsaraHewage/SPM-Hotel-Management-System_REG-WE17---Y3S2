import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//signin and signup
import Signin from "./user/Signin";
import Signup from "./user/Signup";

//role routes
import UserRoutes from "./auth/helper/AdminRoutes";

//management dashboards
import HomeAfterLogin from "./core/Home";

//profiles
import userProfile from "./user/userProfile";

//Events
import Events from "./user/Events";
import AddNewVenueType from "./admin/AddNewVenueType";
import ManageVenues from "./admin/ManageVenues";
import UpdateVenues from "./admin/UpdateVenues";
///////////////////////////Accomodations

//>Accomodation

import Accomodations from "./user/Accomodations";
import AddNewRoomType from "./admin/AddNewRoomType";
import ManageRooms from "./admin/ManageRooms";
import UpdateRooms from "./admin/UpdateRooms";

//Dinning
import UpdateFoodItem from "./admin/UpdateFoodItem";
import AddNewFoodItem from "./admin/AddNewFoodItem";
import ManageFoodItems from "./admin/ManageFoodItems";
import Dinning from "./user/Dinning";

//activity
import ManageActivities from "./admin/ManageActivities";
import ActivityMenu from "./admin/ActivityMenu";
import AddNewActivity from "./admin/AddNewActivity";
import EditActivity from "./admin/EditActivity";

import CustomerHome from "./customer/customerHome";
import ViewFoodItems from "./customer/viewFoodItems";
import OrderFoodItems from "./customer/orderFoodItems";
 
 import DetailedVenue from "./customer/WeddingEvents/DetailedVenue";
 import Booking_venueDetails from './customer/WeddingEvents/booking_venueDetails';
 import booking_venue from './customer/WeddingEvents/booking_venue';

import ViewAllActivities from "./customer/ViewAllActivities";
import BookActivity from "./customer/BookActivity";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login-home" exact component={HomeAfterLogin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={Signin} />

        <UserRoutes path="/user/profile" exact component={userProfile} />

        <UserRoutes
          path="/admin/foodItem/new"
          exact
          component={AddNewFoodItem}
        />

        <Route path="/customer-home" exact component={CustomerHome} />
        <Route path="/customer-dinning" exact component={ViewFoodItems} />

        <UserRoutes path="/admin/foodItems" exact component={ManageFoodItems} />

        <UserRoutes
          path="/admin/foodItem/:productId"
          exact
          component={UpdateFoodItem}
        />

        <UserRoutes
          path="/admin/create/venuetype"
          exact
          component={AddNewVenueType}
        />
        <UserRoutes
          path="/admin/manage-venues"
          exact
          component={ManageVenues}
        />
        <UserRoutes
          path="/admin/product/update/:productId"
          exact
          component={UpdateVenues}
        />
        <UserRoutes path="/admin/events-task" exact component={Events} />

        <UserRoutes
          path="/admin/create/roomtype"
          exact
          component={AddNewRoomType}
        />
        <UserRoutes path="/admin/manage-rooms" exact component={ManageRooms} />
        <UserRoutes
          path="/admin/product/update/:productId"
          exact
          component={UpdateRooms}
        />
        <UserRoutes
          path="/admin/accomodation"
          exact
          component={Accomodations}
        />

        <UserRoutes
          path="/admin/foodItem/new"
          exact
          component={AddNewFoodItem}
        />
        <UserRoutes path="/admin/foodItems" exact component={ManageFoodItems} />
        <UserRoutes
          path="/admin/foodItem/:productId"
          exact
          component={UpdateFoodItem}
        />
        <UserRoutes path="/dinning" exact component={Dinning} />

        <UserRoutes
          path="/admin/get-activities"
          exact
          component={ManageActivities}
        />
        <UserRoutes
          path="/admin/product/update/:productId"
          exact
          component={EditActivity}
        />
        <UserRoutes
          path="/admin/manage-activities"
          exact
          component={ActivityMenu}
        />
        <UserRoutes
          path="/admin/create/activity"
          exact
          component={AddNewActivity}
        />

        <UserRoutes
          path="/order/food/:productId"
          exact
          component={OrderFoodItems}
        />
        
        <Route path="/customer/detailedVenue" exact component={DetailedVenue}/>
        <Route path="/book/venue/:venueId" exact component={Booking_venueDetails}/>
        <Route path="/customer/bookingVenue" exact component={booking_venue}/>
        <Route path="/customer/viewactivity" exact component={ViewAllActivities}/>
        <Route path="/customer/bookactivity" exact component={BookActivity}/>

        <UserRoutes path="/admin/events-task" exact component={Events}/>

        <UserRoutes path="/dinning" exact component={Dinning} />
        <UserRoutes path="/user/profile" exact component={userProfile}/>
    <UserRoutes path="/admin/create/roomtype" exact component={AddNewRoomType}/>
    <UserRoutes path="/admin/manage-rooms" exact component={ManageRooms} />
    <UserRoutes path="/admin/product/update/:productId" exact component={UpdateRooms}/>
    <UserRoutes path="/admin/accomodation" exact component={Accomodations}/>

    <UserRoutes path="/admin/foodItem/new" exact component={AddNewFoodItem}/>
    <UserRoutes path="/admin/foodItems" exact component={ManageFoodItems} />
    <UserRoutes path="/admin/foodItem/:productId" exact component={UpdateFoodItem}/>
    <UserRoutes path="/dinning" exact component={Dinning} />
   
    <UserRoutes path="/admin/get-activities" exact component={ManageActivities} />
    <UserRoutes path="/admin/product/update/:productId" exact component={EditActivity}/>
    <UserRoutes path="/admin/manage-activities" exact component={ActivityMenu}/>
    <UserRoutes path="/admin/create/activity" exact component={AddNewActivity}/>
  
    

        <UserRoutes path="/admin/create/roomtype" exact component={AddNewRoomType}/>
        <UserRoutes path="/admin/manage-rooms" exact component={ManageRooms} />
        <UserRoutes path="/admin/product/update/:productId" exact component={UpdateRooms}/>
        <UserRoutes path="/admin/accomodation" exact component={Accomodations}/>

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
