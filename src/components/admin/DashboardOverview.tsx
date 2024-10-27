import React from 'react';
import { Users, Calendar, FileText, Newspaper } from 'lucide-react';

const DashboardOverview = () => {
  const stats = [
    { icon: Users, label: 'Total Users', value: '1,234' },
    { icon: Calendar, label: 'Active Events', value: '12' },
    { icon: FileText, label: 'Blog Posts', value: '45' },
    { icon: Newspaper, label: 'News Articles', value: '28' }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-red-100 text-linsoft-red">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add more dashboard widgets here */}
    </div>
  );
};

export default DashboardOverview;