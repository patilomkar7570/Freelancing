import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../data/contentConfig';
import { VerificationBadge } from '../components/ui/VerificationBadge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ShieldAlert, 
  CheckCircle2, 
  AlertCircle,
  ArrowUpRight
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Please provide a valid email.';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block font-mono text-[11px] tracking-[0.24em] uppercase font-medium text-nordic-cabin">
          Reception & Guest Inquiries
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-nordic-charcoal">
          Contact & Information
        </h1>
        <p className="text-base sm:text-lg text-nordic-muted leading-relaxed">
          Questions regarding cottage availability, riverside sauna sessions, camping grounds, or travel directions? We are here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact Details Column */}
        <div className="lg:col-span-5 space-y-8 bg-nordic-snow p-8 sm:p-10 rounded-3xl border border-nordic-border shadow-sm">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-nordic-pine font-medium">
                Resort Directory
              </span>
              <VerificationBadge status="verified_from_official_records" customText="Concept Directory" />
            </div>
            <h2 className="font-serif text-3xl font-normal text-nordic-charcoal">
              {BUSINESS_CONFIG.name}
            </h2>
          </div>

          <div className="space-y-6 text-sm text-nordic-charcoal">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-nordic-surface flex items-center justify-center text-nordic-forest shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-nordic-muted block">Property Address</span>
                <p className="font-medium mt-0.5">
                  {BUSINESS_CONFIG.location.address}<br />
                  {BUSINESS_CONFIG.location.village}, {BUSINESS_CONFIG.location.postalCode} {BUSINESS_CONFIG.location.municipality}<br />
                  {BUSINESS_CONFIG.location.country}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-nordic-surface flex items-center justify-center text-nordic-forest shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-nordic-muted block">Reception Telephones</span>
                <p className="font-medium mt-0.5">{BUSINESS_CONFIG.contact.primaryPhone}</p>
                <p className="text-xs text-nordic-muted">{BUSINESS_CONFIG.contact.secondaryPhone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-nordic-surface flex items-center justify-center text-nordic-forest shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-nordic-muted block">Email Enquiries</span>
                <p className="font-medium mt-0.5">{BUSINESS_CONFIG.contact.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-nordic-surface flex items-center justify-center text-nordic-forest shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-nordic-muted block">Standard Timings</span>
                <p className="font-medium mt-0.5">Check-in: 16:00 · Check-out: 12:00</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-nordic-border">
            <a
              href={BUSINESS_CONFIG.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-nordic-forest hover:text-nordic-cabin font-semibold"
            >
              <span>View On Google Maps</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Message Demonstration Form */}
        <div className="lg:col-span-7 bg-nordic-snow p-8 sm:p-10 rounded-3xl border border-nordic-border shadow-sm space-y-6">
          <div className="space-y-2">
            <h3 className="font-serif text-3xl font-normal text-nordic-charcoal">
              Send a Message
            </h3>
            <p className="text-xs text-nordic-muted">
              Interactive demonstration form. Submissions are validated locally for preview purposes.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-nordic-surface border border-nordic-border space-y-3 text-center">
              <div className="w-12 h-12 rounded-full bg-[#E2EBE5] text-nordic-pine flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl font-normal text-nordic-charcoal">
                Message Validated
              </h4>
              <p className="text-xs text-nordic-muted max-w-md mx-auto leading-relaxed">
                This is a website redesign concept demonstration by NOVA Digital Studio. No message has been transmitted.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="mt-2 text-xs font-mono uppercase tracking-wider text-nordic-forest underline"
              >
                Send another preview
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-nordic-forest mb-1 font-semibold">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-nordic-border text-sm bg-nordic-bg/50 focus:outline-none focus:ring-2 focus:ring-nordic-pine"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-nordic-forest mb-1 font-semibold">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-nordic-border text-sm bg-nordic-bg/50 focus:outline-none focus:ring-2 focus:ring-nordic-pine"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-nordic-forest mb-1 font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-nordic-border text-sm bg-nordic-bg/50 focus:outline-none focus:ring-2 focus:ring-nordic-pine"
                  placeholder="Enquiry topic..."
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-nordic-forest mb-1 font-semibold">
                  Message *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-nordic-border text-sm bg-nordic-bg/50 focus:outline-none focus:ring-2 focus:ring-nordic-pine"
                  placeholder="How can we assist you?"
                />
                {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-nordic-forest hover:bg-nordic-pine text-nordic-snow font-semibold tracking-wider uppercase text-xs transition-colors shadow flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Validating...' : 'Submit Message (Concept Preview)'}</span>
                </button>
              </div>
            </form>
          )}

          <div className="p-4 rounded-xl bg-nordic-surface text-[11px] text-nordic-muted leading-relaxed">
            <strong>Concept Transparency:</strong> Kuura Riverside Resort is an independent hospitality demonstration project by NOVA Digital Studio. The forms and information displayed here are simulated representations.
          </div>
        </div>

      </div>

    </div>
  );
};
