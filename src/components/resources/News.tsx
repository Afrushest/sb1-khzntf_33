import React from 'react';
import { Calendar } from 'lucide-react';

const News = () => {
  const news = [
    {
      title: 'LinSoft Expands AWS Training Programs',
      date: 'March 1, 2024',
      category: 'Company News',
      summary: 'LinSoft announces expansion of AWS certification training programs across North Africa.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
    },
    {
      title: 'New Partnership with RedHat',
      date: 'February 15, 2024',
      category: 'Partnerships',
      summary: 'LinSoft strengthens partnership with RedHat to provide enhanced enterprise solutions.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Latest News</h1>
          <p className="mt-4 text-xl text-gray-600">
            Stay updated with LinSoft's latest announcements and achievements
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-linsoft-red bg-red-100 rounded-full mb-3">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.summary}</p>
                <button className="mt-4 text-linsoft-red hover:text-red-700 font-semibold">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;