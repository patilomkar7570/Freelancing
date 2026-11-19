'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import BookingModal from '@/components/BookingModal';

export default function DiabeticCarePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-cream-200/80 border-b border-pebble-300 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam-100 border border-seafoam-300 text-teal-950 text-[10px] font-mono uppercase tracking-widest font-semibold">
            <span>Specialist Clinical Focus &bull; Diabetes Care</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-teal-950 font-medium tracking-tight max-w-3xl">
            Diabetic Foot Health &amp; Neurovascular Screening
          </h1>
          <p className="text-slatecharcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Protecting your feet from the complications of diabetes. Comprehensive neurological sensation testing, vascular pulse checks, and gentle clinical nail maintenance by an NHS experienced registered nurse.
          </p>
        </div>
      </section>

      {/* Why Foot Care Matters in Diabetes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-5">
            <span className="clinical-tag text-seafoam-700 bg-seafoam-50 px-2.5 py-1 rounded border border-seafoam-200">
              Clinical Significance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-teal-950 font-medium leading-snug">
              Why Diabetes Requires Specialist Foot Monitoring
            </h2>
            <div className="space-y-4 text-sm text-slatecharcoal-700 leading-relaxed font-light">
              <p>
                Diabetes can subtly affect the feet in two major ways over time:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-800 mt-2 shrink-0" />
                  <span>
                    <strong>Peripheral Neuropathy (Loss of Sensation):</strong> Damage to sensory nerves means you may not feel pain from a blister, pebble in your shoe, or tight toe seam until a serious wound has developed.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-800 mt-2 shrink-0" />
                  <span>
                    <strong>Peripheral Arterial Disease (Reduced Circulation):</strong> Reduced microvascular blood flow slows healing, making minor cracks or corns susceptible to infection and ulceration.
                  </span>
                </li>
              </ul>
              <p>
                Regular clinical monitoring by an experienced nurse enables early detection of pressure points, calluses, or sensory deficits long before tissue breakdown occurs.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-pebble-300 shadow-card space-y-4">
            <div className="flex items-center gap-2 text-teal-950 font-semibold text-xs font-mono uppercase tracking-wider border-b border-pebble-200 pb-3">
              <ShieldCheck className="w-4 h-4 text-seafoam-600" />
              <span>What Our Diabetic Assessment Includes</span>
            </div>
            <ul className="space-y-3 text-xs text-slatecharcoal-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-seafoam-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-teal-950">10g Monofilament Sensation Mapping:</strong> Testing touch and protective sensation across specific anatomical points on both feet.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-seafoam-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-teal-950">Pedal Arterial Pulse Palpation:</strong> Checking dorsalis pedis and posterior tibial arterial blood flow and capillary refill time.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-seafoam-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-teal-950">Visual Dermatological &amp; Biomechanical Check:</strong> Inspecting interdigital spaces for maceration, early fungal signs, and pressure callus.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-seafoam-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-teal-950">Safe Clinical Nail Trim:</strong> Professional conservative clipping without sharp nippers or risk of nicking skin.
                </div>
              </li>
            </ul>

            <div className="pt-2 border-t border-pebble-200 flex items-center justify-between">
              <span className="font-mono text-xs text-teal-950 font-semibold">&pound;42 (Clinic) / &pound;48 (Home)</span>
              <button
                onClick={() => setBookingModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-teal-900 text-white text-xs font-semibold hover:bg-teal-800 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Book Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-pebble-100 border border-pebble-300 space-y-4">
          <div className="flex items-center gap-2 text-rose-800 font-mono text-xs uppercase tracking-wider font-semibold">
            <AlertTriangle className="w-4 h-4 text-rose-700" />
            <span>Red Flag Symptoms for Diabetic Patients</span>
          </div>
          <p className="text-xs text-slatecharcoal-700 leading-relaxed font-light">
            If you notice any of the following, do not attempt to cut or treat your feet yourself. Contact Cally or your GP surgery promptly:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-slatecharcoal-800 font-medium">
            <div className="p-3 bg-white rounded-xl border border-pebble-200">
              &bull; Redness, swelling, or localized heat around a toe or heel
            </div>
            <div className="p-3 bg-white rounded-xl border border-pebble-200">
              &bull; Any discharge, weeping, or odor from a crack or blister
            </div>
            <div className="p-3 bg-white rounded-xl border border-pebble-200">
              &bull; Dark or blackened spots under a callus or toenail
            </div>
            <div className="p-3 bg-white rounded-xl border border-pebble-200">
              &bull; Sudden coldness, paleness, or intense cramping in lower limbs
            </div>
          </div>
        </div>
      </section>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService="diabetic-assessment"
      />
    </div>
  );
}
