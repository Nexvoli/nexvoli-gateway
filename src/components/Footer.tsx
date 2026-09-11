import { Briefcase, ShieldAlert, Linkedin, Twitter, Facebook } from 'lucide-react';

const footerSections = [
  {
    title: 'Company',
    links: ['About Us', 'Press & Media', 'Careers', 'Blog', 'Contact'],
  },
  {
    title: 'Job Seekers',
    links: [
      'Browse Jobs',
      'Upload Resume',
      'Salary Calculator',
      'Career Resources',
      'Job Alerts',
    ],
  },
  {
    title: 'Employers',
    links: [
      'Post a Job',
      'Pricing Plans',
      'Recruiter Solutions',
      'Employer Blog',
      'Customer Support',
    ],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility', 'GDPR'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                NEXVOLI
              </span>
            </div>
            <p className="text-sm text-brand-400 leading-relaxed mb-5 max-w-xs">
              Connecting talent with opportunity. Your trusted source for
              verified remote and flexible jobs worldwide.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4 text-brand-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-bold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-brand-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <p className="text-sm text-brand-400 text-center">
            © 2026 NEXVOLI. All rights reserved.
          </p>
        </div>

        {/* Security Notice */}
        <div className="bg-alert-600/10 border border-alert-600/30 rounded-xl p-5 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-alert-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-white mb-1">
              Security Notice
            </p>
            <p className="text-sm text-brand-300 leading-relaxed">
              This is a free directory. We will NEVER ask for your credit card,
              bank details, or payment to apply for any job. Beware of scams.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
