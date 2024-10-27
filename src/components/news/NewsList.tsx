import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsFilters from './NewsFilters';

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  image: string;
}

const NewsList = () => {
  const [activeFilters, setActiveFilters] = useState({
    category: '',
    date: ''
  });

  const newsArticles: NewsArticle[] = [
    {
      id: 4,
      title: 'LinSoft Achieves AWS Advanced Partner Status',
      date: 'February 20, 2024',
      category: 'Awards',
      summary: 'Recognition of our expertise in AWS cloud solutions and implementations.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'New Cloud Security Solutions Launch',
      date: 'February 15, 2024',
      category: 'Products',
      summary: 'Introducing our enhanced cloud security solutions for enterprise customers.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80'
    }
    // Add more news articles as needed
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Filters */}
      <div className="lg:col-span-1">
        <NewsFilters
          activeFilters={activeFilters}
          onFilterChange={setActiveFilters}
        />
      </div>

      {/* News Articles */}
      <div className="lg:col-span-3">
        <div className="space-y-8">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-linsoft-red bg-red-100 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {article.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {article.title}
                  </h3>

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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;