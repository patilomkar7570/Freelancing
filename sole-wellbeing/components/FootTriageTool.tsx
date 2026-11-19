'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Clock,
  Home,
  Check,
} from 'lucide-react';
import BookingModal from './BookingModal';

interface SymptomOption {
  id: string;
  label: string;
  tag: string;
  conditionName: string;
  recommendedTreatment: string;
  urgency: 'Routine' | 'Recommended soon' | 'High priority';
  description: string;
  homeVisitSuitable: boolean;
  appointmentDuration: string;
}

const SYMPTOM_OPTIONS: SymptomOption[] = [
  {
    id: 'corn-callus',
    label: 'Sharp pinpoint pain like walking on a pebble, or hard yellow skin',
    tag: 'Corns & Callus',
    conditionName: 'Heloma Durum (Hard Corn) / Hyperkeratosis',
    recommendedTreatment: 'Painless enucleation of the corn nucleus and gentle scalpel debridement of callus, followed by emollient sanding.',
    urgency: 'Recommended soon',
    description: 'Corns have a deep central nucleus pressing directly onto nerve endings. Over-the-counter medicated pads can burn healthy tissue. Professional clinical removal provides immediate pressure relief.',
    homeVisitSuitable: true,
    appointmentDuration: '30–45 mins',
  },
  {
    id: 'thick-nails',
    label: 'Thickened, difficult-to-cut, or yellowish toenails',
    tag: 'Toenail Care',
    conditionName: 'Onychauxis (Thickened Nails) / Fungal Nail',
    recommendedTreatment: 'Medical mechanical reduction with a water-cooled podiatry burr, professional contouring, and anti-fungal management plan.',
    urgency: 'Routine',
    description: 'Thickened nails cause pressure against shoe toe-boxes and can lead to subungual bruising. Professional burring gently thins the nail down to natural comfort.',
    homeVisitSuitable: true,
    appointmentDuration: '30–45 mins',
  },
  {
    id: 'ingrown-nail',
    label: 'Painful, red, or swollen nail edge digging into the skin',
    tag: 'Ingrowing Nail',
    conditionName: 'Onychocryptosis (Ingrown Toenail)',
    recommendedTreatment: 'Conservative nail spike excision, antiseptic dressing, and slant-edge re-profiling.',
    urgency: 'High priority',
    description: 'When nail edges pierce periungual tissue, bacterial infection can occur rapidly. Prompt nurse-led conservative resection relieves the offending spike without surgery.',
    homeVisitSuitable: true,
    appointmentDuration: '30–40 mins',
  },
  {
    id: 'diabetic-check',
    label: 'Diabetic patient requiring annual assessment or routine safe foot maintenance',
    tag: 'Diabetic Health',
    conditionName: 'Diabetic Neurological & Vascular Assessment',
    recommendedTreatment: '10g Semmes-Weinstein monofilament neurological sensation check, pedal pulse palpation, skin integrity inspection, and gentle nail trim.',
    urgency: 'Recommended soon',
    description: 'Diabetes diminishes microcirculation and sensation, allowing minor unnoticed lesions to ulcerate. Regular clinical monitoring is essential for limb preservation.',
    homeVisitSuitable: true,
    appointmentDuration: '45–60 mins',
  },
  {
    id: 'verruca',
    label: 'Stubborn raised lesion on the sole with tiny black dots, hurts when squeezed',
    tag: 'Verruca / Wart',
    conditionName: 'Verruca Pedis (Human Papillomavirus)',
    recommendedTreatment: 'Targeted cryotherapy freezing, mild acid caustics, and surrounding hyperkeratotic cap debridement.',
    urgency: 'Routine',
    description: 'Verrucae are viral lesions characterized by interrupted skin lines and capillary thrombosis (black pinpoints). Multi-modality clinic treatments stimulate local immune clearance.',
    homeVisitSuitable: false,
    appointmentDuration: '30 mins',
  },
  {
    id: 'cracked-heels',
    label: 'Deep, dry cracks (rhagades) or rough skin around the heel margin',
    tag: 'Cracked Heels',
    conditionName: 'Heel Fissures & Severe Anhydrosis',
    recommendedTreatment: 'Mechanical callus debridement, fissure edge smoothing, and intensive medical urea dermal hydration.',
    urgency: 'Recommended soon',
    description: 'Heel fissures can crack deeply into the dermis, causing bleeding and infection risk. Debridement removes the inelastic outer ring so skin can heal flexibly.',
    homeVisitSuitable: true,
    appointmentDuration: '30–45 mins',
  },
];

