import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  BookOpen,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { CLINIC_IMAGES } from '@/lib/images';

export const metadata = {
  title: 'About the Practice | VALENCE Clinical',
  description:
    'Learn about VALENCE Clinical—a fictional specialist healthcare concept demonstrating thoughtful ketamine medicine, medical oversight, and clinical architecture.',
};

export default function AboutPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-stone-100/80 border-b border-stone-200 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-200 text-charcoal-700 text-[10px] font-mono uppercase tracking-widest">
            <span>Practice Identity &bull; Conceptual Showcase</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-forest-900 font-normal tracking-tight max-w-3xl">
            A considered foundation for specialist medicine.
          </h1>
          <p className="text-charcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Conceived as an independent demonstration by NOVA Digital Studio to illustrate how a modern specialist ketamine practice can unite clinical integrity, patient reassurance, and architectural serenity.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Genesis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="editorial-tag text-sage-700">Foundational Ethos</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal leading-snug">
              Bridging rigorous medical science and human-centred care.
            </h2>
            <div className="space-y-4 text-sm text-charcoal-700 leading-relaxed font-light">
              <p>
                Specialist medical care requires an environment that honors both physiological safety and the emotional vulnerability of patients. In conventional settings, patients seeking care for treatment-resistant mental health conditions frequently encounter fragmented communication, rushed consultations, or cold institutional environments.
              </p>
              <p>
                VALENCE was envisioned to model an alternative paradigm: a dedicated, low-volume specialist practice where consultations are given the time they deserve, where physician presence is continuous, and where therapeutic integration is treated as an indispensable component of long-term healing rather than an afterthought.
              </p>
              <p>
                Every operational detail—from pre-treatment cardiometabolic screening to calm post-session recovery suites—is designed to engender deep trust and physiological tranquility.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/approach"
                className="text-xs font-mono uppercase tracking-wider text-forest-800 hover:text-forest-950 inline-flex items-center gap-1 font-medium underline underline-offset-4"
              >
                <span>Explore the Clinical Principles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-xl overflow-hidden shadow-card border border-stone-200">
              <Image
                src={CLINIC_IMAGES.quietConsultationRoom}
                alt="Architectural consultation room with natural daylight and bespoke wood details"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-ivory text-xs font-serif italic">
                &ldquo;A clinical space should be as calming as it is medically capable.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Clinical Standards */}
      <section className="bg-forest-900 text-ivory-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="editorial-tag text-sage-300">Clinical Governance</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
              Standards of Practice
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed font-light">
              Our conceptual framework is constructed around five non-negotiable operational standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-9 h-9 rounded bg-forest-800/80 text-sage-300 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory">Direct Physician Oversight</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Patients are never left in the care of non-medical staff during active infusions. An experienced physician or specialist nurse practitioner oversees every administration.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-9 h-9 rounded bg-forest-800/80 text-sage-300 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory">Multidisciplinary Review</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Care decisions involve collaboration across psychiatric, somatic, and psychotherapeutic domains, ensuring no symptom is evaluated in isolation.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-9 h-9 rounded bg-forest-800/80 text-sage-300 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory">Individual Titration</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Doses are calibrated conservatively to each patient’s unique physiological response and therapeutic tolerance, rather than applied using rigid weight tables.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-9 h-9 rounded bg-forest-800/80 text-sage-300 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory">Evidence-Informed Practice</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Protocols reflect current peer-reviewed literature and guidelines established by professional anaesthetic and psychiatric bodies.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-9 h-9 rounded bg-forest-800/80 text-sage-300 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory">Reflective Integration</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Neuroplastic windows are paired with structured psychotherapeutic support, maximizing the cognitive consolidation of therapeutic insights.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-9 h-9 rounded bg-forest-800/80 text-sage-300 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory">Longitudinal Continuity</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Standardized check-ins at 24 hours, 7 days, and 30 days track durability of response and maintain close communication with referring clinicians.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multidisciplinary Team Preview CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-xl border border-stone-200 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="editorial-tag text-sage-700">Clinical Leadership</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-forest-900 font-normal">
              Meet the Multidisciplinary Care Team
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Explore how clinical roles—from specialist physicians and psychiatric consultants to integration coordinators—collaborate within our demonstration model.
            </p>
          </div>
          <Link
            href="/team"
            className="px-6 py-3 rounded bg-forest-800 text-ivory text-xs font-mono uppercase tracking-wider hover:bg-forest-700 transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <span>View Team Profiles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Concept Notice */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-5 rounded-lg bg-stone-100 border border-stone-300 text-xs text-charcoal-600 leading-relaxed">
          <strong className="text-forest-900 font-medium">Demonstration Notice:</strong> VALENCE Clinical is an independent design portfolio piece authored by NOVA Digital Studio. All practice policies, team compositions, and facility descriptions are fictional concepts intended to showcase best-in-class healthcare UX architecture.
        </div>
      </section>
    </div>
  );
}
