import React, { useState } from 'react';
import { Download, Search, Filter } from 'lucide-react';
import RegistrationsList from './RegistrationsList';
import RegistrationFilters from './RegistrationFilters';
import { Registration } from '../../../types/admin';

const RegistrationsManager = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    eventType: '',
    country: '',
    status: '',
    dateRange: { start: '', end: '' },
    company: '',
    position: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  // Sample data - replace with actual data later
  const [registrations] = useState<Registration[]>([
    {
      id: '1',
      eventId: '1',
      eventType: 'webinar',
      userId: '1',
      userDetails: {
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@example.com',
        phone: '+1234567890',
        company: 'Tech Corp',
        position: 'Developer',
        country: 'Tunisia'
      },
      registrationDate: '2024-03-01',
      status: 'confirmed'
    }
  ]);

  const handleExport = (format: 'excel' | 'csv') => {
    const data = registrations.map(reg => ({
      'Event Type': reg.eventType,
      'Registration Date': reg.registrationDate,
      'Status': reg.status,
      'First Name': reg.userDetails.firstName,
      'Last Name': reg.userDetails.lastName,
      'Email': reg.userDetails.email,
      'Phone': reg.userDetails.phone,
      'Company': reg.userDetails.company,
      'Position': reg.userDetails.position,
      'Country': reg.userDetails.country
    }));

    // Convert to CSV/Excel and trigger download
    console.log(`Exporting ${format}:`, data);
  };

  const handleCancelRegistration = (registrationId: string, reason: string) => {
    // Implement registration cancellation
    console.log('Cancelling registration:', registrationId, reason);
  };

  const filteredRegistrations = registrations.filter(reg => {
    // Search query filter
    const searchFields = [
      reg.userDetails.firstName,
      reg.userDetails.lastName,
      reg.userDetails.email,
      reg.userDetails.company,
      reg.userDetails.position
    ].map(field => field.toLowerCase());
    
    const matchesSearch = searchQuery === '' || searchFields.some(field => 
      field.includes(searchQuery.toLowerCase())
    );

    // Event type filter
    const matchesEventType = !filters.eventType || reg.eventType === filters.eventType;

    // Country filter
    const matchesCountry = !filters.country || reg.userDetails.country === filters.country;

    // Status filter
    const matchesStatus = !filters.status || reg.status === filters.status;

    // Company filter
    const matchesCompany = !filters.company || 
      reg.userDetails.company.toLowerCase().includes(filters.company.toLowerCase());

    // Position filter
    const matchesPosition = !filters.position || 
      reg.userDetails.position.toLowerCase().includes(filters.position.toLowerCase());

    // Date range filter
    const registrationDate = new Date(reg.registrationDate);
    const matchesDateRange = (
      (!filters.dateRange.start || registrationDate >= new Date(filters.dateRange.start)) &&
      (!filters.dateRange.end || registrationDate <= new Date(filters.dateRange.end))
    );

    return matchesSearch && 
           matchesEventType && 
           matchesCountry && 
           matchesStatus && 
           matchesCompany && 
           matchesPosition && 
           matchesDateRange;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Registrations Management</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-2 rounded-md inline-flex items-center ${
              showFilters 
                ? 'bg-linsoft-red text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Filter className="h-5 w-5 mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
          <button
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 inline-flex items-center"
            onClick={() => handleExport('excel')}
          >
            <Download className="h-5 w-5 mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {showFilters && (
          <RegistrationFilters
            filters={filters}
            onFilterChange={setFilters}
          />
        )}

        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, email, company, or position..."
            className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            Showing {filteredRegistrations.length} of {registrations.length} registrations
          </p>
        </div>

        <RegistrationsList
          registrations={filteredRegistrations}
          onCancelRegistration={handleCancelRegistration}
        />
      </div>
    </div>
  );
};

export default RegistrationsManager;