import React from 'react';
import { Shield, Users, Cog, Clock } from 'lucide-react';

const ServiceDescription = () => {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Advanced security solutions to protect your business assets and data'
    },
    {
      icon: Users,
      title: 'Expert Support Team',
      description: '24/7 access to certified professionals for technical support'
    },
    {
      icon: Cog,
      title: 'Custom Solutions',
      description: 'Tailored IT solutions designed for your specific business needs'
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Quick resolution of technical issues with minimal downtime'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive IT Services
          </h2>
          <p className="text-xl text-gray-600">
            We provide end-to-end IT solutions that help businesses transform, 
            innovate, and stay competitive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-linsoft-red mb-6">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceDescription;