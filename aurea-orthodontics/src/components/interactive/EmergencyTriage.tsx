"use client";

import React, { useState } from "react";
import { ORTHODONTIC_EMERGENCIES, OrthodonticEmergency } from "@/data/emergencies";
import { CLINIC_INFO } from "@/data/clinicInfo";
import {
  AlertCircle,
  PhoneCall,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Wrench,
  Clock,
  ShieldAlert,
} from "lucide-react";

export const EmergencyTriage: React.FC = () => {
  const [selectedEmergency, setSelectedEmergency] = useState<OrthodonticEmergency>(
    ORTHODONTIC_EMERGENCIES[0]
  );

  return (
    <div className="space-y-8">
      {/* Quick Select Symptoms */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle className="w-4 h-4 text-burgundy" />
          <span className="text-xs font-bold uppercase tracking-wider text-burgundy">
            Select Your Current Concern for Immediate Step-by-Step Guidance
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {ORTHODONTIC_EMERGENCIES.map((em) => {
            const isSelected = selectedEmergency.id === em.id;
            return (
              <button
                key={em.id}
                onClick={() => setSelectedEmergency(em)}
                className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-burgundy bg-blush text-burgundy font-semibold shadow-sm ring-1 ring-burgundy"
                    : "border-borderSoft bg-white hover:bg-ivory-100 text-charcoal"
                }`}
              >
                <span className="text-xs line-clamp-2">{em.title}</span>
                <span
                  className={`mt-2 text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded w-fit ${
                    em.severity === "urgent"
                      ? "bg-rose-100 text-rose-700"
                      : em.severity === "medium"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  {em.severity} priority
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Symptom Card */}
      <div className="bg-white rounded-3xl border border-borderSoft shadow-card overflow-hidden">
        {/* Card Header */}
        <div
          className={`px-6 py-5 sm:px-8 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
            selectedEmergency.severity === "urgent"
              ? "bg-gradient-to-r from-rose-800 to-rose-900"
              : selectedEmergency.severity === "medium"
              ? "bg-gradient-to-r from-burgundy-800 to-burgundy-600"
              : "bg-gradient-to-r from-charcoal to-charcoal-light"
          }`}
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-bold bg-white/20 text-white">
                {selectedEmergency.severity === "urgent"
                  ? "Urgent Clinical Attention"
                  : selectedEmergency.severity === "medium"
                  ? "Manageable at Home — Follow Up"
                  : "Routine Discomfort — Safe at Home"}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl mt-1 tracking-wide">
              {selectedEmergency.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-2xl border border-white/20 text-xs">
            <Wrench className="w-4 h-4 text-ivory-200" />
            <span>
              <strong>Relief Tool:</strong> {selectedEmergency.homeRemedyTool}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Situation Explanation */}
          <div className="p-4 rounded-2xl bg-ivory-100 border border-borderSoft text-xs sm:text-sm text-charcoal/90">
            <span className="font-bold text-charcoal block mb-1">What is happening:</span>
            {selectedEmergency.summary}
          </div>

          {/* Two-Column Grid: Immediate Steps vs What to Avoid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Immediate Relief Steps */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Immediate At-Home Steps
              </h4>
              <div className="space-y-2">
                {selectedEmergency.immediateSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-ivory-50 border border-borderSoft text-xs text-charcoal flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 rounded-full bg-burgundy text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Avoid */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-600" />
                What NOT to Do (Prevent Damage)
              </h4>
              <div className="space-y-2">
                {selectedEmergency.whatToAvoid.map((avoid, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-100 text-xs text-rose-950 flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                      ✕
                    </span>
                    <span className="leading-relaxed">{avoid}</span>
                  </div>
                ))}
              </div>

              {/* When to Call Us */}
              <div className="p-4 rounded-2xl bg-blush-soft border border-burgundy-100 text-xs mt-4">
                <div className="font-bold text-burgundy flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  When to Contact Our Practice
                </div>
                <p className="text-burgundy-900 leading-relaxed">
                  {selectedEmergency.whenToCall}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bar with Phone Placeholder */}
        <div className="bg-ivory-100 px-6 py-4 sm:px-8 border-t border-borderSoft flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-mutedText">
            <ShieldAlert className="w-4 h-4 text-burgundy" />
            <span>
              For severe head trauma, uncontrolled bleeding, or difficulty breathing, call 911 or visit your nearest emergency room immediately.
            </span>
          </div>

          <a
            href={`tel:${CLINIC_INFO.phone.numeric}`}
            className="px-5 py-2.5 rounded-full bg-burgundy text-white font-semibold text-xs hover:bg-burgundy-700 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Emergency Clinic Line: {CLINIC_INFO.phone.display}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
