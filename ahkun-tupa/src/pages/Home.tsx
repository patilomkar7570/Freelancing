import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/ui/SectionHeader';
import { VerificationBadge } from '../components/ui/VerificationBadge';
import { BUSINESS_CONFIG, ACCOMMODATIONS, ACTIVITIES, RESTAURANT_DETAILS, UI_TRANSLATIONS } from '../data/contentConfig';
import { 
  CalendarCheck, 
  ArrowRight, 
  Compass, 
  Flame, 
  Waves, 
  Trees, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Coffee,
  Ship,
  ExternalLink,
  Navigation
} from 'lucide-react';

export const Home: React.FC = () => {
  const { language, getLocalizedPath } = useLanguage();

  return (
    <div className="space-y-0">
      
      {/* =========================================================================
          HERO SECTION — Scandinavian Wilderness Editorial
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-ahkun-forest text-ahkun-white pt-12 pb-20">
        
        {/* Layered Background Imagery with Subtle Tone Blend */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop"
            alt="Lemmenjoki river valley and ancient boreal wilderness forest in Finnish Lapland"
            className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ahkun-forest via-ahkun-forest/40 to-transparent" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-ahkun-forest/30 to-ahkun-forest/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 pt-8">
          
          {/* Metadata pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ahkun-white/10 backdrop-blur-md border border-ahkun-white/20 text-[11px] font-mono tracking-[0.2em] uppercase text-ahkun-river">
            <span className="w-1.5 h-1.5 rounded-full bg-ahkun-river animate-pulse" />
            <span>Lemmenjoki · Inari · Finnish Lapland · Est. 1955</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-ahkun-white leading-[1.08]">
              {language === 'fi' && (
                <>
                  Missä joki kohtaa <span className="italic font-serif text-ahkun-river">erämaan</span>
                </>
              )}
              {language === 'en' && (
                <>
                  Where the river meets <span className="italic font-serif text-ahkun-river">the wilderness</span>
                </>
              )}
              {language === 'de' && (
                <>
                  Wo der Fluss die <span className="italic font-serif text-ahkun-river">Wildnis berührt</span>
                </>
              )}
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-ahkun-white/80 font-light leading-relaxed">
              {UI_TRANSLATIONS.hero.subheadline[language]}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to={getLocalizedPath('reservations')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-ahkun-white text-ahkun-forest font-medium text-sm tracking-wider uppercase hover:bg-ahkun-river hover:text-ahkun-forest transition-all duration-300 shadow-xl"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{UI_TRANSLATIONS.hero.ctaReservation[language]}</span>
            </Link>

            <Link
              to={getLocalizedPath('accommodation')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ahkun-forest/60 hover:bg-ahkun-white/15 text-ahkun-white border border-ahkun-white/30 backdrop-blur-sm font-medium text-sm tracking-wider uppercase transition-all duration-300"
            >
              <span>{UI_TRANSLATIONS.hero.ctaExplore[language]}</span>
              <ArrowRight className="w-4 h-4 text-ahkun-river" />
            </Link>
          </div>

          {/* Heritage credentials bar */}
          <div className="pt-8 border-t border-ahkun-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="bg-ahkun-white/5 backdrop-blur-sm p-3.5 rounded-lg border border-ahkun-white/10">
              <span className="block text-[11px] font-mono tracking-widest text-ahkun-river uppercase">
                {language === 'fi' ? 'Perustettu' : language === 'de' ? 'Gegründet' : 'Founded'}
              </span>
              <span className="text-sm font-medium text-ahkun-white">1955 · Juhani & Kirsti</span>
            </div>
            <div className="bg-ahkun-white/5 backdrop-blur-sm p-3.5 rounded-lg border border-ahkun-white/10">
              <span className="block text-[11px] font-mono tracking-widest text-ahkun-river uppercase">
                {language === 'fi' ? 'Jokiveneretket' : language === 'de' ? 'Flussbootstouren' : 'Riverboat Tours'}
              </span>
              <span className="text-sm font-medium text-ahkun-white">20 km · Ravadas Falls</span>
            </div>
            <div className="bg-ahkun-white/5 backdrop-blur-sm p-3.5 rounded-lg border border-ahkun-white/10">
              <span className="block text-[11px] font-mono tracking-widest text-ahkun-river uppercase">
                {language === 'fi' ? 'Kelomökit' : language === 'de' ? 'Kelo-Blockhütten' : 'Kelo Log Cabins'}
              </span>
              <span className="text-sm font-medium text-ahkun-white">
                {language === 'fi' ? 'Joen vastarannalla' : language === 'de' ? 'Anderes Flussufer' : 'Across the River'}
              </span>
            </div>
            <div className="bg-ahkun-white/5 backdrop-blur-sm p-3.5 rounded-lg border border-ahkun-white/10">
              <span className="block text-[11px] font-mono tracking-widest text-ahkun-river uppercase">
                {language === 'fi' ? 'Ravintola' : language === 'de' ? 'Restaurant' : 'Restaurant'}
              </span>
              <span className="text-sm font-medium text-ahkun-white">75 {language === 'fi' ? 'paikkaa · A-oikeudet' : language === 'de' ? 'Plätze · Lizenz' : 'Seats · Full License'}</span>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          HERITAGE & INTRODUCTION — The First Sámi Tourism Enterprise in Lemmenjoki
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-ahkun-bg text-ahkun-charcoal border-b border-ahkun-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-ahkun-pine uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {language === 'fi' ? 'Saamelainen vieraanvaraisuusperinne vuodesta 1955' : language === 'de' ? 'Saamische Gastfreundschaftstradition seit 1955' : 'Sámi Hospitality Heritage Since 1955'}
                </span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-ahkun-charcoal leading-[1.15]">
                {language === 'fi' && (
                  <>Aitoa rauhaa Lemmenjoen rannalla <span className="italic text-ahkun-forest">sukupolvien ajan</span>.</>
                )}
                {language === 'en' && (
                  <>Authentic wilderness tranquility on the Lemmenjoki <span className="italic text-ahkun-forest">across generations</span>.</>
                )}
                {language === 'de' && (
                  <>Echte Wildnisruhe am Ufer des Lemmenjoki <span className="italic text-ahkun-forest">über Generationen</span>.</>
                )}
              </h2>

              <p className="text-base sm:text-lg text-ahkun-muted leading-relaxed font-light">
                {BUSINESS_CONFIG.heritageNote[language]}
              </p>

              <p className="text-sm sm:text-base text-ahkun-muted leading-relaxed">
                {language === 'fi' && (
                  <>
                    Lemmenjoen suurin kansallispuisto alkaa aivan Ahkun Tuvan pihapiiristä. Täällä voit irtautua arjen kiireistä perinteisissä kelomökeissä joen toisella puolella, astua perinteiseen puiseen jokiveneeseen matkalla Ravadaksen mahtaville kuohuille, tai maistaa aitoja lapin makuja 75-paikkaisessa ravintolassamme.
                  </>
                )}
                {language === 'en' && (
                  <>
                    Finland’s largest national park begins right at Ahkun Tupa’s front door in Njurgulahti. Step away from everyday noise in authentic kelo log cabins across the river, embark on traditional wooden riverboat cruises up the canyon to foaming Ravadas Falls, or taste wild Lapland fare in our 75-seat panoramic restaurant.
                  </>
                )}
                {language === 'de' && (
                  <>
                    Finnlands größter Nationalpark beginnt direkt vor unserer Haustür in Njurgulahti. Genießen Sie die Ruhe in traditionellen Kelo-Blockhütten am anderen Flussufer, unternehmen Sie Holzbootfahrten durch die Schlucht zu den tosenden Ravadas-Fällen oder probieren Sie traditionelle Gerichte in unserem Restaurant.
                  </>
                )}
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  to={getLocalizedPath('experiences')}
                  className="inline-flex items-center gap-2 text-sm font-medium text-ahkun-forest uppercase tracking-wider hover:text-ahkun-pine transition-colors group"
                >
                  <span>{UI_TRANSLATIONS.nav.allExperiences[language]}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <span className="text-ahkun-border">|</span>

                <a 
                  href={BUSINESS_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ahkun-muted hover:text-ahkun-charcoal"
                >
                  <MapPin className="w-3.5 h-3.5 text-ahkun-forest" />
                  <span>{UI_TRANSLATIONS.common.openInGoogleMaps[language]}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-ahkun-border">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop"
                  alt="Traditional wooden riverboat on pristine Lemmenjoki waters"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ahkun-forest/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-ahkun-white space-y-1">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-ahkun-river">
                    Nuoli-jokivene · Lemmenjoki
                  </span>
                  <h4 className="font-serif text-xl font-normal">
                    {language === 'fi' ? 'Jokiveneretket Ravadas-putouksille' : language === 'de' ? 'Flussbootfahrten zu den Ravadas-Fällen' : 'Riverboat Journeys to Ravadas Falls'}
                  </h4>
                  <p className="text-xs text-ahkun-white/80">
                    {language === 'fi' ? '20 km kanjonissa pauhaaville putouksille' : language === 'de' ? '20 km durch den Felscanyon zu den Wasserfällen' : '20 km canyon cruise to thunderous cascades'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          ACCOMMODATION SHOWCASE — 3 Authentic Stay Categories
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-ahkun-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeader
              tag={language === 'fi' ? 'Majoitusvaihtoehdot' : language === 'de' ? 'Unterkünfte' : 'Wilderness Accommodation'}
              title={language === 'fi' ? 'Valitse majoituksesi' : language === 'de' ? 'Wählen Sie Ihren Aufenthalt' : 'Choose Your Stay'}
              italicWord={language === 'fi' ? 'joen rannalla' : language === 'de' ? 'am Flussufer' : 'by the river'}
              description={language === 'fi' 
                ? 'Erämaan kelomökeistä joen vastarannalla sähköistettyihin rantamökkeihin ja luonnonkauniiseen leirintään.' 
                : language === 'de' 
                ? 'Von urigen Kelo-Hütten am anderen Ufer bis zu beheizten Hütten und naturnahem Ufercamping.' 
                : 'From off-grid kelo log cabins across the river to heated courtyard cabins and scenic riverbank camping.'}
            />

            <Link
              to={getLocalizedPath('accommodation')}
              className="inline-flex items-center gap-2 text-sm font-medium text-ahkun-forest uppercase tracking-wider hover:text-ahkun-pine transition-colors group shrink-0"
            >
              <span>{UI_TRANSLATIONS.nav.allAccommodation[language]}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACCOMMODATIONS.map((unit) => {
              const subpath = unit.category === 'kelo-cabins' ? 'accommodation/kelo-cabins' : unit.category === 'riverside-cabins' ? 'accommodation/riverside-cabins' : 'accommodation/camping';

              return (
                <div 
                  key={unit.id}
                  className="group bg-ahkun-bg rounded-2xl overflow-hidden border border-ahkun-border flex flex-col transition-all duration-300 hover:shadow-xl hover:border-ahkun-timber/50"
                >
                  {/* Image container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={unit.images.hero}
                      alt={unit.images.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-ahkun-forest/80 backdrop-blur-md text-ahkun-white text-[11px] font-mono tracking-wider uppercase">
                        {unit.badge[language]}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-serif text-2xl font-normal text-ahkun-charcoal group-hover:text-ahkun-forest transition-colors">
                        {unit.name[language]}
                      </h3>
                      
                      <p className="text-xs font-mono uppercase tracking-wider text-ahkun-timber">
                        {unit.subtitle[language]}
                      </p>

                      <p className="text-sm text-ahkun-muted line-clamp-3 leading-relaxed">
                        {unit.description[language]}
                      </p>
                    </div>

                    {/* Verified Features checklist */}
                    <div className="space-y-2 pt-4 border-t border-ahkun-border">
                      {unit.verifiedAmenities[language].slice(0, 3).map((amenity, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-ahkun-charcoal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-ahkun-pine shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>

                    {/* Rate note and Link CTA */}
                    <div className="pt-4 border-t border-ahkun-border space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-ahkun-muted">
                        <VerificationBadge status={unit.verificationStatus} />
                        <span className="text-[11px]">{UI_TRANSLATIONS.common.contactForRates[language]}</span>
                      </div>

                      <Link
                        to={getLocalizedPath(subpath)}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-ahkun-forest text-ahkun-white text-xs font-medium tracking-wider uppercase hover:bg-ahkun-pine transition-colors"
                      >
                        <span>{language === 'fi' ? 'Katso tiedot & varaa' : language === 'de' ? 'Details & Anfragen' : 'View Details & Book'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          FEATURED EXPERIENCES — Riverboat, Gold Panning, Hiking
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-ahkun-forest text-ahkun-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeader
              dark
              tag={language === 'fi' ? 'Elämykset & Luonto' : language === 'de' ? 'Erlebnisse & Natur' : 'River & Nature Experiences'}
              title={language === 'fi' ? 'Lemmenjoen legendaariset' : language === 'de' ? 'Legendäre Abenteuer im' : 'Legendary Adventures in'}
              italicWord={language === 'fi' ? 'retket ja perinteet' : language === 'de' ? 'Lemmenjoki' : 'Lemmenjoki'}
              description={language === 'fi'
                ? 'Jokiveneretket Ravadas-putouksille, aito kullanhuuhdonta, kansallispuiston polut ja talvinen hiljaisuus.'
                : language === 'de'
                ? 'Flussbootfahrten zu den Ravadas-Fällen, echtes Goldwaschen, Wanderwege und arktische Winterstille.'
                : 'Riverboat tours to Ravadas Falls, genuine gold panning on historic claims, fell hiking, and winter peace.'}
            />

            <Link
              to={getLocalizedPath('experiences')}
              className="inline-flex items-center gap-2 text-sm font-medium text-ahkun-river uppercase tracking-wider hover:text-ahkun-white transition-colors group shrink-0"
            >
              <span>{UI_TRANSLATIONS.nav.allExperiences[language]}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACTIVITIES.slice(0, 3).map((act) => (
              <div 
                key={act.id}
                className="bg-ahkun-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-ahkun-white/10 flex flex-col group hover:bg-ahkun-white/10 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={act.image}
                    alt={act.title[language]}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-ahkun-charcoal/70 backdrop-blur-md text-ahkun-white text-[10px] font-mono tracking-widest uppercase">
                      {act.category}
                    </span>
                  </div>
                  {act.duration && (
                    <div className="absolute bottom-4 right-4 bg-ahkun-forest/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-ahkun-white border border-ahkun-white/20">
                      {act.duration[language]}
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-normal text-ahkun-white">
                      {act.title[language]}
                    </h3>
                    <p className="text-sm text-ahkun-white/70 leading-relaxed font-light">
                      {act.summary[language]}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-ahkun-white/10">
                    {act.verifiedInclusions[language].slice(0, 3).map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-ahkun-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-ahkun-river shrink-0" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-ahkun-white/10">
                    <Link
                      to={getLocalizedPath('experiences')}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ahkun-river hover:text-ahkun-white transition-colors"
                    >
                      <span>{language === 'fi' ? 'Lue retkiohjelma' : language === 'de' ? 'Tourenprogramm ansehen' : 'Explore Full Program'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          RESTAURANT & CAFÉ HIGHLIGHT — 75-Seat Lappish Cuisine
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-ahkun-bg border-b border-ahkun-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual on the Left */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-ahkun-border">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1400&auto=format&fit=crop"
                  alt="Ahkun Tupa restaurant courtyard and timber lodge"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-ahkun-forest/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono text-ahkun-white uppercase tracking-wider">
                  75 {language === 'fi' ? 'Asiakaspaikkaa · A-Oikeudet' : language === 'de' ? 'Sitzplätze · Volle Schanklizenz' : 'Seats · Fully Licensed'}
                </div>
              </div>
            </div>

            {/* Narrative on the Right */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-ahkun-pine uppercase">
                <Coffee className="w-3.5 h-3.5" />
                <span>{UI_TRANSLATIONS.nav.restaurant[language]}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-ahkun-charcoal leading-[1.15]">
                {language === 'fi' && (
                  <>Aitoja Lapin makuja ja <span className="italic text-ahkun-forest">panoraamajokinäkymä</span>.</>
                )}
                {language === 'en' && (
                  <>Lappish delicacies and <span className="italic text-ahkun-forest">panoramic river views</span>.</>
                )}
                {language === 'de' && (
                  <>Lappländische Spezialitäten und <span className="italic text-ahkun-forest">weiter Flussblick</span>.</>
                )}
              </h2>

              <p className="text-base text-ahkun-muted leading-relaxed font-light">
                {RESTAURANT_DETAILS.description[language]}
              </p>

              {/* Specialties List */}
              <div className="space-y-2.5 pt-2">
                {RESTAURANT_DETAILS.specialties[language].map((spec, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-ahkun-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-ahkun-forest mt-0.5 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  to={getLocalizedPath('restaurant')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ahkun-forest text-ahkun-white text-xs font-medium uppercase tracking-wider hover:bg-ahkun-pine transition-colors"
                >
                  <span>{language === 'fi' ? 'Tutustu ravintolaan & menuihin' : language === 'de' ? 'Restaurant & Menü entdecken' : 'Explore Restaurant & Menus'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <p className="text-xs font-mono text-ahkun-muted">
                  {RESTAURANT_DETAILS.provisionsNote[language]}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          LOCATION & ACCESSIBILITY — Dual Google & Apple Maps Buttons
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-ahkun-white text-ahkun-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <SectionHeader
            align="center"
            tag={language === 'fi' ? 'Sijainti & Saapuminen' : language === 'de' ? 'Anreise & Lage' : 'Location & Arrival'}
            title={language === 'fi' ? 'Miten löydät' : language === 'de' ? 'So erreichen Sie' : 'How to Reach'}
            italicWord={language === 'fi' ? 'Ahkun Tuvalle' : language === 'de' ? 'Ahkun Tupa' : 'Ahkun Tupa'}
            description={language === 'fi'
              ? 'Lemmenjoentie 1030, 99870 Inari. Linja-auton päätepysäkki sijaitsee suoraan pihassamme.'
              : language === 'de'
              ? 'Lemmenjoentie 1030, 99870 Inari. Die Bushaltestelle liegt direkt in unserem Hof.'
              : 'Lemmenjoentie 1030, 99870 Inari. The public bus terminus is located directly in our courtyard.'}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Distances & Details */}
            <div className="lg:col-span-7 bg-ahkun-bg rounded-2xl p-8 border border-ahkun-border flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-ahkun-border pb-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-ahkun-timber">
                      {language === 'fi' ? 'Virallinen osoite' : language === 'de' ? 'Offizielle Adresse' : 'Official Address'}
                    </span>
                    <h4 className="font-serif text-xl font-normal text-ahkun-charcoal">
                      {BUSINESS_CONFIG.location.address}, {BUSINESS_CONFIG.location.postalCode} {BUSINESS_CONFIG.location.municipality}
                    </h4>
                    <p className="text-xs text-ahkun-muted">
                      {BUSINESS_CONFIG.location.village} · {BUSINESS_CONFIG.location.region}, {BUSINESS_CONFIG.location.country}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono uppercase tracking-widest text-ahkun-timber">
                      {language === 'fi' ? 'Koordinaatit' : language === 'de' ? 'Koordinaten' : 'Coordinates'}
                    </span>
                    <p className="font-mono text-xs text-ahkun-charcoal">
                      {BUSINESS_CONFIG.location.coordinates.lat}° N, {BUSINESS_CONFIG.location.coordinates.lng}° E
                    </p>
                  </div>
                </div>

                {/* Distances Table */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-ahkun-pine block">
                    {language === 'fi' ? 'Etäisyydet ja yhteydet' : language === 'de' ? 'Entfernungen & Anbindung' : 'Distances & Connections'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {BUSINESS_CONFIG.distances.map((d, i) => (
                      <div key={i} className="p-3 bg-ahkun-white rounded-xl border border-ahkun-border flex items-center justify-between">
                        <div>
                          <span className="block text-xs font-medium text-ahkun-charcoal">{d.destination[language]}</span>
                          <span className="text-[11px] text-ahkun-muted">{d.note[language]}</span>
                        </div>
                        <span className="font-mono text-xs font-semibold text-ahkun-forest">{d.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dual Maps CTA Buttons */}
              <div className="pt-6 border-t border-ahkun-border space-y-3">
                <span className="block text-xs font-mono uppercase tracking-wider text-ahkun-muted">
                  {language === 'fi' ? 'Navigoi perille suoraan suosikkisovelluksellasi:' : language === 'de' ? 'Navigieren Sie direkt mit Ihrer bevorzugten Karten-App:' : 'Navigate directly using your preferred maps service:'}
                </span>

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Google Maps Button */}
                  <a
                    href={BUSINESS_CONFIG.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-ahkun-forest text-ahkun-white font-medium text-xs tracking-wider uppercase hover:bg-ahkun-pine transition-all shadow-md group"
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
                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-ahkun-white text-ahkun-charcoal border border-ahkun-border font-medium text-xs tracking-wider uppercase hover:bg-ahkun-bg hover:border-ahkun-charcoal transition-all shadow-sm group"
                  >
                    <Navigation className="w-4 h-4 text-ahkun-forest group-hover:scale-110 transition-transform" />
                    <span>{UI_TRANSLATIONS.common.openInAppleMaps[language]}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>
            </div>

            {/* Visual map preview card */}
            <div className="lg:col-span-5 bg-ahkun-forest text-ahkun-white rounded-2xl p-8 flex flex-col justify-between space-y-8 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ahkun-white/10 text-[11px] font-mono tracking-widest uppercase text-ahkun-river border border-ahkun-white/20">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Lemmenjoki Gate</span>
                </div>
                
                <h3 className="font-serif text-3xl font-normal leading-snug">
                  {language === 'fi' 
                    ? 'Kansallispuiston portti suoraan pihasta' 
                    : language === 'de' 
                    ? 'Das Tor zum Nationalpark direkt im Hof' 
                    : 'The Gate to the National Park in our Courtyard'}
                </h3>

                <p className="text-sm text-ahkun-white/80 font-light leading-relaxed">
                  {language === 'fi'
                    ? 'Ahkun Tupa sijaitsee Lemmenjoen tien päätepisteessä Njurgurlahdessa. Täältä alkavat merkityt luonto- ja tunturipolut sekä säännöllinen jokiveneliikenne.'
                    : language === 'de'
                    ? 'Ahkun Tupa liegt am Endpunkt der Lemmenjoki-Straße in Njurgulahti. Hier starten Wanderpfade und die Flussbootfahrten.'
                    : 'Ahkun Tupa is situated at the terminus of the Lemmenjoki road in Njurgulahti. Marked wilderness trails and riverboats depart directly from here.'}
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-ahkun-white/15 flex items-center justify-between">
                <div>
                  <span className="block text-[11px] font-mono tracking-widest text-ahkun-river uppercase">
                    {language === 'fi' ? 'Puhelintiedustelut' : language === 'de' ? 'Telefonkontakt' : 'Telephone Direct'}
                  </span>
                  <a href={`tel:${BUSINESS_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`} className="font-serif text-lg text-ahkun-white hover:text-ahkun-river transition-colors">
                    {BUSINESS_CONFIG.contact.primaryPhone}
                  </a>
                </div>

                <Link
                  to={getLocalizedPath('location')}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ahkun-river hover:text-ahkun-white transition-colors"
                >
                  <span>{language === 'fi' ? 'Tarkat ajo-ohjeet' : language === 'de' ? 'Anfahrtsdetails' : 'Full Directions'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          RESERVATION CTA BANNER — Serene Nordic Final Call
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-ahkun-forest text-ahkun-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop"
            alt="Pristine boreal pine trees"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="inline-block text-xs font-mono tracking-[0.25em] text-ahkun-river uppercase">
            {language === 'fi' ? 'Tervetuloa Lemmenjoelle' : language === 'de' ? 'Willkommen in Lemmenjoki' : 'Welcome to Lemmenjoki'}
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-ahkun-white leading-tight">
            {language === 'fi' && (
              <>Koe aito erämaa ja <span className="italic text-ahkun-river">saamelainen perinne</span>.</>
            )}
            {language === 'en' && (
              <>Experience the authentic wilderness and <span className="italic text-ahkun-river">Sámi heritage</span>.</>
            )}
            {language === 'de' && (
              <>Erleben Sie die echte Wildnis und <span className="italic text-ahkun-river">saamische Tradition</span>.</>
            )}
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-ahkun-white/80 font-light leading-relaxed">
            {language === 'fi'
              ? 'Lähetä varauskysely mökeistä, jokiveneretkistä tai ryhmäruokailuista. Vastaamme kyselyysi henkilökohtaisesti.'
              : language === 'de'
              ? 'Senden Sie Ihre Buchungsanfrage für Hütten, Flussbootstouren oder Bewirtung. Wir antworten Ihnen persönlich.'
              : 'Submit a reservation enquiry for cabins, riverboat excursions, or catering packages. We reply to each enquiry personally.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to={getLocalizedPath('reservations')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-ahkun-white text-ahkun-forest font-medium text-sm tracking-wider uppercase hover:bg-ahkun-river transition-all duration-300 shadow-xl"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{UI_TRANSLATIONS.hero.ctaReservation[language]}</span>
            </Link>

            <Link
              to={getLocalizedPath('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-ahkun-white/10 hover:bg-ahkun-white/20 text-ahkun-white border border-ahkun-white/20 font-medium text-sm tracking-wider uppercase transition-all duration-300"
            >
              <span>{UI_TRANSLATIONS.nav.contact[language]}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-8 border-t border-ahkun-white/10 flex items-center justify-center gap-2 text-xs font-mono text-ahkun-white/60">
            <ShieldCheck className="w-3.5 h-3.5 text-ahkun-river" />
            <span>{BUSINESS_CONFIG.conceptNotice.agency} · {language === 'fi' ? 'Itsenäinen verkkosivustokonsepti' : language === 'de' ? 'Unabhängiges Redesign-Konzept' : 'Independent Website Redesign Concept'}</span>
          </div>
        </div>
      </section>

    </div>
  );
};
