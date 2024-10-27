import React from 'react';
import { Award } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'RedHat Premier Partner',
      year: '2023',
      description: 'Recognized for excellence in RedHat solutions delivery'
    },
    {
      title: 'AWS Advanced Consulting Partner',
      year: '2023',
      description: 'Distinguished for AWS cloud expertise and implementation'
    },
    // Add more awards as needed
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Awards & Recognition</h2>
          <p className="mt-4 text-xl text-gray-600">
            Our commitment to excellence recognized by industry leaders
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <Award className="h-12 w-12 text-linsoft-red mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{award.year}</p>
              <p className="text-gray-600">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;