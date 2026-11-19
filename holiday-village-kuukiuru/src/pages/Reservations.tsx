import React, { useState } from 'react';
import { ReservationFormData } from '../types';
import { ACCOMMODATIONS, BUSINESS_CONFIG } from '../data/contentConfig';
import { 
  CalendarCheck, 
  ShieldAlert, 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  Sparkles,
  Users,
  Calendar,
  Lock
} from 'lucide-react';

export const Reservations: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    email: '',
    phone: '',
    accommodationType: 'duplex-cottages',
    arrivalDate: '',
    departureDate: '',
    adultsCount: 2,
    childrenCount: 0,
    notes: '',
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Validation function
  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ReservationFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      newErrors.phone = 'Please enter a valid telephone number with country code.';
    }

    if (!formData.arrivalDate) {
      newErrors.arrivalDate = 'Arrival date is required.';
    }

    if (!formData.departureDate) {
      newErrors.departureDate = 'Departure date is required.';
    } else if (formData.arrivalDate && formData.departureDate <= formData.arrivalDate) {
      newErrors.departureDate = 'Departure date must be after arrival date.';
    }

    if (formData.adultsCount < 1) {
      newErrors.adultsCount = 'At least 1 adult guest is required.';
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = 'You must acknowledge the independent demonstration notice.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate respectful UI validation without transmitting personal data to real endpoints
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccessModalOpen(true);
    }, 600);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Page Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-block font-mono text-[11px] tracking-[0.24em] uppercase font-medium text-nordic-cabin">
          Stay Planning & Inquiries
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-nordic-charcoal">
          Reservation Enquiry
        </h1>
        <p className="text-sm sm:text-base text-nordic-muted leading-relaxed">
          Plan your Finnish Lapland journey. Check accommodation specifications and submit dates for verified seasonal availability.
        </p>
      </div>

      {/* Concept Demonstration Disclaimer Banner */}
      <div className="bg-[#EAE8DE] p-5 rounded-2xl border border-nordic-border space-y-2 text-xs">
        <div className="flex items-start gap-2.5 text-nordic-forest font-semibold">
          <ShieldAlert className="w-4 h-4 text-nordic-cabin shrink-0 mt-0.5" />
          <span className="uppercase tracking-wider font-mono text-[11px]">
            Independent Demonstration Preview
          </span>
        </div>
        <p className="text-nordic-charcoal/80 leading-relaxed pl-6">
          Submitting this enquiry does not confirm a real reservation and no personal data is transmitted to the property. This interactive form demonstrates the proposed guest journey created by NOVA Digital Studio.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-nordic-snow p-8 sm:p-12 rounded-3xl border border-nordic-border shadow-md">
        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          
          {/* Guest Identity */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-normal text-nordic-charcoal border-b border-nordic-border pb-2">
              1. Guest Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-nordic-forest mb-1.5 font-semibold">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Aino Virtanen"
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-nordic-bg/50 focus:outline-none focus:ring-2 focus:ring-nordic-pine transition-all ${
                    errors.fullName ? 'border-red-500' : 'border-nordic-border'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-nordic-forest mb-1.5 font-semibold">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="aino@example.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-nordic-bg/50 focus:outline-none focus:ring-2 focus:ring-nordic-pine transition-all ${
                    errors.email ? 'border-red-500' : 'border-nordic-border'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-nordic-forest mb-1.5 font-semibold">
                Phone Number (with Country Code) *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+358 40 123 4567"
                className={`w-full px-4 py-3 rounded-xl border text-sm bg-nordic-bg/50 focus:outline-none focus:ring-2 focus:ring-nordic-pine transition-all ${
                  errors.phone ? 'border-red-500' : 'border-nordic-border'
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>
          </div>

          {/* Accommodation Selection */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-normal text-nordic-charcoal border-b border-nordic-border pb-2">
              2. Accommodation Preference
            </h3>

            <div>
              <label className="block text-xs font-mono uppercase text-nordic-forest mb-1.5 font-semibold">
                Select Unit Category *
              </label>
              <select
                value={formData.accommodationType}
                onChange={(e) => setFormData({ ...formData, accommodationType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-nordic-border text-sm bg-nordic-bg/50 focus:outline-none focus:ring-2 focus:ring-nordic-pine"
              >
                <option value="duplex-cottages">Duplex Riverside Cottage (45 m² · Sauna · Up to 6 guests)</option>
                <option value="main-hotel-rooms">Main Lodge Hotel Apartment (6 m² to 55 m²)</option>
                <option value="main-hotel-buyout">Exclusive Main Lodge Full Buyout (Up to 17 guests)</option>
                <option value="camping-motorhome">Riverside Motorhome & Camping Grounds</option>
              </select>
            </div>
          </div>

          {/* Stay Dates & Party Size */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-normal text-nordic-charcoal border-b border-nordic-border pb-2">
              3. Dates & Party Size
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="arrivalDate" className="block text-xs font-mono uppercase text-nordic-forest mb-1.5 font-semibold">
                  Date of Arrival *
                </label>
                <input
                  id="arrivalDate"
                  type="date"
                  min={today}
                  value={formData.arrivalDate}
                  onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-nordic-bg/50 focus:outline-none focus:ring-2 focus:ring-nordic-pine ${
                    errors.arrivalDate ? 'border-red-500' : 'border-nordic-border'
                  }`}
                />
                {errors.arrivalDate && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.arrivalDate}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="departureDate" className="block text-xs font-mono uppercase text-nordic-forest mb-1.5 font-semibold">
                  Date of Departure *
                </label>
                <input
                  id="departureDate"
                  type="date"
                  min={formData.arrivalDate || today}
                  value={formData.departureDate}
                  onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-nordic-bg/50 focus:outline-none focus:ring-2 focus:ring-nordic-pine ${
                    errors.departureDate ? 'border-red-500' : 'border-nordic-border'
                  }`}
                />
                {errors.departureDate && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.departureDate}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-nordic-forest mb-1.5 font-semibold">
                  Number of Grown-Ups *
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={formData.adultsCount}
                  onChange={(e) => setFormData({ ...formData, adultsCount: parseInt(e.target.value) || 1 })}
                  className="w-full px-4 py-3 rounded-xl border border-nordic-border text-sm bg-nordic-bg/50 focus:outline-none focus:ring-2 focus:ring-nordic-pine"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-nordic-forest mb-1.5 font-semibold">
                  Number of Children (under 18)
                </label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={formData.childrenCount}
                  onChange={(e) => setFormData({ ...formData, childrenCount: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-3 rounded-xl border border-nordic-border text-sm bg-nordic-bg/50 focus:outline-none focus:ring-2 focus:ring-nordic-pine"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-nordic-forest mb-1.5 font-semibold">
                Additional Comments / Special Requests
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention cot requests, pet travel, sauna bookings, or arrival transfer assistance..."
                className="w-full px-4 py-3 rounded-xl border border-nordic-border text-sm bg-nordic-bg/50 focus:outline-none focus:ring-2 focus:ring-nordic-pine"
              />
            </div>
          </div>

          {/* Acknowledgement Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreedToTerms}
                onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-nordic-border text-nordic-forest focus:ring-nordic-pine"
              />
              <span className="text-xs text-nordic-muted leading-relaxed">
                I understand that this is an independent website redesign demonstration concept and that this submission will not contact the property or store live personal data.
              </span>
            </label>
            {errors.agreedToTerms && (
              <p className="text-xs text-red-600 mt-1 pl-7 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.agreedToTerms}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-nordic-forest hover:bg-nordic-pine text-nordic-snow font-semibold tracking-wider uppercase text-xs transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Validating Concept Form...</span>
              ) : (
                <>
                  <CalendarCheck className="w-4 h-4" />
                  <span>Send Reservation Inquiry (Concept Demonstration)</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-nordic-muted mt-2">
              Arrival time from 16:00 · Departure time up to 12:00
            </p>
          </div>

        </form>
      </div>

      {/* Success / Concept Demonstration Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-nordic-snow text-nordic-charcoal max-w-lg w-full p-8 rounded-3xl border border-nordic-border shadow-2xl space-y-6 text-center">
            
            <div className="w-14 h-14 rounded-full bg-[#E2EBE5] text-nordic-pine flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="font-mono text-xs uppercase tracking-widest text-nordic-cabin font-medium">
                Concept Demonstration Confirmation
              </div>
              <h3 className="font-serif text-3xl font-normal text-nordic-charcoal">
                Enquiry Validated Successfully
              </h3>
            </div>

            <div className="bg-nordic-surface p-4 rounded-xl text-left text-xs space-y-2 border border-nordic-border">
              <div className="font-semibold text-nordic-forest flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-nordic-cabin" />
                <span>Notice to Site Visitor:</span>
              </div>
              <p className="text-nordic-muted leading-relaxed">
                This is a website concept preview by NOVA Digital Studio. No reservation enquiry has been sent to Holiday Village Kuukiuru.
              </p>
              <div className="pt-2 border-t border-nordic-border font-mono text-[11px] text-nordic-forest">
                Guest: {formData.fullName}<br />
                Unit: {formData.accommodationType}<br />
                Stay: {formData.arrivalDate} to {formData.departureDate} ({formData.adultsCount} adults)
              </div>
            </div>

            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full bg-nordic-forest hover:bg-nordic-pine text-nordic-snow py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow"
            >
              Close Demonstration Notice
            </button>

          </div>
        </div>
      )}

    </div>
  );
};
