import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_CONFIG } from '../data/contentConfig';
import { FileText, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Terms: React.FC = () => {
  const { language, getLocalizedPath } = useLanguage();

  return (
    <div className="py-20 lg:py-28 bg-ahkun-bg text-ahkun-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <Link
          to={getLocalizedPath('')}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ahkun-timber hover:text-ahkun-forest transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{language === 'fi' ? 'Etusivulle' : language === 'de' ? 'Zur Startseite' : 'Back to Home'}</span>
        </Link>

        <div className="space-y-4 border-b border-ahkun-border pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ahkun-white text-xs font-mono tracking-widest uppercase text-ahkun-pine border border-ahkun-border">
            <FileText className="w-3.5 h-3.5" />
            <span>{language === 'fi' ? 'Käyttöehdot' : language === 'de' ? 'Nutzungsbedingungen' : 'Terms & Conditions'}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ahkun-charcoal">
            {language === 'fi' ? 'Sivuston Ehdot & Konsepti-ilmoitus' : language === 'de' ? 'Nutzungsbedingungen & Konzeptionshinweis' : 'Terms of Use & Concept Notice'}
          </h1>

          <p className="text-sm text-ahkun-muted">
            {language === 'fi' ? 'Päivitetty: Marraskuu 2026' : language === 'de' ? 'Stand: November 2026' : 'Last Updated: November 2026'}
          </p>
        </div>

        {/* Content sections */}
        <div className="bg-ahkun-white p-8 sm:p-12 rounded-3xl border border-ahkun-border shadow-sm space-y-8 text-sm text-ahkun-muted leading-relaxed">
          
          <div className="p-4 bg-ahkun-bg rounded-2xl border border-ahkun-border text-xs leading-relaxed space-y-2">
            <strong className="text-ahkun-charcoal font-medium block">
              {language === 'fi' ? 'Itsenäisen verkkosivustokonseptin luonne:' : language === 'de' ? 'Charakter des Website-Konzepts:' : 'Independent Concept Demonstration:'}
            </strong>
            <p>
              {BUSINESS_CONFIG.conceptNotice.bannerText[language]}
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-normal text-ahkun-charcoal">
              {language === 'fi' ? '1. Konseptin tarkoitus ja tekijänoikeudet' : language === 'de' ? '1. Zweck des Konzepts & Urheberrecht' : '1. Purpose & Demonstration Rights'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Tämä verkkosivusto on NOVA Digital Studion toteuttama itsenäinen verkkosivustokonsepti, joka esittelee modernia pohjoismaista vieraanvaraisuussuunnittelua, saavutettavuutta ja teknologista arkkitehtuuria. Kaikki Ahkun Tuvan viralliset palvelumerkit ja tiedot kuuluvat niiden laillisille omistajille.'
                : language === 'de'
                ? 'Diese Website ist ein eigenständiges Designkonzept von NOVA Digital Studio zur Veranschaulichung moderner digitaler Gastgewerbe-Präsentationen. Alle offiziellen Marken und Angaben verbleiben bei ihren jeweiligen Rechteinhabern.'
                : 'This website is an independent design and engineering demonstration created by NOVA Digital Studio to illustrate contemporary Nordic hospitality UX, accessibility, and multilingual architecture. All trademarks remain property of their respective owners.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-normal text-ahkun-charcoal">
              {language === 'fi' ? '2. Hintatiedot ja saatavuus' : language === 'de' ? '2. Preise und Verfügbarkeit' : '2. Rates & Availability'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Sivustolla esitetyt arkistohinnat ovat viitteellisiä. Ajankohtaiset hinnat, aikataulut ja vahvistukset tulee aina tarkistaa suoraan Ahkun Tuvan virallisista kanavista.'
                : language === 'de'
                ? 'Alle Richtpreise dienen lediglich als Orientierungshilfe. Aktuelle Preise und Buchungsbedingungen sind direkt mit Ahkun Tupa zu vereinbaren.'
                : 'Any archival prices cited on this demonstration site are for illustrative reference only. Current rates and terms must always be confirmed directly with Ahkun Tupa.'}
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
