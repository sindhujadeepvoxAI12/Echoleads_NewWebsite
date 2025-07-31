import React from 'react';
import { Mail, Phone, MapPin, Clock, Shield, DollarSign, AlertTriangle, FileText, Users, Headphones } from 'lucide-react';
import Button from '../components/Button';

const RefundPolicy = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your refund request',
      contact: 'sales@deepvox.ai',
      action: 'Contact Support'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us directly',
      contact: '+91  9000481350',
      action: 'Call Now'
    },
    {
      icon: Clock,
      title: 'Response Time',
      description: 'We respond within 2 business days',
      contact: '24/7 Support Available',
      action: 'Learn More'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Refund Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to transparency and customer satisfaction
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-12 h-12 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <method.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-[#F2A339] font-medium text-sm mb-2">{method.contact}</p>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Policy Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F9FAFB] rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-[#F2A339] mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Important Notice</h3>
            </div>
            <p className="text-gray-700">
              This refund policy is part of our Terms of Service. By using EchoLeads services, you acknowledge that you have read, understood, and agree to be bound by this policy.
            </p>
          </div>

          <div className="space-y-8">
            {/* 1. Subscription Services */}
            <div>
              <div className="flex items-center mb-6">
                <DollarSign className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">1. Subscription Services</h2>
              </div>
              <p className="text-gray-700 mb-4">
                EchoLeads operates primarily on a subscription-based model for our AI Agents and related services. By understanding our refund policy, you can make informed decisions about your purchase:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  All subscription plans are billed at the beginning of each billing cycle (monthly or annually).
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>For monthly subscriptions, we offer a <span className="font-semibold text-[#F2A339]">7-day money-back guarantee</span> from the date of initial purchase.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>For annual subscriptions, we offer a <span className="font-semibold text-[#F2A339]">14-day money-back guarantee</span> from the date of initial purchase.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Refund requests must be submitted in writing to our customer support team within the applicable guarantee period.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  After the money-back guarantee period has expired, subscriptions are non-refundable for the remainder of the billing cycle.
                </li>
              </ul>
            </div>

            {/* 2. Pro-rated Refunds */}
            <div>
              <div className="flex items-center mb-6">
                <Shield className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">2. Pro-rated Refunds</h2>
              </div>
              <p className="text-gray-700 mb-4">
                If you cancel your subscription after the money-back guarantee period:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Monthly subscriptions: No pro-rated refunds will be issued for the remaining days in the billing cycle.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Annual subscriptions: At our discretion, we may offer a pro-rated refund for the unused months remaining in your annual subscription, less a <span className="font-semibold text-[#F2A339]">15% administrative fee</span>.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Pro-rated refunds for annual subscriptions are calculated based on the standard monthly rate, not the discounted annual rate.
                </li>
              </ul>
            </div>

            {/* 3. Custom Implementation Services */}
            <div>
              <div className="flex items-center mb-6">
                <Users className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">3. Custom Implementation Services</h2>
              </div>
              <p className="text-gray-700 mb-4">
                For custom implementation services, API integrations, or enterprise solutions:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>A <span className="font-semibold text-[#F2A339]">50% non-refundable deposit</span> is required before work begins.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  The remaining balance is due upon completion of the agreed-upon deliverables.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  If you cancel custom services after work has begun but before completion, you will be billed for the percentage of work completed, with a minimum charge of 50% of the total project cost.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Completed custom implementations are non-refundable.
                </li>
              </ul>
            </div>

            {/* 4. Technical Issues */}
            <div>
              <div className="flex items-center mb-6">
                <Headphones className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">4. Technical Issues</h2>
              </div>
              <p className="text-gray-700 mb-4">
                If you experience technical issues with our AI Agents or platform:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Our technical support team will work diligently to resolve any issues you encounter with our services.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>If we are unable to resolve critical functionality issues within <span className="font-semibold text-[#F2A339]">72 hours</span> of receiving your detailed support request, you may be eligible for a partial or full refund at our discretion.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Technical issues must be reproducible and verified by our support team to qualify for a refund consideration.
                </li>
              </ul>
            </div>

            {/* 5. How to Request a Refund */}
            <div>
              <div className="flex items-center mb-6">
                <FileText className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">5. How to Request a Refund</h2>
              </div>
              <p className="text-gray-700 mb-4">
                To request a refund, please follow these steps:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Submit your refund request to <span className="font-semibold text-[#F2A339]">sales@deepvox.ai</span> with the subject line "Refund Request".</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Include your account details, subscription information, and the reason for your refund request.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Our customer support team will review your request and respond within 2 business days.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  If approved, refunds will be processed using the original payment method within 5-10 business days.
                </li>
              </ul>
            </div>

            {/* 6. Contact Information */}
            <div className="bg-[#F9FAFB] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
              <p className="text-gray-700 mb-6">
                If you have any questions about our refund policy, please contact our customer support team:
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-[#F2A339] mr-3" size={20} />
                  <span className="text-gray-700">Email: <span className="font-semibold text-[#F2A339]">sales@deepvox.ai</span></span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-[#F2A339] mr-3" size={20} />
                  <span className="text-gray-700">Phone: <span className="font-semibold text-[#F2A339]">+91 9000935106</span></span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-[#F2A339] mr-3" size={20} />
                  <span className="text-gray-700">Address: <span className="font-semibold">T-Hub, Plot No 1/C Sy No 83/1, Raidurgam panmaktha Hyderabad Knowledge City, Serilingampally(M), Hyderabad, Telangana, 500081</span></span>
                </div>
              </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-8">
              <p>Last updated: May 7, 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy; 