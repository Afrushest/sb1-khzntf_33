import React, { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogFilters from './BlogFilters';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  summary: string;
  image: string;
}

const BlogList = () => {
  const [activeFilters, setActiveFilters] = useState({
    category: '',
    author: '',
    date: ''
  });

  const blogPosts: BlogPost[] = [
    {
      id: 4,
      title: 'Automating Infrastructure with Ansible',
      author: 'John Smith',
      date: 'February 25, 2024',
      category: 'DevOps',
      summary: 'Learn how to automate your infrastructure deployment using Ansible.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'Kubernetes Best Practices',
      author: 'Sarah Johnson',
      date: 'February 20, 2024',
      category: 'DevOps',
      summary: 'Essential best practices for managing Kubernetes clusters in production.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80'
    }
    // Add more blog posts as needed
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Filters */}
      <div className="lg:col-span-1">
        <BlogFilters
          activeFilters={activeFilters}
          onFilterChange={setActiveFilters}
        />
      </div>

      {/* Blog Posts */}
      <div className="lg:col-span-3">
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-linsoft-red bg-red-100 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {post.date}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{post.summary}</p>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-linsoft-red hover:text-red-700 font-semibold"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;