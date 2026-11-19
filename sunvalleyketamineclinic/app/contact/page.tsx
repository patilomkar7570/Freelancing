'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  PhoneCall,
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general-inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-stone-100/80 border-b border-stone-200 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-200 text-charcoal-700 text-[10px] font-mono uppercase tracking-widest">
            <span>Enquiries &bull; Practice Contact</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-forest-900 font-normal tracking-tight max-w-3xl">
            Contact the practice.
          </h1>
          <p className="text-charcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            We welcome preliminary questions from prospective patients, families, and healthcare colleagues. All exchanges are handled with professional discretion.
          </p>
        </div>
      </section>

      {/* Emergency Crisis Advisory Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-lg bg-forest-950 text-ivory-100 border border-forest-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-forest-800 text-sage-300 shrink-0 mt-0.5">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-sage-300 font-medium">
                Not An Emergency Service
              </p>
              <p className="text-stone-300 text-xs mt-0.5 leading-relaxed font-light">
                VALENCE Clinical is an outpatient specialist practice and does not offer acute crisis management. If you are experiencing acute psychiatric distress or thoughts of self-harm, please dial <strong className="text-ivory">988</strong> (US &amp; Canada Lifeline), <strong className="text-ivory">911 / 112 / 999</strong>, or go to the nearest emergency room.
              </p>
            </div>
          </div>
          <div className="shrink-0 font-mono text-[11px] text-sage-300 bg-forest-900 px-3 py-1.5 rounded border border-forest-800">
            Emergency: 988 / 911
          </div>
        </div>
      </section>

      {/* Contact Grid: Info & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Practice Info & Placeholders */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="editorial-tag text-sage-700">Practice Coordinates</span>
              <h2 className="font-serif text-3xl text-forest-900 font-normal">
                Administrative Information
              </h2>
              <p className="text-charcoal-600 text-xs leading-relaxed font-light">
                The coordinates below are editable demonstration placeholders representing a private specialist medical facility.
              </p>
            </div>

            <div className="space-y-5 text-xs text-charcoal-700">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-stone-200">
                <MapPin className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="font-mono uppercase tracking-wider text-forest-900 font-semibold text-[11px]">
                    Practice Address
                  </div>
                  <div className="text-charcoal-700">VALENCE Clinical &bull; Alpine Pavilion</div>
                  <div className="text-charcoal-500">Suite 300 &bull; 450 Elevation Way</div>
                  <div className="text-stone-400 font-mono text-[10px] mt-1">[Fictional Demonstration Placeholder]</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-stone-200">
                <Clock className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="font-mono uppercase tracking-wider text-forest-900 font-semibold text-[11px]">
                    Office Hours
                  </div>
                  <div className="text-charcoal-700">Monday – Thursday: 08:30 – 17:00</div>
                  <div className="text-charcoal-700">Friday: 09:00 – 14:00 (Integrations)</div>
                  <div className="text-charcoal-500">Saturday &amp; Sunday: Closed</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-stone-200">
                <Phone className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="font-mono uppercase tracking-wider text-forest-900 font-semibold text-[11px]">
                    Telephone Enquiries
                  </div>
                  <div className="font-mono text-charcoal-700">+1 (555) 019-8234</div>
                  <div className="text-[10px] text-stone-500">Demonstration telephone placeholder</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-stone-200">
                <Mail className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="font-mono uppercase tracking-wider text-forest-900 font-semibold text-[11px]">
                    Electronic Enquiries
                  </div>
                  <div className="font-mono text-charcoal-700">enquiries@valence-demonstration.org</div>
                  <div className="text-[10px] text-stone-500">Demonstration mailbox placeholder</div>
                </div>
              </div>
            </div>

            {/* Architectural Map Placeholder Card */}
            <div className="p-6 rounded-xl bg-stone-100 border border-stone-200 space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-stone-600">
                <span className="uppercase">Facility Map Architecture</span>
                <span className="text-forest-800 font-medium">Alpine Pavilion</span>
              </div>
              <div className="aspect-[16/9] rounded-lg bg-stone-200/90 border border-stone-300 flex flex-col items-center justify-center p-4 text-center space-y-2">
                <MapPin className="w-6 h-6 text-forest-800" />
                <span className="text-xs font-serif text-forest-900 font-medium">Interactive Location Map Placeholder</span>
                <span className="text-[10px] text-charcoal-500 max-w-xs font-mono">
                  Coordinates: 43&deg;31&prime;N, 114&deg;22&prime;W &bull; Accessible via Elevation Way
                </span>
              </div>
            </div>
          </div>

          {/* Demonstration Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-xl border border-stone-200 shadow-card space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="editorial-tag text-sage-700">General Practice Enquiries</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-forest-900 mt-1">
                Send an Administrative Enquiry
              </h2>
              <p className="text-xs text-charcoal-600 mt-1 leading-relaxed font-light">
                Use this form for administrative questions regarding practice availability, travel, or scheduling.
              </p>
            </div>

            <div className="p-3 bg-stone-100 rounded border border-stone-200 flex items-start gap-2.5 text-xs text-charcoal-700">
              <AlertCircle className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
              <p className="text-[11px] leading-relaxed">
                <strong>Data Privacy Reminder:</strong> This is a design portfolio simulation. Do not transmit private medical records, prescription details, or clinical diagnoses through this public inquiry form.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage-100 text-forest-800 flex items-center justify-center border border-sage-300">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-forest-900">Enquiry Simulated</h3>
                <p className="text-xs text-charcoal-600 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name || 'visitor'}. In a live medical practice, an administrative coordinator would respond within one to two business days.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded bg-forest-800 text-ivory text-xs font-mono uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Morgan Davis"
                      className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="morgan@example.com"
                      className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
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
                    <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700"
                    >
                      <option value="general-inquiry">General Practice Information</option>
                      <option value="consultation-question">Consultation Availability</option>
                      <option value="visiting-planning">Travel &amp; Facility Logistics</option>
                      <option value="media-concept">Design Demonstration Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please type your general inquiry here. Do not include private medical records or prescription histories."
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded focus:outline-none focus:border-forest-700 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-stone-200">
                  <span className="text-[11px] font-mono text-stone-500">* Required fields</span>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded bg-forest-800 text-ivory font-mono text-xs uppercase tracking-wider hover:bg-forest-700 transition-colors inline-flex items-center gap-2"
                  >
                    <span>Submit Enquiry Simulation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
