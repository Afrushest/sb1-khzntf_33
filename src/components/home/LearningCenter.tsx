import React from 'react';
import { GraduationCap } from 'lucide-react';

const LearningCenter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-linsoft-red to-red-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-10 w-10 mr-4" />
              <h2 className="text-3xl font-bold">LinSoft Learning Center</h2>
            </div>
            <p className="text-lg mb-8">
              Advance your career with our comprehensive training programs. Get certified in 
              RedHat, AWS, and other leading technologies through our state-of-the-art learning center.
            </p>
            <a
              href="https://learning.linsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-linsoft-red px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Explore Courses
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
              alt="Learning Center"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningCenter;