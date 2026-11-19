import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/ui/SectionHeader';
import { BUSINESS_CONFIG, UI_TRANSLATIONS } from '../data/contentConfig';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Bus, 
  Plane, 
  Car, 
  Compass, 
  CheckCircle2, 
  Phone, 
  Mail,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const LocationTravel: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-0">
      
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-ahkun-forest text-ahkun-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop"
            alt="Lapland wilderness landscape"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ahkun-white/10 backdrop-blur-md border border-ahkun-white/20 text-[11px] font-mono tracking-[0.2em] uppercase text-ahkun-river">
            <MapPin className="w-3.5 h-3.5" />
            <span>{UI_TRANSLATIONS.nav.location[language]}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-ahkun-white">
            {language === 'fi' && (
              <>Sijainti & Saapuminen <span className="italic text-ahkun-river">Ahkun Tuvalle</span></>
            )}
            {language === 'en' && (
              <>Location & Travel to <span className="italic text-ahkun-river">Ahkun Tupa</span></>
            )}
            {language === 'de' && (
              <>Anreise & Lage von <span className="italic text-ahkun-river">Ahkun Tupa</span></>
            )}
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-ahkun-white/80 font-light leading-relaxed">
            {language === 'fi'
              ? 'Lemmenjoentie 1030, 99870 Inari. Sijaitsemme Lemmenjoen kansallispuiston portilla, ja linja-auton päätepysäkki on suoraan pihassamme.'
              : language === 'de'
              ? 'Lemmenjoentie 1030, 99870 Inari. Wir liegen direkt am Tor zum Nationalpark Lemmenjoki mit Bushaltestelle im Hof.'
              : 'Lemmenjoentie 1030, 99870 Inari. Located at the gate of Lemmenjoki National Park with public bus terminus directly in our courtyard.'}
          </p>
        </div>
      </section>

      {/* Interactive Map & Dual CTA Section */}
      <section className="py-16 lg:py-24 bg-ahkun-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Address & Dual Map Links Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Address & Navigation Details */}
            <div className="lg:col-span-7 bg-ahkun-white p-8 sm:p-10 rounded-3xl border border-ahkun-border shadow-sm flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-ahkun-border pb-6 gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-ahkun-timber">
                      {language === 'fi' ? 'Käyntiosoite' : language === 'de' ? 'Besuchsadresse' : 'Street Address'}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-normal text-ahkun-charcoal">
                      {BUSINESS_CONFIG.location.address}
                    </h2>
                    <p className="text-sm text-ahkun-muted">
                      {BUSINESS_CONFIG.location.postalCode} {BUSINESS_CONFIG.location.village}, {BUSINESS_CONFIG.location.municipality} · {BUSINESS_CONFIG.location.region}, {BUSINESS_CONFIG.location.country}
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <span className="text-xs font-mono uppercase tracking-widest text-ahkun-timber block">
                      {language === 'fi' ? 'GPS-Koordinaatit' : language === 'de' ? 'GPS-Koordinaten' : 'GPS Coordinates'}
                    </span>
                    <p className="font-mono text-xs font-medium text-ahkun-forest">
                      {BUSINESS_CONFIG.location.coordinates.lat}° N, {BUSINESS_CONFIG.location.coordinates.lng}° E
                    </p>
                  </div>
                </div>

                {/* Narrative directions */}
                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-normal text-ahkun-charcoal">
                    {language === 'fi' ? 'Ajo-ohjeet autolla:' : language === 'de' ? 'Anfahrt mit dem Pkw:' : 'Driving Directions:'}
                  </h3>
                  <p className="text-sm text-ahkun-muted leading-relaxed font-light">
                    {language === 'fi' && (
                      <>
                        Inarin kirkonkylästä (valtatie 4 / E75) käännytään Kittilän suuntaan tielle 955. Noin 10 km ajon jälkeen käännytään opasteiden mukaisesti oikealle Lemmenjoentielle (tie 9553), jota ajetaan noin 35 km aina tien päätepisteeseen Njurgulahteen saakka. Ahkun Tupa sijaitsee suoraan tien päässä jokirannassa.
                      </>
                    )}
                    {language === 'en' && (
                      <>
                        From Inari village (highway E75), turn southwest towards Kittilä onto road 955. After approximately 10 km, follow the signs turning right onto Lemmenjoentie (road 9553) and continue for 35 km until the road ends at Njurgulahti. Ahkun Tupa is located right at the terminus along the riverbank.
                      </>
                    )}
                    {language === 'de' && (
                      <>
                        Vom Dorf Inari (E75) biegen Sie Richtung Kittilä auf die Straße 955 ab. Nach ca. 10 km folgen Sie den Schildern nach rechts auf die Lemmenjoentie (Straße 9553) für ca. 35 km bis zum Straßenende in Njurgulahti. Ahkun Tupa liegt direkt am Ende der Straße.
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* DUAL MAPS BUTTONS */}
              <div className="pt-6 border-t border-ahkun-border space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-ahkun-pine block font-medium">
                  {language === 'fi' ? 'Avaa kartalla ja aloita navigointi:' : language === 'de' ? 'In der Karten-App öffnen und Route planen:' : 'Open in Maps & Start Navigation:'}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Google Maps Button */}
                  <a
                    href={BUSINESS_CONFIG.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-ahkun-forest text-ahkun-white font-medium text-xs tracking-wider uppercase hover:bg-ahkun-pine transition-all shadow-md group"
                  >
                    <MapPin className="w-4 h-4 text-ahkun-river group-hover:scale-110 transition-transform" />
                    <span>{UI_TRANSLATIONS.common.openInGoogleMaps[language]}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>

                  {/* Apple Maps Button */}
                  <a
                    href={BUSINESS_CONFIG.location.appleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-ahkun-white text-ahkun-charcoal border border-ahkun-border font-medium text-xs tracking-wider uppercase hover:bg-ahkun-bg hover:border-ahkun-charcoal transition-all shadow-sm group"
                  >
                    <Navigation className="w-4 h-4 text-ahkun-forest group-hover:scale-110 transition-transform" />
                    <span>{UI_TRANSLATIONS.common.openInAppleMaps[language]}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>
            </div>

            {/* Travel modes & distances breakdown */}
            <div className="lg:col-span-5 bg-ahkun-forest text-ahkun-white p-8 sm:p-10 rounded-3xl flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-ahkun-river">
                    {language === 'fi' ? 'Yhteydet & Julkinen liikenne' : language === 'de' ? 'Öffentliche Verkehrsmittel' : 'Public Transport & Distances'}
                  </span>
                  <h3 className="font-serif text-2xl font-normal">
                    {language === 'fi' ? 'Päätepysäkki pihassamme' : language === 'de' ? 'Bushaltestelle direkt im Hof' : 'Bus Terminus in Our Courtyard'}
                  </h3>
                  <p className="text-xs sm:text-sm text-ahkun-white/80 font-light leading-relaxed">
                    {language === 'fi'
                      ? 'Reittilinja-auto Inarista saapuu säännöllisesti suoraan Ahkun Tuvan pihaan (0 m). Myös polkujen lähtöportti on 10 metrin päässä.'
                      : language === 'de'
                      ? 'Der Linienbus aus Inari hält direkt auf dem Hof von Ahkun Tupa (0 m). Der Einstieg in die Wanderwege ist 10 m entfernt.'
                      : 'Scheduled regional buses from Inari arrive directly at Ahkun Tupa courtyard (0 m). The national park trail gate is 10 m away.'}
                  </p>
                </div>

                {/* Distances List */}
                <div className="space-y-2.5 pt-2">
                  {BUSINESS_CONFIG.distances.map((d, i) => (
                    <div key={i} className="p-3 bg-ahkun-white/10 rounded-xl border border-ahkun-white/10 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-medium text-ahkun-white block">{d.destination[language]}</span>
                        <span className="text-[11px] text-ahkun-white/70">{d.note[language]}</span>
                      </div>
                      <span className="font-mono font-semibold text-ahkun-river">{d.distance}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Phone Assistance */}
              <div className="pt-6 border-t border-ahkun-white/15 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-ahkun-river uppercase block">
                    {language === 'fi' ? 'Kysy saapumisesta' : language === 'de' ? 'Anreisefragen' : 'Travel Inquiries'}
                  </span>
                  <a href={`tel:${BUSINESS_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`} className="font-serif text-lg text-ahkun-white hover:text-ahkun-river transition-colors">
                    {BUSINESS_CONFIG.contact.primaryPhone}
                  </a>
                </div>

                <a 
                  href={BUSINESS_CONFIG.location.officialWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ahkun-river hover:text-ahkun-white"
                >
                  <span>{UI_TRANSLATIONS.common.officialWebsite[language]}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
