"use client";

import React, { useState } from "react";
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { useModals } from "@/context/ModalContext";

export default function ContactPage() {
  const { openConsultation } = useModals();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "New Patient Consultation",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-ivory-100 to-white pt-12 pb-16 border-b border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush border border-burgundy-200 text-burgundy text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-goldAccent" />
            <span>Connect with Our Practice Concierge</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal max-w-3xl leading-tight">
            Contact AUREA: Begin your journey in a{" "}
            <span className="italic font-normal text-burgundy">welcoming space.</span>
          </h1>
          <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            Whether you have questions about clear aligners, adolescent treatment timing, or wish to schedule an initial 3D optical discovery consultation, our concierge team is here to assist you.
          </p>

          <div className="p-3.5 rounded-2xl bg-white border border-borderSoft text-xs text-mutedText flex items-center gap-2 max-w-2xl">
            <AlertCircle className="w-4 h-4 text-burgundy flex-shrink-0" />
            <span>
              <strong>Demonstration Notice:</strong> All contact information and forms on this page are non-operational placeholders created for portfolio demonstration purposes only.
            </span>
          </div>
        </div>
      </section>

      {/* Main Grid: Details + Interactive Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Practice Placeholders & Hours (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-borderSoft shadow-card space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
                  Location & Contact
                </span>
                <h3 className="font-serif text-2xl text-charcoal mt-1">
                  AUREA Orthodontic Pavilion
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                {/* Address Placeholder */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blush flex items-center justify-center text-burgundy flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-charcoal block">Practice Address Placeholder:</span>
                    <span className="text-charcoal/80 block mt-0.5">{CLINIC_INFO.address.line1}</span>
                    <span className="text-charcoal/80 block">{CLINIC_INFO.address.line2}</span>
                    <span className="text-mutedText block mt-1 text-[11px] italic">
                      {CLINIC_INFO.address.note}
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blush flex items-center justify-center text-burgundy flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-charcoal block">Telephone Placeholder:</span>
                    <span className="text-charcoal/80 block mt-0.5 font-mono">
                      {CLINIC_INFO.phone.display}
                    </span>
                    <span className="text-mutedText block text-[11px] italic">
                      {CLINIC_INFO.phone.note}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blush flex items-center justify-center text-burgundy flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-charcoal block">Email Inquiries:</span>
                    <span className="text-charcoal/80 block mt-0.5 font-mono">
                      {CLINIC_INFO.email.display}
                    </span>
                    <span className="text-mutedText block text-[11px] italic">
                      {CLINIC_INFO.email.note}
                    </span>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="pt-4 border-t border-borderSoft space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal">
                  <Clock className="w-4 h-4 text-burgundy" />
                  <span>Practice Hours (Demonstration)</span>
                </div>
                <div className="space-y-2 text-xs">
                  {CLINIC_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-borderSoft/60 pb-1.5">
                      <span className="font-medium text-charcoal">{h.days}:</span>
                      <span className="text-mutedText">{h.times}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Consultation CTA */}
              <div className="pt-2">
                <button
                  onClick={() => openConsultation("Adult")}
                  className="w-full py-3.5 rounded-full bg-burgundy text-white font-semibold text-xs hover:bg-burgundy-700 transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Open 3D Consultation Request Modal</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Demonstration Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-borderSoft shadow-card">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
                      Inquiry Form
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mt-1">
                      Send a Message to Our Concierge (Demo)
                    </h3>
                    <p className="text-xs text-mutedText mt-1">
                      This simulated form demonstrates interactive form validation, accessibility, and feedback states.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block font-medium text-charcoal mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Inquirer Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-borderSoft focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-charcoal mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(800) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-borderSoft focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block font-medium text-charcoal mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="inquiries@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-borderSoft focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block font-medium text-charcoal mb-1">
                        Nature of Inquiry
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-borderSoft bg-white focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                      >
                        <option value="New Patient Consultation">Initial 3D Discovery Consultation</option>
                        <option value="Adolescent Treatment">Adolescent & Teen Orthodontics</option>
                        <option value="Early Phase I">Early Childhood Evaluation (Age 7–10)</option>
                        <option value="Clear Aligners">Adult Clear Aligner Questions</option>
                        <option value="Insurance Financing">Insurance & 0% Payment Plan Inquiry</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block font-medium text-charcoal mb-1">
                        How can we assist you?
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Please share any specific questions about treatment modalities, appointment scheduling, or past orthodontic care..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-borderSoft focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                      />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-ivory-100 border border-borderSoft text-[11px] text-mutedText flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Demonstration Privacy Safeguard:</strong> This form does not submit to any remote server or database. It operates strictly in local memory to demonstrate UI states.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-burgundy text-white font-semibold text-xs sm:text-sm hover:bg-burgundy-700 transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Demonstration Inquiry</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-blush text-burgundy flex items-center justify-center mx-auto ring-8 ring-blush/40">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl text-charcoal">
                    Demonstration Message Sent
                  </h3>
                  <p className="text-xs sm:text-sm text-mutedText max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name || "valued visitor"}. In an active clinic environment, our concierge team would contact you shortly to review your inquiry.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-borderSoft text-charcoal text-xs font-semibold hover:bg-ivory-100 transition-colors"
                    >
                      Send Another Demonstration Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Simulated Map / Architecture Floorplan Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ivory-100 rounded-3xl p-8 sm:p-12 border border-borderSoft text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-burgundy text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Clinic Architecture & Location Placeholder</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
            The AUREA Clinical Sanctuary
          </h3>
          <p className="text-xs sm:text-sm text-mutedText max-w-xl mx-auto leading-relaxed">
            Designed with natural oak accents, acoustic privacy suites, and an open, airy consultation lounge. Dedicated patient parking and step-free accessibility provided throughout.
          </p>

          {/* Minimalist Vector Architectural Layout Diagram */}
          <div className="w-full max-w-2xl mx-auto h-48 rounded-2xl bg-white border border-borderSoft p-4 flex flex-col justify-center items-center relative overflow-hidden shadow-sm">
            <svg viewBox="0 0 400 120" className="w-full max-w-md h-auto" fill="none">
              <rect x="20" y="20" width="110" height="80" rx="8" fill="#F8F6F2" stroke="#E8E1DF" strokeWidth="2" />
              <text x="75" y="65" textAnchor="middle" className="text-[10px] fill-charcoal font-semibold">
                Welcome Lounge
              </text>

              <rect x="145" y="20" width="110" height="80" rx="8" fill="#F2E8E9" stroke="#702D3B" strokeWidth="2" strokeDasharray="3 3" />
              <text x="200" y="55" textAnchor="middle" className="text-[10px] fill-burgundy font-bold">
                3D Optical Suite
              </text>
              <text x="200" y="75" textAnchor="middle" className="text-[8px] fill-burgundy">
                Digital Diagnostics
              </text>

              <rect x="270" y="20" width="110" height="80" rx="8" fill="#F8F6F2" stroke="#E8E1DF" strokeWidth="2" />
              <text x="325" y="65" textAnchor="middle" className="text-[10px] fill-charcoal font-semibold">
                Acoustic Suites
              </text>
            </svg>
            <span className="text-[10px] text-mutedText mt-2 font-mono">
              [Demonstration Architectural Pavilion Specimen]
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
