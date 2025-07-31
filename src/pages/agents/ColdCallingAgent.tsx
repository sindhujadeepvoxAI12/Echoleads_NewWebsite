import React, { useState } from 'react';
import { Phone, Target, Clock, BarChart3, Shield, Zap, Users, CheckCircle, ArrowRight, Play, Pause } from 'lucide-react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import coldCallingVideo from '../../assets/Cold Calling.mp4';

const ColdCallingAgent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef) {
      videoRef.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };
  const features = [
    {
      icon: Target,
      title: 'Advanced Lead Qualification',
      description: 'AI-powered conversation analysis that identifies high-intent prospects and qualifies leads based on your specific criteria.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a lead again. Our AI agents work around the clock, making calls and following up with prospects across all time zones.'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Monitor call performance, conversion rates, and lead quality with comprehensive dashboards and detailed reporting.'
    },
    {
      icon: Shield,
      title: 'Compliance Ready',
      description: 'Built-in compliance features for TCPA, DNC list management, and industry-specific regulations to keep your campaigns compliant.'
    }
  ];

  const benefits = [
    'Increase qualified leads by 300% with 24/7 availability',
    'Reduce cost per lead by 60% compared to human callers',
    'Achieve 23% average conversion rate across industries',
    'Scale instantly without hiring and training costs',
    'Maintain consistent messaging and brand voice',
    'Integrate seamlessly with your existing CRM system'
  ];

  const useCases = [
    {
      industry: 'Real Estate',
      scenario: 'Lead Qualification & Showing Scheduling',
      description: 'Automatically qualify property inquiries, schedule showings, and follow up with interested prospects.',
      results: '3x more property showings, 45% increase in qualified leads'
    },
    {
      industry: 'Insurance',
      scenario: 'Quote Generation & Policy Inquiries',
      description: 'Handle initial quote requests, gather customer information, and schedule agent consultations.',
      results: '60% faster quote delivery, 40% increase in policy sales'
    },
    {
      industry: 'B2B SaaS',
      scenario: 'Demo Booking & Trial Conversions',
      description: 'Qualify software prospects, book product demos, and nurture trial users toward conversion.',
      results: '4x more demo bookings, 28% trial-to-paid conversion rate'
    },
    {
      industry: 'Financial Services',
      scenario: 'Loan Applications & Consultations',
      description: 'Pre-qualify loan applicants, gather required documentation, and schedule advisor meetings.',
      results: '50% faster application process, 65% higher approval rates'
    }
  ];

  const implementation = [
    {
      step: '1',
      title: 'Setup & Configuration',
      description: 'Configure your agent with custom scripts, qualification criteria, and integration settings.',
      timeframe: '24 hours'
    },
    {
      step: '2',
      title: 'Training & Testing',
      description: 'AI training on your specific industry, products, and conversation flows with comprehensive testing.',
      timeframe: '48 hours'
    },
    {
      step: '3',
      title: 'Launch & Optimization',
      description: 'Go live with full monitoring and continuous optimization based on performance data.',
      timeframe: 'Ongoing'
    }
  ];

  const faqs = [
    {
      question: 'How natural do the AI conversations sound?',
      answer: 'Our Cold Calling Agent uses advanced natural language processing to create human-like conversations. Most prospects cannot distinguish between our AI and human callers, with 94% rating the interaction as natural and professional.'
    },
    {
      question: 'Can the AI handle objections and complex questions?',
      answer: 'Yes, the AI is trained to handle common objections, answer frequently asked questions, and escalate complex inquiries to human agents when necessary. It can adapt its responses based on prospect behavior and conversation flow.'
    },
    {
      question: 'How does lead qualification work?',
      answer: 'The AI uses your custom qualification criteria to score leads in real-time during conversations. It asks targeted questions, analyzes responses, and assigns lead scores based on factors like budget, timeline, decision-making authority, and specific needs.'
    },
    {
      question: 'What integrations are available?',
      answer: 'Our Cold Calling Agent integrates with popular CRM systems (Salesforce, HubSpot, Pipedrive), calendar tools (Calendly, Google Calendar), and telephony providers (Twilio, RingCentral). Custom integrations are available for enterprise clients.'
    },
    {
      question: 'How do you ensure compliance?',
      answer: 'We maintain strict compliance with TCPA regulations, DNC list management, and industry-specific requirements. The system includes automatic opt-out handling, call recording consent, and detailed audit trails for all interactions.'
    }
  ];

  return (
    <div className="pt-16">
      {/* SEO Meta Tags would be handled by a head management library */}
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#2E3192] rounded-xl flex items-center justify-center mr-4">
                  <Phone size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Cold Calling Agent
                  </h1>
                  <p className="text-xl text-[#F2A339] font-semibold">Advanced Voice AI for Lead Generation</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your cold calling strategy with AI agents that work 24/7, qualify leads intelligently, 
                and book more meetings than traditional methods. Achieve 23% average conversion rates with 
                human-like conversations that prospects trust.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2E3192] mb-1">23%</div>
                  <div className="text-sm text-gray-600">Avg Conversion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2E3192] mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2E3192] mb-1">300%</div>
                  <div className="text-sm text-gray-600">More Qualified Leads</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="relative aspect-video bg-gradient-to-br from-[#2E3192] to-[#F2A339] rounded-xl overflow-hidden mb-6">
                  <video
                    ref={setVideoRef}
                    className="w-full h-full object-cover"
                    onEnded={handleVideoEnded}
                    muted={isMuted}
                    controls
                  >
                    <source src={coldCallingVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button 
                      onClick={toggleMute}
                      className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">See Cold Calling Agent in Action</h3>
                <p className="text-gray-600 text-sm">Watch real conversations and see how our AI qualifies leads and books appointments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for Maximum Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI capabilities designed to maximize your cold calling success and lead conversion rates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mb-6">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Cold Calling Agent?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Traditional cold calling is expensive, inconsistent, and limited by human availability. 
                Our AI Cold Calling Agent eliminates these limitations while delivering superior results.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={24} className="text-[#F2A339] mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Comparison</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Average Conversion Rate</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Traditional: 8%</div>
                    <div className="text-lg font-bold text-[#F2A339]">AI Agent: 23%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Cost per Qualified Lead</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Traditional: $150</div>
                    <div className="text-lg font-bold text-[#F2A339]">AI Agent: $60</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Daily Call Capacity</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Human: 50 calls</div>
                    <div className="text-lg font-bold text-[#F2A339]">AI Agent: 500+ calls</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Availability</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Human: 8 hours</div>
                    <div className="text-lg font-bold text-[#F2A339]">AI Agent: 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases by Industry */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry-Specific Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our Cold Calling Agent delivers results across different industries and business models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{useCase.industry}</h3>
                  <ArrowRight className="text-[#F2A339]" size={20} />
                </div>
                
                <h4 className="text-lg font-medium text-[#F2A339] mb-3">{useCase.scenario}</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">{useCase.description}</p>
                
                <div className="bg-green-50 text-green-700 font-medium px-4 py-2 rounded-lg text-sm">
                  Results: {useCase.results}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quick Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your Cold Calling Agent up and running in just 72 hours with our streamlined setup process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {implementation.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-[#F2A339] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                <div className="text-[#F2A339] font-medium">{step.timeframe}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our Cold Calling Agent and implementation process
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#2E3192] to-[#1F237A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Cold Calling?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that have increased their lead conversion by 300% with our AI Cold Calling Agent. 
            Start generating more qualified leads today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button variant="primary" size="lg">Get Started</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2E3192]">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColdCallingAgent;