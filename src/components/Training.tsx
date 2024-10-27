import React from 'react';
import { BookOpen, Cloud } from 'lucide-react';

const Training = () => {
  const courses = [
    {
      category: 'RedHat Courses',
      items: [
        'Red Hat System Administration I (RH124)',
        'Red Hat System Administration II (RH134)',
        'Red Hat Certified Engineer (RHCE)',
        'Red Hat OpenShift Administration'
      ]
    },
    {
      category: 'AWS Courses',
      items: [
        'AWS Solutions Architect Associate',
        'AWS Developer Associate',
        'AWS SysOps Administrator',
        'AWS Security Specialty'
      ]
    }
  ];

  return (
    <section id="training" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Professional Training</h2>
          <p className="mt-4 text-xl text-gray-600">
            Certified training programs to advance your IT career
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {courses.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                {index === 0 ? (
                  <BookOpen className="h-8 w-8 text-red-600" />
                ) : (
                  <Cloud className="h-8 w-8 text-red-600" />
                )}
                <h3 className="ml-3 text-2xl font-semibold text-gray-900">
                  {category.category}
                </h3>
              </div>
              <ul className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;