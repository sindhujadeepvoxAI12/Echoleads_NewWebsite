import React from 'react';
import Hero from '../components/Hero';
import PlatformOverview from '../components/PlatformOverview';
import AgentTypes from '../components/AgentTypes';
import UseCases from '../components/UseCases';
import DemoSection from '../components/DemoSection';
import SocialProof from '../components/SocialProof';
import PricingSection from '../components/PricingSection';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <PlatformOverview />
      <AgentTypes />
      <UseCases />
      <DemoSection />
      <SocialProof />
      <FinalCTA />
    </div>
  );
};

export default Home;