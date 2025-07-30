import React from 'react';
import { Building, Shield, Laptop, Heart, DollarSign, ShoppingCart } from 'lucide-react';

const UseCases = () => {
  const industries = [
    {
      icon: Building,
      title: 'Real Estate',
      description: 'Lead qualification and showing scheduling'
    },
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Quote generation and policy inquiries'
    },
    {
      icon: Laptop,
      title: 'SaaS',
      description: 'Demo booking and trial conversions'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Appointment scheduling and patient intake'
    },
    {
      icon: DollarSign,
      title: 'Financial Services',
      description: 'Loan applications and consultations'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Customer support and order management'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for Every Industry
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#F2A339] hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D88D26] transition-colors duration-200">
                <industry.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {industry.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;