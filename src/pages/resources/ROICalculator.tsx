import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, Users, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    currentLeads: 100,
    conversionRate: 8,
    averageDealValue: 5000,
    salesRepCost: 60000,
    responseTime: 4,
    workingHours: 8
  });

  const [results, setResults] = useState({
    currentRevenue: 0,
    projectedRevenue: 0,
    costSavings: 0,
    totalROI: 0,
    paybackPeriod: 0,
    additionalLeads: 0
  });

  const calculateROI = () => {
    const currentRevenue = inputs.currentLeads * (inputs.conversionRate / 100) * inputs.averageDealValue * 12;
    const aiConversionRate = Math.min(inputs.conversionRate * 2.5, 35); // AI typically improves conversion by 2.5x, capped at 35%
    const projectedRevenue = inputs.currentLeads * (aiConversionRate / 100) * inputs.averageDealValue * 12;
    const revenueIncrease = projectedRevenue - currentRevenue;
    
    // Cost savings from automation
    const automationSavings = inputs.salesRepCost * 0.6; // 60% cost reduction
    const totalSavings = revenueIncrease + automationSavings;
    
    // AI agent cost (estimated)
    const aiAgentCost = 2400; // $200/month * 12 months
    const netROI = totalSavings - aiAgentCost;
    const roiPercentage = (netROI / aiAgentCost) * 100;
    const paybackMonths = aiAgentCost / (totalSavings / 12);
    
    // Additional leads from 24/7 availability
    const additionalLeads = inputs.currentLeads * 0.4; // 40% more leads from 24/7 availability

    setResults({
      currentRevenue,
      projectedRevenue,
      costSavings: automationSavings,
      totalROI: roiPercentage,
      paybackPeriod: paybackMonths,
      additionalLeads
    });
  };

  React.useEffect(() => {
    calculateROI();
  }, [inputs]);

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: '2.5x Higher Conversion Rates',
      description: 'AI agents achieve 23% average conversion vs 8% traditional methods'
    },
    {
      icon: Clock,
      title: '24/7 Lead Response',
      description: 'Never miss a lead with instant response times under 30 seconds'
    },
    {
      icon: DollarSign,
      title: '60% Cost Reduction',
      description: 'Reduce sales operation costs while increasing output'
    },
    {
      icon: Users,
      title: 'Unlimited Scalability',
      description: 'Handle thousands of conversations simultaneously'
    }
  ];

  const industryBenchmarks = [
    {
      industry: 'Real Estate',
      currentConversion: '12%',
      aiConversion: '31%',
      improvement: '158%'
    },
    {
      industry: 'Insurance',
      currentConversion: '8%',
      aiConversion: '22%',
      improvement: '175%'
    },
    {
      industry: 'SaaS',
      currentConversion: '15%',
      aiConversion: '35%',
      improvement: '133%'
    },
    {
      industry: 'Healthcare',
      currentConversion: '18%',
      aiConversion: '42%',
      improvement: '133%'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              ROI Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Calculate your potential return on investment with EchoLeads AI agents. 
              See how much revenue you could generate and costs you could save.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#F2A339] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Input Form */}
            <div className="bg-[#F9FAFB] rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Business Metrics</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Leads
                  </label>
                  <input
                    type="number"
                    value={inputs.currentLeads}
                    onChange={(e) => handleInputChange('currentLeads', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Conversion Rate (%)
                  </label>
                  <input
                    type="number"
                    value={inputs.conversionRate}
                    onChange={(e) => handleInputChange('conversionRate', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Deal Value ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.averageDealValue}
                    onChange={(e) => handleInputChange('averageDealValue', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Sales Rep Cost ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.salesRepCost}
                    onChange={(e) => handleInputChange('salesRepCost', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Response Time (hours)
                  </label>
                  <input
                    type="number"
                    value={inputs.responseTime}
                    onChange={(e) => handleInputChange('responseTime', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Daily Working Hours
                  </label>
                  <input
                    type="number"
                    value={inputs.workingHours}
                    onChange={(e) => handleInputChange('workingHours', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A339] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Your ROI Projection</h2>
              
              <div className="space-y-6">
                <div className="bg-[#F9FAFB] rounded-xl p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Current Annual Revenue</span>
                    <span className="text-2xl font-bold text-gray-900">
                      ${results.currentRevenue.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Projected Annual Revenue</span>
                    <span className="text-2xl font-bold text-[#F2A339]">
                      ${results.projectedRevenue.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-700 mb-1">
                      {results.totalROI.toFixed(0)}%
                    </div>
                    <div className="text-sm text-green-600">ROI</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-700 mb-1">
                      {results.paybackPeriod.toFixed(1)}
                    </div>
                    <div className="text-sm text-blue-600">Months Payback</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Annual Cost Savings</span>
                    <span className="font-bold text-green-600">
                      +${results.costSavings.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Additional Leads (40%)</span>
                    <span className="font-bold text-[#F2A339]">
                      +{results.additionalLeads.toFixed(0)}/month
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Response Time Improvement</span>
                    <span className="font-bold text-blue-600">
                      {inputs.responseTime}h → &lt;30s
                    </span>
                  </div>
                </div>

                <Link to="/login">
                  <Button variant="primary" size="lg">
                    Get Started with AI Agents
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Benchmarks */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry Benchmarks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how AI agents perform across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryBenchmarks.map((benchmark, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{benchmark.industry}</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Traditional</div>
                    <div className="text-2xl font-bold text-gray-700">{benchmark.currentConversion}</div>
                  </div>
                  
                  <ArrowRight className="mx-auto text-[#F2A339]" size={24} />
                  
                  <div>
                    <div className="text-sm text-gray-600 mb-1">With AI</div>
                    <div className="text-3xl font-bold text-[#F2A339]">{benchmark.aiConversion}</div>
                  </div>
                  
                  <div className="bg-green-50 text-green-700 font-medium px-3 py-2 rounded-lg text-sm">
                    +{benchmark.improvement} improvement
                  </div>
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
            Ready to Achieve These Results?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their sales process with AI agents. 
            Start your implementation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button variant="primary" size="lg">Get Started</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2E3192]">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ROICalculator;