import React, { useState } from 'react';
import { Calendar, Clock, Users, Play, Download, Star, Filter, Search } from 'lucide-react';
import Button from '../../components/Button';

const Webinars = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const upcomingWebinars = [
    {
      id: 1,
      title: 'AI Sales Transformation: From Setup to Success',
      description: 'Learn how to implement AI agents and achieve 300% lead conversion improvement in 90 days',
      date: '2025-02-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      presenter: 'Sarah Johnson, VP of Sales',
      attendees: 847,
      category: 'Getting Started',
      level: 'Beginner',
      featured: true
    },
    {
      id: 2,
      title: 'Advanced Lead Scoring with AI Analytics',
      description: 'Deep dive into AI-powered lead qualification and scoring strategies for maximum ROI',
      date: '2025-02-22',
      time: '1:00 PM EST',
      duration: '45 minutes',
      presenter: 'Dr. Michael Chen, CTO',
      attendees: 623,
      category: 'Advanced Strategies',
      level: 'Advanced',
      featured: false
    },
    {
      id: 3,
      title: 'WhatsApp Business Automation Masterclass',
      description: 'Master WhatsApp Business API integration and achieve 98% message open rates',
      date: '2025-03-01',
      time: '3:00 PM EST',
      duration: '75 minutes',
      presenter: 'Emily Rodriguez, Product Manager',
      attendees: 1205,
      category: 'Platform Training',
      level: 'Intermediate',
      featured: true
    },
    {
      id: 4,
      title: 'Real Estate AI: 5X Your Property Leads',
      description: 'Industry-specific strategies for real estate professionals using AI agents',
      date: '2025-03-08',
      time: '2:30 PM EST',
      duration: '60 minutes',
      presenter: 'David Kim, Industry Expert',
      attendees: 456,
      category: 'Industry Focus',
      level: 'Intermediate',
      featured: false
    }
  ];

  const pastWebinars = [
    {
      id: 5,
      title: 'Instagram Lead Generation: Social to Sales',
      description: 'Convert Instagram engagement into qualified leads with AI automation',
      date: '2025-01-25',
      duration: '50 minutes',
      presenter: 'Lisa Park, Social Media Expert',
      views: 2847,
      rating: 4.9,
      category: 'Platform Training',
      level: 'Beginner',
      recordingAvailable: true
    },
    {
      id: 6,
      title: 'Enterprise AI Deployment Best Practices',
      description: 'Scale AI agents across large organizations with proven strategies',
      date: '2025-01-18',
      duration: '90 minutes',
      presenter: 'Robert Chen, Enterprise Solutions',
      views: 1923,
      rating: 4.8,
      category: 'Advanced Strategies',
      level: 'Expert',
      recordingAvailable: true
    },
    {
      id: 7,
      title: 'Customer Care Automation Success Stories',
      description: 'Real customer implementations and 94% satisfaction rate achievements',
      date: '2025-01-11',
      duration: '45 minutes',
      presenter: 'Maria Garcia, Customer Success',
      views: 1654,
      rating: 4.7,
      category: 'Case Studies',
      level: 'Intermediate',
      recordingAvailable: true
    },
    {
      id: 8,
      title: 'API Integration Workshop',
      description: 'Hands-on workshop for developers integrating EchoLeads API',
      date: '2025-01-04',
      duration: '120 minutes',
      presenter: 'Alex Thompson, Lead Developer',
      views: 892,
      rating: 4.9,
      category: 'Technical',
      level: 'Expert',
      recordingAvailable: true
    }
  ];

  const webinarSeries = [
    {
      title: 'AI Sales Mastery Series',
      description: 'Complete 6-part series covering everything from basics to advanced strategies',
      episodes: 6,
      totalDuration: '8 hours',
      subscribers: 3247,
      nextEpisode: '2025-02-15'
    },
    {
      title: 'Industry Spotlight Series',
      description: 'Monthly deep-dives into industry-specific AI sales strategies',
      episodes: 12,
      totalDuration: '15 hours',
      subscribers: 1856,
      nextEpisode: '2025-03-08'
    },
    {
      title: 'Technical Implementation Series',
      description: 'Developer-focused series on API integration and custom solutions',
      episodes: 4,
      totalDuration: '6 hours',
      subscribers: 743,
      nextEpisode: '2025-03-15'
    }
  ];

  const categories = ['all', 'Getting Started', 'Platform Training', 'Advanced Strategies', 'Industry Focus', 'Case Studies', 'Technical'];

  const filteredUpcoming = upcomingWebinars.filter(webinar => {
    const matchesFilter = selectedFilter === 'all' || webinar.category === selectedFilter;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filteredPast = pastWebinars.filter(webinar => {
    const matchesFilter = selectedFilter === 'all' || webinar.category === selectedFilter;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Webinars & Training
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our expert-led webinars to master AI sales automation, learn best practices, 
              and discover advanced strategies to maximize your results with EchoLeads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">25+</div>
              <div className="text-gray-600 text-sm">Monthly Webinars</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">15K+</div>
              <div className="text-gray-600 text-sm">Active Participants</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">4.8</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Play size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">100+</div>
              <div className="text-gray-600 text-sm">On-Demand Videos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <Filter size={20} className="text-gray-600" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Series */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Webinar Series
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Subscribe to our ongoing series for comprehensive learning paths
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webinarSeries.map((series, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{series.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{series.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Episodes:</span>
                    <span className="font-medium">{series.episodes}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Duration:</span>
                    <span className="font-medium">{series.totalDuration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subscribers:</span>
                    <span className="font-medium">{series.subscribers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Next Episode:</span>
                    <span className="font-medium text-[#F2A339]">{series.nextEpisode}</span>
                  </div>
                </div>
                
                <Button variant="primary" className="w-full">
                  Subscribe to Series
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Register for our upcoming live sessions and learn from industry experts
            </p>
          </div>

          <div className="space-y-8">
            {filteredUpcoming.map((webinar) => (
              <div key={webinar.id} className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                webinar.featured ? 'bg-gradient-to-r from-[#F2A339] to-[#FFB44D] text-white' : 'bg-[#F9FAFB]'
              }`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      {webinar.featured && (
                        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                          Featured
                        </span>
                      )}
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        webinar.featured ? 'bg-white/20 text-white' : 'bg-[#F2A339] text-white'
                      }`}>
                        {webinar.category}
                      </span>
                      <span className={`ml-3 px-3 py-1 rounded-full text-sm ${
                        webinar.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                        webinar.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        webinar.level === 'Advanced' ? 'bg-orange-100 text-orange-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {webinar.level}
                      </span>
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-3 ${webinar.featured ? 'text-white' : 'text-gray-900'}`}>
                      {webinar.title}
                    </h3>
                    <p className={`mb-4 leading-relaxed ${webinar.featured ? 'text-white/90' : 'text-gray-700'}`}>
                      {webinar.description}
                    </p>
                    
                    <div className={`flex items-center space-x-6 text-sm ${webinar.featured ? 'text-white/80' : 'text-gray-600'}`}>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        <span>{webinar.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-2" />
                        <span>{webinar.attendees} registered</span>
                      </div>
                    </div>
                    
                    <p className={`mt-2 text-sm ${webinar.featured ? 'text-white/80' : 'text-gray-600'}`}>
                      Presented by {webinar.presenter}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      variant={webinar.featured ? "outline" : "primary"}
                      size="lg"
                      className={webinar.featured ? "border-white text-white hover:bg-white hover:text-[#F2A339]" : ""}
                    >
                      Register Now
                    </Button>
                    <p className={`mt-2 text-sm ${webinar.featured ? 'text-white/80' : 'text-gray-600'}`}>
                      Duration: {webinar.duration}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              On-Demand Recordings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our library of past webinars and training sessions anytime
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPast.map((webinar) => (
              <div key={webinar.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#F2A339] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {webinar.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    webinar.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                    webinar.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    webinar.level === 'Advanced' ? 'bg-orange-100 text-orange-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {webinar.level}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{webinar.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{webinar.date}</span>
                  <span>{webinar.duration}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 fill-current mr-1" />
                    <span>{webinar.rating}</span>
                  </div>
                  <span>{webinar.views.toLocaleString()} views</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">Presented by {webinar.presenter}</p>
                
                <div className="flex space-x-3">
                  <Button variant="primary" className="flex-1">
                    <Play size={16} className="mr-2" />
                    Watch Now
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download size={16} />
                  </Button>
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
            Ready to Master AI Sales?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of sales professionals who have transformed their results with our expert training. 
            Register for upcoming webinars or explore our on-demand library.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">Browse All Webinars</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2E3192]">
              Request Custom Training
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Webinars;