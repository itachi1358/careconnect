import React from 'react'
import './CreateCampaign.css'
export default function CreateCampaign() {
  return (
    <div>
    <header class="header">
        <nav class="nav-container">
            <div class="logo">
                <span class="logo-text">NIT Raipur Student Fund</span>
            </div>
        </nav>
    </header>
    <br></br>
    <main class="main-container">
        <h1 class="form-title">Create New Emergency Fund Request</h1>

        <div class="guidelines">
            <h3>Important Guidelines</h3>
            <ul>
                <li>All information provided must be accurate and verifiable</li>
                <li>Upload clear, relevant supporting documents</li>
                <li>Fundraising goals should be realistic and well-justified</li>
                <li>Your request will be verified by the institute committee</li>
                <li>Verification process typically takes 24-48 hours</li>
                <li>If it's and Urgent requirement, Do Contact +91 9999999999, +91 8888888888</li>
            </ul>
        </div>

        <form class="fundraiser-form" action="/submit-fundraiser" method="POST" enctype="multipart/form-data">
            <div class="form-section">
                <h3>Personal Information</h3>
                <div class="form-group">
                    <label class="required" for="student-name">Full Name</label>
                    <input type="text" id="student-name" name="student-name" required/>
                </div>
                <div class="form-group">
                    <label class="required" for="enrollment">Enrollment Number</label>
                    <input type="text" id="enrollment" name="enrollment" required/>
                </div>
                <div class="form-group">
                    <label class="required" for="enrollment">Licence Key</label>
                    <input type="text" id="licence" name="licence" required/>
                </div>
                <div class="form-group">
                    <label class="required" for="branch">Branch</label>
                    <select id="branch" name="branch" required>
                        <option value="">Select Branch</option>
                        <option value="CSE">Computer Science Engineering</option>
                        <option value="IT">Information Technology</option>
                        <option value="ECE">Electronics & Communication</option>
                        <option value="EE">Electrical Engineering</option>
                        <option value="ME">Mechanical Engineering</option>
                        <option value="CIVIL">Civil Engineering</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="required" for="semester">Current Semester</label>
                    <select id="semester" name="semester" required>
                        <option value="">Select Semester</option>
                        <option value="1">1st Semester</option>
                        <option value="2">2nd Semester</option>
                        <option value="3">3rd Semester</option>
                        <option value="4">4th Semester</option>
                        <option value="5">5th Semester</option>
                        <option value="6">6th Semester</option>
                        <option value="7">7th Semester</option>
                        <option value="8">8th Semester</option>
                    </select>
                </div>
            </div>

            <div class="form-section">
                <h3>Campaign Details</h3>
                <div class="form-group">
                    <label class="required" for="campaign-title">Campaign Title</label>
                    <input type="text" id="campaign-title" name="campaign-title" required/>
                </div>
                <div class="form-group">
                    <label class="required" for="category">Emergency Category</label>
                    <select id="category" name="category" required>
                        <option value="">Select Category</option>
                        <option value="medical">Medical Emergency</option>
                        <option value="fees">Tuition Fees</option>
                        <option value="family">Family Emergency</option>
                        <option value="education">Educational Resources</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="required" for="target-amount">Target Amount (₹)</label>
                    <input type="number" id="target-amount" name="target-amount" min="1000" required/>
                </div>
                <div class="form-group">
                    <label class="required" for="description">Detailed Description</label>
                    <textarea id="description" name="description" required></textarea>
                </div>
            </div>
            <div class="form-section">
                <h3>Supporting Documents</h3>
                <div class="form-group">
                    <label class="required" for="id-proof">Institute ID Card</label>
                    <input type="file" id="id-proof" name="id-proof" accept="image/*,.pdf" required/>
                </div>
                <div class="form-group">
                    <label class="required" for="supporting-docs">Supporting Documents</label>
                    <input type="file" id="supporting-docs" name="supporting-docs" accept="image/*,.pdf" multiple required/>
                    <small>Upload relevant documents (medical reports, fee receipts, etc.)</small>
                </div>
            </div>
            <div class="form-section">
                <h3>Bank Account Details</h3>
                <div class="form-group">
                    <label class="required" for="account-name">Account Holder Name</label>
                    <input type="text" id="account-name" name="account-name" required/>
                </div>
                <div class="form-group">
                    <label class="required" for="account-number">Account Number</label>
                    <input type="text" id="account-number" name="account-number" required/>
                </div>
                <div class="form-group">
                    <label class="required" for="ifsc">IFSC Code</label>
                    <input type="text" id="ifsc" name="ifsc" required/>
                </div>
                <div class="form-group">
                    <label class="required" for="bank-name">Bank Name</label>
                    <input type="text" id="bank-name" name="bank-name" required/>
                </div>
            </div>
            <div class="form-section">
                <h3>Declaration</h3>
                <div class="form-group">
                    <label class="required">
                        <input type="checkbox" name="declaration" required/>
                        I hereby declare that all the information provided is true and correct to the best of my knowledge. I understand that any false information may result in disciplinary action.
                    </label>
                </div>
            </div>
            <div class="form-buttons">
                <button type="submit" class="submit-button">Submit for Verification</button>
                <button type="button" class="save-draft-button">Save as Draft</button>
            </div>
        </form>
    </main>
    </div>
  )
}
