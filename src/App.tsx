import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import TrainingPage from './pages/TrainingPage';
import EventsPage from './pages/EventsPage';
import WebinarsPage from './pages/WebinarsPage';
import EventDetailPage from './pages/EventDetailPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';

function App() {
  const isAdminRoute = window.location.pathname.startsWith('/admin');

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {!isAdminRoute && <Navbar />}
        <main className={`flex-grow ${!isAdminRoute ? 'pt-20' : ''}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/*" element={<ProductsPage />} />
            <Route path="/services/*" element={<ServicesPage />} />
            <Route path="/training/*" element={<TrainingPage />} />
            <Route path="/events/*" element={<EventsPage />} />
            <Route path="/webinars/*" element={<WebinarsPage />} />
            <Route path="/event/:id" element={<EventDetailPage />} />
            <Route path="/resources/*" element={<ResourcesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/dashboard/*" element={<AdminDashboardPage />} />
          </Routes>
        </main>
        {!isAdminRoute && <Footer />}
      </div>
    </Router>
  );
}

export default App;