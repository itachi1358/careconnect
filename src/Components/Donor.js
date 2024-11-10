import React from "react";
import { Link } from "react-router-dom";
import "./Donor.css"; // Link to the CSS file

function Login() {
  return (
    <>
    <div className="container_of_image">
    <div className="image_container">
    </div>
    </div>
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome to CareConnect</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <Link to="/homepage">
          <button type="submit" className="login-button">Log In</button>
          </Link>
        </form>
        <p className="signup-text">
          Don’t have an account? <a href="/signup" className="signup-link">Sign up</a>
        </p>
      </div>
    </div>
    </>
  );
}

export default Login;
