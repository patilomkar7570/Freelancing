"use client";

import React, { useState } from "react";
import { FAQS_DATA, FAQItem } from "@/data/faqs";
import { Search, ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

interface FaqSearchProps {
  initialCategory?: string;
  onRequestConsultation?: () => void;
}

export const FaqSearch: React.FC<FaqSearchProps> = ({
  initialCategory = "all",
  onRequestConsultation,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [openIds, setOpenIds] = useState<string[]>([FAQS_DATA[0].id]);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "General & First Steps", label: "General & First Steps" },
    { id: "Braces & Aligners", label: "Braces & Aligners" },
    { id: "Comfort & Daily Life", label: "Comfort & Daily Life" },
    { id: "Investment & Logistics", label: "Investment & Logistics" },
    { id: "Retention & Results", label: "Retention & Results" },
  ];

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS_DATA.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Search & Category Filter */}
      <div className="bg-white p-6 rounded-3xl border border-borderSoft shadow-card space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-mutedText absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search our orthodontic knowledge base (e.g., pain, retainers, age 7, financing)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full border border-borderSoft bg-ivory-50 text-xs sm:text-sm focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-burgundy text-white shadow-sm"
                  : "bg-ivory-100 text-charcoal hover:bg-ivory-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordions */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isOpen
                  ? "bg-white border-burgundy/40 shadow-card"
                  : "bg-ivory-50/60 border-borderSoft hover:border-burgundy/20 hover:bg-white"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={isOpen}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors"
              >
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-burgundy">
                    {faq.category}
                  </span>
                  <h4 className="font-heading text-base sm:text-lg font-bold text-charcoal">
                    {faq.question}
                  </h4>
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "bg-burgundy text-white rotate-180"
                      : "bg-ivory-200 text-charcoal"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm text-charcoal/80 leading-relaxed border-t border-borderSoft/40 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-borderSoft">
            <HelpCircle className="w-8 h-8 text-mutedText mx-auto mb-2 opacity-50" />
            <p className="text-sm font-semibold text-charcoal">No questions matched your search</p>
            <p className="text-xs text-mutedText mt-1">
              Try searching a different keyword or contact our clinical team directly.
            </p>
          </div>
        )}
      </div>

      {/* Still have questions banner */}
      <div className="bg-blush-soft p-6 sm:p-8 rounded-3xl border border-burgundy-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-serif text-xl sm:text-2xl text-charcoal">
            Have a personal question not listed here?
          </h4>
          <p className="text-xs sm:text-sm text-mutedText mt-1">
            Every smile has unique biology. Schedule a relaxed discovery consultation to discuss your specific orthodontic goals.
          </p>
        </div>
        {onRequestConsultation && (
          <button
            onClick={onRequestConsultation}
            className="px-6 py-3 rounded-full bg-burgundy text-white font-semibold text-xs sm:text-sm hover:bg-burgundy-700 transition-colors whitespace-nowrap shadow-sm"
          >
            Ask During Consultation
          </button>
        )}
      </div>
    </div>
  );
};
