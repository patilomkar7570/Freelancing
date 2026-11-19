import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Stethoscope,
  HeartHandshake,
  Brain,
  AlertCircle,
  ArrowRight,
  UserCheck,
  LucideIcon,
} from 'lucide-react';
import { CLINIC_IMAGES } from '@/lib/images';

export const metadata = {
  title: 'Clinical Care Team Architecture | VALENCE Clinical',
  description:
    'Demonstration profiles illustrating the multidisciplinary roles within our specialist ketamine care framework, from medical oversight to psychotherapy integration.',
};

interface TeamRoleCard {
  roleTitle: string;
  disciplineCategory: string;
  demonstrationPersona: string;
  roleSummary: string;
  clinicalResponsibilities: string[];
  supervisoryScope: string;
  icon: LucideIcon;
}

const TEAM_ROLES: TeamRoleCard[] = [
  {
    roleTitle: 'Medical Director & Attending Physician Role',
    disciplineCategory: 'Specialist Medical Oversight',
    demonstrationPersona: 'Demonstration Profile: Lead Medical Practitioner',
    roleSummary:
      'Responsible for clinical governance, comprehensive intake examinations, cardiometabolic risk stratification, and attending physician presence during treatment sessions.',
    clinicalResponsibilities: [
      'Comprehensive pre-treatment psychiatric and medical history reviews',
      'Cardiovascular risk stratification and contraindication screening',
      'In-person oversight of active infusions and emergency preparedness',
      'Peer-to-peer consultative communication with referring physicians',
    ],
    supervisoryScope: 'Direct clinical governance & emergency protocol authorization',
    icon: Stethoscope,
  },
  {
    roleTitle: 'Consulting Psychiatric Specialist Role',
    disciplineCategory: 'Psychiatric Evaluation & Diagnostics',
    demonstrationPersona: 'Demonstration Profile: Psychiatric Consultant',
    roleSummary:
      'Provides diagnostic clarification for treatment-resistant major depression, evaluates psychiatric comorbidities, and ensures safe psychotropic medication management.',
    clinicalResponsibilities: [
      'Evaluation of prior pharmacotherapy trials and treatment-resistance staging',
      'Psychiatric diagnostic verification and affective stability scoring',
      'Medication cross-referencing for central nervous system interactions',
      'Collaboration on longitudinal outcome tracking and maintenance intervals',
    ],
    supervisoryScope: 'Psychiatric suitability & psychotropic safety review',
    icon: Brain,
  },
  {
    roleTitle: 'Lead Integration & Psychotherapy Specialist Role',
    disciplineCategory: 'Psychotherapeutic Integration',
    demonstrationPersona: 'Demonstration Profile: Clinical Integration Specialist',
    roleSummary:
      'Oversees the preparation and integration continuum, conducting pre-session grounding dialogues, post-session reflective debriefs, and therapist coordination.',
    clinicalResponsibilities: [
      'Pre-treatment psychoeducation and anxiety reduction techniques',
      'Post-session reflective debriefing during emergence phases',
      'Liaison with external therapists for timely consolidation sessions',
      'Development of patient mindfulness and somatic tracking workbooks',
    ],
    supervisoryScope: 'Psychological integration protocols & patient grounding',
    icon: HeartHandshake,
  },
  {
    roleTitle: 'Specialist Clinical Nurse & Patient Coordinator Role',
    disciplineCategory: 'Continuous Physiological Monitoring',
    demonstrationPersona: 'Demonstration Profile: Clinical Nurse Specialist',
    roleSummary:
      'Maintains uninterrupted in-room physiological telemetry, provides attentive physical reassurance, manages check-ins, and conducts 24-hour wellness follow-ups.',
    clinicalResponsibilities: [
      'Continuous blood pressure, ECG, and pulse oximetry monitoring',
      'Comfort optimization, sensory environmental adjustment, and calming care',
      'Post-infusion recovery assessments and chaperone discharge coordination',
      'Next-day 24-hour longitudinal wellness calls and symptom logging',
    ],
    supervisoryScope: 'Continuous in-room hemodynamic and physical safety',
    icon: UserCheck,
  },
];

