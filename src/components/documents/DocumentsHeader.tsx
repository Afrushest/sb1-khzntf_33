import React from 'react';
import { Search } from 'lucide-react';

const DocumentsHeader = () => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Resource Library</h1>
        <p className="mt-4 text-xl text-gray-600">
          Access our comprehensive collection of technical documentation and resources
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search documents by title, topic, or type..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-linsoft-red focus:border-transparent"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default DocumentsHeader;