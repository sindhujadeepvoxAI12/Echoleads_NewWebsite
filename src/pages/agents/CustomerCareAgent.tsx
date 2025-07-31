import React, { useState } from 'react';
import { Headphones, Clock, Users, BarChart3, Shield, Zap, MessageSquare, CheckCircle, ArrowRight, Play, Pause } from 'lucide-react';
import Button from '../../components/Button';
import customerSupportVideo from '../../assets/customer support.mp4';

const CustomerCareAgent = () => {
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
      icon: Clock,
      title: '24/7 Customer Support',
      description: 'Provide instant customer service around the clock, handling inquiries, complaints, and support requests without human intervention.'
    },
    {
      icon: Users,
      title: 'Multi-Language Support',
      description: 'Communicate with customers in their preferred language with native-level fluency across 50+ languages and dialects.'
    },
    {
      icon: BarChart3,
      title: 'Intelligent Ticket Routing',
      description: 'Automatically categorize and route complex issues to the right human agents while resolving simple queries instantly.'
    },
    {
      icon: Shield,
      title: 'Data Security & Privacy',
      description: 'Enterprise-grade security with encrypted conversations, GDPR compliance, and secure handling of sensitive customer data.'
    }
  ];

  const capabilities = [
    'Handle 1000+ simultaneous conversations',
    'Resolve 80% of common customer inquiries instantly',
    'Integrate with knowledge bases and FAQ systems',
    'Escalate complex issues to human agents seamlessly',
    'Track customer satisfaction and interaction history',
    'Provide personalized responses based on customer data',
    'Generate detailed analytics and performance reports',
    'Support voice, chat, and messaging platforms'
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      scenario: 'Order Support & Returns',
      description: 'Handle order inquiries, tracking requests, return processing, and product questions with instant responses.',
      results: '75% reduction in support tickets, 92% customer satisfaction'
    },
    {
      industry: 'SaaS/Technology',
      scenario: 'Technical Support & Onboarding',
      description: 'Provide technical assistance, account setup guidance, and feature explanations to new and existing users.',
      results: '60% faster resolution times, 85% first-contact resolution'
    },
    {
      industry: 'Healthcare',
      scenario: 'Patient Support & Scheduling',
      description: 'Assist patients with appointment scheduling, prescription inquiries, and general health information.',
      results: '95% patient satisfaction, 50% reduction in call wait times'
    },
    {
      industry: 'Financial Services',
      scenario: 'Account Support & Inquiries',
      description: 'Handle account balance inquiries, transaction questions, and basic financial service requests securely.',
      results: '90% query resolution rate, 40% cost reduction per interaction'
    }
  ];

  const integrations = [
    {
      category: 'Help Desk Systems',
      platforms: ['Zendesk', 'Freshdesk', 'ServiceNow', 'Intercom']
    },
    {
      category: 'CRM Platforms',
      platforms: ['Salesforce Service Cloud', 'HubSpot Service Hub', 'Microsoft Dynamics']
    },
    {
      category: 'Communication Channels',
      platforms: ['Live Chat', 'WhatsApp Business', 'Facebook Messenger', 'Email']
    },
    {
      category: 'Knowledge Management',
      platforms: ['Confluence', 'Notion', 'SharePoint', 'Custom APIs']
    }
  ];

  const metrics = [
    {
      title: 'Response Time',
      before: '5-15 minutes',
      after: '<30 seconds',
      improvement: '95% faster'
    },
    {
      title: 'Resolution Rate',
      before: '65%',
      after: '85%',
      improvement: '31% increase'
    },
    {
      title: 'Customer Satisfaction',
      before: '78%',
      after: '94%',
      improvement: '20% increase'
    },
    {
      title: 'Operating Costs',
      before: '$12 per interaction',
      after: '$3 per interaction',
      improvement: '75% reduction'
    }
  ];

  const faqs = [
    {
      question: 'How does the AI handle complex customer issues?',
      answer: 'Our Customer Care Agent uses advanced natural language understanding to analyze customer inquiries and determine complexity. For complex issues requiring human expertise, it seamlessly escalates to the appropriate human agent with full context and conversation history.'
    },
    {
      question: 'Can it access our existing knowledge base and documentation?',
      answer: 'Yes, the AI integrates with popular knowledge management systems like Confluence, Notion, and SharePoint. It can also connect to custom APIs and databases to access your specific product information, policies, and procedures.'
    },
    {
      question: 'What languages and channels are supported?',
      answer: 'The Customer Care Agent supports 50+ languages with native-level fluency and works across multiple channels including live chat, WhatsApp, Facebook Messenger, email, and voice calls. Channel-specific features are automatically optimized.'
    },
    {
      question: 'How do you ensure data security and privacy?',
      answer: 'We maintain enterprise-grade security with end-to-end encryption, SOC 2 Type II certification, GDPR compliance, and secure data handling. All customer interactions are encrypted and stored according to your data retention policies.'
    },
    {
      question: 'Can it learn from our specific business processes?',
      answer: 'Absolutely. The AI is trained on your specific products, services, policies, and procedures. It continuously learns from interactions and feedback to improve responses and better align with your business processes and brand voice.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mr-4">
                  <Headphones size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Customer Care Agent
                  </h1>
                  <p className="text-xl text-[#F2A339] font-semibold">24/7 Automated Customer Service</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Deliver exceptional customer service around the clock with AI agents that understand context, 
                resolve issues instantly, and escalate complex problems seamlessly. Achieve 94% customer 
                satisfaction while reducing support costs by 75%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="primary" size="lg">
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2E3192] mb-1">94%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2E3192] mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2E3192] mb-1">85%</div>
                  <div className="text-sm text-gray-600">First-Contact Resolution</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="relative aspect-video bg-gradient-to-br from-[#F2A339] to-[#2E3192] rounded-xl overflow-hidden mb-6">
                  <video
                    ref={setVideoRef}
                    className="w-full h-full object-cover"
                    onEnded={handleVideoEnded}
                    muted={isMuted}
                    controls
                  >
                    <source src={customerSupportVideo} type="video/mp4" />
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Care Agent Demo</h3>
                <p className="text-gray-600 text-sm">See how our AI handles real customer inquiries and support requests.</p>
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
              Advanced Customer Service Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered features designed to deliver exceptional customer experiences
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

      {/* Capabilities Section */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What Our Customer Care Agent Can Do
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From simple inquiries to complex problem-solving, our AI agent handles a wide range 
                of customer service tasks with human-like understanding and empathy.
              </p>
              
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={24} className="text-[#F2A339] mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
              
              <div className="space-y-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="pb-4 border-b border-gray-200 last:border-b-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 font-medium">{metric.title}</span>
                      <span className="text-sm font-medium text-green-600">{metric.improvement}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Before: {metric.before}</span>
                      <ArrowRight className="text-[#F2A339]" size={16} />
                      <span className="text-lg font-bold text-[#F2A339]">After: {metric.after}</span>
                    </div>
                  </div>
                ))}
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
              Industry-Specific Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored customer service solutions for different industries and business models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{useCase.industry}</h3>
                  <MessageSquare className="text-[#F2A339]" size={20} />
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

      {/* Integrations */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing customer service tools and platforms for a unified experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{integration.category}</h3>
                <div className="space-y-2">
                  {integration.platforms.map((platform, pIndex) => (
                    <div key={pIndex} className="bg-[#F9FAFB] px-3 py-2 rounded-lg text-sm text-gray-700">
                      {platform}
                    </div>
                  ))}
                </div>
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
              Common questions about our Customer Care Agent implementation and capabilities
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
            Transform Your Customer Service Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading companies that have improved customer satisfaction by 20% while reducing 
            support costs by 75% with our AI Customer Care Agent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">Get Started</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2E3192]">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerCareAgent;