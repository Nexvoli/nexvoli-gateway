import { useState, useEffect } from 'react';
import NoticeBar from '@/components/NoticeBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustSignals from '@/components/TrustSignals';
import JobListings from '@/components/JobListings';
import JobAlertCTA from '@/components/JobAlertCTA';
import Footer from '@/components/Footer';
import type { SearchFilters } from '@/utils/search';

function App() {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    keyword: '',
    location: '',
  });

  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
    setTimeout(() => {
      document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleClearSearch = () => {
    setSearchFilters({ keyword: '', location: '' });
  };

  useEffect(() => {
    window.addEventListener('clear-search', handleClearSearch);
    return () => window.removeEventListener('clear-search', handleClearSearch);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <NoticeBar />
      <Header />
      <main>
        <Hero onSearch={handleSearch} />
        <TrustSignals />
        <JobListings searchFilters={searchFilters} />
        <JobAlertCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
