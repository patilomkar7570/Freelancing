import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  getLocalizedPath: (path: string, targetLang?: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Route translation table for seamless transitions between languages
const ROUTE_MAP: Record<string, Record<Language, string>> = {
  '': { en: '', fi: '', de: '' },
  'accommodation': { en: 'accommodation', fi: 'majoitus', de: 'unterkunft' },
  'majoitus': { en: 'accommodation', fi: 'majoitus', de: 'unterkunft' },
  'unterkunft': { en: 'accommodation', fi: 'majoitus', de: 'unterkunft' },
  'accommodation/kelo-cabins': { en: 'accommodation/kelo-cabins', fi: 'majoitus/kelomokit', de: 'unterkunft/blockhuetten' },
  'majoitus/kelomokit': { en: 'accommodation/kelo-cabins', fi: 'majoitus/kelomokit', de: 'unterkunft/blockhuetten' },
  'unterkunft/blockhuetten': { en: 'accommodation/kelo-cabins', fi: 'majoitus/kelomokit', de: 'unterkunft/blockhuetten' },
  'accommodation/riverside-cabins': { en: 'accommodation/riverside-cabins', fi: 'majoitus/rantamokit', de: 'unterkunft/uferhuetten' },
  'majoitus/rantamokit': { en: 'accommodation/riverside-cabins', fi: 'majoitus/rantamokit', de: 'unterkunft/uferhuetten' },
  'unterkunft/uferhuetten': { en: 'accommodation/riverside-cabins', fi: 'majoitus/rantamokit', de: 'unterkunft/uferhuetten' },
  'accommodation/camping': { en: 'accommodation/camping', fi: 'majoitus/leirinta', de: 'unterkunft/camping' },
  'majoitus/leirinta': { en: 'accommodation/camping', fi: 'majoitus/leirinta', de: 'unterkunft/camping' },
  'unterkunft/camping': { en: 'accommodation/camping', fi: 'majoitus/leirinta', de: 'unterkunft/camping' },
  'experiences': { en: 'experiences', fi: 'elamykset', de: 'erlebnisse' },
  'elamykset': { en: 'experiences', fi: 'elamykset', de: 'erlebnisse' },
  'erlebnisse': { en: 'experiences', fi: 'elamykset', de: 'erlebnisse' },
  'restaurant': { en: 'restaurant', fi: 'ravintola', de: 'restaurant' },
  'ravintola': { en: 'restaurant', fi: 'ravintola', de: 'restaurant' },
  'gallery': { en: 'gallery', fi: 'galleria', de: 'galerie' },
  'galleria': { en: 'gallery', fi: 'galleria', de: 'galerie' },
  'galerie': { en: 'gallery', fi: 'galleria', de: 'galerie' },
  'location': { en: 'location', fi: 'sijainti', de: 'anfahrt' },
  'sijainti': { en: 'location', fi: 'sijainti', de: 'anfahrt' },
  'anfahrt': { en: 'location', fi: 'sijainti', de: 'anfahrt' },
  'reservations': { en: 'reservations', fi: 'varaus', de: 'reservierung' },
  'varaus': { en: 'reservations', fi: 'varaus', de: 'reservierung' },
  'reservierung': { en: 'reservations', fi: 'varaus', de: 'reservierung' },
  'contact': { en: 'contact', fi: 'yhteystiedot', de: 'kontakt' },
  'yhteystiedot': { en: 'contact', fi: 'yhteystiedot', de: 'kontakt' },
  'kontakt': { en: 'contact', fi: 'yhteystiedot', de: 'kontakt' },
  'privacy': { en: 'privacy', fi: 'tietosuoja', de: 'datenschutz' },
  'tietosuoja': { en: 'privacy', fi: 'tietosuoja', de: 'datenschutz' },
  'datenschutz': { en: 'privacy', fi: 'tietosuoja', de: 'datenschutz' },
  'terms': { en: 'terms', fi: 'ehdot', de: 'agb' },
  'ehdot': { en: 'terms', fi: 'ehdot', de: 'agb' },
  'agb': { en: 'terms', fi: 'ehdot', de: 'agb' },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract current language from URL prefix (/fi/..., /de/..., /en/...)
  const getLangFromPath = (path: string): Language => {
    const segments = path.split('/').filter(Boolean);
    const first = segments[0]?.toLowerCase();
    if (first === 'fi' || first === 'de' || first === 'en') {
      return first as Language;
    }
    return 'en';
  };

  const [language, setLanguageState] = useState<Language>(() => {
    return getLangFromPath(window.location.pathname);
  });

  useEffect(() => {
    const currentLang = getLangFromPath(location.pathname);
    if (currentLang !== language) {
      setLanguageState(currentLang);
    }
  }, [location.pathname]);

  const getLocalizedPath = (targetSection: string, targetLang?: Language): string => {
    const langToUse = targetLang || language;
    const cleanSection = targetSection.replace(/^\/(en|fi|de)\/?/, '').replace(/^\//, '');
    
    // Check if cleanSection has mapped translation
    const mapping = ROUTE_MAP[cleanSection];
    const localizedSection = mapping ? mapping[langToUse] : cleanSection;

    return `/${langToUse}${localizedSection ? `/${localizedSection}` : ''}`;
  };

  const setLanguage = (newLang: Language) => {
    if (newLang === language) return;
    const segments = location.pathname.split('/').filter(Boolean);
    // Remove language prefix if present
    if (segments[0] === 'en' || segments[0] === 'fi' || segments[0] === 'de') {
      segments.shift();
    }
    const currentSection = segments.join('/');
    const newPath = getLocalizedPath(currentSection, newLang);
    setLanguageState(newLang);
    navigate(newPath);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getLocalizedPath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
