import React from 'react';
import { Calendar, MapPin, Tag } from 'lucide-react';

interface FilterProps {
  activeFilters: {
    type: string;
    location: string;
    date: string;
    topic: string;
  };
  onFilterChange: (filters: any) => void;
}

const EventFilters: React.FC<FilterProps> = ({ activeFilters, onFilterChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Filters</h3>
      
      <div className="space-y-6">
        {/* Event Type Filter */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Calendar className="h-4 w-4 mr-2" />
            Event Type
          </label>
          <select
            value={activeFilters.type}
            onChange={(e) => onFilterChange({ ...activeFilters, type: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
          >
            <option value="">All Types</option>
            <option value="event">In-Person Events</option>
            <option value="webinar">Webinars</option>
          </select>
        </div>

        {/* Location Filter */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <MapPin className="h-4 w-4 mr-2" />
            Location
          </label>
          <select
            value={activeFilters.location}
            onChange={(e) => onFilterChange({ ...activeFilters, location: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
          >
            <option value="">All Locations</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Algeria">Algeria</option>
            <option value="Morocco">Morocco</option>
            <option value="Libya">Libya</option>
            <option value="online">Online</option>
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
            <option value="">All Dates</option>
            <option value="upcoming">Upcoming</option>
            <option value="today">Today</option>
            <option value="thisWeek">This Week</option>
            <option value="thisMonth">This Month</option>
            <option value="past">Past Events</option>
          </select>
        </div>

        {/* Topic Filter */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Tag className="h-4 w-4 mr-2" />
            Topic
          </label>
          <select
            value={activeFilters.topic}
            onChange={(e) => onFilterChange({ ...activeFilters, topic: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
          >
            <option value="">All Topics</option>
            <option value="redhat">RedHat</option>
            <option value="aws">AWS</option>
            <option value="cloud">Cloud Computing</option>
            <option value="devops">DevOps</option>
            <option value="security">Security</option>
            <option value="linux">Linux</option>
          </select>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={() => onFilterChange({
            type: '',
            location: '',
            date: '',
            topic: ''
          })}
          className="w-full px-4 py-2 text-sm text-linsoft-red bg-red-50 rounded-md hover:bg-red-100 transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default EventFilters;