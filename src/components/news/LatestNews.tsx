import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  const latestNews = [
    {
      id: 1,
      title: 'LinSoft Expands AWS Training Programs',
      date: 'March 1, 2024',
      category: 'Company News',
      summary: 'LinSoft announces expansion of AWS certification training programs across North Africa.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'New Partnership with RedHat',
      date: 'February 28, 2024',
      category: 'Partnerships',
      summary: 'LinSoft strengthens partnership with RedHat to provide enhanced enterprise solutions.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'LinSoft Opens New Office in Morocco',
      date: 'February 25, 2024',
      category: 'Company News',
      summary: 'Expanding our presence in North Africa with a new office in Casablanca.',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {latestNews.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                {article.date}
              </div>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-linsoft-red bg-red-100 rounded-full mb-3">
                {article.category}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.summary}</p>
              <Link
                to={`/news/${article.id}`}
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

export default LatestNews;