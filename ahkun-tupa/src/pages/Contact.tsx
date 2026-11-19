import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/ui/SectionHeader';
import { BUSINESS_CONFIG, UI_TRANSLATIONS } from '../data/contentConfig';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Navigation, 
  Send, 
  Globe2, 
  Clock, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { language } = useLanguage();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-0">
      
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-ahkun-forest text-ahkun-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop"
            alt="Ahkun Tupa courtyard"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ahkun-white/10 backdrop-blur-md border border-ahkun-white/20 text-[11px] font-mono tracking-[0.2em] uppercase text-ahkun-river">
            <Mail className="w-3.5 h-3.5" />
            <span>{UI_TRANSLATIONS.nav.contact[language]}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-ahkun-white">
            {language === 'fi' && (
              <>Ota Yhteyttä <span className="italic text-ahkun-river">Ahkun Tuvalle</span></>
            )}
            {language === 'en' && (
              <>Contact <span className="italic text-ahkun-river">Ahkun Tupa</span></>
            )}
            {language === 'de' && (
              <>Kontaktieren Sie <span className="italic text-ahkun-river">Ahkun Tupa</span></>
            )}
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-ahkun-white/80 font-light leading-relaxed">
            {language === 'fi'
              ? 'Autamme mielellämme kaikissa majoitukseen, jokiveneretkiin, kullanhuuhdontaan tai ruokailuihin liittyvissä kysymyksissä.'
              : language === 'de'
              ? 'Wir helfen Ihnen gerne bei allen Fragen zu Unterkünften, Bootsfahrten, Goldwaschen oder Verpflegung weiter.'
              : 'We are delighted to assist with any enquiries regarding cabin stays, riverboat trips, gold panning, or dining packages.'}
          </p>
        </div>
      </section>

      {/* Main Contact Directory & Form */}
      <section className="py-16 lg:py-24 bg-ahkun-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Contact Details Directory */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-ahkun-timber">
                  {language === 'fi' ? 'Yhteystiedot' : language === 'de' ? 'Kontaktdaten' : 'Contact Directory'}
                </span>
                <h2 className="font-serif text-3xl font-normal text-ahkun-charcoal">
                  {BUSINESS_CONFIG.legalName[language]}
                </h2>
                <p className="text-sm text-ahkun-muted leading-relaxed font-light">
                  {BUSINESS_CONFIG.heritageNote[language]}
                </p>
              </div>

              {/* Cards List */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="p-5 bg-ahkun-white rounded-2xl border border-ahkun-border flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-ahkun-forest/10 text-ahkun-forest shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-ahkun-timber block">
                      {language === 'fi' ? 'Puhelin' : language === 'de' ? 'Telefon' : 'Telephone'}
                    </span>
                    <a 
                      href={`tel:${BUSINESS_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`} 
                      className="font-serif text-xl text-ahkun-charcoal hover:text-ahkun-forest transition-colors block"
                    >
                      {BUSINESS_CONFIG.contact.primaryPhone}
                    </a>
                    <span className="text-xs text-ahkun-muted block">
                      {language === 'fi' ? 'Vastaamme suomeksi, ruotsiksi, englanniksi, saksaksi ja ranskaksi' : language === 'de' ? 'Service auf Finnisch, Deutsch, Englisch, Schwedisch, Französisch' : 'Finnish, English, German, Swedish, French'}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 bg-ahkun-white rounded-2xl border border-ahkun-border flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-ahkun-forest/10 text-ahkun-forest shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-ahkun-timber block">
                      {language === 'fi' ? 'Sähköposti' : language === 'de' ? 'E-Mail' : 'Email Direct'}
                    </span>
                    <a 
                      href={`mailto:${BUSINESS_CONFIG.contact.email}`} 
                      className="font-serif text-lg text-ahkun-charcoal hover:text-ahkun-forest transition-colors block"
                    >
                      {BUSINESS_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="p-5 bg-ahkun-white rounded-2xl border border-ahkun-border flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-ahkun-forest/10 text-ahkun-forest shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-ahkun-timber block">
                      {language === 'fi' ? 'Osoite' : language === 'de' ? 'Adresse' : 'Address'}
                    </span>
                    <p className="text-sm font-medium text-ahkun-charcoal">
                      {BUSINESS_CONFIG.location.address}, {BUSINESS_CONFIG.location.postalCode} {BUSINESS_CONFIG.location.municipality}
                    </p>
                    <p className="text-xs text-ahkun-muted">
                      {BUSINESS_CONFIG.location.village} · {BUSINESS_CONFIG.location.region}, {BUSINESS_CONFIG.location.country}
                    </p>
                  </div>
                </div>
              </div>

              {/* DUAL MAPS BUTTONS */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-ahkun-pine block font-medium">
                  {language === 'fi' ? 'Kartan navigointilinkit:' : language === 'de' ? 'Karten-Direktlinks:' : 'Navigation Links:'}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={BUSINESS_CONFIG.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-ahkun-forest text-ahkun-white text-xs font-medium uppercase tracking-wider hover:bg-ahkun-pine transition-all shadow-sm"
                  >
                    <MapPin className="w-4 h-4 text-ahkun-river" />
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href={BUSINESS_CONFIG.location.appleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-ahkun-white text-ahkun-charcoal border border-ahkun-border text-xs font-medium uppercase tracking-wider hover:bg-ahkun-bg transition-all shadow-sm"
                  >
                    <Navigation className="w-4 h-4 text-ahkun-forest" />
                    <span>Apple Maps</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="lg:col-span-7 bg-ahkun-white p-8 sm:p-12 rounded-3xl border border-ahkun-border shadow-xl space-y-6">
              <div className="space-y-2 border-b border-ahkun-border pb-4">
                <h3 className="font-serif text-2xl font-normal text-ahkun-charcoal">
                  {language === 'fi' ? 'Lähetä viesti' : language === 'de' ? 'Nachricht senden' : 'Send a Message'}
                </h3>
                <p className="text-xs text-ahkun-muted">
                  {language === 'fi' 
                    ? 'Kaikki kentät merkitty tähdellä (*) ovat pakollisia.' 
                    : language === 'de' 
                    ? 'Felder mit Sternchen (*) sind Pflichtfelder.' 
                    : 'Fields marked with an asterisk (*) are required.'}
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-4 bg-ahkun-bg rounded-2xl border border-ahkun-border">
                  <div className="w-12 h-12 rounded-full bg-ahkun-forest/10 text-ahkun-forest flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl font-normal text-ahkun-charcoal">
                    {language === 'fi' ? 'Viestisi on lähetetty!' : language === 'de' ? 'Ihre Nachricht wurde versendet!' : 'Message Sent!'}
                  </h4>
                  <p className="text-sm text-ahkun-muted max-w-md mx-auto">
                    {language === 'fi' 
                      ? 'Kiitos yhteydenotostasi. Vastaamme kyselyysi mahdollisimman pian sähköpostitse.'
                      : language === 'de'
                      ? 'Vielen Dank für Ihre Kontaktaufnahme. Wir melden uns zeitnah per E-Mail bei Ihnen.'
                      : 'Thank you for reaching out. We will get back to your inquiry via email as soon as possible.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-ahkun-forest text-ahkun-white text-xs font-medium uppercase tracking-wider hover:bg-ahkun-pine transition-colors"
                  >
                    <span>{language === 'fi' ? 'Lähetä uusi viesti' : language === 'de' ? 'Neue Nachricht' : 'Send Another Message'}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <span className="text-xs text-ahkun-muted">{language === 'fi' ? 'Nimi *' : language === 'de' ? 'Name *' : 'Name *'}</span>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-ahkun-border bg-ahkun-bg text-ahkun-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ahkun-forest"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs text-ahkun-muted">{language === 'fi' ? 'Sähköposti *' : language === 'de' ? 'E-Mail *' : 'Email *'}</span>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-ahkun-border bg-ahkun-bg text-ahkun-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ahkun-forest"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <span className="text-xs text-ahkun-muted">{language === 'fi' ? 'Puhelin' : language === 'de' ? 'Telefon' : 'Phone'}</span>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-ahkun-border bg-ahkun-bg text-ahkun-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ahkun-forest"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs text-ahkun-muted">{language === 'fi' ? 'Aihe *' : language === 'de' ? 'Betreff *' : 'Subject *'}</span>
                      <input
                        type="text"
                        required
                        placeholder={language === 'fi' ? 'Esim. Jokiveneretki tai mökkivaraus' : language === 'de' ? 'Z.B. Bootsausflug oder Hütte' : 'e.g. Riverboat tour or cabin booking'}
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-ahkun-border bg-ahkun-bg text-ahkun-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ahkun-forest"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs text-ahkun-muted">{language === 'fi' ? 'Viesti *' : language === 'de' ? 'Ihre Mitteilung *' : 'Your Message *'}</span>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-ahkun-border bg-ahkun-bg text-ahkun-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ahkun-forest"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-ahkun-forest text-ahkun-white font-medium text-xs uppercase tracking-wider hover:bg-ahkun-pine transition-all shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>{language === 'fi' ? 'Lähetä Viesti' : language === 'de' ? 'Nachricht Senden' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
