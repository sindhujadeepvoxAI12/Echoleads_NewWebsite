import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Platform from './pages/Platform';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import IndustryPage from './pages/IndustryPage';
import CaseStudies from './pages/CaseStudies';
import RefundPolicy from './pages/RefundPolicy';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ColdCallingAgent from './pages/agents/ColdCallingAgent';
import CustomerCareAgent from './pages/agents/CustomerCareAgent';
import WhatsAppAgent from './pages/agents/WhatsAppAgent';
import InstagramAgent from './pages/agents/InstagramAgent';
import LearnCenter from './pages/resources/LearnCenter';
import ROICalculator from './pages/resources/ROICalculator';
import AgentComparison from './pages/resources/AgentComparison';
import APIDocumentation from './pages/resources/APIDocumentation';
import SetupGuides from './pages/resources/SetupGuides';
import HelpCenter from './pages/resources/HelpCenter';
import Webinars from './pages/resources/Webinars';
import Blog from './pages/resources/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/company/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/industries/:industry" element={<IndustryPage />} />
            <Route path="/resources/case-studies" element={<CaseStudies />} />
            <Route path="/agents/cold-calling" element={<ColdCallingAgent />} />
            <Route path="/agents/customer-care" element={<CustomerCareAgent />} />
            <Route path="/agents/whatsapp" element={<WhatsAppAgent />} />
            <Route path="/agents/instagram" element={<InstagramAgent />} />
            <Route path="/resources/learn-center" element={<LearnCenter />} />
            <Route path="/resources/roi-calculator" element={<ROICalculator />} />
            <Route path="/resources/agent-comparison" element={<AgentComparison />} />
            <Route path="/resources/api-documentation" element={<APIDocumentation />} />
            <Route path="/resources/setup-guides" element={<SetupGuides />} />
            <Route path="/resources/help-center" element={<HelpCenter />} />
            <Route path="/resources/webinars" element={<Webinars />} />
            <Route path="/resources/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;