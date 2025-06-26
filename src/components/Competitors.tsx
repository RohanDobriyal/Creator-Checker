import React from 'react';
import { TrendingUp, Users, Eye, Target, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Competitors: React.FC = () => {
  const competitors = [
    {
      name: 'SocialBlade',
      category: 'Analytics Platform',
      marketShare: 35,
      users: '2.5M',
      growth: 8.5,
      trend: 'up',
      strengths: ['YouTube Analytics', 'Historical Data', 'API Access'],
      weaknesses: ['Limited Platforms', 'Basic UI']
    },
    {
      name: 'HypeAuditor',
      category: 'Influencer Analytics',
      marketShare: 28,
      users: '1.8M',
      growth: 12.3,
      trend: 'up',
      strengths: ['Fraud Detection', 'Instagram Focus', 'Audience Quality'],
      weaknesses: ['Expensive', 'Complex Interface']
    },
    {
      name: 'Klear',
      category: 'Influencer Marketing',
      marketShare: 22,
      users: '1.2M',
      growth: -2.1,
      trend: 'down',
      strengths: ['Campaign Management', 'Multi-Platform', 'Reporting'],
      weaknesses: ['High Cost', 'Learning Curve']
    },
    {
      name: 'Creator.co',
      category: 'Creator Economy',
      marketShare: 15,
      users: '950K',
      growth: 25.7,
      trend: 'up',
      strengths: ['Creator Discovery', 'New Platform', 'Modern UI'],
      weaknesses: ['Limited Data', 'Small User Base']
    }
  ];

  const marketMetrics = [
    { label: 'Total Market Size', value: '$4.2B', growth: '+15.3%' },
    { label: 'Active Platforms', value: '127', growth: '+8.2%' },
    { label: 'Monthly Searches', value: '2.8M', growth: '+12.7%' },
    { label: 'Average Deal Size', value: '$45K', growth: '+6.1%' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Competitive Analysis</h1>
        <p className="text-gray-600 mt-1">Market insights and competitor performance tracking</p>
      </div>

      {/* Market Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketMetrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                <div className="flex items-center mt-2 text-sm text-green-600">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  <span>{metric.growth}</span>
                </div>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Competitor Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Key Competitors</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {competitors.map((competitor, index) => (
            <div key={index} className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">{competitor.name}</h4>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {competitor.category}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Market Share: {competitor.marketShare}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Users: {competitor.users}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {competitor.trend === 'up' ? (
                        <ArrowUpRight className="w-4 h-4 text-green-500" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 text-red-500" />
                      )}
                      <span className={`text-sm ${competitor.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {competitor.growth > 0 ? '+' : ''}{competitor.growth}% growth
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium text-green-700 mb-2">Strengths</h5>
                      <ul className="space-y-1">
                        {competitor.strengths.map((strength, idx) => (
                          <li key={idx} className="text-sm text-gray-600">• {strength}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-red-700 mb-2">Weaknesses</h5>
                      <ul className="space-y-1">
                        {competitor.weaknesses.map((weakness, idx) => (
                          <li key={idx} className="text-sm text-gray-600">• {weakness}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-32">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{competitor.marketShare}%</div>
                    <div className="text-sm text-gray-500">Market Share</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${competitor.marketShare}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Position */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Viral Pulse Position</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Our Advantages</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Real-time pre-viral detection</li>
              <li>• Advanced psychographic analysis</li>
              <li>• Multi-platform integration</li>
              <li>• Predictive growth modeling</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Growth Opportunities</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Emerging platforms (TikTok, Shorts)</li>
              <li>• AI-powered recommendations</li>
              <li>• Creator monetization tools</li>
              <li>• Brand partnership features</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Target Market</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Early-stage creators (10K-100K)</li>
              <li>• Talent agencies</li>
              <li>• Brand marketing teams</li>
              <li>• Creator economy tools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitors;