import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Webinar, WebinarInput } from '../../../types/webinar';

interface WebinarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (webinarData: WebinarInput) => void;
  webinar?: Webinar | null;
  isPastWebinar: boolean;
}

const WebinarModal: React.FC<WebinarModalProps> = ({
  isOpen,
  onClose,
  onSave,
  webinar,
  isPastWebinar
}) => {
  const [formData, setFormData] = useState<WebinarInput>({
    title: '',
    date: '',
    time: '',
    theme: '',
    description: '',
    agenda: '',
    maxParticipants: 0,
    hasWaitingList: false
  });

  useEffect(() => {
    if (webinar) {
      // Initialize form with existing webinar data
      setFormData({
        title: webinar.title,
        date: webinar.date,
        time: webinar.time,
        theme: webinar.theme,
        description: webinar.description || '',
        agenda: webinar.agenda || '',
        maxParticipants: webinar.maxParticipants,
        hasWaitingList: webinar.hasWaitingList
      });
    } else {
      // Reset form for new webinar
      setFormData({
        title: '',
        date: '',
        time: '',
        theme: '',
        description: '',
        agenda: '',
        maxParticipants: 0,
        hasWaitingList: false
      });
    }
  }, [webinar]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create a clean serializable object
    const cleanData: WebinarInput = {
      title: formData.title.trim(),
      date: formData.date,
      time: formData.time,
      theme: formData.theme.trim(),
      description: formData.description.trim() || undefined,
      agenda: formData.agenda.trim() || undefined,
      maxParticipants: Math.max(0, Number(formData.maxParticipants)),
      hasWaitingList: Boolean(formData.hasWaitingList)
    };

    onSave(cleanData);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

        <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {webinar ? 'Edit Webinar' : 'Add New Webinar'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Time *
                  </label>
                  <input
                    type="time"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Theme *
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                  value={formData.theme}
                  onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Agenda
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                  value={formData.agenda}
                  onChange={(e) => setFormData({ ...formData, agenda: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Maximum Participants *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                  value={formData.maxParticipants}
                  onChange={(e) => setFormData({ ...formData, maxParticipants: parseInt(e.target.value) || 0 })}
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="hasWaitingList"
                  className="h-4 w-4 text-linsoft-red focus:ring-linsoft-red border-gray-300 rounded"
                  checked={formData.hasWaitingList}
                  onChange={(e) => setFormData({ ...formData, hasWaitingList: e.target.checked })}
                />
                <label htmlFor="hasWaitingList" className="ml-2 block text-sm text-gray-900">
                  Enable Waiting List
                </label>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-linsoft-red rounded-md hover:bg-red-700"
                >
                  {webinar ? 'Update Webinar' : 'Create Webinar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarModal;