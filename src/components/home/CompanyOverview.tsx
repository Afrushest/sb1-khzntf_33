import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const CompanyOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Your Trusted IT Partner in North Africa
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              LinSoft is a leading provider of IT solutions, specializing in RedHat and AWS services 
              across Tunisia, Algeria, Morocco, and Libya. With over a decade of experience, we deliver 
              excellence in consulting, training, and technical support.
            </p>
            <Link
              to="/about"
              className="inline-block bg-linsoft-red text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
          
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
                alt="LinSoft Office"
                className="w-full h-full object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-opacity group">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 text-linsoft-red ml-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;