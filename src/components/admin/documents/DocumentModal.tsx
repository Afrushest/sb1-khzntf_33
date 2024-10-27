import React, { useState, useEffect } from 'react';
import { X, Upload } from 'lucide-react';
import { Document } from '../../../types/document';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (documentData: Partial<Document>) => void;
  document?: Document | null;
}

const DocumentModal: React.FC<DocumentModalProps> = ({
  isOpen,
  onClose,
  onSave,
  document
}) => {
  const [formData, setFormData] = useState<Partial<Document>>({
    title: '',
    resourceType: 'training',
    theme: '',
    displayPage: '',
    fileUrl: '',
    fileName: '',
    fileSize: ''
  });

  useEffect(() => {
    if (document) {
      setFormData(document);
    } else {
      setFormData({
        title: '',
        resourceType: 'training',
        theme: '',
        displayPage: '',
        fileUrl: '',
        fileName: '',
        fileSize: ''
      });
    }
  }, [document]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // For demo purposes, using placeholder values
      setFormData({
        ...formData,
        fileUrl: '/documents/' + file.name,
        fileName: file.name,
        fileSize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`
      });
    }
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
              {document ? 'Edit Document' : 'Add New Document'}
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
                    Resource Type *
                  </label>
                  <select
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                    value={formData.resourceType}
                    onChange={(e) => setFormData({ ...formData, resourceType: e.target.value as Document['resourceType'] })}
                  >
                    <option value="training">Training</option>
                    <option value="exam">Exam</option>
                    <option value="other">Other</option>
                  </select>
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
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Display Page *
                </label>
                <select
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                  value={formData.displayPage}
                  onChange={(e) => setFormData({ ...formData, displayPage: e.target.value })}
                >
                  <option value="">Select a page</option>
                  <option value="/training/redhat">RedHat Training</option>
                  <option value="/training/aws">AWS Training</option>
                  <option value="/resources">Resources</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Document File *
                </label>
                <div className="flex items-center">
                  {formData.fileName && (
                    <div className="mr-4">
                      <p className="text-sm font-medium text-gray-900">{formData.fileName}</p>
                      <p className="text-sm text-gray-500">{formData.fileSize}</p>
                    </div>
                  )}
                  <label className="cursor-pointer bg-white px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <Upload className="h-5 w-5 inline-block mr-2" />
                    Upload File
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
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
                  {document ? 'Update Document' : 'Add Document'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentModal;