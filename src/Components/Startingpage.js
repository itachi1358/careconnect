import React from 'react';
import { Link } from 'react-router-dom';
import './StartingPage.css'; // Add a separate CSS file for better styling

export default function StartingPage() {
  return (
    <div className="pagecontainer">
    <div className="starting-page">
      <h1 className="page-title">Welcome to Our Platform</h1>
      <p className="subheading">Please select your role to continue</p>
      <div className="buttons-container">
         
         <Link to="/fundraiser_login" ><button className="styled-button">Login as a FundRaiser</button></Link>
         <div></div>
          <Link to="/donor_login"><button className="styled-button">Login as a Donor</button></Link>
      </div>
    </div>
    </div>
  );
}
