import React, { useState } from "react";
import Base from "../core/Base";
import { Redirect } from "react-router-dom";

import { signin, authenticate, isAutheticated } from "../auth/helper";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;

  const { user } = isAutheticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("sign in failed"));
  };

  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form action="">
            <div className="form-group py-2">
              <label className="text-dark">Email</label>
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                type="email"
              />
            </div>

            <div className="form-group py-2">
              <label className="text-dark">Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
              />
            </div>
            <div className="d-grid py-4">
              <button
                onClick={onSubmit}
                className="btn btn-outline-primary rounded-pill"
              >
                LogIn
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/login-home" />;
      } else if (user && user.role === 0) {
        return <Redirect to="/login-home" />;
      } else if (user && user.role === 3) {
        return <Redirect to="/reviewer/profile" />;
      } else if (user && user.role === 4) {
        return <Redirect to="/editor/dashboard" />;
      } else {
        return <Redirect to="/admin/dashboard" />;
      }
    }

    if (isAutheticated()) {
      return <Redirect to="/" />;
    }
  };

  const LoadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base navigation="" title="Login" description="Login to your account">
      {LoadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}

      <br />
      <br />
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

export default Signin;


