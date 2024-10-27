import React from 'react';
import NewsHeader from '../components/news/NewsHeader';
import LatestNews from '../components/news/LatestNews';
import NewsList from '../components/news/NewsList';

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <NewsHeader />
        <LatestNews />
        <NewsList />
      </div>
    </div>
  );
};

export default NewsPage;