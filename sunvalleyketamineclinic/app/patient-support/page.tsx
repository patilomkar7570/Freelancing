import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  HeartHandshake,
  Brain,
  Compass,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { CLINIC_IMAGES } from '@/lib/images';

export const metadata = {
  title: 'Patient Support & Integration | VALENCE Clinical',
  description:
    'Dedicated support, psychotherapeutic integration, reflective frameworks, and continuity of care to help patients consolidate clinical experiences.',
};

export default function PatientSupportPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-stone-100/80 border-b border-stone-200 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-200 text-charcoal-700 text-[10px] font-mono uppercase tracking-widest">
            <span>Continuity of Care &bull; Integration</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-forest-900 font-normal tracking-tight max-w-3xl">
            Translating transient insights into lasting balance.
          </h1>
          <p className="text-charcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Clinical ketamine administration opens a biological window of neuroplasticity. Therapeutic integration is the deliberate, structured process that translates this openness into enduring cognitive, emotional, and behavioral change.
          </p>
        </div>
      </section>

      {/* 1. What Integration Means in Specialist Medicine */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="editorial-tag text-sage-700">The Neuroplastic Window</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal leading-snug">
              Why medicine alone is only the starting point.
            </h2>
            <div className="space-y-4 text-sm text-charcoal-700 leading-relaxed font-light">
              <p>
                In the hours and days following a clinical ketamine session, synaptic connectivity temporarily increases. For individuals struggling with persistent depressive rumination, rigid habit patterns, or traumatic emotional charge, this transient neuroplastic window offers an unprecedented opportunity to form new associative pathways.
              </p>
              <p>
                Without deliberate integration, however, the nervous system frequently reverts to established, deeply worn patterns. Integration involves structured psychological reflection, somatic grounding, and collaborative dialogue with mental health professionals to ensure that emotional shifts become grounded in daily life.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-stone-200 text-xs space-y-2">
              <div className="font-mono text-[11px] uppercase tracking-wider text-forest-900 font-semibold flex items-center gap-2">
                <Brain className="w-4 h-4 text-sage-600" />
                The Consolidation Window (24–72 Hours)
              </div>
              <p className="text-charcoal-600 leading-relaxed">
                We encourage scheduled psychotherapy sessions within 24 to 72 hours of an infusion, enabling patients to explore insights while neurological receptivity is highest.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-card border border-stone-200">
              <Image
                src={CLINIC_IMAGES.reflectionSpace}
                alt="Quiet architectural lounge space with natural materials and garden view"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Three Pillars of VALENCE Integration Support */}
      <section className="bg-forest-900 text-ivory-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="editorial-tag text-sage-300">Support Architecture</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
              Structured Integration Framework
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed font-light">
              Our support model is grounded in three complementary pillars designed to support mental clarity, physical grounding, and emotional integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-9 h-9 rounded bg-forest-800 text-sage-300 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory">Therapist Collaboration</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                We work alongside your external therapist, providing session summaries (with your consent) and coordinated scheduling to align with your ongoing psychotherapy.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-9 h-9 rounded bg-forest-800 text-sage-300 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory">Guided Reflective Inquiries</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Patients receive curated reflective prompts and journaling guides focused on emotional awareness, self-compassion, somatic sensations, and value alignment.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-9 h-9 rounded bg-forest-800 text-sage-300 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory">Somatic &amp; Lifestyle Anchors</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Guidance on restorative sleep hygiene, moderate movement, exposure to natural light, and reducing sensory overwhelm during critical recovery intervals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Longitudinal Continuity of Care Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3 max-w-2xl">
          <span className="editorial-tag text-sage-700">Longitudinal Continuity</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal">
            Care Beyond the Treatment Suite
          </h2>
          <p className="text-charcoal-600 text-sm leading-relaxed">
            Our responsibility to our patients does not conclude when they leave our clinic doors. Standardized check-in intervals ensure safety and outcome tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-subtle space-y-3">
            <span className="font-mono text-xs text-sage-700 font-semibold uppercase">Checkpoint 01 &bull; 24 Hours</span>
            <h3 className="font-serif text-xl text-forest-900">Next-Day Wellness Check</h3>
            <p className="text-xs text-charcoal-600 leading-relaxed font-light">
              A clinical coordinator calls to review sleep quality, mood stability, transient physical side effects, and verify that any questions are answered promptly.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-subtle space-y-3">
            <span className="font-mono text-xs text-sage-700 font-semibold uppercase">Checkpoint 02 &bull; 7 Days</span>
            <h3 className="font-serif text-xl text-forest-900">Psychological Assessment</h3>
            <p className="text-xs text-charcoal-600 leading-relaxed font-light">
              Formal validated psychological rating scales (such as PHQ-9 and GAD-7) evaluate therapeutic trajectory and inform upcoming session adjustments.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-subtle space-y-3">
            <span className="font-mono text-xs text-sage-700 font-semibold uppercase">Checkpoint 03 &bull; 30 Days</span>
            <h3 className="font-serif text-xl text-forest-900">Longitudinal Review</h3>
            <p className="text-xs text-charcoal-600 leading-relaxed font-light">
              Comprehensive clinical review evaluating response durability, coordination with primary psychiatric providers, and determining whether maintenance care is indicated.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Center CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-xl bg-stone-100 border border-stone-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <span className="editorial-tag text-sage-700">Patient Resources</span>
            <h3 className="font-serif text-2xl text-forest-900 font-normal">
              Explore Our Educational &amp; Portal Architecture
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Review downloadable guidebooks, consent architecture demonstrations, and secure digital portal specifications.
            </p>
          </div>
          <Link
            href="/patient-resources"
            className="px-5 py-2.5 rounded bg-forest-800 text-ivory text-xs font-mono uppercase tracking-wider hover:bg-forest-700 transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <span>Patient Resource Centre</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
