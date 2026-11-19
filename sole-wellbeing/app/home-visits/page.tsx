'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  CheckCircle2,
  Clock,
  MapPin,
  ShieldCheck,
  Calendar,
  Phone,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SOLE_IMAGES } from '@/lib/images';
import BookingModal from '@/components/BookingModal';

export default function HomeVisitsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-cream-200/80 border-b border-pebble-300 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam-100 border border-seafoam-300 text-teal-950 text-[10px] font-mono uppercase tracking-widest font-semibold">
            <span>Mobile Healthcare &bull; Domiciliary Service</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-teal-950 font-medium tracking-tight max-w-3xl">
            Hospital-grade foot care in the comfort of your home.
          </h1>
          <p className="text-slatecharcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            No stressful car journeys, steep clinic stairs, or busy waiting rooms. Cally brings full portable clinical podiatry equipment right to your living room.
          </p>
        </div>
      </section>

      {/* Main Home Visit Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="clinical-tag text-seafoam-700 bg-seafoam-50 px-2.5 py-1 rounded border border-seafoam-200">
              Why Choose Home Visits?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-teal-950 font-medium leading-snug">
              Professional clinical standards without leaving your armchair.
            </h2>
            <div className="space-y-4 text-sm text-slatecharcoal-700 leading-relaxed font-light">
              <p>
                Many individuals delay seeking essential foot care because traveling to a high-street clinic is physically challenging or impossible. Arthritic hips and knees, diminished eyesight, post-stroke recovery, or dementia make routine nail clipping and corn removal daunting tasks for families to manage alone.
              </p>
              <p>
                Our mobile service was created specifically to eliminate these barriers. As an NHS-trained registered nurse with enhanced DBS certification, Cally provides gentle, respectful, dignified care that puts patients and their families completely at ease.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-teal-900 text-white font-sans text-xs font-semibold hover:bg-teal-800 transition-colors inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-seafoam-400" />
                <span>Request a Home Visit</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-pebble-300">
              <Image
                src={SOLE_IMAGES.homeComfort}
                alt="Comfortable home environment for domiciliary treatment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect During a Home Visit */}
      <section className="bg-teal-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="clinical-tag text-seafoam-300">Appointment Walkthrough</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream-100 font-medium">
              What to Expect During Your Home Visit
            </h2>
            <p className="text-slatecharcoal-300 text-sm leading-relaxed font-light">
              We make the experience effortless, clean, and completely hygienic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-teal-900/80 border border-teal-800 space-y-3">
              <span className="font-mono text-xs text-seafoam-400 font-semibold">Step 01</span>
              <h3 className="font-serif text-lg text-cream-100 font-medium">Arrival &amp; Clean Setup</h3>
              <p className="text-xs text-slatecharcoal-300 leading-relaxed font-light">
                Cally arrives promptly, lays down protective clinical floor sheeting, sets up an ergonomic adjustable footrest, and washes hands thoroughly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-teal-900/80 border border-teal-800 space-y-3">
              <span className="font-mono text-xs text-seafoam-400 font-semibold">Step 02</span>
              <h3 className="font-serif text-lg text-cream-100 font-medium">Assessment &amp; History</h3>
              <p className="text-xs text-slatecharcoal-300 leading-relaxed font-light">
                A brief chat reviewing medical conditions, diabetes, medications, and specific foot pain points before beginning any treatment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-teal-900/80 border border-teal-800 space-y-3">
              <span className="font-mono text-xs text-seafoam-400 font-semibold">Step 03</span>
              <h3 className="font-serif text-lg text-cream-100 font-medium">Sterile Treatment</h3>
              <p className="text-xs text-slatecharcoal-300 leading-relaxed font-light">
                Opening an individual vacuum-autoclaved pouch. Nail clipping, burr thinning, corn enucleation, and callus smoothing completed gently.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-teal-900/80 border border-teal-800 space-y-3">
              <span className="font-mono text-xs text-seafoam-400 font-semibold">Step 04</span>
              <h3 className="font-serif text-lg text-cream-100 font-medium">Hydration &amp; Leave Clean</h3>
              <p className="text-xs text-slatecharcoal-300 leading-relaxed font-light">
                Foot balm massage applied, all clinical waste removed, and your floor left spotless. Next visit scheduled at your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Radius & Areas Served */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-pebble-300 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="clinical-tag text-seafoam-700">Service Coverage</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-teal-950 font-medium">
              Home Visit Coverage Radius
            </h3>
            <p className="text-xs sm:text-sm text-slatecharcoal-600 leading-relaxed">
              We travel across our local town and surrounding village communities (typically within a 10–12 mile radius). If you are slightly further afield, please get in touch to check availability.
            </p>
          </div>

          <div className="shrink-0 space-y-2">
            <div className="font-mono text-xs text-teal-900 font-semibold">
              Home Visit Rate: &pound;40 – &pound;45 per session
            </div>
            <button
              onClick={() => setBookingModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-teal-900 text-white text-xs font-semibold hover:bg-teal-800 transition-colors w-full"
            >
              Book Home Visit Now
            </button>
          </div>
        </div>
      </section>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultVisitType="home"
      />
    </div>
  );
}
