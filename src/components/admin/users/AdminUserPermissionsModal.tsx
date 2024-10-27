import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface AdminUser {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  country: string;
  permissions: string[];
}

interface AdminUserPermissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: AdminUser | null;
}

const AdminUserPermissionsModal: React.FC<AdminUserPermissionsModalProps> = ({
  isOpen,
  onClose,
  user
}) => {
  const [permissions, setPermissions] = useState<{ [key: string]: boolean }>({
    dashboard: false,
    users: false,
    events: false,
    blog: false,
    news: false,
    documents: false,
    testimonials: false,
    settings: false
  });

  useEffect(() => {
    if (user?.permissions) {
      const userPerms = user.permissions.reduce((acc, perm) => {
        acc[perm] = true;
        return acc;
      }, {} as { [key: string]: boolean });
      setPermissions({ ...permissions, ...userPerms });
    }
  }, [user]);

  if (!isOpen || !user) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle permissions update
    console.log('Updated permissions:', permissions);
    onClose();
  };

  const permissionGroups = [
    {
      title: 'Content Management',
      permissions: [
        { key: 'blog', label: 'Blog Management' },
        { key: 'news', label: 'News Management' },
        { key: 'documents', label: 'Documents Management' },
        { key: 'testimonials', label: 'Testimonials Management' }
      ]
    },
    {
      title: 'Event Management',
      permissions: [
        { key: 'events', label: 'Events & Webinars' }
      ]
    },
    {
      title: 'User Management',
      permissions: [
        { key: 'users', label: 'User Administration' }
      ]
    },
    {
      title: 'System',
      permissions: [
        { key: 'dashboard', label: 'Dashboard Access' },
        { key: 'settings', label: 'System Settings' }
      ]
    }
  ];

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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              User Permissions
            </h2>
            <p className="text-gray-600 mb-6">
              {user.firstName} {user.lastName} - {user.role} ({user.country})
            </p>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {permissionGroups.map((group) => (
                  <div key={group.title} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {group.title}
                    </h3>
                    <div className="space-y-3">
                      {group.permissions.map((perm) => (
                        <div key={perm.key} className="flex items-center">
                          <input
                            type="checkbox"
                            id={perm.key}
                            checked={permissions[perm.key]}
                            onChange={(e) => setPermissions({
                              ...permissions,
                              [perm.key]: e.target.checked
                            })}
                            className="h-4 w-4 text-linsoft-red focus:ring-linsoft-red border-gray-300 rounded"
                          />
                          <label
                            htmlFor={perm.key}
                            className="ml-2 block text-sm text-gray-900"
                          >
                            {perm.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end space-x-4">
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
                  Update Permissions
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserPermissionsModal;