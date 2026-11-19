"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, HelpCircle, Calendar, ArrowRight, Info } from "lucide-react";
import { FaqSearch } from "@/components/interactive/FaqSearch";
import { useModals } from "@/context/ModalContext";

export default function FAQPage() {
  const { openConsultation } = useModals();

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-ivory-100 to-white pt-12 pb-16 border-b border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush border border-burgundy-200 text-burgundy text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-goldAccent" />
            <span>Comprehensive Orthodontic Guidance</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal max-w-3xl leading-tight">
            Frequently asked questions: Clear answers for{" "}
            <span className="italic font-normal text-burgundy">every patient.</span>
          </h1>
          <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            Whether you are curious about orthodontic timing, the initial consultation experience, daily dietary adjustments, or financing options, explore our categorized knowledge base below.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => openConsultation("Adult")}
              className="px-6 py-3 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-700 transition-colors shadow-sm flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-ivory-200" />
              <span>Ask Our Team in Person</span>
            </button>
            <Link
              href="/patient-resources"
              className="px-5 py-3 rounded-full border border-borderSoft bg-white hover:bg-ivory-100 text-charcoal text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Download Patient Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Interactive Searchable FAQ Component */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
        <FaqSearch onRequestConsultation={() => openConsultation("Adult")} />
      </section>
    </div>
  );
}
