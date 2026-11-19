"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, Sparkles, CheckCircle2, AlertCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = "Adult",
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [patientType, setPatientType] = useState<string>(defaultCategory);
  const [primaryConcern, setPrimaryConcern] = useState<string>("Crowding or Overlapping");
  const [preferredDay, setPreferredDay] = useState<string>("Tuesday or Thursday");
  const [preferredTime, setPreferredTime] = useState<string>("Morning (9:00 AM - 12:00 PM)");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    comments: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-charcoal/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-elevated border border-borderSoft overflow-hidden my-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-burgundy-800 to-burgundy-600 text-white px-6 py-5 sm:px-8 flex items-center justify-between">
          <div>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-ivory-300">
              Personalized Orthodontic Discovery
            </span>
            <h3 className="font-serif text-2xl tracking-wide mt-0.5">
              Request Initial Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Notice Banner */}
        <div className="bg-blush-soft border-b border-burgundy-100 px-6 py-2.5 flex items-center gap-2 text-xs text-burgundy-900">
          <AlertCircle className="w-4 h-4 text-burgundy flex-shrink-0" />
          <span>
            <strong>Portfolio Demonstration Notice:</strong> This is a simulation form for review purposes. Real patient information is not gathered or processed.
          </span>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
                  Step 1 of 3
                </span>
                <h4 className="font-heading text-lg font-bold text-charcoal mt-1">
                  Who is this consultation for?
                </h4>
                <p className="text-xs text-mutedText mt-1">
                  We tailor our consultation pacing and digital simulation specifically to the patient&apos;s developmental stage.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: "Adult",
                    label: "Adult (18+)",
                    desc: "Aesthetic aligners, ceramic braces & restorative coordination.",
                  },
                  {
                    id: "Adolescent",
                    label: "Teenager (11–17)",
                    desc: "Comprehensive growth coordination & gentle alignment.",
                  },
                  {
                    id: "Child",
                    label: "Child (Age 7–10)",
                    desc: "Early Phase I interceptive & airway expansion evaluation.",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPatientType(item.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      patientType === item.id
                        ? "border-burgundy bg-blush text-burgundy shadow-sm ring-1 ring-burgundy"
                        : "border-borderSoft bg-ivory-50 hover:bg-ivory-100 text-charcoal"
                    }`}
                  >
                    <div className="font-bold text-sm">{item.label}</div>
                    <div className="text-xs text-mutedText mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                  Primary Smile or Bite Concern
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    "Crowding or Overlapping",
                    "Deep Overbite / Chewing Strain",
                    "Gaps or Spacing Between Teeth",
                    "Underbite or Crossbite",
                    "Aesthetic Smile Refinement",
                    "Second Opinion / Re-Treatment",
                  ].map((concern) => (
                    <button
                      key={concern}
                      type="button"
                      onClick={() => setPrimaryConcern(concern)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        primaryConcern === concern
                          ? "border-burgundy bg-blush/60 font-medium text-burgundy"
                          : "border-borderSoft bg-white hover:bg-ivory-100 text-charcoal"
                      }`}
                    >
                      {concern}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-full bg-burgundy text-white font-semibold text-sm hover:bg-burgundy-700 transition-colors flex items-center gap-2"
                >
                  Next: Schedule Preference
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
                  Step 2 of 3
                </span>
                <h4 className="font-heading text-lg font-bold text-charcoal mt-1">
                  Preferred Appointment Timing
                </h4>
                <p className="text-xs text-mutedText mt-1">
                  Our clinical team accommodates flexible morning and afternoon availability to suit work and school schedules.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                  Preferred Days of the Week
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday Morning"].map(
                    (day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setPreferredDay(day)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          preferredDay === day
                            ? "border-burgundy bg-blush font-semibold text-burgundy"
                            : "border-borderSoft bg-white hover:bg-ivory-100 text-charcoal"
                        }`}
                      >
                        {day}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                  Preferred Time Window
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    "Morning (8:30 AM – 11:30 AM)",
                    "Midday (12:00 PM – 2:30 PM)",
                    "Late Afternoon (3:00 PM – 5:30 PM)",
                  ].map((timeSlot) => (
                    <button
                      key={timeSlot}
                      type="button"
                      onClick={() => setPreferredTime(timeSlot)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        preferredTime === timeSlot
                          ? "border-burgundy bg-blush font-semibold text-burgundy"
                          : "border-borderSoft bg-white hover:bg-ivory-100 text-charcoal"
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 inline mr-1.5 opacity-70" />
                      {timeSlot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-full border border-borderSoft text-charcoal text-sm hover:bg-ivory-100 transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-full bg-burgundy text-white font-semibold text-sm hover:bg-burgundy-700 transition-colors flex items-center gap-2"
                >
                  Next: Contact Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
                  Step 3 of 3
                </span>
                <h4 className="font-heading text-lg font-bold text-charcoal mt-1">
                  Demonstration Contact Details
                </h4>
                <p className="text-xs text-mutedText mt-0.5">
                  Enter sample placeholder information to preview the confirmation workflow.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-medium text-charcoal mb-1">
                    Patient or Guardian Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Patient Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-borderSoft focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                  />
                </div>
                <div>
                  <label className="block font-medium text-charcoal mb-1">
                    Contact Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(800) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-borderSoft focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-medium text-charcoal mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="patient@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-borderSoft focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-medium text-charcoal mb-1">
                    Specific Questions or Smile Goals (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Wondering if I am a candidate for clear aligners or if ceramic braces are recommended."
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-borderSoft focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                  />
                </div>
              </div>

              <div className="p-3 bg-ivory-100 rounded-xl border border-borderSoft text-[11px] text-mutedText flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
                <span>
                  Consultations at AUREA include complimentary 3D digital optical scanning, digital smile simulation, and a full personalized treatment plan presentation.
                </span>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-full border border-borderSoft text-charcoal text-sm hover:bg-ivory-100 transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-burgundy text-white font-semibold text-sm hover:bg-burgundy-700 transition-colors flex items-center gap-2 shadow-sm"
                >
                  Confirm Request (Demo)
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="text-center py-6 space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-blush text-burgundy flex items-center justify-center mx-auto ring-8 ring-blush/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-charcoal">
                Consultation Request Received (Demonstration)
              </h4>
              <p className="text-xs sm:text-sm text-mutedText max-w-md mx-auto leading-relaxed">
                Thank you for previewing the AUREA consultation workflow. In an active production environment, our concierge team would contact you within 2 business hours to confirm your digital 3D scan appointment.
              </p>

              <div className="p-4 bg-ivory-100 rounded-2xl border border-borderSoft text-left max-w-md mx-auto text-xs space-y-2">
                <div className="font-semibold text-charcoal uppercase tracking-wider text-[10px]">
                  Simulated Appointment Summary
                </div>
                <div className="flex justify-between text-mutedText">
                  <span>Patient Focus:</span>
                  <span className="font-medium text-charcoal">{patientType}</span>
                </div>
                <div className="flex justify-between text-mutedText">
                  <span>Primary Concern:</span>
                  <span className="font-medium text-charcoal">{primaryConcern}</span>
                </div>
                <div className="flex justify-between text-mutedText">
                  <span>Target Window:</span>
                  <span className="font-medium text-charcoal">
                    {preferredDay} &bull; {preferredTime}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-charcoal text-white text-xs font-semibold hover:bg-black transition-colors"
                >
                  Close Demonstration Preview
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
