import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldAlert,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { CLINIC_IMAGES } from '@/lib/images';
import PatientJourneyExplorer from '@/components/PatientJourneyExplorer';

export const metadata = {
  title: 'Treatment Process & Journey | VALENCE Clinical',
  description:
    'A detailed visual explanation of the general patient experience, from consultation and clinical assessment through supervised administration and longitudinal follow-up.',
};

export default function ProcessPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-stone-100/80 border-b border-stone-200 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-200 text-charcoal-700 text-[10px] font-mono uppercase tracking-widest">
            <span>Patient Experience &bull; Care Pathway</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-forest-900 font-normal tracking-tight max-w-3xl">
            A methodical, unhurried journey through care.
          </h1>
          <p className="text-charcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Understanding what will occur at each stage of your care fosters confidence and emotional calm. We structure every appointment around transparency, physical comfort, and medical oversight.
          </p>
        </div>
      </section>

      {/* Protocol Framing Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-lg bg-stone-200/60 border border-stone-300 text-xs text-charcoal-700 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Demonstration Framework Notice:</strong> The journey described below is a conceptual architectural demonstration created by NOVA Digital Studio. Dosing schedules, session intervals, and monitoring protocols in actual medicine must be personalized by an attending physician according to clinical guidelines and individual patient physiology.
          </p>
        </div>
      </section>

      {/* Interactive Pathway Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3">
          <span className="editorial-tag text-sage-700">Detailed Roadmap</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal">
            The Five Phases of Care
          </h2>
          <p className="text-charcoal-600 text-sm max-w-xl leading-relaxed">
            Navigate through each phase to inspect clinical objectives, safety checks, and what patients should expect.
          </p>
        </div>

        <PatientJourneyExplorer />
      </section>

      {/* Anatomy of an Administration Day */}
      <section className="bg-forest-900 text-ivory-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-3">
              <span className="editorial-tag text-sage-300">Appointment Day Walkthrough</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
                Inside an Administration Appointment
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed font-light max-w-2xl">
                On the day of a scheduled administration, appointments are structured to prevent rushing and ensure peace of mind. A typical session spans approximately two to two-and-a-half hours on-site.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <span className="text-xs font-mono text-sage-300 inline-flex items-center gap-1.5 px-3 py-1 rounded bg-forest-950 border border-forest-800">
                <Clock className="w-3.5 h-3.5 text-sage-400" /> Typical on-site time: 120–150 min
              </span>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">Phase 1 &bull; 0–20 min</span>
              <h3 className="font-serif text-lg text-ivory">Arrival &amp; Baseline Check</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Check-in in the private lounge. Attending nurse measures baseline blood pressure, pulse, and oxygen saturation. A brief grounding conversation sets intentions.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">Phase 2 &bull; 20–70 min</span>
              <h3 className="font-serif text-lg text-ivory">Active Administration</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Resting in an ergonomic clinical recliner with soft lighting and noise-canceling headphones. The physician or specialist nurse maintains continuous in-room vital signs monitoring.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">Phase 3 &bull; 70–110 min</span>
              <h3 className="font-serif text-lg text-ivory">Gentle Emergence &amp; Rest</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                As the acute physiological effects subside, the patient rests with light refreshments. Cognitive orientation, motor coordination, and vitals are re-checked.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">Phase 4 &bull; 110–135 min</span>
              <h3 className="font-serif text-lg text-ivory">Debrief &amp; Chaperone Departure</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Brief reflective debrief with clinician. Patients are released strictly into the care of an adult designated companion or pre-arranged escort. No driving permitted on session day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Sanctuary & Sensory Calibration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="editorial-tag text-sage-700">Atmosphere &amp; Setting</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal leading-snug">
              Sensory calibration as clinical infrastructure.
            </h2>
            <div className="space-y-4 text-sm text-charcoal-700 leading-relaxed font-light">
              <p>
                In psychiatric pharmacology, the physical setting (often termed &ldquo;set and setting&rdquo;) directly influences patient anxiety and neurological reception. Cold fluorescent lighting, startling hospital beeps, or visual clutter trigger autonomic nervous arousal, working against the desired state of calm.
              </p>
              <p>
                Every treatment room at VALENCE incorporates acoustic dampening, warm tactile textiles, circadian light modulation, and discrete, silent medical telemetry. Patients retain complete autonomy over room warmth, eye cover preferences, and musical acoustics.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/preparation"
                className="text-xs font-mono uppercase tracking-wider text-forest-800 hover:text-forest-950 inline-flex items-center gap-1 font-medium underline underline-offset-4"
              >
                <span>Read How to Prepare for Your Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-card border border-stone-200">
              <Image
                src={CLINIC_IMAGES.treatmentSuite}
                alt="Refined clinical suite with private daylight and comfortable treatment armchair"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-xl border border-stone-200 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="editorial-tag text-sage-700">Preparation Matters</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-forest-900 font-normal">
              Practical Steps for Prospective Patients
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Explore our comprehensive preparation checklist, questions to discuss with your primary doctor, and travel planning considerations.
            </p>
          </div>
          <Link
            href="/preparation"
            className="px-6 py-3 rounded bg-forest-800 text-ivory text-xs font-mono uppercase tracking-wider hover:bg-forest-700 transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <span>Preparation Guide &amp; Checklist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
