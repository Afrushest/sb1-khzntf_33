import React from 'react';
import { Mail } from 'lucide-react';

const NewsletterSignup = () => {
  return (
    <section className="mt-20 bg-gradient-to-r from-linsoft-red to-red-800 rounded-lg shadow-xl">
      <div className="px-8 py-12 text-center text-white">
        <Mail className="h-12 w-12 mx-auto mb-6" />
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive updates about upcoming events and webinars.
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500"
            required
          />
          <button
            type="submit"
            className="bg-white text-linsoft-red px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;