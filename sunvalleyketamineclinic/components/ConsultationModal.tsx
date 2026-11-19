'use client';

import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import Logo from './Logo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: 'general-consultation',
    preferredTiming: 'morning',
    referralStatus: 'self-referred',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      enquiryType: 'general-consultation',
      preferredTiming: 'morning',
      referralStatus: 'self-referred',
      notes: '',
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/70 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-ivory-100 rounded-lg shadow-deep border border-stone-300 p-6 sm:p-8 my-8 text-charcoal-900 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-charcoal-600 hover:text-charcoal-900 hover:bg-stone-200/60 transition-colors"
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-5">
            <div className="w-14 h-14 mx-auto rounded-full bg-sage-100 text-forest-800 flex items-center justify-center border border-sage-300">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <span className="editorial-tag text-sage-600">Demonstration Inquiry Received</span>
              <h3 className="font-serif text-3xl text-forest-900">Enquiry Simulation Complete</h3>
              <p className="text-charcoal-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you for previewing the consultation request journey. In an operational clinical setting, your request would be triaged by a registered clinical coordinator within 24–48 business hours.
              </p>
            </div>
            <div className="p-4 bg-stone-100 rounded border border-stone-200 text-left text-xs space-y-2 text-charcoal-700">
              <div className="flex items-center gap-2 font-mono text-[11px] text-forest-800 font-medium uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-sage-600" /> Clinical Privacy Notice
              </div>
              <p>
                As this is a portfolio demonstration by NOVA Digital Studio, no personal data has been transmitted, stored, or processed. Real medical scheduling requires certified EHR integration and strict consent protocols.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded bg-forest-800 text-ivory font-sans text-xs font-medium tracking-wide hover:bg-forest-700 transition-colors"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="border-b border-stone-300 pb-4">
              <div className="flex items-center justify-between mb-2">
                <Logo variant="compact" size="sm" withLink={false} />
                <span className="editorial-tag text-sage-700">Design Concept</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-forest-900">
                Request a Consultation Assessment
              </h2>
              <p className="text-xs text-charcoal-600 mt-1.5 leading-relaxed">
                Experience the patient inquiry interface designed for prospective consultations and preliminary clinical evaluation.
              </p>
            </div>

            {/* Non-operational advisory banner */}
            <div className="p-3 bg-stone-200/60 rounded border border-stone-300/80 flex items-start gap-2.5 text-xs text-charcoal-700">
              <AlertCircle className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
              <p className="text-[11px] leading-relaxed">
                <strong>Portfolio Concept:</strong> This form does not collect or transmit medical records. Do not enter confidential medical histories, medications, or sensitive diagnoses here.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono tracking-wider text-charcoal-700 uppercase mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jordan Ellis"
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono tracking-wider text-charcoal-700 uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jordan@example.com"
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono tracking-wider text-charcoal-700 uppercase mb-1">
                    Telephone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 012-3456"
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono tracking-wider text-charcoal-700 uppercase mb-1">
                    Enquiry Category
                  </label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700"
                  >
                    <option value="general-consultation">General Initial Consultation</option>
                    <option value="referral-followup">Follow-up from Physician Referral</option>
                    <option value="treatment-pathway">Suitability &amp; Treatment Pathway Questions</option>
                    <option value="visiting-planning">Travel &amp; Multi-day Visit Planning</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono tracking-wider text-charcoal-700 uppercase mb-1">
                    Referral Status
                  </label>
                  <select
                    value={formData.referralStatus}
                    onChange={(e) => setFormData({ ...formData, referralStatus: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700"
                  >
                    <option value="self-referred">Self-directed enquiry</option>
                    <option value="psychiatrist-referred">Referred by Psychiatrist / Physician</option>
                    <option value="therapist-referred">Referred by Psychotherapist</option>
                    <option value="collaborative-care">Seeking collaborative multidisciplinary care</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono tracking-wider text-charcoal-700 uppercase mb-1">
                    Preferred Consultation Window
                  </label>
                  <select
                    value={formData.preferredTiming}
                    onChange={(e) => setFormData({ ...formData, preferredTiming: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700"
                  >
                    <option value="morning">Morning (09:00 – 12:00)</option>
                    <option value="afternoon">Afternoon (13:00 – 16:30)</option>
                    <option value="flexible">Flexible / First Available</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono tracking-wider text-charcoal-700 uppercase mb-1">
                  General Questions or Practical Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Please enter general administrative questions or accessibility requirements. Do not enter private medical histories or prescription details."
                  className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-stone-300">
                <span className="text-[11px] text-charcoal-500 font-mono">
                  * Required fields
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-medium text-charcoal-700 hover:text-charcoal-900 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded bg-forest-800 text-ivory font-sans text-xs font-medium tracking-wide hover:bg-forest-700 transition-colors inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Submit Enquiry Simulation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
