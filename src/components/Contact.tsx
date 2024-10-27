import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const locations = [
    { country: 'Tunisia', address: 'Tunis' },
    { country: 'Algeria', address: 'Algiers' },
    { country: 'Morocco', address: 'Casablanca' },
    { country: 'Libya', address: 'Tripoli' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600">
            Get in touch with our team of experts
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Locations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <div key={index} className="flex items-start">
                  <MapPin className="h-6 w-6 text-red-600 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{location.country}</h4>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-red-600" />
                <span className="ml-4 text-gray-600">+216 XX XXX XXX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-red-600" />
                <span className="ml-4 text-gray-600">contact@linsoft.com</span>
              </div>
            </div>
          </div>

          <form className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;