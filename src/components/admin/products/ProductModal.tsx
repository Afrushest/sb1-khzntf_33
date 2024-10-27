import React, { useState, useEffect } from 'react';
import { X, Upload } from 'lucide-react';
import { Product } from '../../../types/product';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    title: '',
    theme: 'platforms',
    description: '',
    image: '',
    videoUrl: '',
    pageLink: ''
  });

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title,
        theme: product.theme,
        description: product.description,
        image: product.image,
        videoUrl: product.videoUrl || '',
        pageLink: product.pageLink
      });
    }
  }, [product]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
    onClose();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle image upload
    const file = e.target.files?.[0];
    if (file) {
      // Implement image upload logic
      console.log('Uploading image:', file);
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle video upload
    const file = e.target.files?.[0];
    if (file) {
      // Implement video upload logic
      console.log('Uploading video:', file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

        {/* Modal */}
        <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {product ? 'Edit Product' : 'Add New Product'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Theme *
                </label>
                <select
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                  value={formData.theme}
                  onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                >
                  <option value="platforms">Platforms</option>
                  <option value="cloud">Cloud & Hybrid Cloud</option>
                  <option value="security">Security</option>
                  <option value="storage">Storage & Data</option>
                  <option value="automation">Automation & Management</option>
                  <option value="networking">Networking</option>
                  <option value="containers">Containers & Kubernetes</option>
                  <option value="integration">Integration & APIs</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description *
                </label>
                <textarea
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Image Upload
                </label>
                <div className="mt-1 flex items-center">
                  {formData.image && (
                    <img
                      src={formData.image}
                      alt="Product"
                      className="h-20 w-20 object-cover rounded-md mr-4"
                    />
                  )}
                  <label className="cursor-pointer bg-white px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <Upload className="h-5 w-5 inline-block mr-2" />
                    Upload Image
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Video Upload (Optional)
                </label>
                <div className="mt-1 flex items-center">
                  {formData.videoUrl && (
                    <video
                      src={formData.videoUrl}
                      className="h-20 w-20 object-cover rounded-md mr-4"
                    />
                  )}
                  <label className="cursor-pointer bg-white px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <Upload className="h-5 w-5 inline-block mr-2" />
                    Upload Video
                    <input
                      type="file"
                      className="hidden"
                      accept="video/*"
                      onChange={handleVideoUpload}
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Page Link *
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                  value={formData.pageLink}
                  onChange={(e) => setFormData({ ...formData, pageLink: e.target.value })}
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-linsoft-red rounded-md hover:bg-red-700"
                >
                  {product ? 'Update Product' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;