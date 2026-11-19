"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Utensils,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Info,
  Calendar,
} from "lucide-react";
import { FoodSafetyChecker } from "@/components/interactive/FoodSafetyChecker";
import { useModals } from "@/context/ModalContext";

export default function EatingWithBracesPage() {
  const { openConsultation } = useModals();

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-ivory-100 to-white pt-12 pb-16 border-b border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush border border-burgundy-200 text-burgundy text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-goldAccent" />
            <span>Dietary Nutrition & Appliance Protection</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal max-w-3xl leading-tight">
            Eating with braces: Protect your brackets without{" "}
            <span className="italic font-normal text-burgundy">sacrificing flavor.</span>
          </h1>
          <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            Protecting your archwires and brackets doesn&apos;t mean living on plain broth! With a few smart ingredient choices and simple preparation tricks (like slicing apples instead of biting them whole), you can enjoy nutritious, delicious meals throughout your entire orthodontic care.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/patient-education/oral-hygiene"
              className="px-5 py-2.5 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-700 transition-colors flex items-center gap-1.5"
            >
              <span>View Braces Cleaning Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/patient-education/orthodontic-emergencies"
              className="px-5 py-2.5 rounded-full border border-borderSoft bg-white hover:bg-ivory-100 text-charcoal text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Emergency Triage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Interactive Food Safety Checker Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
            Interactive Search Tool
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            The Interactive Orthodontic Food Safety Checker
          </h2>
          <p className="text-xs sm:text-sm text-mutedText max-w-xl">
            Search any snack, ingredient, or meal to verify whether it is safe, needs modification, or should be avoided to prevent broken brackets and emergency appointments.
          </p>
        </div>

        <FoodSafetyChecker />
      </section>

      {/* The 3 Golden Dietary Rules */}
      <section className="bg-ivory-100 py-16 border-y border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              Appliance Protection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              The Three Enemies of Orthodontic Appliances
            </h2>
            <p className="text-xs sm:text-sm text-mutedText">
              Understanding why certain textures cause breakage helps you make instinctive food choices anywhere you dine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-borderSoft space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
                <XCircle className="w-4 h-4" />
                <span>1. Hard & Brittle Foods</span>
              </div>
              <h3 className="font-heading text-base font-bold text-charcoal">
                Direct Shear Fractures
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Items like whole nuts, hard crusts, and ice exert localized forces far exceeding the bond strength of dental adhesive, popping brackets straight off the enamel surface.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-borderSoft space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
                <XCircle className="w-4 h-4" />
                <span>2. Sticky & Viscous Foods</span>
              </div>
              <h3 className="font-heading text-base font-bold text-charcoal">
                Wire Distortion & Cement Loosening
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Taffy, caramels, and chewy candies wrap around delicate archwire loops and pull molar bands loose, while harboring bacteria directly against unbrushed margins.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-borderSoft space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>3. Large Cantilever Foods</span>
              </div>
              <h3 className="font-heading text-base font-bold text-charcoal">
                Front Tooth Prying Forces
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Biting into whole apples, raw carrots, or corn on the cob forces your front incisors to pry food open, bending thin nickel-titanium archwires. Simply cut them into thin slices first!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Out with Confidence */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-borderSoft shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
              Dining Out with Braces?
            </h3>
            <p className="text-xs sm:text-sm text-mutedText max-w-xl leading-relaxed">
              Carry a compact travel proxy brush in your bag or pocket. After eating, a quick 30-second water rinse and discreet mirror check keeps your smile immaculate throughout the evening.
            </p>
          </div>

          <button
            onClick={() => openConsultation("Adult")}
            className="px-6 py-3 rounded-full bg-burgundy text-white font-semibold text-xs whitespace-nowrap hover:bg-burgundy-700 transition-colors shadow-sm"
          >
            Ask Questions at Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
