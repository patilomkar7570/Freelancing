import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Brain,
  AlertTriangle,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Info,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { CLINIC_IMAGES } from '@/lib/images';

export const metadata = {
  title: 'Ketamine Treatment Overview | VALENCE Clinical',
  description:
    'Comprehensive clinical education regarding ketamine medicine, pharmacological distinction, individual suitability, risks, and supervised administration.',
};

export default function TreatmentPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-stone-100/80 border-b border-stone-200 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-200 text-charcoal-700 text-[10px] font-mono uppercase tracking-widest">
            <span>Clinical Education &bull; Treatment Overview</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-forest-900 font-normal tracking-tight max-w-3xl">
            Ketamine Medicine: Mechanisms, Scope &amp; Clinical Context
          </h1>
          <p className="text-charcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            An objective, evidence-informed overview designed to assist patients, families, and healthcare professionals in understanding the pharmacological principles and clinical considerations of ketamine therapy.
          </p>
        </div>
      </section>

      {/* Clinical Disclaimer Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-lg bg-stone-200/70 border border-stone-300 text-xs text-charcoal-800 flex items-start gap-3">
          <Info className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-mono text-[11px] uppercase tracking-wider text-forest-900 font-medium">
              Medical Information &amp; Clinical Disclaimers
            </p>
            <p className="text-charcoal-700 leading-relaxed">
              Ketamine is a controlled prescription medicine. Ketamine therapy does not guarantee outcomes, is not a &ldquo;cure&rdquo; for depression or psychiatric illness, and may not be suitable for all individuals. Any potential treatment requires rigorous in-person evaluation by a licensed physician. The information on this page is educational and does not constitute individual medical advice.
            </p>
          </div>
        </div>
      </section>

      {/* 1. What is Ketamine & Pharmacological Distinction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="editorial-tag text-sage-700">Pharmacology</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal leading-snug">
              From Surgical Anaesthetic to Neuro-Affective Research
            </h2>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-card border border-stone-200 mt-4">
              <Image
                src={CLINIC_IMAGES.assessmentDesk}
                alt="Medical records, clinical research notes, and stethoscope on desk"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm text-charcoal-700 leading-relaxed font-light">
            <p>
              Ketamine was initially synthesized in the 1960s and approved by regulatory bodies worldwide as a safe, short-acting dissociative anaesthetic. In operative medicine, it has been administered safely at high doses for decades due to its favorable cardiovascular and respiratory stability profiles.
            </p>
            <p>
              Over the past two decades, academic psychiatric researchers discovered that when administered at <strong>significantly lower, sub-anaesthetic concentrations</strong> (often a fraction of surgical doses), ketamine engages distinct neurological pathways.
            </p>

            <div className="p-5 rounded-lg bg-white border border-stone-200 space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-forest-900 font-semibold flex items-center gap-2">
                <Brain className="w-4 h-4 text-forest-800" />
                NMDA Modulation &amp; Synaptic Neuroplasticity
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Unlike traditional monoaminergic antidepressants (such as SSRIs or SNRIs that modulate serotonin and norepinephrine), sub-anaesthetic ketamine primarily acts as an antagonist at the <strong>N-methyl-D-aspartate (NMDA)</strong> receptor. This antagonism triggers downstream surges in glutamate release, activating AMPA receptors and promoting the expression of <strong>Brain-Derived Neurotrophic Factor (BDNF)</strong>.
              </p>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                This biochemical cascade is believed to stimulate synaptogenesis—the temporary formation of new neural connections and dendritic spine maturation—opening a critical transient window of psychological adaptability and neuroplasticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What Clinician-Supervised Administration Means */}
      <section className="bg-forest-900 text-ivory-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="editorial-tag text-sage-300">Safety Infrastructure</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
              What Clinician-Supervised Treatment Entails
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed font-light">
              We reject unmonitored or home-delivery ketamine models. Safe administration demands rigorous medical presence and immediate emergency preparedness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-8 h-8 rounded bg-forest-800 text-sage-300 flex items-center justify-center">
                <HeartPulse className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-ivory">Continuous Physiological Tracking</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Continuous non-invasive monitoring of arterial blood pressure, continuous ECG, oxygen saturation, and pulse throughout the infusion period.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-8 h-8 rounded bg-forest-800 text-sage-300 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-ivory">Direct Attending Presence</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                A licensed physician or specialized clinical nurse remains physically in the treatment suite or directly adjacent with instantaneous response capability.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <div className="w-8 h-8 rounded bg-forest-800 text-sage-300 flex items-center justify-center">
                <Stethoscope className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg text-ivory">Post-Session Recovery Protocol</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Patients spend structured time in a dedicated quiet recovery space until motor coordination, cognitive clarity, and hemodynamic baselines return to normal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Individual Suitability, Indications & Contraindications */}
      <section id="suitability" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="editorial-tag text-sage-700">Clinical Evaluation</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal">
            Suitability &amp; Safety Criteria
          </h2>
          <p className="text-charcoal-600 text-sm leading-relaxed">
            Specialist ketamine care is indicated for specific, rigorously documented circumstances, and is strictly contraindicated in others.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Indications */}
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-stone-200 shadow-subtle space-y-5">
            <div className="flex items-center gap-2 text-forest-900 font-medium text-xs font-mono uppercase tracking-wider border-b border-stone-200 pb-3">
              <CheckCircle className="w-4 h-4 text-sage-600" />
              <span>Potential Indications Evaluated</span>
            </div>
            <ul className="space-y-3 text-xs text-charcoal-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-800 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-forest-900">Treatment-Resistant Major Depressive Disorder (TRD):</strong> In individuals who have had inadequate response to multiple evidence-based antidepressant trials and psychotherapy.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-800 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-forest-900">Severe Unipolar Depressive Episodes:</strong> Evaluated alongside ongoing psychiatric management and outpatient safety plans.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-800 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-forest-900">Chronic Neuro-Affective Conditions:</strong> Where standard multimodal therapies have reached therapeutic plateaus.
                </div>
              </li>
            </ul>
          </div>

          {/* Contraindications */}
          <div className="p-6 sm:p-8 rounded-xl bg-stone-100 border border-stone-300 space-y-5">
            <div className="flex items-center gap-2 text-charcoal-900 font-medium text-xs font-mono uppercase tracking-wider border-b border-stone-300 pb-3">
              <AlertTriangle className="w-4 h-4 text-taupe-500" />
              <span>Absolute &amp; Relative Contraindications</span>
            </div>
            <ul className="space-y-3 text-xs text-charcoal-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-charcoal-700 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-charcoal-900">Uncontrolled Cardiovascular Disease:</strong> Severe unmanaged hypertension, unstable angina, recent myocardial infarction, or intracranial aneurysm.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-charcoal-700 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-charcoal-900">Psychotic Spectrum Disorders:</strong> Active psychosis, schizophrenia, schizoaffective disorder, or uncontrolled manic phases.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-charcoal-700 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-charcoal-900">Active Substance Use Disorders:</strong> Current active physiological dependence or unmanaged abuse of central nervous system depressants.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-charcoal-700 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-charcoal-900">Pregnancy &amp; Nursing:</strong> Ketamine is not administered to pregnant or breastfeeding individuals due to potential fetal risks.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Understanding Risks, Side Effects & Therapeutic Realism */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-xl border border-stone-200 shadow-card space-y-6">
          <div className="space-y-2">
            <span className="editorial-tag text-sage-700">Therapeutic Transparency</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-forest-900 font-normal">
              Transient Effects, Risks, and Alternative Considerations
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed max-w-3xl">
              Honest clinical dialogue requires candid discussion of transient side effects and therapeutic uncertainties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 space-y-2">
              <h4 className="text-xs font-mono uppercase text-forest-800 font-semibold">
                Perceptual &amp; Cognitive Effects
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                During administration, patients commonly experience feelings of floating, altered auditory/visual perception, or mild dissociation. These effects resolve promptly as the medicine is metabolized (typically within 45–60 minutes).
              </p>
            </div>

            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 space-y-2">
              <h4 className="text-xs font-mono uppercase text-forest-800 font-semibold">
                Physiological Fluctuations
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Mild to moderate transient elevations in blood pressure and heart rate occur predictably. Transient nausea or lightheadedness may occur, which we pre-emptively manage with antiemetic medications.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 space-y-2">
              <h4 className="text-xs font-mono uppercase text-forest-800 font-semibold">
                Durability &amp; Maintenance
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Ketamine responses vary significantly between individuals. Some patients experience temporary relief, while others require structured maintenance infusions or consolidation psychotherapy to achieve enduring stability.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-charcoal-500 font-mono">
              Have specific questions regarding medication interactions or medical history?
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/treatment/process"
                className="px-4 py-2 rounded bg-forest-800 text-ivory text-xs font-mono uppercase tracking-wider hover:bg-forest-700 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Review The Treatment Process</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