export default function TeamPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-stone-100/80 border-b border-stone-200 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-200 text-charcoal-700 text-[10px] font-mono uppercase tracking-widest">
            <span>Multidisciplinary Framework &bull; Clinical Team</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-forest-900 font-normal tracking-tight max-w-3xl">
            Multidisciplinary Care Team Structure
          </h1>
          <p className="text-charcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Specialist ketamine medicine requires seamless coordination across anaesthetic, psychiatric, nursing, and psychotherapeutic disciplines. Explore how these roles function together in our demonstration model.
          </p>
        </div>
      </section>

      {/* Mandatory Demonstration Persona Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-xl bg-forest-950 text-ivory-100 border border-forest-800 space-y-3">
          <div className="flex items-center gap-2 text-sage-300 font-mono text-xs uppercase tracking-wider font-semibold">
            <AlertCircle className="w-4 h-4 text-sage-400" />
            <span>Demonstration Profile Disclosure &bull; Fictional Healthcare Concept</span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed font-light">
            In strict compliance with healthcare ethics, <strong>the profiles displayed on this page are functional clinical role templates created for design and architectural demonstration by NOVA Digital Studio</strong>. They do not represent real medical practitioners, do not claim licensed authority, and do not use identities or photographs of actual doctors. They illustrate how a multidisciplinary team structure would be organized and presented to prospective patients.
          </p>
        </div>
      </section>

      {/* Multidisciplinary Team Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="editorial-tag text-sage-700">Collaborative Philosophy</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal leading-snug">
              Why a single clinician cannot provide complete care.
            </h2>
            <div className="space-y-4 text-sm text-charcoal-700 leading-relaxed font-light">
              <p>
                In poorly supervised settings, a single practitioner may attempt to oversee physiological telemetry, psychiatric assessment, and psychological integration simultaneously—or worse, leave patients unattended.
              </p>
              <p>
                Our conceptual structure separates and unites distinct domains: medical practitioners ensure continuous hemodynamic stability and pharmacological safety, while psychotherapeutic specialists support the emotional journey. This division of focus ensures that neither medical safety nor human presence is compromised.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-card border border-stone-200">
              <Image
                src={CLINIC_IMAGES.teamDiscussion}
                alt="Multidisciplinary clinical team conducting clinical case review"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Role Templates Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="editorial-tag text-sage-700">Core Disciplines</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal">
            Clinical Roles &amp; Responsibilities
          </h2>
          <p className="text-charcoal-600 text-sm max-w-xl leading-relaxed">
            A breakdown of the professional responsibilities defining our clinical model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM_ROLES.map((role, idx) => {
            const Icon = role.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-xl bg-white border border-stone-200 shadow-card flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                    <span className="editorial-tag text-[10px] text-sage-700">
                      {role.disciplineCategory}
                    </span>
                    <span className="text-[10px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                      Role Template
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-stone-100 text-forest-800 shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-forest-800" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-forest-900 font-normal">
                        {role.roleTitle}
                      </h3>
                      <p className="text-xs font-mono text-stone-500 mt-0.5">
                        {role.demonstrationPersona}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-charcoal-700 leading-relaxed font-light">
                    {role.roleSummary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-charcoal-900 font-semibold">
                      Primary Clinical Duties:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-charcoal-600">
                      {role.clinicalResponsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sage-500 mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 rounded bg-stone-50 border border-stone-200 text-[11px] text-charcoal-600 font-mono">
                  <span className="text-forest-900 font-medium uppercase">Scope: </span>
                  {role.supervisoryScope}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Advisory Council & Research Context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-100 p-8 sm:p-12 rounded-xl border border-stone-200 space-y-4">
          <span className="editorial-tag text-sage-700">Governance Context</span>
          <h3 className="font-serif text-2xl sm:text-3xl text-forest-900 font-normal">
            Continuous Protocol Review &amp; Ethical Oversight
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light max-w-3xl">
            In our conceptual operational framework, clinical protocols are evaluated bi-annually by an external clinical advisory council comprising academic psychiatrists, clinical pharmacologists, and patient advocacy representatives to ensure our treatment standards remain aligned with emerging peer-reviewed literature.
          </p>
          <div className="pt-2">
            <Link
              href="/approach"
              className="text-xs font-mono uppercase tracking-wider text-forest-800 hover:text-forest-950 inline-flex items-center gap-1 font-medium underline underline-offset-4"
            >
              <span>Learn More About Our Clinical Standards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
