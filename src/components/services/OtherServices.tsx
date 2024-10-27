import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, Database, Terminal } from 'lucide-react';

const OtherServices = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Comprehensive cloud solutions including migration, optimization, and management',
      link: '/services/cloud'
    },
    {
      icon: Shield,
      title: 'Security Services',
      description: 'Enterprise security solutions to protect your digital assets',
      link: '/services/security'
    },
    {
      icon: Database,
      title: 'Infrastructure Services',
      description: 'Modern infrastructure solutions for optimal performance',
      link: '/services/infrastructure'
    },
    {
      icon: Terminal,
      title: 'DevOps Services',
      description: 'Streamline your development and operations processes',
      link: '/services/devops'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
          Explore Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <Icon className="h-12 w-12 text-linsoft-red mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-linsoft-red hover:text-red-700 font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;