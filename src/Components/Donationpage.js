import React, { useState } from 'react';
import './DonationPage.css'; // Make sure to create a separate CSS file

const DonationPage = () => {
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
        <h1>Urgent Medical Treatment for Rahul</h1>
        <p className="tag">Medical Emergency</p>
        <p className="campaign-subtitle">Support a final year B.Tech student who urgently needs financial help for critical surgery.</p>
      </div>

      <div className="campaign-content">
        <div className="campaign-info">
          <h2>Campaign Details</h2>
          <p>Rahul is a final year B.Tech student at NIT Raipur, and he requires an immediate medical intervention due to a severe health condition. The total amount needed for the surgery and post-operative care is ₹2,00,000.</p>
          <p>With your support, we can help Rahul get the treatment he needs and ensure he recovers fully to complete his studies.</p>
          
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

export default DonationPage;
