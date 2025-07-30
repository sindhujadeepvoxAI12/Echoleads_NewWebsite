import React, { useState } from 'react';
import { Search, HelpCircle, Book, MessageSquare, Phone, Mail, Clock, CheckCircle, ArrowRight, Star } from 'lucide-react';
import Button from '../../components/Button';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', count: 45 },
    { id: 'getting-started', name: 'Getting Started', count: 12 },
    { id: 'agents', name: 'AI Agents', count: 15 },
    { id: 'integrations', name: 'Integrations', count: 8 },
    { id: 'billing', name: 'Billing & Account', count: 6 },
    { id: 'troubleshooting', name: 'Troubleshooting', count: 4 }
  ];

  const popularArticles = [
    {
      title: 'How to Set Up Your First AI Agent',
      category: 'Getting Started',
      views: 2847,
      rating: 4.9,
      readTime: '5 min read'
    },
    {
      title: 'Integrating with Salesforce CRM',
      category: 'Integrations',
      views: 1923,
      rating: 4.8,
      readTime: '8 min read'
    },
    {
      title: 'Understanding Lead Scoring',
      category: 'AI Agents',
      views: 1654,
      rating: 4.7,
      readTime: '6 min read'
    },
    {
      title: 'WhatsApp Business API Setup',
      category: 'Integrations',
      views: 1432,
      rating: 4.9,
      readTime: '10 min read'
    },
    {
      title: 'Troubleshooting Call Quality Issues',
      category: 'Troubleshooting',
      views: 1287,
      rating: 4.6,
      readTime: '4 min read'
    }
  ];

  const faqSections = [
    {
      category: 'Getting Started',
      faqs: [
        {
          question: 'How quickly can I get my AI agent up and running?',
          answer: 'Most customers have their first AI agent operational within 24-48 hours. Our setup wizard guides you through the process, and our support team is available to help with any questions.'
        },
        {
          question: 'Do I need technical knowledge to use EchoLeads?',
          answer: 'No technical expertise is required. Our platform is designed for business users with an intuitive interface. However, for advanced integrations, basic API knowledge can be helpful.'
        },
        {
          question: 'Can I try EchoLeads before committing?',
          answer: 'Yes! We offer a comprehensive demo and trial period so you can experience the platform firsthand before making a decision.'
        }
      ]
    },
    {
      category: 'AI Agents',
      faqs: [
        {
          question: 'How natural do the AI conversations sound?',
          answer: 'Our AI agents use advanced natural language processing to create human-like conversations. Most prospects cannot distinguish between our AI and human representatives, with 94% rating interactions as natural and professional.'
        },
        {
          question: 'Can the AI handle objections and complex questions?',
          answer: 'Yes, our AI agents are trained to handle common objections, answer frequently asked questions, and escalate complex inquiries to human agents when necessary. The AI continuously learns and improves from each interaction.'
        },
        {
          question: 'What languages do the AI agents support?',
          answer: 'Our AI agents support 50+ languages with native-level fluency, including English, Spanish, French, German, Portuguese, Italian, Dutch, and many others. The AI automatically detects the customer\'s preferred language.'
        }
      ]
    },
    {
      category: 'Integrations',
      faqs: [
        {
          question: 'Which CRM systems do you integrate with?',
          answer: 'We integrate with all major CRM systems including Salesforce, HubSpot, Pipedrive, Zoho, Microsoft Dynamics, and many others. Custom integrations are also available for enterprise customers.'
        },
        {
          question: 'How does the calendar integration work?',
          answer: 'Our AI agents can automatically schedule appointments by connecting to your calendar system (Google Calendar, Outlook, Calendly, etc.). The AI checks availability in real-time and books appointments directly.'
        },
        {
          question: 'Can I integrate with my existing phone system?',
          answer: 'Yes, we support integration with most telephony providers including Twilio, RingCentral, Vonage, and others. We can also provide phone numbers if needed.'
        }
      ]
    },
    {
      category: 'Billing & Account',
      faqs: [
        {
          question: 'How does billing work?',
          answer: 'We offer flexible monthly and annual subscription plans. Billing is based on the number of conversations and agent types you use. You can upgrade, downgrade, or cancel at any time.'
        },
        {
          question: 'Is there a setup fee?',
          answer: 'No, there are no setup fees or hidden costs. You only pay for your chosen subscription plan, and we provide free onboarding and setup assistance.'
        },
        {
          question: 'Can I change my plan anytime?',
          answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated accordingly.'
        }
      ]
    }
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      action: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 2 hours',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      action: 'Call Now'
    },
    {
      icon: Book,
      title: 'Schedule Demo',
      description: 'Get a personalized walkthrough',
      availability: 'Available anytime',
      action: 'Book Demo'
    }
  ];

  const filteredArticles = popularArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           article.category.toLowerCase().replace(' & ', '-').replace(' ', '-') === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Help Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to your questions, learn how to use EchoLeads effectively, 
              and get the support you need to succeed with AI sales automation.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search size={24} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#F2A339] focus:border-transparent shadow-lg"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <HelpCircle size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">45+</div>
              <div className="text-gray-600 text-sm">Help Articles</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">&lt;2h</div>
              <div className="text-gray-600 text-sm">Response Time</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">4.9</div>
              <div className="text-gray-600 text-sm">Support Rating</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">98%</div>
              <div className="text-gray-600 text-sm">Resolution Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Articles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-[#F2A339] text-white'
                        : 'bg-[#F9FAFB] text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{category.name}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        selectedCategory === category.id
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Articles List */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'all' ? 'Popular Articles' : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
                </h3>
                <span className="text-gray-600">{filteredArticles.length} articles</span>
              </div>

              <div className="space-y-6">
                {filteredArticles.map((article, index) => (
                  <div key={index} className="bg-[#F9FAFB] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-[#F2A339] text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                            {article.category}
                          </span>
                          <span className="text-gray-600 text-sm">{article.readTime}</span>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Star size={16} className="text-yellow-400 fill-current mr-1" />
                            <span>{article.rating}</span>
                          </div>
                          <span>{article.views.toLocaleString()} views</span>
                        </div>
                      </div>
                      <ArrowRight size={20} className="text-gray-400 ml-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to the most common questions about EchoLeads
            </p>
          </div>

          <div className="space-y-12">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h3>
                <div className="space-y-6">
                  {section.faqs.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-white rounded-2xl p-8 shadow-lg">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h4>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our support team is here to help you succeed. Choose the option that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <option.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{option.description}</p>
                <p className="text-sm text-gray-600 mb-6">{option.availability}</p>
                <Button variant="primary" className="w-full">
                  {option.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-[#2E3192] to-[#1F237A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our expert support team is available 24/7 to help you get the most out of EchoLeads. 
            Don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">Contact Support</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2E3192]">
              Schedule Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;