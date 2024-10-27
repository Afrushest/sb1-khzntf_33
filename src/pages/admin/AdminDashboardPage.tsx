import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import DashboardOverview from '../../components/admin/DashboardOverview';
import EventsManager from '../../components/admin/events/EventsManager';
import WebinarsManager from '../../components/admin/webinars/WebinarsManager';
import BlogManager from '../../components/admin/BlogManager';
import NewsManager from '../../components/admin/news/NewsManager';
import DocumentsManager from '../../components/admin/documents/DocumentsManager';
import TestimonialsManager from '../../components/admin/TestimonialsManager';
import UsersManager from '../../components/admin/UsersManager';
import SettingsManager from '../../components/admin/SettingsManager';
import ProductsManager from '../../components/admin/products/ProductsManager';
import ServicesManager from '../../components/admin/services/ServicesManager';

const AdminDashboardPage = () => {
  // Check if admin is authenticated
  const authToken = localStorage.getItem('authToken');
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // Verify that the user is an admin
  if (!authToken || user.role !== 'admin') {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/products/*" element={<ProductsManager />} />
            <Route path="/services/*" element={<ServicesManager />} />
            <Route path="/events" element={<EventsManager />} />
            <Route path="/webinars" element={<WebinarsManager />} />
            <Route path="/blog/*" element={<BlogManager />} />
            <Route path="/news" element={<NewsManager />} />
            <Route path="/documents" element={<DocumentsManager />} />
            <Route path="/testimonials/*" element={<TestimonialsManager />} />
            <Route path="/users/*" element={<UsersManager />} />
            <Route path="/settings/*" element={<SettingsManager />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardPage;