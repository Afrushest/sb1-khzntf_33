import React, { useState } from 'react';
import { Building2, GraduationCap, Headphones } from 'lucide-react';
import SalesForm from './forms/SalesForm';
import TrainingForm from './forms/TrainingForm';
import SupportInfo from './forms/SupportInfo';

const ContactTabs = () => {
  const [activeTab, setActiveTab] = useState('sales');

  const tabs = [
    {
      id: 'sales',
      label: 'Sales Inquiries',
      icon: Building2,
      component: SalesForm
    },
    {
      id: 'training',
      label: 'Training Information',
      icon: GraduationCap,
      component: TrainingForm
    },
    {
      id: 'support',
      label: 'Customer Support',
      icon: Headphones,
      component: SupportInfo
    }
  ];

  return (
    <div className="mb-20">
      {/* Tabs Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8" aria-label="Contact sections">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm
                  ${activeTab === tab.id
                    ? 'border-linsoft-red text-linsoft-red'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                <Icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? 'block' : 'hidden'}
          >
            <tab.component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactTabs;