import React from 'react';

interface FilterProps {
  activeFilters: {
    country: string;
    type: string;
    date: string;
  };
  onFilterChange: (filters: any) => void;
}

const EventFilters: React.FC<FilterProps> = ({ activeFilters, onFilterChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <select
            value={activeFilters.country}
            onChange={(e) => onFilterChange({ ...activeFilters, country: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          >
            <option value="">All Countries</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Algeria">Algeria</option>
            <option value="Morocco">Morocco</option>
            <option value="Libya">Libya</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            value={activeFilters.type}
            onChange={(e) => onFilterChange({ ...activeFilters, type: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          >
            <option value="">All Types</option>
            <option value="event">Events</option>
            <option value="webinar">Webinars</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <select
            value={activeFilters.date}
            onChange={(e) => onFilterChange({ ...activeFilters, date: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          >
            <option value="">All Dates</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
            <option value="thisMonth">This Month</option>
            <option value="nextMonth">Next Month</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EventFilters;