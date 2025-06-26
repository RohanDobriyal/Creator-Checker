import React from 'react';
import { TrendingUp, Zap, Users, Eye, Target, Award, Calendar, Globe } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Insights: React.FC = () => {
  const trendingTopics = [
    { topic: 'AI Content Creation', growth: 245, creators: 1340, engagement: 8.7 },
    { topic: 'Sustainable Living', growth: 189, creators: 987, engagement: 7.2 },
    { topic: 'Remote Work Tips', growth: 156, creators: 756, engagement: 6.8 },
    { topic: 'Crypto Education', growth: 134, creators: 623, engagement: 9.1 },
    { topic: 'Mental Health', growth: 127, creators: 892, engagement: 8.3 }
  ];

  const platformData = [
    { platform: 'TikTok', creators: 45, avgEngagement: 11.2, growth: 28.5 },
    { platform: 'Instagram', creators: 38, avgEngagement: 6.8, growth: 15.3 },
    { platform: 'YouTube', creators: 25, avgEngagement: 4.9, growth: 12.1 },
    { platform: 'Twitter', creators: 18, avgEngagement: 3.2, growth: 8.7 },
  ];

  const contentTypes = [
    { name: 'Short Videos', value: 42, color: '#3b82f6' },
    { name: 'Tutorials', value: 28, color: '#10b981' },
    { name: 'Reviews', value: 18, color: '#f59e0b' },
    { name: 'Live Streams', value: 12, color: '#ef4444' },
  ];

  const audienceInsights = [
    { demographic: '18-24', percentage: 35, engagement: 9.2 },
    { demographic: '25-34', percentage: 42, engagement: 7.8 },
    { demographic: '35-44', percentage: 15, engagement: 6.1 },
    { demographic: '45+', percentage: 8, engagement: 4.9 },
  ];

  const predictions = [
    {
      title: 'Next Viral Niche',
      prediction: 'Micro-mobility & Urban Transport',
      confidence: 87,
      timeframe: '2-3 months',
      potential: 'High'
    },
    {
      title: 'Platform Shift',
      prediction: 'YouTube Shorts Growth Acceleration',
      confidence: 92,
      timeframe: '1-2 months',
      potential: 'Very High'
    },
    {
      title: 'Content Format',
      prediction: 'Interactive Q&A Content',
      confidence: 78,
      timeframe: '3-4 months',
      potential: 'Medium'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Creator Insights</h1>
        <p className="text-gray-600 mt-1">Advanced analytics and market intelligence</p>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Trending Now</h3>
          </div>
          <p className="text-2xl font-bold text-blue-600 mb-1">AI Content</p>
          <p className="text-sm text-gray-600">+245% growth this month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Zap className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Pre-Viral Alert</h3>
          </div>
          <p className="text-2xl font-bold text-green-600 mb-1">23</p>
          <p className="text-sm text-gray-600">Creators ready to explode</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Target className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Best Engagement</h3>
          </div>
          <p className="text-2xl font-bold text-purple-600 mb-1">TikTok</p>
          <p className="text-sm text-gray-600">11.2% avg engagement</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Award className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Top Demo</h3>
          </div>
          <p className="text-2xl font-bold text-orange-600 mb-1">25-34</p>
          <p className="text-sm text-gray-600">42% of audience</p>
        </div>
      </div>

      {/* Trending Topics */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Trending Topics & Growth</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {trendingTopics.map((topic, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{topic.topic}</h4>
                    <p className="text-sm text-gray-500">{topic.creators} creators active</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <p className="font-medium text-green-600">+{topic.growth}%</p>
                    <p className="text-gray-500">Growth</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-blue-600">{topic.engagement}%</p>
                    <p className="text-gray-500">Engagement</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Performance */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={platformData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="platform" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="avgEngagement" fill="#3b82f6" name="Avg Engagement %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Content Types */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Content Types</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={contentTypes}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {contentTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Predictions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-500" />
            AI Predictions
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {predictions.map((prediction, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{prediction.title}</h4>
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${
                      prediction.potential === 'Very High' ? 'bg-red-500' :
                      prediction.potential === 'High' ? 'bg-orange-500' : 'bg-yellow-500'
                    }`}></div>
                    <span className="text-xs text-gray-500">{prediction.potential}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-900 mb-3">{prediction.prediction}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-gray-400" />
                    <span className="text-gray-600">{prediction.timeframe}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-600">Confidence:</span>
                    <span className="font-medium text-green-600">{prediction.confidence}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audience Demographics */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Audience Demographics</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {audienceInsights.map((demo, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-gray-900">{demo.demographic}</span>
                  <span className="text-sm text-gray-500">{demo.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${demo.percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  {demo.engagement}% avg engagement
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;