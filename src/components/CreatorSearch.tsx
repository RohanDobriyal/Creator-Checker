import React, { useState } from 'react';
import { Search, RotateCcw, ChevronUp, ChevronDown } from 'lucide-react';
import { Creator, SearchFilters } from '../types/Creator';
import CreatorTable from './CreatorTable';

interface CreatorSearchProps {
  creators: Creator[];
  onCreatorClick: (creator: Creator) => void;
}

const CreatorSearch: React.FC<CreatorSearchProps> = ({ creators, onCreatorClick }) => {
  const [filters, setFilters] = useState<SearchFilters>({
    minViews: '',
    maxFollowers: '',
    psychographics: '',
    preViralOnly: false,
    searchQuery: ''
  });
  
  const [isFiltersExpanded, setIsFiltersExpanded] = useState(true);
  const [filteredCreators, setFilteredCreators] = useState<Creator[]>(creators);

  const psychographicOptions = [
    'All', 'Innovative', 'Early Adopter', 'Adventurous', 'Optimistic', 
    'Creative', 'Trendsetter', 'Educational', 'Methodical'
  ];

  const handleFilterChange = (key: keyof SearchFilters, value: string | boolean) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters: SearchFilters) => {
    let filtered = [...creators];

    // Search query filter
    if (currentFilters.searchQuery) {
      filtered = filtered.filter(creator =>
        creator.name.toLowerCase().includes(currentFilters.searchQuery.toLowerCase()) ||
        creator.niche.toLowerCase().includes(currentFilters.searchQuery.toLowerCase())
      );
    }

    // Min views filter
    if (currentFilters.minViews) {
      const minViews = parseInt(currentFilters.minViews.replace(/,/g, ''));
      filtered = filtered.filter(creator => creator.views >= minViews);
    }

    // Max followers filter
    if (currentFilters.maxFollowers) {
      const maxFollowers = parseInt(currentFilters.maxFollowers.replace(/,/g, ''));
      filtered = filtered.filter(creator => creator.followers <= maxFollowers);
    }

    // Psychographics filter
    if (currentFilters.psychographics && currentFilters.psychographics !== 'All') {
      filtered = filtered.filter(creator =>
        creator.psychographics.includes(currentFilters.psychographics)
      );
    }

    // Pre-viral only filter
    if (currentFilters.preViralOnly) {
      filtered = filtered.filter(creator => creator.status === 'Pre-Viral');
    }

    setFilteredCreators(filtered);
  };

  const resetFilters = () => {
    const defaultFilters: SearchFilters = {
      minViews: '',
      maxFollowers: '',
      psychographics: '',
      preViralOnly: false,
      searchQuery: ''
    };
    setFilters(defaultFilters);
    setFilteredCreators(creators);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Creator Search & Matchmaking</h1>
          <p className="text-gray-600 mt-1">Find and analyze content creators across platforms</p>
        </div>
        <button
          onClick={() => setIsFiltersExpanded(!isFiltersExpanded)}
          className="flex items-center gap-2 px-4 py-2 text-orange-600 border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors"
        >
          {isFiltersExpanded ? <ChevronUp /> : <ChevronDown />}
          {isFiltersExpanded ? 'Hide' : 'Show'} Filters
        </button>
      </div>

      {/* Filters */}
      {isFiltersExpanded && (
        <div className="bg-orange-50 rounded-lg p-6 border border-orange-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Min Views
              </label>
              <input
                type="text"
                placeholder="100000"
                value={filters.minViews}
                onChange={(e) => handleFilterChange('minViews', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Followers
              </label>
              <input
                type="text"
                placeholder="50000"
                value={filters.maxFollowers}
                onChange={(e) => handleFilterChange('maxFollowers', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Psychographics
              </label>
              <select
                value={filters.psychographics}
                onChange={(e) => handleFilterChange('psychographics', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {psychographicOptions.map(option => (
                  <option key={option} value={option === 'All' ? '' : option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-end">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.preViralOnly}
                  onChange={(e) => handleFilterChange('preViralOnly', e.target.checked)}
                  className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  Show only pre-viral creators
                </span>
              </label>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search creators..."
                  value={filters.searchQuery}
                  onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex gap-3 ml-4">
              <button
                onClick={resetFilters}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      <div>
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Showing {filteredCreators.length} creator{filteredCreators.length !== 1 ? 's' : ''}
          </p>
        </div>
        
        <CreatorTable creators={filteredCreators} onCreatorClick={onCreatorClick} />
      </div>
    </div>
  );
};

export default CreatorSearch;