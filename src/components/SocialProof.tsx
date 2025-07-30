import React from 'react';
import { Star } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      company: 'TechStartup Inc.',
      logo: 'TS',
      metric: '150% increase in qualified leads',
      quote: 'EchoLeads transformed our sales process. The AI agents handle initial qualification perfectly, letting our team focus on closing deals.',
      author: 'Sarah Johnson',
      role: 'VP of Sales'
    },
    {
      company: 'RealEstate Pro',
      logo: 'RE',
      metric: '3x more property showings',
      quote: 'The real estate agent is incredible. It schedules showings instantly and never misses a lead, even at 2 AM.',
      author: 'Mike Chen',
      role: 'Broker'
    },
    {
      company: 'HealthCare Plus',
      logo: 'HC',
      metric: '92% patient satisfaction',
      quote: 'Our patients love the 24/7 support. Appointment scheduling is seamless and the AI handles complex insurance questions.',
      author: 'Dr. Lisa Rodriguez',
      role: 'Practice Manager'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Growing Businesses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#F2A339] rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold">{testimonial.logo}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.company}</div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 text-green-700 text-sm font-medium px-3 py-2 rounded-lg mb-4 inline-block">
                {testimonial.metric}
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;