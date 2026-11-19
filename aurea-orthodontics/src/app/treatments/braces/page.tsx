"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  Activity,
  Smile,
  ShieldCheck,
  ChevronRight,
  Info,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useModals } from "@/context/ModalContext";

export default function BracesPage() {
  const { openConsultation } = useModals();
  const [activeTab, setActiveTab] = useState<"ceramic" | "metal" | "aligners">("ceramic");

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-ivory-100 to-white pt-12 pb-16 border-b border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush border border-burgundy-200 text-burgundy text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-goldAccent" />
            <span>Appliance Mechanics & Aesthetics</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal max-w-3xl leading-tight">
            Understanding braces: The union of{" "}
            <span className="italic font-normal text-burgundy">physics & biological art.</span>
          </h1>
          <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            Explore the biological mechanisms behind orthodontic tooth movement, compare aesthetic ceramic brackets with low-profile metal appliances, and discover how modern continuous-force mechanics ensure exceptional comfort.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => openConsultation("Adult")}
              className="px-6 py-3 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-700 transition-colors shadow-sm flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-ivory-200" />
              <span>Schedule Braces Assessment</span>
            </button>
            <Link
              href="/patient-education/eating-with-braces"
              className="px-5 py-3 rounded-full border border-borderSoft bg-white hover:bg-ivory-100 text-charcoal text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>View Eating with Braces Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Modality Comparison Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex border-b border-borderSoft justify-center gap-4">
          <button
            onClick={() => setActiveTab("ceramic")}
            className={`pb-4 px-4 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "ceramic"
                ? "border-burgundy text-burgundy"
                : "border-transparent text-mutedText hover:text-charcoal"
            }`}
          >
            <span>Aesthetic Ceramic Braces</span>
          </button>
          <button
            onClick={() => setActiveTab("metal")}
            className={`pb-4 px-4 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "metal"
                ? "border-burgundy text-burgundy"
                : "border-transparent text-mutedText hover:text-charcoal"
            }`}
          >
            <span>Low-Profile Metal Braces</span>
          </button>
          <button
            onClick={() => setActiveTab("aligners")}
            className={`pb-4 px-4 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "aligners"
                ? "border-burgundy text-burgundy"
                : "border-transparent text-mutedText hover:text-charcoal"
            }`}
          >
            <span>Precision Clear Aligners</span>
          </button>
        </div>

        {/* Tab 1: Ceramic Braces */}
        {activeTab === "ceramic" && (
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-borderSoft shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
                Discreet Fixed Orthodontics
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
                Translucent Monocrystalline Ceramic Brackets
              </h2>
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                Ceramic braces are engineered from laboratory-grown monocrystalline sapphire or polycrystalline alumina. They mirror the natural translucent tone of your tooth enamel, resisting food stains and providing full three-dimensional biomechanical control without metallic prominence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft">
                  <span className="font-bold text-charcoal block mb-1">Tooth-Toned Wires:</span>
                  <span className="text-mutedText">Can be paired with rhodium-coated aesthetic wires for near-invisibility.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft">
                  <span className="font-bold text-charcoal block mb-1">Ultra-Smooth Edges:</span>
                  <span className="text-mutedText">Rounded contours reduce mucosal friction against inner lip tissues.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft">
                  <span className="font-bold text-charcoal block mb-1">Uninterrupted Care:</span>
                  <span className="text-mutedText">Fixed continuous mechanics mean compliance is never a variable.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft">
                  <span className="font-bold text-charcoal block mb-1">Complex Movement:</span>
                  <span className="text-mutedText">Delivers complete root torque control even in severe rotational cases.</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openConsultation("Adolescent")}
                  className="px-6 py-3 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-700 transition-colors shadow-sm"
                >
                  Consult on Ceramic Braces
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-ivory-200 border-4 border-white shadow-elevated">
                <Image
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
                  alt="Aesthetic Ceramic Braces Demonstration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Metal Braces */}
        {activeTab === "metal" && (
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-borderSoft shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
                High-Efficiency Orthodontics
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
                Modern Low-Profile Metal Braces
              </h2>
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                Today&apos;s metal braces have evolved far beyond the bulky bands of the past. At AUREA, we use micro-miniature brackets crafted from biocompatible surgical-grade stainless steel. Their ultra-compact footprint facilitates easier toothbrushing, reduces plaque accumulation, and delivers unmatched mechanical durability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft">
                  <span className="font-bold text-charcoal block mb-1">Micro-Miniature Design:</span>
                  <span className="text-mutedText">30% smaller than conventional brackets, minimizing cheek contact.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft">
                  <span className="font-bold text-charcoal block mb-1">Shape-Memory NiTi:</span>
                  <span className="text-mutedText">Thermally active wires apply continuous, gentle biological forces.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft">
                  <span className="font-bold text-charcoal block mb-1">Cost-Effective Excellence:</span>
                  <span className="text-mutedText">The most time-tested and financially accessible orthodontic option.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft">
                  <span className="font-bold text-charcoal block mb-1">Customizable Accents:</span>
                  <span className="text-mutedText">Popular with teens who enjoy selecting colorful elastomeric ties.</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openConsultation("Adolescent")}
                  className="px-6 py-3 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-700 transition-colors shadow-sm"
                >
                  Consult on Metal Braces
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-ivory-200 border-4 border-white shadow-elevated">
                <Image
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Metal Braces Demonstration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Clear Aligners */}
        {activeTab === "aligners" && (
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-borderSoft shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
                Discreet Removable Therapy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
                Precision Clear Aligners
              </h2>
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                Clear aligners utilize a sequence of custom-manufactured, medical-grade thermoplastic trays engineered from high-elasticity polymers. You switch to a fresh set every 7–14 days, gently staging tooth movement according to your personalized 3D digital plan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft">
                  <span className="font-bold text-charcoal block mb-1">Virtually Invisible:</span>
                  <span className="text-mutedText">Ideal for business meetings, speaking engagements, and social events.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft">
                  <span className="font-bold text-charcoal block mb-1">Removable for Dining:</span>
                  <span className="text-mutedText">Zero dietary restrictions; remove trays to eat whatever you like.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft">
                  <span className="font-bold text-charcoal block mb-1">Flossing Freedom:</span>
                  <span className="text-mutedText">Maintain standard brushing and flossing without specialized threaders.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft">
                  <span className="font-bold text-charcoal block mb-1">Fewer Clinic Visits:</span>
                  <span className="text-mutedText">Appointments every 8–10 weeks simply to monitor progress.</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openConsultation("Adult")}
                  className="px-6 py-3 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-700 transition-colors shadow-sm"
                >
                  Consult on Clear Aligners
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-ivory-200 border-4 border-white shadow-elevated">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                  alt="Clear Aligner Demonstration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Biological Science: How Teeth Move */}
      <section className="bg-ivory-100 py-16 border-y border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              The Science of Orthodontics
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              How Teeth Actually Move Through Bone
            </h2>
            <p className="text-xs sm:text-sm text-mutedText">
              Orthodontics is a delicate biological process of bone remodeling orchestrated by cellular signals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-borderSoft space-y-3 shadow-sm">
              <span className="font-serif text-3xl text-burgundy font-light">01</span>
              <h3 className="font-heading text-base font-bold text-charcoal">
                Calibrated Force Application
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                The bracket and shape-memory archwire deliver a controlled mechanical vector (often less than 50 grams of force) to the crown of the tooth.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-borderSoft space-y-3 shadow-sm">
              <span className="font-serif text-3xl text-burgundy font-light">02</span>
              <h3 className="font-heading text-base font-bold text-charcoal">
                Pressure & Tension Zones
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                On the pressure side of the root, specialized cells called <em>osteoclasts</em> gently dissolve micro-layers of bone. On the tension side, <em>osteoblasts</em> deposit fresh new bone.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-borderSoft space-y-3 shadow-sm">
              <span className="font-serif text-3xl text-burgundy font-light">03</span>
              <h3 className="font-heading text-base font-bold text-charcoal">
                Periodontal Ligament Adaptation
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                The tiny fibrous ligaments suspending your tooth remodel and stabilize in the new position. This is why gentle forces are essential: excessive force damages roots, while gentle force allows healthy remodeling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discomfort Management & Adaptation Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
            Patient Comfort
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            The Adaptation Timeline: What to Expect
          </h2>
          <p className="text-xs sm:text-sm text-mutedText">
            Adapting to braces is brief and predictable. Here is the typical progression.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-borderSoft shadow-sm space-y-2">
            <span className="text-xs font-bold text-burgundy uppercase tracking-wider block">
              Day 1: Fitting Day
            </span>
            <h4 className="font-heading text-sm font-bold text-charcoal">Zero Discomfort</h4>
            <p className="text-xs text-mutedText leading-relaxed">
              Placing brackets is completely painless. Teeth feel slightly different in your mouth, but comfortable.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-borderSoft shadow-sm space-y-2">
            <span className="text-xs font-bold text-burgundy uppercase tracking-wider block">
              Days 2–3: Biological Activation
            </span>
            <h4 className="font-heading text-sm font-bold text-charcoal">Mild Tenderness</h4>
            <p className="text-xs text-mutedText leading-relaxed">
              As bone remodeling signals begin, teeth feel tender when biting. Managed easily with soft foods, smoothies, and warm salt rinses.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-borderSoft shadow-sm space-y-2">
            <span className="text-xs font-bold text-burgundy uppercase tracking-wider block">
              Week 1: Oral Adaptation
            </span>
            <h4 className="font-heading text-sm font-bold text-charcoal">Tissue Smoothing</h4>
            <p className="text-xs text-mutedText leading-relaxed">
              Cheek and lip tissues adapt rapidly to the bracket contours. Any occasional friction spots are protected with orthodontic relief wax.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-borderSoft shadow-sm space-y-2">
            <span className="text-xs font-bold text-burgundy uppercase tracking-wider block">
              Month 1 & Beyond
            </span>
            <h4 className="font-heading text-sm font-bold text-charcoal">Effortless Routine</h4>
            <p className="text-xs text-mutedText leading-relaxed">
              Appliances feel completely natural. You brush easily, speak effortlessly, and begin noticing early aesthetic alignment!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
