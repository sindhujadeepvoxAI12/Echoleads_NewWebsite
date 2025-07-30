import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import Button from './Button';
import DropdownMenu from './DropdownMenu';
import echoleadsLogo from '../assets/echoleads_logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const platformItems = [
    {
      category: 'AI Agents',
      items: [
        { title: 'Cold Calling Agent', description: 'Advanced voice AI for lead generation and qualification', link: '/agents/cold-calling' },
        { title: 'Customer Care Agent', description: '24/7 automated customer service and support', link: '/agents/customer-care' },
        { title: 'WhatsApp Agent', description: 'Business messaging and lead nurturing automation', link: '/agents/whatsapp' },
        { title: 'Instagram Lead Response Agent', description: 'Real-time social media lead capture and response', link: '/agents/instagram' }
      ]
    },
    {
      category: 'Features',
      items: [
        { title: 'Smart Lead Scoring', description: 'Real-time qualification and prioritization' },
        { title: 'Multi-Channel Support', description: 'Phone, WhatsApp, Instagram integration' },
        { title: 'Analytics & Reporting', description: 'Live conversation monitoring and insights' },
        { title: 'Enterprise Security', description: 'Bank-level encryption and compliance' },
        { title: 'Instant Deployment', description: 'Quick setup with pre-built templates' }
      ]
    },
    {
      category: 'Integrations',
      items: [
        { title: 'CRM Systems', description: 'Seamlessly integrate with popular CRMs' },
        { title: 'Calendar Tools', description: 'Automated appointment booking' },
        { title: 'Telephony', description: 'Advanced voice calling capabilities' },
        { title: 'Messaging Platforms', description: 'Multi-channel communication sync' }
      ]
    }
  ];

  const industriesItems = [
    {
      category: 'By Industry',
      items: [
        { title: 'Real Estate', description: 'Lead qualification and appointment booking', link: '/industries/real-estate' },
        { title: 'Insurance', description: 'Policy inquiries and quote generation', link: '/industries/insurance' },
        { title: 'SaaS/Technology', description: 'Demo scheduling and trial conversions', link: '/industries/saas' },
        { title: 'Healthcare', description: 'Appointment scheduling and patient intake', link: '/industries/healthcare' },
        { title: 'Financial Services', description: 'Loan applications and consultations', link: '/industries/financial' },
        { title: 'E-commerce', description: 'Customer support and order management', link: '/industries/ecommerce' }
      ]
    },
    {
      category: 'Use Cases',
      items: [
        { title: 'B2B Lead Generation', description: 'Qualifying inbound leads and booking sales calls' },
        { title: 'Customer Support', description: '24/7 automated service and ticket routing' },
        { title: 'Appointment Scheduling', description: 'Calendar integration and booking automation' },
        { title: 'Lead Nurturing', description: 'Multi-touch follow-up sequences' },
        { title: 'Market Research', description: 'Automated surveys and data collection' }
      ]
    }
  ];

  const resourcesItems = [
    {
      category: 'Learn',
      items: [
        { title: 'Learn Center', description: 'Guides and best practices', link: '/resources/learn-center' },
        { title: 'Case Studies', description: 'Success stories and results', link: '/resources/case-studies' },
        { title: 'ROI Calculator', description: 'Calculate your potential savings', link: '/resources/roi-calculator' },
        { title: 'AI Agent Comparison', description: 'Compare different agent types', link: '/resources/agent-comparison' }
      ]
    },
    {
      category: 'Documentation',
      items: [
        { title: 'API Documentation', description: 'Developer resources and integration guides', link: '/resources/api-documentation' },
        { title: 'Setup Guides', description: 'Step-by-step implementation instructions', link: '/resources/setup-guides' },
        { title: 'Help Center', description: 'FAQs and troubleshooting', link: '/resources/help-center' }
      ]
    },
    {
      category: 'Community',
      items: [
        { title: 'AI Sales Directory', description: 'Directory of AI-powered sales tools' },
        { title: 'Webinars', description: 'Live training and product demos', link: '/resources/webinars' },
        { title: 'Blog', description: 'Industry insights and trends', link: '/resources/blog' }
      ]
    }
  ];

  const companyItems = [
    {
      category: 'Company',
      items: [
        { title: 'About Us', description: 'Company mission and vision', link: '/company/about' },
        { title: 'Leadership', description: 'Meet our team' },
        { title: 'Careers', description: 'Join our growing team' },
        { title: 'Research', description: 'AI innovation and development' },
        { title: 'Press', description: 'News and media coverage' },
        { title: 'Contact', description: 'Get in touch', link: '/contact' }
      ]
    }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={echoleadsLogo} 
              alt="EchoLeads.ai" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <DropdownMenu title="Platform" items={platformItems} />
            <DropdownMenu title="Industries" items={industriesItems} />
            <DropdownMenu title="Resources" items={resourcesItems} />
            <DropdownMenu title="Company" items={companyItems} />
            <Link to="/login" className="text-gray-700 hover:text-[#2E3192] transition-colors">
              Log In
            </Link>
            <Button variant="primary" size="sm">
              Contact Sales
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link to="/platform" className="text-gray-700 hover:text-[#2E3192] transition-colors">
                Platform
              </Link>
              <Link to="/login" className="text-gray-700 hover:text-[#2E3192] transition-colors">
                Log In
              </Link>
              <Button variant="primary" size="sm" className="w-fit">
                Contact Sales
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;