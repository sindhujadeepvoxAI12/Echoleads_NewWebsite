import React from 'react';
import { Users, Target, Award, Globe, Lightbulb, Shield, Zap, Heart } from 'lucide-react';
import Button from '../components/Button';

const About = () => {
  const stats = [
    { icon: Users, title: '500+', desc: 'Happy Customers' },
    { icon: Target, title: '1M+', desc: 'Leads Processed' },
    { icon: Award, title: '95%', desc: 'Customer Success Rate' },
    { icon: Globe, title: '25+', desc: 'Countries Served' }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push the boundaries of AI technology to create solutions that truly transform businesses.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Security and reliability are at the core of everything we build, ensuring your data is always protected.'
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'We believe in making complex processes simple and helping businesses achieve more with less effort.'
    },
    {
      icon: Heart,
      title: 'Customer Success',
      description: 'Your success is our success. We\'re committed to helping you achieve your business goals.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Sales at TechCorp with 15+ years in sales automation',
      image: 'SJ'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'CTO & Co-Founder',
      bio: 'AI researcher with PhD from Stanford, former Google AI team lead',
      image: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Product',
      bio: 'Product strategy expert with background at Salesforce and HubSpot',
      image: 'ER'
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'Full-stack engineer with expertise in scalable AI systems',
      image: 'DK'
    }
  ];

  const milestones = [
    {
      year: '2022',
      title: 'Company Founded',
      description: 'EchoLeads.ai was founded with a mission to democratize AI-powered sales automation'
    },
    {
      year: '2023',
      title: 'First AI Agent Launched',
      description: 'Released our first WhatsApp AI agent, achieving 98% message open rates'
    },
    {
      year: '2023',
      title: 'Series A Funding',
      description: 'Raised $10M Series A to accelerate product development and market expansion'
    },
    {
      year: '2024',
      title: 'Multi-Channel Platform',
      description: 'Launched comprehensive platform supporting voice, WhatsApp, and Instagram'
    },
    {
      year: '2024',
      title: 'Enterprise Launch',
      description: 'Introduced enterprise features and achieved SOC 2 Type II certification'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Serving customers in 25+ countries with 500+ successful implementations'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About EchoLeads.ai
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing sales with AI-powered agents that work 24/7, helping businesses 
              scale their lead generation and customer engagement like never before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-[#2E3192] mb-2">{stat.title}</div>
                <div className="text-gray-600">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At EchoLeads.ai, we believe every business deserves access to world-class sales automation. 
                Our AI agents work tirelessly to help you connect with prospects, qualify leads, and close 
                more deals than ever before.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded by a team of sales experts and AI researchers, we've built the most advanced 
                conversational AI platform for sales teams. From startups to enterprises, we're helping 
                businesses of all sizes scale their sales operations with intelligent automation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're not just building software – we're creating the future of sales, where AI and human 
                expertise work together to achieve unprecedented results.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F2A339] to-[#D88D26] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg leading-relaxed mb-6">
                To become the global leader in AI-powered sales automation, empowering every business 
                to achieve their full sales potential through intelligent, human-like AI agents.
              </p>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">2030 Goal</div>
                <div className="text-lg">Power 1 million sales conversations daily across 100+ countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#2E3192] rounded-xl flex items-center justify-center mb-6">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced leaders driving innovation in AI-powered sales automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-[#F2A339] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">{member.image}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#F2A339] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to transform sales with AI
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#F2A339] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Research & Innovation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our dedicated research team continuously pushes the boundaries of conversational AI, 
                natural language processing, and machine learning to create more intelligent and 
                effective sales agents.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#F2A339] rounded-full mr-4"></div>
                  <span className="text-gray-700">Advanced natural language understanding</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#F2A339] rounded-full mr-4"></div>
                  <span className="text-gray-700">Real-time sentiment analysis</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#F2A339] rounded-full mr-4"></div>
                  <span className="text-gray-700">Predictive lead scoring algorithms</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#F2A339] rounded-full mr-4"></div>
                  <span className="text-gray-700">Multi-modal conversation understanding</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#2E3192] to-[#1F237A] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Innovation Stats</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-[#F2A339] mb-2">15+</div>
                  <div className="text-lg">AI researchers and engineers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#F2A339] mb-2">50+</div>
                  <div className="text-lg">Patents pending</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#F2A339] mb-2">99.9%</div>
                  <div className="text-lg">Platform uptime</div>
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
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Be part of the AI revolution in sales. Whether you're looking to transform your business 
            or join our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">Get Started</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2E3192]">
              View Careers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;