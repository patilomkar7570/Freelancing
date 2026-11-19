"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Calendar, ShieldCheck, ArrowRight, Info } from "lucide-react";
import { GalleryFilter } from "@/components/interactive/GalleryFilter";
import { useModals } from "@/context/ModalContext";

export default function SmileGalleryPage() {
  const { openConsultation } = useModals();

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-ivory-100 to-white pt-12 pb-16 border-b border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush border border-burgundy-200 text-burgundy text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-goldAccent" />
            <span>Aesthetic Simulation & Case Studies</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal max-w-3xl leading-tight">
            Smile gallery: The harmony of{" "}
            <span className="italic font-normal text-burgundy">form & function.</span>
          </h1>
          <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            Explore simulated treatment case studies illustrating how modern orthodontic modalities—from clear aligners to early growth guidance—harmonize facial proportions, correct complex bites, and create lasting confidence.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => openConsultation("Adult")}
              className="px-6 py-3 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-700 transition-colors shadow-sm flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-ivory-200" />
              <span>Request Personal 3D Scan (Demo)</span>
            </button>
            <Link
              href="/treatments"
              className="px-5 py-3 rounded-full border border-borderSoft bg-white hover:bg-ivory-100 text-charcoal text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Explore All Treatments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Interactive Filterable Gallery Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <GalleryFilter />
      </section>

      {/* Ethical Disclosure Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-ivory-100 border border-borderSoft flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-burgundy text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Ethical Healthcare Disclosure</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
              Every Smile Journey is Unique
            </h3>
            <p className="text-xs sm:text-sm text-mutedText max-w-xl leading-relaxed">
              Biological response times and anatomical constraints vary between patients. In an authentic clinical setting, exact timelines and aesthetic outcomes depend on a comprehensive diagnosis by a licensed specialist orthodontist.
            </p>
          </div>

          <button
            onClick={() => openConsultation("Adult")}
            className="px-6 py-3 rounded-full bg-burgundy text-white font-semibold text-xs whitespace-nowrap hover:bg-burgundy-700 transition-colors shadow-sm"
          >
            Schedule Discovery Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
