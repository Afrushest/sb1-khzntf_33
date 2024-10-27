import React, { useState, useEffect } from 'react';
import { Plus, Download, Calendar, History } from 'lucide-react';
import EventModal from './EventModal';
import EventsList from './EventsList';
import { Event, EventInput } from '../../../types/event';
import { getEvents, createEvent, updateEvent, deleteEvent } from '../../../services/events';
import LoadingSpinner from '../../shared/LoadingSpinner';

const EventsManager = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, [showPastEvents]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getEvents(showPastEvents);
      setEvents(data || []);
    } catch (err) {
      setError('Failed to fetch events. Please try again.');
      console.error('Error fetching events:', err);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddEvent = () => {
    setSelectedEvent(null);
    setModalOpen(true);
  };

  const handleEditEvent = (event: Event) => {
    // Create a serializable copy of the event
    const serializableEvent: Event = {
      id: event.id,
      title: event.title || '',
      date: event.date || '',
      time: event.time || '',
      type: event.type || 'in-person',
      location: event.location || '',
      theme: event.theme || '',
      description: event.description || '',
      agenda: event.agenda || '',
      maxParticipants: event.maxParticipants || 0,
      hasWaitingList: Boolean(event.hasWaitingList),
      isPast: Boolean(event.isPast),
      visitCount: event.visitCount || 0,
      speakers: Array.isArray(event.speakers) ? event.speakers.map(speaker => ({
        id: speaker.id || '',
        firstName: speaker.firstName || '',
        lastName: speaker.lastName || '',
        position: speaker.position || '',
        photo: speaker.photo || ''
      })) : []
    };
    
    setSelectedEvent(serializableEvent);
    setModalOpen(true);
  };

  const handleSaveEvent = async (eventData: EventInput) => {
    try {
      setError(null);
      // Ensure eventData is serializable
      const serializableData: EventInput = {
        title: eventData.title || '',
        date: eventData.date || '',
        time: eventData.time || '',
        type: eventData.type || 'in-person',
        location: eventData.location || '',
        theme: eventData.theme || '',
        description: eventData.description || '',
        agenda: eventData.agenda || '',
        maxParticipants: eventData.maxParticipants || 0,
        hasWaitingList: Boolean(eventData.hasWaitingList),
        speakers: Array.isArray(eventData.speakers) ? eventData.speakers.map(speaker => ({
          id: speaker.id || '',
          firstName: speaker.firstName || '',
          lastName: speaker.lastName || '',
          position: speaker.position || '',
          photo: speaker.photo || ''
        })) : []
      };

      if (selectedEvent) {
        await updateEvent(selectedEvent.id, serializableData);
      } else {
        await createEvent(serializableData);
      }
      await fetchEvents();
      setModalOpen(false);
      setSelectedEvent(null);
    } catch (err) {
      setError('Failed to save event. Please try again.');
      console.error('Error saving event:', err);
    }
  };

  const handleDeleteEvent = async (eventId: string) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        setError(null);
        await deleteEvent(eventId);
        await fetchEvents();
      } catch (err) {
        setError('Failed to delete event. Please try again.');
        console.error('Error deleting event:', err);
      }
    }
  };

  const handleExport = () => {
    const exportData = events.map(event => ({
      title: event.title || '',
      date: event.date || '',
      time: event.time || '',
      type: event.type || '',
      location: event.location || '',
      theme: event.theme || '',
      maxParticipants: event.maxParticipants || 0
    }));
    
    console.log('Exporting events:', exportData);
  };

  const filteredEvents = events.filter(event => 
    (event.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
    (event.description?.toLowerCase() || '').includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-600">
          {error}
        </div>
      )}

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Events Management</h1>
        <div className="flex space-x-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setShowPastEvents(false)}
              className={`px-4 py-2 rounded-md flex items-center ${
                !showPastEvents
                  ? 'bg-linsoft-red text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Upcoming Events
            </button>
            <button
              onClick={() => setShowPastEvents(true)}
              className={`px-4 py-2 rounded-md flex items-center ${
                showPastEvents
                  ? 'bg-linsoft-red text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <History className="h-5 w-5 mr-2" />
              Past Events
            </button>
          </div>
          <button
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 inline-flex items-center"
            onClick={handleExport}
          >
            <Download className="h-5 w-5 mr-2" />
            Export
          </button>
          <button
            onClick={handleAddEvent}
            className="flex items-center px-4 py-2 bg-linsoft-red text-white rounded-md hover:bg-red-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Event
          </button>
        </div>
      </div>

      <EventsList
        events={filteredEvents}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onEdit={handleEditEvent}
        onDelete={handleDeleteEvent}
        showPastEvents={showPastEvents}
      />

      <EventModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedEvent(null);
        }}
        onSave={handleSaveEvent}
        event={selectedEvent}
        isPastEvent={showPastEvents}
      />
    </div>
  );
};

export default EventsManager;