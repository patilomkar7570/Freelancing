import React from 'react';
import Image from 'next/image';
import {
  MapPin,
  Clock,
  Car,
  Accessibility,
  Bed,
  Plane,
  Info,
} from 'lucide-react';
import { CLINIC_IMAGES } from '@/lib/images';
import ConsultationButton from '@/components/ConsultationButton';

export const metadata = {
  title: 'Planning Your Visit & Practice Environment | VALENCE Clinical',
  description:
    'Visit planning, sensory environment specifications, accessibility accommodations, travel recommendations, and practice address placeholders.',
};

export default function VisitPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-stone-100/80 border-b border-stone-200 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-200 text-charcoal-700 text-[10px] font-mono uppercase tracking-widest">
            <span>Location &amp; Visit Planning &bull; Fictional Showcase</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-forest-900 font-normal tracking-tight max-w-3xl">
            A sanctuary designed for tranquility and restorative care.
          </h1>
          <p className="text-charcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Every architectural dimension—from arrival lounges to recovery suites—is calibrated to minimize stimulation and create an atmosphere of safety and calm.
          </p>
        </div>
      </section>

      {/* Demonstration Location Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-lg bg-stone-200/60 border border-stone-300 text-xs text-charcoal-700 flex items-start gap-3">
          <Info className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Fictional Location Demonstration Notice:</strong> In adherence to project guidelines, VALENCE Clinical does not represent an operating commercial facility or real physical address. The address, suite numbers, and nearby accommodation details below are conceptual placeholders developed by NOVA Digital Studio to demonstrate healthcare UX information architecture.
          </p>
        </div>
      </section>

      {/* The Practice Environment & Imagery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="editorial-tag text-sage-700">Sensory Calibration</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal leading-snug">
              Quiet architecture as a clinical support tool.
            </h2>
            <div className="space-y-4 text-sm text-charcoal-700 leading-relaxed font-light">
              <p>
                The sensory environment during ketamine administration profoundly shapes patient comfort and emotional regulation. Hospitals and acute outpatient clinics are frequently characterized by high ambient noise, harsh fluorescent illumination, and sterile odors—stimuli that exacerbate anxiety.
              </p>
              <p>
                Our conceptual facility utilizes natural materials—warm European oak, tactile linen textiles, textured stone surfaces, and acoustic absorption baffles—creating a gentle residential aesthetic that maintains complete medical telemetry capability.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] relative rounded-xl overflow-hidden shadow-card">
              <Image
                src={CLINIC_IMAGES.receptionLounge}
                alt="Quiet architectural arrival lounge with natural light and refined seating"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="aspect-[4/5] relative rounded-xl overflow-hidden shadow-card translate-y-6">
              <Image
                src={CLINIC_IMAGES.treatmentSuite}
                alt="Treatment suite with comfortable recliner and gentle indirect lighting"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Details Grid: Address, Hours, Accessibility */}
      <section className="bg-forest-900 text-ivory-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="editorial-tag text-sage-300">Logistical Framework</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
              Practice Information &amp; Hours
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed font-light">
              Essential logistical information for planning appointments and visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-8 h-8 rounded bg-forest-800 text-sage-300 flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-ivory">Practice Address</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light font-mono text-[11px]">
                VALENCE Clinical Concept <br />
                Alpine Pavilion &bull; Suite 300 <br />
                450 Elevation Way <br />
                [Demonstration Location Placeholder]
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-8 h-8 rounded bg-forest-800 text-sage-300 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-ivory">Consultation Hours</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light font-mono text-[11px]">
                Monday – Thursday: 08:30 – 17:00 <br />
                Friday: 09:00 – 14:00 (Integrations) <br />
                Saturday – Sunday: Closed <br />
                Appointments strictly pre-scheduled.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-8 h-8 rounded bg-forest-800 text-sage-300 flex items-center justify-center">
                <Car className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-ivory">Arrival &amp; Parking</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Dedicated reserved patient parking adjacent to the private clinic entrance, allowing discreet arrival and departure away from public thoroughfares.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-8 h-8 rounded bg-forest-800 text-sage-300 flex items-center justify-center">
                <Accessibility className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-ivory">Accessibility Standards</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Barrier-free step-less entrance, wide medical corridors, elevator access, fully accessible private restrooms, and sensory dimming controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel & Multi-Day Visit Planning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 max-w-2xl">
          <span className="editorial-tag text-sage-700">Out-of-Region Patients</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal">
            Planning Travel &amp; Accommodations
          </h2>
          <p className="text-charcoal-600 text-sm leading-relaxed">
            For individuals traveling from other regions for intensive evaluation and initial care cycles, deliberate planning is essential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-white border border-stone-200 shadow-subtle space-y-4">
            <div className="flex items-center gap-2 text-forest-900 font-medium text-xs font-mono uppercase tracking-wider border-b border-stone-200 pb-3">
              <Bed className="w-4 h-4 text-forest-800" />
              <span>Quiet Partner Accommodations</span>
            </div>
            <p className="text-xs text-charcoal-700 leading-relaxed">
              We recommend selecting calm, low-stimulation hotels or residential boutique apartments located within a 15-minute radius of the practice. Avoid noisy downtown commercial hotels or crowded conference centers to preserve post-session serenity.
            </p>
            <div className="p-3 bg-stone-50 rounded border border-stone-200 text-[11px] text-stone-600 font-mono">
              Placeholder recommendation list provided upon initial consultation booking.
            </div>
          </div>

          <div className="p-8 rounded-xl bg-white border border-stone-200 shadow-subtle space-y-4">
            <div className="flex items-center gap-2 text-forest-900 font-medium text-xs font-mono uppercase tracking-wider border-b border-stone-200 pb-3">
              <Plane className="w-4 h-4 text-forest-800" />
              <span>Transit Pacing &amp; Rest Intervals</span>
            </div>
            <p className="text-xs text-charcoal-700 leading-relaxed">
              Patients should arrive at least 24 hours prior to their initial clinical appointment to acclimate and rest. Commercial flights or long automobile journeys should not be scheduled on active administration days.
            </p>
            <div className="p-3 bg-stone-50 rounded border border-stone-200 text-[11px] text-stone-600 font-mono">
              Always travel with your designated support person / chaperone.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-xl bg-white border border-stone-200 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="editorial-tag text-sage-700">Consultation Planning</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-forest-900 font-normal">
              Schedule an Initial Consultation Assessment
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Our clinical coordinator will help you map out appointment timing and answer practical questions.
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
