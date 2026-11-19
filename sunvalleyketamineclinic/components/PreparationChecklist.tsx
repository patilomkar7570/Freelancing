'use client';

import React, { useState } from 'react';
import { CheckCircle2, Circle, ShieldCheck, RefreshCw } from 'lucide-react';

interface ChecklistItem {
  id: string;
  category: 'records' | 'questions' | 'logistics' | 'mindset';
  title: string;
  description: string;
  prompt: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'gather-records',
    category: 'records',
    title: 'Assemble Past Treatment Summaries',
    description: 'Gather a list of previous psychiatric or medical therapies tried, including dates, approximate durations, and outcomes.',
    prompt: 'Have you noted what worked, what caused intolerable side effects, and what produced no response?',
  },
  {
    id: 'medication-list',
    category: 'records',
    title: 'Document Complete Current Medications',
    description: 'Compile an exact list of all prescription medicines, over-the-counter supplements, and herbal products currently taken.',
    prompt: 'Do you have the exact dosages and scheduling documented for physician cross-referencing?',
  },
  {
    id: 'pcp-communication',
    category: 'records',
    title: 'Inform Your Primary Physician or Psychiatrist',
    description: 'Notify your existing care team that you are exploring specialist consultation so records can be seamlessly coordinated.',
    prompt: 'Do you have your primary physician’s office contact details ready to share for collaborative review?',
  },
  {
    id: 'write-questions',
    category: 'questions',
    title: 'Prepare Your Personal Questions in Writing',
    description: 'Write down your key priorities, concerns about side effects, expectations, and uncertainties beforehand.',
    prompt: 'Have you written down the top 3–5 clinical questions you need answered by the physician?',
  },
  {
    id: 'support-person',
    category: 'logistics',
    title: 'Designate a Trusted Support Person / Chaperone',
    description: 'Identify an adult family member or friend who can accompany you home safely and provide support post-session.',
    prompt: 'Has your designated companion confirmed they will be available to drive or escort you?',
  },
  {
    id: 'calendar-clearance',
    category: 'logistics',
    title: 'Protect Your Post-Appointment Schedule',
    description: 'Clear significant work meetings, high-stakes decisions, and obligations for the remainder of appointment days.',
    prompt: 'Have you arranged an unhurried, low-stimulation evening following your appointment?',
  },
  {
    id: 'reflective-grounding',
    category: 'mindset',
    title: 'Approach with Curios Openness',
    description: 'Cultivate an open, unhurried mindset. Treatment is an adjunct therapeutic process, not a sudden magical transformation.',
    prompt: 'Are you prepared to engage in ongoing psychotherapy alongside clinical medicine?',
  },
];

export default function PreparationChecklist() {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'records' | 'questions' | 'logistics' | 'mindset'>('all');

  const toggleItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleReset = () => {
    setCheckedIds([]);
  };

  const filteredItems =
    activeTab === 'all'
      ? CHECKLIST_ITEMS
      : CHECKLIST_ITEMS.filter((item) => item.category === activeTab);

  const progressPercent = Math.round((checkedIds.length / CHECKLIST_ITEMS.length) * 100);

  return (
    <div className="bg-white rounded-xl border border-stone-200 shadow-card p-6 sm:p-8 space-y-6">
      {/* Header & Progress */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <span className="editorial-tag text-sage-700">Interactive Tool</span>
          <h3 className="font-serif text-2xl text-forest-900 mt-1">
            Pre-Consultation Readiness Checklist
          </h3>
          <p className="text-xs text-charcoal-600 mt-0.5">
            Check off steps as you assemble your materials and prepare questions for your doctor.
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="text-right">
            <div className="font-mono text-xs font-semibold text-forest-900">
              {checkedIds.length} of {CHECKLIST_ITEMS.length} Prepared
            </div>
            <div className="w-28 sm:w-36 h-2 bg-stone-200 rounded-full overflow-hidden mt-1">
              <div
                className="h-full bg-forest-800 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <button
            onClick={handleReset}
            className="p-2 rounded hover:bg-stone-100 text-charcoal-500 hover:text-charcoal-800 transition-colors"
            title="Reset checklist"
            aria-label="Reset checklist"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 text-xs font-mono">
        {(['all', 'records', 'questions', 'logistics', 'mindset'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 rounded-full capitalize transition-colors ${
              activeTab === tab
                ? 'bg-forest-800 text-ivory'
                : 'bg-stone-100 text-charcoal-700 hover:bg-stone-200'
            }`}
          >
            {tab === 'all' ? 'All Steps' : tab}
          </button>
        ))}
      </div>

      {/* Checklist Grid */}
      <div className="space-y-3">
        {filteredItems.map((item) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-4 rounded-lg border transition-all cursor-pointer flex items-start gap-3.5 ${
                isChecked
                  ? 'bg-sage-50/70 border-sage-300'
                  : 'bg-white border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
              }`}
            >
              <button
                type="button"
                className="mt-0.5 text-forest-800 shrink-0 focus:outline-none"
                aria-label={`Toggle ${item.title}`}
              >
                {isChecked ? (
                  <CheckCircle2 className="w-5 h-5 text-forest-800" />
                ) : (
                  <Circle className="w-5 h-5 text-stone-300" />
                )}
              </button>

              <div className="flex-grow space-y-1">
                <div className="flex items-center justify-between">
                  <h4
                    className={`text-sm font-medium ${
                      isChecked ? 'text-forest-900 line-through opacity-80' : 'text-charcoal-900'
                    }`}
                  >
                    {item.title}
                  </h4>
                  <span className="editorial-tag text-[9px] text-stone-500 uppercase">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  {item.description}
                </p>
                <p className="text-[11px] text-forest-800/80 italic font-serif pt-0.5">
                  &ldquo;{item.prompt}&rdquo;
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="p-4 rounded bg-stone-100 border border-stone-200 text-xs text-charcoal-600 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-forest-800 shrink-0" />
          <span>This interactive tool runs in your browser. No personal health information is transmitted or saved.</span>
        </div>
      </div>
    </div>
  );
}
