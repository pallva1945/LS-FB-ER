import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Financials from './components/Financials';
import Strategy from './components/Strategy';
import Assistant from './components/Assistant';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return <Dashboard />;
      case View.FINANCIALS:
        return <Financials />;
      case View.STRATEGY:
        return <Strategy />;
      case View.ASSISTANT:
        return <Assistant />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-gray-900">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
            {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;