import React, { useState } from 'react';
import { Plus, Download } from 'lucide-react';
import ServiceModal from './ServiceModal';
import ServicesList from './ServicesList';
import { Service } from '../../../types/service';

const ServicesManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data - replace with actual data later
  const [services] = useState<Service[]>([
    {
      id: '1',
      title: 'Cloud Consulting Services',
      description: 'Expert guidance on cloud infrastructure, DevOps, and digital transformation',
      image: 'https://example.com/cloud-consulting.jpg',
      videoUrl: ''
    },
    {
      id: '2',
      title: '24/7 Technical Support',
      description: 'Round-the-clock technical support and problem resolution',
      image: 'https://example.com/support.jpg',
      videoUrl: 'https://example.com/support-video.mp4'
    }
  ]);

  const handleExport = (format: 'excel' | 'csv') => {
    // Implement export functionality
    console.log(`Exporting services in ${format} format...`);
  };

  const handleAddService = () => {
    setSelectedService(null);
    setShowModal(true);
  };

  const handleEditService = (service: Service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleDeleteService = (serviceId: string) => {
    // Implement delete functionality
    console.log('Deleting service:', serviceId);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Services Management</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <button
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 inline-flex items-center"
              onClick={() => handleExport('excel')}
            >
              <Download className="h-5 w-5 mr-2" />
              Export
            </button>
          </div>
          <button
            onClick={handleAddService}
            className="flex items-center px-4 py-2 bg-linsoft-red text-white rounded-md hover:bg-red-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Service
          </button>
        </div>
      </div>

      <ServicesList
        services={services}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onEdit={handleEditService}
        onDelete={handleDeleteService}
      />

      {showModal && (
        <ServiceModal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedService(null);
          }}
          service={selectedService}
        />
      )}
    </div>
  );
};

export default ServicesManager;