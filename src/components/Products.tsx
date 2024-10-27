import React from 'react';
import { Server, Cloud, Shield, Database } from 'lucide-react';

const Products = () => {
  const solutions = [
    {
      icon: <Server className="h-8 w-8 text-red-600" />,
      title: 'RedHat Enterprise Linux',
      description: 'Enterprise-grade Linux platform for modern datacenters'
    },
    {
      icon: <Cloud className="h-8 w-8 text-red-600" />,
      title: 'AWS Cloud Solutions',
      description: 'Scalable cloud infrastructure and services'
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: 'Security Solutions',
      description: 'Advanced security and compliance tools'
    },
    {
      icon: <Database className="h-8 w-8 text-red-600" />,
      title: 'Data Management',
      description: 'Enterprise data storage and analytics solutions'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Products & Solutions</h2>
          <p className="mt-4 text-xl text-gray-600">
            Enterprise-grade solutions for your business needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-center">{solution.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                {solution.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">{solution.description}</p>
              <button className="mt-6 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;