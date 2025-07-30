import React from 'react';
import { Play } from 'lucide-react';

const DemoSection = () => {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See EchoLeads in Action
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-[#2E3192] to-[#F2A339] flex items-center justify-center relative">
              <button className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 group">
                <Play size={32} className="text-white ml-2 group-hover:scale-110 transition-transform duration-200" />
              </button>
              
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white font-medium">Live Demo</span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2E3192] mb-2">Live</div>
                  <div className="text-sm text-gray-600">Conversation Examples</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2E3192] mb-2">Real-time</div>
                  <div className="text-sm text-gray-600">Lead Scoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2E3192] mb-2">Multi-channel</div>
                  <div className="text-sm text-gray-600">Integration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2E3192] mb-2">Analytics</div>
                  <div className="text-sm text-gray-600">Dashboard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;