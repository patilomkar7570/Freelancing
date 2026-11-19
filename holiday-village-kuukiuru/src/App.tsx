import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Pages
import { Home } from './pages/Home';
import { AccommodationOverview } from './pages/AccommodationOverview';
import { AccommodationCottages } from './pages/AccommodationCottages';
import { AccommodationRooms } from './pages/AccommodationRooms';
import { AccommodationCamping } from './pages/AccommodationCamping';
import { ExperiencesOverview } from './pages/ExperiencesOverview';
import { ExperiencesWinter } from './pages/ExperiencesWinter';
import { ExperiencesSummer } from './pages/ExperiencesSummer';
import { SaunaRelaxation } from './pages/SaunaRelaxation';
import { CafeGatherings } from './pages/CafeGatherings';
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

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-nordic-bg text-nordic-charcoal">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Accommodation Routes */}
          <Route path="/accommodation" element={<AccommodationOverview />} />
          <Route path="/accommodation/cottages" element={<AccommodationCottages />} />
          <Route path="/accommodation/rooms" element={<AccommodationRooms />} />
          <Route path="/accommodation/camping" element={<AccommodationCamping />} />

          {/* Experiences Routes */}
          <Route path="/experiences" element={<ExperiencesOverview />} />
          <Route path="/experiences/winter" element={<ExperiencesWinter />} />
          <Route path="/experiences/summer" element={<ExperiencesSummer />} />

          {/* Facilities & Lifestyle */}
          <Route path="/sauna-and-relaxation" element={<SaunaRelaxation />} />
          <Route path="/cafe-and-gatherings" element={<CafeGatherings />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/location" element={<LocationTravel />} />
          
          {/* Booking & Communication */}
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />

          {/* Legal & Concept */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
