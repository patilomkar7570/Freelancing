"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, ShieldCheck, Calendar, ArrowRight, Info, Heart } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/team";
import { useModals } from "@/context/ModalContext";

export default function TeamPage() {
  const { openConsultation } = useModals();

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-ivory-100 to-white pt-12 pb-16 border-b border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush border border-burgundy-200 text-burgundy text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-goldAccent" />
            <span>Clinical Directors & Care Specialists</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal max-w-3xl leading-tight">
            Meet the specialists behind your{" "}
            <span className="italic font-normal text-burgundy">confident smile.</span>
          </h1>
          <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            Our clinical team combines specialist orthodontic training, 3D bio-mechanical precision, and a warm, compassionate bedside manner to make every visit calm and reassuring.
          </p>

          <div className="p-3.5 rounded-2xl bg-white border border-borderSoft text-xs text-mutedText flex items-center gap-2 max-w-2xl">
            <Info className="w-4 h-4 text-burgundy flex-shrink-0" />
            <span>
              <strong>Demonstration Notice:</strong> The profiles below represent fictional healthcare professionals created exclusively for NOVA Digital Studio&apos;s portfolio demonstration.
            </span>
          </div>
        </div>
      </section>

      {/* Main Team Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Orthodontic Specialists (Full Feature Profiles) */}
        <div className="space-y-12">
          {TEAM_MEMBERS.slice(0, 2).map((doctor, idx) => (
            <div
              key={doctor.id}
              className={`p-8 sm:p-12 rounded-3xl bg-white border border-borderSoft shadow-card flex flex-col lg:flex-row gap-10 items-center lg:items-start ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Doctor Portrait */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-elevated border-4 border-white bg-ivory-200 flex-shrink-0">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 p-2 bg-charcoal/80 backdrop-blur-sm rounded-xl text-center text-white text-[10px] font-mono">
                  {doctor.demonstrationNotice}
                </div>
              </div>

              {/* Bio & Details */}
              <div className="space-y-6 flex-1">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-burgundy bg-blush px-3 py-1 rounded-full">
                    {doctor.role}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mt-2">
                    {doctor.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-mono text-mutedText mt-0.5">
                    {doctor.title}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                  {doctor.bio}
                </p>

                {/* Quote / Philosophy */}
                <div className="p-4 rounded-2xl bg-ivory-100 border border-borderSoft border-l-4 border-l-burgundy italic text-xs text-charcoal leading-relaxed">
                  &ldquo;{doctor.philosophy}&rdquo;
                </div>

                {/* Credentials & Focus */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal block">
                      Credentials & Memberships:
                    </span>
                    <ul className="space-y-1 text-xs text-mutedText">
                      {doctor.credentials.map((cred, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-burgundy flex-shrink-0 mt-0.5" />
                          <span>{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal block">
                      Clinical Focus:
                    </span>
                    <ul className="space-y-1 text-xs text-mutedText">
                      {doctor.clinicalFocus.map((focus, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-goldAccent flex-shrink-0 mt-0.5" />
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openConsultation("Adult")}
                    className="px-6 py-3 rounded-full bg-burgundy text-white font-semibold text-xs hover:bg-burgundy-700 transition-colors shadow-sm flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-ivory-200" />
                    <span>Request Consultation with {doctor.name.split(" ")[1]}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Support Team & Coordinators */}
        <div className="space-y-8 pt-8 border-t border-borderSoft">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-burgundy">
              Therapy, Technology & Patient Care
            </span>
            <h3 className="font-serif text-3xl text-charcoal">
              Our Patient Support Specialists
            </h3>
            <p className="text-xs sm:text-sm text-mutedText">
              From high-precision digital scanning to flexible financing coordination, our team ensures every appointment is effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.slice(2).map((member) => (
              <div
                key={member.id}
                className="p-6 rounded-3xl bg-white border border-borderSoft shadow-sm hover:shadow-card transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="relative h-56 rounded-2xl overflow-hidden bg-ivory-200 shadow-soft">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-burgundy bg-blush px-2.5 py-0.5 rounded-full inline-block">
                      {member.role}
                    </span>
                    <h4 className="font-heading text-lg font-bold text-charcoal mt-1.5">
                      {member.name}
                    </h4>
                    <p className="text-xs font-mono text-mutedText">{member.title}</p>
                    <p className="text-xs text-charcoal/80 leading-relaxed mt-2">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-borderSoft/60 text-xs italic text-mutedText">
                  &ldquo;{member.philosophy}&rdquo;
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ivory-100 rounded-3xl p-8 sm:p-12 border border-borderSoft flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
              Experience the AUREA approach firsthand.
            </h3>
            <p className="text-xs sm:text-sm text-mutedText mt-1 max-w-lg">
              Initial consultations are relaxed and informative. We look forward to welcoming you to our demonstration practice.
            </p>
          </div>

          <button
            onClick={() => openConsultation("Adult")}
            className="px-8 py-3.5 rounded-full bg-burgundy text-white font-semibold text-xs sm:text-sm hover:bg-burgundy-700 transition-colors shadow-card flex items-center gap-2 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
            <span>Book 3D Consultation (Demo)</span>
          </button>
        </div>
      </section>
    </div>
  );
}
