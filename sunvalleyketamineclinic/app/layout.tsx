import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConceptNoticeBar from "@/components/ConceptNoticeBar";

export const metadata: Metadata = {
  title: "VALENCE Clinical | Specialist Ketamine Care & Assessment",
  description:
    "An independent fictional specialist healthcare website concept developed by NOVA Digital Studio. Demonstrating considered clinical information architecture, calm editorial design, and patient care pathways.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-screen flex flex-col bg-ivory-100 text-charcoal-900 selection:bg-forest-800 selection:text-ivory-100 font-sans">
        {/* NOVA Portfolio Concept Top Bar */}
        <ConceptNoticeBar />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
