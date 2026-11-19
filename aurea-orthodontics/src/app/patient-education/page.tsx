"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Heart,
  ShieldAlert,
  Sparkle,
  Utensils,
  BookOpen,
  Info,
  Calendar,
} from "lucide-react";
import { useModals } from "@/context/ModalContext";

export default function PatientEducationHubPage() {
  const { openConsultation } = useModals();

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-ivory-100 to-white pt-12 pb-16 border-b border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush border border-burgundy-200 text-burgundy text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-goldAccent" />
            <span>Comprehensive Educational Resources</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal max-w-3xl leading-tight">
            Patient education: Knowledge empowers a{" "}
            <span className="italic font-normal text-burgundy">confident smile.</span>
          </h1>
          <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            Successful orthodontic care is a partnership between patient, family, and specialist team. Explore our curated guides covering proper cleaning routines, safe dietary modifications, and immediate home relief for minor appliance concerns.
          </p>

          <div className="p-3.5 rounded-2xl bg-white border border-borderSoft text-xs text-mutedText flex items-center gap-2 max-w-2xl">
            <Info className="w-4 h-4 text-burgundy flex-shrink-0" />
            <span>
              All medical guidance is conservatively prepared for portfolio demonstration and patient education.
            </span>
          </div>
        </div>
      </section>

      {/* 3 Core Topic Gateways */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
            Core Learning Modules
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Essential Guides for Active Treatment
          </h2>
          <p className="text-xs sm:text-sm text-mutedText">
            Select a specialized module to dive deep into daily routines and appliance care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Module 1: Oral Hygiene */}
          <div className="p-8 rounded-3xl bg-white border border-borderSoft shadow-card flex flex-col justify-between group hover:border-burgundy/40 transition-all space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blush flex items-center justify-center text-burgundy shadow-sm group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6 text-burgundy" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-burgundy">
                Hygiene & Prevention
              </span>
              <h3 className="font-heading text-xl font-bold text-charcoal group-hover:text-burgundy transition-colors">
                Oral Hygiene & Cleaning
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                Learn the 45-degree bracket angle technique, how to use interdental tree brushes, threading superfloss under wires, and how to prevent white spot decalcification lesions.
              </p>

              <div className="pt-2 border-t border-borderSoft/60 space-y-1.5 text-xs text-mutedText">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                  <span>5-step daily cleaning protocol</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                  <span>Orthodontic tool comparison</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                  <span>Enamel fluoride protection tips</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-borderSoft">
              <Link
                href="/patient-education/oral-hygiene"
                className="w-full py-3 rounded-full bg-ivory-100 group-hover:bg-burgundy group-hover:text-white text-charcoal text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
              >
                <span>Read Full Hygiene Protocol</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Module 2: Eating with Braces */}
          <div className="p-8 rounded-3xl bg-white border border-borderSoft shadow-card flex flex-col justify-between group hover:border-burgundy/40 transition-all space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blush flex items-center justify-center text-burgundy shadow-sm group-hover:scale-105 transition-transform">
                <Utensils className="w-6 h-6 text-burgundy" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-burgundy">
                Nutrition & Care
              </span>
              <h3 className="font-heading text-xl font-bold text-charcoal group-hover:text-burgundy transition-colors">
                Eating with Braces & Food Checker
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                Interactive food database filtering safe soft foods, items to cut or prepare with care, and high-risk crunchy or sticky foods that break appliances.
              </p>

              <div className="pt-2 border-t border-borderSoft/60 space-y-1.5 text-xs text-mutedText">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                  <span>Interactive instant food search</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                  <span>Gentle adjustment-day meal plan</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                  <span>Safe alternatives for crunchy cravings</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-borderSoft">
              <Link
                href="/patient-education/eating-with-braces"
                className="w-full py-3 rounded-full bg-ivory-100 group-hover:bg-burgundy group-hover:text-white text-charcoal text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
              >
                <span>Launch Food Checker</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Module 3: Emergencies */}
          <div className="p-8 rounded-3xl bg-white border border-borderSoft shadow-card flex flex-col justify-between group hover:border-burgundy/40 transition-all space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blush flex items-center justify-center text-burgundy shadow-sm group-hover:scale-105 transition-transform">
                <ShieldAlert className="w-6 h-6 text-burgundy" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-burgundy">
                Immediate First Aid
              </span>
              <h3 className="font-heading text-xl font-bold text-charcoal group-hover:text-burgundy transition-colors">
                Orthodontic Emergencies & Triage
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                Step-by-step conservative at-home management for poking wires, loose brackets, lost aligners, and post-adjustment soreness, with guidance on when to call.
              </p>

              <div className="pt-2 border-t border-borderSoft/60 space-y-1.5 text-xs text-mutedText">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                  <span>Symptom triage selector tool</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                  <span>Orthodontic relief wax instructions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                  <span>Direct emergency clinic line</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-borderSoft">
              <Link
                href="/patient-education/orthodontic-emergencies"
                className="w-full py-3 rounded-full bg-ivory-100 group-hover:bg-burgundy group-hover:text-white text-charcoal text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
              >
                <span>Open Emergency Triage Tool</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* When to Contact Your Specialist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ivory-100 rounded-3xl p-8 sm:p-12 border border-borderSoft space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              Clinical Guidelines
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
              When to Contact an Orthodontic Professional
            </h3>
            <p className="text-xs sm:text-sm text-mutedText">
              Knowing the difference between normal adaptation and issues requiring a quick office visit ensures smooth, comfortable progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-white border border-borderSoft space-y-1.5">
              <h4 className="font-bold text-charcoal flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Normal Expected Occurrences (Manage at Home)
              </h4>
              <p className="text-mutedText leading-relaxed">
                Mild tooth tenderness 24–48 hours after a wire activation or new aligner; minor inner cheek tightness; teeth feeling slightly loose as biological remodeling occurs; minor speech changes during the first 48 hours of aligner wear.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-borderSoft space-y-1.5">
              <h4 className="font-bold text-charcoal flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Situations Prompting a Clinic Call
              </h4>
              <p className="text-mutedText leading-relaxed">
                A sharp wire end causing deep cheek ulceration that relief wax does not soothe; a loose bracket sliding on the main wire; a lost or broken clear aligner tray; direct blow to the mouth during sports resulting in tooth loosening.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
