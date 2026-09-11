import { MapPin, Briefcase, DollarSign, BadgeCheck, ArrowRight, Clock } from 'lucide-react';
import type { Job } from '@/data/jobs';
import { categoryIconMap } from '@/data/jobIcons';

interface JobCardProps {
  job: Job;
}

const categoryColors: Record<string, string> = {
  'it-support': 'bg-blue-500',
  'virtual-assistant': 'bg-emerald-500',
  'video-editor': 'bg-purple-500',
  'medical-billing': 'bg-rose-500',
  'data-entry': 'bg-amber-500',
  'customer-service': 'bg-cyan-500',
  'social-media': 'bg-pink-500',
  'bookkeeping': 'bg-indigo-500',
  'content-writing': 'bg-teal-500',
  'project-management': 'bg-orange-500',
  'tutoring': 'bg-green-500',
  'hr': 'bg-sky-500',
  'graphic-design': 'bg-violet-500',
  'transcription': 'bg-lime-500',
  'sales': 'bg-red-500',
  'medical-coding': 'bg-rose-600',
  'nursing': 'bg-red-400',
  'pharmacy': 'bg-emerald-600',
  'accounting': 'bg-blue-700',
  'payroll': 'bg-indigo-600',
  'digital-marketing': 'bg-orange-500',
  'copywriting': 'bg-teal-600',
  'software-development': 'bg-slate-600',
  'frontend-development': 'bg-blue-600',
  'help-desk': 'bg-amber-600',
  'cybersecurity': 'bg-slate-700',
  'data-analysis': 'bg-cyan-600',
  'warehouse': 'bg-yellow-600',
  'delivery': 'bg-orange-600',
  'retail': 'bg-pink-600',
  'restaurant': 'bg-red-600',
  'operations': 'bg-slate-500',
  'recruiting': 'bg-sky-600',
  'administrative': 'bg-violet-600',
};

export default function JobCard({ job }: JobCardProps) {
  const isUrgent = job.tag === 'Urgent';
  const Icon = categoryIconMap[job.category];
  const bgColor = categoryColors[job.category] || 'bg-brand-600';

  return (
    <article className="bg-white rounded-card shadow-card hover:shadow-card-hover border border-brand-100 p-5 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col">
      {/* Top Row */}
      <div className="flex items-start justify-between mb-4">
        {/* Category Icon */}
        <div
          className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center text-white flex-shrink-0`}
        >
          <Icon className="w-6 h-6" strokeWidth={1.8} />
        </div>

        {/* Tag */}
        <span
          className={`text-xs font-bold px-3 py-1.5 rounded-full ${
            isUrgent
              ? 'bg-alert-50 text-alert-600 border border-alert-100'
              : 'bg-cta-50 text-cta-700 border border-cta-100'
          }`}
        >
          {isUrgent ? '⚡ Urgent' : '🔥 Hiring Fast'}
        </span>
      </div>

      {/* Body */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-brand-900 leading-snug mb-1.5 group-hover:text-brand-700 transition-colors">
          {job.title}
        </h3>

        <div className="flex items-center gap-1.5 mb-4">
          <span className="text-sm font-medium text-brand-500">
            {job.company}
          </span>
          <BadgeCheck className="w-4 h-4 text-cta-500 flex-shrink-0" />
          <span className="text-xs text-brand-300 flex items-center gap-1 ml-auto">
            <Clock className="w-3 h-3" />
            {job.postedAgo}
          </span>
        </div>

        {/* Tags Row */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 bg-brand-50 px-2.5 py-1.5 rounded-lg">
            <MapPin className="w-3.5 h-3.5 text-brand-400" />
            {job.location}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 bg-brand-50 px-2.5 py-1.5 rounded-lg">
            <Briefcase className="w-3.5 h-3.5 text-brand-400" />
            {job.jobType}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-cta-700 bg-cta-50 px-2.5 py-1.5 rounded-lg">
            <DollarSign className="w-3.5 h-3.5 text-cta-500" />
            {job.payRate}
          </span>
        </div>
      </div>

      {/* Apply Button */}
      <a
        href={job.offerLink}
        className="w-full bg-cta-500 text-white font-bold text-sm py-3 rounded-xl hover:bg-cta-600 transition-all hover:shadow-lg flex items-center justify-center gap-2 group/btn"
      >
        Apply Now
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </a>
    </article>
  );
}
