import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Facebook,Instagram } from 'lucide-react';
import echoleadsLogo from '../assets/echoleads_logo.jpeg';

const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/company/about' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Refund Policy', href: '/refund-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' }
      ]
    },
    {
      title: 'Platform',
      links: [
        { name: 'AI Agents', href: '/platform' },
        { name: 'Features', href: '/platform' },
        { name: 'Integrations', href: '/platform' },
        { name: 'Security', href: '/platform' },
        { name: 'API Documentation', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Learn Center', href: '#' },
        { name: 'Case Studies', href: '/resources/case-studies' },
        { name: 'Help Center', href: '#' },
        { name: 'Webinars', href: '#' },
        { name: 'Blog', href: '#' }
      ]
    },
    {
      title: 'Industries',
      links: [
        { name: 'Real Estate', href: '/industries/real-estate' },
        { name: 'Insurance', href: '/industries/insurance' },
        { name: 'SaaS', href: '/industries/saas' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Financial Services', href: '/industries/financial' },
        { name: 'E-commerce', href: '/industries/ecommerce' }
      ]
    }
  ];

  const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/echoleadsai/posts/?feedView=all' },
  { icon: Twitter, href: 'https://x.com/echoleads' },
  { icon: Instagram, href: 'https://www.instagram.com/echoleadsai/' },
  { icon: Facebook, href: 'https://www.facebook.com/Echoleads' }
];
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact */}
          <div className="lg:col-span-1">
            {/* <Link to="/" className="mb-6 block">
              <img 
                src={echoleadsLogo} 
                alt="EchoLeads.ai" 
                className="h-12 w-auto"
              />
            </Link> */}
            
            <div className="space-y-3 text-gray-300">
              <div>
                <strong>Email:</strong><br />
                <a href="mailto:sales@echoleads.ai" className='text-gray-300 hover:text-[#F2A339] transition-colors'>sales@echoleads.ai</a>
              </div>
              <div>
                <strong>Phone:</strong><br />
              <a href="tel:+919000481350" className='text-gray-300 hover:text-[#F2A339] transition-colors'>+91 9000481350</a>
              </div>
              <div>
                <strong>Address:</strong><br />
                <span className='text-gray-300'>
                  T-Hub, Plot No 1/C Sy No 83/1, Raidurgam panmaktha Knowledge City, Serilingampally(M), Hyderabad, Telangana, 500081, India.
                </span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#F2A339] transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href}
                      className="text-gray-300 hover:text-[#F2A339] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 EchoLeads.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;