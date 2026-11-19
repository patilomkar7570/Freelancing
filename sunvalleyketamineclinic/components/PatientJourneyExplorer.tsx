'use client';

import React, { useState } from 'react';
import {
  FileText,
  UserCheck,
  Stethoscope,
  Sliders,
  Activity,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  LucideIcon,
} from 'lucide-react';

export interface JourneyStep {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  focusPoints: string[];
  clinicalOversight: string;
  durationExpectation: string;
  icon: LucideIcon;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 'enquiry',
    number: '01',
    title: 'Initial Enquiry & Administrative Guidance',
    shortDesc: 'A confidential preliminary exchange to understand logistics, scope, and consultation scheduling.',
    fullDesc:
      'The journey begins with an unpressured administrative conversation. Our clinical coordinators explain practice policies, verify basic practical criteria (such as geographic access and travel accompaniment), and share educational materials to support informed exploration.',
    focusPoints: [
      'Preliminary administrative triage without diagnostic judgment',
      'Guidance on medical records and referral recommendations',
      'Clarification that ketamine care is an adjunct requiring medical evaluation',
      'Provision of the practice educational handbook and consent overview',
    ],
    clinicalOversight: 'Triage coordinator under clinical governance policies',
    durationExpectation: '15–20 minutes telephone / written exchange',
    icon: FileText,
  },
  {
    id: 'consultation',
    number: '02',
    title: 'Comprehensive Clinical Consultation',
    shortDesc: 'A detailed dialogue exploring individual medical history, mental health background, and therapeutic goals.',
    fullDesc:
      'A thorough, unhurried initial assessment with a qualified clinician. We review your health trajectory, prior therapeutic modalities, current medications, cardiovascular status, and psychological history to establish whether ketamine-assisted care is clinically appropriate.',
    focusPoints: [
      'In-depth review of psychiatric history and medical comorbidities',
      'Screening for potential physiological contraindications (e.g. unmanaged hypertension)',
      'Exploration of patient motivations, expectations, and apprehensions',
      'Discussion of all standard therapeutic alternatives and uncertainties',
    ],
    clinicalOversight: 'Board-certified physician or specialist clinical practitioner',
    durationExpectation: '60–75 minutes dedicated clinical appointment',
    icon: UserCheck,
  },
  {
    id: 'assessment',
    number: '03',
    title: 'Professional Suitability & Safety Assessment',
    shortDesc: 'Collaborative evaluation with existing care teams to ensure coordinated, multi-angle clinical safety.',
    fullDesc:
      'Specialist healthcare does not exist in isolation. With your consent, we liaise with your primary care physician, psychiatrist, or psychotherapist. We weigh risks and benefits objectively, ensuring that our recommendations complement your wider care framework.',
    focusPoints: [
      'Care coordination with primary care providers and psychiatrists',
      'Medication cross-referencing and metabolic stability checks',
      'Confirmation of psychological integration and psychotherapy support',
      'Clear determination of clinical suitability or redirection to alternative care',
    ],
    clinicalOversight: 'Multidisciplinary clinical review committee',
    durationExpectation: 'Inter-clinical coordination within 3–5 business days',
    icon: Stethoscope,
  },
  {
    id: 'planning',
    number: '04',
    title: 'Individual Treatment Protocol Formulation',
    shortDesc: 'A customized, measured protocol developed specifically for the patient’s clinical profile.',
    fullDesc:
      'If deemed medically suitable, an individualized plan is formulated. We establish baseline vital parameter targets, session pacing, sensory environmental parameters, and structured integration timing. Dosing is never standardized or rushed—it is calibrated with conservatism.',
    focusPoints: [
      'Tailored sensory environment design (lighting, sound isolation, posture)',
      'Pre-session mindfulness, anxiety reduction, and grounding preparation',
      'Arrangement of mandatory chaperone and post-session travel safety',
      'Explicit formal informed consent documentation and question review',
    ],
    clinicalOversight: 'Attending prescribing physician & clinical nurse specialist',
    durationExpectation: 'Protocol review & orientation appointment (45 mins)',
    icon: Sliders,
  },
  {
    id: 'review',
    number: '05',
    title: 'Clinician-Supervised Care & Ongoing Review',
    shortDesc: 'Continuous continuous physiological monitoring followed by reflective debriefing and ongoing outcome tracking.',
    fullDesc:
      'Every administration takes place in a calm clinical suite under direct medical supervision with continuous physiological monitoring (ECG, pulse oximetry, blood pressure). Following the session, the patient is accompanied through gentle recovery, reflective debriefing, and scheduled longitudinal follow-ups.',
    focusPoints: [
      'Uninterrupted in-room physiological and emotional monitoring',
      'Safe, unhurried post-session rest and orientation assessment',
      'Integration dialogue linking clinical experiences with ongoing therapy',
      'Systematic longitudinal follow-up at 24 hours, 7 days, and 30 days',
    ],
    clinicalOversight: 'Direct in-room medical supervision & psychotherapist support',
    durationExpectation: '2–3 hours on-site per session; multi-week review cycle',
    icon: Activity,
  },
];

