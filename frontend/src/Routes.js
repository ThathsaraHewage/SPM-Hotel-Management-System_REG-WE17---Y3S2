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

;

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

        <UserRoutes path="/admin/events-task" exact component={Events}/>

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
