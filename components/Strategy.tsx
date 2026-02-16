import React from 'react';
import { Globe, Handshake, ShieldCheck, Timer } from 'lucide-react';

const Strategy: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">NBA Europe Initiative</h2>
          <p className="text-gray-500 dark:text-gray-300">Strategic Cooperation Agreement (SCA) Status & Roadmap.</p>
      </div>

      <div className="bg-gradient-to-r from-blue-900 to-black rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
                <h3 className="text-3xl font-bold mb-2">Pallacanestro Varese <span className="text-blue-400">×</span> Inter Milan</h3>
                <p className="text-blue-200 max-w-xl text-lg">
                    Partnership bid for a guaranteed spot in NBA Europe. Leveraging Varese's operational basketball expertise and Inter's global brand power.
                </p>
            </div>
            <div className="mt-6 md:mt-0 bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20">
                <span className="text-xs text-blue-300 uppercase tracking-wider font-semibold">Status</span>
                <div className="text-xl font-bold">Phase I: SCA Drafting</div>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h4 className="flex items-center text-lg font-bold text-gray-900 dark:text-white mb-6">
                <Handshake className="mr-2 text-varese-red" size={20}/>
                Role Division
            </h4>
            <div className="space-y-6">
                <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-varese-red font-bold shrink-0">PV</div>
                    <div className="ml-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white">Strategic & Operational Lead</h5>
                        <ul className="text-sm text-gray-500 dark:text-gray-300 mt-1 list-disc list-inside">
                            <li>Funding Phase I (Pursuit)</li>
                            <li>Full basketball operations control</li>
                            <li>Management of NBA liaison</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full border-t border-gray-100 dark:border-gray-700"></div>
                <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold shrink-0">IM</div>
                    <div className="ml-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white">FC Inter / Oaktree</h5>
                        <ul className="text-sm text-gray-500 dark:text-gray-300 mt-1 list-disc list-inside">
                            <li>Global Brand Identity & Fanbase</li>
                            <li>Institutional Credibility (Oaktree)</li>
                            <li>Royalty-based revenue model in Phase II</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
             <h4 className="flex items-center text-lg font-bold text-gray-900 dark:text-white mb-6">
                <ShieldCheck className="mr-2 text-varese-red" size={20}/>
                Key Execution Details
            </h4>
            <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                        <Timer size={16} className="text-gray-500 dark:text-gray-400 mr-2" />
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Timeline</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Objective to finalize and sign the Exclusive Strategic Cooperation Agreement within <span className="font-bold text-gray-900 dark:text-white">15 business days</span>.
                    </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                        <Globe size={16} className="text-gray-500 dark:text-gray-400 mr-2" />
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">External Counsel</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-bold text-gray-900 dark:text-white">Charles H. Baker</span> (Sidley Austin). Expert in global sports transactions (NBA, MLB) engaged to guide deal structuring.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;