import React from 'react';
import { Award, Shield, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-16 bg-gradient-to-r from-linsoft-red to-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Your Trusted IT Partner in North Africa
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-red-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Certified RedHat & AWS Partner delivering excellence across Tunisia, Algeria, Morocco, and Libya
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center text-white">
              <Award className="h-6 w-6 mr-2" />
              <span>Certified Partner</span>
            </div>
            <div className="flex items-center text-white">
              <Shield className="h-6 w-6 mr-2" />
              <span>Expert Support</span>
            </div>
            <div className="flex items-center text-white">
              <Globe className="h-6 w-6 mr-2" />
              <span>Regional Presence</span>
            </div>
          </div>
          <div className="mt-10">
            <a 
              href="#contact" 
              className="inline-block bg-white text-linsoft-red px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;