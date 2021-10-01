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
import Accomodations from './user/Accomodations';
import AddNewRoomType from "./admin/AddNewRoomType";
import ManageRooms from "./admin/ManageRooms";
import UpdateRooms from "./admin/UpdateRooms";

// import ApprovedReseachPaper from "./admin/ApprovedResearchPapers";
;

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login-home" exact component={HomeAfterLogin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={Signin} />
        <UserRoutes path="/user/profile" exact component={userProfile}/>

        <UserRoutes path="/admin/create/roomtype" exact component={AddNewRoomType}/>
        <UserRoutes path="/admin/manage-rooms" exact component={ManageRooms} />
        <UserRoutes path="/admin/product/update/:productId" exact component={UpdateRooms}/>
        <UserRoutes path="/admin/accomodation" exact component={Accomodations}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
