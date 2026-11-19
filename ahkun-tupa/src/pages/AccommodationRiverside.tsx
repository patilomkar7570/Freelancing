import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { VerificationBadge } from '../components/ui/VerificationBadge';
import { ACCOMMODATIONS, BUSINESS_CONFIG, UI_TRANSLATIONS } from '../data/contentConfig';
import { 
  CheckCircle2, 
  ArrowLeft, 
  CalendarCheck, 
  Tv, 
  Waves, 
  Wifi, 
  Users, 
  ShieldCheck, 
  Sparkles,
  Info
} from 'lucide-react';

export const AccommodationRiverside: React.FC = () => {
  const { language, getLocalizedPath } = useLanguage();
  const unit = ACCOMMODATIONS.find(a => a.category === 'riverside-cabins')!;

  return (
    <div className="space-y-0">
      
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-ahkun-forest text-ahkun-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src={unit.images.hero}
            alt={unit.images.alt}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            to={getLocalizedPath('accommodation')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ahkun-river hover:text-ahkun-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{UI_TRANSLATIONS.nav.allAccommodation[language]}</span>
          </Link>

          <div className="space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-ahkun-white/10 text-xs font-mono tracking-widest uppercase text-ahkun-river border border-ahkun-white/20">
              {unit.badge[language]}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-ahkun-white">
              {unit.name[language]}
            </h1>
            <p className="text-lg text-ahkun-white/80 max-w-3xl font-light">
              {unit.subtitle[language]}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 lg:py-24 bg-ahkun-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Narrative, Gallery, Amenities */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Detailed Description */}
              <div className="bg-ahkun-white p-8 sm:p-10 rounded-3xl border border-ahkun-border space-y-6 shadow-sm">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-ahkun-charcoal">
                  {language === 'fi' ? 'Mukavuutta ja helppoutta kansallispuiston portilla' : language === 'de' ? 'Komfort und Gemütlichkeit am Tor zum Nationalpark' : 'Courtyard Comfort at the National Park Gate'}
                </h2>
                
                <p className="text-base text-ahkun-muted leading-relaxed font-light">
                  {unit.description[language]}
                </p>

                <p className="text-sm text-ahkun-muted leading-relaxed">
                  {language === 'fi' && (
                    <>
                      Pääalueen mökit ja 2 hengen huoneet tarjoavat vaivatonta majoitusta ravintolan ja jokilaiturin välittömässä läheisyydessä. Mökeissä on sähkölämmitys, jääkaappi ja ruokailuastiasto. Osassa mökeistä on oma sauna, suihku ja wc, minkä lisäksi erillisestä huoltorakennuksesta löytyvät suihku- ja saunatilat kaikille vieraille.
                    </>
                  )}
                  {language === 'en' && (
                    <>
                      Courtyard cabins and 2-person rooms offer comfortable and easy accommodation steps from the restaurant and riverboat pier. Equipped with electric heating, refrigerators, and dining tableware. Select cabins include private saunas, showers, and WCs, complemented by the central service building with modern hot showers for all guests.
                    </>
                  )}
                  {language === 'de' && (
                    <>
                      Die Hütten und 2-Bett-Zimmer im Hauptbereich bieten unkomplizierten Komfort in Gehweite zum Restaurant und Bootsanleger. Ausgestattet mit elektrischer Heizung, Kühlschrank und Geschirr. Ausgewählte Einheiten verfügen über eine eigene Sauna und Dusche/WC, ergänzt durch das moderne zentrale Sanitärgebäude.
                    </>
                  )}
                </p>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  {unit.images.gallery.map((img, i) => (
                    <div key={i} className="h-48 rounded-xl overflow-hidden border border-ahkun-border">
                      <img
                        src={img}
                        alt={`${unit.name[language]} ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Specifications & Amenities */}
              <div className="bg-ahkun-white p-8 sm:p-10 rounded-3xl border border-ahkun-border space-y-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-ahkun-border pb-4">
                  <h3 className="font-serif text-2xl font-normal text-ahkun-charcoal">
                    {language === 'fi' ? 'Varustelu & Mukavuudet' : language === 'de' ? 'Ausstattung & Komfort' : 'Amenities & Comforts'}
                  </h3>
                  <VerificationBadge status={unit.verificationStatus} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {unit.verifiedAmenities[language].map((amenity, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-ahkun-charcoal">
                      <CheckCircle2 className="w-4 h-4 text-ahkun-forest mt-0.5 shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Additional notes */}
                <div className="pt-6 border-t border-ahkun-border space-y-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-ahkun-timber block">
                    {language === 'fi' ? 'Ateriapaketit ja lisäpalvelut:' : language === 'de' ? 'Verpflegung & Zusatzleistungen:' : 'Meal Packages & Services:'}
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-ahkun-muted">
                    {unit.additionalFeatures[language].map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-ahkun-forest font-bold">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Booking / Rates Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-ahkun-white p-6 sm:p-8 rounded-3xl border border-ahkun-border shadow-lg space-y-6">
                <div className="space-y-2 border-b border-ahkun-border pb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-ahkun-timber">
                    {language === 'fi' ? 'Hintatiedustelu' : language === 'de' ? 'Preisanfrage' : 'Rate Enquiry'}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-ahkun-charcoal">
                    {UI_TRANSLATIONS.common.contactForRates[language]}
                  </h3>
                  <p className="text-xs text-ahkun-muted">
                    {unit.ratesNote[language]}
                  </p>
                </div>

                <div className="space-y-3 text-xs font-mono text-ahkun-charcoal">
                  <div className="flex justify-between py-2 border-b border-ahkun-border">
                    <span className="text-ahkun-muted">{language === 'fi' ? 'Yksiköt' : language === 'de' ? 'Einheiten' : 'Units'}</span>
                    <span className="font-semibold">{language === 'fi' ? '2–4 hengen mökit & huoneet' : language === 'de' ? '2–4 Pers. Zimmer & Hütten' : '2–4 Person Cabins & Rooms'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-ahkun-border">
                    <span className="text-ahkun-muted">{language === 'fi' ? 'Sähköistys' : language === 'de' ? 'Strom' : 'Electricity'}</span>
                    <span className="font-semibold">{language === 'fi' ? 'Kyllä (lämmitys & valaistus)' : language === 'de' ? 'Ja (Heizung & Licht)' : 'Yes (Heating & Lights)'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-ahkun-border">
                    <span className="text-ahkun-muted">{language === 'fi' ? 'Wi-Fi' : language === 'de' ? 'WLAN' : 'Wi-Fi'}</span>
                    <span className="font-semibold">{language === 'fi' ? 'Saatavilla ravintolassa' : language === 'de' ? 'Im Restaurantbereich' : 'In Restaurant Area'}</span>
                  </div>
                </div>

                <div className="pt-2 space-y-3">
                  <Link
                    to={getLocalizedPath('reservations')}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-ahkun-forest text-ahkun-white text-xs font-medium uppercase tracking-wider hover:bg-ahkun-pine transition-colors shadow-md"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>{UI_TRANSLATIONS.hero.ctaReservation[language]}</span>
                  </Link>

                  <a
                    href={`tel:${BUSINESS_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-ahkun-bg text-ahkun-charcoal border border-ahkun-border text-xs font-medium uppercase tracking-wider hover:bg-ahkun-border transition-colors"
                  >
                    <span>{language === 'fi' ? 'Soita vastaanottoon' : language === 'de' ? 'Rezeption anrufen' : 'Call Reception'}: {BUSINESS_CONFIG.contact.primaryPhone}</span>
                  </a>
                </div>

                <div className="p-3 bg-ahkun-bg rounded-xl border border-ahkun-border text-[11px] text-ahkun-muted leading-relaxed">
                  <Info className="w-3.5 h-3.5 text-ahkun-pine inline mr-1" />
                  <span>
                    {language === 'fi'
                      ? 'Puoli- ja täysihoito saatavilla ravintolastamme. Kysy tarjousta ryhmille ja vaeltajille!'
                      : language === 'de'
                      ? 'Halb- und Vollpension in unserem Restaurant möglich. Angebote für Gruppen auf Anfrage!'
                      : 'Half-board and full-board catering packages available at our restaurant. Group discounts available on request.'}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
