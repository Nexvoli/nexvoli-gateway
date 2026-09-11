import { AlertTriangle, X } from 'lucide-react';
import { useState } from 'react';

export default function NoticeBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-alert text-white text-sm font-semibold relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-2 text-center">
        <AlertTriangle className="w-4 h-4 flex-shrink-0 animate-pulse-soft" />
        <p className="leading-tight">
          <span className="font-bold">URGENT:</span> 50+ New Premium Remote &
          Part-Time Roles Added Today. Apply Instantly!
        </p>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-alert-700 rounded p-0.5 transition-colors"
          aria-label="Dismiss notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
