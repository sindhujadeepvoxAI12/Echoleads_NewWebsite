import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Headphones, MessageCircle, Instagram } from 'lucide-react';
import Button from './Button';

const AgentTypes = () => {
  const agents = [
    {
      icon: Phone,
      title: 'Cold Calling Agent',
      link: '/agents/cold-calling',
      features: '5,000 follow-up WhatsApp conversations + 10 call credits',
      metric: '23% average conversion rate',
      perfect: 'B2B lead generation, real estate, insurance',
      color: 'bg-[#2E3192]'
    },
    {
      icon: Headphones,
      title: 'Customer Care Agent',
      link: '/agents/customer-care',
      features: '5,000 follow-up WhatsApp conversations',
      metric: '94% customer satisfaction',
      perfect: 'E-commerce support, SaaS help desk',
      color: 'bg-[#F2A339]'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Agent',
      link: '/agents/whatsapp',
      features: '5,000 conversations + 10 call credits',
      metric: '98% message open rate',
      perfect: 'E-commerce, appointment reminders',
      color: 'bg-[#25D366]'
    },
    {
      icon: Instagram,
      title: 'Instagram Lead Response Agent',
      link: '/agents/instagram',
      features: '5,000 conversations + 10 call credits',
      metric: '<30 second response time',
      perfect: 'Social media advertising, influencer marketing',
      color: 'bg-[#E4405F]'
    }
  ];

  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your AI Sales Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`w-16 h-16 ${agent.color} rounded-xl flex items-center justify-center mb-6`}>
                <agent.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {agent.title}
              </h3>

              <p className="text-gray-600 mb-4 text-sm">
                {agent.features}
              </p>
              
              <div className="bg-green-50 text-green-700 text-sm font-medium px-3 py-2 rounded-lg mb-4">
                {agent.metric}
              </div>
              
              <p className="text-sm text-gray-500 mb-6">
                <strong>Perfect for:</strong> {agent.perfect}
              </p>
              
              <Link to={agent.link}>
                <Button variant="primary" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentTypes;