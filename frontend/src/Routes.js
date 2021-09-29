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

//Venue
import Accomodations from './user/Events';
import AddNewVenueType from "./admin/AddNewVenueType";
import ManageVenues from "./admin/ManageVenues";
import UpdateVenues from "./admin/UpdateVenues";

//Food
import UpdateFoodItem from "./admin/UpdateFoodItem";
import AddNewFoodItem from "./admin/AddNewFoodItem";
import ManageFoodItems from "./admin/ManageFoodItems";
import Dinning from "./user/Dinning";
//activities
import ActivityMenu from "./admin/ActivityMenu";
import AddNewActivity from "./admin/AddNewActivity";
import UpdateActivity from "./admin/UpdateActivity";
import ManageActivities from "./admin/ManageActivities";


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

        <UserRoutes path="/admin/foodItems" exact component={ManageFoodItems} />

        <UserRoutes
          path="/admin/foodItem/:productId"
          exact
          component={UpdateFoodItem}
        />

        <UserRoutes path="/admin/create/venuetype" exact component={AddNewVenueType}/>

        <UserRoutes path="/admin/manage-venues" exact component={ManageVenues} />
        
        <UserRoutes path="/admin/product/update/:productId" exact component={UpdateVenues}/>

        <UserRoutes path="/admin/events-task" exact component={Accomodations}/>      
        <UserRoutes path="/dinning" exact component={Dinning} />
        <UserRoutes path="/user/profile" exact component={userProfile}/>
        <UserRoutes path="/admin/get-activities" exact component={ManageActivities} />
        <UserRoutes path="/admin/product/update/:productId" exact component={UpdateActivity}/>
        <UserRoutes path="/admin/manage-activities" exact component={ActivityMenu}/>
        <UserRoutes path="/admin/create/activity" exact component={AddNewActivity}/>

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
