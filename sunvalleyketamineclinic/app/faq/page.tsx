'use client';

import React, { useState } from 'react';
import {
  ChevronDown,
  Search,
  Info,
} from 'lucide-react';
import ConsultationButton from '@/components/ConsultationButton';

interface FAQItem {
  id: string;
  category: 'treatment' | 'consultation' | 'experience' | 'practical';
  question: string;
  answer: string;
  clinicalNote?: string;
}

const FAQ_DATA: FAQItem[] = [
  // 1. Understanding Treatment
  {
    id: 'what-is-ketamine',
    category: 'treatment',
    question: 'What is ketamine, and how is it used in specialist psychiatric care?',
    answer:
      'Ketamine is a synthetic compound originally developed and approved in the 1960s as a surgical anaesthetic. In operative medicine, it is delivered at higher doses to achieve anaesthesia with strong respiratory stability. In specialist psychiatric research and treatment, ketamine is administered at significantly lower, sub-anaesthetic doses where it acts primarily as an NMDA receptor antagonist. This mechanism modulates glutamate neurotransmission and stimulates synaptogenesis (neuroplasticity), creating a transient biological window that can assist in interrupting rigid depressive neural circuits.',
    clinicalNote: 'Requires in-person clinical assessment by a licensed medical practitioner.',
  },
  {
    id: 'why-assessment-important',
    category: 'treatment',
    question: 'Why is comprehensive medical assessment essential before considering treatment?',
    answer:
      'Ketamine causes predictable transient increases in heart rate and blood pressure, and produces altered sensory perception. Thorough medical screening is critical to identify cardiovascular contraindications (such as unmanaged hypertension or vascular aneurysms), psychiatric contraindications (such as active psychosis or mania), and potential medication interactions. A specialist physician must review prior treatment histories to verify that ketamine is clinically justified and safe for your specific physiology.',
    clinicalNote: 'Medical screening must be completed by a qualified physician prior to any administration.',
  },
  {
    id: 'is-ketamine-a-cure',
    category: 'treatment',
    question: 'Does ketamine cure depression or guarantee improvement?',
    answer:
      'No. Ketamine is not a &ldquo;cure&rdquo; for depression or any mental health condition, and responsible medical practitioners do not make guarantees of clinical success. While clinical trials indicate meaningful symptom reduction for many individuals with treatment-resistant conditions, individual responses vary widely. Some patients experience significant relief, others temporary relief, and some do not respond. It is best understood as an adjunct catalyst that works alongside psychotherapy, lifestyle support, and continuous psychiatric care.',
    clinicalNote: 'Clinical responses vary. Treatment efficacy must be evaluated longitudinally.',
  },
  {
    id: 'questions-to-ask',
    category: 'treatment',
    question: 'What questions should someone ask before deciding to proceed with treatment?',
    answer:
      'We recommend asking: (1) What specific medical qualifications does the attending staff possess? (2) Who will be physically present in the room throughout my infusion? (3) What continuous vital monitoring equipment is utilized? (4) How will your practice coordinate with my current psychiatrist or primary care physician? (5) What is your protocol if I experience acute anxiety or blood pressure spikes during the session? (6) What psychotherapeutic integration framework do you provide?',
  },

  // 2. The Consultation
  {
    id: 'what-happens-initial-consult',
    category: 'consultation',
    question: 'What happens during an initial clinical consultation?',
    answer:
      'The initial consultation is an unhurried, 60–75 minute clinical appointment dedicated to understanding your health history. The physician reviews past psychiatric diagnoses, prior medication trials, psychotherapy history, medical comorbidities, and current prescriptions. In addition, vital signs are measured, cardiovascular risks are evaluated, and treatment alternatives are discussed in detail. It is an opportunity for you to ask questions and decide collaboratively whether to proceed.',
  },
  {
    id: 'what-information-requested',
    category: 'consultation',
    question: 'What records or documentation might a clinician request?',
    answer:
      'Clinicians typically request: (1) A comprehensive list of current medications and supplements, (2) Treatment summaries or records from your treating psychiatrist or psychotherapist, (3) Recent medical laboratory work or cardiovascular records (such as ECG results) if pre-existing heart conditions exist, and (4) Contact details for your primary care team for inter-clinical coordination.',
  },
  {
    id: 'how-alternatives-discussed',
    category: 'consultation',
    question: 'How are alternative therapies and risks discussed during evaluation?',
    answer:
      'Ethical clinical governance mandates that ketamine is evaluated within the broader spectrum of available treatments. Your clinician will review other evidence-based modalities—such as alternative psychopharmacological regimens, Transcranial Magnetic Stimulation (TMS), Electroconvulsive Therapy (ECT), and intensive psychotherapy modalities (e.g. CBT, DBT, or trauma-focused therapy)—ensuring that all therapeutic avenues are considered.',
    clinicalNote: 'Patients retain the unconditional right to decline or pause treatment at any stage.',
  },

  // 3. Patient Experience
  {
    id: 'what-happens-during-session',
    category: 'experience',
    question: 'What sensations occur during active administration, and how are patients monitored?',
    answer:
      'During administration, patients rest in an ergonomic recliner in a quiet, softly lit suite. Common transient sensations include feelings of physical lightness, floating, altered auditory/visual perception, and psychological detachment from everyday thoughts. These effects generally peak within 30–40 minutes and subside within 60–75 minutes. A licensed physician or specialist nurse remains continuously present, tracking continuous ECG, arterial blood pressure, and oxygen saturation.',
    clinicalNote: 'Continuous in-room monitoring is maintained throughout the entire active period.',
  },
  {
    id: 'why-followup-important',
    category: 'experience',
    question: 'Why are post-session follow-up and psychotherapeutic integration critical?',
    answer:
      'The biological window of heightened neuroplasticity peaks in the 24 to 72 hours following treatment. Follow-up appointments and integration therapy provide structured guidance to process emotional insights, practice cognitive reframing, and establish healthy behavioral routines while the brain is biologically receptive to change. Without integration, the likelihood of durable improvement diminishes.',
  },
  {
    id: 'chaperone-and-travel',
    category: 'experience',
    question: 'Why is a designated driver or companion mandatory on treatment days?',
    answer:
      'Ketamine temporarily alters motor coordination, reaction times, and cognitive processing. Patients are strictly prohibited from driving, operating machinery, or signing legal documents for the remainder of the session day. A designated adult companion must escort the patient home via private transport or approved rideshare.',
  },

  // 4. Practical Information
  {
    id: 'how-to-contact',
    category: 'practical',
    question: 'How can prospective patients or family members contact the practice?',
    answer:
      'Consultation inquiries can be initiated via our online enquiry interface, confidential telephone exchange, or through a referral letter submitted by your primary doctor. Our administrative coordinators provide preliminary guidance regarding scheduling, intake requirements, and appointment pacing.',
  },
  {
    id: 'referring-professional-info',
    category: 'practical',
    question: 'What information should a referring professional discuss with the practice?',
    answer:
      'Referring physicians and therapists are invited to discuss diagnosis confirmation, past treatment trials, therapeutic goals, and preferred post-session psychotherapeutic integration schedules. Our medical team provides written consultation notes and outcome ratings after each treatment checkpoint.',
  },
  {
    id: 'how-patients-access-portal',
    category: 'practical',
    question: 'How do patients access authorized clinical records and intake resources?',
    answer:
      'In an operational healthcare setting, patient records and consent forms are accessed through a secure, encrypted EHR patient portal requiring multi-factor authentication. In this demonstration concept, portal functions are modeled conceptually to showcase healthcare data governance standards without collecting sensitive patient information.',
    clinicalNote: 'Demonstration concept: No live patient health data is processed or stored.',
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<string[]>(['what-is-ketamine', 'why-assessment-important']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = FAQ_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-stone-100/80 border-b border-stone-200 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-200 text-charcoal-700 text-[10px] font-mono uppercase tracking-widest">
            <span>Clinical Knowledge &bull; Common Questions</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-forest-900 font-normal tracking-tight max-w-3xl">
            Frequently Asked Questions
          </h1>
          <p className="text-charcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Detailed, evidence-informed answers to common inquiries regarding ketamine medicine, medical assessment, safety standards, and practical planning.
          </p>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Controls: Search & Category Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-grow max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions or clinical topics..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 text-xs font-mono">
            {[
              { id: 'all', label: 'All Topics' },
              { id: 'treatment', label: 'Understanding Treatment' },
              { id: 'consultation', label: 'The Consultation' },
              { id: 'experience', label: 'Patient Experience' },
              { id: 'practical', label: 'Practical & Contact' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-forest-800 text-ivory font-medium'
                    : 'bg-stone-200/70 text-charcoal-700 hover:bg-stone-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs font-mono text-stone-500">
          Showing {filteredFAQs.length} questions
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-stone-200 shadow-subtle overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none hover:bg-stone-50/60"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1 pr-2">
                    <span className="editorial-tag text-[9px] text-sage-700">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-forest-900 font-normal leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`p-1.5 rounded-full bg-stone-100 text-forest-800 transition-transform duration-200 shrink-0 mt-1 ${
                      isOpen ? 'rotate-180 bg-stone-200' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 space-y-4 border-t border-stone-100 animate-in fade-in-50 duration-150">
                    <p
                      className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                    {faq.clinicalNote && (
                      <div className="p-3 bg-stone-50 rounded border border-stone-200 flex items-center gap-2 text-[11px] text-charcoal-600 font-mono">
                        <Info className="w-3.5 h-3.5 text-forest-800 shrink-0" />
                        <span>Clinical Advisory: {faq.clinicalNote}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-forest-900 text-ivory-100 p-8 sm:p-10 rounded-xl space-y-4 text-center">
          <span className="editorial-tag text-sage-300">Dedicated Clinical Inquiries</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-ivory font-normal">
            Have a Specific Clinical or Medical Question?
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto leading-relaxed font-light">
            Every clinical situation is unique. We encourage prospective patients and referring clinicians to schedule an unhurried consultation to discuss individual circumstances.
          </p>
          <div className="pt-2">
            <ConsultationButton variant="dark">
              Request Consultation Assessment
            </ConsultationButton>
          </div>
        </div>
      </section>
    </div>
  );
}