export default function PatientJourneyExplorer() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = JOURNEY_STEPS[activeStepIndex];
  const StepIcon = activeStep.icon;

  return (
    <div className="bg-white rounded-xl border border-stone-200 shadow-card overflow-hidden">
      {/* Step Navigation Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-b border-stone-200 bg-stone-50/70">
        {JOURNEY_STEPS.map((step, idx) => {
          const isCurrent = idx === activeStepIndex;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-3.5 sm:p-4 text-left transition-all border-b-2 sm:border-b-0 sm:border-r border-stone-200 last:border-r-0 focus:outline-none ${
                isCurrent
                  ? 'bg-white border-b-forest-800 sm:border-r-forest-800 shadow-sm'
                  : 'hover:bg-stone-100/60 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`font-mono text-xs font-semibold ${
                    isCurrent ? 'text-forest-800' : 'text-stone-400'
                  }`}
                >
                  {step.number}
                </span>
                {isCurrent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-800" />
                )}
              </div>
              <p
                className={`text-xs font-medium line-clamp-1 ${
                  isCurrent ? 'text-forest-900 font-semibold' : 'text-charcoal-700'
                }`}
              >
                {step.title.split('&')[0]}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Step Content */}
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <span className="editorial-tag text-sage-700 bg-sage-100 px-2.5 py-1 rounded inline-flex items-center gap-1.5">
                <StepIcon className="w-3.5 h-3.5 text-sage-700" />
                Stage {activeStep.number} of 05
              </span>
              <span className="text-xs font-mono text-stone-500">
                {activeStep.durationExpectation}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-forest-900 font-normal">
              {activeStep.title}
            </h3>

            <p className="text-charcoal-700 text-sm leading-relaxed">
              {activeStep.fullDesc}
            </p>

            <div className="pt-2 space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-charcoal-800 font-medium">
                Core Clinical Focus &amp; Safeguards:
              </h4>
              <ul className="grid grid-cols-1 gap-2 text-xs text-charcoal-700">
                {activeStep.focusPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-3.5 h-3.5 text-sage-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Context Card */}
          <div className="lg:col-span-5 bg-stone-100/70 p-6 rounded-lg border border-stone-200 space-y-4">
            <div className="flex items-center gap-2.5 text-forest-900 font-medium text-xs font-mono uppercase tracking-wider border-b border-stone-200 pb-3">
              <ShieldCheck className="w-4 h-4 text-sage-600" />
              <span>Professional Oversight Standard</span>
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase text-stone-500 tracking-wider">
                Supervising Role
              </div>
              <div className="text-xs font-medium text-forest-900 mt-0.5">
                {activeStep.clinicalOversight}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase text-stone-500 tracking-wider">
                Patient Preparation Note
              </div>
              <div className="text-xs text-charcoal-600 mt-0.5 leading-relaxed">
                This stage emphasizes complete transparency. Patients are encouraged to bring trusted family members or support persons to discussions.
              </div>
            </div>

            <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-xs">
              <span className="font-mono text-[10px] text-stone-500">
                Step {activeStepIndex + 1} / 5
              </span>
              <div className="flex items-center gap-2">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-2.5 py-1 rounded bg-white border border-stone-300 text-charcoal-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-50 text-[11px] font-mono"
                >
                  Prev
                </button>
                <button
                  disabled={activeStepIndex === JOURNEY_STEPS.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(JOURNEY_STEPS.length - 1, prev + 1))}
                  className="px-2.5 py-1 rounded bg-forest-800 text-ivory disabled:opacity-30 disabled:cursor-not-allowed hover:bg-forest-700 text-[11px] font-mono flex items-center gap-1"
                >
                  <span>Next</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
