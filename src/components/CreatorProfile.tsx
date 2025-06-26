import React from 'react';
import { Creator } from '../types/Creator';
import { ArrowLeft, MapPin, Calendar, Users, Video, TrendingUp, Target, Award } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface CreatorProfileProps {
  creator: Creator;
  onBack: () => void;
}

const CreatorProfile: React.FC<CreatorProfileProps> = ({ creator, onBack }) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Pre-Viral': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Viral': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Creator Profile</h1>
      </div>

      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{creator.name}</h2>
                <p className="text-lg text-gray-600">{creator.niche}</p>
                
                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {creator.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Joined {new Date(creator.joinDate).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {creator.platforms.map(platform => (
                    <span
                      key={platform}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                <span className={`px-3 py-1 text-sm font-semibold rounded-full border ${getStatusColor(creator.status)}`}>
                  {creator.status}
                </span>
                <div className="text-sm text-gray-500">
                  {creator.psychographics.join(', ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Video className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Views</p>
              <p className="text-xl font-bold text-blue-600">{formatNumber(creator.views)}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Followers</p>
              <p className="text-xl font-bold text-purple-600">{formatNumber(creator.followers)}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Target className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Engagement</p>
              <p className="text-xl font-bold text-green-600">{creator.engagement}%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Growth Rate</p>
              <p className="text-xl font-bold text-orange-600">{creator.growthRate}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Growth Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Growth Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={creator.monthlyGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="followers" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                name="Followers"
              />
              <Line 
                type="monotone" 
                dataKey="views" 
                stroke="#3b82f6" 
                strokeWidth={2}
                name="Views"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Engagement History */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={creator.engagementHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="rate" fill="#10b981" name="Engagement Rate %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Stats and Top Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Additional Stats */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Videos</span>
              <span className="font-semibold">{creator.totalVideos}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Avg Views per Video</span>
              <span className="font-semibold">{formatNumber(creator.avgViewsPerVideo)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Collaborations</span>
              <span className="font-semibold">{creator.collaborations}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Account Age</span>
              <span className="font-semibold">
                {Math.floor((Date.now() - new Date(creator.joinDate).getTime()) / (1000 * 60 * 60 * 24 * 30))} months
              </span>
            </div>
          </div>
        </div>

        {/* Top Content */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Content</h3>
          <div className="space-y-4">
            {creator.topContent.map((content, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center w-8 h-8 bg-orange-100 text-orange-600 font-bold rounded-full text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">{content.title}</p>
                  <div className="flex gap-4 mt-1 text-xs text-gray-500">
                    <span>{formatNumber(content.views)} views</span>
                    <span>{content.engagement}% engagement</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;