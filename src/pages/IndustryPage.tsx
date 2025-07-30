import React from 'react';
import { useParams } from 'react-router-dom';
import { Building, Shield, Laptop, Heart, DollarSign, ShoppingCart } from 'lucide-react';
import Button from '../components/Button';

const IndustryPage = () => {
  const { industry } = useParams();

  const industryData: { [key: string]: any } = {
    'real-estate': {
      icon: Building,
      title: 'Real Estate',
      description: 'AI agents that never miss a lead and schedule showings 24/7',
      stats: [
        { value: '3x', label: 'More Property Showings' },
        { value: '45%', label: 'Increase in Qualified Leads' },
        { value: '<2 min', label: 'Average Response Time' }
      ]
    },
    'insurance': {
      icon: Shield,
      title: 'Insurance',
      description: 'Automated quote generation and policy inquiries',
      stats: [
        { value: '60%', label: 'Faster Quote Generation' },
        { value: '35%', label: 'Higher Conversion Rate' },
        { value: '24/7', label: 'Customer Support' }
      ]
    },
    'saas': {
      icon: Laptop,
      title: 'SaaS',
      description: 'Demo scheduling and trial conversion optimization',
      stats: [
        { value: '4x', label: 'More Demo Bookings' },
        { value: '28%', label: 'Trial to Paid Conversion' },
        { value: '90%', label: 'Lead Response Rate' }
      ]
    },
    'healthcare': {
      icon: Heart,
      title: 'Healthcare',
      description: 'Appointment scheduling and patient intake automation',
      stats: [
        { value: '85%', label: 'Appointment Show Rate' },
        { value: '50%', label: 'Reduced Admin Time' },
        { value: '96%', label: 'Patient Satisfaction' }
      ]
    },
    'financial': {
      icon: DollarSign,
      title: 'Financial Services',
      description: 'Loan applications and consultation scheduling',
      stats: [
        { value: '40%', label: 'Faster Application Process' },
        { value: '65%', label: 'Higher Approval Rate' },
        { value: '99%', label: 'Data Security Compliance' }
      ]
    },
    'ecommerce': {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Customer support and order management automation',
      stats: [
        { value: '75%', label: 'Reduced Support Tickets' },
        { value: '24/7', label: 'Customer Availability' },
        { value: '92%', label: 'Customer Satisfaction' }
      ]
    }
  };

  const currentIndustry = industryData[industry || ''] || industryData['real-estate'];
  const IconComponent = currentIndustry.icon;

  return (
    <div className="pt-16">
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-24 h-24 bg-[#F2A339] rounded-2xl flex items-center justify-center mx-auto mb-8">
              <IconComponent size={48} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {currentIndustry.title} AI Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentIndustry.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {currentIndustry.stats.map((stat: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl font-bold text-[#2E3192] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;