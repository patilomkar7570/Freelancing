"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  AlertTriangle,
  Activity,
  Smile,
  ShieldCheck,
  ChevronRight,
  Info,
  Clock,
  ArrowRight,
} from "lucide-react";
import { BiteVisualizer } from "@/components/interactive/BiteVisualizer";
import { useModals } from "@/context/ModalContext";

export default function BiteCorrectionPage() {
  const { openConsultation } = useModals();

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-ivory-100 to-white pt-12 pb-16 border-b border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush border border-burgundy-200 text-burgundy text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-goldAccent" />
            <span>Functional Occlusion & Jaw Harmony</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal max-w-3xl leading-tight">
            Bite correction: Aligning your jaws for{" "}
            <span className="italic font-normal text-burgundy">lifelong function & comfort.</span>
          </h1>
          <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            True orthodontic excellence is as much about how your upper and lower dental arches meet as it is about straight front teeth. Explore how correcting overbites, underbites, crossbites, and crowding protects dental enamel, relieves TMJ strain, and restores chewing confidence.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => openConsultation("Adult")}
              className="px-6 py-3 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-700 transition-colors shadow-sm flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-ivory-200" />
              <span>Book Comprehensive Bite Assessment</span>
            </button>
            <Link
              href="/treatments/braces"
              className="px-5 py-3 rounded-full border border-borderSoft bg-white hover:bg-ivory-100 text-charcoal text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Explore Braces & Aligners</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Bite Visualizer Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
            Interactive Diagnostic Visualizer
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Explore Common Orthodontic Bite Conditions
          </h2>
          <p className="text-xs sm:text-sm text-mutedText max-w-xl">
            Select any condition below to examine anatomical relationships, potential clinical consequences if left unaddressed, and modern orthodontic treatment pathways.
          </p>
        </div>

        <BiteVisualizer />
      </section>

      {/* In-Depth Clinical Assessment & Treatment Planning */}
      <section className="bg-ivory-100 py-16 border-y border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              Diagnostic Precision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              How We Assess & Plan Complex Malocclusions
            </h2>
            <p className="text-xs sm:text-sm text-mutedText">
              At AUREA, malocclusion planning is guided by cephalometric geometry, airway evaluation, and temporomandibular joint (TMJ) stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-borderSoft space-y-3 shadow-sm">
              <h3 className="font-heading text-base font-bold text-charcoal">
                1. Cephalometric Skeletal Analysis
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                We measure angular relationships between the cranial base, maxilla (upper jaw), and mandible (lower jaw) to distinguish whether a bite discrepancy is purely dental or skeletal in nature.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-borderSoft space-y-3 shadow-sm">
              <h3 className="font-heading text-base font-bold text-charcoal">
                2. CR-CO Discrepancy Elimination
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Many crossbites cause patients to shift their lower jaw sideways upon closing. We analyze Centric Relation (the natural seated position of the jaw joint) to eliminate harmful functional shifts.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-borderSoft space-y-3 shadow-sm">
              <h3 className="font-heading text-base font-bold text-charcoal">
                3. Transverse Palatal Expansion
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Narrow upper arches force teeth inward. By expanding the maxillary vault gently in growing patients, we restore proper transverse width, open nasal airways, and align the bite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missing Teeth & Space Management Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-borderSoft shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              Interdisciplinary Orthodontics
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Missing Teeth & Space Management
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
              Congenitally missing teeth (such as upper lateral incisors or second premolars) or premature loss of baby teeth can destabilize the dental arch, causing adjacent teeth to tip and drift.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
              <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft">
                <span className="font-bold text-charcoal block mb-0.5">Space Preservation:</span>
                <span className="text-mutedText">Holding exact root angulation and millimeter dimensions so an implant or bridge can be placed by your general dentist.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft">
                <span className="font-bold text-charcoal block mb-0.5">Canine Substitution:</span>
                <span className="text-mutedText">In select cases, gently closing spaces and reshaping the natural canine into a lateral incisor, eliminating the need for prosthetic implants.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-ivory-100 rounded-2xl border border-borderSoft text-center space-y-3">
            <Sparkles className="w-8 h-8 text-burgundy" />
            <h4 className="font-heading text-sm font-bold text-charcoal">
              Interdisciplinary Coordination
            </h4>
            <p className="text-xs text-mutedText">
              We work closely with your family dentist, periodontist, and oral surgeon to ensure comprehensive care.
            </p>
            <button
              onClick={() => openConsultation("Adult")}
              className="px-5 py-2.5 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-700 transition-colors"
            >
              Consult with Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