export default function FootTriageTool() {
  const [selectedId, setSelectedId] = useState<string>(SYMPTOM_OPTIONS[0].id);
  const [modalOpen, setModalOpen] = useState(false);

  const selected = SYMPTOM_OPTIONS.find((s) => s.id === selectedId) || SYMPTOM_OPTIONS[0];

  return (
    <div className="bg-white rounded-2xl border border-pebble-300 shadow-card p-6 sm:p-8 space-y-6">
      <div className="space-y-1">
        <span className="clinical-tag text-seafoam-700 bg-seafoam-50 px-2.5 py-1 rounded border border-seafoam-200">
          Interactive Triage Advisor
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-teal-950 font-medium">
          Foot Condition &amp; Treatment Self-Checker
        </h3>
        <p className="text-xs sm:text-sm text-slatecharcoal-600 max-w-2xl">
          Select what you are experiencing below to view Cally’s clinical assessment recommendation, treatment method, and suitability for home visits.
        </p>
      </div>

      {/* Symptom Selection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {SYMPTOM_OPTIONS.map((item) => {
          const isSelected = item.id === selectedId;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-2.5 ${
                isSelected
                  ? 'bg-teal-900 text-white border-teal-900 shadow-sm'
                  : 'bg-cream-100 border-pebble-300 text-slatecharcoal-800 hover:border-teal-700 hover:bg-cream-200'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full mt-0.5 shrink-0 flex items-center justify-center border ${
                  isSelected ? 'border-white bg-seafoam-400 text-teal-950' : 'border-pebble-400 bg-white'
                }`}
              >
                {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
              </div>
              <div className="space-y-0.5">
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider block font-semibold ${
                    isSelected ? 'text-seafoam-200' : 'text-teal-800'
                  }`}
                >
                  {item.tag}
                </span>
                <span className={`text-xs font-medium leading-snug block ${isSelected ? 'text-white' : 'text-slatecharcoal-900'}`}>
                  {item.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Recommended Clinical Plan Card */}
      <div className="p-6 rounded-xl bg-pebble-100 border border-pebble-300 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-pebble-200 pb-3">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-teal-800 font-semibold">
              Clinical Assessment
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-teal-950 font-medium">
              {selected.conditionName}
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-teal-900 text-[10px] font-mono uppercase font-semibold border border-pebble-300">
              <Clock className="w-3 h-3 text-seafoam-600" />
              {selected.appointmentDuration}
            </span>
            <span
              className={`px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-semibold ${
                selected.urgency === 'High priority'
                  ? 'bg-rose-100 text-rose-800 border border-rose-200'
                  : 'bg-seafoam-100 text-teal-900 border border-seafoam-200'
              }`}
            >
              {selected.urgency}
            </span>
          </div>
        </div>

        <p className="text-xs text-slatecharcoal-700 leading-relaxed font-sans">
          {selected.description}
        </p>

        <div className="p-3.5 rounded-lg bg-white border border-pebble-200 space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-teal-900 font-semibold block">
            Recommended Clinical Procedure:
          </span>
          <p className="text-xs text-slatecharcoal-800 font-medium leading-snug">
            {selected.recommendedTreatment}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-xs font-mono text-slatecharcoal-600">
            {selected.homeVisitSuitable ? (
              <span className="inline-flex items-center gap-1.5 text-teal-900 font-semibold">
                <Home className="w-3.5 h-3.5 text-seafoam-600" />
                Available for Home Visits &amp; Clinic
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-slatecharcoal-700">
                <AlertCircle className="w-3.5 h-3.5 text-teal-800" />
                Clinic Appointment Recommended (Specialized Equipment)
              </span>
            )}
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-teal-900 text-white font-sans text-xs font-semibold hover:bg-teal-800 transition-colors inline-flex items-center gap-2 shadow-sm shrink-0"
          >
            <span>Book Appointment for {selected.tag}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selected.id}
        defaultVisitType={selected.homeVisitSuitable ? 'home' : 'clinic'}
      />
    </div>
  );
}
