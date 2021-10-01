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
import customerProfile from "./customer/customerProfile";

///////////////////////////Accomodations 
//>>>>>>>>Admin
import Accomodations from './user/Accomodations';
import AddNewRoomType from "./admin/AddNewRoomType";
import ManageRooms from "./admin/ManageRooms";
import UpdateRooms from "./admin/UpdateRooms";


//>>>>>>>customer
import ViewACRooms from './customer/Accomodations/viewACRooms';
import ViewnonACRooms from './customer/Accomodations/viewNonACRooms';
import Booking_roomDetails from './customer/Accomodations/booking_roomDetails';
import booking_final from './customer/Accomodations/booking_last';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login-home" exact component={HomeAfterLogin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={Signin} />
        <UserRoutes path="/user/profile" exact component={userProfile}/>

        {/* Accomodation -admin*/}
        <UserRoutes path="/admin/create/roomtype" exact component={AddNewRoomType}/>
        <UserRoutes path="/admin/manage-rooms" exact component={ManageRooms} />
        <UserRoutes path="/admin/product/update/:productId" exact component={UpdateRooms}/>
        <UserRoutes path="/admin/accomodation" exact component={Accomodations}/>

      {/* Accomodation -cutomer*/}
        <Route path="/view/rooms/ac" exact component={ViewACRooms} />
        <Route path="/view/rooms/non-ac" exact component={ViewnonACRooms}/>
        <Route path="/customer/profile" exact component={customerProfile}/>
        {/* <Route path="/book/room/:roomId" exact component={Booking_roomDetails}/> */}
        <Route path="/book/room/:roomId" exact component={Booking_roomDetails}/>
        <Route path="/book/complete" exact component={booking_final}/>

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
