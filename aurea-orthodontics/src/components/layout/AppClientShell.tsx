"use client";

import React, { ReactNode } from "react";
import { ModalProvider, useModals } from "@/context/ModalContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const ShellInner: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { openConsultation, openBrandSpec } = useModals();

  return (
    <div className="min-h-screen flex flex-col bg-white text-charcoal font-sans selection:bg-blush selection:text-burgundy">
      <Header
        onRequestConsultation={() => openConsultation("Adult")}
        onOpenBrandSpec={openBrandSpec}
      />

      <main className="flex-1">{children}</main>

      <Footer
        onRequestConsultation={() => openConsultation("Adult")}
        onOpenBrandSpec={openBrandSpec}
      />
    </div>
  );
};

export const AppClientShell: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ModalProvider>
      <ShellInner>{children}</ShellInner>
    </ModalProvider>
  );
};
