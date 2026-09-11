import type { Job } from '@/data/jobs';

export interface SearchFilters {
  keyword: string;
  location: string;
}

export function filterJobs(jobs: Job[], filters: SearchFilters): Job[] {
  const keyword = filters.keyword.trim().toLowerCase();
  const location = filters.location.trim().toLowerCase();

  if (!keyword && !location) return jobs;

  return jobs.filter((job) => {
    let keywordMatch = true;
    let locationMatch = true;

    if (keyword) {
      const haystack = [
        job.title,
        job.company,
        job.jobType,
        job.category.replace(/-/g, ' '),
        job.location,
      ]
        .join(' ')
        .toLowerCase();
      keywordMatch = haystack.includes(keyword);
    }

    if (location) {
      const loc = job.location.toLowerCase();
      locationMatch = loc.includes(location);
    }

    return keywordMatch && locationMatch;
  });
}
