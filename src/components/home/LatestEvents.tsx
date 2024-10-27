import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Video } from 'lucide-react';

const LatestEvents = () => {
  const events = [
    {
      id: 1,
      type: 'Event',
      title: 'RedHat Enterprise Linux Administration',
      date: 'March 25, 2024',
      location: 'Tunisia'
    },
    {
      id: 2,
      type: 'Webinar',
      title: 'AWS Cloud Architecture Best Practices',
      date: 'March 28, 2024',
      location: 'Online'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Events & Webinars</h2>
          <p className="mt-4 text-xl text-gray-600">
            Join our latest events and enhance your skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {event.type === 'Webinar' ? (
                    <Video className="h-5 w-5 text-linsoft-red" />
                  ) : (
                    <Calendar className="h-5 w-5 text-linsoft-red" />
                  )}
                  <span className="ml-2 text-sm font-semibold text-linsoft-red">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.date} - {event.location}</p>
                <Link
                  to={`/event/${event.id}`}
                  className="text-linsoft-red hover:text-red-700 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/events"
            className="inline-block bg-linsoft-red text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestEvents;