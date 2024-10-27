import React, { useState, useEffect } from 'react';
import EventsHero from '../components/events/EventsHero';
import EventsSearch from '../components/events/EventsSearch';
import EventsList from '../components/events/EventsList';
import NewsletterSignup from '../components/events/NewsletterSignup';
import { getEvents } from '../services/events';
import { Event } from '../types/event';
import LoadingSpinner from '../components/shared/LoadingSpinner';

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    date: '',
    topic: ''
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getEvents(false); // false for upcoming events
      setEvents(data);
    } catch (err) {
      setError('Failed to load events. Please try again later.');
      console.error('Error loading events:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (event.description?.toLowerCase() || '').includes(searchQuery.toLowerCase());

    const matchesType = !filters.type || event.type === filters.type;
    const matchesLocation = !filters.location || event.location === filters.location;
    const matchesTheme = !filters.topic || event.theme === filters.topic;

    // Date filtering logic
    let matchesDate = true;
    if (filters.date) {
      const eventDate = new Date(event.date);
      const today = new Date();
      const thisWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
      const thisMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

      switch (filters.date) {
        case 'today':
          matchesDate = eventDate.toDateString() === today.toDateString();
          break;
        case 'thisWeek':
          matchesDate = eventDate >= today && eventDate <= thisWeek;
          break;
        case 'thisMonth':
          matchesDate = eventDate >= today && eventDate <= thisMonth;
          break;
      }
    }

    return matchesSearch && matchesType && matchesLocation && matchesTheme && matchesDate;
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Slider with Latest Events */}
      <EventsHero events={events.slice(0, 3)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Search and Title */}
        <EventsSearch 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-md text-red-600">
            {error}
          </div>
        )}

        {/* Events List with Filters */}
        <EventsList 
          events={filteredEvents}
          filters={filters}
          onFilterChange={setFilters}
        />

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </div>
    </div>
  );
};

export default EventsPage;