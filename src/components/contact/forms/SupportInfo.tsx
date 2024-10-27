import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const SupportInfo = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Customer Support Contact Information
        </h3>

        <div className="space-y-6">
          <div className="flex items-start">
            <Phone className="h-6 w-6 text-linsoft-red mt-1" />
            <div className="ml-4">
              <h4 className="text-lg font-semibold text-gray-900">Phone Support</h4>
              <p className="text-gray-600">Tunisia: +216 XX XXX XXX</p>
              <p className="text-gray-600">Algeria: +213 XX XXX XXX</p>
              <p className="text-gray-600">Morocco: +212 XX XXX XXX</p>
              <p className="text-gray-600">Libya: +218 XX XXX XXX</p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="h-6 w-6 text-linsoft-red mt-1" />
            <div className="ml-4">
              <h4 className="text-lg font-semibold text-gray-900">Email Support</h4>
              <p className="text-gray-600">Technical Support: support@linsoft.com</p>
              <p className="text-gray-600">Customer Service: customercare@linsoft.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="h-6 w-6 text-linsoft-red mt-1" />
            <div className="ml-4">
              <h4 className="text-lg font-semibold text-gray-900">Support Hours</h4>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-gray-600">24/7 Emergency Support for Enterprise Customers</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Enterprise Support Portal
          </h4>
          <p className="text-gray-600 mb-4">
            Enterprise customers can access our support portal for ticket management
            and technical resources.
          </p>
          <a
            href="#"
            className="inline-block bg-linsoft-red text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            Access Support Portal
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupportInfo;