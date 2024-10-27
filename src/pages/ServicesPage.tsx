import React from 'react';
import ServiceHero from '../components/services/ServiceHero';
import ServiceDescription from '../components/services/ServiceDescription';
import OtherServices from '../components/services/OtherServices';
import ServiceTestimonials from '../components/services/ServiceTestimonials';
import ContactCTA from '../components/shared/ContactCTA';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image/Video */}
      <ServiceHero />

      {/* Service Description */}
      <ServiceDescription />

      {/* Other Services */}
      <OtherServices />

      {/* Testimonials */}
      <ServiceTestimonials />

      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <ContactCTA />
      </div>
    </div>
  );
};

export default ServicesPage;