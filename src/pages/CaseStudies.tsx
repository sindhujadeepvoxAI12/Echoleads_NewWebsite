import React from 'react';
import { ExternalLink, TrendingUp, Download, Play, ArrowRight, Users, DollarSign, Clock, Target } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const featuredCases = [
    {
      company: 'PropTech Solutions',
      industry: 'Real Estate',
      logo: 'PT',
      challenge: 'Missing leads during off-hours and weekends, slow response times affecting conversion rates',
      solution: 'Deployed Cold Calling Agent for 24/7 lead response and qualification',
      results: [
        '300% increase in weekend conversions',
        '45% reduction in lead response time',
        '$2M additional revenue in 6 months',
        '23% overall conversion rate improvement'
      ],
      metrics: {
        before: '12% conversion rate',
        after: '37% conversion rate',
        timeframe: '6 months'
      },
      testimonial: {
        quote: "EchoLeads transformed our entire sales process. We went from missing weekend leads to converting them at rates we never thought possible.",
        author: "Sarah Mitchell",
        role: "VP of Sales"
      },
      downloadable: true,
      videoDemo: true
    },
    {
      company: 'HealthFirst Clinics',
      industry: 'Healthcare',
      logo: 'HF',
      challenge: 'Overwhelming appointment scheduling calls, long patient wait times, staff burnout',
      solution: 'Implemented Customer Care Agent for patient intake and appointment scheduling',
      results: [
        '80% reduction in phone wait times',
        '95% patient satisfaction score',
        '50% increase in appointment bookings',
        '60% reduction in staff overtime'
      ],
      metrics: {
        before: '15 min average wait',
        after: '3 min average wait',
        timeframe: '4 months'
      },
      testimonial: {
        quote: "Our patients love the instant response. The AI handles complex insurance questions better than we expected.",
        author: "Dr. Lisa Rodriguez",
        role: "Practice Manager"
      },
      downloadable: true,
      videoDemo: false
    },
    {
      company: 'InsureMax',
      industry: 'Insurance',
      logo: 'IM',
      challenge: 'Long quote generation process, high customer drop-off rates, manual follow-ups',
      solution: 'WhatsApp Agent for instant quote requests and automated follow-up sequences',
      results: [
        '60% faster quote delivery',
        '40% increase in policy sales',
        '90% customer satisfaction',
        '35% reduction in customer acquisition cost'
      ],
      metrics: {
        before: '24 hour quote time',
        after: '10 minute quote time',
        timeframe: '3 months'
      },
      testimonial: {
        quote: "The WhatsApp integration was a game-changer. Customers get quotes instantly and our sales team focuses on closing deals.",
        author: "Mike Chen",
        role: "Sales Director"
      },
      downloadable: true,
      videoDemo: true
    }
  ];

  const additionalCases = [
    {
      company: 'TechFlow SaaS',
      industry: 'Technology',
      metric: '4x more demo bookings',
      description: 'Automated demo scheduling increased qualified leads by 400%'
    },
    {
      company: 'RetailPlus',
      industry: 'E-commerce',
      metric: '75% support ticket reduction',
      description: '24/7 customer support automation improved satisfaction scores'
    },
    {
      company: 'FinanceFirst',
      industry: 'Financial Services',
      metric: '50% faster loan processing',
      description: 'Automated application intake streamlined approval workflows'
    },
    {
      company: 'EduTech Academy',
      industry: 'Education',
      metric: '85% enrollment increase',
      description: 'AI-powered student inquiry handling improved conversion rates'
    }
  ];

  const industryStats = [
    {
      icon: Users,
      title: 'Customer Satisfaction',
      value: '94%',
      description: 'Average satisfaction score across all implementations'
    },
    {
      icon: DollarSign,
      title: 'Revenue Increase',
      value: '156%',
      description: 'Average revenue growth within 6 months'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '<30 sec',
      description: 'Average lead response time across all channels'
    },
    {
      icon: Target,
      title: 'Conversion Rate',
      value: '31%',
      description: 'Average conversion rate improvement'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how businesses across industries are transforming their sales processes and achieving 
              unprecedented growth with EchoLeads AI agents.
            </p>
          </div>

          {/* Industry Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {industryStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-[#2E3192] mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth analysis of how our AI agents delivered measurable results
            </p>
          </div>

          <div className="space-y-16">
            {featuredCases.map((caseStudy, index) => (
              <div key={index} className="bg-[#F9FAFB] rounded-2xl overflow-hidden shadow-xl">
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Company Info & Challenge */}
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-xl">{caseStudy.logo}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{caseStudy.company}</h3>
                          <p className="text-[#F2A339] font-medium text-lg">{caseStudy.industry}</p>
                        </div>
                        <div className="ml-auto flex space-x-3">
                          {caseStudy.videoDemo && (
                            <button className="w-10 h-10 bg-[#2E3192] rounded-lg flex items-center justify-center hover:bg-[#252A7A] transition-colors">
                              <Play size={20} className="text-white ml-1" />
                            </button>
                          )}
                          {caseStudy.downloadable && (
                            <button className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                              <Download size={20} className="text-white" />
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 text-lg">The Challenge</h4>
                          <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 text-lg">The Solution</h4>
                          <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
                        </div>

                        <div className="bg-white rounded-xl p-6">
                          <blockquote className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                            "{caseStudy.testimonial.quote}"
                          </blockquote>
                          <div className="border-t border-gray-200 pt-4">
                            <div className="font-semibold text-gray-900">{caseStudy.testimonial.author}</div>
                            <div className="text-[#F2A339] font-medium">{caseStudy.testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Results & Metrics */}
                    <div>
                      <div className="bg-white rounded-xl p-6 mb-6">
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-gray-600 font-medium">Before</span>
                          <TrendingUp className="text-[#F2A339]" size={24} />
                          <span className="text-gray-600 font-medium">After</span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xl font-semibold text-gray-700">{caseStudy.metrics.before}</span>
                          <ArrowRight className="text-[#F2A339]" size={20} />
                          <span className="text-3xl font-bold text-[#F2A339]">{caseStudy.metrics.after}</span>
                        </div>
                        <div className="text-center text-sm text-gray-500">
                          Results achieved in {caseStudy.metrics.timeframe}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">Key Results</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {caseStudy.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="bg-white rounded-lg p-4 flex items-center">
                              <div className="w-3 h-3 bg-[#F2A339] rounded-full mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700 font-medium">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button variant="primary" className="w-full">
                          Read Full Case Study
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Success Stories */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick highlights from our growing portfolio of successful implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalCases.map((caseItem, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{caseItem.company}</h3>
                    <p className="text-[#F2A339] font-medium">{caseItem.industry}</p>
                  </div>
                  <ExternalLink size={20} className="text-gray-400 hover:text-[#F2A339] cursor-pointer transition-colors" />
                </div>
                
                <div className="bg-green-50 text-green-700 font-bold text-lg px-4 py-2 rounded-lg mb-4 inline-block">
                  {caseItem.metric}
                </div>
                
                <p className="text-gray-700 leading-relaxed">{caseItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we ensure every customer achieves similar success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Discovery & Planning',
                description: 'We analyze your current sales process and identify optimization opportunities'
              },
              {
                step: '2',
                title: 'Custom Configuration',
                description: 'AI agents are configured specifically for your industry and use cases'
              },
              {
                step: '3',
                title: 'Integration & Testing',
                description: 'Seamless integration with your existing tools and thorough testing'
              },
              {
                step: '4',
                title: 'Launch & Optimization',
                description: 'Go-live support and continuous optimization based on performance data'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#F2A339] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#2E3192] to-[#1F237A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their sales process with EchoLeads AI agents. 
            Your success story could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button variant="primary" size="lg">Get Started</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2E3192]">
                Schedule Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;