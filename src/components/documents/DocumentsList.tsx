import React, { useState } from 'react';
import { FileText, Download, Calendar, Tag } from 'lucide-react';
import DocumentFilters from './DocumentFilters';

interface Document {
  id: string;
  title: string;
  type: string;
  category: string;
  date: string;
  size: string;
  description: string;
  downloadUrl: string;
}

const DocumentsList = () => {
  const [activeFilters, setActiveFilters] = useState({
    type: '',
    category: '',
    date: ''
  });

  const documents: Document[] = [
    {
      id: '1',
      title: 'RedHat Enterprise Linux 9.0 Administration Guide',
      type: 'Technical Guide',
      category: 'RedHat',
      date: '2024-02-15',
      size: '2.5 MB',
      description: 'Comprehensive guide for RHEL 9.0 system administration and management.',
      downloadUrl: '#'
    },
    {
      id: '2',
      title: 'AWS Cloud Migration Best Practices',
      type: 'Whitepaper',
      category: 'AWS',
      date: '2024-02-10',
      size: '1.8 MB',
      description: 'Strategic guide for planning and executing successful cloud migrations.',
      downloadUrl: '#'
    },
    {
      id: '3',
      title: 'Enterprise Security Framework',
      type: 'Datasheet',
      category: 'Security',
      date: '2024-02-05',
      size: '1.2 MB',
      description: 'Overview of our enterprise security solutions and frameworks.',
      downloadUrl: '#'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Filters */}
      <div className="lg:col-span-1">
        <DocumentFilters
          activeFilters={activeFilters}
          onFilterChange={setActiveFilters}
        />
      </div>

      {/* Documents Grid */}
      <div className="lg:col-span-3">
        <div className="grid grid-cols-1 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FileText className="h-8 w-8 text-linsoft-red" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{doc.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FileText className="h-4 w-4 mr-2" />
                      {doc.type}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Tag className="h-4 w-4 mr-2" />
                      {doc.category}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {doc.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Download className="h-4 w-4 mr-2" />
                      {doc.size}
                    </div>
                  </div>

                  <a
                    href={doc.downloadUrl}
                    className="inline-flex items-center px-4 py-2 border border-linsoft-red text-linsoft-red rounded-md hover:bg-linsoft-red hover:text-white transition-colors"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentsList;