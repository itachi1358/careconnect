import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="header">
        <div className="nav-container">
          <div className="logo">
            <div className="logo_img">
            </div>
            <span className="logo-text">CareConnect</span>
          </div>
          <div className="nav-links">   
          <Link to="/create_campaign">
              <a href="#fundraisers">Create Campaign</a>
            </Link>
            <a href="#campaigns">Active Campaigns</a>
            <Link to="/Campaign_Creators">
              <a href="#fundraisers">Verified Fundraisers</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="hero-content">
          <h1>Support NIT Raipur Students in Need</h1>
          <p>Help our students overcome financial emergencies and continue their education. Every contribution makes a difference.</p>
        </div>
      </div>

      <div className="campaigns" id="campaigns">
        <div className="campaigns-header">
          <h2>Active Fundraising Campaigns</h2>
          <select className="filter-dropdown">
            <option value="all">All Categories</option>
            <option value="medical">Medical Emergency</option>
            <option value="fees">Tuition Fees</option>
            <option value="education">Educational Resources</option>
            <option value="family">Family Emergency</option>
          </select>
        </div>

        <div className="campaign-grid">
          <div className="campaign-card">
            <div className="campaign-content">
              <span className="campaign-category">Medical Emergency</span>
              <span className="red">Urgent</span>
              <h3 className="campaign-title">Urgent Medical Treatment for Rahul</h3>
              <p>Final year B.Tech student needs support for critical surgery.</p>
              <div className="campaign-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '65%' }}></div>
                </div>
                <div className="campaign-stats">
                  <span>₹1,30,000 raised</span>
                  <span>of ₹2,00,000</span>
                </div>
              </div>
              <Link to="/donate" className='donate-button'>Donate Now</Link>
            </div>
          </div>

          <div className="campaign-card">
            <div className="campaign-content">
              <span className="campaign-category">Educational Resources</span>
              <h3 className="campaign-title">Support NIT Raipur's Engineers in Builing a Motor Boat</h3>
              <p>Every supporter becomes part of NIT Raipur’s legacy, with updates on project milestones to keep you connected!</p>
              <div className="campaign-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '45%' }}></div>
                </div>
                <div className="campaign-stats">
                  <span>₹45,000 raised</span>
                  <span>of ₹1,00,000</span>
                </div>
              </div>
               <Link to='/donate-1' className='donate-button'>Donate Now</Link>
            </div>
          </div>

          <div className="campaign-card">
            <div className="campaign-content">
              <span className="campaign-category">Family Emergency</span>
              <h3 className="campaign-title">Emergency Support for Amit's Family</h3>
              <p>Support needed after natural disaster damaged family home.</p>
              <div className="campaign-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '80%' }}></div>
                </div>
                <div className="campaign-stats">
                  <span>₹80,000 raised</span>
                  <span>of ₹1,00,000</span>
                </div>
              </div>
              <Link to='/donate-2' className='donate-button'>Donate Now</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>NIT Raipur Student Emergency Fund provides financial support to students facing unexpected emergencies.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#verified">Verified Campaigns</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul className="footer-links">
              <li>Email: studentfund@nitrr.ac.in</li>
              <li>Phone: +91-771-2254200</li>
              <li>Address: Great Eastern Road, Raipur</li>
              <li>Chhattisgarh, India - 492010</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
