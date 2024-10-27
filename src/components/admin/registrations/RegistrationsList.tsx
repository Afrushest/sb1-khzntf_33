import React, { useState } from 'react';
import { Calendar, Mail, Phone, Building2, MapPin, Video, Users } from 'lucide-react';
import { Registration } from '../../../types/admin';
import CancellationModal from './CancellationModal';

interface RegistrationsListProps {
  registrations: Registration[];
  onCancelRegistration: (registrationId: string, reason: string) => void;
}

const RegistrationsList: React.FC<RegistrationsListProps> = ({
  registrations,
  onCancelRegistration
}) => {
  const [selectedRegistration, setSelectedRegistration] = useState<Registration | null>(null);
  const [showCancellationModal, setShowCancellationModal] = useState(false);

  const handleCancelClick = (registration: Registration) => {
    setSelectedRegistration(registration);
    setShowCancellationModal(true);
  };

  const getStatusBadgeColor = (status: Registration['status']) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'waitlist':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getEventTypeIcon = (type: 'event' | 'webinar') => {
    if (type === 'webinar') {
      return <Video className="h-4 w-4 text-blue-500" />;
    }
    return <Users className="h-4 w-4 text-green-500" />;
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Participant
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Registration Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {registrations.map((registration) => (
              <tr key={registration.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getEventTypeIcon(registration.eventType)}
                    <span className="ml-2 text-sm text-gray-900">
                      {registration.eventType === 'webinar' ? 'Webinar' : 'Event'}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {registration.userDetails.firstName} {registration.userDetails.lastName}
                  </div>
                  <div className="text-sm text-gray-500">
                    {registration.userDetails.position}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <Mail className="h-4 w-4 mr-2" />
                      {registration.userDetails.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Phone className="h-4 w-4 mr-2" />
                      {registration.userDetails.phone}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center text-sm text-gray-900">
                      <Building2 className="h-4 w-4 mr-2" />
                      {registration.userDetails.company}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {registration.userDetails.country}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-900">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(registration.registrationDate).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    getStatusBadgeColor(registration.status)
                  }`}>
                    {registration.status.charAt(0).toUpperCase() + registration.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {registration.status === 'confirmed' && (
                    <button
                      onClick={() => handleCancelClick(registration)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Cancel Registration
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CancellationModal
        isOpen={showCancellationModal}
        onClose={() => {
          setShowCancellationModal(false);
          setSelectedRegistration(null);
        }}
        onConfirm={(reason) => {
          if (selectedRegistration) {
            onCancelRegistration(selectedRegistration.id, reason);
          }
          setShowCancellationModal(false);
          setSelectedRegistration(null);
        }}
      />
    </>
  );
};

export default RegistrationsList;