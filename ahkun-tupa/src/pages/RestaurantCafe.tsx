import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/ui/SectionHeader';
import { RESTAURANT_DETAILS, BUSINESS_CONFIG, UI_TRANSLATIONS } from '../data/contentConfig';
import { 
  Coffee, 
  CheckCircle2, 
  CalendarCheck, 
  ArrowRight, 
  Sparkles, 
  Users, 
  Wine, 
  UtensilsCrossed,
  Info
} from 'lucide-react';

export const RestaurantCafe: React.FC = () => {
  const { language, getLocalizedPath } = useLanguage();

  return (
    <div className="space-y-0">
      
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-ahkun-forest text-ahkun-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop"
            alt="Lappish restaurant and timber lodge overlooking river"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ahkun-white/10 backdrop-blur-md border border-ahkun-white/20 text-[11px] font-mono tracking-[0.2em] uppercase text-ahkun-river">
            <Coffee className="w-3.5 h-3.5" />
            <span>{UI_TRANSLATIONS.nav.restaurant[language]}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-ahkun-white">
            {language === 'fi' && (
              <>Kahvila-Ravintola <span className="italic text-ahkun-river">Ahkun Tupa</span></>
            )}
            {language === 'en' && (
              <>Café & Restaurant <span className="italic text-ahkun-river">Ahkun Tupa</span></>
            )}
            {language === 'de' && (
              <>Café & Restaurant <span className="italic text-ahkun-river">Ahkun Tupa</span></>
            )}
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-ahkun-white/80 font-light leading-relaxed">
            {RESTAURANT_DETAILS.headline[language]}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 lg:py-24 bg-ahkun-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-ahkun-pine block">
                  {language === 'fi' ? 'Perinteikäs ruokailupaikka vuodesta 1955' : language === 'de' ? 'Traditionelle Gastlichkeit seit 1955' : 'Tradition of Wilderness Hospitality Since 1955'}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ahkun-charcoal leading-tight">
                  {language === 'fi' && (
                    <>Lapin aitoja herkkuja ja <span className="italic text-ahkun-forest">avara jokimaisema</span></>
                  )}
                  {language === 'en' && (
                    <>Lappish delicacies with an <span className="italic text-ahkun-forest">expansive river view</span></>
                  )}
                  {language === 'de' && (
                    <>Lappländische Spezialitäten mit <span className="italic text-ahkun-forest">weitem Flussblick</span></>
                  )}
                </h2>

                <p className="text-base text-ahkun-muted leading-relaxed font-light">
                  {RESTAURANT_DETAILS.description[language]}
                </p>
              </div>

              {/* Badges / Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-ahkun-white rounded-2xl border border-ahkun-border flex items-center gap-3">
                  <Users className="w-5 h-5 text-ahkun-forest shrink-0" />
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-ahkun-timber">
                      {language === 'fi' ? 'Kapasiteetti' : language === 'de' ? 'Kapazität' : 'Capacity'}
                    </span>
                    <span className="text-sm font-semibold text-ahkun-charcoal">{RESTAURANT_DETAILS.capacity} {language === 'fi' ? 'paikkaa' : language === 'de' ? 'Plätze' : 'Seats'}</span>
                  </div>
                </div>

                <div className="p-4 bg-ahkun-white rounded-2xl border border-ahkun-border flex items-center gap-3">
                  <Wine className="w-5 h-5 text-ahkun-forest shrink-0" />
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-ahkun-timber">
                      {language === 'fi' ? 'Anniskelu' : language === 'de' ? 'Lizenz' : 'License'}
                    </span>
                    <span className="text-sm font-semibold text-ahkun-charcoal">A-Oikeudet</span>
                  </div>
                </div>

                <div className="p-4 bg-ahkun-white rounded-2xl border border-ahkun-border flex items-center gap-3">
                  <UtensilsCrossed className="w-5 h-5 text-ahkun-forest shrink-0" />
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-ahkun-timber">
                      {language === 'fi' ? 'Ateriapaketit' : language === 'de' ? 'Verpflegung' : 'Catering'}
                    </span>
                    <span className="text-sm font-semibold text-ahkun-charcoal">{language === 'fi' ? 'Aamiainen / Täysihoito' : language === 'de' ? 'Halb- & Vollpension' : 'Half / Full Board'}</span>
                  </div>
                </div>
              </div>

              {/* Specialties List */}
              <div className="bg-ahkun-white p-6 sm:p-8 rounded-3xl border border-ahkun-border space-y-4 shadow-sm">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-ahkun-charcoal">
                  {language === 'fi' ? 'Keittiömme suosikkeja:' : language === 'de' ? 'Spezialitäten unserer Küche:' : 'Kitchen Specialties & Classics:'}
                </h3>

                <div className="space-y-3">
                  {RESTAURANT_DETAILS.specialties[language].map((spec, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-ahkun-charcoal">
                      <CheckCircle2 className="w-4 h-4 text-ahkun-forest mt-0.5 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group catering CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to={getLocalizedPath('reservations')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ahkun-forest text-ahkun-white text-xs font-medium uppercase tracking-wider hover:bg-ahkun-pine transition-colors shadow-sm"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>{language === 'fi' ? 'Tilaa ryhmäruokailu' : language === 'de' ? 'Gruppenbewirtung anfragen' : 'Book Group Catering'}</span>
                </Link>

                <p className="text-xs font-mono text-ahkun-muted">
                  {RESTAURANT_DETAILS.provisionsNote[language]}
                </p>
              </div>
            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl overflow-hidden border border-ahkun-border shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
                  alt="Ahkun Tupa café restaurant dining room and river view"
                  className="w-full h-[480px] object-cover"
                />
              </div>

              <div className="bg-ahkun-white p-6 rounded-2xl border border-ahkun-border space-y-3 text-xs text-ahkun-muted">
                <span className="font-mono uppercase tracking-widest text-ahkun-timber block font-medium">
                  {language === 'fi' ? 'Aukiolo & Ryhmät' : language === 'de' ? 'Öffnungszeiten & Gruppen' : 'Operating Hours & Groups'}
                </span>
                <p>
                  {language === 'fi'
                    ? 'Ravintolamme palvelee majoittuvia asiakkaita, päiväretkeilijöitä sekä tilausryhmiä. Sesongin ulkopuolella ja talvikaudella avaamme ruokailut ryhmille ennakkotilauksesta.'
                    : language === 'de'
                    ? 'Unser Restaurant empfängt Übernachtungsgäste, Tageswanderer und Reisegruppen. Außerhalb der Sommersaison öffnen wir für Gruppen auf Vorbestellung.'
                    : 'Our restaurant welcomes overnight guests, day hikers, and pre-booked tour groups. Outside peak summer season, catering is prepared by advance reservation.'}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
