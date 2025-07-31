import React from 'react';
import { Shield, Zap, BarChart3, Users, Bot, MessageSquare, Phone, Headphones, Target, Lock, Clock, Globe } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Platform = () => {
  const agentTypes = [
    {
      icon: Phone,
      title: 'Cold Calling Agent',
      description: 'Advanced voice AI for lead generation and qualification',
      features: ['Natural voice conversations', 'Lead qualification', 'Appointment booking', 'CRM integration']
    },
    {
      icon: Headphones,
      title: 'Customer Care Agent',
      description: '24/7 automated customer service and support',
      features: ['24/7 availability', 'Ticket routing', 'Knowledge base', 'Escalation handling']
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Agent',
      description: 'Business messaging and lead nurturing automation',
      features: ['Rich media support', 'Automated responses', 'Lead nurturing', 'Multi-language']
    },
    {
      icon: Bot,
      title: 'Instagram Lead Response Agent',
      description: 'Real-time social media lead capture and response',
      features: ['Instant responses', 'Lead capture forms', 'Social integration', 'Analytics tracking']
    }
  ];

  const features = [
    {
      icon: Target,
      title: 'Smart Lead Scoring',
      description: 'Real-time qualification and prioritization',
      details: 'AI-powered scoring system that evaluates leads based on conversation quality, intent signals, and behavioral patterns.'
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Support',
      description: 'Phone, WhatsApp, Instagram integration',
      details: 'Seamlessly manage conversations across all channels from a single dashboard with unified reporting.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Live conversation monitoring and insights',
      details: 'Real-time dashboards with conversion metrics, conversation analytics, and performance optimization recommendations.'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance',
      details: 'SOC 2 Type II certified with end-to-end encryption, GDPR compliance, and enterprise-grade security controls.'
    },
    {
      icon: Clock,
      title: 'Instant Deployment',
      description: 'Quick setup with pre-built templates',
      details: 'Deploy AI agents in minutes with industry-specific templates and automated configuration workflows.'
    }
  ];

  const integrations = [
    {
      icon: Users,
      title: 'CRM Systems',
      description: 'Seamlessly integrate with popular CRMs',
      platforms: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho']
    },
    {
      icon: Clock,
      title: 'Calendar Tools',
      description: 'Automated appointment booking',
      platforms: ['Calendly', 'Google Calendar', 'Outlook', 'Acuity']
    },
    {
      icon: Phone,
      title: 'Telephony',
      description: 'Advanced voice calling capabilities',
      platforms: ['Twilio', 'RingCentral', 'Vonage', 'CallRail']
    },
    {
      icon: MessageSquare,
      title: 'Messaging Platforms',
      description: 'Multi-channel communication sync',
      platforms: ['WhatsApp Business', 'Instagram', 'Facebook Messenger', 'SMS']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete AI Sales Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to automate your sales process with AI-powered agents that work 24/7 across multiple channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Enterprise Security', desc: 'Bank-level encryption and compliance' },
              { icon: Zap, title: 'Instant Deployment', desc: 'Setup in minutes with templates' },
              { icon: BarChart3, title: 'Real-time Analytics', desc: 'Live insights and optimization' },
              { icon: Users, title: 'Multi-Agent Support', desc: 'Scale with unlimited agents' }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Agents for Every Use Case
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deploy specialized AI agents designed for specific business functions and industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agentTypes.map((agent, index) => (
              <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center flex-shrink-0">
                    <agent.icon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{agent.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{agent.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {agent.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-[#F2A339] rounded-full mr-2"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced capabilities that make our AI agents the most effective sales automation solution
            </p>
          </div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-[#2E3192] rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-lg text-gray-600 mb-4">{feature.description}</p>
                    <p className="text-gray-700 leading-relaxed">{feature.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing tools and workflows for a unified sales experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center flex-shrink-0">
                    <integration.icon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{integration.title}</h3>
                    <p className="text-gray-600 mb-4">{integration.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {integration.platforms.map((platform, pIndex) => (
                        <span key={pIndex} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#2E3192] to-[#1F237A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Deploy Your AI Sales Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Start with a free trial and see how our AI agents can transform your sales process
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

export default Platform;