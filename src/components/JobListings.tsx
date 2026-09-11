import { Flame, SearchX, RotateCcw, Loader2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import JobCard from './JobCard';
import { initialJobs, additionalJobs, type Job } from '@/data/jobs';
import { filterJobs, type SearchFilters } from '@/utils/search';

interface JobListingsProps {
  searchFilters: SearchFilters;
}

export default function JobListings({ searchFilters }: JobListingsProps) {
  const [visibleJobs, setVisibleJobs] = useState<Job[]>(initialJobs);
  const [loading, setLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  const filteredJobs = useMemo(
    () => filterJobs(visibleJobs, searchFilters),
    [visibleJobs, searchFilters]
  );

  const hasActiveSearch =
    searchFilters.keyword.trim() !== '' || searchFilters.location.trim() !== '';

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleJobs((prev) => [...prev, ...additionalJobs]);
      setAllLoaded(true);
      setLoading(false);
    }, 600);
  };

  return (
    <section id="jobs" className="bg-brand-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex flex-col items-center justify-center text-center gap-2 text-2xl sm:text-3xl font-extrabold text-brand-900">
          <Flame className="w-8 h-8 text-alert-600 mb-1" />
          <span>Trending Opportunities Hiring Today</span>
        </div>
          <p className="text-brand-500 mt-3 max-w-xl mx-auto">
            Hand-picked roles from verified employers actively hiring this week.
            Apply before positions fill up.
          </p>
        </div>

        {/* Result Indicator */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="text-sm font-medium text-brand-600">
            {hasActiveSearch
              ? `${filteredJobs.length} job${filteredJobs.length !== 1 ? 's' : ''} found`
              : `Showing ${filteredJobs.length} opportunities`}
          </div>
          {hasActiveSearch && (
            <span className="text-xs text-brand-400">
              for &ldquo;{[searchFilters.keyword, searchFilters.location].filter(Boolean).join(' · ')}&rdquo;
            </span>
          )}
        </div>

        {/* Job Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {filteredJobs.map((job, index) => (
              <div
                key={job.id}
                className="animate-fade-up"
                style={{ animationDelay: `${Math.min(index, 12) * 60}ms`, opacity: 0 }}
              >
                <JobCard job={job} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <SearchX className="w-8 h-8 text-brand-400" />
            </div>
            <h3 className="text-xl font-bold text-brand-900 mb-2">
              No matching opportunities found
            </h3>
            <p className="text-brand-500 max-w-md mx-auto mb-6">
              Try adjusting your search terms or clearing your filters to see all
              available job openings.
            </p>
            <a
              href="#jobs"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('clear-search'));
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-brand-900 px-6 py-3 rounded-xl hover:bg-brand-800 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Clear Search
            </a>
          </div>
        )}

        {/* Load More */}
        {allLoaded ? (
          <div className="text-center mt-12">
            <p className="text-sm font-medium text-brand-400">
              Showing all {visibleJobs.length} opportunities
            </p>
          </div>
        ) : (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="text-sm font-semibold text-brand-700 bg-white border border-brand-200 px-8 py-3.5 rounded-xl hover:bg-brand-50 hover:border-brand-300 transition-all disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Loading...
                </>
              ) : (
                'Load More Opportunities'
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
