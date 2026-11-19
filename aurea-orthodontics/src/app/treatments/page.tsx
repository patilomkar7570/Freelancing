"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  Activity,
  Smile,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { TREATMENTS } from "@/data/treatments";
import { useModals } from "@/context/ModalContext";
import { SmileAssessmentQuiz } from "@/components/interactive/SmileAssessmentQuiz";

export default function TreatmentsPage() {
  const { openConsultation } = useModals();

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-ivory-100 to-white pt-12 pb-16 border-b border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush border border-burgundy-200 text-burgundy text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-goldAccent" />
            <span>Specialist Orthodontic Modalities</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal max-w-3xl leading-tight">
            Comprehensive orthodontic care, tailored to{" "}
            <span className="italic font-normal text-burgundy">your lifestyle.</span>
          </h1>
          <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            Whether you are considering discreet clear aligners for professional life, low-profile ceramic braces, or gentle interceptive guidance for your child, every treatment is engineered for physiological health and facial harmony.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/treatments/braces"
              className="px-5 py-2.5 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-700 transition-colors flex items-center gap-1.5"
            >
              <span>Explore Aesthetic Braces & Aligners</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/treatments/bite-correction"
              className="px-5 py-2.5 rounded-full border border-borderSoft bg-white hover:bg-ivory-100 text-charcoal text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Explore Bite Correction & Visualizer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Treatments Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
            Clinical Options
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Our Orthodontic Solutions
          </h2>
          <p className="text-xs sm:text-sm text-mutedText">
            Explore our spectrum of orthodontic modalities designed for children, adolescents, and adults.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              className="p-7 rounded-3xl bg-white border border-borderSoft shadow-sm hover:shadow-card transition-all flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blush text-burgundy">
                    {treatment.category} Care
                  </span>
                  <span className="text-[11px] text-mutedText font-mono">
                    {treatment.treatmentTime}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-charcoal group-hover:text-burgundy transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-xs text-charcoal/80 leading-relaxed mt-2.5">
                    {treatment.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-borderSoft">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-mutedText block">
                    Ideal Candidate Profile:
                  </span>
                  <ul className="space-y-1 text-xs text-charcoal">
                    {treatment.idealFor.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-burgundy flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-2 border-t border-borderSoft">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-mutedText block">
                    Key Clinical Highlights:
                  </span>
                  <ul className="space-y-1 text-xs text-mutedText">
                    {treatment.clinicalHighlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-goldAccent flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-borderSoft/60 flex items-center justify-between">
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="text-xs font-semibold text-burgundy hover:text-burgundy-800 flex items-center gap-1 transition-colors"
                >
                  <span>In-Depth Information</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => openConsultation(treatment.category)}
                  className="text-[11px] text-mutedText hover:text-charcoal font-medium"
                >
                  Book Assessment
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 5-Stage Clinical Journey */}
      <section className="bg-ivory-100 py-16 border-y border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              Step-by-Step Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              The AUREA Treatment Journey
            </h2>
            <p className="text-xs sm:text-sm text-mutedText">
              From your initial 3D optical discovery to final retainer delivery, your care is clear, predictable, and supportive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "3D Discovery",
                desc: "High-resolution intraoral scanning, facial photography, and relaxed goal discussion.",
              },
              {
                step: "02",
                title: "Bio-CAD Staging",
                desc: "Dr. Vance & Dr. Thorne engineer tooth vectors, torque limits, and smile arc balance.",
              },
              {
                step: "03",
                title: "Gentle Fitting",
                desc: "Precise bracket placement or custom aligner delivery with zero discomfort.",
              },
              {
                step: "04",
                title: "Progress Tuning",
                desc: "Regular 6–8 week check-ins with shape-memory wire progressions and digital tracking.",
              },
              {
                step: "05",
                title: "Lifelong Retention",
                desc: "Custom clear retainers and bonded lingual wires to preserve your alignment permanently.",
              },
            ].map((stage) => (
              <div
                key={stage.step}
                className="p-5 rounded-3xl bg-white border border-borderSoft space-y-2 shadow-sm"
              >
                <span className="font-serif text-2xl text-burgundy font-light">
                  {stage.step}
                </span>
                <h3 className="font-heading text-sm font-bold text-charcoal">
                  {stage.title}
                </h3>
                <p className="text-xs text-mutedText leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Assessment Callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
            Self-Discovery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Find the Optimal Approach for Your Smile
          </h2>
          <p className="text-xs sm:text-sm text-mutedText">
            Take our 3-question orthodontic assessment to explore recommended treatment options.
          </p>
        </div>

        <SmileAssessmentQuiz onRequestConsultation={() => openConsultation("Adult")} />
      </section>
    </div>
  );
}
