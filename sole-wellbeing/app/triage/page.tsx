import React from 'react';
import FootTriageTool from '@/components/FootTriageTool';

export const metadata = {
  title: 'Foot Symptom Checker & Triage Advisor | Sole Wellbeing',
  description:
    'Identify common foot conditions such as corns, ingrown nails, fungal infections, verrucae, and diabetic complications with our clinical triage advisor.',
};

export default function TriagePage() {
  return (
    <div className="space-y-16 py-12 pb-24">
      {/* Header */}
      <section className="bg-cream-200/80 border-b border-pebble-300 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam-100 border border-seafoam-300 text-teal-950 text-[10px] font-mono uppercase tracking-widest font-semibold">
            <span>Clinical Self-Help Tool</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-teal-950 font-medium tracking-tight">
            Foot Symptom Checker &amp; Care Advisor
          </h1>
          <p className="text-slatecharcoal-600 text-sm sm:text-base font-light leading-relaxed">
            Not sure whether you have a corn or a verruca? Or whether conservative trimming or an assessment is needed? Explore common symptoms and recommended nursing treatments below.
          </p>
        </div>
      </section>

      {/* Main Interactive Tool */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <FootTriageTool />
      </section>
    </div>
  );
}
