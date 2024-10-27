import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EventDetail from '../components/EventDetail';
import { getEventById, registerForEvent } from '../services/events';
import { Event } from '../types/event';
import LoadingSpinner from '../components/shared/LoadingSpinner';

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [registrationStatus, setRegistrationStatus] = useState<{
    loading: boolean;
    error: string | null;
  }>({
    loading: false,
    error: null
  });

  useEffect(() => {
    if (id) {
      fetchEventDetails(id);
    }
  }, [id]);

  const fetchEventDetails = async (eventId: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getEventById(eventId);
      setEvent(data);
    } catch (err) {
      setError('Failed to load event details. Please try again later.');
      console.error('Error loading event details:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRegistration = async () => {
    if (!event?.id) return;

    try {
      setRegistrationStatus({ loading: true, error: null });
      await registerForEvent(event.id);
      // Refresh event details to get updated registration status
      await fetchEventDetails(event.id);
    } catch (err: any) {
      setRegistrationStatus({
        loading: false,
        error: err.response?.data?.message || 'Failed to register for the event. Please try again.'
      });
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-600">
            {error || 'Event not found'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <EventDetail 
        event={event}
        onRegister={handleRegistration}
        registrationStatus={registrationStatus}
      />
    </div>
  );
};

export default EventDetailPage;