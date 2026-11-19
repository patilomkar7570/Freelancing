'use client';

import React, { useState } from 'react';
import {
  ChevronDown,
  Search,
  HelpCircle,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import BookingModal from '@/components/BookingModal';

interface FAQItem {
  id: string;
  category: 'general' | 'home-visits' | 'diabetes' | 'conditions';
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'difference-fhp-chiropodist',
    category: 'general',
    question: 'What is the difference between a Foot Health Practitioner (FHP) and a Podiatrist?',
    answer:
      'A Foot Health Practitioner (FHP) is qualified to treat the majority of common foot and nail conditions seen in the community—including medical nail trimming, reduction of thickened nails, corn enucleation, callus removal, verruca treatments, and diabetic foot screening. Because Cally is also an Adult Registered Nurse with 10+ years of NHS hospital and community experience, she combines podiatric mechanical skills with comprehensive medical knowledge of systemic conditions and medications. Complex surgical bone realignment or local anaesthetic surgery is referred to hospital podiatric surgeons.',
  },
  {
    id: 'does-corn-removal-hurt',
    category: 'conditions',
    question: 'Does corn or callus removal hurt?',
    answer:
      'No! Corns and calluses are formed from dead layers of skin (stratum corneum) that have accumulated due to friction. Because this tissue has no active blood vessels or nerve endings, removing it is completely painless. Most patients experience immediate, dramatic relief from walking discomfort the moment the central nucleus is enucleated.',
  },
  {
    id: 'how-do-home-visits-work',
    category: 'home-visits',
    question: 'What do I need to prepare for a home visit?',
    answer:
      'Very little! Cally brings all necessary clinical supplies, including a clean portable floor drape, an adjustable ergonomic footrest, and individually sealed, vacuum-autoclaved instruments. You simply need a comfortable armchair to sit in, a well-lit area, and access to a power socket if electrical nail burring is required. Your room is left completely clean and tidy.',
  },
  {
    id: 'diabetic-importance',
    category: 'diabetes',
    question: 'Why is it dangerous for diabetic patients to cut their own corns or nails?',
    answer:
      'Diabetes frequently reduces protective pain sensation (peripheral neuropathy) and impairs arterial circulation (ischaemia). Over-the-counter corn plasters contain strong salicylic acids that can cause chemical burns to fragile diabetic skin, while home bathroom clippers can easily nick surrounding tissue. Because healing is delayed, minor cuts can rapidly deteriorate into infected diabetic ulcers. Professional nurse-led care avoids these risks entirely.',
  },
  {
    id: 'verruca-vs-corn',
    category: 'conditions',
    question: 'How do I know if I have a corn or a verruca?',
    answer:
      'While they can appear similar, corns and verrucae have distinct features. A corn is compacted hard skin caused by mechanical pressure; it typically hurts when pressed directly down upon, and skin lines continue around the smooth nucleus. A verruca is an infectious viral wart; it typically hurts more when pinched from the sides, interrupts natural skin ridge lines, and often displays tiny black capillary pinpoints.',
  },
  {
    id: 'how-often-should-i-visit',
    category: 'general',
    question: 'How frequently should I have my feet treated?',
    answer:
      'For general foot maintenance and nail trimming, most patients schedule appointments every 6 to 8 weeks. For rapid callus formation or high-risk diabetic monitoring, visits every 4 to 6 weeks may be recommended. Cally will advise on the ideal schedule suited to your personal mobility and nail growth rates.',
  },
  {
    id: 'infection-control-sterilization',
    category: 'general',
    question: 'How are your clinical instruments cleaned and sterilized?',
    answer:
      'We operate under strict hospital-level decontamination protocols. Every instrument undergoes automated ultrasonic cleaning followed by high-temperature, high-pressure vacuum steam autoclaving at 134°C. Each sterile set is sealed in an individual pouch with a chemical sterilization indicator strip, opened only in front of the patient at the start of treatment.',
  },
  {
    id: 'home-visit-radius',
    category: 'home-visits',
    question: 'What towns and areas are covered for domiciliary home visits?',
    answer:
      'Home visits are provided across our central town and surrounding rural villages within a 10–12 mile radius. If you live slightly outside this area, please contact Cally directly as visits can often be arranged for a modest additional mileage fee.',
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<string[]>(['difference-fhp-chiropodist', 'does-corn-removal-hurt']);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

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
    <div className="space-y-16 py-12 pb-24">
      {/* Header */}
      <section className="bg-cream-200/80 border-b border-pebble-300 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam-100 border border-seafoam-300 text-teal-950 text-[10px] font-mono uppercase tracking-widest font-semibold">
            <span>Patient Guidance &bull; Common Questions</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-teal-950 font-medium tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slatecharcoal-600 text-sm sm:text-base font-light leading-relaxed">
            Find clear, honest answers regarding treatments, home visit logistics, clinical sterilization, and diabetic foot management.
          </p>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <Search className="w-4 h-4 text-slatecharcoal-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search foot health questions..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-pebble-300 rounded-xl focus:outline-none focus:border-teal-700"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 text-xs font-mono">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'general', label: 'General' },
              { id: 'home-visits', label: 'Home Visits' },
              { id: 'conditions', label: 'Corns & Nails' },
              { id: 'diabetes', label: 'Diabetic' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-teal-900 text-white font-medium'
                    : 'bg-cream-200 text-slatecharcoal-700 hover:bg-pebble-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-pebble-300 shadow-card overflow-hidden transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none hover:bg-cream-100"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-serif text-lg sm:text-xl text-teal-950 font-medium leading-snug">
                    {faq.question}
                  </h3>
                  <div
                    className={`p-1.5 rounded-full bg-pebble-100 text-teal-900 transition-transform duration-200 shrink-0 mt-0.5 ${
                      isOpen ? 'rotate-180 bg-pebble-200' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slatecharcoal-700 leading-relaxed font-light border-t border-pebble-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="p-8 rounded-2xl bg-teal-950 text-white text-center space-y-4 mt-8">
          <h3 className="font-serif text-2xl text-cream-100 font-medium">
            Have a Specific Question About Your Feet?
          </h3>
          <p className="text-xs sm:text-sm text-slatecharcoal-300 max-w-md mx-auto leading-relaxed">
            Cally is happy to provide confidential advice over the phone or arrange a gentle preliminary consultation.
          </p>
          <div className="pt-1">
            <button
              onClick={() => setBookingModalOpen(true)}
              className="px-6 py-2.5 rounded-xl bg-seafoam-500 text-teal-950 font-sans text-xs font-semibold hover:bg-seafoam-400 transition-colors shadow-sm"
            >
              Get in Touch with Cally
            </button>
          </div>
        </div>
      </section>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
