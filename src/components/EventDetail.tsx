import React from 'react';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { Event } from '../types/event';

interface EventDetailProps {
  event: Event;
  onRegister: () => void;
  registrationStatus: {
    loading: boolean;
    error: string | null;
  };
}

const EventDetail: React.FC<EventDetailProps> = ({
  event,
  onRegister,
  registrationStatus
}) => {
  const getRegistrationStatus = () => {
    const available = event.maxParticipants ? 
      event.currentParticipants < event.maxParticipants : 
      true;
    const almostFull = event.maxParticipants ? 
      event.maxParticipants - (event.currentParticipants || 0) <= 5 : 
      false;
    
    if (available) {
      return {
        type: 'available',
        message: almostFull ? 'Few spots left!' : `${event.maxParticipants - (event.currentParticipants || 0)} spots available`,
        buttonText: 'Register Now'
      };
    } else if (event.hasWaitingList) {
      return {
        type: 'waiting',
        message: 'Join Waiting List',
        buttonText: 'Join Waiting List'
      };
    } else {
      return {
        type: 'full',
        message: 'Event Full',
        buttonText: 'Registration Closed'
      };
    }
  };

  const status = getRegistrationStatus();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white">
            <h1 className="text-4xl font-bold mb-6">{event.title}</h1>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{event.time}</span>
              </div>
              {event.location && (
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{event.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {/* Description */}
          {event.description && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-600">{event.description}</p>
            </section>
          )}

          {/* Speakers */}
          {event.speakers && event.speakers.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Speakers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event.speakers.map((speaker) => (
                  <div key={speaker.id} className="flex items-center space-x-4">
                    <img 
                      src={speaker.photo}
                      alt={`${speaker.firstName} ${speaker.lastName}`}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">
                        {speaker.firstName} {speaker.lastName}
                      </h3>
                      <p className="text-gray-600">{speaker.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Agenda */}
          {event.agenda && (
            <section>
              <h2 className="text-2xl font-bold mb-6">Agenda</h2>
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap text-gray-600 font-sans">
                  {event.agenda}
                </pre>
              </div>
            </section>
          )}
        </div>

        {/* Registration Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Registration</h2>

            {registrationStatus.error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-600">
                {registrationStatus.error}
              </div>
            )}

            <div className="mb-6">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>Registration Status:</span>
                <span className={`font-semibold ${
                  status.type === 'available' 
                    ? 'text-green-600' 
                    : status.type === 'waiting'
                    ? 'text-yellow-600'
                    : 'text-red-600'
                }`}>
                  {status.message}
                </span>
              </div>
              {event.maxParticipants && (
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                        status.type === 'available' 
                          ? 'bg-green-500' 
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${(event.currentParticipants / event.maxParticipants) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={onRegister}
              disabled={status.type === 'full' || registrationStatus.loading}
              className={`w-full py-2 px-4 rounded-md font-semibold ${
                status.type === 'available'
                  ? 'bg-linsoft-red text-white hover:bg-red-700'
                  : status.type === 'waiting'
                  ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }`}
            >
              {registrationStatus.loading ? 'Processing...' : status.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;