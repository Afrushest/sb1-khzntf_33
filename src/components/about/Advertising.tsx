import React from 'react';
import { Play } from 'lucide-react';

const Advertising = () => {
  const spots = [
    {
      title: 'LinSoft Corporate Overview',
      thumbnail: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80',
      duration: '2:15'
    },
    {
      title: 'Training Success Stories',
      thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
      duration: '1:45'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">LinSoft in Action</h2>
          <p className="mt-4 text-xl text-gray-600">
            Watch our latest promotional spots and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {spots.map((spot, index) => (
            <div key={index} className="relative group">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={spot.thumbnail}
                  alt={spot.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-linsoft-red ml-1" />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{spot.title}</h3>
                <p className="text-gray-600">{spot.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advertising;