import React from 'react';
import Hero from '../components/Hero';
import PlatformOverview from '../components/PlatformOverview';
import AgentTypes from '../components/AgentTypes';
import UseCases from '../components/UseCases';
import VideoSection from '../components/VideoSection';
import SocialProof from '../components/SocialProof';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <PlatformOverview />
      <AgentTypes />
      <UseCases />
      <VideoSection />
      <SocialProof />
      <FinalCTA />
    </div>
  );
};

export default Home;