import React, { useState } from 'react';
import { Instagram, Camera, Heart, BarChart3, Shield, Zap, Users, CheckCircle, ArrowRight, Play, Pause } from 'lucide-react';
import Button from '../../components/Button';
import gramVideo from '../../assets/InstagramAgent.mp4';

const InstagramAgent = () => {
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
      icon: Camera,
      title: 'Visual Content Analysis',
      description: 'AI-powered analysis of images, videos, and Stories to understand context and respond appropriately to visual content.'
    },
    {
      icon: Heart,
      title: 'Engagement Automation',
      description: 'Intelligent engagement with comments, DMs, and mentions while maintaining authentic brand voice and personality.'
    },
    {
      icon: BarChart3,
      title: 'Social Media Analytics',
      description: 'Comprehensive tracking of engagement rates, follower growth, lead generation, and conversion metrics from Instagram.'
    },
    {
      icon: Shield,
      title: 'Instagram Policy Compliance',
      description: 'Fully compliant with Instagram\'s automation policies and community guidelines to protect your account from restrictions.'
    }
  ];

  const capabilities = [
    'Respond to Instagram DMs and comments instantly',
    'Analyze and respond to visual content in posts and Stories',
    'Manage Instagram lead generation campaigns',
    'Handle product inquiries and catalog browsing',
    'Process orders through Instagram Shopping',
    'Engage with user-generated content appropriately',
    'Schedule and optimize posting times',
    'Track and nurture leads from Instagram to conversion'
  ];

  const useCases = [
    {
      industry: 'E-commerce & Retail',
      scenario: 'Product Discovery & Sales',
      description: 'Handle product inquiries, showcase catalog items, process orders, and provide customer support through Instagram DMs.',
      results: '40% increase in Instagram sales, 60% faster response times'
    },
    {
      industry: 'Beauty & Fashion',
      scenario: 'Influencer Marketing & UGC',
      description: 'Engage with influencer content, manage user-generated content campaigns, and convert social engagement into sales.',
      results: '3x more qualified leads, 25% higher conversion rates'
    },
    {
      industry: 'Food & Hospitality',
      scenario: 'Reservations & Customer Service',
      description: 'Handle reservation inquiries, showcase menu items, respond to reviews, and manage customer service through Instagram.',
      results: '50% more reservations, 85% customer satisfaction rate'
    },
    {
      industry: 'Fitness & Wellness',
      scenario: 'Class Bookings & Community Building',
      description: 'Manage class bookings, answer fitness questions, share workout tips, and build community engagement.',
      results: '70% increase in class bookings, 90% engagement rate'
    }
  ];

  const instagramFeatures = [
    {
      title: 'Direct Messages',
      description: 'Automated responses to Instagram DMs with rich media support and lead qualification',
      icon: '💬'
    },
    {
      title: 'Comment Management',
      description: 'Intelligent comment responses and engagement to boost post visibility and interaction',
      icon: '💭'
    },
    {
      title: 'Story Interactions',
      description: 'Respond to Story mentions, polls, and questions to maintain high engagement rates',
      icon: '📱'
    },
    {
      title: 'Shopping Integration',
      description: 'Seamless integration with Instagram Shopping for product discovery and sales',
      icon: '🛒'
    },
    {
      title: 'Lead Generation',
      description: 'Capture and qualify leads from Instagram interactions and advertising campaigns',
      icon: '🎯'
    },
    {
      title: 'Content Scheduling',
      description: 'Optimal posting times and content scheduling for maximum reach and engagement',
      icon: '⏰'
    }
  ];

  const metrics = [
    {
      title: 'Response Time',
      value: '<30 sec',
      description: 'Average response time to Instagram DMs and comments'
    },
    {
      title: 'Engagement Rate',
      value: '8.5%',
      description: 'Average engagement rate improvement with AI automation'
    },
    {
      title: 'Lead Conversion',
      value: '18%',
      description: 'Average conversion rate from Instagram interactions to sales'
    },
    {
      title: 'Customer Satisfaction',
      value: '92%',
      description: 'Customer satisfaction rate with Instagram customer service'
    }
  ];

  const socialProof = [
    {
      company: 'Fashion Forward',
      industry: 'Fashion Retail',
      result: '300% increase in Instagram sales',
      quote: 'Our Instagram Agent handles thousands of product inquiries daily and converts them into sales automatically.'
    },
    {
      company: 'Gourmet Bistro',
      industry: 'Restaurant',
      result: '150% more reservations',
      quote: 'The AI responds to reservation requests instantly, even when we\'re closed. Our booking rate has never been higher.'
    },
    {
      company: 'FitLife Studio',
      industry: 'Fitness',
      result: '200% growth in class bookings',
      quote: 'Managing class bookings through Instagram has become effortless. The AI handles everything perfectly.'
    }
  ];

  const faqs = [
    {
      question: 'How does the AI understand visual content on Instagram?',
      answer: 'Our Instagram Agent uses advanced computer vision and image recognition technology to analyze photos, videos, and Stories. It can identify products, understand context, and respond appropriately to visual content shared by users.'
    },
    {
      question: 'Is it safe for my Instagram account and compliant with policies?',
      answer: 'Yes, our Instagram Agent is fully compliant with Instagram\'s automation policies and community guidelines. We use official Instagram APIs where available and implement safe automation practices to protect your account from restrictions.'
    },
    {
      question: 'Can it handle Instagram Shopping and product inquiries?',
      answer: 'Absolutely. The AI integrates with Instagram Shopping features, can showcase products from your catalog, answer product questions, and even process orders through Instagram\'s native shopping experience.'
    },
    {
      question: 'How does it maintain my brand voice and personality?',
      answer: 'The AI is trained on your brand guidelines, tone of voice, and communication style. It learns from your existing Instagram content and interactions to maintain consistency with your brand personality across all automated responses.'
    },
    {
      question: 'What analytics and insights does it provide?',
      answer: 'Our Instagram Agent provides comprehensive analytics including engagement rates, response times, lead generation metrics, conversion tracking, and detailed insights into your Instagram performance and customer interactions.'
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
                <div className="w-16 h-16 bg-gradient-to-br from-[#E4405F] to-[#C13584] rounded-xl flex items-center justify-center mr-4">
                  <Instagram size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Instagram Lead Response Agent
                  </h1>
                  <p className="text-xl text-[#F2A339] font-semibold">Social Media Lead Capture & Engagement</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform Instagram interactions into sales opportunities with AI that responds to DMs, 
                comments, and Stories in under 30 seconds. Achieve 18% conversion rates from social 
                engagement while maintaining authentic brand personality.
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
                  <div className="text-3xl font-bold text-[#2E3192] mb-1">&lt;30s</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2E3192] mb-1">18%</div>
                  <div className="text-sm text-gray-600">Conversion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2E3192] mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Engagement</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="relative aspect-video bg-gradient-to-br from-[#E4405F] to-[#C13584] rounded-xl overflow-hidden mb-6">
                  <video
                    ref={setVideoRef}
                    className="w-full h-full object-cover"
                    onEnded={handleVideoEnded}
                    muted={isMuted}
                    controls
                  >
                    <source src={gramVideo} type="video/mp4" />
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Instagram Agent Demo</h3>
                <p className="text-gray-600 text-sm">Watch how our AI handles Instagram DMs, comments, and lead generation.</p>
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
              Advanced Instagram Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent features designed specifically for Instagram's unique social commerce environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E4405F] to-[#C13584] rounded-xl flex items-center justify-center mb-6">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Specific Features */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Instagram Business Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Instagram automation covering all aspects of social media engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instagramFeatures.map((feature, index) => (
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
              Instagram Performance Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable improvements in engagement, conversion, and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-[#E4405F] mb-4">{metric.value}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{metric.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from businesses using our Instagram Agent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialProof.map((proof, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{proof.company}</h3>
                  <p className="text-[#F2A339] font-medium">{proof.industry}</p>
                </div>
                
                <div className="bg-green-50 text-green-700 font-bold text-lg px-4 py-2 rounded-lg mb-4">
                  {proof.result}
                </div>
                
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{proof.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Complete Instagram Automation
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From visual content analysis to lead conversion, our Instagram Agent handles every 
                aspect of Instagram business communication with intelligence and authenticity.
              </p>
              
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={24} className="text-[#E4405F] mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#E4405F] to-[#C13584] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Instagram Business Impact</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span className="text-white/80">Daily DM Responses</span>
                  <span className="text-2xl font-bold">1000+</span>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span className="text-white/80">Lead Response Time</span>
                  <span className="text-2xl font-bold">&lt;30 sec</span>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span className="text-white/80">Engagement Increase</span>
                  <span className="text-2xl font-bold">8.5%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Conversion Rate</span>
                  <span className="text-2xl font-bold">18%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases by Industry */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored Instagram automation solutions for different business types and industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{useCase.industry}</h3>
                  <Instagram className="text-[#E4405F]" size={20} />
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
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about Instagram automation and our AI agent capabilities
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
      <section className="py-24 bg-gradient-to-br from-[#E4405F] to-[#C13584]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Instagram Into a Sales Machine
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Join successful businesses that have increased Instagram conversions by 300% with 
            our AI-powered lead response and engagement automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">Get Started</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#E4405F]">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstagramAgent;