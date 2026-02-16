import React from 'react';
import { View } from '../types';
import { LayoutDashboard, TrendingUp, Target, MessageSquareText, Sun, Moon } from 'lucide-react';

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView, isDarkMode, toggleDarkMode }) => {
  const menuItems = [
    { id: View.DASHBOARD, label: 'Overview', icon: LayoutDashboard },
    { id: View.FINANCIALS, label: 'Financials & Cap Table', icon: TrendingUp },
    { id: View.STRATEGY, label: 'NBA Europe Strategy', icon: Target },
    { id: View.ASSISTANT, label: 'Strategic Advisor', icon: MessageSquareText },
  ];

  const ThemeIcon = isDarkMode ? Sun : Moon;

  return (
    <div className="w-64 bg-varese-dark text-white h-screen fixed left-0 top-0 flex flex-col shadow-xl z-50">
      <div className="p-6 border-b border-gray-700 flex items-center space-x-3">
        <div className="w-10 h-10 bg-varese-red rounded-full flex items-center justify-center text-white font-bold text-xl">
          V
        </div>
        <div>
          <h1 className="font-bold text-lg leading-tight">Pallacanestro<br/>Varese</h1>
          <p className="text-xs text-gray-400">Executive Hub</p>
        </div>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'bg-varese-red text-white shadow-lg' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-6 border-t border-gray-700">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          className="w-full flex items-center space-x-3 px-4 py-3 mb-4 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors duration-200"
        >
          <ThemeIcon size={20} />
          <span className="font-medium">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-xs">LS</div>
            <div className="flex-1">
                <p className="text-sm font-medium">Luis Scola</p>
                <p className="text-xs text-gray-400">CEO / Majority Owner</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;