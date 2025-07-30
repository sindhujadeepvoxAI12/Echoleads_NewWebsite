import React from 'react';
import { BookOpen, Users, Target, TrendingUp, Clock, CheckCircle, ArrowRight, Download, Play, Star } from 'lucide-react';
import Button from '../../components/Button';

const LearnCenter = () => {
  const guides = [
    {
      category: 'Getting Started',
      icon: BookOpen,
      guides: [
        {
          title: 'AI Sales Agent Implementation Guide',
          description: 'Complete step-by-step guide to implementing your first AI sales agent',
          duration: '15 min read',
          difficulty: 'Beginner',
          downloadable: true
        },
        {
          title: 'Choosing the Right AI Agent for Your Business',
          description: 'Decision framework for selecting the optimal AI agent type',
          duration: '10 min read',
          difficulty: 'Beginner',
          downloadable: true
        },
        {
          title: 'Setting Up Your First Campaign',
          description: 'Best practices for launching your first AI-powered sales campaign',
          duration: '20 min read',
          difficulty: 'Intermediate',
          downloadable: true
        }
      ]
    },
    {
      category: 'Best Practices',
      icon: Target,
      guides: [
        {
          title: 'Conversation Design for Maximum Conversion',
          description: 'How to craft AI conversations that feel natural and drive results',
          duration: '25 min read',
          difficulty: 'Intermediate',
          downloadable: true
        },
        {
          title: 'Lead Qualification Strategies',
          description: 'Advanced techniques for qualifying leads with AI agents',
          duration: '18 min read',
          difficulty: 'Advanced',
          downloadable: true
        },
        {
          title: 'Multi-Channel Integration Best Practices',
          description: 'Seamlessly connect phone, WhatsApp, and Instagram agents',
          duration: '22 min read',
          difficulty: 'Advanced',
          downloadable: true
        }
      ]
    },
    {
      category: 'Industry Specific',
      icon: Users,
      guides: [
        {
          title: 'AI Agents for Real Estate Success',
          description: 'Complete guide to using AI for property lead generation',
          duration: '30 min read',
          difficulty: 'Intermediate',
          downloadable: true
        },
        {
          title: 'Insurance Sales Automation',
          description: 'Streamline quote generation and policy inquiries with AI',
          duration: '25 min read',
          difficulty: 'Intermediate',
          downloadable: true
        },
        {
          title: 'SaaS Demo Booking Optimization',
          description: 'Increase demo bookings and trial conversions with AI',
          duration: '20 min read',
          difficulty: 'Intermediate',
          downloadable: true
        }
      ]
    },
    {
      category: 'Advanced Strategies',
      icon: TrendingUp,
      guides: [
        {
          title: 'Advanced Analytics and Optimization',
          description: 'Use data to continuously improve AI agent performance',
          duration: '35 min read',
          difficulty: 'Advanced',
          downloadable: true
        },
        {
          title: 'Enterprise AI Agent Deployment',
          description: 'Scale AI agents across large organizations',
          duration: '40 min read',
          difficulty: 'Advanced',
          downloadable: true
        },
        {
          title: 'Custom Integration Development',
          description: 'Build custom integrations with EchoLeads API',
          duration: '45 min read',
          difficulty: 'Expert',
          downloadable: true
        }
      ]
    }
  ];

  const featuredResources = [
    {
      type: 'Video Course',
      title: 'Complete AI Sales Mastery',
      description: 'Comprehensive 4-hour video course covering everything from setup to optimization',
      duration: '4 hours',
      lessons: 12,
      rating: 4.9,
      students: 2847,
      free: true
    },
    {
      type: 'Webinar Series',
      title: 'AI Sales Transformation Workshop',
      description: 'Live monthly workshops with industry experts and successful customers',
      duration: '90 min',
      sessions: 'Monthly',
      rating: 4.8,
      attendees: 1250,
      free: true
    },
    {
      type: 'Template Library',
      title: 'Conversation Templates Collection',
      description: 'Ready-to-use conversation templates for different industries and use cases',
      templates: 50,
      industries: 8,
      rating: 4.9,
      downloads: 5600,
      free: true
    }
  ];

  const quickTips = [
    {
      title: 'Optimize Response Times',
      tip: 'Set up instant auto-responses for common inquiries to maintain engagement while AI processes complex requests.',
      category: 'Performance'
    },
    {
      title: 'Personalize Conversations',
      tip: 'Use customer data from your CRM to personalize AI conversations and increase conversion rates by up to 40%.',
      category: 'Conversion'
    },
    {
      title: 'A/B Test Messages',
      tip: 'Continuously test different conversation flows and messages to optimize for your specific audience.',
      category: 'Optimization'
    },
    {
      title: 'Monitor Quality Scores',
      tip: 'Regularly review conversation quality scores and customer feedback to maintain high service standards.',
      category: 'Quality'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Master AI sales automation with comprehensive guides, best practices, and expert insights. 
              Everything you need to maximize your AI agent performance and drive exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">50+</div>
              <div className="text-gray-600">Comprehensive Guides</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">10K+</div>
              <div className="text-gray-600">Active Learners</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Learning Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with our most popular and comprehensive learning materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#F2A339] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {resource.type}
                  </span>
                  {resource.free && (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Free
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{resource.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Duration:</span>
                    <span className="font-medium">{resource.duration}</span>
                  </div>
                  {resource.lessons && (
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Lessons:</span>
                      <span className="font-medium">{resource.lessons}</span>
                    </div>
                  )}
                  {resource.templates && (
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Templates:</span>
                      <span className="font-medium">{resource.templates}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Rating:</span>
                    <div className="flex items-center">
                      <Star size={16} className="text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">{resource.rating}</span>
                    </div>
                  </div>
                </div>
                
                <Button variant="primary" className="w-full">
                  Start Learning
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Guides by Category */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Learning Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organized guides and resources for every stage of your AI sales journey
            </p>
          </div>

          <div className="space-y-16">
            {guides.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-[#F2A339] rounded-xl flex items-center justify-center mr-4">
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.guides.map((guide, guideIndex) => (
                    <div key={guideIndex} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                          guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          guide.difficulty === 'Advanced' ? 'bg-orange-100 text-orange-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {guide.difficulty}
                        </span>
                        {guide.downloadable && (
                          <Download size={20} className="text-gray-400 hover:text-[#F2A339] cursor-pointer transition-colors" />
                        )}
                      </div>
                      
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">{guide.title}</h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">{guide.description}</p>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock size={16} className="mr-2" />
                          {guide.duration}
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        Read Guide
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quick Tips & Best Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Actionable insights you can implement immediately to improve your AI agent performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickTips.map((tip, index) => (
              <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{tip.title}</h3>
                  <span className="bg-[#F2A339] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tip.category}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#2E3192] to-[#1F237A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Implement What You've Learned?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Put your knowledge into action with EchoLeads AI agents. Start your implementation today 
            with our expert guidance and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">Get Started</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2E3192]">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnCenter;