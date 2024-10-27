import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Event } from '../../types/event';

interface EventsHeroProps {
  events: Event[];
}

const EventsHero: React.FC<EventsHeroProps> = ({ events }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % events.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [events.length]);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % events.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + events.length) % events.length);
  };

  if (events.length === 0) return null;

  return (
    <div className="relative bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Slider Navigation */}
          <div className="absolute inset-0 flex items-center justify-between z-10 px-4">
            <button 
              className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
              onClick={prevSlide}
            >
              <ArrowRight className="h-6 w-6 text-white transform rotate-180" />
            </button>
            <button 
              className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
              onClick={nextSlide}
            >
              <ArrowRight className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Slides */}
          <div className="relative h-[600px]">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
                </div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
                    {event.description && (
                      <p className="text-lg text-gray-300 mb-6">{event.description}</p>
                    )}
                    <div className="flex items-center space-x-6 mb-8">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      {event.location && (
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 mr-2" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                    <Link
                      to={`/event/${event.id}`}
                      className="inline-block bg-linsoft-red text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsHero;