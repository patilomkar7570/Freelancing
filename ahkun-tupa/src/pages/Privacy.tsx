import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_CONFIG } from '../data/contentConfig';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Privacy: React.FC = () => {
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{language === 'fi' ? 'Tietosuojaseloste' : language === 'de' ? 'Datenschutzerklärung' : 'Privacy Notice'}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ahkun-charcoal">
            {language === 'fi' ? 'Tietosuoja & Yksityisyys' : language === 'de' ? 'Datenschutz & Privatsphäre' : 'Privacy Policy & Data Notice'}
          </h1>

          <p className="text-sm text-ahkun-muted">
            {language === 'fi' ? 'Päivitetty: Marraskuu 2026' : language === 'de' ? 'Stand: November 2026' : 'Last Updated: November 2026'}
          </p>
        </div>

        {/* Content sections */}
        <div className="bg-ahkun-white p-8 sm:p-12 rounded-3xl border border-ahkun-border shadow-sm space-y-8 text-sm text-ahkun-muted leading-relaxed">
          
          <div className="p-4 bg-ahkun-bg rounded-2xl border border-ahkun-border text-xs leading-relaxed space-y-2">
            <strong className="text-ahkun-charcoal font-medium block">
              {language === 'fi' ? 'Itsenäisen konseptin ilmoitus:' : language === 'de' ? 'Hinweis zum Website-Konzept:' : 'Concept Demonstration Notice:'}
            </strong>
            <p>
              {BUSINESS_CONFIG.conceptNotice.bannerText[language]}
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-normal text-ahkun-charcoal">
              {language === 'fi' ? '1. Rekisterinpitäjä ja yhteystiedot' : language === 'de' ? '1. Verantwortliche Stelle' : '1. Controller & Contact Details'}
            </h2>
            <p>
              {BUSINESS_CONFIG.legalName[language]}<br />
              {BUSINESS_CONFIG.location.address}, {BUSINESS_CONFIG.location.postalCode} {BUSINESS_CONFIG.location.municipality}, {BUSINESS_CONFIG.location.country}<br />
              Email: {BUSINESS_CONFIG.contact.email} · Phone: {BUSINESS_CONFIG.contact.primaryPhone}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-normal text-ahkun-charcoal">
              {language === 'fi' ? '2. Kerättävät henkilötiedot' : language === 'de' ? '2. Erfasste personenbezogene Daten' : '2. Personal Data Processed'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Sivustolla olevien varauskysely- ja yhteydenottolomakkeiden kautta käsitellään ainoastaan käyttäjän itsensä antamia tietoja (nimi, sähköpostiosoite, puhelinnumero, toivotut päivämäärät ja vapaamuotoinen viesti). Tietoja käytetään ainoastaan yhteydenottoon vastaamiseen ja palveluiden tarjoamiseen.'
                : language === 'de'
                ? 'Über die Buchungs- und Kontaktformulare dieser Website werden ausschließlich die vom Nutzer eingegebenen Daten (Name, E-Mail-Adresse, Telefonnummer, Wunschdaten, Freitext) verarbeitet, um Anfragen zu beantworten.'
                : 'Through enquiry and contact forms, we process only information provided directly by the user (name, email address, phone number, dates, and optional enquiry messages) solely to reply to inquiries.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-normal text-ahkun-charcoal">
              {language === 'fi' ? '3. Evästeet ja analytiikka' : language === 'de' ? '3. Cookies und Analyse' : '3. Cookies & Tracking'}
            </h2>
            <p>
              {language === 'fi'
                ? 'Tämä sivusto ei käytä kolmansien osapuolten seuraamisevästeitä eikä luovuta käyttäjätietoja ulkopuolisille mainosverkostoille.'
                : language === 'de'
                ? 'Diese Website setzt keine Tracking-Cookies von Drittanbietern ein und gibt keine Nutzerdaten an Werbenetzwerke weiter.'
                : 'This demonstration website does not employ third-party advertising tracking cookies and does not sell or transfer user data.'}
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
