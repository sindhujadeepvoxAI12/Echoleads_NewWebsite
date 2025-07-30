import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar, Users, Headphones } from 'lucide-react';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'Sales Inquiries',
      description: 'Get pricing and demo information',
      contact: 'sales@echoleads.ai',
      action: 'Contact Sales Team'
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      description: '24/7 technical assistance',
      contact: 'support@echoleads.ai',
      action: 'Get Support'
    },
    {
      icon: Users,
      title: 'Partnerships',
      description: 'Integration and partnership opportunities',
      contact: 'partners@echoleads.ai',
      action: 'Explore Partnerships'
    },
    {
      icon: Calendar,
      title: 'Schedule Demo',
      description: 'See EchoLeads in action',
      contact: 'Book a personalized demo',
      action: 'Schedule Now'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 AI Street, San Francisco, CA 94102',
      phone: '+1 (415) 555-0123',
      hours: 'Mon-Fri: 9AM-6PM PST'
    },
    {
      city: 'New York',
      address: '456 Tech Avenue, New York, NY 10001',
      phone: '+1 (212) 555-0456',
      hours: 'Mon-Fri: 9AM-6PM EST'
    },
    {
      city: 'London',
      address: '789 Innovation Lane, London, UK EC1A 1BB',
      phone: '+44 20 7123 4567',
      hours: 'Mon-Fri: 9AM-6PM GMT'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your sales process? Let's talk about how EchoLeads can help your business grow.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <method.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                <p className="text-[#F2A339] font-medium text-sm mb-4">{method.contact}</p>
                <Button variant="outline" size="sm" className="w-full">
                  {method.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F2A339] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <div className="text-gray-600">hello@echoleads.ai</div>
                    <div className="text-gray-600">sales@echoleads.ai</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F2A339] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <div className="text-gray-600">1-800-ECHOLEADS</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F2A339] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Business Hours</div>
                    <div className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</div>
                    <div className="text-gray-600">Sunday: Closed</div>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Locations</h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-[#F9FAFB] rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">{office.city}</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-[#F2A339]" />
                        {office.address}
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="mr-2 text-[#F2A339]" />
                        {office.phone}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2 text-[#F2A339]" />
                        {office.hours}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Size
                    </label>
                    <select
                      id="employees"
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent transition-colors"
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent transition-colors"
                    >
                      <option value="">Select your interest</option>
                      <option value="cold-calling">Cold Calling Agent</option>
                      <option value="customer-care">Customer Care Agent</option>
                      <option value="whatsapp">WhatsApp Agent</option>
                      <option value="instagram">Instagram Agent</option>
                      <option value="enterprise">Enterprise Solution</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business needs and how we can help..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent transition-colors"
                    required
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    className="w-4 h-4 text-[#F2A339] border-gray-300 rounded focus:ring-[#F2A339]"
                    required
                  />
                  <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                    I agree to receive communications from EchoLeads.ai and understand I can unsubscribe at any time.
                  </label>
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Answers</h2>
            <p className="text-gray-600">Common questions about getting started with EchoLeads</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">How quickly can I get started?</h3>
              <p className="text-gray-600 text-sm">Most customers are up and running within 24 hours. Our team provides free setup assistance.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Do you offer custom integrations?</h3>
              <p className="text-gray-600 text-sm">Yes, we provide custom integrations for enterprise customers and can work with your existing tech stack.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">What kind of support do you provide?</h3>
              <p className="text-gray-600 text-sm">We offer 24/7 technical support, dedicated account managers for enterprise clients, and comprehensive training.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Can I try before I buy?</h3>
              <p className="text-gray-600 text-sm">Absolutely! We offer a free trial and can schedule a personalized demo to show you exactly how it works.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;