import React from 'react';
import Button from './Button';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#2E3192] to-[#1F237A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Scale Your Sales?
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join hundreds of businesses using AI agents to 5X their lead conversion.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2E3192]">
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;