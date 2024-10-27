import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const ContactCTA = () => {
  return (
    <div className="mt-20 bg-gradient-to-r from-linsoft-red to-red-800 rounded-lg shadow-xl">
      <div className="px-8 py-12 text-center text-white">
        <Mail className="h-12 w-12 mx-auto mb-6" />
        <h2 className="text-2xl font-bold mb-4">Need Help Choosing the Right Solution?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Our experts are here to help you find the perfect solution for your business needs.
          Contact us for a personalized consultation.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-linsoft-red px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ContactCTA;