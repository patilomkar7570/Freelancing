'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  FileText,
  HeartHandshake,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Clock,
} from 'lucide-react';

export default function ClinicianReferralsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    clinicianName: '',
    discipline: 'Psychiatrist',
    clinicName: '',
    email: '',
    phone: '',
    enquiryNature: 'collaboration-overview',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-stone-100/80 border-b border-stone-200 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-200 text-charcoal-700 text-[10px] font-mono uppercase tracking-widest">
            <span>Healthcare Professional Network &bull; Referrals</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-forest-900 font-normal tracking-tight max-w-3xl">
            Collaborative clinical partnerships.
          </h1>
          <p className="text-charcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            We partner with psychiatrists, primary care physicians, and licensed psychotherapists to provide thoughtful, physician-supervised adjunct care for treatment-resistant patients.
          </p>
        </div>
      </section>

      {/* Strict Privacy & Clinical Governance Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-xl bg-forest-950 text-ivory-100 border border-forest-800 space-y-3">
          <div className="flex items-center gap-2 text-sage-300 font-mono text-xs uppercase tracking-wider font-semibold">
            <AlertCircle className="w-4 h-4 text-sage-400" />
            <span>Demonstration Notice: No Patient Identifiers or Health Data</span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed font-light">
            In compliance with strict clinical data protection principles, <strong>this demonstration interface is not a live electronic referral pipeline and must not be used to submit patient names, dates of birth, medical histories, or clinical records</strong>. In operational medicine, formal patient referrals are received exclusively through encrypted clinical fax, direct secure messaging, or credentialed EHR-to-EHR referral exchanges.
          </p>
        </div>
      </section>

      {/* 1. The Collaborative Model */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="editorial-tag text-sage-700">Practice Model</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal leading-snug">
              An Adjunct Resource, Not a Replacement
            </h2>
            <p className="text-sm text-charcoal-700 leading-relaxed font-light">
              We view our role as an adjunct specialist provider. Patients referred to VALENCE remain under the continuous primary management of their referring psychiatrist, general practitioner, or psychotherapist.
            </p>
            <p className="text-sm text-charcoal-700 leading-relaxed font-light">
              Following every clinical evaluation and treatment session, formal consultation notes, hemodynamic records, and psychotherapeutic debrief summaries are transmitted to referring clinicians to ensure seamless continuity.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-lg bg-white border border-stone-200 shadow-subtle space-y-2">
              <div className="w-8 h-8 rounded bg-stone-100 text-forest-800 flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-forest-900">Comprehensive Intake Letters</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Detailed documentation of psychiatric history, cardiometabolic evaluation, baseline psychological scores, and individualized protocol formulations.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white border border-stone-200 shadow-subtle space-y-2">
              <div className="w-8 h-8 rounded bg-stone-100 text-forest-800 flex items-center justify-center">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-forest-900">Joint Integration Support</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                We coordinate closely with external psychotherapists so post-session integration therapy is timed to coincide with maximum neuroplasticity.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white border border-stone-200 shadow-subtle space-y-2">
              <div className="w-8 h-8 rounded bg-stone-100 text-forest-800 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-forest-900">Physiological Safety Protocols</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Rigorous screening for cardiovascular contraindications and ongoing hemodynamic monitoring overseen in-person by an attending physician.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white border border-stone-200 shadow-subtle space-y-2">
              <div className="w-8 h-8 rounded bg-stone-100 text-forest-800 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-forest-900">Structured Longitudinal Tracking</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Systematic outcome scoring (PHQ-9, GAD-7) tracked at 24 hours, 7 days, and 30 days, shared back with the referring practitioner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The General Referral Pathway */}
      <section className="bg-forest-900 text-ivory-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="editorial-tag text-sage-300">The Clinical Process</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
              The Physician Referral Pathway
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed font-light">
              How our practice coordinates with referring colleagues from initial inquiry through discharge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">Step 01</span>
              <h3 className="font-serif text-lg text-ivory">Secure Clinical Referral</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Referring physician transmits psychiatric summary, current medication regimen, and cardiometabolic history via secure clinical channels.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">Step 02</span>
              <h3 className="font-serif text-lg text-ivory">Consultative Intake</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                A 75-minute in-depth consultation with the patient, confirming clinical indications, screening contraindications, and setting clear parameters.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">Step 03</span>
              <h3 className="font-serif text-lg text-ivory">Physician-to-Physician Brief</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Our attending clinician reaches out to the referring provider to align on care expectations and coordinate psychotherapy timing.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">Step 04</span>
              <h3 className="font-serif text-lg text-ivory">Longitudinal Continuity</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Post-session reports, vitals tracking, and psychometric scores are provided continuously as the patient completes their care cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Professional Enquiry Form Simulation */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 sm:p-12 rounded-xl border border-stone-200 shadow-card space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <span className="editorial-tag text-sage-700">Professional Communications</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-forest-900 mt-1">
              Clinician Enquiry Simulation
            </h2>
            <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
              Healthcare providers may use this demonstration form to request practice informational packets, clinical protocol discussions, or peer-to-peer dialogues.
            </p>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-sage-100 text-forest-800 flex items-center justify-center border border-sage-300">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-forest-900">Enquiry Simulation Received</h3>
              <p className="text-xs text-charcoal-600 max-w-md mx-auto leading-relaxed">
                Thank you, Dr./Clinician {formData.clinicianName || ''}. In a production medical setting, our clinical director would reach out to your practice within 24 business hours.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded bg-forest-800 text-ivory text-xs font-mono uppercase tracking-wider"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-stone-100 rounded border border-stone-200 text-xs text-charcoal-700 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-forest-800 shrink-0" />
                <span>Do not enter patient names or medical histories. This is an administrative inquiry tool only.</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                    Clinician Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clinicianName}
                    onChange={(e) => setFormData({ ...formData, clinicianName: e.target.value })}
                    placeholder="e.g. Dr. Sarah Jenkins, MD"
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                    Medical Discipline / Specialty *
                  </label>
                  <select
                    value={formData.discipline}
                    onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700"
                  >
                    <option value="Psychiatrist">Psychiatrist (MD/DO)</option>
                    <option value="Primary-Care">Primary Care Physician / Internist</option>
                    <option value="Psychologist">Clinical Psychologist (PhD/PsyD)</option>
                    <option value="Psychotherapist">Licensed Psychotherapist / LCSW / LMFT</option>
                    <option value="Neurologist">Neurologist</option>
                    <option value="Other">Other Healthcare Specialist</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                    Practice / Clinic Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clinicName}
                    onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                    placeholder="e.g. Alpine Psychiatric Group"
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                    Professional Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="dr.jenkins@clinic-example.org"
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                  Enquiry Purpose
                </label>
                <select
                  value={formData.enquiryNature}
                  onChange={(e) => setFormData({ ...formData, enquiryNature: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700"
                >
                  <option value="collaboration-overview">Requesting Practice Overview &amp; Referral Packet</option>
                  <option value="case-discussion">Requesting Peer-to-Peer Clinical Discussion (General)</option>
                  <option value="joint-care">Inquiring About Concurrent Psychotherapy Collaboration</option>
                  <option value="facility-visit">Requesting Clinical Site &amp; Architecture Tour</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                  Administrative Questions or Dialogue Request
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please state administrative questions or times for peer-to-peer discussion. Do not submit patient health information."
                  className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-stone-200">
                <span className="text-[11px] font-mono text-stone-500">* Required fields</span>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded bg-forest-800 text-ivory font-mono text-xs uppercase tracking-wider hover:bg-forest-700 transition-colors inline-flex items-center gap-2"
                >
                  <span>Submit Clinician Enquiry Simulation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
