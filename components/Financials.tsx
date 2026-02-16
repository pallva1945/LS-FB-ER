import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { CapTableEntry } from '../types';

const capTableData: CapTableEntry[] = [
  { name: 'VSE (Varese Sports & Ent.)', percentage: 82.09, fill: '#E31837' },
  { name: 'PV Ignis', percentage: 9.89, fill: '#0F172A' },
  { name: 'Varese nel Cuore', percentage: 5.09, fill: '#94A3B8' },
  { name: 'Basket Siamo Noi', percentage: 2.19, fill: '#CBD5E1' },
];

const revenueData = [
  { year: '2021', revenue: 3.2 },
  { year: '2022', revenue: 4.5 },
  { year: '2023', revenue: 5.8 },
  { year: '2024 (Proj)', revenue: 7.1 },
];

const Financials: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Financial Performance & Ownership</h2>
          <p className="text-gray-500">Detailed breakdown of the post-raise capital structure and revenue trajectory.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cap Table Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-[400px] flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Post-Consolidation Ownership Structure</h3>
          <p className="text-xs text-gray-400 mb-4">Assuming €2.8M Capital Raise Target Met</p>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={capTableData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="percentage"
                >
                  {capTableData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `${value}%`} />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue Growth Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-[400px] flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Revenue Growth Trajectory (M€)</h3>
          <p className="text-xs text-gray-400 mb-4">From Stabilization to Growth Phase</p>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748B'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B'}} unit="M€" />
                <Tooltip cursor={{fill: '#F1F5F9'}} />
                <Bar dataKey="revenue" fill="#E31837" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-gray-500 text-sm font-medium mb-1">Pre-Money Valuation</div>
            <div className="text-2xl font-bold text-gray-900">€12M - €15.2M</div>
            <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-3/4"></div>
            </div>
         </div>
         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-gray-500 text-sm font-medium mb-1">Infrastructure CapEx</div>
            <div className="text-2xl font-bold text-gray-900">~€6.0M</div>
            <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-full"></div>
            </div>
         </div>
         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-gray-500 text-sm font-medium mb-1">LSG Stake in VSE</div>
            <div className="text-2xl font-bold text-gray-900">28.18%</div>
            <div className="text-xs text-gray-400 mt-1">Directly held by Luis Scola Group</div>
         </div>
      </div>
    </div>
  );
};

export default Financials;