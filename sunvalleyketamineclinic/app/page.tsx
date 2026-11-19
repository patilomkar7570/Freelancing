import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  ArrowRight,
  Compass,
  Stethoscope,
  HeartPulse,
  Brain,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import ConsultationButton from '@/components/ConsultationButton';
import PatientJourneyExplorer from '@/components/PatientJourneyExplorer';
import { CLINIC_IMAGES } from '@/lib/images';
import Logo from '@/components/Logo';

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 pb-16 lg:pb-24 overflow-hidden border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Headline & Copy */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-200/70 border border-stone-300 text-charcoal-700">
                <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
                <span className="editorial-tag text-[10px] tracking-widest text-forest-900">
                  Specialist Ketamine Medicine &amp; Clinical Care
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.25rem] leading-[1.08] text-forest-900 font-normal tracking-tight">
                  Thoughtful care. <br />
                  <span className="italic font-light text-forest-800">
                    A more considered
                  </span>{' '}
                  path forward.
                </h1>

                <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-xl font-sans font-light">
                  VALENCE Clinical is a specialist healthcare concept dedicated to clinician-supervised ketamine-related care. We unite rigorous medical assessment, continuous physiological oversight, and integrated reflective dialogue in a calm, architecturally composed environment.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <Link
                  href="/approach"
                  className="px-6 py-3.5 rounded bg-forest-800 text-ivory text-xs font-mono uppercase tracking-wider hover:bg-forest-700 transition-all shadow-card hover:shadow-elevated inline-flex items-center gap-2 group"
                >
                  <span>Explore Our Approach</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/treatment/process"
                  className="px-6 py-3.5 rounded bg-white text-forest-900 border border-stone-300 text-xs font-mono uppercase tracking-wider hover:bg-stone-50 transition-colors inline-flex items-center gap-2"
                >
                  <Compass className="w-3.5 h-3.5 text-sage-600" />
                  <span>Understand the Process</span>
                </Link>
              </div>

              {/* Clinical Reassurance Badges */}
              <div className="pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-charcoal-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sage-600 shrink-0" />
                  <span>Direct Physician Oversight</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-sage-600 shrink-0" />
                  <span>Continuous Vitals Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-sage-600 shrink-0" />
                  <span>Individualized Suitability</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Healthcare Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-3 rounded-2xl border border-stone-300/80 -z-10 translate-x-1 translate-y-1" />

                <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-elevated bg-stone-200">
                  <Image
                    src={CLINIC_IMAGES.heroInterior}
                    alt="Calm, minimalist specialist healthcare consultation suite with natural light and refined furnishings"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />

                  {/* Overlaid caption card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-ivory-100/95 backdrop-blur-md border border-stone-200/80 shadow-subtle text-charcoal-900">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase text-sage-700 tracking-wider mb-1">
                      <span>Practice Space &bull; Suite 03</span>
                      <span>Sensory Calibrated</span>
                    </div>
                    <p className="text-xs font-serif italic text-forest-900">
                      &ldquo;Every detail is arranged to foster safety, calm reflection, and clinical dignity.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRACTICE INTRODUCTION & CLINICAL PURPOSE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-3">
            <span className="editorial-tag text-sage-700">Practice Overview</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal leading-snug">
              Specialist care designed with discernment.
            </h2>
            <div className="w-12 h-0.5 bg-sage-400 mt-2" />
          </div>

          <div className="lg:col-span-8 space-y-6 text-charcoal-700 text-sm sm:text-base leading-relaxed font-light">
            <p>
              In recent years, the clinical landscape around ketamine-related therapies has evolved rapidly. While emerging medical literature demonstrates its utility in carefully evaluated psychiatric and chronic neuro-affective conditions, the quality of patient outcomes hinges entirely upon the <strong>rigour of clinical assessment</strong>, <strong>medical supervision</strong>, and <strong>psychotherapeutic integration</strong>.
            </p>
            <p>
              VALENCE Clinical was conceived to represent a higher standard of specialist outpatient practice. Rather than offering rapid, impersonal infusions or unsubstantiated wellness promises, we operate as a methodical, physician-supervised healthcare facility where medical safety, individualized dosing, and ongoing collaboration with referring physicians form the foundation of every patient journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-lg bg-white border border-stone-200 shadow-subtle space-y-2">
                <div className="font-mono text-xs uppercase tracking-wider text-forest-800 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sage-600" />
                  Medical Assessment First
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  No treatment is scheduled without comprehensive psychiatric and cardiovascular screening, verified medication checks, and dedicated contraindication reviews.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-white border border-stone-200 shadow-subtle space-y-2">
                <div className="font-mono text-xs uppercase tracking-wider text-forest-800 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sage-600" />
                  Collaborative Continuity
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  We maintain active communication with patients&rsquo; primary care physicians, psychiatrists, and therapists, ensuring coordinated multi-disciplinary care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TREATMENT INFORMATION PREVIEW */}
      <section className="bg-stone-100/70 border-y border-stone-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="editorial-tag text-sage-700">Clinical Education</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal">
                Understanding Ketamine Care
              </h2>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Clear, transparent, and evidence-informed education is essential. We help prospective patients and healthcare colleagues understand the mechanisms, boundaries, and clinical parameters of ketamine administration.
              </p>
            </div>

            <Link
              href="/treatment"
              className="text-xs font-mono uppercase tracking-wider text-forest-800 hover:text-forest-950 inline-flex items-center gap-1.5 font-medium shrink-0"
            >
              <span>Full Clinical Overview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-xl border border-stone-200 shadow-subtle flex flex-col justify-between space-y-4 hover:shadow-card transition-shadow">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-forest-800">
                  <Brain className="w-5 h-5 text-forest-800" />
                </div>
                <h3 className="font-serif text-xl text-forest-900">
                  Mechanism &amp; Distinction
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Originally developed as a surgical anaesthetic, sub-anaesthetic ketamine acts via NMDA receptor modulation and glutamate neurotransmission, promoting transient neuroplastic windows.
                </p>
              </div>
              <Link
                href="/treatment"
                className="text-xs font-mono text-sage-700 hover:text-forest-800 inline-flex items-center gap-1 pt-2 border-t border-stone-100"
              >
                Learn about mechanisms <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white p-7 rounded-xl border border-stone-200 shadow-subtle flex flex-col justify-between space-y-4 hover:shadow-card transition-shadow">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-forest-800">
                  <Stethoscope className="w-5 h-5 text-forest-800" />
                </div>
                <h3 className="font-serif text-xl text-forest-900">
                  Individual Suitability
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Ketamine is not suitable for everyone. We evaluate psychiatric indications (such as treatment-resistant depression) alongside strict cardiovascular and psychological safety criteria.
                </p>
              </div>
              <Link
                href="/treatment#suitability"
                className="text-xs font-mono text-sage-700 hover:text-forest-800 inline-flex items-center gap-1 pt-2 border-t border-stone-100"
              >
                Read suitability criteria <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white p-7 rounded-xl border border-stone-200 shadow-subtle flex flex-col justify-between space-y-4 hover:shadow-card transition-shadow">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-forest-800">
                  <Sparkles className="w-5 h-5 text-forest-800" />
                </div>
                <h3 className="font-serif text-xl text-forest-900">
                  Supervised Administration
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Treatment is never taken unmonitored. Continuous clinical presence, vital signs monitoring, and dedicated pre-and-post session psychological support safeguard patient wellbeing.
                </p>
              </div>
              <Link
                href="/treatment/process"
                className="text-xs font-mono text-sage-700 hover:text-forest-800 inline-flex items-center gap-1 pt-2 border-t border-stone-100"
              >
                Explore administration <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT TO EXPECT — INTERACTIVE PATIENT JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="editorial-tag text-sage-700">Patient Pathway</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal">
            What to Expect: The Care Journey
          </h2>
          <p className="text-charcoal-600 text-sm leading-relaxed">
            From preliminary enquiry to longitudinal outcome reviews, our five-stage clinical model provides clarity, predictability, and steady clinical support.
          </p>
        </div>

        {/* Interactive Explorer Component */}
        <PatientJourneyExplorer />

        <div className="text-center pt-2">
          <Link
            href="/treatment/process"
            className="text-xs font-mono uppercase tracking-wider text-forest-800 hover:text-forest-950 inline-flex items-center gap-1.5 font-medium underline underline-offset-4"
          >
            <span>View Comprehensive Step-by-Step Clinical Experience Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 5. OUR APPROACH — PRINCIPLES OF PRACTICE */}
      <section className="bg-forest-900 text-ivory-100 py-20 sm:py-28 relative overflow-hidden">
        {/* Subtle background texture / tint */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#F7F5F0_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
            <div className="lg:col-span-8 space-y-4">
              <span className="editorial-tag text-sage-300">Practice Philosophy</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-normal leading-tight">
                Grounded in medicine. <br />
                <span className="italic font-light text-sage-200">
                  Delivered with humanity.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/approach"
                className="px-5 py-3 rounded border border-sage-400/50 text-ivory hover:bg-forest-800 transition-colors text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Read Full Philosophy</span>
                <ArrowRight className="w-3 h-3 text-sage-300" />
              </Link>
            </div>
          </div>

          {/* 5 Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">01</span>
              <h3 className="font-serif text-xl text-ivory">Individual Assessment</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Every human nervous system carries a distinct medical history. We never apply standardized formulas; clinical appropriateness is established on a rigorous case-by-case basis.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">02</span>
              <h3 className="font-serif text-xl text-ivory">Informed Decision-Making</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Patients receive comprehensive explanations of benefits, uncertainties, side effects, and alternative therapeutic paths before any clinical consent is sought.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">03</span>
              <h3 className="font-serif text-xl text-ivory">Professional Oversight</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Continuous physiological monitoring and registered medical staff present in the clinical suite throughout the entire duration of active administration.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">04</span>
              <h3 className="font-serif text-xl text-ivory">Clear Communication</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                We avoid medical jargon and marketing hype. We provide realistic, measured explanations so patients and their families feel empowered and secure.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">05</span>
              <h3 className="font-serif text-xl text-ivory">Respectful Patient Experiences</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Unrushed appointments, private recovery suites, respectful attention, and thoughtful environmental calibration ensure an emotionally grounded clinical experience.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-forest-950/60 border border-forest-800 space-y-3">
              <span className="font-mono text-xs text-sage-400 font-semibold">06</span>
              <h3 className="font-serif text-xl text-ivory">Physician Collaboration</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                We view ourselves as an adjunct specialist resource for referring psychiatrists and general practitioners, maintaining prompt consultative clinical letters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRACTICE ENVIRONMENT & ARCHITECTURE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="editorial-tag text-sage-700">The Clinical Setting</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest-900 font-normal leading-snug">
              An environment arranged for quiet reflection and safety.
            </h2>
            <p className="text-charcoal-700 text-sm leading-relaxed">
              Clinical research indicates that the sensory environment plays a substantial role in patient comfort and treatment tolerance. Our suites are deliberately designed to avoid the sterile chill of an acute hospital ward while maintaining full clinical monitoring capabilities.
            </p>

            <ul className="space-y-3 text-xs text-charcoal-700 pt-2">
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-sage-500 mt-1.5 shrink-0" />
                <span><strong>Acoustic Isolation:</strong> Double-sealed architectural dampening to minimize distracting outside noise.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-sage-500 mt-1.5 shrink-0" />
                <span><strong>Circadian Lighting:</strong> Dimmable, warm indirect illumination supporting natural relaxation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-sage-500 mt-1.5 shrink-0" />
                <span><strong>Discreet Medical Instrumentation:</strong> Full vital monitoring technology integrated unobtrusively.</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/visit"
                className="text-xs font-mono uppercase tracking-wider text-forest-800 hover:text-forest-950 inline-flex items-center gap-1.5 font-medium underline underline-offset-4"
              >
                <span>Explore the Practice Environment &amp; Visit Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-card">
              <Image
                src={CLINIC_IMAGES.treatmentSuite}
                alt="Calm private clinical suite with recliner and gentle daylight"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-card translate-y-6">
              <Image
                src={CLINIC_IMAGES.reflectionSpace}
                alt="Quiet architectural seating area with natural textures and garden view"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. SOPHISTICATED CLOSING CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-forest-950 text-ivory-100 p-8 sm:p-14 lg:p-16 overflow-hidden border border-forest-900 shadow-deep">
          {/* Subtle architectural watermark */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none">
            <Logo variant="symbol" size="xl" theme="dark" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="editorial-tag text-sage-300">Consultation Assessment</span>

            <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-normal leading-tight">
              Begin with an unhurried, <br />
              <span className="italic font-light text-sage-200">
                objective conversation.
              </span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              Whether you are an individual exploring treatment options, a family member seeking reliable clinical information, or a healthcare professional considering a patient referral, we welcome your enquiry.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <ConsultationButton variant="dark">
                Request Consultation Assessment
              </ConsultationButton>

              <Link
                href="/clinician-referrals"
                className="px-5 py-3 rounded border border-sage-500/40 text-ivory hover:bg-forest-900 transition-colors text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Clinician Referral Pathway</span>
                <ArrowRight className="w-3 h-3 text-sage-300" />
              </Link>
            </div>

            <div className="pt-6 border-t border-forest-900/80 text-[11px] font-mono text-stone-400">
              * Design concept demonstration by NOVA Digital Studio. No real patient data is collected or stored.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
