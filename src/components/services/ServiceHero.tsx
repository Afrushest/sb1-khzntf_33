import React from 'react';
import { Play } from 'lucide-react';

const ServiceHero = () => {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
          alt="Service Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise IT Services & Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Comprehensive IT solutions tailored to your business needs, backed by certified experts
            and industry-leading partnerships.
          </p>
          <button className="inline-flex items-center bg-linsoft-red text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors">
            <Play className="h-5 w-5 mr-2" />
            Watch Overview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;