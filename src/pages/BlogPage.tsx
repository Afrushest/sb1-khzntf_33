import React from 'react';
import BlogHeader from '../components/blog/BlogHeader';
import LatestPosts from '../components/blog/LatestPosts';
import BlogList from '../components/blog/BlogList';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogHeader />
        <LatestPosts />
        <BlogList />
      </div>
    </div>
  );
};

export default BlogPage;