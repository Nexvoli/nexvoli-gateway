import { Search, MapPin, Briefcase } from 'lucide-react';
import { useState } from 'react';
import type { SearchFilters } from '@/utils/search';

interface HeroProps {
  onSearch: (filters: SearchFilters) => void;
}

const HERO_IMAGE =
  'https://images.pexels.com/photos/7691697/pexels-photo-7691697.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero({ onSearch }: HeroProps) {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onSearch({ keyword, location });
  };

  return (
    <section className="relative hero-gradient overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 opacity-40"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900/70 via-brand-900/60 to-brand-900/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-cta-400 rounded-full animate-pulse-soft" />
            <span className="text-xs font-medium text-white/90">
              12,000+ Active Jobs Updated Daily
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] text-shadow mb-5">
            Find High-Paying Jobs
            <br />
            that Fit Your Life.
          </h1>

          <p className="text-lg text-brand-200 leading-relaxed max-w-2xl mx-auto mb-10">
            Browse thousands of verified remote, part-time, and flexible
            opportunities hiring right now across the globe.
          </p>
        </div>

        {/* Advanced Search Bar */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-float p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Keyword Input */}
            <div className="flex-1 relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-400" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSearch();
                }}
                placeholder="Job title or keyword"
                className="w-full pl-12 pr-4 py-3.5 bg-brand-50 rounded-xl text-sm text-brand-900 placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:ring-cta-400 transition-all"
              />
            </div>

            {/* Location Input */}
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-400" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSearch();
                }}
                placeholder="Location or Remote"
                className="w-full pl-12 pr-4 py-3.5 bg-brand-50 rounded-xl text-sm text-brand-900 placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:ring-cta-400 transition-all"
              />
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="bg-cta-500 text-white font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-cta-600 transition-all hover:shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Search className="w-5 h-5" />
              Search Jobs
            </button>
          </div>

          {/* Popular Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-brand-100">
            <span className="text-xs text-brand-400 font-medium">
              Popular:
            </span>
            {['Remote', 'Part-Time', 'Data Entry', 'Virtual Assistant', 'Customer Service'].map(
              (tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setKeyword(tag);
                    onSearch({ keyword: tag, location });
                  }}
                  className="text-xs font-medium text-brand-600 bg-brand-50 hover:bg-brand-100 px-3 py-1.5 rounded-full transition-colors"
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-10">
          {[
            { value: '12K+', label: 'Active Jobs' },
            { value: '9,850+', label: 'Verified Employers' },
            { value: '95%', label: 'Match Rate' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-brand-300 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
