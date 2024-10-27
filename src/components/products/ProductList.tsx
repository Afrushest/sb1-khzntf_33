import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface ProductsByTheme {
  [key: string]: Product[];
}

interface ProductListProps {
  theme: string;
}

const ProductList: React.FC<ProductListProps> = ({ theme }) => {
  // This would typically come from an API or database
  const products: ProductsByTheme = {
    platforms: [
      {
        id: 'rhel',
        name: 'Red Hat Enterprise Linux',
        description: 'The world\'s leading enterprise Linux platform',
        image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80'
      },
      {
        id: 'rhv',
        name: 'Red Hat Virtualization',
        description: 'Open, software-defined virtualization platform',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80'
      }
    ],
    cloud: [
      {
        id: 'aws',
        name: 'AWS Cloud Solutions',
        description: 'Complete cloud infrastructure and services',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
      }
    ],
    security: [],
    storage: [],
    automation: [],
    networking: [],
    containers: [],
    integration: []
  };

  const currentProducts = products[theme] || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {currentProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="h-48 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <Link
              to={`/products/${product.id}`}
              className="inline-flex items-center text-linsoft-red hover:text-red-700 font-semibold"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;