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
