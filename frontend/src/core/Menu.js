import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      {!isAutheticated() && (
        <Fragment>
          <li style={{ color: "white" }}>
            <dev className="nav-link">Atrium Leisure</dev>
          </li>
          <li className="nav-item">
            ............................................................................................................................................................................................................................................................................................................................................................
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signup")}
              className="nav-link text-light"
              to="/signup"
            >
              SignUp
            </Link>
          </li>

          <li className="nav-item">
            <Link
              style={currentTab(history, "/signin")}
              className="nav-link text-light"
              to="/"
            >
              SignIn
            </Link>
          </li>

          {/* Dinning link */}

          <li className="nav-item">
            <Link className="nav-link text-white" to="/dinning">
              Dinning
            </Link>
          </li>
        </Fragment>
      )}
      <li className="nav-item">
        <Link className="nav-link text-white" to="/customer-home">
          Customer Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/customer-dinning">
          Customer Dinning
        </Link>
      </li>

      {/*this is view for admin*/}
      {isAutheticated() && isAutheticated().user.role === 1 && (
        <Fragment>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/")}
              className="nav-link"
              to="/login-home"
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              style={currentTab(history, "/admin/dashboard")}
              className="nav-link"
              to="/user/profile"
            >
              User Profile
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin/accomodation">
              Accomodation
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/dinning">
              Dinning
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin/manage-activities">
              Activities
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/admin/events-task">
              Wedding and Events
            </Link>
          </li>

          <li className="nav-item text-dark">
           
              .................................................................................................................................................................................................................................................................................
            
          </li>
          <li className="nav-item">
            <span
              className="nav-link text-warning"
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              Signout
            </span>
          </li>
        </Fragment>
      )}
    </ul>

    <ul className="nav nav-tabs bg-primary">

{/*this is view for the customer*/}
{isAutheticated() && isAutheticated().user.role === 0 && (
            <Fragment>    
                <li className="nav-item">
                    <Link style={currentTab(history,"/")} className="nav-link" to="/login-home">
                        Home
                    </Link>
                </li>
            
                <li className="nav-item">
                    <Link style={currentTab(history,"/admin/dashboard")} className="nav-link" to="/customer/profile">
                    Your Profile
                    </Link>
                </li>

<li className="nav-item">
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
<div class="container-fluid">

<div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
<ul class="navbar-nav">
<li class="nav-item dropdown">
<p className="text-white" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
Accomodation
</p>
<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
<li><Link className="nav-link text-white" to="/view/rooms/ac">A/C Rooms</Link></li>
<li><Link className="nav-link text-white" to="/view/rooms/non-ac">Non A/C Rooms</Link></li>
</ul>
</li>
</ul>
</div>
</div>
</nav>
</li>


                <li className="nav-item">
                <Link className="nav-link text-white" to="#">
                    Dinning
                </Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link text-white" to="#">
                    Activities
                </Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link text-white" to="/view/viewVenues">
                    Wedding & Events
                </Link>
                </li>
                
                <li className="nav-item text-primary">
                        .....................................................................................................................................................................................................
                </li>
                <li className="nav-item">
                            <span
                            className="nav-link text-warning"
                            onClick={ () => {
                                signout(() => {
                                    history.push("/");
                                })
                            }}>
                                Signout
                            </span>
                    </li>
                </Fragment>
            )}


</ul>





  </div>
);

export default withRouter(Menu);
