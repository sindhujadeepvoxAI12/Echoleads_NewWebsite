import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import echoleadsLogo from '../assets/echoleads_logo.jpeg';

const Hero = () => {
  const metrics = [
    { value: '31%', label: 'Average Conversion Rate' },
    { value: '24/7', label: 'Availability' },
    { value: '<30 sec', label: 'Lead Response Time' },
    { value: '5X', label: 'More meetings per $ invested' }
  ];

  return (
    <section className="bg-gradient-to-br from-[#F9FAFB] to-white pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            AI Agents that Close
            <br />
            <span className="text-[#F2A339]">Deals 24/7</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Deploy AI-powered sales agents in minutes. Scale your lead generation with 
            human-like conversations across phone, WhatsApp, and Instagram.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/login">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </Link>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#2E3192] mb-2">
                  {metric.value}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;