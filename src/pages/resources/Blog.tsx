import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, Search, TrendingUp, ArrowRight, BookOpen, Share2 } from 'lucide-react';
import Button from '../../components/Button';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'ai-trends', name: 'AI Trends', count: 8 },
    { id: 'sales-strategies', name: 'Sales Strategies', count: 6 },
    { id: 'case-studies', name: 'Case Studies', count: 4 },
    { id: 'product-updates', name: 'Product Updates', count: 3 },
    { id: 'industry-insights', name: 'Industry Insights', count: 3 }
  ];

  const featuredPost = {
    id: 1,
    title: 'The Future of AI in Sales: 2025 Predictions and Trends',
    excerpt: 'Explore the latest developments in AI sales technology and discover what the next year holds for businesses embracing artificial intelligence in their sales processes.',
    content: 'As we move into 2025, artificial intelligence continues to reshape the sales landscape in unprecedented ways. From advanced natural language processing to predictive analytics, AI is becoming an indispensable tool for sales teams worldwide...',
    author: 'Dr. Michael Chen',
    authorRole: 'CTO & AI Research Lead',
    date: '2025-01-28',
    readTime: '8 min read',
    category: 'AI Trends',
    tags: ['AI', 'Sales', 'Technology', 'Predictions'],
    views: 3247,
    featured: true,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
  };

  const blogPosts = [
    {
      id: 2,
      title: 'How to Achieve 300% Lead Conversion with AI Agents',
      excerpt: 'A comprehensive guide to implementing AI sales agents and achieving remarkable conversion rate improvements.',
      author: 'Sarah Johnson',
      authorRole: 'VP of Sales',
      date: '2025-01-25',
      readTime: '6 min read',
      category: 'Sales Strategies',
      tags: ['Lead Generation', 'Conversion', 'AI Agents'],
      views: 2156,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg'
    },
    {
      id: 3,
      title: 'WhatsApp Business API: Complete Integration Guide',
      excerpt: 'Step-by-step instructions for integrating WhatsApp Business API with your sales process.',
      author: 'Emily Rodriguez',
      authorRole: 'Product Manager',
      date: '2025-01-22',
      readTime: '10 min read',
      category: 'Product Updates',
      tags: ['WhatsApp', 'Integration', 'API'],
      views: 1834,
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg'
    },
    {
      id: 4,
      title: 'Real Estate Success: 5X Property Leads with AI',
      excerpt: 'How PropTech Solutions increased their property leads by 500% using EchoLeads AI agents.',
      author: 'David Kim',
      authorRole: 'Industry Expert',
      date: '2025-01-20',
      readTime: '7 min read',
      category: 'Case Studies',
      tags: ['Real Estate', 'Case Study', 'Lead Generation'],
      views: 1623,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'
    },
    {
      id: 5,
      title: 'The Psychology of AI-Human Conversations',
      excerpt: 'Understanding how customers perceive and interact with AI agents in sales conversations.',
      author: 'Dr. Lisa Park',
      authorRole: 'Behavioral Psychologist',
      date: '2025-01-18',
      readTime: '9 min read',
      category: 'AI Trends',
      tags: ['Psychology', 'Customer Behavior', 'AI'],
      views: 1456,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg'
    },
    {
      id: 6,
      title: 'Instagram Lead Generation: From Likes to Sales',
      excerpt: 'Transform your Instagram presence into a lead generation machine with AI automation.',
      author: 'Maria Garcia',
      authorRole: 'Social Media Strategist',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Sales Strategies',
      tags: ['Instagram', 'Social Media', 'Lead Generation'],
      views: 1287,
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg'
    },
    {
      id: 7,
      title: 'Enterprise AI Deployment: Lessons Learned',
      excerpt: 'Key insights from deploying AI sales agents across large enterprise organizations.',
      author: 'Robert Chen',
      authorRole: 'Enterprise Solutions',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'Industry Insights',
      tags: ['Enterprise', 'Deployment', 'Best Practices'],
      views: 1098,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
    },
    {
      id: 8,
      title: 'Voice AI Technology: The Next Frontier',
      excerpt: 'Exploring the latest advances in voice AI technology and their impact on sales.',
      author: 'Alex Thompson',
      authorRole: 'Lead Developer',
      date: '2025-01-10',
      readTime: '8 min read',
      category: 'AI Trends',
      tags: ['Voice AI', 'Technology', 'Innovation'],
      views: 967,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    },
    {
      id: 9,
      title: 'Customer Care Automation: 94% Satisfaction Rate',
      excerpt: 'How businesses achieve exceptional customer satisfaction with AI-powered support.',
      author: 'Jennifer Liu',
      authorRole: 'Customer Success Manager',
      date: '2025-01-08',
      readTime: '6 min read',
      category: 'Case Studies',
      tags: ['Customer Care', 'Automation', 'Satisfaction'],
      views: 856,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
    }
  ];

  const trendingTopics = [
    { name: 'AI Sales Automation', posts: 12 },
    { name: 'Lead Generation', posts: 8 },
    { name: 'WhatsApp Business', posts: 6 },
    { name: 'Voice AI', posts: 5 },
    { name: 'Customer Experience', posts: 4 }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase().replace(' ', '-') === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              EchoLeads Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with insights on AI sales automation, industry trends, 
              success stories, and expert strategies to grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">50+</div>
              <div className="text-gray-600 text-sm">Expert Articles</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">25K+</div>
              <div className="text-gray-600 text-sm">Monthly Readers</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <User size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">15+</div>
              <div className="text-gray-600 text-sm">Expert Contributors</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Share2 size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">5K+</div>
              <div className="text-gray-600 text-sm">Social Shares</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, topics, and insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-[#F2A339] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#2E3192] to-[#1F237A] rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12 text-white">
                <div className="flex items-center mb-4">
                  <span className="bg-[#F2A339] text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                    Featured
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    {featuredPost.category}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center space-x-6 text-blue-100 mb-6">
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    <span className="text-sm">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <Button variant="primary" size="lg">
                  Read Full Article
                </Button>
              </div>
              
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
                <span className="text-gray-600">{filteredPosts.length} articles</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#F2A339] text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <User size={16} className="mr-2" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-2" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar size={16} className="mr-2" />
                          <span>{post.date}</span>
                        </div>
                        <button className="text-[#F2A339] hover:text-[#D88D26] font-medium text-sm flex items-center">
                          Read More
                          <ArrowRight size={16} className="ml-1" />
                        </button>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Trending Topics */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Trending Topics</h3>
                  <div className="space-y-3">
                    {trendingTopics.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-700">{topic.name}</span>
                        <span className="bg-[#F2A339] text-white px-2 py-1 rounded-full text-xs">
                          {topic.posts}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-[#F2A339] to-[#D88D26] rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                  <p className="text-white/90 mb-4 text-sm">
                    Get the latest AI sales insights delivered to your inbox weekly.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm"
                    />
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-[#F2A339]">
                      Subscribe
                    </Button>
                  </div>
                </div>

                {/* Popular Posts */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Popular This Month</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post, index) => (
                      <div key={post.id} className="flex items-start space-x-3">
                        <span className="bg-[#F2A339] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-600">{post.views.toLocaleString()} views</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
            Ready to Transform Your Sales?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses using AI to revolutionize their sales process. 
            Start your journey with EchoLeads today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">Get Started</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2E3192]">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;