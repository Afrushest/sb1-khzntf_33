import React from 'react';
import { CloudCog, Shield, Headphones, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <CloudCog className="h-8 w-8 text-red-600" />,
      title: 'Consulting Services',
      description: 'Expert guidance on cloud infrastructure, DevOps, and digital transformation'
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: 'Maintenance',
      description: 'Proactive system maintenance and optimization for peak performance'
    },
    {
      icon: <Headphones className="h-8 w-8 text-red-600" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and problem resolution'
    },
    {
      icon: <Settings className="h-8 w-8 text-red-600" />,
      title: 'Solution Implementation',
      description: 'End-to-end implementation of RedHat and AWS solutions'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              {service.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;