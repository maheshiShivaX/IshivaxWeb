import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from './Components/Home';
import AboutUs from './Components/Shared/AboutUsPage/AboutUs';
import PrivacyPolicyBanner from './Components/Shared/PrivacyPolicy/PrivacyPolicyPage';
import TermsConditionsPage from './Components/Shared/TermsConditions/TermsConditionsPage';
import Services from './Components/Shared/ServicesPage/Services';

import ContactUs from './Components/Shared/ContactUs/ContactUs';
import ServicesMobile from './Components/Shared/ServiceMobile/ServiceMobile';
import Join from './Components/Shared/Join/Join';
import Blog from './Components/Shared/Blog/Blog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductPortfolioPage from './Components/Shared/OurPortfolio/ProductPortfolioPage';
import ProductPortfolio from './Components/Shared/OurPortfolio/ProductPortfolio';
import JoinOurTeam from './Components/Shared/Join/JoinOurTeam';
import OurPartner from './Components/Shared/OurPartners/OurPartner';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/portfolio" element={<ProductPortfolio />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/service-mobile-app" element={<ServicesMobile />} />
          <Route exact path="/jointeam" element={<Join />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicyBanner />} />
          <Route exact path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route exact path="/product-portfolio" element={<ProductPortfolioPage />} />
          <Route exact path="/join-our-team" element={<JoinOurTeam />} />
          <Route exact path="/our-partner" element={<OurPartner />} />
          
    
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
