import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactMap = () => {
  const locations = [
    {
      country: 'Tunisia',
      address: 'Tunis Business Center, Rue du Lac, Tunis',
      phone: '+216 XX XXX XXX',
      email: 'tunisia@linsoft.com'
    },
    {
      country: 'Algeria',
      address: 'Business District, Algiers',
      phone: '+213 XX XXX XXX',
      email: 'algeria@linsoft.com'
    },
    {
      country: 'Morocco',
      address: 'Casablanca Business Hub, Casablanca',
      phone: '+212 XX XXX XXX',
      email: 'morocco@linsoft.com'
    },
    {
      country: 'Libya',
      address: 'Tripoli Commercial Center, Tripoli',
      phone: '+218 XX XXX XXX',
      email: 'libya@linsoft.com'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Locations List */}
        <div className="p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Our Locations
          </h3>
          <div className="space-y-8">
            {locations.map((location, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {location.country}
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-linsoft-red mt-1" />
                    <p className="ml-2 text-gray-600">{location.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-linsoft-red" />
                    <p className="ml-2 text-gray-600">{location.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-linsoft-red" />
                    <p className="ml-2 text-gray-600">{location.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="lg:col-span-2 min-h-[600px] bg-gray-100">
          {/* Integrate your preferred map solution here */}
          <div className="w-full h-full">
            {/* Map component goes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;