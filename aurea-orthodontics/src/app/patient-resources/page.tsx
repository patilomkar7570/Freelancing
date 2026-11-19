"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  FileText,
  Download,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Eye,
  X,
  ArrowRight,
  Info,
} from "lucide-react";
import { PATIENT_RESOURCES, PatientResourceItem } from "@/data/resources";
import { useModals } from "@/context/ModalContext";

export default function PatientResourcesPage() {
  const { openConsultation } = useModals();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activePreview, setActivePreview] = useState<PatientResourceItem | null>(null);

  const categories = [
    { id: "all", label: "All Resources" },
    { id: "New Patient", label: "New Patient Guides" },
    { id: "Clinical Forms (Demo)", label: "Clinical Forms (Demo)" },
    { id: "Appointment Prep", label: "Appointment Prep" },
    { id: "Financial & Insurance", label: "Financial & 0% Plans" },
    { id: "Retention Guides", label: "Retention Care" },
  ];

  const filteredResources = PATIENT_RESOURCES.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-ivory-100 to-white pt-12 pb-16 border-b border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush border border-burgundy-200 text-burgundy text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-goldAccent" />
            <span>Educational Guides & Appointment Prep</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal max-w-3xl leading-tight">
            Patient resources: Helpful tools for a{" "}
            <span className="italic font-normal text-burgundy">smooth experience.</span>
          </h1>
          <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            Access demonstration welcome guides, appointment checklists, sample medical history questionnaires, and transparent guides explaining orthodontic insurance and 0% interest monthly financing.
          </p>

          <div className="p-3.5 rounded-2xl bg-white border border-borderSoft text-xs text-mutedText flex items-center gap-2 max-w-2xl">
            <AlertCircle className="w-4 h-4 text-burgundy flex-shrink-0" />
            <span>
              <strong>Demonstration Privacy Notice:</strong> All resources and preview forms are non-operational demonstration placeholders. This website does NOT collect, store, or transmit real patient medical data.
            </span>
          </div>
        </div>
      </section>

      {/* Category Pills & Resource Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm hover:shadow-card transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blush text-burgundy">
                    {resource.category}
                  </span>
                  <span className="text-[10px] text-mutedText font-mono">
                    {resource.fileSize}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-charcoal group-hover:text-burgundy transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-xs text-charcoal/80 leading-relaxed mt-2">
                    {resource.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-borderSoft space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-mutedText block">
                    Document Topics Included:
                  </span>
                  <ul className="space-y-1 text-xs text-charcoal">
                    {resource.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-burgundy flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-borderSoft flex items-center justify-between">
                <button
                  onClick={() => setActivePreview(resource)}
                  className="text-xs font-semibold text-burgundy hover:text-burgundy-800 flex items-center gap-1 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview Document Outline</span>
                </button>

                <button
                  onClick={() => setActivePreview(resource)}
                  className="p-2 rounded-full bg-ivory-100 hover:bg-burgundy hover:text-white text-charcoal transition-colors"
                  title="Preview / Download"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Preparation Checklist for Your First Visit */}
      <section className="bg-ivory-100 py-16 border-y border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              Appointment Checklist
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Preparing for Your Discovery Consultation
            </h2>
            <p className="text-xs sm:text-sm text-mutedText">
              Simple steps to ensure your initial visit is smooth, relaxed, and fully productive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-2">
              <span className="font-serif text-2xl text-burgundy font-light">01</span>
              <h4 className="font-heading text-sm font-bold text-charcoal">
                Dental Insurance Card
              </h4>
              <p className="text-xs text-mutedText leading-relaxed">
                Bring your dental insurance information so our treatment coordinator can verify your orthodontic lifetime benefits on the spot.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-2">
              <span className="font-serif text-2xl text-burgundy font-light">02</span>
              <h4 className="font-heading text-sm font-bold text-charcoal">
                Recent Dental Cleanings
              </h4>
              <p className="text-xs text-mutedText leading-relaxed">
                Make sure your regular general dental cleanings are up-to-date within the last 6 months so your enamel is healthy and plaque-free.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-2">
              <span className="font-serif text-2xl text-burgundy font-light">03</span>
              <h4 className="font-heading text-sm font-bold text-charcoal">
                List Your Smile Goals
              </h4>
              <p className="text-xs text-mutedText leading-relaxed">
                Think about what matters most to you: discreet aesthetics, chewing comfort, speech clarity, or fixing a specific overlapping tooth.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm space-y-2">
              <span className="font-serif text-2xl text-burgundy font-light">04</span>
              <h4 className="font-heading text-sm font-bold text-charcoal">
                Parent or Guardian
              </h4>
              <p className="text-xs text-mutedText leading-relaxed">
                For adolescents and children, at least one parent or legal guardian should attend to participate in the growth simulation review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Document Outline Preview Modal */}
      {activePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-elevated border border-borderSoft overflow-hidden my-8">
            <div className="bg-gradient-to-r from-burgundy-800 to-burgundy-600 text-white px-6 py-5 sm:px-8 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-ivory-300">
                  {activePreview.category} &bull; Document Specimen
                </span>
                <h3 className="font-serif text-2xl mt-0.5">{activePreview.title}</h3>
              </div>
              <button
                onClick={() => setActivePreview(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5 max-h-[70vh] overflow-y-auto text-xs">
              <div className="p-4 rounded-2xl bg-ivory-100 border border-borderSoft text-charcoal/80 leading-relaxed">
                <span className="font-bold text-charcoal block mb-1">Overview:</span>
                {activePreview.description}
              </div>

              <div>
                <span className="font-bold text-charcoal uppercase tracking-wider text-[11px] block mb-2">
                  Full Document Outline & Topics:
                </span>
                <div className="space-y-2">
                  {activePreview.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-borderSoft flex items-start gap-2 text-charcoal"
                    >
                      <CheckCircle2 className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blush-soft border border-burgundy-100 text-burgundy-900 flex items-start gap-2 text-[11px]">
                <Info className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Portfolio Demonstration Notice:</strong> {activePreview.isDemoNotice}
                </span>
              </div>
            </div>

            <div className="p-4 bg-ivory-100 border-t border-borderSoft flex justify-between items-center">
              <span className="text-[11px] text-mutedText">Format: {activePreview.fileFormat}</span>
              <button
                onClick={() => setActivePreview(null)}
                className="px-6 py-2 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-700 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
