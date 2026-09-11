import { Building2 } from 'lucide-react';

const companies = [
  'TechFlow',
  'Quantum',
  'Elevate',
  'LedgerLine',
  'PixelForge',
  'GrowthAxis',
  'Bloom Digital',
  'HealthBridge',
];

export default function TrustSignals() {
  return (
    <section className="bg-white border-b border-brand-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-brand-400 mb-7">
          Trusted by hiring managers at leading global enterprises
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-12">
          {companies.map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 text-brand-300 hover:text-brand-500 transition-colors cursor-default"
            >
              <Building2 className="w-5 h-5" />
              <span className="text-lg font-bold tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
