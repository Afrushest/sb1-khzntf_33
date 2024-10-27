import React from 'react';
import { Calendar, Building2, Briefcase } from 'lucide-react';

interface FiltersState {
  eventType: string;
  country: string;
  status: string;
  dateRange: {
    start: string;
    end: string;
  };
  company: string;
  position: string;
}

interface RegistrationFiltersProps {
  filters: FiltersState;
  onFilterChange: (filters: FiltersState) => void;
}

const RegistrationFilters: React.FC<RegistrationFiltersProps> = ({
  filters,
  onFilterChange
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Event Type
          </label>
          <select
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
            value={filters.eventType}
            onChange={(e) => onFilterChange({ ...filters, eventType: e.target.value })}
          >
            <option value="">All Types</option>
            <option value="event">Events</option>
            <option value="webinar">Webinars</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <select
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
            value={filters.country}
            onChange={(e) => onFilterChange({ ...filters, country: e.target.value })}
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
            Status
          </label>
          <select
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
            value={filters.status}
            onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
          >
            <option value="">All Statuses</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
            <option value="waitlist">Waitlist</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Building2 className="h-4 w-4 inline-block mr-1" />
            Company
          </label>
          <input
            type="text"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
            value={filters.company}
            onChange={(e) => onFilterChange({ ...filters, company: e.target.value })}
            placeholder="Filter by company..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Briefcase className="h-4 w-4 inline-block mr-1" />
            Position
          </label>
          <input
            type="text"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
            value={filters.position}
            onChange={(e) => onFilterChange({ ...filters, position: e.target.value })}
            placeholder="Filter by position..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Calendar className="h-4 w-4 inline-block mr-1" />
            Registration Date Range
          </label>
          <div className="flex space-x-2">
            <input
              type="date"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
              value={filters.dateRange.start}
              onChange={(e) => onFilterChange({
                ...filters,
                dateRange: { ...filters.dateRange, start: e.target.value }
              })}
            />
            <input
              type="date"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
              value={filters.dateRange.end}
              onChange={(e) => onFilterChange({
                ...filters,
                dateRange: { ...filters.dateRange, end: e.target.value }
              })}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={() => onFilterChange({
            eventType: '',
            country: '',
            status: '',
            dateRange: { start: '', end: '' },
            company: '',
            position: ''
          })}
          className="text-sm text-linsoft-red hover:text-red-700 font-medium"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default RegistrationFilters;