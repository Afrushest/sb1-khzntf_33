import React from 'react';
import DocumentsHeader from '../components/documents/DocumentsHeader';
import DocumentsList from '../components/documents/DocumentsList';

const DocumentsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DocumentsHeader />
        <DocumentsList />
      </div>
    </div>
  );
};

export default DocumentsPage;