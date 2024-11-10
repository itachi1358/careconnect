import React, { useState } from 'react';
import './DonationPage.css'; // Make sure to create a separate CSS file

const DonationPage3 = () => {
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
        <h1>
        Help Amit Rebuild His Life After a Devastating Disaster</h1>
        <p className="tag">Family Emergency</p>
        <p className="campaign-subtitle"></p>
      </div>
      <div className="campaign-content">
        <div className="campaign-info">
          <h2>Campaign Details</h2>
          <p>IAmit’s world has been turned upside down. After losing his home in a recent natural disaster, Amit is now facing an even greater challenge as both his parents fight for their lives in critical condition. In this time of unimaginable hardship, he needs our help.
            <br></br>
            Your Support Can Make a Difference: By contributing to this fund, you’ll be helping Amit secure urgent medical care for his parents and rebuild the home they lost. Every donation, big or small, brings hope and stability back into his life.
            <br></br>
            Let’s Stand Together for Amit. Donate today and help him overcome this difficult chapter.
            </p>
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

export default DonationPage3;
