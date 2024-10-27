import React from 'react';
import { User, Calendar, Tag } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Best Practices for Cloud Migration',
      author: 'John Smith',
      date: 'March 5, 2024',
      category: 'Cloud Computing',
      summary: 'Learn about the key considerations and best practices for successful cloud migration.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
    },
    {
      title: 'Getting Started with RedHat OpenShift',
      author: 'Sarah Johnson',
      date: 'March 1, 2024',
      category: 'DevOps',
      summary: 'A comprehensive guide to getting started with RedHat OpenShift container platform.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
          <p className="mt-4 text-xl text-gray-600">
            Insights and articles from our technical experts
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <Tag className="h-4 w-4 mr-2 text-linsoft-red" />
                  <span className="text-sm font-semibold text-linsoft-red">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.summary}</p>
                <button className="text-linsoft-red hover:text-red-700 font-semibold">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;