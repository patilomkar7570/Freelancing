import type { Metadata } from "next";
import "./globals.css";
import { AppClientShell } from "@/components/layout/AppClientShell";

export const metadata: Metadata = {
  title: "AUREA Orthodontics | Specialist Orthodontic Practice Concept",
  description:
    "Original fictional specialist orthodontic practice portfolio concept created by NOVA Digital Studio. Featuring architectural facial harmony, aesthetic ceramic braces, clear aligners, and airway-conscious pediatric care.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>
        <AppClientShell>{children}</AppClientShell>
      </body>
    </html>
  );
}
