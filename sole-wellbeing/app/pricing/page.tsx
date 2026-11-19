'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import BookingModal from '@/components/BookingModal';

export default function PricingPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('routine-foot-care');

  const openBookingFor = (service: string) => {
    setSelectedService(service);
    setBookingModalOpen(true);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-cream-200/80 border-b border-pebble-300 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam-100 border border-seafoam-300 text-teal-950 text-[10px] font-mono uppercase tracking-widest font-semibold">
            <span>Honest Healthcare</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-teal-950 font-medium tracking-tight max-w-3xl">
            Clear, upfront pricing.
          </h1>
          <p className="text-slatecharcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            We believe in complete transparency. Every fee includes all sterile disposables, autoclaved instrument sets, emollient applications, and personalized aftercare.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Routine Foot Health */}
          <div className="p-8 rounded-2xl bg-white border border-pebble-300 shadow-card flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="clinical-tag text-seafoam-700 bg-seafoam-50 px-2 py-0.5 rounded border border-seafoam-200">
                Most Popular
              </span>
              <h3 className="font-serif text-2xl text-teal-950 font-medium">Routine Foot Care</h3>
              <p className="text-xs text-slatecharcoal-600 leading-relaxed font-light">
                Comprehensive maintenance including medical nail trimming, thinning, clearing sulci, and gentle skin hydration.
              </p>

              <div className="pt-2 border-t border-pebble-200 space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-4xl text-teal-950 font-semibold">&pound;35</span>
                  <span className="text-xs font-mono text-slatecharcoal-500">/ clinic visit</span>
                </div>
                <div className="text-xs font-mono text-teal-900 font-semibold">
                  &pound;40 for home visit
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slatecharcoal-700 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-seafoam-600 shrink-0" />
                  <span>Antiseptic foot cleanse &amp; skin review</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-seafoam-600 shrink-0" />
                  <span>Toenail clipping &amp; burr reduction</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-seafoam-600 shrink-0" />
                  <span>Medical urea cream application</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => openBookingFor('routine-foot-care')}
              className="w-full py-3 rounded-xl bg-teal-900 text-white text-xs font-semibold hover:bg-teal-800 transition-colors shadow-sm"
            >
              Book Routine Care
            </button>
          </div>

          {/* Card 2: Specialized Clinical Corns / Nails */}
          <div className="p-8 rounded-2xl bg-teal-950 text-white border border-teal-900 shadow-elevated flex flex-col justify-between space-y-6 relative">
            <div className="space-y-4">
              <span className="clinical-tag text-seafoam-300 bg-teal-900 px-2 py-0.5 rounded border border-teal-800">
                Targeted Relief
              </span>
              <h3 className="font-serif text-2xl text-cream-100 font-medium">Corn &amp; Callus Debridement</h3>
              <p className="text-xs text-slatecharcoal-300 leading-relaxed font-light">
                Painless enucleation of painful corns, cracked heel treatment, or ingrowing nail spike removal.
              </p>

              <div className="pt-2 border-t border-teal-900 space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-4xl text-cream-100 font-semibold">&pound;38</span>
                  <span className="text-xs font-mono text-slatecharcoal-400">/ clinic visit</span>
                </div>
                <div className="text-xs font-mono text-seafoam-300 font-semibold">
                  &pound;45 for home visit
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slatecharcoal-300 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-seafoam-400 shrink-0" />
                  <span>Immediate walking pain relief</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-seafoam-400 shrink-0" />
                  <span>Complete corn nucleus enucleation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-seafoam-400 shrink-0" />
                  <span>Friction offloading padding included</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => openBookingFor('corns-calluses')}
              className="w-full py-3 rounded-xl bg-seafoam-500 text-teal-950 text-xs font-semibold hover:bg-seafoam-400 transition-colors shadow-sm"
            >
              Book Targeted Care
            </button>
          </div>

          {/* Card 3: Diabetic Neurovascular Review */}
          <div className="p-8 rounded-2xl bg-white border border-pebble-300 shadow-card flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="clinical-tag text-teal-900 bg-pebble-200 px-2 py-0.5 rounded">
                Specialist Health
              </span>
              <h3 className="font-serif text-2xl text-teal-950 font-medium">Diabetic Foot Check</h3>
              <p className="text-xs text-slatecharcoal-600 leading-relaxed font-light">
                Complete neurological sensation mapping, vascular pulse assessment, skin check, and conservative care.
              </p>

              <div className="pt-2 border-t border-pebble-200 space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-4xl text-teal-950 font-semibold">&pound;42</span>
                  <span className="text-xs font-mono text-slatecharcoal-500">/ clinic visit</span>
                </div>
                <div className="text-xs font-mono text-teal-900 font-semibold">
                  &pound;48 for home visit
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slatecharcoal-700 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-seafoam-600 shrink-0" />
                  <span>10g monofilament sensory mapping</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-seafoam-600 shrink-0" />
                  <span>Pedal pulse &amp; perfusion check</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-seafoam-600 shrink-0" />
                  <span>Written findings summary for GP</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => openBookingFor('diabetic-assessment')}
              className="w-full py-3 rounded-xl bg-teal-900 text-white text-xs font-semibold hover:bg-teal-800 transition-colors shadow-sm"
            >
              Book Diabetic Review
            </button>
          </div>
        </div>

        {/* Payment info */}
        <div className="p-6 rounded-xl bg-pebble-100 border border-pebble-200 text-xs text-slatecharcoal-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <strong className="text-teal-950">Payment Methods Accepted:</strong>
            <p>Cash, contactless debit/credit cards, Apple Pay, and direct bank transfer on the day of treatment.</p>
          </div>
          <span className="text-teal-900 font-mono text-[11px] font-semibold">
            Receipts provided for private health cash plans
          </span>
        </div>
      </section>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
