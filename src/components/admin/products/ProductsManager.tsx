import React, { useState } from 'react';
import { Plus, Download } from 'lucide-react';
import ProductModal from './ProductModal';
import ProductsList from './ProductsList';
import { Product } from '../../../types/product';

const ProductsManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data - replace with actual data later
  const [products] = useState<Product[]>([
    {
      id: '1',
      title: 'RedHat Enterprise Linux',
      theme: 'platforms',
      description: 'Enterprise-grade Linux platform for modern datacenters',
      image: 'https://example.com/rhel.jpg',
      pageLink: '/products/rhel',
      videoUrl: ''
    },
    {
      id: '2',
      title: 'AWS Cloud Solutions',
      theme: 'cloud',
      description: 'Complete cloud infrastructure and services',
      image: 'https://example.com/aws.jpg',
      pageLink: '/products/aws',
      videoUrl: 'https://example.com/aws-video.mp4'
    }
  ]);

  const handleExport = (format: 'excel' | 'csv') => {
    // Implement export functionality
    console.log(`Exporting products in ${format} format...`);
  };

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setShowModal(true);
  };

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleDeleteProduct = (productId: string) => {
    // Implement delete functionality
    console.log('Deleting product:', productId);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Products & Solutions Management</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <button
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 inline-flex items-center"
              onClick={() => handleExport('excel')}
            >
              <Download className="h-5 w-5 mr-2" />
              Export
            </button>
            {/* Export options dropdown could be added here */}
          </div>
          <button
            onClick={handleAddProduct}
            className="flex items-center px-4 py-2 bg-linsoft-red text-white rounded-md hover:bg-red-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Product
          </button>
        </div>
      </div>

      <ProductsList
        products={products}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />

      {showModal && (
        <ProductModal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedProduct(null);
          }}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default ProductsManager;