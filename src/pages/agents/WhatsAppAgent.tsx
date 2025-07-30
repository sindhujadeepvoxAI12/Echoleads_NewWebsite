import React from 'react';
import { MessageCircle, Smartphone, Globe, BarChart3, Shield, Zap, Users, CheckCircle, ArrowRight, Play } from 'lucide-react';
import Button from '../../components/Button';

const WhatsAppAgent = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Rich Media Support',
      description: 'Send and receive images, videos, documents, and voice messages with intelligent content analysis and automated responses.'
    },
    {
      icon: Globe,
      title: 'Multi-Language Communication',
      description: 'Communicate naturally in 50+ languages with cultural context awareness and localized business practices.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track message delivery, read rates, response times, and conversion metrics with detailed WhatsApp-specific insights.'
    },
    {
      icon: Shield,
      title: 'WhatsApp Business Compliance',
      description: 'Fully compliant with WhatsApp Business API policies, including opt-in management and 24-hour messaging windows.'
    }
  ];

  const capabilities = [
    'Handle unlimited simultaneous WhatsApp conversations',
    'Send rich media messages (images, videos, documents)',
    'Manage WhatsApp Business catalog and product inquiries',
    'Process payments through WhatsApp Pay integration',
    'Create and manage broadcast lists automatically',
    'Handle group messaging and customer service',
    'Integrate with WhatsApp Business API seamlessly',
    'Support voice message transcription and responses'
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      scenario: 'Order Updates & Customer Support',
      description: 'Send automated order confirmations, shipping updates, and handle customer inquiries about products and deliveries.',
      results: '98% message open rate, 45% increase in customer engagement'
    },
    {
      industry: 'Healthcare',
      scenario: 'Appointment Reminders & Health Tips',
      description: 'Send appointment reminders, medication alerts, and provide health information through secure WhatsApp messaging.',
      results: '85% appointment show rate, 60% reduction in no-shows'
    },
    {
      industry: 'Real Estate',
      scenario: 'Property Inquiries & Virtual Tours',
      description: 'Share property listings, schedule viewings, and provide virtual tour links through WhatsApp conversations.',
      results: '3x more property inquiries, 40% faster response times'
    },
    {
      industry: 'Education',
      scenario: 'Student Communication & Updates',
      description: 'Send course updates, assignment reminders, and provide educational support through WhatsApp messaging.',
      results: '92% student engagement rate, 50% improvement in communication'
    }
  ];

  const whatsappFeatures = [
    {
      title: 'Message Templates',
      description: 'Pre-approved message templates for notifications, confirmations, and marketing messages',
      icon: '📝'
    },
    {
      title: 'Quick Replies',
      description: 'Interactive buttons and quick reply options for seamless customer interactions',
      icon: '⚡'
    },
    {
      title: 'Catalog Integration',
      description: 'Showcase products directly in WhatsApp with integrated catalog functionality',
      icon: '🛍️'
    },
    {
      title: 'Payment Processing',
      description: 'Secure payment processing through WhatsApp Pay and integrated payment gateways',
      icon: '💳'
    },
    {
      title: 'Group Management',
      description: 'Automated group messaging and customer community management',
      icon: '👥'
    },
    {
      title: 'Status Updates',
      description: 'Automated WhatsApp Status updates for marketing and engagement',
      icon: '📢'
    }
  ];

  const metrics = [
    {
      title: 'Message Open Rate',
      value: '98%',
      description: 'Industry-leading open rates compared to email (22%) and SMS (85%)'
    },
    {
      title: 'Response Time',
      value: '<30 sec',
      description: 'Average response time for customer inquiries and support requests'
    },
    {
      title: 'Customer Engagement',
      value: '65%',
      description: 'Higher engagement rates compared to traditional communication channels'
    },
    {
      title: 'Conversion Rate',
      value: '25%',
      description: 'Average conversion rate from WhatsApp conversations to sales'
    }
  ];

  const faqs = [
    {
      question: 'How does WhatsApp Business API integration work?',
      answer: 'Our WhatsApp Agent integrates directly with the official WhatsApp Business API, ensuring full compliance with WhatsApp policies. We handle the technical setup, verification process, and ongoing management of your WhatsApp Business account.'
    },
    {
      question: 'Can it handle rich media messages and files?',
      answer: 'Yes, the AI can send and receive images, videos, documents, audio files, and voice messages. It can analyze visual content, transcribe voice messages, and respond appropriately with relevant media when needed.'
    },
    {
      question: 'What about WhatsApp\'s 24-hour messaging window?',
      answer: 'Our system automatically manages WhatsApp\'s 24-hour messaging window policy. It uses approved message templates for notifications outside the window and ensures all customer-initiated conversations are handled within policy guidelines.'
    },
    {
      question: 'How do you ensure message delivery and compliance?',
      answer: 'We maintain high delivery rates through proper opt-in management, message template approval, and compliance monitoring. Our system automatically handles opt-outs, manages contact lists, and ensures all messages meet WhatsApp Business policies.'
    },
    {
      question: 'Can it integrate with our existing CRM and e-commerce platform?',
      answer: 'Absolutely. Our WhatsApp Agent integrates with popular CRM systems, e-commerce platforms, and business tools. It can sync customer data, order information, and conversation history across all your business systems.'
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
                <div className="w-16 h-16 bg-[#25D366] rounded-xl flex items-center justify-center mr-4">
                  <MessageCircle size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    WhatsApp Agent
                  </h1>
                  <p className="text-xl text-[#F2A339] font-semibold">Business Messaging Automation</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Leverage the world's most popular messaging platform for business growth. Our WhatsApp Agent 
                delivers 98% message open rates, handles unlimited conversations, and provides rich media 
                support for exceptional customer engagement.
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
                  <div className="text-3xl font-bold text-[#2E3192] mb-1">98%</div>
                  <div className="text-sm text-gray-600">Message Open Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2E3192] mb-1">2B+</div>
                  <div className="text-sm text-gray-600">Global Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2E3192] mb-1">25%</div>
                  <div className="text-sm text-gray-600">Avg Conversion Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-xl flex items-center justify-center mb-6">
                  <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Play size={24} className="text-white ml-1" />
                  </button>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp Agent in Action</h3>
                <p className="text-gray-600 text-sm">See how our AI handles WhatsApp conversations and rich media interactions.</p>
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
              Advanced WhatsApp Business Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive WhatsApp Business API integration with advanced AI capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#25D366] rounded-xl flex items-center justify-center mb-6">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Specific Features */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              WhatsApp Business Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage all WhatsApp Business features for maximum customer engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatsappFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              WhatsApp Performance Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading performance across all key WhatsApp business metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-[#25D366] mb-4">{metric.value}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{metric.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{metric.description}</p>
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
                What Our WhatsApp Agent Can Do
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From simple text messages to complex multimedia interactions, our WhatsApp Agent 
                handles all aspects of WhatsApp Business communication with intelligence and efficiency.
              </p>
              
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={24} className="text-[#25D366] mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">WhatsApp vs Other Channels</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Open Rate</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Email: 22%</div>
                    <div className="text-lg font-bold text-[#25D366]">WhatsApp: 98%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Response Rate</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">SMS: 45%</div>
                    <div className="text-lg font-bold text-[#25D366]">WhatsApp: 70%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Engagement Rate</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Social Media: 1-3%</div>
                    <div className="text-lg font-bold text-[#25D366]">WhatsApp: 65%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Global Reach</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Other Apps: &lt;1B</div>
                    <div className="text-lg font-bold text-[#25D366]">WhatsApp: 2B+</div>
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
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              WhatsApp Agent solutions tailored for different industries and business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{useCase.industry}</h3>
                  <MessageCircle className="text-[#25D366]" size={20} />
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

      {/* FAQ Section */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about WhatsApp Business API integration and our AI agent
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#25D366] to-[#128C7E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start WhatsApp Business Automation Today
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses using WhatsApp to achieve 98% message open rates and 
            25% conversion rates. Transform your customer communication today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">Get Started</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#25D366]">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsAppAgent;