import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Calendar,
  FileText,
  Newspaper,
  FolderOpen,
  MessageSquare,
  Users,
  Settings,
  Package,
  Briefcase,
  Video,
  ClipboardList,
  Mail
} from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Package, label: 'Products', path: '/admin/dashboard/products' },
    { icon: Briefcase, label: 'Services', path: '/admin/dashboard/services' },
    { icon: Calendar, label: 'Events', path: '/admin/dashboard/events' },
    { icon: Video, label: 'Webinars', path: '/admin/dashboard/webinars' },
    { icon: ClipboardList, label: 'Registrations', path: '/admin/dashboard/registrations' },
    { icon: Mail, label: 'Email Templates', path: '/admin/dashboard/emails' },
    { icon: FileText, label: 'Blog', path: '/admin/dashboard/blog' },
    { icon: Newspaper, label: 'News', path: '/admin/dashboard/news' },
    { icon: FolderOpen, label: 'Documents', path: '/admin/dashboard/documents' },
    { icon: MessageSquare, label: 'Testimonials', path: '/admin/dashboard/testimonials' },
    { icon: Users, label: 'Users', path: '/admin/dashboard/users' },
    { icon: Settings, label: 'Settings', path: '/admin/dashboard/settings' }
  ];

  return (
    <aside className="w-64 bg-white shadow-sm min-h-screen">
      <nav className="mt-8 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-red-50 text-linsoft-red'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;