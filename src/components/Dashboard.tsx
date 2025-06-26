import React from 'react';
import { BarChart3, Users, TrendingUp, Eye, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Dashboard: React.FC = () => {
  const overviewData = [
    { name: 'Jan', creators: 65, views: 1200000, engagement: 4.2 },
    { name: 'Feb', creators: 78, views: 1450000, engagement: 4.8 },
    { name: 'Mar', creators: 92, views: 1680000, engagement: 5.1 },
    { name: 'Apr', creators: 105, views: 1920000, engagement: 5.3 },
    { name: 'May', creators: 118, views: 2150000, engagement: 5.5 },
  ];

  const categoryData = [
    { name: 'Tech', value: 35, color: '#3b82f6' },
    { name: 'Lifestyle', value: 28, color: '#10b981' },
    { name: 'Finance', value: 20, color: '#f59e0b' },
    { name: 'Travel', value: 17, color: '#ef4444' },
  ];

  const topCreators = [
    { name: 'Marcus Johnson', niche: 'Finance', growth: 22.1, trend: 'up' },
    { name: 'Darrell Torres', niche: 'Travel', growth: 18.7, trend: 'up' },
    { name: 'Aiden Miller', niche: 'Fitness', growth: 35.2, trend: 'up' },
    { name: 'Alice Ellis', niche: 'Tech', growth: 12.5, trend: 'up' },
  ];

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Overview of creator analytics and performance metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Creators</p>
              <p className="text-2xl font-bold text-gray-900">118</p>
              <div className="flex items-center mt-2 text-sm text-green-600">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                <span>+12.5%</span>
              </div>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Views</p>
              <p className="text-2xl font-bold text-gray-900">2.1M</p>
              <div className="flex items-center mt-2 text-sm text-green-600">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                <span>+8.2%</span>
              </div>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Engagement</p>
              <p className="text-2xl font-bold text-gray-900">5.5%</p>
              <div className="flex items-center mt-2 text-sm text-green-600">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                <span>+0.2%</span>
              </div>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pre-Viral</p>
              <p className="text-2xl font-bold text-gray-900">23</p>
              <div className="flex items-center mt-2 text-sm text-orange-600">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                <span>+15.0%</span>
              </div>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Growth Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={overviewData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="creators" 
                stroke="#3b82f6" 
                strokeWidth={2}
                name="Creators"
              />
              <Line 
                type="monotone" 
                dataKey="engagement" 
                stroke="#10b981" 
                strokeWidth={2}
                name="Engagement %"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Creator Categories</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Creators */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Growing Creators</h3>
        <div className="space-y-4">
          {topCreators.map((creator, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{creator.name}</p>
                  <p className="text-sm text-gray-500">{creator.niche}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-green-600">
                  +{creator.growth}%
                </span>
                <ArrowUpRight className="w-4 h-4 text-green-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;