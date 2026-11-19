import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  Heart,
  Award,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { SOLE_IMAGES } from '@/lib/images';

export const metadata = {
  title: 'About Cally & Clinical Standards | Sole Wellbeing',
  description:
    'Meet Cally, BSc (Hons) Adult Registered Nurse with 10+ years NHS experience. Learn about our infection prevention standards, clinical foot health qualifications, and patient care philosophy.',
};

export default function AboutPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-cream-200/80 border-b border-pebble-300 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam-100 border border-seafoam-300 text-teal-950 text-[10px] font-mono uppercase tracking-widest font-semibold">
            <span>Clinical Experience &bull; About Cally</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-teal-950 font-medium tracking-tight max-w-3xl">
            Where NHS nursing standards meet gentle community foot care.
          </h1>
          <p className="text-slatecharcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            With over a decade of acute and community nursing experience, Cally brings clinical precision, rigorous infection control, and empathetic listening to every foot treatment.
          </p>
        </div>
      </section>

      {/* Main Bio & Nursing Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="clinical-tag text-seafoam-700 bg-seafoam-50 px-2.5 py-1 rounded border border-seafoam-200">
              The Journey to Sole Wellbeing
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-teal-950 font-medium leading-snug">
              &ldquo;Pain in your feet affects every single aspect of your daily life.&rdquo;
            </h2>

            <div className="space-y-4 text-sm text-slatecharcoal-700 leading-relaxed font-light">
              <p>
                Cally qualified as an Adult Registered Nurse with a Bachelor of Science (Honours) degree and spent over a decade working across diverse National Health Service (NHS) hospital wards and community health settings.
              </p>
              <p>
                Throughout her nursing career, she observed time and again how untreated foot problems—from simple thickened toenails and painful corns to undiagnosed diabetic neuropathy—led to immobility, social isolation, and loss of independence for vulnerable patients.
              </p>
              <p>
                To bridge this gap, Cally completed rigorous accredited training as a Foot Health Practitioner (FHP). Today, Sole Wellbeing provides the ideal fusion: hospital-grade clinical sterilization and medical assessment combined with unhurried, gentle, respectful attention.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Link
                href="/services"
                className="px-5 py-2.5 rounded-xl bg-teal-900 text-white font-sans text-xs font-semibold hover:bg-teal-800 transition-colors inline-flex items-center gap-2"
              >
                <span>View Treatments Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/home-visits"
                className="px-4 py-2.5 rounded-xl border border-pebble-300 text-teal-950 text-xs font-mono uppercase tracking-wider hover:bg-cream-200 transition-colors"
              >
                Home Visits
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-card border border-pebble-300">
              <Image
                src={SOLE_IMAGES.caringHands}
                alt="Professional, caring clinical examination"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Clinical Practice */}
      <section className="bg-teal-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="clinical-tag text-seafoam-300">Governance &amp; Hygiene</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream-100 font-medium">
              Our Non-Negotiable Standards of Care
            </h2>
            <p className="text-slatecharcoal-300 text-sm leading-relaxed font-light">
              We hold our practice to the exact hygiene, infection control, and clinical governance protocols enforced in hospital operating environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-teal-900/80 border border-teal-800 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-teal-800 text-seafoam-300 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-seafoam-400" />
              </div>
              <h3 className="font-serif text-lg text-cream-100 font-medium">Vacuum Autoclaved Instruments</h3>
              <p className="text-xs text-slatecharcoal-300 leading-relaxed font-light">
                Every clinical tool set is ultrasonically cleansed and sterilized in an automated vacuum autoclave at 134&deg;C, sealed in individual pouches, and opened exclusively in front of the patient.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-teal-900/80 border border-teal-800 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-teal-800 text-seafoam-300 flex items-center justify-center">
                <Award className="w-5 h-5 text-seafoam-400" />
              </div>
              <h3 className="font-serif text-lg text-cream-100 font-medium">NMC Registered Nurse</h3>
              <p className="text-xs text-slatecharcoal-300 leading-relaxed font-light">
                Continuous professional development and adherence to the Nursing and Midwifery Council Code of Conduct, ensuring holistic medical awareness beyond mere nail clipping.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-teal-900/80 border border-teal-800 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-teal-800 text-seafoam-300 flex items-center justify-center">
                <Heart className="w-5 h-5 text-seafoam-400" />
              </div>
              <h3 className="font-serif text-lg text-cream-100 font-medium">Painless &amp; Gentle Technique</h3>
              <p className="text-xs text-slatecharcoal-300 leading-relaxed font-light">
                Corns and calluses are enucleated delicately without trauma or incision into living vascular dermis. Treatments are relaxing, dignified, and relieve pain immediately.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-teal-900/80 border border-teal-800 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-teal-800 text-seafoam-300 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-seafoam-400" />
              </div>
              <h3 className="font-serif text-lg text-cream-100 font-medium">Enhanced DBS Checked</h3>
              <p className="text-xs text-slatecharcoal-300 leading-relaxed font-light">
                Full government criminal background clearance and comprehensive professional indemnity insurance, giving patients and families absolute peace of mind during home visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-pebble-300 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="clinical-tag text-seafoam-700">Start Walking in Comfort</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-teal-950 font-medium">
              Schedule Your Consultation with Cally
            </h3>
            <p className="text-xs sm:text-sm text-slatecharcoal-600 leading-relaxed font-light">
              Appointments available at our clinic or as a domiciliary home visit. We look forward to meeting you.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-teal-900 text-white text-xs font-sans font-semibold hover:bg-teal-800 transition-colors shrink-0 inline-flex items-center gap-2"
          >
            <span>Book Appointment Online</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
