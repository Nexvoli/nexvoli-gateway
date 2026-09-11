import { Bell, Mail, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function JobAlertCTA() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section className="bg-accent-lightblue py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-card border border-brand-100 p-8 sm:p-12 text-center">
          <div className="w-14 h-14 bg-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Bell className="w-7 h-7 text-white" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-900 mb-3">
            Get Job Alerts
          </h2>
          <p className="text-brand-500 max-w-lg mx-auto mb-8">
            Never miss a new opportunity. Get personalized job alerts delivered
            straight to your inbox the moment new roles are posted.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-cta-600 font-semibold">
              <CheckCircle2 className="w-6 h-6" />
              <span>You're subscribed! Watch your inbox for new job alerts.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-3.5 bg-brand-50 rounded-xl text-sm text-brand-900 placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all"
                />
              </div>
              <button
                type="submit"
                className="bg-brand-900 text-white font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-brand-800 transition-all hover:shadow-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-brand-400 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
