'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Calendar,
  Phone,
  Home,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
  Heart,
  Star,
  Activity,
  Check,
} from 'lucide-react';
import BookingModal from '@/components/BookingModal';
import FootTriageTool from '@/components/FootTriageTool';
import { SOLE_IMAGES } from '@/lib/images';

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('routine-foot-care');

  const openBookingFor = (service: string) => {
    setSelectedService(service);
    setBookingModalOpen(true);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 pb-16 lg:pb-24 overflow-hidden border-b border-pebble-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-seafoam-100/70 border border-seafoam-300 text-teal-950 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-seafoam-500 animate-pulse" />
                <span className="font-semibold uppercase tracking-wider text-[10px]">
                  Nurse-Led Foot Health Practice &bull; Clinic &amp; Home Visits
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.25rem] leading-[1.08] text-teal-950 font-medium tracking-tight">
                  Comfort in every step. <br />
                  <span className="italic font-light text-teal-800">
                    Gentle, clinical care
                  </span>{' '}
                  for your feet.
                </h1>

                <p className="text-slatecharcoal-700 text-base sm:text-lg leading-relaxed max-w-xl font-sans font-light">
                  Providing professional, pain-relieving foot health treatments by Cally—a Registered Adult Nurse with over 10 years NHS clinical experience. From stubborn corns and hard skin to diabetic foot screening, we restore walking comfort in our tranquil clinic or right in your living room.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => openBookingFor('routine-foot-care')}
                  className="px-6 py-3.5 rounded-xl bg-teal-900 text-white text-xs font-sans font-semibold tracking-wide hover:bg-teal-800 transition-all shadow-card hover:shadow-elevated inline-flex items-center gap-2 group"
                >
                  <Calendar className="w-3.5 h-3.5 text-seafoam-300" />
                  <span>Book Appointment Online</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href="tel:07123456789"
                  className="px-5 py-3.5 rounded-xl bg-white text-teal-950 border border-pebble-300 text-xs font-mono tracking-wider uppercase hover:bg-cream-200 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-seafoam-600" />
                  <span>07123 456789</span>
                </a>
              </div>

              {/* Trust & Clinical Governance Badges */}
              <div className="pt-6 border-t border-pebble-300 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-slatecharcoal-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-seafoam-600 shrink-0" />
                  <span>10+ Yrs NHS Nurse</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-seafoam-600 shrink-0" />
                  <span>Qualified &amp; Insured FHP</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-seafoam-600 shrink-0" />
                  <span>Enhanced DBS Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-seafoam-600 shrink-0" />
                  <span>Autoclave Sterilized</span>
                </div>
              </div>
            </div>

            {/* Right Card / Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated border border-pebble-300 bg-cream-200">
                  <Image
                    src={SOLE_IMAGES.hero}
                    alt="Restorative foot health and natural walking comfort"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent" />

                  {/* Overlaid Badge */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-pebble-200 shadow-card text-slatecharcoal-900 space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase text-teal-800 font-semibold">
                      <span>Cally &bull; BSc (Hons) RN</span>
                      <span className="text-seafoam-600">Clinic &bull; Home Care</span>
                    </div>
                    <p className="text-xs font-serif italic text-teal-950">
                      &ldquo;Every patient is treated with gentle dignity, gentle pain-free technique, and medical rigor.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE TREATMENTS MENU */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="clinical-tag text-seafoam-700 bg-seafoam-50 px-2.5 py-1 rounded border border-seafoam-200">
              Clinical Procedures
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-teal-950 font-medium">
              Comprehensive Foot Treatments
            </h2>
            <p className="text-slatecharcoal-600 text-sm leading-relaxed">
              Targeted clinical interventions to eliminate pain, resolve dermatological lesions, and preserve long-term mobility.
            </p>
          </div>

          <Link
            href="/services"
            className="text-xs font-mono uppercase tracking-wider text-teal-900 hover:text-teal-700 inline-flex items-center gap-1 font-semibold shrink-0"
          >
            <span>View Full Treatment Menu</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Routine Toenail Care */}
          <div className="p-6 rounded-2xl bg-white border border-pebble-300 shadow-card flex flex-col justify-between space-y-4 hover:shadow-elevated transition-shadow">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-seafoam-50 text-teal-900 flex items-center justify-center border border-seafoam-200">
                <Sparkles className="w-5 h-5 text-seafoam-600" />
              </div>
              <h3 className="font-serif text-xl text-teal-950 font-medium">
                Routine Toenail Care &amp; Shaping
              </h3>
              <p className="text-xs text-slatecharcoal-600 leading-relaxed font-light">
                Professional nail trimming, mechanical thinning of thickened or fungal nails, and gentle edge smoothing for patients unable to safely reach their feet.
              </p>
            </div>
            <div className="pt-3 border-t border-pebble-200 flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-teal-950">&pound;35 – &pound;42</span>
              <button
                onClick={() => openBookingFor('routine-foot-care')}
                className="text-xs font-mono uppercase tracking-wider text-teal-800 hover:text-teal-950 font-semibold inline-flex items-center gap-1"
              >
                <span>Book This</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* 2. Corns & Calluses */}
          <div className="p-6 rounded-2xl bg-white border border-pebble-300 shadow-card flex flex-col justify-between space-y-4 hover:shadow-elevated transition-shadow">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-seafoam-50 text-teal-900 flex items-center justify-center border border-seafoam-200">
                <Activity className="w-5 h-5 text-seafoam-600" />
              </div>
              <h3 className="font-serif text-xl text-teal-950 font-medium">
                Corn Enucleation &amp; Callus Removal
              </h3>
              <p className="text-xs text-slatecharcoal-600 leading-relaxed font-light">
                Gentle, completely painless removal of painful corn kernels and dense hyperkeratotic callus, providing instant relief from walking pressure.
              </p>
            </div>
            <div className="pt-3 border-t border-pebble-200 flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-teal-950">&pound;38 – &pound;45</span>
              <button
                onClick={() => openBookingFor('corns-calluses')}
                className="text-xs font-mono uppercase tracking-wider text-teal-800 hover:text-teal-950 font-semibold inline-flex items-center gap-1"
              >
                <span>Book This</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* 3. Ingrowing Toenails */}
          <div className="p-6 rounded-2xl bg-white border border-pebble-300 shadow-card flex flex-col justify-between space-y-4 hover:shadow-elevated transition-shadow">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-seafoam-50 text-teal-900 flex items-center justify-center border border-seafoam-200">
                <ShieldCheck className="w-5 h-5 text-seafoam-600" />
              </div>
              <h3 className="font-serif text-xl text-teal-950 font-medium">
                Ingrowing Toenail Conservative Care
              </h3>
              <p className="text-xs text-slatecharcoal-600 leading-relaxed font-light">
                Relief from painful, digging nail borders through skilled conservative resection of the offending spike without traumatic surgical avulsion.
              </p>
            </div>
            <div className="pt-3 border-t border-pebble-200 flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-teal-950">&pound;40 – &pound;48</span>
              <button
                onClick={() => openBookingFor('ingrowing-toenails')}
                className="text-xs font-mono uppercase tracking-wider text-teal-800 hover:text-teal-950 font-semibold inline-flex items-center gap-1"
              >
                <span>Book This</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* 4. Diabetic Foot Care */}
          <div className="p-6 rounded-2xl bg-white border border-pebble-300 shadow-card flex flex-col justify-between space-y-4 hover:shadow-elevated transition-shadow">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-seafoam-50 text-teal-900 flex items-center justify-center border border-seafoam-200">
                <Heart className="w-5 h-5 text-seafoam-600" />
              </div>
              <h3 className="font-serif text-xl text-teal-950 font-medium">
                Diabetic Neurovascular Assessment
              </h3>
              <p className="text-xs text-slatecharcoal-600 leading-relaxed font-light">
                Full 10g monofilament sensory testing, pedal pulse palpation, capillary refill checks, skin integrity review, and safe preventative maintenance.
              </p>
            </div>
            <div className="pt-3 border-t border-pebble-200 flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-teal-950">&pound;42 – &pound;50</span>
              <Link
                href="/diabetic-care"
                className="text-xs font-mono uppercase tracking-wider text-teal-800 hover:text-teal-950 font-semibold inline-flex items-center gap-1"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* 5. Verruca Cryotherapy */}
          <div className="p-6 rounded-2xl bg-white border border-pebble-300 shadow-card flex flex-col justify-between space-y-4 hover:shadow-elevated transition-shadow">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-seafoam-50 text-teal-900 flex items-center justify-center border border-seafoam-200">
                <Sparkles className="w-5 h-5 text-seafoam-600" />
              </div>
              <h3 className="font-serif text-xl text-teal-950 font-medium">
                Verruca &amp; Wart Cryotherapy
              </h3>
              <p className="text-xs text-slatecharcoal-600 leading-relaxed font-light">
                Targeted freezing and caustic treatments to eliminate persistent plantar warts without scarring or damaging adjacent healthy dermal tissue.
              </p>
            </div>
            <div className="pt-3 border-t border-pebble-200 flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-teal-950">&pound;35 – &pound;40</span>
              <button
                onClick={() => openBookingFor('verruca-treatment')}
                className="text-xs font-mono uppercase tracking-wider text-teal-800 hover:text-teal-950 font-semibold inline-flex items-center gap-1"
              >
                <span>Book This</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* 6. Domiciliary Home Visit */}
          <div className="p-6 rounded-2xl bg-teal-950 text-white border border-teal-900 shadow-card flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-900 text-seafoam-300 flex items-center justify-center border border-teal-800">
                <Home className="w-5 h-5 text-seafoam-400" />
              </div>
              <h3 className="font-serif text-xl text-cream-100 font-medium">
                Domiciliary Home Visits
              </h3>
              <p className="text-xs text-slatecharcoal-300 leading-relaxed font-light">
                Bringing full clinical podiatric equipment, vacuum-autoclaved instruments, and nursing expertise directly to your home across the community.
              </p>
            </div>
            <div className="pt-3 border-t border-teal-900 flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-seafoam-300">From &pound;40</span>
              <Link
                href="/home-visits"
                className="text-xs font-mono uppercase tracking-wider text-white hover:text-seafoam-300 font-semibold inline-flex items-center gap-1"
              >
                <span>Home Details</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE FOOT SYMPTOM CHECKER & TRIAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FootTriageTool />
      </section>

      {/* 4. MEET CALLY — 10+ YEARS NHS EXPERIENCE */}
      <section className="bg-cream-200/70 border-y border-pebble-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-card border border-pebble-300">
                <Image
                  src={SOLE_IMAGES.nurseCare}
                  alt="Cally, Registered Adult Nurse providing attentive foot care"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="clinical-tag text-seafoam-700 bg-seafoam-50 px-2.5 py-1 rounded border border-seafoam-200">
                  Practitioner Profile
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-teal-950 font-medium leading-snug">
                  Clinical nursing excellence meets community compassion.
                </h2>
              </div>

              <div className="space-y-4 text-sm text-slatecharcoal-700 leading-relaxed font-light">
                <p>
                  Sole Wellbeing was founded by Cally, a <strong>BSc (Hons) Adult Registered Nurse</strong> with over a decade of acute hospital and community nursing experience within the NHS.
                </p>
                <p>
                  Having cared for thousands of patients—particularly elderly individuals and those living with chronic diabetes—Cally recognized how critical, yet frequently neglected, routine foot health is to mobility, independence, and overall quality of life.
                </p>
                <p>
                  Every consultation is guided by strict NHS infection control standards: every instrument set is vacuum autoclaved and opened in front of you, with thorough medical note-keeping and personalized aftercare.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-pebble-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-seafoam-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-teal-950 block">Registered Nurse (NMC)</strong>
                    <span className="text-slatecharcoal-600">Active professional registration and adherence to strict code of conduct.</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-pebble-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-seafoam-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-teal-950 block">Enhanced DBS Cleared</strong>
                    <span className="text-slatecharcoal-600">Full background vetting ensuring total peace of mind during home visits.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="px-5 py-2.5 rounded-xl bg-teal-900 text-white font-sans text-xs font-semibold hover:bg-teal-800 transition-colors inline-flex items-center gap-2"
                >
                  <span>Read Cally’s Full Nursing Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLINIC APPOINTMENTS VS. HOME VISITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="clinical-tag text-seafoam-700 bg-seafoam-50 px-2.5 py-1 rounded border border-seafoam-200">
            Care Delivery Options
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-teal-950 font-medium">
            At Our Clinic or in Your Home
          </h2>
          <p className="text-slatecharcoal-600 text-sm leading-relaxed">
            We adapt to your needs so that mobility challenges never stand between you and healthy feet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Clinic Option */}
          <div className="p-8 rounded-2xl bg-white border border-pebble-300 shadow-card space-y-5">
            <div className="flex items-center justify-between border-b border-pebble-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-seafoam-100 text-teal-900">
                  <Sparkles className="w-5 h-5 text-seafoam-600" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-teal-950 font-medium">Clinic Suite Visits</h3>
                  <span className="text-xs font-mono text-slatecharcoal-500">Dedicated Clinical Environment</span>
                </div>
              </div>
              <span className="text-xs font-mono text-teal-900 font-semibold bg-pebble-100 px-3 py-1 rounded-full">
                From &pound;35
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-slatecharcoal-700">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-seafoam-600 shrink-0 mt-0.5" />
                <span>Modern ergonomic treatment chair with adjustable positioning</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-seafoam-600 shrink-0 mt-0.5" />
                <span>Specialized extraction podiatry drills with water cooling</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-seafoam-600 shrink-0 mt-0.5" />
                <span>Convenient ground floor access with easy adjacent parking</span>
              </li>
            </ul>

            <button
              onClick={() => {
                setSelectedService('routine-foot-care');
                setBookingModalOpen(true);
              }}
              className="w-full py-3 rounded-xl bg-teal-900 text-white text-xs font-sans font-semibold hover:bg-teal-800 transition-colors"
            >
              Book Clinic Appointment
            </button>
          </div>

          {/* Home Visit Option */}
          <div className="p-8 rounded-2xl bg-teal-950 text-white border border-teal-900 shadow-card space-y-5">
            <div className="flex items-center justify-between border-b border-teal-900 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-teal-900 text-seafoam-300">
                  <Home className="w-5 h-5 text-seafoam-400" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-cream-100 font-medium">Domiciliary Home Visits</h3>
                  <span className="text-xs font-mono text-slatecharcoal-300">Mobile Service in Your Home</span>
                </div>
              </div>
              <span className="text-xs font-mono text-seafoam-300 font-semibold bg-teal-900 px-3 py-1 rounded-full">
                From &pound;40
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-slatecharcoal-300">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-seafoam-400 shrink-0 mt-0.5" />
                <span>Ideal for elderly patients, care home residents, or reduced mobility</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-seafoam-400 shrink-0 mt-0.5" />
                <span>Full portable clinical kit, sterile barrier drapes, and vacuum instruments</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-seafoam-400 shrink-0 mt-0.5" />
                <span>No travel stress or waiting rooms; treated in your favourite armchair</span>
              </li>
            </ul>

            <Link
              href="/home-visits"
              className="w-full py-3 rounded-xl bg-seafoam-500 text-teal-950 text-xs font-sans font-semibold hover:bg-seafoam-400 transition-colors block text-center"
            >
              Learn About Home Visits &amp; Radius
            </Link>
          </div>
        </div>
      </section>

      {/* 6. PATIENT REVIEWS & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="clinical-tag text-seafoam-700 bg-seafoam-50 px-2.5 py-1 rounded border border-seafoam-200">
            Patient Feedback
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-teal-950 font-medium">
            Kind Words from Local Patients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-pebble-300 shadow-card space-y-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slatecharcoal-700 italic leading-relaxed">
              &ldquo;Cally visited my 86-year-old mother at home. She had been suffering with agonizing corns for months. Cally was so gentle, patient, and polite—mum was walking completely pain-free immediately afterwards!&rdquo;
            </p>
            <div className="pt-2 border-t border-pebble-200 text-xs">
              <strong className="text-teal-950 block">Margaret D.</strong>
              <span className="text-[10px] text-slatecharcoal-500 font-mono">Home Visit &bull; Corn Enucleation</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-pebble-300 shadow-card space-y-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slatecharcoal-700 italic leading-relaxed">
              &ldquo;Being diabetic, I was nervous about having anyone touch my feet. Having an NHS registered nurse do my check gave me absolute confidence. Thorough, professional, and immaculate hygiene.&rdquo;
            </p>
            <div className="pt-2 border-t border-pebble-200 text-xs">
              <strong className="text-teal-950 block">Robert H.</strong>
              <span className="text-[10px] text-slatecharcoal-500 font-mono">Clinic Visit &bull; Diabetic Review</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-pebble-300 shadow-card space-y-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slatecharcoal-700 italic leading-relaxed">
              &ldquo;I had a very painful ingrown toenail that was throbbing. Cally carefully removed the spike without any drama or pain. She gave clear advice on cutting them properly in the future. Highly recommended!&rdquo;
            </p>
            <div className="pt-2 border-t border-pebble-200 text-xs">
              <strong className="text-teal-950 block">James T.</strong>
              <span className="text-[10px] text-slatecharcoal-500 font-mono">Clinic &bull; Ingrowing Nail</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOSING BANNER CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-teal-950 text-white p-8 sm:p-14 lg:p-16 border border-teal-900 shadow-elevated relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-5">
            <span className="clinical-tag text-seafoam-300">Start Walking with Comfort</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-cream-100 font-medium leading-tight">
              Ready to give your feet the clinical care they deserve?
            </h2>
            <p className="text-slatecharcoal-300 text-sm sm:text-base leading-relaxed font-light">
              Appointments available Monday through Friday across our clinic and mobile home visit services. Contact Cally today for advice or to book.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => openBookingFor('routine-foot-care')}
                className="px-6 py-3.5 rounded-xl bg-seafoam-500 text-teal-950 font-sans text-xs font-semibold hover:bg-seafoam-400 transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-teal-950" />
                <span>Book Appointment Online</span>
              </button>

              <a
                href="tel:07123456789"
                className="px-5 py-3.5 rounded-xl border border-teal-800 text-white text-xs font-mono tracking-wider uppercase hover:bg-teal-900 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-seafoam-400" />
                <span>Call 07123 456789</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
