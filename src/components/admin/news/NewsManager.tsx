import React, { useState } from 'react';
import { Plus, Download, Search } from 'lucide-react';
import NewsList from './NewsList';
import NewsModal from './NewsModal';
import { News } from '../../../types/news';

const NewsManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState<News | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: '',
    theme: '',
    dateRange: { start: '', end: '' }
  });

  // Sample data - replace with actual data later
  const [news, setNews] = useState<News[]>([
    {
      id: '1',
      title: 'New RedHat Training Program Launch',
      type: 'training',
      theme: 'Linux',
      content: 'We are excited to announce our new RedHat training program...',
      images: ['https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80'],
      publishDate: '2024-03-01',
      viewCount: 150
    }
  ]);

  const handleExport = () => {
    // Implement export functionality
    console.log('Exporting news data...');
  };

  const handleAddNews = () => {
    setSelectedNews(null);
    setShowModal(true);
  };

  const handleEditNews = (newsItem: News) => {
    setSelectedNews(newsItem);
    setShowModal(true);
  };

  const handleSaveNews = (newsData: Partial<News>) => {
    if (selectedNews) {
      // Update existing news
      setNews(news.map(item => 
        item.id === selectedNews.id ? { ...item, ...newsData } : item
      ));
    } else {
      // Add new news
      const newNews: News = {
        id: String(Date.now()),
        viewCount: 0,
        publishDate: new Date().toISOString().split('T')[0],
        ...newsData as Omit<News, 'id' | 'viewCount' | 'publishDate'>
      };
      setNews([...news, newNews]);
    }
    setShowModal(false);
  };

  const handleDeleteNews = (newsId: string) => {
    setNews(news.filter(item => item.id !== newsId));
  };

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.theme.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = !filters.type || item.type === filters.type;
    const matchesTheme = !filters.theme || item.theme === filters.theme;
    const matchesDate = (!filters.dateRange.start || item.publishDate >= filters.dateRange.start) &&
                       (!filters.dateRange.end || item.publishDate <= filters.dateRange.end);

    return matchesSearch && matchesType && matchesTheme && matchesDate;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">News Management</h1>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 inline-flex items-center"
            onClick={handleExport}
          >
            <Download className="h-5 w-5 mr-2" />
            Export Data
          </button>
          <button
            onClick={handleAddNews}
            className="flex items-center px-4 py-2 bg-linsoft-red text-white rounded-md hover:bg-red-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add News
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search news by title, theme, or content..."
            className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              News Type
            </label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="">All Types</option>
              <option value="training">Training</option>
              <option value="services">Services</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Theme
            </label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
              value={filters.theme}
              onChange={(e) => setFilters({ ...filters, theme: e.target.value })}
            >
              <option value="">All Themes</option>
              <option value="Linux">Linux</option>
              <option value="Cloud">Cloud</option>
              <option value="DevOps">DevOps</option>
              <option value="Security">Security</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date Range
            </label>
            <div className="flex space-x-2">
              <input
                type="date"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                value={filters.dateRange.start}
                onChange={(e) => setFilters({
                  ...filters,
                  dateRange: { ...filters.dateRange, start: e.target.value }
                })}
              />
              <input
                type="date"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                value={filters.dateRange.end}
                onChange={(e) => setFilters({
                  ...filters,
                  dateRange: { ...filters.dateRange, end: e.target.value }
                })}
              />
            </div>
          </div>
        </div>

        <NewsList
          news={filteredNews}
          onEdit={handleEditNews}
          onDelete={handleDeleteNews}
        />
      </div>

      <NewsModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedNews(null);
        }}
        onSave={handleSaveNews}
        news={selectedNews}
      />
    </div>
  );
};

export default NewsManager;