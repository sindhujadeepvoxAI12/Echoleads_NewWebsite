import React, { useState } from 'react';
import { Code, Book, Zap, Shield, Copy, ExternalLink, CheckCircle, Terminal, Globe, Key } from 'lucide-react';
import Button from '../../components/Button';

const APIDocumentation = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const endpoints = [
    {
      method: 'POST',
      endpoint: '/api/v1/agents/create',
      description: 'Create a new AI agent instance',
      parameters: ['agent_type', 'configuration', 'integrations']
    },
    {
      method: 'GET',
      endpoint: '/api/v1/agents/{agent_id}',
      description: 'Retrieve agent details and status',
      parameters: ['agent_id']
    },
    {
      method: 'POST',
      endpoint: '/api/v1/conversations/start',
      description: 'Initiate a new conversation',
      parameters: ['agent_id', 'contact_info', 'context']
    },
    {
      method: 'GET',
      endpoint: '/api/v1/conversations/{conversation_id}',
      description: 'Get conversation history and status',
      parameters: ['conversation_id', 'include_metadata']
    },
    {
      method: 'POST',
      endpoint: '/api/v1/leads/score',
      description: 'Score a lead using AI analysis',
      parameters: ['conversation_id', 'custom_criteria']
    },
    {
      method: 'GET',
      endpoint: '/api/v1/analytics/performance',
      description: 'Retrieve performance metrics and analytics',
      parameters: ['date_range', 'agent_id', 'metrics']
    }
  ];

  const sdks = [
    {
      language: 'JavaScript/Node.js',
      icon: '🟨',
      installation: 'npm install echoleads-sdk',
      example: `const EchoLeads = require('echoleads-sdk');

const client = new EchoLeads({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Create a new agent
const agent = await client.agents.create({
  type: 'cold_calling',
  configuration: {
    voice: 'professional',
    language: 'en-US',
    industry: 'real_estate'
  }
});`
    },
    {
      language: 'Python',
      icon: '🐍',
      installation: 'pip install echoleads-python',
      example: `import echoleads

client = echoleads.Client(
    api_key='your-api-key',
    environment='production'
)

# Start a conversation
conversation = client.conversations.start(
    agent_id='agent_123',
    contact_info={
        'phone': '+1234567890',
        'name': 'John Doe'
    }
)`
    },
    {
      language: 'cURL',
      icon: '🌐',
      installation: 'Available on all systems',
      example: `curl -X POST https://api.echoleads.ai/v1/agents/create \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "whatsapp",
    "configuration": {
      "business_phone": "+1234567890",
      "welcome_message": "Hello! How can I help you today?"
    }
  }'`
    }
  ];

  const webhooks = [
    {
      event: 'conversation.started',
      description: 'Triggered when a new conversation begins',
      payload: 'conversation_id, agent_id, contact_info, timestamp'
    },
    {
      event: 'conversation.ended',
      description: 'Triggered when a conversation is completed',
      payload: 'conversation_id, duration, outcome, lead_score'
    },
    {
      event: 'lead.qualified',
      description: 'Triggered when a lead meets qualification criteria',
      payload: 'lead_id, score, qualification_data, next_actions'
    },
    {
      event: 'appointment.booked',
      description: 'Triggered when an appointment is successfully scheduled',
      payload: 'appointment_id, contact_info, datetime, calendar_event'
    }
  ];

  const integrations = [
    {
      name: 'Salesforce',
      description: 'Sync leads and conversations with Salesforce CRM',
      setup: 'OAuth 2.0 authentication required',
      features: ['Lead creation', 'Contact updates', 'Activity logging']
    },
    {
      name: 'HubSpot',
      description: 'Integrate with HubSpot for lead management',
      setup: 'API key authentication',
      features: ['Contact sync', 'Deal creation', 'Email sequences']
    },
    {
      name: 'Calendly',
      description: 'Automated appointment booking integration',
      setup: 'Webhook configuration',
      features: ['Event scheduling', 'Availability sync', 'Confirmation emails']
    },
    {
      name: 'Twilio',
      description: 'Voice and SMS communication backend',
      setup: 'Account SID and Auth Token',
      features: ['Phone calls', 'SMS messaging', 'Call recording']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive developer resources for integrating EchoLeads AI agents into your applications. 
              Build powerful conversational AI experiences with our RESTful API.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">REST API</div>
              <div className="text-gray-600 text-sm">Simple HTTP requests</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">Real-time</div>
              <div className="text-gray-600 text-sm">WebSocket support</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">Secure</div>
              <div className="text-gray-600 text-sm">OAuth 2.0 & API keys</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-[#2E3192] mb-2">Global</div>
              <div className="text-gray-600 text-sm">99.9% uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'authentication', label: 'Authentication' },
              { id: 'endpoints', label: 'API Endpoints' },
              { id: 'sdks', label: 'SDKs & Libraries' },
              { id: 'webhooks', label: 'Webhooks' },
              { id: 'integrations', label: 'Integrations' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-medium text-sm rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#F2A339] text-white'
                    : 'text-gray-600 hover:text-[#F2A339]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Getting Started</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  The EchoLeads API allows you to programmatically create and manage AI agents, 
                  start conversations, and access analytics data.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#F9FAFB] rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Base URL</h3>
                  <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                    https://api.echoleads.ai/v1
                  </div>
                </div>

                <div className="bg-[#F9FAFB] rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Rate Limits</h3>
                  <div className="space-y-2 text-gray-700">
                    <div>• 1000 requests per minute</div>
                    <div>• 10,000 requests per hour</div>
                    <div>• Burst limit: 100 requests per second</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Quick Start</h3>
                <ol className="list-decimal list-inside space-y-2 text-blue-800">
                  <li>Sign up for an EchoLeads account and get your API key</li>
                  <li>Install one of our SDKs or use direct HTTP requests</li>
                  <li>Create your first AI agent using the /agents/create endpoint</li>
                  <li>Start a conversation and begin processing leads</li>
                  <li>Set up webhooks to receive real-time notifications</li>
                </ol>
              </div>
            </div>
          )}

          {/* Authentication Tab */}
          {activeTab === 'authentication' && (
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Authentication</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  EchoLeads API uses API key authentication. Include your API key in the Authorization header.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#F9FAFB] rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">API Key Authentication</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Header Format:</h4>
                      <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm relative">
                        <div>Authorization: Bearer your-api-key</div>
                        <button
                          onClick={() => copyToClipboard('Authorization: Bearer your-api-key', 'auth-header')}
                          className="absolute top-2 right-2 p-2 hover:bg-gray-800 rounded"
                        >
                          {copiedCode === 'auth-header' ? <CheckCircle size={16} /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Example Request:</h4>
                      <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm relative">
                        <pre>{`curl -H "Authorization: Bearer sk-1234..." \\
     -H "Content-Type: application/json" \\
     https://api.echoleads.ai/v1/agents`}</pre>
                        <button
                          onClick={() => copyToClipboard(`curl -H "Authorization: Bearer sk-1234..." -H "Content-Type: application/json" https://api.echoleads.ai/v1/agents`, 'auth-example')}
                          className="absolute top-2 right-2 p-2 hover:bg-gray-800 rounded"
                        >
                          {copiedCode === 'auth-example' ? <CheckCircle size={16} /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F9FAFB] rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Getting Your API Key</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#F2A339] rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Sign up for an account</h4>
                        <p className="text-gray-600 text-sm">Create your EchoLeads account at dashboard.echoleads.ai</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#F2A339] rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Navigate to API Settings</h4>
                        <p className="text-gray-600 text-sm">Go to Settings → API Keys in your dashboard</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#F2A339] rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Generate API Key</h4>
                        <p className="text-gray-600 text-sm">Click "Create New Key" and copy your API key</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button variant="primary" className="w-full">
                      Get API Key
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Endpoints Tab */}
          {activeTab === 'endpoints' && (
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">API Endpoints</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Complete reference for all available API endpoints and their parameters.
                </p>
              </div>

              <div className="space-y-8">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold mr-4 ${
                          endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                          endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-lg font-mono text-gray-900">{endpoint.endpoint}</code>
                      </div>
                      <ExternalLink size={20} className="text-gray-400 hover:text-[#F2A339] cursor-pointer" />
                    </div>
                    
                    <p className="text-gray-700 mb-4">{endpoint.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Parameters:</h4>
                      <div className="flex flex-wrap gap-2">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <span key={paramIndex} className="bg-white px-3 py-1 rounded-lg text-sm font-mono text-gray-700 border">
                            {param}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SDKs Tab */}
          {activeTab === 'sdks' && (
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">SDKs & Libraries</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Official SDKs and code examples to get you started quickly in your preferred programming language.
                </p>
              </div>

              <div className="space-y-8">
                {sdks.map((sdk, index) => (
                  <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8">
                    <div className="flex items-center mb-6">
                      <span className="text-3xl mr-4">{sdk.icon}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{sdk.language}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Installation:</h4>
                        <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm relative">
                          <div>{sdk.installation}</div>
                          <button
                            onClick={() => copyToClipboard(sdk.installation, `install-${index}`)}
                            className="absolute top-2 right-2 p-2 hover:bg-gray-800 rounded"
                          >
                            {copiedCode === `install-${index}` ? <CheckCircle size={16} /> : <Copy size={16} />}
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Example Usage:</h4>
                        <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm relative overflow-x-auto">
                          <pre className="whitespace-pre-wrap">{sdk.example}</pre>
                          <button
                            onClick={() => copyToClipboard(sdk.example, `example-${index}`)}
                            className="absolute top-2 right-2 p-2 hover:bg-gray-800 rounded"
                          >
                            {copiedCode === `example-${index}` ? <CheckCircle size={16} /> : <Copy size={16} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Webhooks Tab */}
          {activeTab === 'webhooks' && (
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Webhooks</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Receive real-time notifications about conversations, leads, and appointments directly to your application.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Webhook Configuration</h3>
                <div className="space-y-4 text-blue-800">
                  <p>Configure webhook endpoints in your dashboard to receive HTTP POST requests when events occur.</p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Webhook URL Format:</h4>
                    <code className="text-sm">https://your-domain.com/webhooks/echoleads</code>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {webhooks.map((webhook, index) => (
                  <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{webhook.event}</h3>
                      <span className="bg-[#F2A339] text-white px-3 py-1 rounded-full text-sm font-medium">
                        Event
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{webhook.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Payload includes:</h4>
                      <p className="text-gray-600 font-mono text-sm">{webhook.payload}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Integrations Tab */}
          {activeTab === 'integrations' && (
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Pre-built Integrations</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Connect EchoLeads with your existing tools and workflows using our pre-built integrations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {integrations.map((integration, index) => (
                  <div key={index} className="bg-[#F9FAFB] rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{integration.name}</h3>
                    <p className="text-gray-700 mb-4">{integration.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Setup:</h4>
                      <p className="text-gray-600 text-sm">{integration.setup}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                      <div className="space-y-1">
                        {integration.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle size={16} className="text-green-600 mr-2" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-6">
                      Setup Integration
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#2E3192] to-[#1F237A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get your API key and start integrating EchoLeads AI agents into your applications today. 
            Our support team is here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">Get API Key</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2E3192]">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APIDocumentation;