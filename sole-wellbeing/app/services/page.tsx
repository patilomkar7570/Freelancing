'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Activity,
  ShieldCheck,
  Heart,
  Clock,
  ArrowRight,
  Home,
  CheckCircle2,
} from 'lucide-react';
import BookingModal from '@/components/BookingModal';

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  priceClinic: string;
  priceHome: string;
  description: string;
  clinicalSteps: string[];
  suitedFor: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'routine-foot-care',
    title: 'Routine Foot Care & Medical Nail Trim',
    subtitle: 'Essential hygiene, nail shaping, and minor skin smoothing',
    duration: '30–45 mins',
    priceClinic: '£35',
    priceHome: '£40',
    description:
      'A thorough, revitalizing clinical treatment ideal for maintaining healthy, comfortable feet. We gently cleanse the feet, trim and shape toenails straight across to prevent ingrowing, clear the nail sulci (grooves), gently smooth rough skin, and apply an intensive medical urea hydrating massage cream.',
    clinicalSteps: [
      'Antiseptic foot wash and skin condition assessment',
      'Careful toenail clipping and mechanical burr smoothing',
      'Sulcus clearing and cuticle debridement',
      'Application of targeted hydrating foot balm and gentle circulation massage',
    ],
    suitedFor: 'Anyone struggling to safely reach or trim their own toenails, elderly patients, or routine maintenance.',
  },
  {
    id: 'corns-calluses',
    title: 'Corn Enucleation & Callus Debridement',
    subtitle: 'Immediate relief from sharp pinpoint pain and burning friction',
    duration: '40–50 mins',
    priceClinic: '£38',
    priceHome: '£45',
    description:
      'Corns develop when continuous friction or pressure drives a hard keratinized cone into the deeper dermal layers, pressing directly on sensitive nerve fibers. Using sterile scalpel technique, Cally gently enucleates the central core without pain or bleeding, followed by gentle sand-smoothing of surrounding callus.',
    clinicalSteps: [
      'Identification of corn types (hard, soft, seed, or neurovascular)',
      'Delicate, pain-free scalpel enucleation of the central kernel',
      'Debridement and mechanical smoothing of adjoining hyperkeratosis',
      'Pressure redistribution padding and footwear pressure advice',
    ],
    suitedFor: 'Patients experiencing sharp pain when walking, pebble-under-foot sensations, or thick yellow heel cracks.',
  },
  {
    id: 'ingrowing-toenails',
    title: 'Ingrowing Toenail Conservative Care',
    subtitle: 'Gentle spike excision without traumatic surgery',
    duration: '35–45 mins',
    priceClinic: '£40',
    priceHome: '£45',
    description:
      'When a sharp toenail edge penetrates the lateral sulcus wall, it triggers acute throbbing inflammation. Before considering surgical avulsion under local anaesthetic, skilled conservative resection can trim away the offending spike, sterilize the sulcus, and pack the groove with sterile dressing to allow peaceful healing.',
    clinicalSteps: [
      'Gentle sulcus exploration to trace the offending nail corner',
      'Precision nail nipper excision of the penetrating spike',
      'Antiseptic lavage and sterile non-adherent dressing',
      'Clear education on square cutting to prevent recurrence',
    ],
    suitedFor: 'Painful, red, or tender toe edges where the nail is starting to pierce adjacent skin.',
  },
  {
    id: 'diabetic-assessment',
    title: 'Diabetic Neurovascular Foot Assessment',
    subtitle: 'Comprehensive annual screening and limb protection',
    duration: '45–60 mins',
    priceClinic: '£42',
    priceHome: '£48',
    description:
      'Diabetes can damage peripheral nerves (neuropathy) and reduce microvascular arterial perfusion (ischaemia), leaving minor blisters or lesions completely unfelt until ulceration develops. This medical check includes neurological sensation mapping and vascular pulse evaluation.',
    clinicalSteps: [
      '10g Semmes-Weinstein monofilament neurological mapping across 10 sites',
      'Dorsalis pedis and posterior tibial arterial pulse palpation',
      'Capillary refill time and skin temperature differential assessment',
      'Safe conservative nail trim and written GP letter if vascular compromise is detected',
    ],
    suitedFor: 'All individuals with Type 1 or Type 2 diabetes; recommended at least once annually.',
  },
  {
    id: 'verruca-treatment',
    title: 'Verruca & Plantar Wart Cryotherapy',
    subtitle: 'Targeted freezing and keratolytic debridement',
    duration: '30 mins',
    priceClinic: '£35',
    priceHome: '£40',
    description:
      'Verrucae are viral infections caused by the Human Papillomavirus (HPV). Because the virus hides within the avascular epidermis, over-the-counter gels frequently fail. We pare down the overlying protective hyperkeratotic callus and deliver targeted medical cryotherapy to trigger an immune antibody cascade.',
    clinicalSteps: [
      'Paring back of the overlying skin to expose active viral capillaries',
      'Application of sub-zero medical cryotherapy spray or high-potency caustic agents',
      'Protective aperture felt pad to offload walking pressure',
      'Personalized home care and follow-up treatment plan',
    ],
    suitedFor: 'Painful or stubborn plantar warts that have resisted pharmacy plasters and acid gels.',
  },
  {
    id: 'fungal-thickened',
    title: 'Fungal & Thickened Nail Reduction',
    subtitle: 'Mechanical burr thinning and anti-fungal plan',
    duration: '40–50 mins',
    priceClinic: '£38',
    priceHome: '£45',
    description:
      'Thickened, discolored, or crumbling nails (onychomycosis) can exert painful pressure on the nail bed. Using a professional podiatry burr with integrated dust extraction, Cally thins the nail down to healthy thickness, dramatically improving appearance and allowing topical anti-fungal solutions to penetrate.',
    clinicalSteps: [
      'Assessment of fungal pattern and nail matrix involvement',
      'Painless mechanical reduction of nail plate thickness',
      'Sulcus debridement to clear fungal debris and keratin deposits',
      'Topical treatment advice, hygiene routine, and shoe disinfection guidance',
    ],
    suitedFor: 'Thickened, yellowed, brittle, or distorted toenails that cannot be cut with home clippers.',
  },
];

