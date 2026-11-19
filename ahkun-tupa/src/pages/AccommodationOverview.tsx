import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/ui/SectionHeader';
import { VerificationBadge } from '../components/ui/VerificationBadge';
import { ACCOMMODATIONS, BUSINESS_CONFIG, UI_TRANSLATIONS } from '../data/contentConfig';
import { 
  CheckCircle2, 
  ArrowRight, 
  CalendarCheck, 
  Users, 
  Flame, 
  Waves, 
  ShieldCheck, 
  Ship,
  Sparkles,
  Info
} from 'lucide-react';

export const AccommodationOverview: React.FC = () => {
  const { language, getLocalizedPath } = useLanguage();

  return (
    <div className="space-y-0">
      
      {/* Editorial Header */}
      <section className="relative py-20 lg:py-24 bg-ahkun-forest text-ahkun-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop"
            alt="Lemmenjoki river cabins"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ahkun-white/10 backdrop-blur-md border border-ahkun-white/20 text-[11px] font-mono tracking-[0.2em] uppercase text-ahkun-river">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{UI_TRANSLATIONS.nav.stay[language]}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-ahkun-white">
            {language === 'fi' && (
              <>Majoitusta Lemmenjoen <span className="italic text-ahkun-river">syleilyssä</span></>
            )}
            {language === 'en' && (
              <>Wilderness stays on the <span className="italic text-ahkun-river">Lemmenjoki</span></>
            )}
            {language === 'de' && (
              <>Übernachten am Ufer des <span className="italic text-ahkun-river">Lemmenjoki</span></>
            )}
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-ahkun-white/80 font-light leading-relaxed">
            {language === 'fi'
              ? 'Valitse aito erämaatunnelma joen vastarannalla omalla soutuveneellä, mukavat sähköistetyt rantamökit pääpihassa tai kauniit telttapaikat joen rannalla.'
              : language === 'de'
              ? 'Wählen Sie zwischen urigen Kelo-Hütten am anderen Flussufer mit eigenem Ruderboot, komfortablen beheizten Uferhütten oder naturnahen Zeltplätzen.'
              : 'Choose between authentic off-grid kelo cabins across the river with your own rowing boat, electrified riverside cabins in the courtyard, or shoreline camping.'}
          </p>
        </div>
      </section>

      {/* Rate and Verification Notice Box */}
      <section className="bg-ahkun-bg py-6 border-b border-ahkun-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ahkun-white rounded-xl p-4 sm:p-5 border border-ahkun-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-ahkun-pine shrink-0" />
              <p className="text-xs sm:text-sm text-ahkun-muted">
                <strong className="text-ahkun-charcoal font-medium">
                  {language === 'fi' ? 'Hintatiedot ja sesongit: ' : language === 'de' ? 'Preise & Saisons: ' : 'Pricing & Availability: '}
                </strong>
                {language === 'fi' 
                  ? 'Kysy ajankohtainen hintatarjous suoraan Ahkun Tuvalta. Kaikki tiedot perustuvat virallisiin arkistolähteisiin.'
                  : language === 'de'
                  ? 'Aktuelle Saisonpreise direkt bei Ahkun Tupa erfragen. Alle Angaben basieren auf offiziellen Quellen.'
                  : 'Contact Ahkun Tupa directly for current rates and seasonal availability. Specifications based on official business records.'}
              </p>
            </div>

            <Link
              to={getLocalizedPath('reservations')}
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-ahkun-forest text-ahkun-white text-xs font-medium uppercase tracking-wider hover:bg-ahkun-pine transition-colors"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>{UI_TRANSLATIONS.hero.ctaReservation[language]}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Units Section */}
      <section className="py-16 lg:py-24 bg-ahkun-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {ACCOMMODATIONS.map((unit, index) => {
            const isReversed = index % 2 === 1;
            const subpath = unit.category === 'kelo-cabins' ? 'accommodation/kelo-cabins' : unit.category === 'riverside-cabins' ? 'accommodation/riverside-cabins' : 'accommodation/camping';

            return (
              <div 
                key={unit.id}
                className="bg-ahkun-white rounded-3xl overflow-hidden border border-ahkun-border shadow-md grid grid-cols-1 lg:grid-cols-12 items-center"
              >
                {/* Visual */}
                <div className={`lg:col-span-6 relative h-[360px] sm:h-[420px] lg:h-[480px] ${isReversed ? 'lg:order-2' : ''}`}>
                  <img
                    src={unit.images.hero}
                    alt={unit.images.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-ahkun-forest/90 backdrop-blur-md text-ahkun-white text-xs font-mono tracking-wider uppercase">
                      {unit.badge[language]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-ahkun-timber">
                      {unit.subtitle[language]}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ahkun-charcoal leading-tight">
                      {unit.name[language]}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-ahkun-muted leading-relaxed font-light">
                    {unit.description[language]}
                  </p>

                  {/* Room spec & capacity pill */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ahkun-charcoal pt-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ahkun-bg border border-ahkun-border">
                      <Users className="w-3.5 h-3.5 text-ahkun-forest" />
                      <span>{unit.capacityAdults} {language === 'fi' ? 'aikuista' : language === 'de' ? 'Erwachsene' : 'Adults'}</span>
                    </div>

                    <VerificationBadge status={unit.verificationStatus} />
                  </div>

                  {/* Amenities preview */}
                  <div className="space-y-2.5 pt-4 border-t border-ahkun-border">
                    <span className="text-xs font-mono uppercase tracking-widest text-ahkun-pine block">
                      {language === 'fi' ? 'Varusteluun sisältyy:' : language === 'de' ? 'Ausstattung inklusive:' : 'Key Amenities:'}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {unit.verifiedAmenities[language].slice(0, 4).map((amenity, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-ahkun-charcoal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-ahkun-forest shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Bar */}
                  <div className="pt-6 border-t border-ahkun-border flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <Link
                      to={getLocalizedPath(subpath)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ahkun-forest text-ahkun-white text-xs font-medium uppercase tracking-wider hover:bg-ahkun-pine transition-colors shadow-sm"
                    >
                      <span>{language === 'fi' ? 'Lue tarkat tiedot & varaa' : language === 'de' ? 'Vollständige Angaben ansehen' : 'Full Specifications & Enquiry'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      to={getLocalizedPath('reservations')}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-ahkun-bg hover:bg-ahkun-border text-ahkun-charcoal border border-ahkun-border text-xs font-medium uppercase tracking-wider transition-colors"
                    >
                      <CalendarCheck className="w-3.5 h-3.5 text-ahkun-forest" />
                      <span>{UI_TRANSLATIONS.hero.ctaReservation[language]}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Helpful Booking Reassurance */}
      <section className="py-16 bg-ahkun-white border-t border-ahkun-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <SectionHeader
            align="center"
            tag={language === 'fi' ? 'Varaaminen & Käytännöt' : language === 'de' ? 'Buchung & Richtlinien' : 'Booking & Policies'}
            title={language === 'fi' ? 'Helppo ja joustava varauskysely' : language === 'de' ? 'Einfache und transparente Buchungsanfrage' : 'Clear & Transparent Enquiries'}
            description={language === 'fi'
              ? 'Vastaamme varauskyselyihin nopeasti. Sisäänkirjautuminen klo 15:00 alkaen ja uloskirjautuminen klo 12:00 mennessä.'
              : language === 'de'
              ? 'Wir antworten zügig auf Anfragen. Check-in ab 15:00 Uhr, Check-out bis 12:00 Uhr.'
              : 'Enquiries handled personally. Check-in from 15:00, check-out until 12:00. Pets allowed by advance notice.'}
          />

          <div className="pt-4 flex justify-center">
            <Link
              to={getLocalizedPath('reservations')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ahkun-forest text-ahkun-white text-xs font-medium uppercase tracking-wider hover:bg-ahkun-pine transition-colors shadow-md"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{UI_TRANSLATIONS.hero.ctaReservation[language]}</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
