import React from 'react';
import { FileText, Download } from 'lucide-react';
import SearchBar from '../SearchBar';

const Documents = () => {
  const documents = [
    {
      title: 'RedHat Training Guide 2024',
      type: 'Training Details',
      category: 'DevOps',
      date: '2024-02-15'
    },
    {
      title: 'AWS Certification Path',
      type: 'Certification Guide',
      category: 'Cloud',
      date: '2024-02-10'
    },
    {
      title: 'Enterprise Linux Administration',
      type: 'Course Material',
      category: 'Linux',
      date: '2024-02-05'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Documents</h1>
          <p className="mt-4 text-xl text-gray-600">
            Access our library of technical documentation and resources
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <SearchBar placeholder="Search documents..." onSearch={() => {}} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="flex items-start">
                <FileText className="h-8 w-8 text-linsoft-red" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{doc.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{doc.type}</p>
                  <p className="text-sm text-gray-500">Category: {doc.category}</p>
                  <p className="text-sm text-gray-500">Published: {doc.date}</p>
                </div>
              </div>
              <button className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-linsoft-red text-linsoft-red rounded-md hover:bg-linsoft-red hover:text-white transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;