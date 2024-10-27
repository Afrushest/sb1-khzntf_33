import React from 'react';
import CompanyOverview from '../components/about/CompanyOverview';
import Partnerships from '../components/about/Partnerships';
import Awards from '../components/about/Awards';
import Advertising from '../components/about/Advertising';
import LearningCenter from '../components/home/LearningCenter';
import Contact from '../components/Contact';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Company Overview with Video */}
      <CompanyOverview />

      {/* Partnerships */}
      <Partnerships />

      {/* Awards & Recognition */}
      <Awards />

      {/* Advertising Spots */}
      <Advertising />

      {/* Learning Center */}
      <LearningCenter />

      {/* Contact Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Contact />
      </div>
    </div>
  );
};

export default AboutPage;