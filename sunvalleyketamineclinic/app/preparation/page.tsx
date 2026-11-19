import React from 'react';
import Link from 'next/link';
import {
  FileText,
  Car,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import PreparationChecklist from '@/components/PreparationChecklist';

export const metadata = {
  title: 'Preparation Guide & Pre-Consultation | VALENCE Clinical',
  description:
    'Essential guidance on preparing for clinical consultation, questions to ask your physician, understanding informed consent, travel safety, and care continuity.',
};

export default function PreparationPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-stone-100/80 border-b border-stone-200 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-200 text-charcoal-700 text-[10px] font-mono uppercase tracking-widest">
            <span>Patient Guidance &bull; Preparation</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-forest-900 font-normal tracking-tight max-w-3xl">
            Thoughtful preparation for considered care.
          </h1>
          <p className="text-charcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Approaching specialist healthcare with clarity and preparation empowers you to make informed decisions alongside your clinical team.
          </p>
        </div>
      </section>

      {/* Medical Responsibility Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-lg bg-stone-200/60 border border-stone-300 text-xs text-charcoal-700 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Clinical Responsibility Notice:</strong> This guide provides general educational considerations for discussing treatment with your medical provider. It does not provide medication titration advice, fasting schedules, or individual medical directions. Always adhere to the personalized directives provided directly by your attending physician.
          </p>
        </div>
      </section>

      {/* Interactive Preparation Tool */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="editorial-tag text-sage-700">Checklist &amp; Reflection</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal">
            Pre-Consultation Checklist
          </h2>
          <p className="text-charcoal-600 text-sm max-w-xl leading-relaxed">
            Use this interactive planner to organize your medical history and clinical questions before your consultation.
          </p>
        </div>

        <PreparationChecklist />
      </section>

      {/* Key Clinical Questions to Ask */}
      <section className="bg-forest-900 text-ivory-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="editorial-tag text-sage-300">Empowered Dialogue</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
              Essential Questions to Ask Your Clinician
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed font-light">
              We encourage prospective patients to be proactive and inquisitive. An ethical healthcare provider will always welcome detailed inquiry into risks, uncertainties, and evidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">Question 01</span>
              <h3 className="font-serif text-lg text-ivory">Suitability &amp; Risk Profile</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                &ldquo;Given my specific psychiatric and medical background, what are the precise reasons ketamine might—or might not—be an appropriate therapeutic consideration for me?&rdquo;
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">Question 02</span>
              <h3 className="font-serif text-lg text-ivory">Supervision &amp; Emergency Readiness</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                &ldquo;Who will remain physically present in the room during administration? What continuous monitoring is utilized, and what protocols exist for acute blood pressure or anxiety elevations?&rdquo;
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">Question 03</span>
              <h3 className="font-serif text-lg text-ivory">Coordination with Existing Doctors</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                &ldquo;How will your clinic coordinate with my current psychiatrist or primary care physician? What clinical documentation will be shared with them?&rdquo;
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">Question 04</span>
              <h3 className="font-serif text-lg text-ivory">Psychotherapy &amp; Integration</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                &ldquo;What psychological integration framework do you provide? How do we translate transient neuroplasticity into durable behavioral or psychological changes?&rdquo;
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">Question 05</span>
              <h3 className="font-serif text-lg text-ivory">Maintenance &amp; Response Durability</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                &ldquo;If I experience positive relief, what is the expected duration of that benefit? What does long-term maintenance or eventual cessation look like?&rdquo;
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">Question 06</span>
              <h3 className="font-serif text-lg text-ivory">Non-Response &amp; Alternatives</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                &ldquo;What proportion of individuals do not experience therapeutic benefit, and what alternative modalities (TMS, psychotherapy, pharmacological changes) do you recommend if ketamine does not help?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Informed Consent & Travel Logistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informed Consent */}
          <div className="p-8 rounded-xl bg-white border border-stone-200 shadow-subtle space-y-4">
            <div className="flex items-center gap-2 text-forest-900 font-medium text-xs font-mono uppercase tracking-wider border-b border-stone-200 pb-3">
              <FileText className="w-4 h-4 text-forest-800" />
              <span>Understanding Informed Consent</span>
            </div>
            <p className="text-xs text-charcoal-700 leading-relaxed">
              Informed consent is not a mere formality or a signature on paper—it is an ongoing process of mutual comprehension. Before any clinical session, you should expect:
            </p>
            <ul className="space-y-2 text-xs text-charcoal-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 shrink-0 mt-0.5" />
                <span>Explicit discussion of transient perceptual distortions, nausea, and blood pressure changes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 shrink-0 mt-0.5" />
                <span>Transparent explanation that ketamine may produce minimal or temporary effects in some patients.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 shrink-0 mt-0.5" />
                <span>Unconditional right to pause, adjust, or discontinue care at any moment without penalty.</span>
              </li>
            </ul>
          </div>

          {/* Travel Logistics & Chaperone Safety */}
          <div className="p-8 rounded-xl bg-white border border-stone-200 shadow-subtle space-y-4">
            <div className="flex items-center gap-2 text-forest-900 font-medium text-xs font-mono uppercase tracking-wider border-b border-stone-200 pb-3">
              <Car className="w-4 h-4 text-forest-800" />
              <span>Travel Logistics &amp; Chaperone Safety</span>
            </div>
            <p className="text-xs text-charcoal-700 leading-relaxed">
              Patient safety extends beyond clinic doors. Because ketamine temporarily impacts motor reflexes and cognitive processing:
            </p>
            <ul className="space-y-2 text-xs text-charcoal-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 shrink-0 mt-0.5" />
                <span><strong>No Driving Policy:</strong> Operating a vehicle or heavy machinery is strictly prohibited for the remainder of appointment days.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 shrink-0 mt-0.5" />
                <span><strong>Designated Escort:</strong> Patients must have an adult companion accompany them home via private transport or approved rideshare.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 shrink-0 mt-0.5" />
                <span><strong>Restful Environment:</strong> Ensure a calm, quiet evening setting free from major professional obligations.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Integration CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-100 p-8 rounded-xl border border-stone-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <span className="editorial-tag text-sage-700">Next Step in Care</span>
            <h3 className="font-serif text-2xl text-forest-900 font-normal">
              Integration &amp; Patient Support
            </h3>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Learn how post-session reflection and psychotherapy dialogue transform biochemical neuroplasticity into durable mental health progress.
            </p>
          </div>
          <Link
            href="/patient-support"
            className="px-5 py-2.5 rounded bg-forest-800 text-ivory text-xs font-mono uppercase tracking-wider hover:bg-forest-700 transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <span>Explore Integration Support</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
