import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper } from 'lucide-react';

const LatestNews = () => {
  const news = [
    {
      id: 1,
      type: 'News',
      title: 'LinSoft Expands AWS Training Programs',
      date: 'March 1, 2024',
      summary: 'LinSoft announces expansion of AWS certification training programs across North Africa.'
    },
    {
      id: 2,
      type: 'Blog',
      title: 'Best Practices for Cloud Migration',
      date: 'February 28, 2024',
      summary: 'Learn about the key considerations and best practices for successful cloud migration.'
    },
    {
      id: 3,
      type: 'News',
      title: 'New Partnership with RedHat',
      date: 'February 15, 2024',
      summary: 'LinSoft strengthens partnership with RedHat to provide enhanced enterprise solutions.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Latest News & Insights</h2>
          <p className="mt-4 text-xl text-gray-600">
            Stay updated with our latest news and blog posts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Newspaper className="h-5 w-5 text-linsoft-red" />
                  <span className="ml-2 text-sm font-semibold text-linsoft-red">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{item.date}</p>
                <p className="text-gray-600 mb-4">{item.summary}</p>
                <Link
                  to={item.type === 'News' ? `/news/${item.id}` : `/blog/${item.id}`}
                  className="text-linsoft-red hover:text-red-700 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 space-x-4">
          <Link
            to="/news"
            className="inline-block bg-linsoft-red text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            View All News
          </Link>
          <Link
            to="/blog"
            className="inline-block bg-white text-linsoft-red px-8 py-3 rounded-md border border-linsoft-red hover:bg-red-50 transition-colors"
          >
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;