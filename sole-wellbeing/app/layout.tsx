import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sole Wellbeing | Nurse-Led Clinical Foot Health & Home Visits",
  description:
    "Qualified and insured Foot Health Practitioner & Registered Nurse with 10+ years NHS experience. Routine podiatric care, corn & callus debridement, ingrown nails, diabetic foot checks, and home visits.",
  keywords: [
    "Foot Health Practitioner",
    "Podiatry",
    "Home visit chiropodist",
    "Corn removal",
    "Diabetic foot check",
    "Callus treatment",
    "Ingrown toenail",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-screen flex flex-col bg-cream-100 text-slatecharcoal-900 selection:bg-teal-900 selection:text-white font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
