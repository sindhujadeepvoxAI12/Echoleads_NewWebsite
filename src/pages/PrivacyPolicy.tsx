import React from 'react';
import { Shield, Eye, Lock, Database, Globe, Mail, Phone, MapPin, ArrowUp, AlertTriangle, Users, FileText, Settings, Bell } from 'lucide-react';
import Button from '../components/Button';

const PrivacyPolicy = () => {
  const privacyFeatures = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Enterprise-grade security for your data',
      highlight: 'GDPR Compliant'
    },
    {
      icon: Lock,
      title: 'Encryption',
      description: 'End-to-end encryption for all data',
      highlight: '256-bit AES'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear data usage policies',
      highlight: 'Full Disclosure'
    },
    {
      icon: Database,
      title: 'Data Control',
      description: 'You control your data',
      highlight: 'User Rights'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'sales Team',
      contact: 'sales@echoleads.ai',
      description: 'Data protection inquiries'
    },
    {
      icon: Phone,
      title: 'Support',
      contact: '+91 9000481350',
      description: 'Privacy concerns'
    },
    {
      icon: MapPin,
      title: 'Reach Us',
      contact: 'T-Hub, Hyderabad',
      description: 'Contact our Team'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Your privacy is our priority. Learn how EchoLeads protects your data and maintains transparency in our AI-powered services.
            </p>
          </div>

          {/* Privacy Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {privacyFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-12 h-12 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{feature.description}</p>
                <p className="text-[#F2A339] font-medium text-sm">{feature.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F9FAFB] rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-[#F2A339] mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Important Notice</h3>
            </div>
            <p className="text-gray-700">
              This Privacy Policy explains how EchoLeads collects, uses, and protects your personal data when you use our AI-powered services. By using our services, you consent to the data practices described in this policy.
            </p>
          </div>

          <div className="space-y-8">
            {/* 1. Introduction */}
            <div>
              <div className="flex items-center mb-6">
                <Shield className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
              </div>
              <p className="text-gray-700 mb-4">
                EchoLeads ("we", "our", or "us") is committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy applies to all users of our AI-powered lead generation platform and related services.
              </p>
              <p className="text-gray-700">
                We process personal data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR) and other relevant privacy regulations.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div>
              <div className="flex items-center mb-6">
                <Database className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">2. Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
                  <p className="text-gray-700 mb-4">
                    We collect the following types of personal information:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Account information (name, email, phone number, company details)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Payment and billing information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Communication preferences and marketing consent</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Profile information and user preferences</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 AI and Machine Learning Data</h3>
                  <p className="text-gray-700 mb-4">
                    Our AI services collect and process the following data for machine learning purposes:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Lead interaction data and conversation patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Response rates and engagement metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>AI model training data (anonymized and aggregated)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Performance analytics and optimization data</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Technical Information</h3>
                  <p className="text-gray-700 mb-4">
                    We automatically collect technical information when you use our services:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>IP address and location data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Browser type and device information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Usage patterns and service interactions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Cookies and similar tracking technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. How We Use Your Information */}
            <div>
              <div className="flex items-center mb-6">
                <Settings className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">3. How We Use Your Information</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Service Provision</h3>
                  <p className="text-gray-700 mb-4">
                    We use your information to provide and improve our AI services:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Deliver AI-powered lead generation and qualification services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Personalize AI agent responses and interactions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Train and improve our AI models (using anonymized data)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Provide customer support and technical assistance</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 AI Model Training</h3>
                  <p className="text-gray-700 mb-4">
                    Our AI models are trained using aggregated and anonymized data:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>All training data is anonymized and stripped of personal identifiers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>We use aggregated patterns to improve AI performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Individual user data is never used for training without consent</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Communication</h3>
                  <p className="text-gray-700 mb-4">
                    We may use your contact information to:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Send service updates and important notifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Provide customer support and respond to inquiries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Send marketing communications (with your consent)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Data Sharing and Third Parties */}
            <div>
              <div className="flex items-center mb-6">
                <Users className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">4. Data Sharing and Third Parties</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Service Providers</h3>
                  <p className="text-gray-700 mb-4">
                    We may share your data with trusted third-party service providers who assist us in:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Cloud hosting and infrastructure services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Payment processing and billing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Customer support and communication tools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Analytics and performance monitoring</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Legal Requirements</h3>
                  <p className="text-gray-700">
                    We may disclose your information if required by law, regulation, or legal process, or to protect our rights, property, or safety, or that of our users or the public.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Business Transfers</h3>
                  <p className="text-gray-700">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction, subject to the same privacy protections.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Data Security */}
            <div>
              <div className="flex items-center mb-6">
                <Lock className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">5. Data Security</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Security Measures</h3>
                  <p className="text-gray-700 mb-4">
                    We implement comprehensive security measures to protect your data:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>End-to-end encryption for all data transmission</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Secure cloud infrastructure with enterprise-grade security</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Regular security audits and penetration testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Access controls and authentication mechanisms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Data backup and disaster recovery procedures</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 AI Data Protection</h3>
                  <p className="text-gray-700 mb-4">
                    Special protections for AI-related data:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Anonymization of training data to protect privacy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Secure AI model deployment and inference</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Regular bias testing and fairness audits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. Your Rights */}
            <div>
              <div className="flex items-center mb-6">
                <Eye className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">6. Your Rights</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Data Subject Rights</h3>
                  <p className="text-gray-700 mb-4">
                    Under applicable data protection laws, you have the following rights:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><span className="font-semibold text-[#F2A339]">Right to Access:</span> Request a copy of your personal data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><span className="font-semibold text-[#F2A339]">Right to Rectification:</span> Correct inaccurate or incomplete data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><span className="font-semibold text-[#F2A339]">Right to Erasure:</span> Request deletion of your personal data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><span className="font-semibold text-[#F2A339]">Right to Portability:</span> Receive your data in a structured format</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><span className="font-semibold text-[#F2A339]">Right to Object:</span> Object to processing of your data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><span className="font-semibold text-[#F2A339]">Right to Restriction:</span> Limit how we process your data</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 AI-Specific Rights</h3>
                  <p className="text-gray-700 mb-4">
                    Additional rights related to AI processing:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Right to human review of AI decisions affecting you</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Right to explanation of AI-generated outcomes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Right to opt-out of AI processing where applicable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 7. Data Retention */}
            <div>
              <div className="flex items-center mb-6">
                <FileText className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">7. Data Retention</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Retention Periods</h3>
                  <p className="text-gray-700 mb-4">
                    We retain your personal data for the following periods:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><span className="font-semibold text-[#F2A339]">Account Data:</span> Retained while your account is active, plus 2 years after deactivation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><span className="font-semibold text-[#F2A339]">AI Training Data:</span> Anonymized data retained for up to 5 years for model improvement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><span className="font-semibold text-[#F2A339]">Communication Data:</span> Retained for 3 years for customer support purposes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><span className="font-semibold text-[#F2A339]">Payment Data:</span> Retained as required by financial regulations</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Data Deletion</h3>
                  <p className="text-gray-700">
                    Upon request or account deletion, we will securely delete your personal data within 30 days, except where retention is required by law or for legitimate business purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. International Data Transfers */}
            <div>
              <div className="flex items-center mb-6">
                <Globe className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">8. International Data Transfers</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Cross-Border Processing</h3>
                  <p className="text-gray-700 mb-4">
                    Your data may be processed in countries outside your residence:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>We ensure adequate protection through Standard Contractual Clauses (SCCs)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Data is processed in accordance with GDPR requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>We maintain appropriate safeguards for international transfers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 9. Cookies and Tracking */}
            <div>
              <div className="flex items-center mb-6">
                <Settings className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">9. Cookies and Tracking</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 Cookie Usage</h3>
                  <p className="text-gray-700 mb-4">
                    We use cookies and similar technologies for:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Essential functionality and security</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Performance monitoring and analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Personalization and user experience improvement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Marketing and advertising (with consent)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 Cookie Management</h3>
                  <p className="text-gray-700">
                    You can control cookie settings through your browser preferences. Disabling certain cookies may affect service functionality.
                  </p>
                </div>
              </div>
            </div>

            {/* 10. Children's Privacy */}
            <div>
              <div className="flex items-center mb-6">
                <Users className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">10. Children's Privacy</h2>
              </div>
              <p className="text-gray-700">
                Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you believe we have collected such information, please contact us immediately.
              </p>
            </div>

            {/* 11. Changes to Privacy Policy */}
            <div>
              <div className="flex items-center mb-6">
                <Bell className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">11. Changes to Privacy Policy</h2>
              </div>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any material changes via email or through our service. Your continued use of our services after changes become effective constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* 12. Contact Information */}
            <div className="bg-[#F9FAFB] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Contact Information</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <info.icon className="text-[#F2A339] mr-2" size={20} />
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                    </div>
                    {info.title === 'sales Team' ? (
                      <a 
                        href={`mailto:${info.contact}`}
                        className="text-[#F2A339] font-medium text-sm mb-1 hover:underline block"
                      >
                        {info.contact}
                      </a>
                    ) : info.title === 'Support' ? (
                      <a 
                        href={`tel:${info.contact}`}
                        className="text-[#F2A339] font-medium text-sm mb-1 hover:underline block"
                      >
                        {info.contact}
                      </a>
                    ) : (
                      <p className="text-[#F2A339] font-medium text-sm mb-1">{info.contact}</p>
                    )}
                    <p className="text-gray-600 text-xs">{info.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-[#F2A339] mr-3" size={20} />
                  <span className="text-gray-700">Address: <span className="font-semibold">T-Hub, Plot No 1/C Sy No 83/1, Raidurgam panmaktha Hyderabad Knowledge City, Serilingampally(M), Hyderabad, Telangana, 500081</span></span>
                </div>
                <div className="flex items-center">
                  <Globe className="text-[#F2A339] mr-3" size={20} />
                  <span className="text-gray-700">Website: <a href="https://echoleads.ai" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#F2A339] hover:underline">https://echoleads.ai</a></span>
                </div>
              </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-8">
              <p>Last updated: July 28, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#F2A339] text-white rounded-full shadow-lg hover:bg-[#D88D26] transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default PrivacyPolicy; 