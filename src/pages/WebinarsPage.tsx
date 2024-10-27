import React, { useState, useEffect } from 'react';
import { getWebinars } from '../services/webinars';
import WebinarsList from '../components/webinars/WebinarsList';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import { Event } from '../types/event';

const WebinarsPage = () => {
  const [webinars, setWebinars] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWebinars();
  }, []);

  const fetchWebinars = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getWebinars(false); // false for upcoming webinars
      setWebinars(data);
    } catch (err) {
      setError('Failed to load webinars. Please try again later.');
      console.error('Error loading webinars:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Upcoming Webinars</h1>
          <p className="mt-4 text-xl text-gray-600">
            Join our virtual events and enhance your skills from anywhere
          </p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-md text-red-600">
            {error}
          </div>
        )}

        <WebinarsList webinars={webinars} />
      </div>
    </div>
  );
};

export default WebinarsPage;