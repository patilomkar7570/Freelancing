import React from 'react';
import Image from 'next/image';
import {
  Compass,
  ShieldCheck,
  Sparkles,
  Eye,
  Sliders,
  Users,
} from 'lucide-react';
import { CLINIC_IMAGES } from '@/lib/images';
import ConsultationButton from '@/components/ConsultationButton';

export const metadata = {
  title: 'Our Approach & Clinical Philosophy | VALENCE Clinical',
  description:
    'The foundational principles of VALENCE Clinical: personalized attention, physician oversight, informed decision-making, and quiet therapeutic dignity.',
};

export default function ApproachPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-stone-100/80 border-b border-stone-200 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-200 text-charcoal-700 text-[10px] font-mono uppercase tracking-widest">
            <span>Clinical Philosophy &bull; Our Approach</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-forest-900 font-normal tracking-tight max-w-3xl">
            A considered philosophy of specialist care.
          </h1>
          <p className="text-charcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            In an era of rapid healthcare commodification, we uphold a slower, more deliberate standard: where clinical precision and human dignity are indivisible.
          </p>
        </div>
      </section>

      {/* Main Philosophy Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="editorial-tag text-sage-700">The Considered Care Model</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal leading-snug">
              Moving past high-volume clinics toward deep clinical focus.
            </h2>
            <div className="space-y-4 text-sm text-charcoal-700 leading-relaxed font-light">
              <p>
                Specialist ketamine administration is not merely an infusion procedure; it is a profound neurobiological and psychological experience. When care is compressed into hasty 15-minute turnaround slots without proper pre-screening or reflective integration, patient safety and long-term efficacy are compromised.
              </p>
              <p>
                The VALENCE approach is designed as an architectural counterweight. We deliberately maintain low daily patient volumes so attending clinicians remain unhurried, fully present, and attuned to the nuanced signals of each individual patient.
              </p>
              <p>
                We do not claim extraordinary or instantaneous cures. Instead, we offer a serious, evidence-informed medical framework designed to cultivate the physiological stability and cognitive flexibility necessary for sustainable recovery.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-card border border-stone-200">
              <Image
                src={CLINIC_IMAGES.practitionerCare}
                alt="Healthcare practitioner in attentive, respectful consultation with patient"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Six Pillars of the Considered Care Model */}
      <section className="bg-forest-900 text-ivory-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="editorial-tag text-sage-300">Foundational Principles</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
              Six Commitments to Our Patients
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed font-light">
              How our practice philosophy translates into tangible clinical experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-7 rounded-xl bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-forest-800 text-sage-300 flex items-center justify-center">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory">Personalised Attention</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                No two nervous systems share the same neurochemistry or trauma history. We calibrate dosing schedules, environmental lighting, and session pacing strictly to individual tolerability.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-forest-800 text-sage-300 flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory">Informed Decision-Making</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                We believe trust is forged through complete transparency. Patients are fully educated on side effects, non-response possibilities, and alternative therapies prior to treatment initiation.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-forest-800 text-sage-300 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory">Uncompromised Oversight</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Medical presence is not remote or intermittent. Experienced clinical personnel are physically present throughout every active administration, monitoring vitals and providing steady reassurance.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-forest-800 text-sage-300 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory">Clear Expectations</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                We reject sensationalized marketing narratives. Ketamine is an adjunct clinical catalyst that requires active patient engagement, psychological support, and healthy lifestyle integration.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-forest-800 text-sage-300 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory">Respectful Patient Dignity</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Patients in acute mental distress deserve dignity, quiet spaces, and gentle pacing. Our clinic environment is arranged to respect emotional vulnerability without clinical coldness.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-forest-800 text-sage-300 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-ivory">Inter-Professional Harmony</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                We operate as dedicated partners to your primary medical team. Coordinated clinical letters ensure your primary physician and psychotherapist remain central to your healing arc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-xl bg-white border border-stone-200 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="editorial-tag text-sage-700">Experience the Care Model</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-forest-900 font-normal">
              Request a Consultation Assessment
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Discover how our considered approach can support your therapeutic journey or complement your patient care strategy.
            </p>
          </div>
          <ConsultationButton variant="primary">
            Request Consultation Assessment
          </ConsultationButton>
        </div>
      </section>
    </div>
  );
}
