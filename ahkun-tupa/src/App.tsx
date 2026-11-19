import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Pages
import { Home } from './pages/Home';
import { AccommodationOverview } from './pages/AccommodationOverview';
import { AccommodationKelo } from './pages/AccommodationKelo';
import { AccommodationRiverside } from './pages/AccommodationRiverside';
import { AccommodationCamping } from './pages/AccommodationCamping';
import { ExperiencesOverview } from './pages/ExperiencesOverview';
import { RestaurantCafe } from './pages/RestaurantCafe';
import { Gallery } from './pages/Gallery';
import { LocationTravel } from './pages/LocationTravel';
import { Reservations } from './pages/Reservations';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ahkun-bg text-ahkun-charcoal antialiased">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Root redirect to default language */}
          <Route path="/" element={<Navigate to="/en" replace />} />

          {/* =================================================================
              ENGLISH ROUTES (/en/...)
              ================================================================= */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/accommodation" element={<AccommodationOverview />} />
          <Route path="/en/accommodation/kelo-cabins" element={<AccommodationKelo />} />
          <Route path="/en/accommodation/riverside-cabins" element={<AccommodationRiverside />} />
          <Route path="/en/accommodation/camping" element={<AccommodationCamping />} />
          <Route path="/en/experiences" element={<ExperiencesOverview />} />
          <Route path="/en/restaurant" element={<RestaurantCafe />} />
          <Route path="/en/gallery" element={<Gallery />} />
          <Route path="/en/location" element={<LocationTravel />} />
          <Route path="/en/reservations" element={<Reservations />} />
          <Route path="/en/contact" element={<Contact />} />
          <Route path="/en/privacy" element={<Privacy />} />
          <Route path="/en/terms" element={<Terms />} />

          {/* =================================================================
              FINNISH ROUTES (/fi/...)
              ================================================================= */}
          <Route path="/fi" element={<Home />} />
          {/* Canonical Finnish localized URLs */}
          <Route path="/fi/majoitus" element={<AccommodationOverview />} />
          <Route path="/fi/majoitus/kelomokit" element={<AccommodationKelo />} />
          <Route path="/fi/majoitus/rantamokit" element={<AccommodationRiverside />} />
          <Route path="/fi/majoitus/leirinta" element={<AccommodationCamping />} />
          <Route path="/fi/elamykset" element={<ExperiencesOverview />} />
          <Route path="/fi/ravintola" element={<RestaurantCafe />} />
          <Route path="/fi/galleria" element={<Gallery />} />
          <Route path="/fi/sijainti" element={<LocationTravel />} />
          <Route path="/fi/varaus" element={<Reservations />} />
          <Route path="/fi/yhteystiedot" element={<Contact />} />
          <Route path="/fi/tietosuoja" element={<Privacy />} />
          <Route path="/fi/ehdot" element={<Terms />} />
          {/* Finnish English fallbacks */}
          <Route path="/fi/accommodation" element={<AccommodationOverview />} />
          <Route path="/fi/accommodation/kelo-cabins" element={<AccommodationKelo />} />
          <Route path="/fi/accommodation/riverside-cabins" element={<AccommodationRiverside />} />
          <Route path="/fi/accommodation/camping" element={<AccommodationCamping />} />
          <Route path="/fi/experiences" element={<ExperiencesOverview />} />
          <Route path="/fi/restaurant" element={<RestaurantCafe />} />
          <Route path="/fi/gallery" element={<Gallery />} />
          <Route path="/fi/location" element={<LocationTravel />} />
          <Route path="/fi/reservations" element={<Reservations />} />
          <Route path="/fi/contact" element={<Contact />} />

          {/* =================================================================
              GERMAN ROUTES (/de/...)
              ================================================================= */}
          <Route path="/de" element={<Home />} />
          {/* Canonical German localized URLs */}
          <Route path="/de/unterkunft" element={<AccommodationOverview />} />
          <Route path="/de/unterkunft/blockhuetten" element={<AccommodationKelo />} />
          <Route path="/de/unterkunft/uferhuetten" element={<AccommodationRiverside />} />
          <Route path="/de/unterkunft/camping" element={<AccommodationCamping />} />
          <Route path="/de/erlebnisse" element={<ExperiencesOverview />} />
          <Route path="/de/restaurant" element={<RestaurantCafe />} />
          <Route path="/de/galerie" element={<Gallery />} />
          <Route path="/de/anfahrt" element={<LocationTravel />} />
          <Route path="/de/reservierung" element={<Reservations />} />
          <Route path="/de/kontakt" element={<Contact />} />
          <Route path="/de/datenschutz" element={<Privacy />} />
          <Route path="/de/agb" element={<Terms />} />
          {/* German English fallbacks */}
          <Route path="/de/accommodation" element={<AccommodationOverview />} />
          <Route path="/de/accommodation/kelo-cabins" element={<AccommodationKelo />} />
          <Route path="/de/accommodation/riverside-cabins" element={<AccommodationRiverside />} />
          <Route path="/de/accommodation/camping" element={<AccommodationCamping />} />
          <Route path="/de/experiences" element={<ExperiencesOverview />} />
          <Route path="/de/gallery" element={<Gallery />} />
          <Route path="/de/location" element={<LocationTravel />} />
          <Route path="/de/reservations" element={<Reservations />} />
          <Route path="/de/contact" element={<Contact />} />

          {/* =================================================================
              LEGACY / UNPREFIXED REDIRECTS TO /en/...
              ================================================================= */}
          <Route path="/accommodation" element={<Navigate to="/en/accommodation" replace />} />
          <Route path="/accommodation/*" element={<Navigate to="/en/accommodation" replace />} />
          <Route path="/experiences" element={<Navigate to="/en/experiences" replace />} />
          <Route path="/restaurant" element={<Navigate to="/en/restaurant" replace />} />
          <Route path="/gallery" element={<Navigate to="/en/gallery" replace />} />
          <Route path="/location" element={<Navigate to="/en/location" replace />} />
          <Route path="/reservations" element={<Navigate to="/en/reservations" replace />} />
          <Route path="/contact" element={<Navigate to="/en/contact" replace />} />
          <Route path="/privacy" element={<Navigate to="/en/privacy" replace />} />
          <Route path="/terms" element={<Navigate to="/en/terms" replace />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};
