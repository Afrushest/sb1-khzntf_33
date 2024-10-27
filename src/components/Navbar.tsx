import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Globe, Search, Menu, X, LogIn } from 'lucide-react';
import AdminLoginModal from './AdminLoginModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      label: 'Products & Solutions',
      path: '/products',
      dropdown: [
        { label: 'Consulting', path: '/products/consulting' },
        { label: 'Support & Maintenance', path: '/products/support' },
        { label: 'IT Integration & Solutions', path: '/products/integration' }
      ]
    },
    {
      label: 'Services',
      path: '/services',
      dropdown: [
        { label: 'Service 1', path: '/services/1' },
        { label: 'Service 2', path: '/services/2' },
        { label: 'Service 3', path: '/services/3' }
      ]
    },
    {
      label: 'Training & Certification',
      path: '/training',
      dropdown: [
        { label: 'RedHat Training', path: '/training/redhat' },
        { label: 'AWS Training', path: '/training/aws' },
        { label: 'Certification Paths', path: '/training/certification' }
      ]
    },
    {
      label: 'Events & Webinars',
      path: '/events',
      dropdown: [
        { label: 'Upcoming Events', path: '/events/upcoming' },
        { label: 'Past Events', path: '/events/past' },
        { label: 'Upcoming Webinars', path: '/events/webinars/upcoming' },
        { label: 'Past Webinars', path: '/events/webinars/past' }
      ]
    },
    {
      label: 'Resources',
      path: '/resources',
      dropdown: [
        { label: 'Documents', path: '/resources/documents' },
        { label: 'Customer Testimonials', path: '/resources/testimonials' },
        { label: 'News', path: '/resources/news' },
        { label: 'Blog', path: '/resources/blog' }
      ]
    },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleDropdown = (path: string) => {
    setActiveDropdown(activeDropdown === path ? null : path);
  };

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <img src="/linsoft-logo.png" alt="Linsoft" className="h-12" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              {navItems.map((item) => (
                <div key={item.path} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2 text-sm ${
                      isActive(item.path)
                        ? 'text-linsoft-red'
                        : 'text-gray-700 hover:text-linsoft-red'
                    }`}
                    onClick={(e) => {
                      if (item.dropdown) {
                        e.preventDefault();
                        handleDropdown(item.path);
                      }
                    }}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </Link>
                  
                  {item.dropdown && activeDropdown === item.path && (
                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block px-4 py-2 text-sm ${
                            isActive(subItem.path)
                              ? 'text-linsoft-red bg-gray-50'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side items */}
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <button className="flex items-center text-gray-700 hover:text-linsoft-red text-sm">
                <Globe className="h-5 w-5" />
                <span className="ml-1">English</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <button className="text-gray-700 hover:text-linsoft-red">
                <Search className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setShowLoginModal(true)}
                className="flex items-center text-gray-700 hover:text-linsoft-red"
              >
                <LogIn className="h-5 w-5" />
                <span className="ml-1">Connect</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-linsoft-red"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 text-sm ${
                      isActive(item.path)
                        ? 'text-linsoft-red'
                        : 'text-gray-700 hover:text-linsoft-red'
                    }`}
                    onClick={() => {
                      if (!item.dropdown) {
                        setIsOpen(false);
                      } else {
                        handleDropdown(item.path);
                      }
                    }}
                  >
                    <div className="flex items-center justify-between">
                      {item.label}
                      {item.dropdown && <ChevronDown className="h-4 w-4" />}
                    </div>
                  </Link>
                  
                  {item.dropdown && activeDropdown === item.path && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block px-3 py-2 text-sm ${
                            isActive(subItem.path)
                              ? 'text-linsoft-red'
                              : 'text-gray-700 hover:text-linsoft-red'
                          }`}
                          onClick={() => {
                            setIsOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="px-3 py-2 border-t border-gray-200 mt-4">
                <button className="flex items-center text-gray-700 hover:text-linsoft-red text-sm">
                  <Globe className="h-5 w-5" />
                  <span className="ml-1">English</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    setShowLoginModal(true);
                  }}
                  className="flex items-center text-gray-700 hover:text-linsoft-red mt-4"
                >
                  <LogIn className="h-5 w-5" />
                  <span className="ml-1">Connect</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <AdminLoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </>
  );
};

export default Navbar;