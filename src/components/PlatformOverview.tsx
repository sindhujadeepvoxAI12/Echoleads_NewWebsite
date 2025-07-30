import React from 'react';
import { Bot, Target, MessageSquare, BarChart3 } from 'lucide-react';

const PlatformOverview = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI Agents',
      description: 'Human-like conversations that convert'
    },
    {
      icon: Target,
      title: 'Smart Scoring',
      description: 'Real-time lead qualification'
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel',
      description: 'Phone, WhatsApp, Instagram integration'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Live monitoring and optimization'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete AI Sales Platform
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D88D26] transition-colors duration-200">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;