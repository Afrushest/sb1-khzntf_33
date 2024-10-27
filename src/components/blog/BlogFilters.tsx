import React from 'react';
import { Calendar, Tag } from 'lucide-react';

interface FilterProps {
  activeFilters: {
    category: string;
    date: string;
    author: string;
  };
  onFilterChange: (filters: any) => void;
}

const BlogFilters: React.FC<FilterProps> = ({ activeFilters, onFilterChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Filters</h3>
      
      <div className="space-y-6">
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
            <option value="cloud">Cloud Computing</option>
            <option value="devops">DevOps</option>
            <option value="security">Security</option>
            <option value="linux">Linux</option>
            <option value="aws">AWS</option>
            <option value="redhat">RedHat</option>
          </select>
        </div>

        {/* Author Filter */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Tag className="h-4 w-4 mr-2" />
            Author
          </label>
          <select
            value={activeFilters.author}
            onChange={(e) => onFilterChange({ ...activeFilters, author: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
          >
            <option value="">All Authors</option>
            <option value="john-smith">John Smith</option>
            <option value="sarah-johnson">Sarah Johnson</option>
            <option value="michael-chen">Michael Chen</option>
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
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
            <option value="this-year">This Year</option>
            <option value="last-year">Last Year</option>
          </select>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={() => onFilterChange({
            category: '',
            author: '',
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

export default BlogFilters;