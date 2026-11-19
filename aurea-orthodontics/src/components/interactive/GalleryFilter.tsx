"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_CASES, GalleryCase } from "@/data/gallery";
import { Sparkles, Info, ShieldCheck, X, ArrowRight, CheckCircle2, Clock } from "lucide-react";

export const GalleryFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalCase, setActiveModalCase] = useState<GalleryCase | null>(null);

  const categories = [
    { id: "all", label: "All Demonstrations" },
    { id: "Clear Aligners", label: "Clear Aligners" },
    { id: "Aesthetic Ceramic Braces", label: "Aesthetic Braces" },
    { id: "Bite Harmonization", label: "Bite Harmonization" },
    { id: "Interceptive (Phase I)", label: "Early Guidance" },
    { id: "Adult Orthodontics", label: "Adult Restorative" },
  ];

  const filteredCases = GALLERY_CASES.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  return (
    <div className="space-y-8">
      {/* Portfolio Demonstration Notice */}
      <div className="p-4 sm:p-5 rounded-2xl bg-blush-soft border border-burgundy-100 flex items-start gap-3 text-xs text-burgundy-900">
        <Info className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">Portfolio Demonstration Disclaimer:</span> The case profiles displayed below are illustrative simulations created by NOVA Digital Studio for design and portfolio evaluation. In accordance with ethical healthcare standards, photographs depict generic creative demonstration imagery rather than fabricated before-and-after claims of specific clinical patients. Real orthodontic outcomes depend strictly upon individual clinical diagnosis.
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === cat.id
                ? "bg-burgundy text-white shadow-sm"
                : "bg-white text-charcoal border border-borderSoft hover:bg-ivory-100"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCases.map((c) => (
          <div
            key={c.id}
            className="group bg-white rounded-3xl border border-borderSoft overflow-hidden shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div>
              {/* Image Container */}
              <div className="relative h-64 w-full bg-ivory-200 overflow-hidden">
                <Image
                  src={c.imageAfter}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 text-charcoal backdrop-blur-sm shadow">
                    {c.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] text-ivory-200 uppercase tracking-wider block font-mono">
                    {c.patientProfile}
                  </span>
                  <h3 className="font-serif text-xl font-normal leading-tight mt-0.5">
                    {c.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3">
                <p className="text-xs text-charcoal/80 line-clamp-2 leading-relaxed">
                  {c.description}
                </p>

                <div className="flex items-center gap-1.5 text-[11px] text-burgundy font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{c.typicalDuration}</span>
                </div>

                <div className="pt-2 border-t border-borderSoft">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-mutedText block mb-1.5">
                    Key Clinical Goals:
                  </span>
                  <ul className="space-y-1">
                    {c.clinicalGoals.slice(0, 2).map((goal, idx) => (
                      <li key={idx} className="text-[11px] text-charcoal flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-burgundy flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-4 bg-ivory-50 border-t border-borderSoft flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-wider text-mutedText font-semibold">
                Portfolio Specimen
              </span>
              <button
                onClick={() => setActiveModalCase(c)}
                className="text-xs font-semibold text-burgundy hover:text-burgundy-800 flex items-center gap-1 transition-colors"
              >
                <span>View Full Case Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Case Details Modal */}
      {activeModalCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-elevated border border-borderSoft overflow-hidden my-8">
            <div className="bg-gradient-to-r from-burgundy-800 to-burgundy-600 text-white px-6 py-5 sm:px-8 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-ivory-300">
                  Case Study Simulation &bull; {activeModalCase.category}
                </span>
                <h3 className="font-serif text-2xl mt-0.5">{activeModalCase.title}</h3>
              </div>
              <button
                onClick={() => setActiveModalCase(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative h-60 rounded-2xl overflow-hidden bg-ivory-200">
                  <Image
                    src={activeModalCase.imageAfter}
                    alt={activeModalCase.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-charcoal/70 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">
                    Simulated Aesthetic Result
                  </div>
                </div>
                <div className="relative h-60 rounded-2xl overflow-hidden bg-ivory-200">
                  <Image
                    src={activeModalCase.imageDetail}
                    alt="Clinical Detail"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-charcoal/70 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">
                    Appliance Detail View
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-heading text-base font-bold text-charcoal">
                  Diagnostic Overview
                </h4>
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                  {activeModalCase.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft">
                  <span className="font-semibold text-charcoal block mb-0.5">Patient Profile:</span>
                  <span className="text-mutedText">{activeModalCase.patientProfile}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft">
                  <span className="font-semibold text-charcoal block mb-0.5">Primary Focus:</span>
                  <span className="text-mutedText">{activeModalCase.focusArea}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft sm:col-span-2">
                  <span className="font-semibold text-charcoal block mb-0.5">Orthodontic Modality:</span>
                  <span className="text-mutedText">{activeModalCase.treatmentModality}</span>
                </div>
              </div>

              <div>
                <h4 className="font-heading text-sm font-bold text-charcoal mb-2">
                  Detailed Clinical Objectives:
                </h4>
                <ul className="space-y-1.5">
                  {activeModalCase.clinicalGoals.map((goal, idx) => (
                    <li key={idx} className="text-xs text-charcoal flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-blush-soft border border-burgundy-100 text-[11px] text-burgundy-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
                <span>{activeModalCase.disclaimer}</span>
              </div>
            </div>

            <div className="p-4 bg-ivory-100 border-t border-borderSoft flex justify-end">
              <button
                onClick={() => setActiveModalCase(null)}
                className="px-6 py-2 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-700 transition-colors"
              >
                Close Case Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
