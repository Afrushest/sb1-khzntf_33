import React from 'react';

const PartnerLogos = () => {
  const partners = [
    { name: 'RedHat', logo: '/path/to/redhat-logo.png', url: 'https://www.redhat.com' },
    { name: 'AWS', logo: '/path/to/aws-logo.png', url: 'https://aws.amazon.com' },
    // Add more partners as needed
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Our Strategic Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 hover:opacity-80 transition-opacity"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="max-h-12 w-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;