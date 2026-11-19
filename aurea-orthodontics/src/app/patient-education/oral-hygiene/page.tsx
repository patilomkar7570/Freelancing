"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Clock,
  Wrench,
  ShieldAlert,
  ArrowRight,
  Heart,
  Droplets,
  HelpCircle,
} from "lucide-react";
import { HYGIENE_STEPS, HYGIENE_TOOLS } from "@/data/oralHygiene";
import { useModals } from "@/context/ModalContext";

export default function OralHygienePage() {
  const { openConsultation } = useModals();

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-ivory-100 to-white pt-12 pb-16 border-b border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush border border-burgundy-200 text-burgundy text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-goldAccent" />
            <span>Preventative Enamel Care & Technique</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal max-w-3xl leading-tight">
            Oral hygiene with braces: Master the{" "}
            <span className="italic font-normal text-burgundy">daily care routine.</span>
          </h1>
          <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            Braces create natural shelves where food particles and plaque gather. Maintaining pristine oral hygiene during orthodontic care preserves healthy pink gums and prevents white spot enamel decalcification, ensuring your smile is flawless when appliances are removed.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/patient-education/eating-with-braces"
              className="px-5 py-2.5 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-700 transition-colors flex items-center gap-1.5"
            >
              <span>Explore Food Safety Checker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/patient-education/orthodontic-emergencies"
              className="px-5 py-2.5 rounded-full border border-borderSoft bg-white hover:bg-ivory-100 text-charcoal text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Emergency Triage Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5-Step Step-by-Step Protocol */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
            Daily Master Routine
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            The 5-Step Braces Cleaning Protocol
          </h2>
          <p className="text-xs sm:text-sm text-mutedText">
            Dedicate 4 to 5 minutes twice daily following this clinical step-by-step sequence.
          </p>
        </div>

        <div className="space-y-6">
          {HYGIENE_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-borderSoft shadow-sm hover:shadow-card transition-all flex flex-col md:flex-row gap-6 items-start"
            >
              {/* Step Number Badge */}
              <div className="w-12 h-12 rounded-2xl bg-blush text-burgundy flex items-center justify-center font-serif text-2xl font-bold flex-shrink-0 shadow-soft">
                0{step.step}
              </div>

              {/* Step Content */}
              <div className="space-y-3 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-charcoal">
                    {step.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-mutedText font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-burgundy" />
                      {step.timeEstimate}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-burgundy font-medium bg-ivory-100 px-3 py-1 rounded-lg w-fit">
                  Recommended Tool: {step.tool}
                </div>

                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                  {step.instructions}
                </p>

                <div className="p-3.5 rounded-xl bg-blush-soft border border-burgundy-100 text-xs text-burgundy-900 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-goldAccent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Clinical Pro Tip:</strong> {step.proTip}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Orthodontic Tool Kit Breakdown */}
      <section className="bg-ivory-100 py-16 border-y border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              Appliance Hygiene Toolkit
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Essential Tools in Your Care Kit
            </h2>
            <p className="text-xs sm:text-sm text-mutedText">
              Every AUREA patient receives our comprehensive welcome kit containing these specialized dental tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HYGIENE_TOOLS.map((tool, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-blush flex items-center justify-center text-burgundy">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-base font-bold text-charcoal">
                  {tool.name}
                </h3>
                <p className="text-xs text-mutedText leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preventing White Spot Lesions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-borderSoft shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-burgundy text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-burgundy" />
              <span>Enamel Health Priority</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Preventing White Spot Decalcification Lesions
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
              White spot lesions are areas of permanent mineral loss in the enamel outer layer. They occur when sticky bacterial plaque lingers undisturbed around brackets for extended periods, producing acids that dissolve enamel calcium.
            </p>
            <div className="space-y-2 text-xs text-charcoal">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
                <span>Rinse with sodium fluoride mouthwash every evening before bed.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
                <span>Limit acidic carbonated sodas, sports drinks, and sugary snacks.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
                <span>Schedule regular professional cleanings with your family dentist every 3 to 6 months.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-ivory-100 border border-borderSoft space-y-3 text-xs text-mutedText">
            <h4 className="font-bold text-charcoal text-sm">
              The General Dentist Partnership
            </h4>
            <p className="leading-relaxed">
              Your orthodontic specialist focuses on tooth position, jaw alignment, and bite mechanics. Routine cleanings, cavity checks, and periodontal examinations must continue with your regular general dentist throughout your orthodontic journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
