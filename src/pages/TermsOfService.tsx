import React from 'react';
import { Mail, Phone, MapPin, Globe, Building, Shield, FileText, Users, AlertTriangle, Scale, Clock, ArrowUp } from 'lucide-react';
import Button from '../components/Button';

const TermsOfService = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      contact: 'sales@echoleads.ai',
      description: 'Send us your questions'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      contact: '+91 9000481350',
      description: 'Call us directly'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      contact: 'T-Hub, Plot No 1/C Sy No 83/1, Raidurgam panmaktha Hyderabad Knowledge City, Serilingampally(M), Hyderabad, Telangana, 500081',
      description: 'Visit our office'
    },
    {
      icon: Globe,
      title: 'Website',
      contact: 'https://echoleads.ai',
      description: 'Visit our website'
    },
    {
      icon: Building,
      title: 'Parent Company',
      contact: 'https://rudravega.com',
      description: 'Rudravega AI Labs'
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
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Please read these terms and conditions carefully before using EchoLeads AI platform. By accessing or using our services, you agree to be bound by these terms.
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#F2A339] rounded-xl flex items-center justify-center mb-4">
                  <info.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                {info.title === 'Website' || info.title === 'Parent Company' ? (
                  <a 
                    href={info.contact} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#F2A339] font-medium text-sm mb-2 hover:underline block"
                  >
                    {info.contact}
                  </a>
                ) : info.title === 'Email Support' ? (
                  <a 
                    href={`mailto:${info.contact}`}
                    className="text-[#F2A339] font-medium text-sm mb-2 hover:underline block"
                  >
                    {info.contact}
                  </a>
                ) : info.title === 'Phone Support' ? (
                  <a 
                    href={`tel:${info.contact}`}
                    className="text-[#F2A339] font-medium text-sm mb-2 hover:underline block"
                  >
                    {info.contact}
                  </a>
                ) : (
                  <p className="text-[#F2A339] font-medium text-sm mb-2">{info.contact}</p>
                )}
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F9FAFB] rounded-2xl p-8 mb-8">
            <div className="flex items-center mb-4">
              <Clock className="text-[#F2A339] mr-3" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Last Updated Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-gray-700"><strong>Last Updated:</strong> June 2, 2025</p>
              <p className="text-gray-700"><strong>Effective Date:</strong> June 2, 2025</p>
            </div>
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="text-gray-700">
                <strong>EchoLeads</strong> is a product of <a href="https://rudravega.com/" target="_blank" rel="noopener noreferrer" className="text-[#F2A339] hover:underline">Rudravega AI Labs</a>
              </p>
              <p className="text-gray-700 mt-2">Developed and operated by Rudravega AI Labs</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* 1. Acceptance of Terms */}
            <div>
              <div className="flex items-center mb-6">
                <Shield className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
              </div>
              <p className="text-gray-700 mb-4">
                By accessing and using EchoLeads AI platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. EchoLeads is a product developed and operated by Rudravega AI Labs ("Company", "we", "us", or "our").
              </p>
              <p className="text-gray-700">
                If you do not agree to abide by the above, please do not use this service. These terms apply to all visitors, users, and others who access or use the service.
              </p>
            </div>

            {/* 2. Description of Service */}
            <div>
              <div className="flex items-center mb-6">
                <FileText className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">2. Description of Service</h2>
              </div>
              <p className="text-gray-700 mb-4">
                EchoLeads is an AI-powered lead generation platform that helps businesses connect with their ideal customers through advanced artificial intelligence technologies. Our services include but are not limited to:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AI-driven lead identification and qualification
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Automated customer outreach and engagement
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Lead scoring and prioritization systems
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Integration with existing CRM and marketing tools
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Analytics and reporting capabilities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Customer support and consultation services
                </li>
              </ul>
            </div>

            {/* 3. User Accounts and Registration */}
            <div>
              <div className="flex items-center mb-6">
                <Users className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">3. User Accounts and Registration</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Account Creation</h3>
                  <p className="text-gray-700">
                    To access certain features of our service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Account Security</h3>
                  <p className="text-gray-700">
                    You are responsible for safeguarding the password and maintaining the security of your account. You agree not to disclose your password to any third party and to take sole responsibility for activities that occur under your account.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Account Termination</h3>
                  <p className="text-gray-700">
                    We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason deemed appropriate by us.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Acceptable Use Policy */}
            <div>
              <div className="flex items-center mb-6">
                <AlertTriangle className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">4. Acceptable Use Policy</h2>
              </div>
              <p className="text-gray-700 mb-4">
                You agree to use EchoLeads only for lawful purposes and in accordance with these Terms. You agree not to use the service:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  In any way that violates applicable federal, state, local, or international law or regulation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  To send, knowingly receive, upload, download, use, or re-use any material that is illegal, offensive, abusive, indecent, defamatory, obscene, or menacing
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  To transmit or procure the sending of any unsolicited or unauthorized advertising or promotional material or spam
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#F2A339] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the service
                </li>
              </ul>
            </div>

            {/* 5. Data Privacy and Protection */}
            <div>
              <div className="flex items-center mb-6">
                <Shield className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">5. Data Privacy and Protection</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Data Collection</h3>
                  <p className="text-gray-700">
                    We collect and process personal data in accordance with our Privacy Policy. By using our service, you consent to such processing and warrant that all data provided by you is accurate.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Data Security</h3>
                  <p className="text-gray-700">
                    We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 GDPR Compliance</h3>
                  <p className="text-gray-700">
                    For users in the European Union, we comply with the General Data Protection Regulation (GDPR) and provide appropriate rights regarding your personal data.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Intellectual Property Rights */}
            <div>
              <div className="flex items-center mb-6">
                <Scale className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">6. Intellectual Property Rights</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Our Rights</h3>
                  <p className="text-gray-700">
                    The service and its original content, features, and functionality are and will remain the exclusive property of Rudravega AI Labs and its licensors. The service is protected by copyright, trademark, and other laws.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 User Content</h3>
                  <p className="text-gray-700">
                    By posting content to the service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the service.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Trademark Policy</h3>
                  <p className="text-gray-700">
                    EchoLeads and related logos are trademarks of Rudravega AI Labs. You may not use our trademarks without our prior written consent.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Payment Terms and Billing */}
            <div>
              <div className="flex items-center mb-6">
                <FileText className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">7. Payment Terms and Billing</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Subscription Fees</h3>
                  <p className="text-gray-700">
                    Access to certain features of the service may require payment of fees. All fees are non-refundable unless otherwise stated in these terms or required by applicable law.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Billing Cycle</h3>
                  <p className="text-gray-700">
                    Subscription fees are billed in advance on a monthly or yearly basis, depending on your chosen plan. Payment is due immediately upon subscription.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3 Price Changes</h3>
                  <p className="text-gray-700">
                    We reserve the right to adjust our pricing at any time. We will provide notice of pricing changes at least 30 days in advance.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. Service Availability and Modifications */}
            <div>
              <div className="flex items-center mb-6">
                <Clock className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">8. Service Availability and Modifications</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We strive to maintain high service availability but cannot guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue the service at any time with or without notice.
              </p>
              <p className="text-gray-700">
                We may also impose limits on certain features and services or restrict your access to parts or all of the service without notice or liability.
              </p>
            </div>

            {/* 9. Limitation of Liability */}
            <div>
              <div className="flex items-center mb-6">
                <AlertTriangle className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">9. Limitation of Liability</h2>
              </div>
              <p className="text-gray-700 mb-4">
                In no event shall Rudravega AI Labs, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
              <p className="text-gray-700">
                Our total liability to you for all claims arising from or relating to the service shall not exceed the amount you paid us in the twelve months preceding the claim.
              </p>
            </div>

            {/* 10. Indemnification */}
            <div>
              <div className="flex items-center mb-6">
                <Shield className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">10. Indemnification</h2>
              </div>
              <p className="text-gray-700">
                You agree to defend, indemnify, and hold harmless Rudravega AI Labs from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from your use of the service or violation of these terms.
              </p>
            </div>

            {/* 11. Termination */}
            <div>
              <div className="flex items-center mb-6">
                <FileText className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">11. Termination</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">11.1 Termination by You</h3>
                  <p className="text-gray-700">
                    You may terminate your account at any time by contacting our customer support team or through your account settings.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">11.2 Termination by Us</h3>
                  <p className="text-gray-700">
                    We may terminate or suspend your account and access to the service immediately, without prior notice, for any reason, including breach of these terms.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">11.3 Effect of Termination</h3>
                  <p className="text-gray-700">
                    Upon termination, your right to use the service will cease immediately. All provisions that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
                  </p>
                </div>
              </div>
            </div>

            {/* 12. Dispute Resolution */}
            <div>
              <div className="flex items-center mb-6">
                <Scale className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">12. Dispute Resolution</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">12.1 Governing Law</h3>
                  <p className="text-gray-700">
                    These terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">12.2 Jurisdiction</h3>
                  <p className="text-gray-700">
                    Any disputes arising from these terms or the service shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">12.3 Arbitration</h3>
                  <p className="text-gray-700">
                    Before pursuing any legal action, both parties agree to attempt to resolve disputes through good faith negotiations and, if necessary, binding arbitration.
                  </p>
                </div>
              </div>
            </div>

            {/* 13. Force Majeure */}
            <div>
              <div className="flex items-center mb-6">
                <AlertTriangle className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">13. Force Majeure</h2>
              </div>
              <p className="text-gray-700">
                We shall not be liable for any failure to perform our obligations under these terms if such failure results from circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, or government actions.
              </p>
            </div>

            {/* 14. Severability */}
            <div>
              <div className="flex items-center mb-6">
                <FileText className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">14. Severability</h2>
              </div>
              <p className="text-gray-700">
                If any provision of these terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect, and the invalid provision will be replaced with a valid provision that most closely reflects the intent of the original provision.
              </p>
            </div>

            {/* 15. Changes to Terms */}
            <div>
              <div className="flex items-center mb-6">
                <Clock className="text-[#F2A339] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">15. Changes to Terms</h2>
              </div>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the service. Your continued use of the service after changes become effective constitutes acceptance of the new terms.
              </p>
            </div>

            {/* 16. Contact Information */}
            <div className="bg-[#F9FAFB] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">16. Contact Information</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-[#F2A339] mr-3" size={20} />
                  <span className="text-gray-700">Email: <a href="mailto:sales@echoleads.ai" className="font-semibold text-[#F2A339] hover:underline">sales@echoleads.ai</a></span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-[#F2A339] mr-3" size={20} />
                  <span className="text-gray-700">Phone: <a href="tel:+919000481350" className="font-semibold text-[#F2A339] hover:underline">+91 9000481350</a></span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-[#F2A339] mr-3" size={20} />
                  <span className="text-gray-700">Address: <span className="font-semibold">T-Hub, Plot No 1/C Sy No 83/1, Raidurgam panmaktha Hyderabad Knowledge City, Serilingampally(M), Hyderabad, Telangana, 500081</span></span>
                </div>
                <div className="flex items-center">
                  <Globe className="text-[#F2A339] mr-3" size={20} />
                  <span className="text-gray-700">Website: <a href="https://echoleads.ai" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#F2A339] hover:underline">https://echoleads.ai</a></span>
                </div>
                <div className="flex items-center">
                  <Building className="text-[#F2A339] mr-3" size={20} />
                  <span className="text-gray-700">Parent Company: <a href="https://rudravega.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#F2A339] hover:underline">Rudravega AI Labs</a></span>
                </div>
              </div>
            </div>

            {/* About Rudravega AI Labs */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About Rudravega AI Labs</h3>
              <p className="text-gray-700 mb-4">
                Rudravega AI Labs is a leading artificial intelligence company focused on developing innovative AI solutions for businesses. EchoLeads is one of our flagship products designed to revolutionize lead generation through advanced AI technologies.
              </p>
              <p className="text-gray-700">
                Learn more about our other AI solutions at <a href="https://rudravega.com/" target="_blank" rel="noopener noreferrer" className="text-[#F2A339] hover:underline font-semibold">rudravega.com</a>
              </p>
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

export default TermsOfService; 