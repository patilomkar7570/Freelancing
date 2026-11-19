'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Home,
  Sparkles,
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    visitPreference: 'clinic',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-cream-200/80 border-b border-pebble-300 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam-100 border border-seafoam-300 text-teal-950 text-[10px] font-mono uppercase tracking-widest font-semibold">
            <span>Get In Touch</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-teal-950 font-medium tracking-tight max-w-3xl">
            Contact Sole Wellbeing
          </h1>
          <p className="text-slatecharcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Whether booking an appointment, inquiring about a domiciliary home visit for a relative, or seeking advice on foot symptoms, Cally is here to help.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="clinical-tag text-seafoam-700 bg-seafoam-50 px-2.5 py-1 rounded border border-seafoam-200">
                Clinic Coordinates
              </span>
              <h2 className="font-serif text-3xl text-teal-950 font-medium">
                Clinic &amp; Home Visit Details
              </h2>
            </div>

            <div className="space-y-4 text-xs text-slatecharcoal-700">
              <div className="p-4 rounded-xl bg-white border border-pebble-300 flex items-start gap-3 shadow-soft">
                <Phone className="w-4 h-4 text-seafoam-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-teal-950 font-semibold">Telephone &amp; WhatsApp</div>
                  <a href="tel:07123456789" className="font-mono text-sm text-teal-900 font-bold hover:underline">
                    07123 456789
                  </a>
                  <div className="text-[10px] text-slatecharcoal-500 mt-0.5">Calls, voicemails, or text messages welcome</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-pebble-300 flex items-start gap-3 shadow-soft">
                <Mail className="w-4 h-4 text-seafoam-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-teal-950 font-semibold">Email Enquiries</div>
                  <div className="font-mono text-slatecharcoal-800">cally@solewellbeing.co.uk</div>
                  <div className="text-[10px] text-slatecharcoal-500 mt-0.5">Replies typically within 24 business hours</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-pebble-300 flex items-start gap-3 shadow-soft">
                <Clock className="w-4 h-4 text-seafoam-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-teal-950 font-semibold">Working Hours</div>
                  <div className="text-slatecharcoal-800">Monday – Thursday: 08:30 – 17:30</div>
                  <div className="text-slatecharcoal-800">Friday: 08:30 – 16:30</div>
                  <div className="text-slatecharcoal-600">Saturday: Pre-booked Home Visits Only</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-pebble-300 flex items-start gap-3 shadow-soft">
                <Home className="w-4 h-4 text-seafoam-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-teal-950 font-semibold">Home Visit Radius</div>
                  <div className="text-slatecharcoal-800">Local town &amp; surrounding rural villages (10–12 mile radius)</div>
                  <div className="text-[10px] text-slatecharcoal-500 mt-0.5">Care homes and residential facilities served</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-pebble-300 shadow-card space-y-6">
            <div className="border-b border-pebble-200 pb-4">
              <span className="clinical-tag text-seafoam-700 bg-seafoam-50 px-2 py-0.5 rounded border border-seafoam-200">
                Direct Inquiry
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-teal-950 font-medium mt-1">
                Send a Message or Booking Request
              </h2>
              <p className="text-xs text-slatecharcoal-600 mt-1 leading-relaxed font-light">
                Fill in your details below and Cally will get back to you promptly with available times.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-seafoam-100 text-teal-900 flex items-center justify-center border border-seafoam-300">
                  <CheckCircle2 className="w-6 h-6 text-seafoam-600" />
                </div>
                <h3 className="font-serif text-2xl text-teal-950">Message Received</h3>
                <p className="text-xs text-slatecharcoal-600 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name || 'Patient'}. Cally will contact you shortly by phone or email to discuss your appointment.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-teal-900 text-white text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slatecharcoal-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Smith"
                      className="w-full px-3 py-2 text-xs bg-white border border-pebble-300 rounded-xl focus:outline-none focus:border-teal-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slatecharcoal-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="07123 456789"
                      className="w-full px-3 py-2 text-xs bg-white border border-pebble-300 rounded-xl focus:outline-none focus:border-teal-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slatecharcoal-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-3 py-2 text-xs bg-white border border-pebble-300 rounded-xl focus:outline-none focus:border-teal-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slatecharcoal-700 mb-1">
                      Your Postcode (if Home Visit)
                    </label>
                    <input
                      type="text"
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      placeholder="e.g. GL50 1AA"
                      className="w-full px-3 py-2 text-xs bg-white border border-pebble-300 rounded-xl focus:outline-none focus:border-teal-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slatecharcoal-700 mb-1">
                    Preference
                  </label>
                  <select
                    value={formData.visitPreference}
                    onChange={(e) => setFormData({ ...formData, visitPreference: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-pebble-300 rounded-xl focus:outline-none focus:border-teal-700"
                  >
                    <option value="clinic">Clinic Appointment in Practice Suite</option>
                    <option value="home">Domiciliary Mobile Home Visit</option>
                    <option value="advice">Advice / Question Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slatecharcoal-700 mb-1">
                    Message or Details of Foot Problem
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please describe any pain, corn issues, difficulty cutting nails, or diabetic history..."
                    className="w-full px-3 py-2 text-xs bg-white border border-pebble-300 rounded-xl focus:outline-none focus:border-teal-700 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-pebble-200">
                  <span className="text-[11px] font-mono text-slatecharcoal-500">* Required</span>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-teal-900 text-white font-sans text-xs font-semibold hover:bg-teal-800 transition-colors inline-flex items-center gap-2"
                  >
                    <span>Send Inquiry to Cally</span>
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
