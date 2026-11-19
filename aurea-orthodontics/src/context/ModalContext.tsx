"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ConsultationModal } from "@/components/ui/ConsultationModal";
import { BrandSpecModal } from "@/components/brand/BrandSpecModal";

interface ModalContextType {
  openConsultation: (category?: string) => void;
  closeConsultation: () => void;
  openBrandSpec: () => void;
  closeBrandSpec: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModals = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModals must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationCategory, setConsultationCategory] = useState("Adult");
  const [brandSpecOpen, setBrandSpecOpen] = useState(false);

  const openConsultation = (category: string = "Adult") => {
    setConsultationCategory(category);
    setConsultationOpen(true);
  };

  const closeConsultation = () => setConsultationOpen(false);
  const openBrandSpec = () => setBrandSpecOpen(true);
  const closeBrandSpec = () => setBrandSpecOpen(false);

  return (
    <ModalContext.Provider
      value={{
        openConsultation,
        closeConsultation,
        openBrandSpec,
        closeBrandSpec,
      }}
    >
      {children}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={closeConsultation}
        defaultCategory={consultationCategory}
      />
      <BrandSpecModal
        isOpen={brandSpecOpen}
        onClose={closeBrandSpec}
      />
    </ModalContext.Provider>
  );
};
