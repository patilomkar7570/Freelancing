import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ACTIVITIES, BUSINESS_CONFIG, UI_TRANSLATIONS } from '../data/contentConfig';
import { 
  CheckCircle2, 
  ArrowRight, 
  CalendarCheck, 
  Compass, 
  Waves, 
  Flame, 
  Sparkles, 
  Ship,
  Clock,
  Calendar,
  ShieldCheck
} from 'lucide-react';

export const ExperiencesOverview: React.FC = () => {
  const { language, getLocalizedPath } = useLanguage();

  return (
    <div className="space-y-0">
      
      {/* Editorial Header */}
      <section className="relative py-20 lg:py-28 bg-ahkun-forest text-ahkun-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000&auto=format&fit=crop"
            alt="Riverboat cruising through Lemmenjoki canyon"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ahkun-white/10 backdrop-blur-md border border-ahkun-white/20 text-[11px] font-mono tracking-[0.2em] uppercase text-ahkun-river">
            <Compass className="w-3.5 h-3.5" />
            <span>{UI_TRANSLATIONS.nav.experiences[language]}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-ahkun-white">
            {language === 'fi' && (
              <>Joki- ja luontoelämykset <span className="italic text-ahkun-river">Lemmenjoella</span></>
            )}
            {language === 'en' && (
              <>River & Nature Experiences on the <span className="italic text-ahkun-river">Lemmenjoki</span></>
            )}
            {language === 'de' && (
              <>Fluss- und Naturerlebnisse am <span className="italic text-ahkun-river">Lemmenjoki</span></>
            )}
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-ahkun-white/80 font-light leading-relaxed">
            {language === 'fi'
              ? 'Koe legendaariset jokiveneretket Ravadas-putouksille, aito kullanhuuhdonta kultamailla, patikointi Suomen suurimmassa kansallispuistossa ja arktinen hiljaisuus.'
              : language === 'de'
              ? 'Erleben Sie legendäre Holzbootfahrten zu den Ravadas-Fällen, echtes Goldwaschen, Wanderungen im größten Nationalpark Finnlands und arktische Ruhe.'
              : 'Experience legendary wooden riverboat cruises to Ravadas Falls, authentic gold panning on historic claims, hikes into Finland’s largest national park, and Arctic stillness.'}
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 lg:py-24 bg-ahkun-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="space-y-16">
            {ACTIVITIES.map((activity, index) => {
              const isReversed = index % 2 === 1;

              return (
                <div 
                  key={activity.id}
                  className="bg-ahkun-white rounded-3xl overflow-hidden border border-ahkun-border shadow-md grid grid-cols-1 lg:grid-cols-12 items-center"
                >
                  {/* Visual */}
                  <div className={`lg:col-span-6 relative h-[360px] sm:h-[420px] lg:h-[480px] ${isReversed ? 'lg:order-2' : ''}`}>
                    <img
                      src={activity.image}
                      alt={activity.title[language]}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full bg-ahkun-forest/90 backdrop-blur-md text-ahkun-white text-xs font-mono tracking-wider uppercase">
                        {activity.category}
                      </span>
                    </div>

                    {activity.duration && (
                      <div className="absolute bottom-4 left-4 bg-ahkun-charcoal/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono text-ahkun-white flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-ahkun-river" />
                        <span>{activity.duration[language]}</span>
                      </div>
                    )}
                  </div>

                  {/* Narrative & Details */}
                  <div className={`lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="space-y-2">
                      {activity.timingNote && (
                        <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-ahkun-pine">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{activity.timingNote[language]}</span>
                        </div>
                      )}
                      
                      <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ahkun-charcoal leading-tight">
                        {activity.title[language]}
                      </h2>

                      <p className="text-xs font-mono uppercase tracking-wider text-ahkun-timber">
                        {activity.summary[language]}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-ahkun-muted leading-relaxed font-light">
                      {activity.description[language]}
                    </p>

                    {/* Verified inclusions */}
                    <div className="space-y-2.5 pt-4 border-t border-ahkun-border">
                      <span className="text-xs font-mono uppercase tracking-widest text-ahkun-pine block">
                        {language === 'fi' ? 'Retkeen sisältyy:' : language === 'de' ? 'Im Ausflug enthalten:' : 'Tour Inclusions:'}
                      </span>
                      <div className="space-y-2">
                        {activity.verifiedInclusions[language].map((inc, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ahkun-charcoal">
                            <CheckCircle2 className="w-4 h-4 text-ahkun-forest mt-0.5 shrink-0" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Booking CTA */}
                    <div className="pt-6 border-t border-ahkun-border flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                      <Link
                        to={getLocalizedPath('reservations')}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ahkun-forest text-ahkun-white text-xs font-medium uppercase tracking-wider hover:bg-ahkun-pine transition-colors shadow-sm"
                      >
                        <CalendarCheck className="w-4 h-4" />
                        <span>{language === 'fi' ? 'Tiedustele retkeä' : language === 'de' ? 'Tour anfragen' : 'Enquire About Tour'}</span>
                      </Link>

                      <a
                        href={`tel:${BUSINESS_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-ahkun-bg hover:bg-ahkun-border text-ahkun-charcoal border border-ahkun-border text-xs font-medium uppercase tracking-wider transition-colors"
                      >
                        <span>{BUSINESS_CONFIG.contact.primaryPhone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Wilderness Safety and Seasonality Note */}
      <section className="py-16 bg-ahkun-white border-t border-ahkun-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <SectionHeader
            align="center"
            tag={language === 'fi' ? 'Erämaan sesongit' : language === 'de' ? 'Wildnis-Saisons' : 'Wilderness Seasons'}
            title={language === 'fi' ? 'Kesän vesiltä talven kaamokseen' : language === 'de' ? 'Vom Sommer auf dem Wasser bis zur Winterstille' : 'From Summer Waters to Winter Solitude'}
            description={language === 'fi'
              ? 'Jokiveneliikenne ja kullanhuuhdonta toimivat kesä-syyskuussa. Talvisin ja keväisin järjestämme pilkkiretkiä, tilausruokailuja ja tarinailtoja ennakkotilauksesta.'
              : language === 'de'
              ? 'Flussbootstouren und Goldwaschen finden von Juni bis September statt. Im Winter und Frühling bieten wir Eisangeln und Kaminabende auf Vorbestellung an.'
              : 'Riverboat tours and gold panning operate from June to September. Winter and spring visits include ice-fishing, fireside storytelling, and custom tours upon request.'}
          />

          <div className="pt-4 flex justify-center">
            <Link
              to={getLocalizedPath('contact')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ahkun-forest text-ahkun-white text-xs font-medium uppercase tracking-wider hover:bg-ahkun-pine transition-colors shadow-md"
            >
              <span>{language === 'fi' ? 'Ota yhteyttä ja kysy retkistä' : language === 'de' ? 'Kontakt & Beratung' : 'Contact for Tailored Excursions'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
