import './App.css';
import { BrowserRouter,Routes, Route, Router } from 'react-router-dom';
import Donor from './Components/Donor.js';
import Startingpage from './Components/Startingpage.js';
import FundRaiser from './Components/FundRaiser.js';
import Homepage from './Components/Homepage.js';
import CreateCampaign from './Components/CreateCampaign.js';
import CampaignCreators from './Components/CampaignCreators.js';
import Donationpage from './Components/Donationpage.js';
import SignUp from './Components/Singup.js';
import DonationPage from './Components/Donationpage.js';
import DonationPage2 from './Components/DonationPage2.js';
import DonationPage3 from './Components/DonationPage3.js';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="" element={<Donor/>} />
          <Route path="/donor_login" element={<Donor/>}/>
          <Route path="/create_campaign" element={<CreateCampaign/>}/>
          <Route path="/fundraiser_login" element={<FundRaiser></FundRaiser>}/>
          <Route path="/homepage" element={<Homepage/>}/>
          <Route path="/Campaign_Creators" element={<CampaignCreators/>}></Route>
          <Route path="/donate" element={<Donationpage></Donationpage>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/donate-1" element={<DonationPage2/>}></Route>
          <Route path="/donate-2" element={<DonationPage3/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
