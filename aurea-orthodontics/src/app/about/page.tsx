"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Compass,
  Activity,
  Heart,
  Layers,
  Calendar,
  ArrowRight,
  Info,
} from "lucide-react";
import { useModals } from "@/context/ModalContext";
import { CLINIC_INFO } from "@/data/clinicInfo";

export default function AboutPage() {
  const { openConsultation, openBrandSpec } = useModals();

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-ivory-100 to-white pt-12 pb-16 border-b border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush border border-burgundy-200 text-burgundy text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-goldAccent" />
            <span>Practice Ethos & Clinical Philosophy</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal max-w-3xl leading-tight">
            Where biological science meets the{" "}
            <span className="italic font-normal text-burgundy">architecture of harmony.</span>
          </h1>
          <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            AUREA was conceived on a single foundational premise: that orthodontics is not merely about straightening teeth, but about designing a harmonious, healthy smile that complements your unique facial anatomy for life.
          </p>
        </div>
      </section>

      {/* Origin & Philosophy Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              Our Foundational Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-snug">
              Moving beyond traditional mechanical orthodontics.
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-charcoal/80 leading-relaxed">
              <p>
                In classical orthodontics, treatment plans were often dictated by rigid formulas: teeth were frequently extracted to fit into existing narrow bone perimeter, resulting in flatter facial profiles and constricted airways later in life.
              </p>
              <p>
                AUREA was designed to champion an airway-conscious, biology-first paradigm. By employing gentle, continuous forces and high-precision 3D digital planning, we widen narrow dental arches naturally, preserve natural tooth structure, and maintain the fullness of the lips and facial contours.
              </p>
              <p>
                Every smile we design honors the Golden Smile Arc—the natural curvature where the incisal edges of your upper teeth follow the gentle upward curve of your lower lip when you smile.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => openConsultation("Adult")}
                className="px-6 py-3.5 rounded-full bg-burgundy text-white font-semibold text-xs sm:text-sm hover:bg-burgundy-700 transition-colors shadow-sm"
              >
                Schedule Consultation
              </button>
              <button
                onClick={openBrandSpec}
                className="text-xs font-semibold text-charcoal hover:text-burgundy underline underline-offset-4 transition-colors"
              >
                View Brand Identity Rationale
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated border-4 border-white bg-ivory-200">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Modern Orthodontic Clinic Environment"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-card border border-borderSoft text-xs text-mutedText mt-4 flex items-center gap-3">
              <Compass className="w-5 h-5 text-burgundy flex-shrink-0" />
              <span>
                Demonstration environment designed for calm acoustics, natural daylight, and unhurried clinical discovery.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Biological Pillars */}
      <section className="bg-ivory-100 py-16 border-y border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              Clinical Core
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              The Four Pillars of AUREA Orthodontics
            </h2>
            <p className="text-xs sm:text-sm text-mutedText">
              Every patient journey is guided by strict bio-mechanical integrity and modern dental science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blush flex items-center justify-center text-burgundy">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-charcoal">
                1. Airway & Facial Balance
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                We design broad, physiological dental arches that provide ample space for the tongue, promoting healthy nasal breathing and preventing sleep-disordered breathing patterns.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blush flex items-center justify-center text-burgundy">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-charcoal">
                2. Continuous Light Forces
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Heavy forces can compress the periodontal ligament and cause root resorption. We use state-of-the-art shape-memory alloys and calibrated aligners that move teeth gently and safely.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blush flex items-center justify-center text-burgundy">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-charcoal">
                3. Non-Extraction Preference
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                By taking advantage of early growth windows and transverse expansion, we preserve natural permanent dentition whenever biologically sound.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blush flex items-center justify-center text-burgundy">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-base font-bold text-charcoal">
                4. Lifelong Stability
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Teeth naturally remodel throughout life. Our dual-retention protocols (bonded lingual wire plus custom clear night retainers) ensure your smile stays aligned permanently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Clinic Technology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
            Modern Digital Suite
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Advanced Diagnostic Precision
          </h2>
          <p className="text-xs sm:text-sm text-mutedText">
            Our practice eliminates outdated, messy impression putty in favor of fast, optical 3D scanning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-3">
            <h3 className="font-heading text-base font-bold text-charcoal">
              3D Intraoral Optical Scanning
            </h3>
            <p className="text-xs text-mutedText leading-relaxed">
              Captures 6,000 frames per second to construct a photorealistic 3D virtual model of your teeth in under three minutes with zero gag reflex.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-3">
            <h3 className="font-heading text-base font-bold text-charcoal">
              Ultra-Low Dose Digital Radiography
            </h3>
            <p className="text-xs text-mutedText leading-relaxed">
              Provides crystal-clear panoramic and cephalometric imaging to analyze root angles and jaw bone density with up to 80% less radiation than conventional X-rays.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-3">
            <h3 className="font-heading text-base font-bold text-charcoal">
              In-House 3D Printing & CAD Lab
            </h3>
            <p className="text-xs text-mutedText leading-relaxed">
              Enables same-week turnaround for custom replacement retainers, indirect bonding trays, and emergency aligner fabrication.
            </p>
          </div>
        </div>
      </section>

      {/* Independent Demonstration Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-6 rounded-3xl bg-blush-soft border border-burgundy-200 text-xs text-burgundy-900 flex items-start gap-4">
          <Info className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-burgundy">
              NOVA Digital Studio Portfolio Concept
            </h4>
            <p className="leading-relaxed">
              AUREA Orthodontics is a fictional brand concept created to illustrate high-level UX architecture, brand design, and modern clinical communication. It does not represent an operating clinic, real healthcare practitioners, or medical endorsements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
