import React, { useState } from 'react';
import './DonationPage.css'; // Make sure to create a separate CSS file

const DonationPage2 = () => {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonationChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleDonate = (e) => {
    e.preventDefault();
    alert(`Thank you for donating ₹${donationAmount}!`);
    setDonationAmount(''); // Reset the input field
  };

  return (
    <div className="c-container">
     <div className="campaign-details-container">
      <div className="campaign-header">
        <h1>Support Us in Building our First Motor Boat</h1>
        <p className="tag">Fund for project</p>
        <p className="campaign-subtitle"></p>
      </div>
      <div className="campaign-content">
        <div className="campaign-info">
          <h2>Campaign Details</h2>
          <p>Imagine the thrill of engineering students coming together, pooling their knowledge, and pushing the boundaries of innovation to bring a motorboat to life. NIT Raipur's budding engineers are on a mission to design, build, and launch their very first motorboat, combining cutting-edge technology with sustainable practices.</p>
          <p>Every supporter will be part of NIT Raipur's legacy. In appreciation, we’ll keep you updated with project milestones, exclusive behind-the-scenes photos, and insights from the team. Major supporters will also be invited to witness the boat’s maiden voyage!</p>
          
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '65%' }}></div>
          </div>
          <div className="funds-info">
            <span>₹1,30,000 raised</span>
            <span>of ₹2,00,000</span>
          </div>
        </div>

        <div className="donation-section">
          <h2>Make a Donation</h2>
          <form className="donation-form" onSubmit={handleDonate}>
            <label htmlFor="donation-amount">Enter your donation amount:</label>
            <input
              type="number"
              id="donation-amount"
              name="donation-amount"
              min="10"
              placeholder="₹"
              value={donationAmount}
              onChange={handleDonationChange}
            />
            <button type="submit" className="donate-button">Donate Now</button>
          </form>
        </div>
      </div>
    </div>
    </div>   
  );
};

export default DonationPage2;
