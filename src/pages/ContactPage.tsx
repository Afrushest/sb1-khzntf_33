import React from 'react';
import ContactTabs from '../components/contact/ContactTabs';
import ContactMap from '../components/contact/ContactMap';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-600">
            Get in touch with our team of experts
          </p>
        </div>

        {/* Contact Forms Tabs */}
        <ContactTabs />

        {/* Office Locations Map */}
        <ContactMap />
      </div>
    </div>
  );
};

export default ContactPage;