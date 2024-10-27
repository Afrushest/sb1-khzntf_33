import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Documents from '../components/resources/Documents';
import Testimonials from '../components/resources/Testimonials';
import News from '../components/resources/News';
import Blog from '../components/resources/Blog';

const ResourcesPage = () => {
  return (
    <div className="pt-16">
      <Routes>
        <Route path="/" element={<Documents />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default ResourcesPage;