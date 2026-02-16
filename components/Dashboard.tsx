import React from 'react';
import { ArrowUpRight, Users, Trophy, Building2 } from 'lucide-react';

const StatCard: React.FC<{ title: string; value: string; subtext: string; icon: React.FC<any>; trend?: string }> = ({ title, value, subtext, icon: Icon, trend }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-red-50 rounded-lg text-varese-red">
        <Icon size={24} />
      </div>
      {trend && (
        <span className="flex items-center text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-full">
          <ArrowUpRight size={14} className="mr-1" />
          {trend}
        </span>
      )}
    </div>
    <h3 className="text-gray-500 dark:text-gray-300 text-sm font-medium mb-1">{title}</h3>
    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
    <p className="text-xs text-gray-400">{subtext}</p>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Executive Overview</h2>
          <p className="text-gray-500 dark:text-gray-300">Welcome back, Luis. Here is the club's latest status.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium">
          Season 2024-25
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Projected Revenue" 
          value="€7.0M+" 
          subtext="From €3.2M baseline" 
          icon={TrendingUpIcon} 
          trend="+118%"
        />
        <StatCard 
          title="Cap Raise Target" 
          value="€2.8M" 
          subtext="VSE Asset Cap + Open Round" 
          icon={Building2} 
        />
        <StatCard 
          title="Academy Talent" 
          value="450+" 
          subtext="Youth players across 12 teams" 
          icon={Users} 
        />
        <StatCard 
          title="Titles" 
          value="15" 
          subtext="10 IT Champs, 5 Euroleague" 
          icon={Trophy} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Active Strategic Initiatives</h3>
            <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-varese-red">
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">NBA Europe Bid (Phase I)</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-300">Drafting Exclusive SCA with FC Inter / Oaktree. Deadline: 15 business days.</p>
                    </div>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">In Progress</span>
                </div>
                <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-blue-500">
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Varese Campus Development</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-300">Infrastructure expansion for training & wellness ecosystem.</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">On Track</span>
                </div>
                 <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-gray-400">
                    <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Capital Raise (Consolidation)</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-300">Finalizing VSE Group consolidation to 82.09% control.</p>
                    </div>
                     <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">Closing</span>
                </div>
            </div>
        </div>

        <div className="bg-varese-dark text-white p-6 rounded-xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-varese-red rounded-full opacity-20"></div>
            <h3 className="text-lg font-bold mb-4 relative z-10">Leadership Note</h3>
            <p className="text-gray-300 text-sm mb-6 relative z-10">
                "The Red & White Renaissance is not just about winning games; it's about building a sustainable, European powerhouse. Discipline in our financial strategy is as crucial as our performance on the court."
            </p>
            <div className="flex items-center space-x-2 relative z-10">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs border border-gray-500">LS</div>
                <span className="text-sm font-medium">Luis Scola</span>
            </div>
        </div>
      </div>
    </div>
  );
};

// Icon wrapper for usage in StatCard
const TrendingUpIcon = (props: any) => <ArrowUpRight {...props} />;

export default Dashboard;