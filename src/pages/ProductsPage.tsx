import React, { useState } from 'react';
import ProductThemes from '../components/products/ProductThemes';
import ProductList from '../components/products/ProductList';
import ContactCTA from '../components/shared/ContactCTA';

const ProductsPage = () => {
  const [activeTheme, setActiveTheme] = useState('platforms');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Products & Solutions</h1>
          <p className="mt-4 text-xl text-gray-600">
            Enterprise-grade solutions tailored for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Theme Navigation */}
          <ProductThemes activeTheme={activeTheme} onThemeChange={setActiveTheme} />

          {/* Product List */}
          <div className="lg:col-span-3">
            <ProductList theme={activeTheme} />
          </div>
        </div>

        {/* Contact CTA */}
        <ContactCTA />
      </div>
    </div>
  );
};

export default ProductsPage;