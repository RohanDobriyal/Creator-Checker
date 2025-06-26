import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import CreatorSearch from './components/CreatorSearch';
import CreatorProfile from './components/CreatorProfile';
import Competitors from './components/Competitors';
import Insights from './components/Insights';
import { mockCreators } from './data/mockCreators';
import { Creator } from './types/Creator';

function App() {
  const [activeTab, setActiveTab] = useState('creator-search');
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);

  const handleCreatorClick = (creator: Creator) => {
    setSelectedCreator(creator);
  };

  const handleBackToSearch = () => {
    setSelectedCreator(null);
  };

  const renderContent = () => {
    if (selectedCreator) {
      return <CreatorProfile creator={selectedCreator} onBack={handleBackToSearch} />;
    }

    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'competitors':
        return <Competitors />;
      case 'creator-search':
        return <CreatorSearch creators={mockCreators} onCreatorClick={handleCreatorClick} />;
      case 'insights':
        return <Insights />;
      case 'settings':
        return (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Settings</h2>
            <p className="text-gray-600">Settings panel coming soon...</p>
          </div>
        );
      case 'logout':
        return (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Logout</h2>
            <p className="text-gray-600">You have been logged out successfully.</p>
          </div>
        );
      default:
        return <CreatorSearch creators={mockCreators} onCreatorClick={handleCreatorClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 flex flex-col">
        <TopBar />
        
        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;