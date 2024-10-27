import React from 'react';

const TrainingForm = () => {
  return (
    <form className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone *
          </label>
          <input
            type="tel"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country *
          </label>
          <select
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
          >
            <option value="">Select a country</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Algeria">Algeria</option>
            <option value="Morocco">Morocco</option>
            <option value="Libya">Libya</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Training Course *
          </label>
          <select
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
          >
            <option value="">Select a course</option>
            <option value="rhel">Red Hat Enterprise Linux</option>
            <option value="openshift">OpenShift Administration</option>
            <option value="aws-arch">AWS Solutions Architect</option>
            <option value="aws-dev">AWS Developer</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Number of Participants *
          </label>
          <input
            type="number"
            min="1"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Additional Information
          </label>
          <textarea
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-linsoft-red text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
        >
          Request Training Information
        </button>
      </div>
    </form>
  );
};

export default TrainingForm;