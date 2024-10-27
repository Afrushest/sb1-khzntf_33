import React, { useState } from 'react';
import { Mail, Check, X, AlertCircle } from 'lucide-react';
import { Registration } from '../../../types/admin';

interface WaitlistManagerProps {
  registrations: Registration[];
  onAcceptWaitlist: (registrationId: string) => void;
  onRejectWaitlist: (registrationId: string) => void;
  onNotifyWaitlist: (registrationId: string) => void;
}

const WaitlistManager: React.FC<WaitlistManagerProps> = ({
  registrations,
  onAcceptWaitlist,
  onRejectWaitlist,
  onNotifyWaitlist
}) => {
  const waitlistRegistrations = registrations.filter(reg => reg.status === 'waitlist');

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 bg-yellow-50 border-b border-yellow-100">
        <div className="flex items-center">
          <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">
            Waitlist Management
          </h3>
        </div>
        <p className="mt-1 text-sm text-gray-600">
          {waitlistRegistrations.length} people on the waitlist
        </p>
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Participant
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Registration Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {waitlistRegistrations.map((registration) => (
            <tr key={registration.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {registration.userDetails.firstName} {registration.userDetails.lastName}
                </div>
                <div className="text-sm text-gray-500">
                  {registration.userDetails.position} at {registration.userDetails.company}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{registration.userDetails.email}</div>
                <div className="text-sm text-gray-500">{registration.userDetails.phone}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(registration.registrationDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onAcceptWaitlist(registration.id)}
                    className="flex items-center text-green-600 hover:text-green-900"
                  >
                    <Check className="h-4 w-4 mr-1" />
                    Accept
                  </button>
                  <button
                    onClick={() => onRejectWaitlist(registration.id)}
                    className="flex items-center text-red-600 hover:text-red-900"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Reject
                  </button>
                  <button
                    onClick={() => onNotifyWaitlist(registration.id)}
                    className="flex items-center text-blue-600 hover:text-blue-900"
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    Notify
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WaitlistManager;