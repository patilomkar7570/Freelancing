"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Heart,
  Compass,
  Layers,
  Activity,
  Smile,
  Clock,
  ChevronRight,
  Info,
} from "lucide-react";
import { useModals } from "@/context/ModalContext";
import { SmileAssessmentQuiz } from "@/components/interactive/SmileAssessmentQuiz";
import { TREATMENTS } from "@/data/treatments";
import { TEAM_MEMBERS } from "@/data/team";
import { GALLERY_CASES } from "@/data/gallery";
import { CLINIC_INFO } from "@/data/clinicInfo";

export default function HomePage() {
  const { openConsultation, openBrandSpec } = useModals();

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* =========================================================================
          HERO SECTION: High-Craft Architectural Healthcare Composition
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-10 overflow-hidden">
        {/* Soft atmospheric gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory-100/80 via-white to-white -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Specialist Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush border border-burgundy-200 text-burgundy text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-goldAccent" />
                <span className="tracking-wide uppercase text-[10.5px]">
                  Specialist Orthodontics &bull; Pediatric, Teen & Adult
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-charcoal tracking-tight leading-[1.08]">
                  A confident smile begins with{" "}
                  <span className="italic font-normal text-burgundy">thoughtful care.</span>
                </h1>
                <p className="font-sans text-base sm:text-lg text-charcoal/80 max-w-xl leading-relaxed pt-2">
                  Modern orthodontic care, personalised around your smile, your comfort and your confidence. Combining architectural facial harmony, 3D biological diagnostics, and compassionate clinical guidance.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => openConsultation("Adult")}
                  className="px-7 py-4 rounded-full bg-burgundy text-white font-semibold text-sm hover:bg-burgundy-700 transition-all shadow-card hover:shadow-elevated flex items-center justify-center gap-2 group"
                >
                  <Calendar className="w-4 h-4 text-ivory-200 group-hover:scale-110 transition-transform" />
                  <span>Request 3D Consultation (Demo)</span>
                </button>

                <Link
                  href="/treatments"
                  className="px-6 py-4 rounded-full border border-borderSoft bg-white hover:bg-ivory-100 text-charcoal font-medium text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Treatments</span>
                  <ArrowRight className="w-4 h-4 text-burgundy" />
                </Link>
              </div>

              {/* Trust Indicators / Clinical Pillars */}
              <div className="pt-6 border-t border-borderSoft grid grid-cols-3 gap-4 text-xs">
                <div>
                  <div className="font-bold text-charcoal font-heading text-sm">3D Optical</div>
                  <div className="text-mutedText text-[11px] mt-0.5">Mess-free digital scans</div>
                </div>
                <div>
                  <div className="font-bold text-charcoal font-heading text-sm">All Ages</div>
                  <div className="text-mutedText text-[11px] mt-0.5">Age 7 early guidance to adults</div>
                </div>
                <div>
                  <div className="font-bold text-charcoal font-heading text-sm">0% Financing</div>
                  <div className="text-mutedText text-[11px] mt-0.5">Custom monthly payment plans</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual (5 Cols) - Layered Editorial Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Portrait */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated border-4 border-white bg-ivory-200">
                  <Image
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
                    alt="Orthodontic Consultation at AUREA"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />

                  {/* Overlay Quote Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-soft text-xs text-charcoal space-y-1">
                    <div className="flex items-center gap-1.5 text-burgundy font-semibold text-[10px] uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-goldAccent" />
                      <span>Specialist Care Philosophy</span>
                    </div>
                    <p className="italic text-charcoal/90 text-[11.5px] leading-snug">
                      &ldquo;Every smile is an architectural balance of dental proportions, facial symmetry, and biological health.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Floating Micro Card 1: Age 7 Milestone */}
                <div className="absolute -top-4 -left-4 sm:-left-6 p-3.5 rounded-2xl bg-white shadow-card border border-borderSoft flex items-center gap-3 animate-pulse-subtle">
                  <div className="w-10 h-10 rounded-xl bg-blush flex items-center justify-center text-burgundy font-bold text-xs">
                    Age 7
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-charcoal">Initial Ortho Screening</div>
                    <div className="text-[10px] text-mutedText">AAO Recommended Window</div>
                  </div>
                </div>

                {/* Floating Micro Card 2: Aesthetic Modality */}
                <div className="hidden sm:flex absolute -bottom-6 -right-6 p-4 rounded-2xl bg-white shadow-card border border-borderSoft items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-ivory-100 flex items-center justify-center text-burgundy">
                    <Smile className="w-5 h-5 text-burgundy" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-charcoal">Aesthetic Ceramic & Aligners</div>
                    <div className="text-[10px] text-mutedText">Discreet, low-profile treatment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRACTICE INTRODUCTION: The AUREA Difference
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ivory-100 rounded-3xl p-8 sm:p-14 border border-borderSoft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
                Practice Approach
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
                Orthodontics designed around biology, not rushed trends.
              </h2>
              <p className="text-xs sm:text-sm text-mutedText leading-relaxed pt-1">
                At AUREA, orthodontic care is never treated as a rapid mechanical assembly. We study the unique relationship between your dental arches, facial profile, lip posture, and airway function before crafting your custom treatment plan.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-borderSoft shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blush flex items-center justify-center text-burgundy">
                  <Activity className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-sm font-bold text-charcoal">
                  Airway & Facial Harmony
                </h3>
                <p className="text-xs text-mutedText leading-relaxed">
                  We evaluate how dental expansion supports natural nasal breathing, prevents joint compression, and maintains lifelong facial volume.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-borderSoft shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blush flex items-center justify-center text-burgundy">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-sm font-bold text-charcoal">
                  3D Precision Diagnostics
                </h3>
                <p className="text-xs text-mutedText leading-relaxed">
                  Optical digital intraoral scanning eliminates uncomfortable impression trays and maps tooth movements with sub-millimeter clinical accuracy.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-borderSoft shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blush flex items-center justify-center text-burgundy">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-sm font-bold text-charcoal">
                  Custom Aesthetic Appliances
                </h3>
                <p className="text-xs text-mutedText leading-relaxed">
                  From translucent monocrystalline ceramic brackets to custom-milled clear aligners, your appliances fit seamlessly into your personal lifestyle.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-borderSoft shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blush flex items-center justify-center text-burgundy">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-sm font-bold text-charcoal">
                  Conservative Clinical Ethics
                </h3>
                <p className="text-xs text-mutedText leading-relaxed">
                  We never push unnecessary extractions or premature intervention. When watchful observation is the safest path, that is our recommendation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE QUIZ: Smile Pathway Navigator
          ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center space-y-3 mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
            Personalized Discovery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Find Your Ideal Orthodontic Pathway
          </h2>
          <p className="text-xs sm:text-sm text-mutedText max-w-lg mx-auto">
            Answer three quick questions about your age and smile goals to explore recommended orthodontic modalities.
          </p>
        </div>

        <SmileAssessmentQuiz onRequestConsultation={() => openConsultation("Adult")} />
      </section>

      {/* =========================================================================
          TREATMENT OVERVIEW: Comprehensive Care Solutions
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              Clinical Modalities
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal">
              Modern Solutions for Every Smile
            </h2>
            <p className="text-xs sm:text-sm text-mutedText max-w-xl">
              From early developmental guidance to discreet adult aesthetics, our orthodontic care is individually tailored to your unique anatomical goals.
            </p>
          </div>

          <Link
            href="/treatments"
            className="text-xs font-semibold text-burgundy hover:text-burgundy-800 flex items-center gap-1.5 transition-colors self-start md:self-auto"
          >
            <span>View All Treatments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS.slice(0, 3).map((treatment) => (
            <div
              key={treatment.id}
              className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm hover:shadow-card transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blush text-burgundy">
                    {treatment.category} Care
                  </span>
                  <span className="text-[11px] text-mutedText font-mono">
                    {treatment.treatmentTime}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-charcoal group-hover:text-burgundy transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-xs text-charcoal/80 leading-relaxed mt-2">
                    {treatment.shortDescription}
                  </p>
                </div>

                <div className="pt-2 border-t border-borderSoft/60 space-y-1.5">
                  <span className="text-[10px] uppercase font-semibold text-mutedText tracking-wider block">
                    Key Advantages:
                  </span>
                  {treatment.benefits.slice(0, 2).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-charcoal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-burgundy flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-borderSoft/40">
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="text-xs font-semibold text-burgundy hover:text-burgundy-800 flex items-center gap-1 transition-colors"
                >
                  <span>Learn More & Explore Mechanics</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE US: Ethical Practice Principles
          ========================================================================= */}
      <section className="bg-ivory-100 py-16 border-y border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              Ethical Orthodontic Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Principles Guiding Every Clinical Decision
            </h2>
            <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
              We focus strictly on transparent healthcare, patient comfort, and biologically sound outcomes without exaggerated claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-borderSoft space-y-3 shadow-sm">
              <span className="font-serif text-3xl text-burgundy font-light">01</span>
              <h3 className="font-heading text-base font-bold text-charcoal">
                Conservative Extraction Philosophy
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                We prioritize gentle transverse arch coordination and airway-conscious expansion. Premolar extractions are considered only when essential for facial balance and biological health.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-borderSoft space-y-3 shadow-sm">
              <span className="font-serif text-3xl text-burgundy font-light">02</span>
              <h3 className="font-heading text-base font-bold text-charcoal">
                Transparent All-Inclusive Pricing
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Every consultation provides a comprehensive fee breakdown with 0% interest monthly financing options. All scans, active adjustments, and custom retention retainers are included.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-borderSoft space-y-3 shadow-sm">
              <span className="font-serif text-3xl text-burgundy font-light">03</span>
              <h3 className="font-heading text-base font-bold text-charcoal">
                Calm & Unhurried Appointments
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                We believe healthcare should feel relaxed. Our clinical appointments allow ample time for questions, gentle adjustments, and clear demonstrations of oral hygiene technique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MEET THE TEAM PREVIEW (Fictional Demonstration Profiles)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              Clinical Leadership (Demonstration)
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal">
              Guided by Specialist Experience
            </h2>
            <p className="text-xs sm:text-sm text-mutedText max-w-xl">
              Meet our fictional clinical directors and support specialists dedicated to gentle, personalized care.
            </p>
          </div>

          <Link
            href="/team"
            className="text-xs font-semibold text-burgundy hover:text-burgundy-800 flex items-center gap-1.5 transition-colors self-start md:self-auto"
          >
            <span>Meet the Entire Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM_MEMBERS.slice(0, 2).map((doctor) => (
            <div
              key={doctor.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-borderSoft shadow-sm hover:shadow-card transition-all flex flex-col sm:flex-row gap-6 items-center sm:items-start"
            >
              <div className="relative w-36 h-44 rounded-2xl overflow-hidden bg-ivory-200 flex-shrink-0 shadow-soft">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-2 text-center sm:text-left flex-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-burgundy bg-blush px-2.5 py-0.5 rounded-full inline-block">
                  {doctor.role}
                </span>
                <h3 className="font-heading text-xl font-bold text-charcoal">{doctor.name}</h3>
                <p className="text-xs font-mono text-mutedText">{doctor.title}</p>
                <p className="text-xs text-charcoal/80 leading-relaxed pt-1">
                  {doctor.bio.slice(0, 150)}...
                </p>

                <div className="pt-3">
                  <Link
                    href="/team"
                    className="text-xs font-semibold text-burgundy hover:text-burgundy-800 inline-flex items-center gap-1"
                  >
                    <span>Read Biography & Credentials</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          PATIENT EDUCATION PREVIEW: Hub & Essential Topics
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
            Patient Education & Empowerment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Knowledge for a Confident Treatment Journey
          </h2>
          <p className="text-xs sm:text-sm text-mutedText">
            Explore comprehensive guides covering oral hygiene, food recommendations, and orthodontic emergency triage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/patient-education/oral-hygiene"
            className="p-6 rounded-3xl bg-ivory-100 hover:bg-blush/40 border border-borderSoft transition-all space-y-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-burgundy shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-burgundy" />
            </div>
            <h3 className="font-heading text-lg font-bold text-charcoal group-hover:text-burgundy transition-colors">
              Oral Hygiene & Cleaning
            </h3>
            <p className="text-xs text-mutedText leading-relaxed">
              Step-by-step guidance on 45-degree angle brushing, interdental brushes, superfloss threaders, and preventing enamel decalcification.
            </p>
            <span className="text-xs font-semibold text-burgundy flex items-center gap-1 pt-2">
              <span>Read Cleaning Protocol</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/patient-education/eating-with-braces"
            className="p-6 rounded-3xl bg-ivory-100 hover:bg-blush/40 border border-borderSoft transition-all space-y-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-burgundy shadow-sm group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 text-burgundy" />
            </div>
            <h3 className="font-heading text-lg font-bold text-charcoal group-hover:text-burgundy transition-colors">
              Eating with Braces & Food Checker
            </h3>
            <p className="text-xs text-mutedText leading-relaxed">
              Interactive searchable food database comparing safe soft foods, items to prepare with care, and high-risk foods to avoid.
            </p>
            <span className="text-xs font-semibold text-burgundy flex items-center gap-1 pt-2">
              <span>Launch Food Checker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/patient-education/orthodontic-emergencies"
            className="p-6 rounded-3xl bg-ivory-100 hover:bg-blush/40 border border-borderSoft transition-all space-y-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-burgundy shadow-sm group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5 text-burgundy" />
            </div>
            <h3 className="font-heading text-lg font-bold text-charcoal group-hover:text-burgundy transition-colors">
              Emergency Triage & Home Relief
            </h3>
            <p className="text-xs text-mutedText leading-relaxed">
              Immediate conservative guidance for poking wires, floating brackets, lost aligners, and post-adjustment soreness.
            </p>
            <span className="text-xs font-semibold text-burgundy flex items-center gap-1 pt-2">
              <span>View Emergency Steps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          SMILE GALLERY PREVIEW (Demonstration Concept)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              Aesthetic Showcase (Demonstration)
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal">
              Simulated Clinical Outcomes
            </h2>
            <p className="text-xs sm:text-sm text-mutedText max-w-xl">
              Generic portfolio visualizations illustrating orthodontic alignment goals. No fabricated clinical claims.
            </p>
          </div>

          <Link
            href="/smile-gallery"
            className="text-xs font-semibold text-burgundy hover:text-burgundy-800 flex items-center gap-1.5 transition-colors"
          >
            <span>Explore Complete Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GALLERY_CASES.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl border border-borderSoft overflow-hidden shadow-sm hover:shadow-card transition-all"
            >
              <div className="relative h-60 w-full bg-ivory-200 overflow-hidden">
                <Image
                  src={item.imageAfter}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 text-charcoal text-[10px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-5 space-y-2">
                <span className="text-[10px] text-mutedText uppercase font-mono block">
                  {item.patientProfile}
                </span>
                <h3 className="font-serif text-lg text-charcoal">{item.title}</h3>
                <p className="text-xs text-charcoal/70 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          CLOSING CONSULTATION CTA SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-burgundy-900 to-burgundy-800 rounded-3xl p-8 sm:p-16 text-white text-center space-y-6 relative overflow-hidden shadow-elevated">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="px-3.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-white/10 text-ivory-200 border border-white/20">
              Complimentary 3D Intraoral Scan &bull; Transparent Guidance
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white leading-tight">
              Ready to discover what modern orthodontics can achieve for your smile?
            </h2>
            <p className="text-xs sm:text-sm text-ivory-300 leading-relaxed max-w-lg mx-auto">
              Schedule your relaxed initial consultation. We will capture your 3D digital simulation, discuss your goals, and answer all questions in a warm, unhurried environment.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                onClick={() => openConsultation("Adult")}
                className="px-8 py-4 rounded-full bg-white text-burgundy font-semibold text-sm hover:bg-ivory-100 transition-all shadow-card"
              >
                Request Initial Consultation (Demo)
              </button>
              <Link
                href="/faq"
                className="px-6 py-4 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-colors"
              >
                Read Consultation FAQs
              </Link>
            </div>
          </div>

          {/* Demonstration Notice */}
          <p className="text-[10px] text-ivory-400 max-w-md mx-auto pt-4 relative z-10">
            Independent fictional healthcare website concept created by NOVA Digital Studio. Not affiliated with or endorsed by any existing healthcare practice.
          </p>
        </div>
      </section>
    </div>
  );
}
