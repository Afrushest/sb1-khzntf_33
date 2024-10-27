import React, { useState, useEffect } from 'react';
import { Plus, Download, Calendar, History } from 'lucide-react';
import WebinarModal from './WebinarModal';
import WebinarsList from './WebinarsList';
import { getWebinars, createWebinar, updateWebinar, deleteWebinar } from '../../../services/webinars';
import { Webinar, WebinarInput } from '../../../types/webinar';
import LoadingSpinner from '../../shared/LoadingSpinner';

const WebinarsManager = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState<Webinar | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPastWebinars, setShowPastWebinars] = useState(false);
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWebinars = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getWebinars(showPastWebinars);
      setWebinars(data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch webinars');
      console.error('Error fetching webinars:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWebinars();
  }, [showPastWebinars]);

  const handleExport = () => {
    const exportData = webinars.map(webinar => ({
      title: webinar.title,
      date: webinar.date,
      time: webinar.time,
      theme: webinar.theme,
      maxParticipants: webinar.maxParticipants,
      currentParticipants: webinar.currentParticipants,
      status: webinar.isPast ? 'Past' : 'Upcoming'
    }));
    
    console.log('Exporting webinars:', exportData);
  };

  const handleAddWebinar = () => {
    setSelectedWebinar(null);
    setModalOpen(true);
  };

  const handleEditWebinar = (webinar: Webinar) => {
    setSelectedWebinar(webinar);
    setModalOpen(true);
  };

  const handleSaveWebinar = async (webinarData: WebinarInput) => {
    try {
      setError(null);
      
      // Create a clean serializable object
      const cleanData: WebinarInput = {
        title: webinarData.title,
        date: webinarData.date,
        time: webinarData.time,
        theme: webinarData.theme,
        description: webinarData.description,
        agenda: webinarData.agenda,
        maxParticipants: webinarData.maxParticipants,
        hasWaitingList: webinarData.hasWaitingList
      };

      if (selectedWebinar) {
        await updateWebinar(selectedWebinar.id, cleanData);
      } else {
        await createWebinar(cleanData);
      }
      
      await fetchWebinars();
      setModalOpen(false);
      setSelectedWebinar(null);
    } catch (err: any) {
      setError(err.message || 'Failed to save webinar');
      console.error('Error saving webinar:', err);
    }
  };

  const handleDeleteWebinar = async (webinarId: string) => {
    if (!window.confirm('Are you sure you want to delete this webinar?')) {
      return;
    }

    try {
      setError(null);
      await deleteWebinar(webinarId);
      await fetchWebinars();
    } catch (err: any) {
      setError(err.message || 'Failed to delete webinar');
      console.error('Error deleting webinar:', err);
    }
  };

  const filteredWebinars = webinars.filter(webinar => 
    webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    webinar.description?.toLowerCase().includes(searchQuery.toLowerCase())
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
        <h1 className="text-2xl font-bold text-gray-900">Webinars Management</h1>
        <div className="flex space-x-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setShowPastWebinars(false)}
              className={`px-4 py-2 rounded-md flex items-center ${
                !showPastWebinars
                  ? 'bg-linsoft-red text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Upcoming Webinars
            </button>
            <button
              onClick={() => setShowPastWebinars(true)}
              className={`px-4 py-2 rounded-md flex items-center ${
                showPastWebinars
                  ? 'bg-linsoft-red text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <History className="h-5 w-5 mr-2" />
              Past Webinars
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
            onClick={handleAddWebinar}
            className="flex items-center px-4 py-2 bg-linsoft-red text-white rounded-md hover:bg-red-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Webinar
          </button>
        </div>
      </div>

      <WebinarsList
        webinars={filteredWebinars}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onEdit={handleEditWebinar}
        onDelete={handleDeleteWebinar}
        showPastWebinars={showPastWebinars}
      />

      <WebinarModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedWebinar(null);
        }}
        onSave={handleSaveWebinar}
        webinar={selectedWebinar}
        isPastWebinar={showPastWebinars}
      />
    </div>
  );
};

export default WebinarsManager;