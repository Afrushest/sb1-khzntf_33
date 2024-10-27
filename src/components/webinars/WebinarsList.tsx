import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Video } from 'lucide-react';
import { Event } from '../../types/event';

interface WebinarsListProps {
  webinars: Event[];
}

const WebinarsList: React.FC<WebinarsListProps> = ({ webinars }) => {
  const getRegistrationStatus = (webinar: Event) => {
    const available = webinar.maxParticipants ? 
      webinar.currentParticipants < webinar.maxParticipants : 
      true;
    const almostFull = webinar.maxParticipants ? 
      webinar.maxParticipants - (webinar.currentParticipants || 0) <= 5 : 
      false;
    
    if (available) {
      return {
        type: 'available',
        message: almostFull ? 'Few spots left!' : `${webinar.maxParticipants - (webinar.currentParticipants || 0)} spots available`,
        buttonText: 'Register Now'
      };
    } else if (webinar.hasWaitingList) {
      return {
        type: 'waiting',
        message: 'Join Waiting List',
        buttonText: 'Join Waiting List'
      };
    } else {
      return {
        type: 'full',
        message: 'Webinar Full',
        buttonText: 'Registration Closed'
      };
    }
  };

  return (
    <div className="space-y-8">
      {webinars.map((webinar) => {
        const status = getRegistrationStatus(webinar);
        
        return (
          <div 
            key={webinar.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
                  alt={webinar.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center">
                  <Video className="h-5 w-5 text-linsoft-red" />
                  <span className="ml-2 text-sm font-semibold text-linsoft-red">
                    Virtual Event
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold text-gray-900">
                  {webinar.title}
                </h3>

                {webinar.description && (
                  <p className="mt-2 text-gray-600">{webinar.description}</p>
                )}

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(webinar.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{status.message}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    to={`/event/${webinar.id}`}
                    className="text-linsoft-red hover:text-red-700 font-semibold"
                  >
                    View Details →
                  </Link>
                  <Link
                    to={`/event/${webinar.id}`}
                    className={`px-4 py-2 rounded-md font-semibold ${
                      status.type === 'available'
                        ? 'bg-linsoft-red text-white hover:bg-red-700'
                        : status.type === 'waiting'
                        ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                        : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    }`}
                  >
                    {status.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WebinarsList;