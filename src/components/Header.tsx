import { Briefcase, Menu, ShieldCheck, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = ['Find Jobs', 'Salaries', 'Career Advice'];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 glass border-b border-brand-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-brand-900 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-brand-900 tracking-tight">
              NEXVOLI
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#jobs"
                className="text-sm font-medium text-brand-600 hover:text-brand-900 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs font-medium text-brand-500">
              <ShieldCheck className="w-4 h-4 text-cta-500" />
              <span>Verified Employers</span>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-brand-600 hover:text-brand-900 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#"
              className="text-sm font-semibold bg-brand-900 text-white px-5 py-2.5 rounded-lg hover:bg-brand-800 transition-all hover:shadow-lg"
            >
              Post a Job
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-brand-200 animate-slide-down">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#jobs"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-brand-700 py-2"
              >
                {link}
              </a>
            ))}
            <div className="flex items-center gap-1.5 text-xs font-medium text-brand-500 py-1">
              <ShieldCheck className="w-4 h-4 text-cta-500" />
              <span>Verified Employers</span>
            </div>
            <div className="flex gap-3 pt-2 border-t border-brand-100">
              <a
                href="#"
                className="flex-1 text-center text-sm font-medium text-brand-600 border border-brand-300 rounded-lg py-2.5"
              >
                Sign In
              </a>
              <a
                href="#"
                className="flex-1 text-center text-sm font-semibold bg-brand-900 text-white rounded-lg py-2.5"
              >
                Post a Job
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
