import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/ui/SectionHeader';
import { BUSINESS_CONFIG, ACCOMMODATIONS, ACTIVITIES, UI_TRANSLATIONS } from '../data/contentConfig';
import { 
  CalendarCheck, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  Users, 
  Calendar, 
  Mail, 
  Phone, 
  Sparkles,
  Info,
  X,
  ExternalLink
} from 'lucide-react';

export const Reservations: React.FC = () => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    serviceType: 'kelo-cabins',
    checkIn: '',
    checkOut: '',
    adults: '2',
    children: '0',
    fullName: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const closeDialog = () => {
    setSubmitted(false);
    setFormData({
      serviceType: 'kelo-cabins',
      checkIn: '',
      checkOut: '',
      adults: '2',
      children: '0',
      fullName: '',
      email: '',
      phone: '',
      country: '',
      message: '',
    });
  };

  return (
    <div className="space-y-0">
      
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-ahkun-forest text-ahkun-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop"
            alt="Lemmenjoki cabins and river"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ahkun-white/10 backdrop-blur-md border border-ahkun-white/20 text-[11px] font-mono tracking-[0.2em] uppercase text-ahkun-river">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>{UI_TRANSLATIONS.nav.bookCta[language]}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-ahkun-white">
            {language === 'fi' && (
              <>Tee Varauskysely <span className="italic text-ahkun-river">Lemmenjoelle</span></>
            )}
            {language === 'en' && (
              <>Reservation Enquiry for <span className="italic text-ahkun-river">Lemmenjoki</span></>
            )}
            {language === 'de' && (
              <>Buchungsanfrage für <span className="italic text-ahkun-river">Lemmenjoki</span></>
            )}
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-ahkun-white/80 font-light leading-relaxed">
            {language === 'fi'
              ? 'Täytä toiveesi majoituksesta, jokiveneretkistä tai ryhmäruokailusta. Vastaamme kyselyysi henkilökohtaisesti vahvistaen saatavuuden ja ajankohtaiset hinnat.'
              : language === 'de'
              ? 'Geben Sie Ihre Wünsche für Unterkunft, Flussbootstouren oder Verpflegung an. Wir antworten Ihnen persönlich mit Verfügbarkeit und Saisonpreisen.'
              : 'Submit your requirements for cabins, riverboat excursions, or catering. We reply personally confirming seasonal availability and rates.'}
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 lg:py-24 bg-ahkun-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-ahkun-white rounded-3xl p-8 sm:p-12 border border-ahkun-border shadow-xl space-y-8">
            
            {/* Introductory notice */}
            <div className="bg-ahkun-bg p-4 sm:p-5 rounded-2xl border border-ahkun-border flex items-start gap-3">
              <Info className="w-5 h-5 text-ahkun-pine mt-0.5 shrink-0" />
              <p className="text-xs sm:text-sm text-ahkun-muted leading-relaxed">
                <strong className="text-ahkun-charcoal font-medium">
                  {language === 'fi' ? 'Huomio varauksista: ' : language === 'de' ? 'Hinweis zur Anfrage: ' : 'Booking Notice: '}
                </strong>
                {language === 'fi'
                  ? 'Tämä lomake on varauskysely. Lopullinen varaus ja maksuehdot vahvistetaan aina suoraan majoituskohteen kanssa sähköpostitse tai puhelimitse.'
                  : language === 'de'
                  ? 'Dieses Formular ist eine unverbindliche Anfrage. Die verbindliche Buchung erfolgt direkt über Ahkun Tupa per E-Mail oder Telefon.'
                  : 'This form transmits a booking enquiry. Final confirmations and payment policies are arranged directly with Ahkun Tupa by email or phone.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Category / Unit Choice */}
              <div className="space-y-3">
                <label className="block text-xs font-mono uppercase tracking-widest text-ahkun-timber font-medium">
                  {language === 'fi' ? '1. Valitse palvelu tai majoitus *' : language === 'de' ? '1. Wählen Sie die Leistung oder Unterkunft *' : '1. Select Experience or Accommodation *'}
                </label>
                <select
                  required
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-ahkun-border bg-ahkun-bg text-ahkun-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ahkun-forest"
                >
                  <optgroup label={language === 'fi' ? 'Majoitusvaihtoehdot' : language === 'de' ? 'Unterkünfte' : 'Wilderness Accommodation'}>
                    <option value="kelo-cabins">
                      {language === 'fi' ? 'Perinteiset Kelomökit joen toisella puolella (avotakka, oma soutuvene)' : language === 'de' ? 'Kelo-Blockhütten am anderen Ufer (Kamin, Ruderboot)' : 'Traditional Kelo Log Cabins Across the River (Hearth, Rowing Boat)'}
                    </option>
                    <option value="riverside-cabins">
                      {language === 'fi' ? 'Rantamökit & huoneet pääalueella (sähköistys, ravintolan vieressä)' : language === 'de' ? 'Uferhütten & Gästezimmer (beheizt, am Hof)' : 'Riverside Cabins & Rooms (Electrified, in Courtyard)'}
                    </option>
                    <option value="camping">
                      {language === 'fi' ? 'Matkailuauto- ja telttapaikat jokirannassa' : language === 'de' ? 'Wohnmobil- und Zeltstellplätze am Flussufer' : 'Caravan Pitches & Riverside Camping'}
                    </option>
                  </optgroup>
                  <optgroup label={language === 'fi' ? 'Joki- ja luontoelämykset' : language === 'de' ? 'Erlebnisse & Touren' : 'River & Nature Excursions'}>
                    <option value="ravadas-riverboat">
                      {language === 'fi' ? 'Jokiveneretki Ravadas-putouksille (20 km risteily, pullakahvit)' : language === 'de' ? 'Flussbootsausflug zu den Ravadas-Fällen (20 km)' : 'Riverboat Excursion to Ravadas Falls (20 km canyon cruise)'}
                    </option>
                    <option value="gold-panning">
                      {language === 'fi' ? 'Kullanhuuhdontaretki Lemmenjoen kultamaille' : language === 'de' ? 'Goldwaschausflug zu den historischen Goldfeldern' : 'Lemmenjoki Gold Panning Experience'}
                    </option>
                    <option value="restaurant-catering">
                      {language === 'fi' ? 'Ravintola / Ryhmäruokailu ja ateriapaketit' : language === 'de' ? 'Restaurant & Gruppenbewirtung' : 'Restaurant & Group Catering'}
                    </option>
                  </optgroup>
                </select>
              </div>

              {/* Dates & Guests Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label htmlFor="checkIn" className="block text-xs font-mono uppercase tracking-wider text-ahkun-charcoal font-medium">
                    {language === 'fi' ? 'Saapuminen / Päivä *' : language === 'de' ? 'Anreise / Datum *' : 'Check-in / Date *'}
                  </label>
                  <input
                    id="checkIn"
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-ahkun-border bg-ahkun-bg text-ahkun-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ahkun-forest"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="checkOut" className="block text-xs font-mono uppercase tracking-wider text-ahkun-charcoal font-medium">
                    {language === 'fi' ? 'Lähtöpäivä' : language === 'de' ? 'Abreisedatum' : 'Check-out'}
                  </label>
                  <input
                    id="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-ahkun-border bg-ahkun-bg text-ahkun-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ahkun-forest"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-ahkun-charcoal font-medium">
                    {language === 'fi' ? 'Aikuiset *' : language === 'de' ? 'Erwachsene *' : 'Adults *'}
                  </label>
                  <select
                    value={formData.adults}
                    onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-ahkun-border bg-ahkun-bg text-ahkun-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ahkun-forest"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-ahkun-charcoal font-medium">
                    {language === 'fi' ? 'Lapset (0–17 v)' : language === 'de' ? 'Kinder (0–17)' : 'Children (0–17)'}
                  </label>
                  <select
                    value={formData.children}
                    onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-ahkun-border bg-ahkun-bg text-ahkun-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ahkun-forest"
                  >
                    {[0, 1, 2, 3, 4, 5, '6+'].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Contact Details */}
              <div className="space-y-4 pt-4 border-t border-ahkun-border">
                <label className="block text-xs font-mono uppercase tracking-widest text-ahkun-timber font-medium">
                  {language === 'fi' ? '2. Yhteystiedot *' : language === 'de' ? '2. Kontaktdaten *' : '2. Contact Information *'}
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <span className="text-xs text-ahkun-muted">{language === 'fi' ? 'Koko nimi *' : language === 'de' ? 'Vollständiger Name *' : 'Full Name *'}</span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Matti Virtanen"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-ahkun-border bg-ahkun-bg text-ahkun-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ahkun-forest"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs text-ahkun-muted">{language === 'fi' ? 'Sähköpostiosoite *' : language === 'de' ? 'E-Mail-Adresse *' : 'Email Address *'}</span>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-ahkun-border bg-ahkun-bg text-ahkun-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ahkun-forest"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs text-ahkun-muted">{language === 'fi' ? 'Puhelinnumero *' : language === 'de' ? 'Telefonnummer *' : 'Phone Number *'}</span>
                    <input
                      type="tel"
                      required
                      placeholder="+358 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-ahkun-border bg-ahkun-bg text-ahkun-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ahkun-forest"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs text-ahkun-muted">{language === 'fi' ? 'Kotimaa / Asuinmaa' : language === 'de' ? 'Wohnsitzland' : 'Country of Residence'}</span>
                    <input
                      type="text"
                      placeholder="Finland, Germany, UK..."
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-ahkun-border bg-ahkun-bg text-ahkun-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ahkun-forest"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="text-xs text-ahkun-muted">
                    {language === 'fi' ? 'Erityistoiveet, ruokavaliot tai kysymykset' : language === 'de' ? 'Besondere Wünsche, Diäten oder Fragen' : 'Special requests, dietary preferences, or questions'}
                  </span>
                  <textarea
                    rows={4}
                    placeholder={language === 'fi' ? 'Kirjoita mahdolliset lisätiedot tähän...' : language === 'de' ? 'Ihre Nachricht oder Sonderwünsche...' : 'Enter any notes or questions regarding your stay or excursions...'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-ahkun-border bg-ahkun-bg text-ahkun-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-ahkun-forest"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-ahkun-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-ahkun-forest text-ahkun-white font-medium text-xs uppercase tracking-wider hover:bg-ahkun-pine transition-all shadow-md disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? (language === 'fi' ? 'Lähetetään...' : language === 'de' ? 'Wird gesendet...' : 'Sending...') : UI_TRANSLATIONS.hero.ctaReservation[language]}</span>
                </button>

                <div className="flex items-center gap-2 text-xs font-mono text-ahkun-muted">
                  <ShieldCheck className="w-4 h-4 text-ahkun-forest" />
                  <span>{language === 'fi' ? 'Suora yhteys Ahkun Tuvalle' : language === 'de' ? 'Direkter Kontakt zu Ahkun Tupa' : 'Direct contact with Ahkun Tupa'}</span>
                </div>
              </div>

            </form>

          </div>

        </div>
      </section>

      {/* Confirmation Modal */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-ahkun-white rounded-3xl max-w-lg w-full p-8 border border-ahkun-border shadow-2xl space-y-6 relative animate-fadeIn">
            <button
              onClick={closeDialog}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-ahkun-bg text-ahkun-muted hover:text-ahkun-charcoal transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-full bg-ahkun-forest/10 flex items-center justify-center text-ahkun-forest">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-normal text-ahkun-charcoal">
                {language === 'fi' ? 'Varauskysely vastaanotettu!' : language === 'de' ? 'Buchungsanfrage eingegangen!' : 'Reservation Enquiry Received!'}
              </h3>
              <p className="text-sm text-ahkun-muted leading-relaxed">
                {language === 'fi'
                  ? `Kiitos kyselystäsi, ${formData.fullName || 'asiakas'}. Olemme vastaanottaneet tiedustelusi ja vastaamme siihen osoitteeseen ${formData.email || 'sähköpostiisi'} mahdollisimman pian.`
                  : language === 'de'
                  ? `Vielen Dank für Ihre Anfrage, ${formData.fullName || 'Gast'}. Wir haben Ihre Angaben erhalten und antworten in Kürze an ${formData.email || 'Ihre E-Mail'}.`
                  : `Thank you for your enquiry, ${formData.fullName || 'guest'}. We have received your demonstration request and would confirm availability to ${formData.email || 'your email'}.`}
              </p>
            </div>

            <div className="p-4 bg-ahkun-bg rounded-2xl border border-ahkun-border space-y-2 text-xs font-mono text-ahkun-charcoal">
              <div className="flex justify-between">
                <span className="text-ahkun-muted">Service / Unit:</span>
                <span className="font-semibold">{formData.serviceType}</span>
              </div>
              {formData.checkIn && (
                <div className="flex justify-between">
                  <span className="text-ahkun-muted">Check-in:</span>
                  <span>{formData.checkIn}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-ahkun-muted">Guests:</span>
                <span>{formData.adults} adults, {formData.children} children</span>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 leading-relaxed flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Demonstration Concept Note:</strong> This website is an independent proposal by NOVA Digital Studio. To place an actual booking directly with Ahkun Tupa, call <a href={`tel:${BUSINESS_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`} className="underline font-semibold">{BUSINESS_CONFIG.contact.primaryPhone}</a> or email <a href={`mailto:${BUSINESS_CONFIG.contact.email}`} className="underline font-semibold">{BUSINESS_CONFIG.contact.email}</a>.
              </span>
            </div>

            <button
              onClick={closeDialog}
              className="w-full py-3.5 rounded-xl bg-ahkun-forest text-ahkun-white text-xs font-medium uppercase tracking-wider hover:bg-ahkun-pine transition-colors"
            >
              {language === 'fi' ? 'Sulje ilmoitus' : language === 'de' ? 'Schließen' : 'Close Confirmation'}
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
