import React from 'react';

const Partnerships = () => {
  const partners = [
    {
      name: 'RedHat',
      logo: '/path/to/redhat-logo.png',
      description: 'Premier Partner for Enterprise Linux Solutions',
      level: 'Advanced Business Partner'
    },
    {
      name: 'AWS',
      logo: '/path/to/aws-logo.png',
      description: 'Certified Partner for Cloud Solutions',
      level: 'Advanced Consulting Partner'
    }
    // Add more partners as needed
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Partnerships</h2>
          <p className="mt-4 text-xl text-gray-600">
          Strategic partnerships that enable us to deliver excellence
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="h-16 w-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-linsoft-red font-semibold mb-4">{partner.level}</p>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;