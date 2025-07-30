import React, { useState } from 'react';
import { Phone, Headphones, MessageCircle, Instagram, Check, X, Star, Users, Clock, BarChart3 } from 'lucide-react';
import Button from '../../components/Button';

const AgentComparison = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const agents = [
    {
      name: 'Cold Calling Agent',
      icon: Phone,
      color: 'bg-[#2E3192]',
      description: 'Advanced voice AI for lead generation and qualification',
      bestFor: ['B2B Lead Generation', 'Real Estate', 'Insurance', 'Financial Services'],
      conversionRate: '23%',
      responseTime: 'Instant',
      availability: '24/7',
      channels: ['Voice Calls', 'WhatsApp Follow-up'],
      features: {
        voiceCalls: true,
        whatsapp: true,
        instagram: false,
        leadScoring: true,
        appointmentBooking: true,
        crmIntegration: true,
        multiLanguage: true,
        analytics: true,
        compliance: true,
        customScripts: true
      }
    },
    {
      name: 'Customer Care Agent',
      icon: Headphones,
      color: 'bg-[#F2A339]',
      description: '24/7 automated customer service and support',
      bestFor: ['E-commerce Support', 'SaaS Help Desk', 'Healthcare', 'General Support'],
      conversionRate: '94% Satisfaction',
      responseTime: '<30 seconds',
      availability: '24/7',
      channels: ['Live Chat', 'WhatsApp', 'Email'],
      features: {
        voiceCalls: false,
        whatsapp: true,
        instagram: false,
        leadScoring: false,
        appointmentBooking: true,
        crmIntegration: true,
        multiLanguage: true,
        analytics: true,
        compliance: true,
        customScripts: true
      }
    },
    {
      name: 'WhatsApp Agent',
      icon: MessageCircle,
      color: 'bg-[#25D366]',
      description: 'Business messaging and lead nurturing automation',
      bestFor: ['E-commerce', 'Appointment Reminders', 'Customer Updates', 'Global Reach'],
      conversionRate: '25%',
      responseTime: '<30 seconds',
      availability: '24/7',
      channels: ['WhatsApp Business', 'Rich Media'],
      features: {
        voiceCalls: false,
        whatsapp: true,
        instagram: false,
        leadScoring: true,
        appointmentBooking: true,
        crmIntegration: true,
        multiLanguage: true,
        analytics: true,
        compliance: true,
        customScripts: true
      }
    },
    {
      name: 'Instagram Lead Response Agent',
      icon: Instagram,
      color: 'bg-gradient-to-br from-[#E4405F] to-[#C13584]',
      description: 'Real-time social media lead capture and response',
      bestFor: ['Social Media Advertising', 'Influencer Marketing', 'Visual Brands', 'Gen Z Audience'],
      conversionRate: '18%',
      responseTime: '<30 seconds',
      availability: '24/7',
      channels: ['Instagram DMs', 'Comments', 'Stories'],
      features: {
        voiceCalls: false,
        whatsapp: true,
        instagram: true,
        leadScoring: true,
        appointmentBooking: false,
        crmIntegration: true,
        multiLanguage: true,
        analytics: true,
        compliance: true,
        customScripts: true
      }
    }
  ];

  const featureDetails = {
    voiceCalls: {
      title: 'Voice Calls',
      description: 'Make and receive phone calls with natural voice AI'
    },
    whatsapp: {
      title: 'WhatsApp Integration',
      description: 'Send and receive WhatsApp messages with rich media support'
    },
    instagram: {
      title: 'Instagram Integration',
      description: 'Respond to Instagram DMs, comments, and story interactions'
    },
    leadScoring: {
      title: 'Lead Scoring',
      description: 'Automatically qualify and score leads based on conversation quality'
    },
    appointmentBooking: {
      title: 'Appointment Booking',
      description: 'Schedule appointments and sync with calendar systems'
    },
    crmIntegration: {
      title: 'CRM Integration',
      description: 'Seamlessly integrate with popular CRM platforms'
    },
    multiLanguage: {
      title: 'Multi-Language Support',
      description: 'Communicate in 50+ languages with native fluency'
    },
    analytics: {
      title: 'Analytics & Reporting',
      description: 'Comprehensive performance tracking and insights'
    },
    compliance: {
      title: 'Compliance Features',
      description: 'Built-in compliance for industry regulations and policies'
    },
    customScripts: {
      title: 'Custom Scripts',
      description: 'Customize conversation flows and responses for your brand'
    }
  };

  const comparisonMetrics = [
    {
      metric: 'Setup Time',
      coldCalling: '24-48 hours',
      customerCare: '12-24 hours',
      whatsapp: '6-12 hours',
      instagram: '6-12 hours'
    },
    {
      metric: 'Learning Curve',
      coldCalling: 'Medium',
      customerCare: 'Low',
      whatsapp: 'Low',
      instagram: 'Low'
    },
    {
      metric: 'Scalability',
      coldCalling: 'High',
      customerCare: 'Very High',
      whatsapp: 'Very High',
      instagram: 'High'
    },
    {
      metric: 'ROI Timeline',
      coldCalling: '2-3 months',
      customerCare: '1-2 months',
      whatsapp: '1-2 months',
      instagram: '2-4 months'
    }
  ];

  const useCaseMatrix = [
    {
      useCase: 'B2B Lead Generation',
      coldCalling: 'Excellent',
      customerCare: 'Poor',
      whatsapp: 'Good',
      instagram: 'Fair'
    },
    {
      useCase: 'Customer Support',
      coldCalling: 'Fair',
      customerCare: 'Excellent',
      whatsapp: 'Good',
      instagram: 'Poor'
    },
    {
      useCase: 'E-commerce Sales',
      coldCalling: 'Good',
      customerCare: 'Good',
      whatsapp: 'Excellent',
      instagram: 'Good'
    },
    {
      useCase: 'Appointment Booking',
      coldCalling: 'Excellent',
      customerCare: 'Good',
      whatsapp: 'Excellent',
      instagram: 'Poor'
    },
    {
      useCase: 'Social Media Marketing',
      coldCalling: 'Poor',
      customerCare: 'Poor',
      whatsapp: 'Fair',
      instagram: 'Excellent'
    }
  ];

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'Excellent': return 'text-green-600 bg-green-50';
      case 'Good': return 'text-blue-600 bg-blue-50';
      case 'Fair': return 'text-yellow-600 bg-yellow-50';
      case 'Poor': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Agent Comparison
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Compare our AI agents side-by-side to find the perfect solution for your business needs. 
              Each agent is designed for specific use cases and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agents.map((agent, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 ${agent.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <agent.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{agent.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{agent.description}</p>
                <div className="bg-[#F9FAFB] rounded-lg p-3">
                  <div className="text-2xl font-bold text-[#F2A339] mb-1">{agent.conversionRate}</div>
                  <div className="text-xs text-gray-600">Performance Rate</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Feature Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed feature comparison to help you choose the right AI agent
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#F9FAFB]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                    {agents.map((agent, index) => (
                      <th key={index} className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        <div className="flex items-center justify-center">
                          <div className={`w-8 h-8 ${agent.color} rounded-lg flex items-center justify-center mr-2`}>
                            <agent.icon size={16} className="text-white" />
                          </div>
                          {agent.name}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {Object.entries(featureDetails).map(([key, feature]) => (
                    <tr 
                      key={key}
                      className="hover:bg-[#F9FAFB] transition-colors cursor-pointer"
                      onClick={() => setSelectedFeature(selectedFeature === key ? null : key)}
                    >
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-900">{feature.title}</div>
                          {selectedFeature === key && (
                            <div className="text-sm text-gray-600 mt-1">{feature.description}</div>
                          )}
                        </div>
                      </td>
                      {agents.map((agent, index) => (
                        <td key={index} className="px-6 py-4 text-center">
                          {agent.features[key as keyof typeof agent.features] ? (
                            <Check size={20} className="text-green-600 mx-auto" />
                          ) : (
                            <X size={20} className="text-red-400 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Matrix */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Use Case Suitability
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See which AI agent performs best for different business use cases
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#F9FAFB]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Use Case</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Cold Calling</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Customer Care</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">WhatsApp</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Instagram</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {useCaseMatrix.map((row, index) => (
                    <tr key={index} className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.useCase}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRatingColor(row.coldCalling)}`}>
                          {row.coldCalling}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRatingColor(row.customerCare)}`}>
                          {row.customerCare}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRatingColor(row.whatsapp)}`}>
                          {row.whatsapp}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRatingColor(row.instagram)}`}>
                          {row.instagram}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Implementation Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare setup time, complexity, and ROI timeline for each agent type
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#F9FAFB]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Metric</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Cold Calling</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Customer Care</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">WhatsApp</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Instagram</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonMetrics.map((row, index) => (
                    <tr key={index} className="hover:bg-[#F9FAFB] transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.metric}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{row.coldCalling}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{row.customerCare}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{row.whatsapp}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{row.instagram}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation Engine */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Which Agent is Right for You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick recommendations based on common business scenarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Cold Calling Agent if:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">You need B2B lead generation</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">High-value deals require phone conversations</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">You're in real estate, insurance, or financial services</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">You want maximum conversion rates</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Customer Care Agent if:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">You need 24/7 customer support</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">High volume of support tickets</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">You're in e-commerce or SaaS</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">You want to reduce support costs</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose WhatsApp Agent if:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">Your customers prefer messaging</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">You need global reach and multi-language support</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">You want 98% message open rates</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">You're in e-commerce or local services</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Instagram Agent if:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">You run social media advertising</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">Your audience is active on Instagram</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">You're in fashion, beauty, or lifestyle</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">You want to capture social media leads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#2E3192] to-[#1F237A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Still Not Sure Which Agent to Choose?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our experts can help you select the perfect AI agent combination for your specific business needs. 
            Schedule a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">Schedule Consultation</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2E3192]">
              Try ROI Calculator
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentComparison;