import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LatestPosts = () => {
  const latestPosts = [
    {
      id: 1,
      title: 'Best Practices for Cloud Migration',
      author: 'John Smith',
      date: 'March 5, 2024',
      category: 'Cloud Computing',
      summary: 'Learn about the key considerations and best practices for successful cloud migration.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Getting Started with RedHat OpenShift',
      author: 'Sarah Johnson',
      date: 'March 1, 2024',
      category: 'DevOps',
      summary: 'A comprehensive guide to getting started with RedHat OpenShift container platform.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Securing Your AWS Infrastructure',
      author: 'Michael Chen',
      date: 'February 28, 2024',
      category: 'Security',
      summary: 'Essential security practices for protecting your AWS cloud infrastructure.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {latestPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
              </div>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-linsoft-red bg-red-100 rounded-full mb-3">
                {post.category}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
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
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;