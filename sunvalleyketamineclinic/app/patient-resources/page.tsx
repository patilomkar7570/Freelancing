import React from 'react';
import Link from 'next/link';
import {
  FileText,
  Lock,
  ShieldAlert,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  Server,
  KeyRound,
  FileCheck2,
} from 'lucide-react';

export const metadata = {
  title: 'Patient Resources & Portal Architecture | VALENCE Clinical',
  description:
    'Educational resources, pre-visit guides, and an architectural demonstration of clinical patient portal integration and health data governance.',
};

export default function PatientResourcesPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-stone-100/80 border-b border-stone-200 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-200 text-charcoal-700 text-[10px] font-mono uppercase tracking-widest">
            <span>Documentation &bull; Resource Centre</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-forest-900 font-normal tracking-tight max-w-3xl">
            Educational resources &amp; digital architecture.
          </h1>
          <p className="text-charcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Access practice guidebooks, understand clinical informed consent concepts, and explore how secure health systems interface with patient care.
          </p>
        </div>
      </section>

      {/* Critical Data Security & Demonstration Policy Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-xl bg-forest-950 text-ivory-100 border border-forest-800 space-y-3">
          <div className="flex items-center gap-2 text-sage-300 font-mono text-xs uppercase tracking-wider font-semibold">
            <ShieldAlert className="w-4 h-4 text-sage-400" />
            <span>Health Data Security &amp; Non-Operational Demonstration Notice</span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed font-light">
            In compliance with healthcare privacy ethics and rigorous engineering standards, <strong>this demonstration does not collect, process, or store private personal health information (PHI)</strong>. Patient medical records, psychiatric histories, intake questionnaires, and consent forms must never be submitted over uncertified public demonstration forms. In an operational clinical setting, these services are handled through certified Electronic Health Record (EHR) systems with strict multi-factor authentication, end-to-end encryption, and business associate agreements.
          </p>
        </div>
      </section>

      {/* Educational Downloads & Guidebooks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="editorial-tag text-sage-700">Educational Materials</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal">
            Practice Publications &amp; Guides
          </h2>
          <p className="text-charcoal-600 text-sm max-w-xl leading-relaxed">
            Conceptual educational materials illustrating how clinical practices present clear information to prospective patients and families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-subtle flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-stone-100 text-forest-800 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-forest-800" />
              </div>
              <h3 className="font-serif text-xl text-forest-900">
                Patient Consultation Primer
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                A 16-page guide outlining the clinical mechanism of ketamine, indications, evaluation criteria, and what to expect during initial evaluation.
              </p>
            </div>
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
              <span className="text-stone-400 text-[10px] uppercase">PDF Concept &bull; 2.4 MB</span>
              <span className="text-forest-800 font-medium cursor-not-allowed opacity-75">
                Demonstration Only
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-subtle flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-stone-100 text-forest-800 flex items-center justify-center">
                <FileCheck2 className="w-5 h-5 text-forest-800" />
              </div>
              <h3 className="font-serif text-xl text-forest-900">
                Informed Consent Framework
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                A transparent review of risks, common transient side effects, realistic outcomes, and continuous monitoring safeguards.
              </p>
            </div>
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
              <span className="text-stone-400 text-[10px] uppercase">PDF Concept &bull; 1.8 MB</span>
              <span className="text-forest-800 font-medium cursor-not-allowed opacity-75">
                Demonstration Only
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-subtle flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-stone-100 text-forest-800 flex items-center justify-center">
                <FileText className="w-5 h-5 text-forest-800" />
              </div>
              <h3 className="font-serif text-xl text-forest-900">
                Integration &amp; Reflection Journal
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Structured inquiry prompts, somatic tracking grids, and reflective exercises designed for the 24–72 hour post-session window.
              </p>
            </div>
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
              <span className="text-stone-400 text-[10px] uppercase">PDF Concept &bull; 3.1 MB</span>
              <span className="text-forest-800 font-medium cursor-not-allowed opacity-75">
                Demonstration Only
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Architecture & Secure EHR Placeholder */}
      <section className="bg-stone-100/70 border-y border-stone-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-3">
            <span className="editorial-tag text-sage-700">Digital Systems Architecture</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal">
              Clinical Portal Integration Placeholder
            </h2>
            <p className="text-charcoal-600 text-sm leading-relaxed">
              In production healthcare deployments, the patient portal is never built directly into marketing web pages. Instead, it securely interfaces with an authenticated, certified clinical records infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Diagram of Secure EHR Architecture */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-stone-300 shadow-card space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-forest-800" />
                  <span className="font-mono text-xs uppercase tracking-wider text-forest-900 font-medium">
                    Secure Clinical Portal Interface
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-sage-100 text-sage-700 font-mono text-[9px] uppercase tracking-wider">
                  Conceptual Wireframe
                </span>
              </div>

              {/* Mock portal UI */}
              <div className="p-5 rounded-lg bg-stone-50 border border-stone-200 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between text-stone-500 text-[11px] pb-2 border-b border-stone-200">
                  <span>Portal Service: Authorized Clinical Gateway</span>
                  <span className="text-emerald-700 font-semibold">&bull; System Locked</span>
                </div>

                <div className="space-y-2 text-charcoal-700 font-sans text-xs">
                  <div className="font-medium text-forest-900 font-mono text-[11px] uppercase">
                    Required Operational Features for Live Deployment:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div className="flex items-center gap-2 p-2 bg-white rounded border border-stone-200">
                      <KeyRound className="w-3.5 h-3.5 text-sage-600" />
                      <span>Multi-Factor Authentication (MFA)</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-white rounded border border-stone-200">
                      <Server className="w-3.5 h-3.5 text-sage-600" />
                      <span>End-to-End Cryptographic Encryption</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-white rounded border border-stone-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-sage-600" />
                      <span>Certified EHR Records Link</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-white rounded border border-stone-200">
                      <Lock className="w-3.5 h-3.5 text-sage-600" />
                      <span>Role-Based Audit Logging</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    disabled
                    className="w-full py-3 rounded bg-stone-300 text-charcoal-600 text-xs font-mono uppercase tracking-wider cursor-not-allowed opacity-80"
                  >
                    Patient Login Disabled in Demonstration
                  </button>
                  <p className="text-[10px] text-stone-500 text-center mt-1.5 font-sans">
                    Demonstration environment: No live database or PHI storage is connected.
                  </p>
                </div>
              </div>
            </div>

            {/* Explanation Column */}
            <div className="lg:col-span-5 space-y-4 text-xs text-charcoal-700 leading-relaxed font-light">
              <h3 className="font-serif text-2xl text-forest-900 font-normal">
                Why Healthcare Privacy Requires Independent Systems
              </h3>
              <p>
                Public websites are optimized for accessibility, search performance, and broad distribution. Conversely, sensitive medical records demand strict access containment, granular audit trails, and strict jurisdictional compliance.
              </p>
              <p>
                By isolating the educational experience from the patient portal gateway, healthcare practices protect patient confidentiality and uphold medical governance.
              </p>
              <div className="pt-2">
                <Link
                  href="/faq"
                  className="text-xs font-mono uppercase tracking-wider text-forest-800 hover:text-forest-950 inline-flex items-center gap-1 font-medium underline underline-offset-4"
                >
                  <span>Review Frequently Asked Questions</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
