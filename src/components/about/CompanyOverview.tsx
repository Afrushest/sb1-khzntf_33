import React from 'react';
import { Play } from 'lucide-react';

const CompanyOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">About LinSoft</h1>
          <p className="mt-4 text-xl text-gray-600">
            Your Trusted IT Partner in North Africa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-8">
              LinSoft is a leading provider of IT solutions, specializing in RedHat and AWS services 
              across Tunisia, Algeria, Morocco, and Libya. With over a decade of experience, we deliver 
              excellence in consulting, training, and technical support.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to empower organizations with cutting-edge IT solutions and expert training,
              enabling digital transformation and technological excellence across North Africa.
            </p>
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-linsoft-red mb-2">10+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-linsoft-red mb-2">500+</h3>
                <p className="text-gray-600">Clients Served</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-linsoft-red mb-2">1000+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-linsoft-red mb-2">4</h3>
                <p className="text-gray-600">Countries</p>
              </div>
            </div>
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