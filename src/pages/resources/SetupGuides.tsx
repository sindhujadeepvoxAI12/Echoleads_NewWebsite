import React, { useState } from 'react';
import { BookOpen, CheckCircle, Clock, Users, Zap, Settings, Phone, MessageCircle, Instagram, Headphones } from 'lucide-react';
import Button from '../../components/Button';

const SetupGuides = () => {
  const [selectedGuide, setSelectedGuide] = useState('cold-calling');

  const guides = {
    'cold-calling': {
      title: 'Cold Calling Agent Setup',
      icon: Phone,
      color: 'bg-[#2E3192]',
      duration: '30-45 minutes',
      difficulty: 'Intermediate',
      steps: [
        {
          title: 'Account Setup & API Configuration',
          duration: '10 minutes',
          tasks: [
            'Create your EchoLeads account and verify email',
            'Generate API key from dashboard settings',
            'Configure basic account settings and billing',
            'Set up team permissions and access controls'
          ]
        },
        {
          title: 'Agent Configuration',
          duration: '15 minutes',
          tasks: [
            'Choose voice characteristics (tone, pace, accent)',
            'Configure industry-specific conversation templates',
            'Set up lead qualification criteria and scoring',
            'Define call routing and escalation rules'
          ]
        },
        {
          title: 'Integration Setup',
          duration: '15 minutes',
          tasks: [
            'Connect your CRM system (Salesforce, HubSpot, etc.)',
            'Set up calendar integration for appointment booking',
            'Configure phone number and telephony provider',
            'Test webhook endpoints for real-time notifications'
          ]
        },
        {
          title: 'Testing & Launch',
          duration: '5 minutes',
          tasks: [
            'Run test calls with sample scenarios',
            'Verify lead data flows to your CRM correctly',
            'Check appointment booking functionality',
            'Launch your first campaign and monitor performance'
          ]
        }
      ]
    },
    'customer-care': {
      title: 'Customer Care Agent Setup',
      icon: Headphones,
      color: 'bg-[#F2A339]',
      duration: '20-30 minutes',
      difficulty: 'Beginner',
      steps: [
        {
          title: 'Initial Configuration',
          duration: '8 minutes',
          tasks: [
            'Set up your EchoLeads account and get API access',
            'Configure basic agent settings and personality',
            'Upload your knowledge base and FAQ documents',
            'Set business hours and availability preferences'
          ]
        },
        {
          title: 'Channel Integration',
          duration: '12 minutes',
          tasks: [
            'Connect live chat widget to your website',
            'Set up email integration for ticket management',
            'Configure WhatsApp Business API connection',
            'Test multi-channel message routing'
          ]
        },
        {
          title: 'Knowledge Base Setup',
          duration: '8 minutes',
          tasks: [
            'Import existing help articles and documentation',
            'Configure automatic response templates',
            'Set up escalation rules for complex issues',
            'Train the AI on your specific products/services'
          ]
        },
        {
          title: 'Go Live',
          duration: '2 minutes',
          tasks: [
            'Run final tests across all channels',
            'Enable the agent for customer interactions',
            'Monitor initial conversations and adjust settings',
            'Set up performance tracking and reporting'
          ]
        }
      ]
    },
    'whatsapp': {
      title: 'WhatsApp Agent Setup',
      icon: MessageCircle,
      color: 'bg-[#25D366]',
      duration: '15-25 minutes',
      difficulty: 'Beginner',
      steps: [
        {
          title: 'WhatsApp Business Setup',
          duration: '10 minutes',
          tasks: [
            'Create WhatsApp Business account if needed',
            'Verify your business phone number',
            'Complete WhatsApp Business profile setup',
            'Apply for WhatsApp Business API access'
          ]
        },
        {
          title: 'EchoLeads Integration',
          duration: '8 minutes',
          tasks: [
            'Connect WhatsApp Business API to EchoLeads',
            'Configure message templates and quick replies',
            'Set up automated welcome messages',
            'Configure business hours and auto-responses'
          ]
        },
        {
          title: 'Content & Automation',
          duration: '5 minutes',
          tasks: [
            'Upload product catalog for WhatsApp Shopping',
            'Set up automated order confirmations',
            'Configure lead capture and qualification flows',
            'Test rich media message capabilities'
          ]
        },
        {
          title: 'Launch & Monitor',
          duration: '2 minutes',
          tasks: [
            'Send test messages to verify functionality',
            'Enable automated responses for customers',
            'Set up analytics and performance tracking',
            'Monitor message delivery and engagement rates'
          ]
        }
      ]
    },
    'instagram': {
      title: 'Instagram Agent Setup',
      icon: Instagram,
      color: 'bg-gradient-to-br from-[#E4405F] to-[#C13584]',
      duration: '20-30 minutes',
      difficulty: 'Intermediate',
      steps: [
        {
          title: 'Instagram Business Account',
          duration: '8 minutes',
          tasks: [
            'Convert to Instagram Business account',
            'Connect to Facebook Business Manager',
            'Verify your business information',
            'Set up Instagram Shopping if applicable'
          ]
        },
        {
          title: 'API Integration',
          duration: '12 minutes',
          tasks: [
            'Apply for Instagram Basic Display API access',
            'Configure webhook endpoints for DMs and comments',
            'Set up automated response templates',
            'Configure lead capture forms and CTAs'
          ]
        },
        {
          title: 'Content Strategy',
          duration: '8 minutes',
          tasks: [
            'Define automated response scenarios',
            'Set up story interaction responses',
            'Configure comment moderation rules',
            'Create lead qualification conversation flows'
          ]
        },
        {
          title: 'Testing & Optimization',
          duration: '2 minutes',
          tasks: [
            'Test DM responses and comment interactions',
            'Verify lead data capture and CRM integration',
            'Monitor response times and engagement rates',
            'Optimize based on initial performance data'
          ]
        }
      ]
    }
  };

  const prerequisites = [
    {
      title: 'EchoLeads Account',
      description: 'Active account with appropriate subscription plan',
      required: true
    },
    {
      title: 'Business Phone Number',
      description: 'Verified business phone number for voice agents',
      required: false
    },
    {
      title: 'CRM System',
      description: 'Salesforce, HubSpot, or other supported CRM',
      required: false
    },
    {
      title: 'Technical Knowledge',
      description: 'Basic understanding of APIs and webhooks',
      required: false
    }
  ];

  const troubleshooting = [
    {
      issue: 'Agent not responding to calls/messages',
      solution: 'Check API key configuration and webhook endpoints. Verify agent is enabled and within business hours.'
    },
    {
      issue: 'CRM integration not working',
      solution: 'Verify CRM credentials and permissions. Check field mapping configuration and test connection.'
    },
    {
      issue: 'Poor conversation quality',
      solution: 'Review and update conversation templates. Adjust AI training data and qualification criteria.'
    },
    {
      issue: 'Webhook delivery failures',
      solution: 'Check webhook URL accessibility and SSL certificate. Verify endpoint can handle POST requests.'
    }
  ];

  const currentGuide = guides[selectedGuide as keyof typeof guides];
  const IconComponent = currentGuide.icon;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Setup Guides
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Step-by-step instructions to get your AI agents up and running quickly. 
              Follow our comprehensive guides for seamless implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">4</div>
              <div className="text-gray-600 text-sm">Detailed Guides</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">15-45</div>
              <div className="text-gray-600 text-sm">Minutes Setup</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">99%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Selection */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {Object.entries(guides).map(([key, guide]) => {
              const IconComp = guide.icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedGuide(key)}
                  className={`p-6 rounded-2xl text-left transition-all duration-200 ${
                    selectedGuide === key
                      ? 'bg-[#F2A339] text-white shadow-lg'
                      : 'bg-[#F9FAFB] text-gray-900 hover:shadow-md'
                  }`}
                >
                  <div className={`w-12 h-12 ${selectedGuide === key ? 'bg-white/20' : guide.color} rounded-xl flex items-center justify-center mb-4`}>
                    <IconComp size={24} className={selectedGuide === key ? 'text-white' : 'text-white'} />
                  </div>
                  <h3 className="font-semibold mb-2">{guide.title}</h3>
                  <div className="text-sm opacity-80">
                    <div>{guide.duration}</div>
                    <div>{guide.difficulty}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Prerequisites</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prerequisites.map((prereq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                    prereq.required ? 'bg-red-100' : 'bg-green-100'
                  }`}>
                    {prereq.required ? (
                      <span className="text-red-600 text-sm font-bold">!</span>
                    ) : (
                      <CheckCircle size={16} className="text-green-600" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900">{prereq.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{prereq.description}</p>
                {prereq.required && (
                  <span className="inline-block mt-2 px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                    Required
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Setup Guide */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`w-20 h-20 ${currentGuide.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              <IconComponent size={40} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{currentGuide.title}</h2>
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <Clock size={20} className="mr-2" />
                <span>{currentGuide.duration}</span>
              </div>
              <div className="flex items-center">
                <Settings size={20} className="mr-2" />
                <span>{currentGuide.difficulty}</span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {currentGuide.steps.map((step, stepIndex) => (
              <div key={stepIndex} className="bg-[#F9FAFB] rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#F2A339] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{stepIndex + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">Estimated time: {step.duration}</p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <div className="space-y-4">
                    {step.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-start">
                        <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center mr-4 mt-1 bg-white">
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Issues & Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick fixes for the most common setup challenges
            </p>
          </div>

          <div className="space-y-6">
            {troubleshooting.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">❌ {item.issue}</h3>
                <p className="text-gray-700 leading-relaxed">✅ {item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-24 bg-gradient-to-br from-[#2E3192] to-[#1F237A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Help with Setup?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our technical support team is available 24/7 to help you get your AI agents 
            configured and running smoothly. Don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">Contact Support</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2E3192]">
              Schedule Setup Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SetupGuides;