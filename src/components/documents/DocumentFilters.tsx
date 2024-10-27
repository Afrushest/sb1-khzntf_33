import React from 'react';
import { Tag, Calendar, FileText } from 'lucide-react';

interface FilterProps {
  activeFilters: {
    type: string;
    category: string;
    date: string;
  };
  onFilterChange: (filters: any) => void;
}

const DocumentFilters: React.FC<FilterProps> = ({ activeFilters, onFilterChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Filters</h3>
      
      <div className="space-y-6">
        {/* Document Type Filter */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <FileText className="h-4 w-4 mr-2" />
            Document Type
          </label>
          <select
            value={activeFilters.type}
            onChange={(e) => onFilterChange({ ...activeFilters, type: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
          >
            <option value="">All Types</option>
            <option value="whitepaper">Whitepapers</option>
            <option value="guide">Technical Guides</option>
            <option value="datasheet">Datasheets</option>
            <option value="case-study">Case Studies</option>
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Tag className="h-4 w-4 mr-2" />
            Category
          </label>
          <select
            value={activeFilters.category}
            onChange={(e) => onFilterChange({ ...activeFilters, category: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
          >
            <option value="">All Categories</option>
            <option value="redhat">RedHat</option>
            <option value="aws">AWS</option>
            <option value="cloud">Cloud Computing</option>
            <option value="security">Security</option>
            <option value="devops">DevOps</option>
          </select>
        </div>

        {/* Date Filter */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Calendar className="h-4 w-4 mr-2" />
            Date
          </label>
          <select
            value={activeFilters.date}
            onChange={(e) => onFilterChange({ ...activeFilters, date: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
          >
            <option value="">All Time</option>
            <option value="last-week">Last Week</option>
            <option value="last-month">Last Month</option>
            <option value="last-quarter">Last Quarter</option>
            <option value="last-year">Last Year</option>
          </select>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={() => onFilterChange({
            type: '',
            category: '',
            date: ''
          })}
          className="w-full px-4 py-2 text-sm text-linsoft-red bg-red-50 rounded-md hover:bg-red-100 transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default DocumentFilters;