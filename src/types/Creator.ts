export interface Creator {
  id: string;
  name: string;
  avatar: string;
  views: number;
  followers: number;
  engagement: number;
  psychographics: string[];
  status: 'Normal' | 'Pre-Viral' | 'Viral';
  platforms: string[];
  niche: string;
  location: string;
  joinDate: string;
  totalVideos: number;
  avgViewsPerVideo: number;
  growthRate: number;
  collaborations: number;
  monthlyGrowth: { month: string; followers: number; views: number }[];
  engagementHistory: { date: string; rate: number }[];
  topContent: { title: string; views: number; engagement: number }[];
}

export interface SearchFilters {
  minViews: string;
  maxFollowers: string;
  psychographics: string;
  preViralOnly: boolean;
  searchQuery: string;
}