export default function ServicesPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('routine-foot-care');

  const openBookingFor = (serviceId: string) => {
    setSelectedService(serviceId);
    setBookingModalOpen(true);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="bg-cream-200/80 border-b border-pebble-300 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seafoam-100 border border-seafoam-300 text-teal-950 text-[10px] font-mono uppercase tracking-widest font-semibold">
            <span>Clinical Treatments Menu</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-teal-950 font-medium tracking-tight max-w-3xl">
            Gentle, restorative foot treatments.
          </h1>
          <p className="text-slatecharcoal-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Every procedure is carried out with vacuum-sterilized instruments and nurse-led clinical precision. Available in our peaceful clinic suite or in the comfort of your own home.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="p-8 sm:p-10 rounded-2xl bg-white border border-pebble-300 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:shadow-elevated transition-shadow"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-seafoam-700 font-semibold bg-seafoam-50 px-2.5 py-0.5 rounded border border-seafoam-200">
                    Treatment {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-slatecharcoal-500">
                    <Clock className="w-3 h-3 text-seafoam-600" />
                    {service.duration}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl text-teal-950 font-medium">
                  {service.title}
                </h2>
                <p className="text-xs font-mono text-teal-800 font-semibold">
                  {service.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slatecharcoal-700 leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-pebble-200">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-teal-950 font-semibold">
                    What Happens During Treatment:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slatecharcoal-600">
                    {service.clinicalSteps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-seafoam-600 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-cream-100 rounded-xl border border-pebble-200 text-xs text-slatecharcoal-600">
                  <strong className="text-teal-950">Recommended For: </strong>
                  {service.suitedFor}
                </div>
              </div>

              {/* Price & Action Column */}
              <div className="lg:col-span-4 bg-pebble-100/70 p-6 rounded-xl border border-pebble-300 space-y-4 lg:self-center">
                <div className="space-y-2 pb-3 border-b border-pebble-200">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slatecharcoal-500 block">
                    Transparent Pricing
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-medium text-slatecharcoal-700">Clinic Appointment:</span>
                    <span className="font-serif text-2xl text-teal-950 font-semibold">{service.priceClinic}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-medium text-slatecharcoal-700">Home Visit (Mobile):</span>
                    <span className="font-serif text-xl text-teal-900 font-semibold">{service.priceHome}</span>
                  </div>
                </div>

                <button
                  onClick={() => openBookingFor(service.id)}
                  className="w-full py-3 rounded-xl bg-teal-900 text-white text-xs font-sans font-semibold hover:bg-teal-800 transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Book This Treatment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <p className="text-[10px] text-slatecharcoal-500 text-center font-mono">
                  Full sterilized instrument pack included
                </p>
              </div>
            </div>
          ))}
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
