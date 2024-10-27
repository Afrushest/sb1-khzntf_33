import React from 'react';

const ClientLogos = () => {
  const clients = [
    { name: 'Client 1', logo: '/path/to/client1-logo.png' },
    { name: 'Client 2', logo: '/path/to/client2-logo.png' },
    { name: 'Client 3', logo: '/path/to/client3-logo.png' },
    { name: 'Client 4', logo: '/path/to/client4-logo.png' },
    { name: 'Client 5', logo: '/path/to/client5-logo.png' },
    { name: 'Client 6', logo: '/path/to/client6-logo.png' }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Trusted by Leading Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={client.logo}
                alt={`${client.name} Logo`}
                className="max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;