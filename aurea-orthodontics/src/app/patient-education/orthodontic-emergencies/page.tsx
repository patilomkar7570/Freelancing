"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ShieldAlert,
  PhoneCall,
  CheckCircle2,
  Wrench,
  Heart,
  Info,
  Clock,
  ArrowRight,
} from "lucide-react";
import { EmergencyTriage } from "@/components/interactive/EmergencyTriage";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { useModals } from "@/context/ModalContext";

export default function OrthodonticEmergenciesPage() {
  const { openConsultation } = useModals();

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-ivory-100 to-white pt-12 pb-16 border-b border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush border border-burgundy-200 text-burgundy text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-goldAccent" />
            <span>Immediate Patient Relief & Triage</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal max-w-3xl leading-tight">
            Orthodontic emergencies: Immediate steps for{" "}
            <span className="italic font-normal text-burgundy">comfort & reassurance.</span>
          </h1>
          <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            True medical emergencies in orthodontics are very rare. The majority of concerns—such as a poking wire end or a loose bracket—can be made completely comfortable at home in under two minutes with relief wax until your next scheduled clinic visit.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phone.numeric}`}
              className="px-6 py-3 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-700 transition-colors shadow-sm flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-ivory-200" />
              <span>Call Emergency Line: {CLINIC_INFO.phone.display}</span>
            </a>
            <Link
              href="/patient-education/oral-hygiene"
              className="px-5 py-3 rounded-full border border-borderSoft bg-white hover:bg-ivory-100 text-charcoal text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Oral Hygiene Tips</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Interactive Emergency Triage Tool */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
            Interactive Relief Guide
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Symptom Assessment & Step-by-Step Resolution
          </h2>
          <p className="text-xs sm:text-sm text-mutedText max-w-xl">
            Click on the symptom you or your child are experiencing to see immediate home care instructions, what to avoid, and when to reach out to our team.
          </p>
        </div>

        <EmergencyTriage />
      </section>

      {/* Illustrated Guide: How to Apply Orthodontic Relief Wax */}
      <section className="bg-ivory-100 py-16 border-y border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              Essential Skill
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              How to Properly Apply Orthodontic Relief Wax
            </h2>
            <p className="text-xs sm:text-sm text-mutedText">
              Orthodontic wax is non-toxic and harmless if accidentally swallowed. Follow this 4-step technique for instant comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-3">
              <span className="font-serif text-2xl text-burgundy font-light">01</span>
              <h3 className="font-heading text-sm font-bold text-charcoal">
                Wash Hands & Pinch
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Wash hands thoroughly. Pinch off a small, pea-sized portion of orthodontic wax from your case.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-3">
              <span className="font-serif text-2xl text-burgundy font-light">02</span>
              <h3 className="font-heading text-base font-bold text-charcoal">
                Roll into a Soft Ball
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Roll the wax between your fingertips for 5 seconds. Body warmth softens the wax, making it moldable and adhesive.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-3">
              <span className="font-serif text-2xl text-burgundy font-light">03</span>
              <h3 className="font-heading text-base font-bold text-charcoal">
                Dry the Bracket
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                <strong>Crucial step:</strong> Use a clean tissue or cotton swab to dry the offending bracket or wire tip. Wax slips off wet enamel!
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-3">
              <span className="font-serif text-2xl text-burgundy font-light">04</span>
              <h3 className="font-heading text-base font-bold text-charcoal">
                Press & Smooth Over
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Press the soft ball firmly over the sharp point and smooth it around the bracket edges to form a protective cushion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Triage Levels Explanation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-borderSoft shadow-card grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block">
              Level 1: Routine / Safe at Home
            </span>
            <h4 className="font-heading text-sm font-bold text-emerald-950">
              Soreness, Loose Tie, Minor Friction
            </h4>
            <p className="text-xs text-emerald-900 leading-relaxed">
              Does not damage teeth or stop progress. Use wax, soft foods, or OTC pain relievers. Follow up during normal office hours.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full inline-block">
              Level 2: Non-Urgent Clinical Call
            </span>
            <h4 className="font-heading text-sm font-bold text-amber-950">
              Loose Bracket, Broken Aligner, Sharp Wire
            </h4>
            <p className="text-xs text-amber-900 leading-relaxed">
              Secure the loose part with wax. Call our office during business hours to schedule an adjustment or replacement appointment.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-rose-800 bg-rose-100 px-2.5 py-0.5 rounded-full inline-block">
              Level 3: Immediate Attention
            </span>
            <h4 className="font-heading text-sm font-bold text-rose-950">
              Facial Trauma, Dislodged Tooth, Bleeding
            </h4>
            <p className="text-xs text-rose-900 leading-relaxed">
              If an adult tooth is knocked out, keep it moist in cold milk and seek immediate dental or hospital emergency care within 60 minutes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
