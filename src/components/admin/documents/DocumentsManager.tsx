import React, { useState } from 'react';
import { Plus, Download, Search } from 'lucide-react';
import DocumentsList from './DocumentsList';
import DocumentModal from './DocumentModal';
import { Document } from '../../../types/document';

const DocumentsManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    resourceType: '',
    theme: '',
    displayPage: ''
  });

  // Sample data - replace with actual data later
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: '1',
      title: 'RedHat Enterprise Linux Administration Guide',
      resourceType: 'training',
      theme: 'Linux',
      displayPage: '/training/redhat',
      fileUrl: '/documents/rhel-admin-guide.pdf',
      fileName: 'rhel-admin-guide.pdf',
      fileSize: '2.5 MB',
      uploadDate: '2024-03-01',
      downloadCount: 150
    }
  ]);

  const handleExport = () => {
    // Implement export functionality
    console.log('Exporting documents data...');
  };

  const handleAddDocument = () => {
    setSelectedDocument(null);
    setShowModal(true);
  };

  const handleEditDocument = (document: Document) => {
    setSelectedDocument(document);
    setShowModal(true);
  };

  const handleSaveDocument = (documentData: Partial<Document>) => {
    if (selectedDocument) {
      // Update existing document
      setDocuments(documents.map(doc => 
        doc.id === selectedDocument.id ? { ...doc, ...documentData } : doc
      ));
    } else {
      // Add new document
      const newDocument: Document = {
        id: String(Date.now()),
        downloadCount: 0,
        uploadDate: new Date().toISOString().split('T')[0],
        ...documentData as Omit<Document, 'id' | 'downloadCount' | 'uploadDate'>
      };
      setDocuments([...documents, newDocument]);
    }
    setShowModal(false);
  };

  const handleDeleteDocument = (documentId: string) => {
    setDocuments(documents.filter(doc => doc.id !== documentId));
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.theme.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = !filters.resourceType || doc.resourceType === filters.resourceType;
    const matchesTheme = !filters.theme || doc.theme === filters.theme;
    const matchesPage = !filters.displayPage || doc.displayPage === filters.displayPage;

    return matchesSearch && matchesType && matchesTheme && matchesPage;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Documents Management</h1>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 inline-flex items-center"
            onClick={handleExport}
          >
            <Download className="h-5 w-5 mr-2" />
            Export Data
          </button>
          <button
            onClick={handleAddDocument}
            className="flex items-center px-4 py-2 bg-linsoft-red text-white rounded-md hover:bg-red-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Document
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search documents by title or theme..."
            className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Resource Type
            </label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
              value={filters.resourceType}
              onChange={(e) => setFilters({ ...filters, resourceType: e.target.value })}
            >
              <option value="">All Types</option>
              <option value="training">Training</option>
              <option value="exam">Exam</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Theme
            </label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
              value={filters.theme}
              onChange={(e) => setFilters({ ...filters, theme: e.target.value })}
            >
              <option value="">All Themes</option>
              <option value="Linux">Linux</option>
              <option value="Cloud">Cloud</option>
              <option value="DevOps">DevOps</option>
              <option value="Security">Security</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Display Page
            </label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
              value={filters.displayPage}
              onChange={(e) => setFilters({ ...filters, displayPage: e.target.value })}
            >
              <option value="">All Pages</option>
              <option value="/training/redhat">RedHat Training</option>
              <option value="/training/aws">AWS Training</option>
              <option value="/resources">Resources</option>
            </select>
          </div>
        </div>

        <DocumentsList
          documents={filteredDocuments}
          onEdit={handleEditDocument}
          onDelete={handleDeleteDocument}
        />
      </div>

      <DocumentModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedDocument(null);
        }}
        onSave={handleSaveDocument}
        document={selectedDocument}
      />
    </div>
  );
};

export default DocumentsManager;