"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Home, HelpCircle, PhoneCall } from "lucide-react";
import { useModals } from "@/context/ModalContext";

export default function NotFound() {
  const { openConsultation } = useModals();

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-8">
      <div className="max-w-lg w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-blush text-burgundy flex items-center justify-center mx-auto shadow-soft ring-8 ring-blush/30">
          <Sparkles className="w-8 h-8 text-goldAccent" />
        </div>

        <span className="text-xs uppercase font-bold tracking-widest text-burgundy bg-blush px-3 py-1 rounded-full inline-block">
          Error 404 &bull; Page Not Found
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl text-charcoal leading-tight">
          Let&apos;s guide you back to{" "}
          <span className="italic font-normal text-burgundy">alignment.</span>
        </h1>

        <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
          The orthodontic page or resource you are looking for may have been repositioned or is currently unavailable.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3.5 rounded-full bg-burgundy text-white font-semibold text-xs hover:bg-burgundy-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/treatments"
            className="px-6 py-3.5 rounded-full border border-borderSoft bg-white hover:bg-ivory-100 text-charcoal font-semibold text-xs transition-colors flex items-center justify-center gap-2"
          >
            <span>Explore Treatments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="pt-6 border-t border-borderSoft flex flex-wrap justify-center gap-6 text-xs text-mutedText">
          <Link href="/faq" className="hover:text-burgundy transition-colors">
            Frequently Asked Questions
          </Link>
          <Link href="/patient-education" className="hover:text-burgundy transition-colors">
            Patient Education
          </Link>
          <Link href="/contact" className="hover:text-burgundy transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
