'use client';

import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Phone, Home, Sparkles } from 'lucide-react';
import Logo from './Logo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultVisitType?: 'clinic' | 'home';
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultService = 'routine-foot-care',
  defaultVisitType = 'clinic',
}: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [visitType, setVisitType] = useState<'clinic' | 'home'>(defaultVisitType);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    service: defaultService,
    preferredTime: 'morning',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-950/70 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-xl bg-cream-50 rounded-2xl shadow-elevated border border-pebble-300 p-6 sm:p-8 my-8 text-slatecharcoal-900 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slatecharcoal-600 hover:text-slatecharcoal-900 hover:bg-pebble-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-seafoam-100 text-teal-900 flex items-center justify-center border border-seafoam-300 shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-seafoam-600" />
            </div>
            <div className="space-y-2">
              <span className="clinical-tag text-seafoam-600">Booking Request Received</span>
              <h3 className="font-serif text-3xl text-teal-950">
                Thank You, {formData.name || 'Patient'}
              </h3>
              <p className="text-slatecharcoal-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Cally (Registered Nurse &amp; Foot Health Practitioner) will review your request and get in touch within a few hours to confirm your {visitType === 'home' ? 'home visit' : 'clinic'} appointment time.
              </p>
            </div>

            <div className="p-4 bg-pebble-100 rounded-xl border border-pebble-200 text-left text-xs space-y-1.5">
              <div className="flex items-center gap-2 font-mono text-[11px] text-teal-900 font-semibold uppercase">
                <ShieldCheck className="w-4 h-4 text-seafoam-600" /> Professional Care Notice
              </div>
              <p className="text-slatecharcoal-600">
                All clinical instruments are fully vacuum autoclaved and sealed per patient. Full enhanced DBS certified &amp; NHS trained.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-teal-900 text-white font-sans text-xs font-semibold tracking-wide hover:bg-teal-800 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="border-b border-pebble-200 pb-4">
              <div className="flex items-center justify-between mb-2">
                <Logo variant="compact" size="sm" withLink={false} />
                <span className="clinical-tag text-seafoam-700 bg-seafoam-50 px-2 py-0.5 rounded border border-seafoam-200">
                  Nurse-Led Care
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-teal-950">
                Book Your Foot Health Appointment
              </h2>
              <p className="text-xs text-slatecharcoal-600 mt-1 leading-relaxed">
                Choose between a relaxing treatment in our dedicated clinic suite or a comfortable home visit in the comfort of your living room.
              </p>
            </div>

            {/* Visit Type Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-pebble-200/60 rounded-xl border border-pebble-300">
              <button
                type="button"
                onClick={() => setVisitType('clinic')}
                className={`py-2 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                  visitType === 'clinic'
                    ? 'bg-white text-teal-950 shadow-sm font-semibold'
                    : 'text-slatecharcoal-600 hover:text-teal-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-seafoam-600" />
                <span>Clinic Appointment</span>
              </button>
              <button
                type="button"
                onClick={() => setVisitType('home')}
                className={`py-2 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                  visitType === 'home'
                    ? 'bg-white text-teal-950 shadow-sm font-semibold'
                    : 'text-slatecharcoal-600 hover:text-teal-900'
                }`}
              >
                <Home className="w-3.5 h-3.5 text-seafoam-600" />
                <span>Home Visit (Mobile)</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slatecharcoal-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Miller"
                    className="w-full px-3 py-2 text-xs bg-white border border-pebble-300 rounded-lg focus:outline-none focus:border-teal-700"
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
                    className="w-full px-3 py-2 text-xs bg-white border border-pebble-300 rounded-lg focus:outline-none focus:border-teal-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slatecharcoal-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.co.uk"
                    className="w-full px-3 py-2 text-xs bg-white border border-pebble-300 rounded-lg focus:outline-none focus:border-teal-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slatecharcoal-700 mb-1">
                    {visitType === 'home' ? 'Your Postcode (for home visit) *' : 'Town / Postcode'}
                  </label>
                  <input
                    type="text"
                    required={visitType === 'home'}
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    placeholder="e.g. GL50 1AA"
                    className="w-full px-3 py-2 text-xs bg-white border border-pebble-300 rounded-lg focus:outline-none focus:border-teal-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slatecharcoal-700 mb-1">
                    Required Treatment
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-pebble-300 rounded-lg focus:outline-none focus:border-teal-700"
                  >
                    <option value="routine-foot-care">Routine Foot Care &amp; Toenail Cut</option>
                    <option value="corns-calluses">Corns &amp; Painful Callus Removal</option>
                    <option value="diabetic-assessment">Diabetic Foot &amp; Vascular Assessment</option>
                    <option value="ingrowing-toenails">Ingrowing Toenail Conservative Care</option>
                    <option value="verruca-treatment">Verruca / Wart Cryotherapy</option>
                    <option value="fungal-thickened">Fungal or Thickened Nail Reduction</option>
                    <option value="general-consult">Not Sure / General Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slatecharcoal-700 mb-1">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-pebble-300 rounded-lg focus:outline-none focus:border-teal-700"
                  >
                    <option value="morning">Morning (09:00 – 12:00)</option>
                    <option value="afternoon">Afternoon (13:00 – 16:30)</option>
                    <option value="flexible">Flexible / First Available</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slatecharcoal-700 mb-1">
                  Brief Foot Symptoms or Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Painful corn on second toe, difficulty reaching feet to trim nails, diabetic check..."
                  className="w-full px-3 py-2 text-xs bg-white border border-pebble-300 rounded-lg focus:outline-none focus:border-teal-700 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-pebble-200">
                <span className="text-[11px] font-mono text-slatecharcoal-500">
                  Direct inquiries welcome
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-3 py-2 text-xs text-slatecharcoal-600 hover:text-slatecharcoal-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-teal-900 text-white font-sans text-xs font-semibold hover:bg-teal-800 transition-colors inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Request Appointment</span>
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
