import { AccommodationUnit, ActivityItem, GalleryPhoto, Language } from '../types';

export const BUSINESS_CONFIG = {
  name: 'Ahkun Tupa',
  legalName: {
    en: 'Ahkun Tupa – Lemmenjoki Holiday Village Ltd',
    fi: 'Ahkun Tupa – Lemmenjoen Lomamajat Oy',
    de: 'Ahkun Tupa – Lemmenjoki Feriendorf GmbH',
  },
  establishedYear: 1955,
  founders: 'Juhani & Kirsti Jomppanen',
  heritageNote: {
    en: 'The first Sámi family-operated tourism enterprise in Lemmenjoki, welcoming travelers and river explorers since 1955.',
    fi: 'Lemmenjoen ensimmäinen saamelainen perheyritys, joka on palvellut matkailijoita ja jokikulkijoita vuodesta 1955.',
    de: 'Der erste saamische Familienbetrieb in Lemmenjoki, der seit 1955 Reisende und Flusswanderer willkommen heißt.',
  },
  location: {
    address: 'Lemmenjoentie 1030',
    postalCode: '99870',
    village: 'Njurgulahti / Lemmenjoki',
    municipality: 'Inari',
    region: 'Lapland',
    country: 'Finland',
    coordinates: {
      lat: 68.7584484,
      lng: 26.2331241,
    },
    googleMapsUrl: 'https://www.google.com/maps/place/Ahkun+Tupa+%E2%80%93+Lemmenjoki+Holiday+Village+Ltd/@69.2291362,22.7214514,6z/data=!4m13!1m3!2m2!1shotels!6e3!3m8!1s0x45cd98466f0d0151:0x92b6cc22168d04e3!5m2!4m1!1i2!8m2!3d68.7584484!4d26.2331241!16s%2Fg%2F11c7sz_f16?entry=ttu',
    appleMapsUrl: 'https://maps.apple.com/?ll=68.7584484%2C26.2331241&q=Ahkun+Tupa',
    officialWebsiteUrl: 'https://www.ahkuntupa.fi/',
  },
  contact: {
    primaryPhone: '+358 40 755 4306',
    email: 'ahkuntupa@ahkuntupa.fi',
    serviceLanguages: 'Suomi, Svenska, English, Deutsch, Français',
  },
  timings: {
    checkIn: 'From 15:00',
    checkOut: 'Until 12:00',
    seasons: 'Open for Summer & Autumn riverboat traffic, hiking, gold panning, and seasonal winter/spring tours upon advance request.',
  },
  distances: [
    { destination: { en: 'Public Bus Stop', fi: 'Linja-autopysäkki', de: 'Bushaltestelle' }, distance: '0 m', note: { en: 'Directly in courtyard', fi: 'Pihapiirissämme', de: 'Direkt im Hof' } },
    { destination: { en: 'Marked Hiking Trails', fi: 'Merkityt vaellusreitit', de: 'Markierte Wanderwege' }, distance: '10 m', note: { en: 'Gate to Lemmenjoki National Park', fi: 'Kansallispuiston portti', de: 'Tor zum Nationalpark' } },
    { destination: { en: 'Inari Village & Siida Museum', fi: 'Inarin kirkonkylä & Siida', de: 'Dorf Inari & Siida-Museum' }, distance: '45 km', note: { en: 'Nearest supermarket & pharmacy', fi: 'Lähin ruokakauppa ja palvelut', de: 'Nächster Supermarkt' } },
    { destination: { en: 'Ivalo Airport (IVL)', fi: 'Ivalon lentoasema', de: 'Flughafen Ivalo' }, distance: '92 km', note: { en: 'Regular flights from Helsinki', fi: 'Päivittäiset lennot Helsingistä', de: 'Regelmäßige Flüge ab Helsinki' } },
    { destination: { en: 'Saariselkä Fell Resort', fi: 'Saariselän tunturikeskus', de: 'Skigebiet Saariselkä' }, distance: '126 km', note: { en: 'Downhill & spa resort', fi: 'Laskettelu ja kylpylä', de: 'Ski- und Wellnesszentrum' } },
    { destination: { en: 'Rovaniemi Railway Station', fi: 'Rovaniemen rautatieasema', de: 'Bahnhof Rovaniemi' }, distance: '326 km', note: { en: 'Direct VR sleeper trains', fi: 'Yöjunayhteys Helsingistä', de: 'Nachtzugverbindung' } },
  ],
  conceptNotice: {
    agency: 'NOVA Digital Studio',
    bannerText: {
      en: 'Independent website redesign concept by NOVA Digital Studio. Not the official website of Ahkun Tupa and not affiliated with or endorsed by the property.',
      fi: 'NOVA Digital Studion itsenäinen verkkosivustokonsepti. Ei ole Ahkun Tuvan virallinen sivusto, eikä yritys ole sitä tilannut tai vahvistanut.',
      de: 'Unabhängiges Website-Redesign-Konzept von NOVA Digital Studio. Nicht die offizielle Website von Ahkun Tupa und nicht mit dem Betrieb verbunden.',
    }
  }
};

export const UI_TRANSLATIONS = {
  nav: {
    stay: { en: 'Accommodation', fi: 'Majoitus', de: 'Unterkunft' },
    experiences: { en: 'Experiences', fi: 'Elämykset', de: 'Erlebnisse' },
    restaurant: { en: 'Restaurant & Café', fi: 'Ravintola & Kahvila', de: 'Restaurant & Café' },
    gallery: { en: 'Gallery', fi: 'Galleria', de: 'Galerie' },
    location: { en: 'Location & Travel', fi: 'Sijainti & Saapuminen', de: 'Anfahrt & Lage' },
    contact: { en: 'Contact', fi: 'Yhteystiedot', de: 'Kontakt' },
    bookCta: { en: 'Book Your Stay', fi: 'Tee Varauskysely', de: 'Aufenthalt Anfragen' },
    allAccommodation: { en: 'All Accommodation Overview', fi: 'Kaikki majoitusvaihtoehdot', de: 'Alle Unterkünfte im Überblick' },
    allExperiences: { en: 'All River & Nature Experiences', fi: 'Kaikki joki- ja luontoelämykset', de: 'Alle Fluss- und Naturerlebnisse' },
  },
  hero: {
    tagline: { en: 'Gate to Lemmenjoki National Park', fi: 'Portti Lemmenjoen kansallispuistoon', de: 'Tor zum Lemmenjoki-Nationalpark' },
    headline: { en: 'Where the river meets the wilderness.', fi: 'Missä joki kohtaa erämaan.', de: 'Wo der Fluss die Wildnis berührt.' },
    subheadline: {
      en: 'Discover the quiet beauty of Lemmenjoki through riverside stays, local hospitality and journeys into Finnish Lapland.',
      fi: 'Koe Lemmenjoen aito rauha jokirantamajoituksen, aidon saamelaisen vieraanvaraisuuden ja ikimuistoisten jokiveneretkien parissa.',
      de: 'Erleben Sie die stille Schönheit von Lemmenjoki durch Unterkünfte am Flussufer, herzliche Gastfreundschaft und Entdeckungsreisen in Finnisch-Lappland.'
    },
    ctaReservation: { en: 'Reservation Enquiry', fi: 'Tee Varauskysely', de: 'Buchungsanfrage' },
    ctaExplore: { en: 'Explore the Cabins', fi: 'Tutustu Mökkitarjontaan', de: 'Unterkünfte Entdecken' },
  },
  common: {
    officialSpec: { en: 'Verified Spec', fi: 'Virallinen tieto', de: 'Verifizierte Angabe' },
    requiresConfirmation: { en: 'Subject to Confirmation', fi: 'Tarkistettava tieto', de: 'Vorbehaltlich Bestätigung' },
    contactForRates: { en: 'Contact us for current seasonal rates', fi: 'Kysy ajankohtainen hintatarjous', de: 'Aktuelle Saisonpreise auf Anfrage' },
    openInGoogleMaps: { en: 'Open in Google Maps', fi: 'Avaa Google Mapsissa', de: 'In Google Maps öffnen' },
    openInAppleMaps: { en: 'Open in Apple Maps', fi: 'Avaa Apple Mapsissa', de: 'In Apple Maps öffnen' },
    officialWebsite: { en: 'Official Ahkun Tupa Website', fi: 'Ahkun Tuvan virallinen sivusto', de: 'Offizielle Ahkun Tupa Website' },
    allRightsReserved: { en: 'All rights reserved.', fi: 'Kaikki oikeudet pidätetään.', de: 'Alle Rechte vorbehalten.' },
    designedBy: { en: 'Independent redesign proposal by NOVA Digital Studio', fi: 'Itsenäinen verkkosivustokonsepti: NOVA Digital Studio', de: 'Unabhängiges Redesign-Konzept von NOVA Digital Studio' },
  }
};

export const ACCOMMODATIONS: AccommodationUnit[] = [
  {
    id: 'kelo-cabins',
    slug: 'kelo-cabins',
    category: 'kelo-cabins',
    name: {
      en: 'Traditional Kelo Log Cabins Across the River',
      fi: 'Perinteiset Kelomökit Joen Toisella Puolella',
      de: 'Traditionelle Kelo-Blockhütten am Anderen Flussufer'
    },
    subtitle: {
      en: 'Total wilderness seclusion reached by private wooden rowing boat',
      fi: 'Täydellistä erämaan rauhaa joen vastarannalla omalla soutuveneellä',
      de: 'Absolute Wildnisruhe am gegenüberliegenden Flussufer mit eigenem Ruderboot'
    },
    description: {
      en: '4 authentic Finnish kelo-log cabins situated across the Lemmenjoki River. Step into timeless wilderness atmosphere with crackling open fireplaces, wood-heated riverside sauna, private sandy swimming beach, and your own wooden rowing boat to cross the river.',
      fi: 'Ahkun Tuvan 4 aitoa kelomökkiä sijaitsevat Lemmenjoen toisella puolella tarjoten täydellisen irtioton arjesta. Varustukseen kuuluu avotakka, kaasuliesi, oma soutuvene joen ylitykseen, maakellari, perinteinen rantasauna pesuhuoneineen sekä upea hiekkainen uimaranta.',
      de: '4 authentische Kelo-Blockhütten am gegenüberliegenden Ufer des Lemmenjoki. Erleben Sie unverfälschte Wildnisatmosphäre mit offenem Kamin, Gasherd, eigenem Ruderboot zur Flussüberquerung, holzbeheizter Strandsauna und feinem Sandbadestrand.'
    },
    capacityAdults: 4,
    capacityChildren: 2,
    roomsDescription: {
      en: 'Traditional open-plan kelo timber cabin with sleeping berths, open hearth fireplace, and riverfront terrace.',
      fi: 'Perinteinen kelohirsinen tupa nukkumapaikoilla, avotakalla ja jokiterassilla.',
      de: 'Traditionelle Kelo-Blockstube mit Schlafkojen, offenem Kamin und Flusssitzplatz.'
    },
    verifiedAmenities: {
      en: [
        'Open stone fireplace (avotakka)',
        'Private wooden rowing boat (soutuvene) included',
        'Traditional wood-heated riverside sauna & washhouse',
        'Fine sandy river swimming beach (hiekkaranta)',
        'Gas stove & full tableware service',
        'Traditional cool root cellar (maakellari)',
        'Eco-friendly outdoor wilderness toilet',
        'Untouched silent pine forest surroundings'
      ],
      fi: [
        'Tunnelmallinen avotakka',
        'Oma soutuvene joenylitykseen sisältyy hintaan',
        'Perinteinen puulämmitteinen rantasauna ja pesuhuone',
        'Upea hiekkapohjainen uimaranta',
        'Kaasuliesi ja astiasto',
        'Perinteinen maakellari elintarvikkeille',
        'Siisti ulko-wc',
        'Täydellinen erämaan rauha ilman sähköhäiriöitä'
      ],
      de: [
        'Gemütlicher offener Natursteinkamin',
        'Eigenes Holzruderboot für die Flussüberquerung inklusive',
        'Traditionelle holzbeheizte Strandsauna mit Waschraum',
        'Feiner Sandbadestrand direkt am Fluss',
        'Gaskocher und Geschirr',
        'Natürlicher Erdkeller für Vorräte',
        'Ökologische Außentoilette',
        'Absolute Ruhe inmitten unberührter Kiefernwälder'
      ]
    },
    additionalFeatures: {
      en: [
        'Pure drinking water fetched directly from pristine springs',
        'Direct access to national park wilderness trails',
        'Historical archival rate reference: 65 € – 90 € / night (subject to confirmation)'
      ],
      fi: [
        'Raikas juomavesi noudetaan puhtaasta luonnonlähteestä',
        'Suora yhteys Lemmenjoen erämaareiteille',
        'Historiallinen arkistoviite: 65 € – 90 € / vrk (tarkistettava yritykseltä)'
      ],
      de: [
        'Reines Quellwasser direkt aus der Natur',
        'Direkter Zugang zu Nationalpark-Wanderpfaden',
        'Historischer Richtpreis: 65 € – 90 € / Nacht (vorbehaltlich Bestätigung)'
      ]
    },
    ratesNote: {
      en: 'Contact us for current seasonal rates (Archival reference: 65 € – 90 € / night).',
      fi: 'Kysy ajankohtainen hinta suoraan vastaanotosta (Arkistohinta: 65 € – 90 € / vrk).',
      de: 'Aktuelle Saisonpreise auf Anfrage (Archiv-Richtwert: 65 € – 90 € / Nacht).'
    },
    verificationStatus: 'verified_from_official_records',
    badge: {
      en: 'Authentic Wilderness',
      fi: 'Aito Erämaatunnelma',
      de: 'Echtes Wildniserlebnis'
    },
    images: {
      hero: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: 'Traditional kelo log cabin with open stone fireplace in Lemmenjoki Lapland'
    }
  },
  {
    id: 'riverside-cabins',
    slug: 'riverside-cabins',
    category: 'riverside-cabins',
    name: {
      en: 'Riverside Holiday Cabins & Rooms',
      fi: 'Rantamökit & Huoneet Pääalueella',
      de: 'Flussufer-Hütten & Gästezimmer'
    },
    subtitle: {
      en: 'Comfortable electrified cabins steps from the riverboat pier and restaurant',
      fi: 'Sähköistetyt mukavat mökit jokilaiturin ja ravintolan välittömässä läheisyydessä',
      de: 'Komfortable beheizte Hütten nur wenige Schritte von Bootsanleger und Restaurant entfernt'
    },
    description: {
      en: 'Comfortable log cabins and 2-person rooms located on the resort courtyard on the home bank of the Lemmenjoki. Equipped with electric heating, refrigerators, tableware, and convenient access to the central service building with modern showers, toilets, and saunas.',
      fi: 'Ahkun Tuvan pihapiirissä sijaitsevat sähköistetyt mökit ja 2 hengen huoneet tarjoavat vaivatonta majoitusta kansallispuiston portilla. Varustukseen kuuluu sähkölämmitys, jääkaappi, astiasto sekä osassa oma uuni, sauna ja suihku.',
      de: 'Gemütliche Blockhütten und 2-Bett-Zimmer im Hauptbereich direkt am Lemmenjoki-Ufer. Ausgestattet mit Elektroheizung, Kühlschrank, Geschirr und Zugang zum modernen Sanitärgebäude mit Duschen, WCs und Saunen.'
    },
    capacityAdults: 4,
    capacityChildren: 2,
    roomsDescription: {
      en: '2-person rooms, 2-person cabins, and 4-person family cabins with comfortable beds.',
      fi: '2 hengen huoneita, 2 hengen mökkejä sekä 4 hengen perhemökkejä laadukkailla vuoteilla.',
      de: '2-Bett-Zimmer, 2-Personen-Hütten und 4-Personen-Familienhütten.'
    },
    verifiedAmenities: {
      en: [
        'Electric heating & indoor thermal insulation',
        'Refrigerator & cooking tableware',
        'Baking oven (select units)',
        'Private sauna, shower & WC (select cabins)',
        'Central modern service building with hot showers & WCs',
        'Lakeside wood sauna available for booking',
        'High-speed Wi-Fi in restaurant & central grounds',
        'Immediate proximity to riverboat pier'
      ],
      fi: [
        'Sähkölämmitys ja lämpöeristys',
        'Jääkaappi ja astiasto',
        'Uuni (osassa mökeistä)',
        'Oma sauna, suihku ja wc (osassa mökeistä)',
        'Erillinen huoltorakennus suihkuineen ja wc-tiloineen',
        'Yleinen rantasauna vapaasti hyödynnettävissä',
        'Langaton Wi-Fi ravintolan yhteydessä',
        'Jokivenelaituri suoraan pihan tuntumassa'
      ],
      de: [
        'Elektrische Heizung und gute Isolierung',
        'Kühlschrank und Essgeschirr',
        'Backofen (in ausgewählten Einheiten)',
        'Eigene Sauna, Dusche & WC (in ausgewählten Hütten)',
        'Zentrales Servicegebäude mit Warmwasserduschen und WCs',
        'Ufersauna für Gäste nutzbar',
        'WLAN im Restaurant- und Empfangsbereich',
        'Direkte Nähe zum Flussbootsanleger'
      ]
    },
    additionalFeatures: {
      en: [
        'Half-board and full-board catering packages available at restaurant',
        'Archival rate reference: 35 € (room) to 45 € – 90 € (cabins) / night',
        'Ski track & nature trail starts 10 meters from door'
      ],
      fi: [
        'Puolihoito ja täysihoito saatavilla ravintolassamme',
        'Arkistohinnasto: 35 € (huone) – 45 €–90 € (mökki) / vrk',
        'Valaistu latu ja luontopolku alkavat 10 metrin päästä ovelta'
      ],
      de: [
        'Halbpension und Vollpension im hauseigenen Restaurant buchbar',
        'Archivpreise: 35 € (Zimmer) bis 45 € – 90 € (Hütten) / Nacht',
        'Loipen und Wanderwege beginnen 10 m vor der Haustür'
      ]
    },
    ratesNote: {
      en: 'Contact us for current seasonal rates (Archival reference: 35 € – 90 € / night).',
      fi: 'Kysy ajankohtainen hinta suoraan vastaanotosta (Arkistohinta: 35 € – 90 € / vrk).',
      de: 'Aktuelle Saisonpreise auf Anfrage (Archiv-Richtwert: 35 € – 90 € / Nacht).'
    },
    verificationStatus: 'verified_from_official_records',
    badge: {
      en: 'Courtyard Comfort',
      fi: 'Pääalueen Mukavuus',
      de: 'Komfort am Hof'
    },
    images: {
      hero: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: 'Riverside timber cabins and lodge rooms in Finnish Lapland'
    }
  },
  {
    id: 'camping-motorhome',
    slug: 'camping',
    category: 'camping',
    name: {
      en: 'Caravan Pitches & Riverside Camping',
      fi: 'Asuntoautoalue & Telttailualue',
      de: 'Wohnmobilstellplätze & Zeltwiese'
    },
    subtitle: {
      en: 'Scenic pitches with electrical hookups right on the Lemmenjoki riverbank',
      fi: 'Sähköpaikkoja asuntoautoille ja telttapaikkoja aivan jokirannassa',
      de: 'Stellplätze mit Stromanschlüssen direkt am Ufer des Lemmenjoki'
    },
    description: {
      en: 'Pitch your tent or park your caravan right on the grassy shoreline of the Lemmenjoki River. Equipped with electrical hookup posts for motorhomes, campfire circles, freshwater taps, and full access to modern service buildings with hot showers and saunas.',
      fi: 'Majoitu omassa asuntoautossa tai teltassa upeissa jokimaisemissa. Alueella on sähköpistokkeita matkailuautoille, telttailumahdollisuus hiekkarannan tuntumassa sekä huoltorakennuksen suihkut, wc:t ja rantasauna.',
      de: 'Übernachten Sie im eigenen Wohnmobil oder Zelt direkt an der idyllischen Uferwiese. Ausgestattet mit Stromanschlüssen, Feuerstellen, Frischwasser und freiem Zugang zum Sanitärgebäude mit Duschen, WCs und Sauna.'
    },
    capacityAdults: 6,
    capacityChildren: 4,
    roomsDescription: {
      en: 'Level motorhome pitches with electrical connection and wilderness tent sites.',
      fi: 'Tasaiset sähköistetyt matkailuautopaikat sekä luonnonmukaiset telttapaikat.',
      de: 'Ebene Stellplätze mit Stromanschluss sowie naturnahe Zeltplätze.'
    },
    verifiedAmenities: {
      en: [
        'Electrical hookups for caravans and motorhomes',
        'Direct Lemmenjoki riverbank shoreline setting',
        'Modern service building with hot showers and WCs',
        'Shared wood-fired riverside sauna',
        'Fresh drinking water station & waste disposal',
        'Campfire site & outdoor barbecue facilities',
        'Immediate access to canoe rental & riverboat pier'
      ],
      fi: [
        'Sähköpistokkeet asuntoautoille ja -vaunuille',
        'Upea sijainti suoraan Lemmenjoen rantatörmällä',
        'Huoltorakennuksen suihkut, wc:t ja tiskauspaikka',
        'Puulämmitteinen rantasauna ja uintimahdollisuus',
        'Juomavesipiste ja jätehuolto',
        'Nuotiopaikka ja tulentekomahdollisuus',
        'Kanoottivuokraus ja venelaituri vieressä'
      ],
      de: [
        'Stromanschlüsse für Wohnmobile und Wohnwagen',
        'Direkte Lage am Ufer des Lemmenjoki-Flusses',
        'Sanitärgebäude mit Duschen, WCs und Abwaschbereich',
        'Holzbeheizte Strandsauna und Bademöglichkeit',
        'Trinkwasserstation und Müllentsorgung',
        'Feuerstelle und Grillplatz im Freien',
        'Kanuverleih und Bootsanleger direkt vor Ort'
      ]
    },
    additionalFeatures: {
      en: [
        'Breakfast and meals available daily at Ahkun Tupa restaurant',
        'Canoe rental 40 € / 24h',
        'Public bus stops directly in courtyard'
      ],
      fi: [
        'Aamiainen ja lämpimät ateriat saatavilla ravintolassa',
        'Kanoottivuokraus 40 € / vrk',
        'Linja-auton päätepysäkki suoraan pihassa'
      ],
      de: [
        'Frühstück und warme Mahlzeiten im Restaurant erhältlich',
        'Kanuverleih 40 € / Tag',
        'Linienbus hält direkt im Hof'
      ]
    },
    ratesNote: {
      en: 'Contact us for seasonal pitch and camping rates.',
      fi: 'Kysy matkailuauto- ja telttapaikkojen ajankohtaiset hinnat vastaanotosta.',
      de: 'Aktuelle Stellplatz- und Zeltgebühren auf Anfrage.'
    },
    verificationStatus: 'verified_from_official_records',
    badge: {
      en: 'Shoreline Camping',
      fi: 'Jokiranta',
      de: 'Ufercamping'
    },
    images: {
      hero: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: 'Riverside camping and motorhome pitches on the riverbank in Lapland'
    }
  }
];

export const ACTIVITIES: ActivityItem[] = [
  {
    id: 'ravadas-riverboat',
    slug: 'ravadas-riverboat',
    season: 'summer',
    category: 'river',
    title: {
      en: 'Riverboat Excursion to Ravadas Falls',
      fi: 'Jokiveneretki Ravadas-putouksille',
      de: 'Flussbootsausflug zu den Ravadas-Wasserfällen'
    },
    summary: {
      en: 'Legendary 20 km wooden riverboat cruise through the Lemmenjoki canyon to the foaming Ravadas Falls.',
      fi: 'Legendaarinen 20 km jokiveneristeily Lemmenjoen kansallispuiston kanjonissa pauhaaville Ravadas-putouksille.',
      de: 'Legendäre 20 km lange Flussbootfahrt durch den Lemmenjoki-Canyon zu den tosenden Ravadas-Wasserfällen.'
    },
    description: {
      en: 'Departing directly from Ahkun Tupa pier in Njurgulahti, traditional long wooden riverboats cruise 20 km up the Lemmenjoki River through towering cliff canyons. At the rapids, take a guided boardwalk stroll to witness the thunderous foaming cascade of Ravadas Falls, accompanied by traditional campfire coffee and sweet buns (pullakahvit).',
      fi: 'Retki alkaa Ahkun Tuvan laiturilta Njurgurlahdesta. Perinteisellä jokiveneellä ajetaan Lemmenjoen kansallispuiston jylhän kanjonin halki 20 km jokea ylöspäin. Koskien kohdalla kuljetaan helppokulkuista rantapolkua ja ihaillaan mahtavia Ravadas-putouksen valkoisia kuohuja. Retkellä nautitaan aidot nuotiopullakahvit.',
      de: 'Die Fahrt beginnt am Steg von Ahkun Tupa in Njurgulahti. Mit traditionellen Holzflussbooten fahren Sie 20 km flussaufwärts durch die Schlucht des Nationalparks. Entlang der Stromschnellen führt ein Uferweg zu den tosenden Ravadas-Fällen, wo Sie frisch gekochten Lagerfeuerkaffee und finnisches Hefegebäck genießen.'
    },
    duration: { en: 'Approx. 3 hours', fi: 'Noin 3 tuntia', de: 'Ca. 3 Stunden' },
    timingNote: { en: 'Daily departures June 10 – Sept 25', fi: 'Päivittäin 10.6.–25.9.', de: 'Täglich vom 10. Juni bis 25. September' },
    verifiedInclusions: {
      en: [
        'Round-trip wooden riverboat transport (20 km each way)',
        'Certified life jackets and passenger insurance',
        'Guided visit to Ravadas Falls cascade',
        'Campfire coffee and sweet Finnish bun (pullakahvit)',
        'Service languages: Finnish, English, German, Swedish, French'
      ],
      fi: [
        'Jokivenekuljetukset putouksille ja takaisin (20 km suuntaansa)',
        'Pelastusliivit ja matkustajavakuutus',
        'Opastettu tutustuminen putouksiin',
        'Perinteiset nuotiopullakahvit',
        'Palvelukielet: suomi, englanti, saksa, ruotsi, ranska'
      ],
      de: [
        'Hin- und Rückfahrt mit traditionellem Holzflussboot (je 20 km)',
        'Rettungswesten und Fahrgastversicherung',
        'Geführter Besuch der Ravadas-Wasserfälle',
        'Lagerfeuerkaffee und finnisches Gebäck (pullakahvit)',
        'Betreuungssprachen: Deutsch, Englisch, Finnisch, Schwedisch, Französisch'
      ]
    },
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'gold-panning',
    slug: 'gold-panning',
    season: 'summer',
    category: 'gold',
    title: {
      en: 'Lemmenjoki Gold Panning Experience',
      fi: 'Kullanhuuhdontaretki Kultamaille',
      de: 'Goldwaschen an den legendären Goldfeldern'
    },
    summary: {
      en: 'Pan for genuine Lapland gold on historic claims and keep every golden flake you discover.',
      fi: 'Koe aito kullanhuuhdonta legendaarisilla kultamailla ja pidä kaikki löytämäsi kultahiput matkamuistona.',
      de: 'Waschen Sie echtes Gold an historischen Schürfplätzen und behalten Sie jedes gefundene Goldkörnchen.'
    },
    description: {
      en: 'Lemmenjoki is Finland’s historic gold country since the famous 1945 gold rush. Join local experienced gold prospectors to learn the traditional technique of panning with wooden and steel gold pans (vaska). Any genuine gold flakes and garnets you pan from the river gravel are yours to keep!',
      fi: 'Lemmenjoki on Suomen tunnetuinta kultaseutua aina vuoden 1945 kultaryntäyksestä lähtien. Retkellä pääset kokeneen oppaan johdolla kokeilemaan perinteistä kullanhuuhdontaa vaskoolilla aidoilla kultamailla. Kaikki löytämäsi kultahiput saat pitää itselläsi.',
      de: 'Lemmenjoki ist Finnlands berühmteste Goldregion seit dem Goldrausch von 1945. Unter fachkundiger Anleitung lernen Sie das traditionelle Auswaschen mit der Goldwaschpfanne (Vaskooli). Alle Goldflitter, die Sie aus dem Flusssediment waschen, dürfen Sie als Andenken behalten!'
    },
    duration: { en: 'Half-day tour (4–5 hours)', fi: 'Puolen päivän retki (4–5 tuntia)', de: 'Halbtagesausflug (4–5 Stunden)' },
    timingNote: { en: 'Summer gold panning season (June to September)', fi: 'Kesäkausi (kesäkuusta syyskuuhun)', de: 'Sommersaison (Juni bis September)' },
    verifiedInclusions: {
      en: [
        'Riverboat ride to gold panning claim',
        'Traditional gold pans and prospector equipment provided',
        'Personal instruction by local expert prospector',
        'Small glass vial to take your found gold home',
        'Campfire snack and outdoor hot drink'
      ],
      fi: [
        'Jokivenekuljetus kultamaille',
        'Vaskoolit ja kaivuvälineet käyttöön',
        'Ammattitaitoinen opastus huuhtomistekniikkaan',
        'Lasiputki löydetyille kultahipuille matkamuistoksi',
        'Nuotioeväät ja kuuma juoma'
      ],
      de: [
        'Flussboottransfer zu den Goldclaim-Gründen',
        'Bereitstellung von Goldwaschpfannen und Werkzeug',
        'Persönliche Anleitung in traditioneller Waschtechnik',
        'Glasröhrchen für Ihre gefundenen Goldflitter',
        'Lagerfeuer-Snack und Heißgetränk'
      ]
    },
    image: 'https://images.unsplash.com/photo-1508873696983-2df5703bc225?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'national-park-hiking',
    slug: 'national-park-hiking',
    season: 'year-round',
    category: 'hiking',
    title: {
      en: 'Hiking into Lemmenjoki National Park',
      fi: 'Vaellus Suomen Suurimmassa Kansallispuistossa',
      de: 'Wandern im Lemmenjoki-Nationalpark'
    },
    summary: {
      en: 'Trek scenic fell ridges, Joenkielinen panoramic peak (534m), and ancient boreal pine wilderness.',
      fi: 'Vaelletaan upeille tunturiharjanteille, Joenkielisen huipulle (534 m) ja ikivanhoihin mäntymetsiin.',
      de: 'Wanderungen auf aussichtsreiche Bergrücken, zum Joenkielinen-Gipfel (534 m) und durch uralte Taigawälder.'
    },
    description: {
      en: 'Lemmenjoki National Park is Finland’s largest protected wilderness area spanning 2,860 km². Marked hiking trails begin right from Ahkun Tupa’s courtyard, including the scenic 16 km circuit to the bare summit of Joenkielinen fell offering 360-degree views across Lapland.',
      fi: 'Lemmenjoen kansallispuisto on Suomen suurin suojeltu erämaa-alue (2 860 km²). Merkityt vaellusreitit ja luontopolut alkavat suoraan Ahkun Tuvan pihasta, mukaan lukien suosittu Joenkielisen tunturikierros (16 km), josta avautuvat henkeäsalpaavat näkymät koko Inarin tunturimaailmaan.',
      de: 'Der Lemmenjoki-Nationalpark ist Finnlands größtes Naturschutzgebiet (2.860 km²). Gut markierte Wanderpfade starten direkt am Hof von Ahkun Tupa, darunter die 16 km lange Route auf den kahlen Gipfel des Joenkielinen mit weitem Panoramablick.'
    },
    duration: { en: 'From 2-hour nature walks to multi-day treks', fi: '2 tunnin luontopolusta monipäiväisiin vaelluksiin', de: 'Von 2-stündigen Spaziergängen bis zu Mehrtagestouren' },
    verifiedInclusions: {
      en: [
        'Trailhead directly at Ahkun Tupa courtyard (10 m)',
        'Route maps and trail condition advice from hosts',
        'Connections to wilderness rental and open wilderness huts (autiotuvat)',
        'Canoe rental 40 € / 24h for river crossing exploration'
      ],
      fi: [
        'Reittien lähtöpiste suoraan Ahkun Tuvan pihassa (10 m)',
        'Reittikartat ja ajankohtaiset maastovinkit isäntäväeltä',
        'Yhteydet Metsähallituksen autio- ja vuokratuville (Härkäkoski, Morgam-oja jne.)',
        'Kanoottivuokraus 40 € / vrk joen tutkimiseen'
      ],
      de: [
        'Wanderstartpunkt direkt am Hof von Ahkun Tupa (10 m)',
        'Wanderkarten und Streckenhinweise von den Gastgebern',
        'Anbindung an Wildnishütten (autiotuvat)',
        'Kanuverleih 40 € / Tag zur Flusserkundung'
      ]
    },
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'river-fishing',
    slug: 'river-fishing',
    season: 'summer',
    category: 'fishing',
    title: {
      en: 'Wild Trout & Grayling River Fishing',
      fi: 'Taimenen ja Harjuksen Kalastus',
      de: 'Forellen- und Äschenangeln am Fluss'
    },
    summary: {
      en: 'Fly-fishing and spin-casting on pristine Arctic waters for wild brown trout and grayling.',
      fi: 'Perhokalastusta ja uistelua kirkkailla arktisilla vesillä taimenen ja harjuksen pyyntiin.',
      de: 'Fliegenfischen und Spinnangeln in glasklaren arktischen Gewässern auf wilde Forellen und Äschen.'
    },
    description: {
      en: 'The Lemmenjoki river system offers legendary fishing for wild native brown trout, grayling (harjus), whitefish (siika), and Arctic pike. Ahkun Tupa assists guests in acquiring all necessary local fisheries permits directly on site.',
      fi: 'Lemmenjoki on villin taimenen ja harjuksen alkuperäistä lisääntymisaluetta. Joella voi uistella, perhokalastaa ja virvelöidä lukuun ottamatta syksyn rauhoitusaikaa. Kaikki tarvittavat kalastusluvat saat hankittua suoraan meiltä.',
      de: 'Der Lemmenjoki bietet erstklassige Angelreviere für wilde Bachforellen, Äschen, Maränen und Hechte. Ahkun Tupa stellt alle erforderlichen örtlichen Angelkarten direkt vor Ort für Sie aus.'
    },
    verifiedInclusions: {
      en: [
        'Official local fishing permits issued on site',
        'Boat transport to productive fishing pools upon request',
        'Rowing boats and canoe rental available',
        'Fish smoking and cleaning advice'
      ],
      fi: [
        'Kaikki tarvittavat kalastusluvat suoraan Ahkun Tuvalta',
        'Venekuljetukset parhaille ottipaikoille sopimuksen mukaan',
        'Soutuveneet ja kanoottivuokraus',
        'Saaliin savustus- ja käsittelyneuvot'
      ],
      de: [
        'Örtliche Angellizenzen direkt vor Ort erhältlich',
        'Bootstransfer zu ergiebigen Angelplätzen nach Absprache',
        'Ruderboote und Kanus zur Miete',
        'Tipps zum Räuchern und Zubereiten'
      ]
    },
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'winter-aurora',
    slug: 'winter-aurora',
    season: 'winter',
    category: 'winter',
    title: {
      en: 'Winter Silence, Ice Fishing & Northern Lights',
      fi: 'Talven Hiljaisuus, Pilkkiretket & Revontulet',
      de: 'Winterstille, Eisangeln & Polarlichter'
    },
    summary: {
      en: 'Experience deep Arctic winter, crackling ice-fishing trips, and aurora skies over the frozen fells.',
      fi: 'Koe talvinen Lapin taika: pilkkiretket järville, lumikengät, hiihtoladut ja revontulten loimu.',
      de: 'Erleben Sie tiefen arktischen Winter, Eisangeltouren, Langlaufloipen und tanzende Polarlichter.'
    },
    description: {
      en: 'In winter, Lemmenjoki transforms into a world of pure white snow and crystal-clear skies far from light pollution. Enjoy guided ice-fishing (pilkki) on frozen lake waters, step onto cross-country ski trails 10 meters from your cabin door, and warm up by the lodge hearth.',
      fi: 'Talvella Lemmenjoki kietoutuu vitivalkoiseen lumeen ja revontulten valaisemaan kaamoksen taikaan. Järjestämme tilauksesta opastettuja pilkkiretkiä, tarinoimme takkatulen ääressä Lemmenjoen kultahistoriasta ja kokeilemme talvikullanhuuhdontaa sisäaltaassa.',
      de: 'Im Winter verwandelt sich Lemmenjoki in eine unberührte Schneelandschaft fernab von Lichtverschmutzung. Unternehmen Sie geführte Eisangeltouren, starten Sie direkt am Hof auf die Langlaufloipe und lauschen Sie am Kaminfeuer den alten Goldgräbergeschichten.'
    },
    verifiedInclusions: {
      en: [
        'Guided ice-fishing equipment & warm drinks by the ice hole',
        'Ski track starting 10 meters from resort entrance',
        'Evening fireside storytelling on Lemmenjoki gold legends',
        'Indoor winter gold panning demonstrations'
      ],
      fi: [
        'Opastetut pilkkivälineet ja kuumat juomat jäällä',
        'Hiihtolatu alkaa suoraan pihasta (10 m)',
        'Iltaisin tarinointia kultahistoriasta takkatulen ääressä',
        'Talvinen kullanhuuhdontakokeilu sisäaltaassa'
      ],
      de: [
        'Eisangelausrüstung und warme Getränke am Eisloch',
        'Langlaufloipe beginnt 10 m vor der Haustür',
        'Geschichtenabende zur Goldgräbertradition am Kamin',
        'Indoor-Goldwaschen im beheizten Becken'
      ]
    },
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1200&auto=format&fit=crop'
  }
];

export const RESTAURANT_DETAILS = {
  capacity: 75,
  license: 'A-oikeudet (Fully licensed for alcoholic beverages)',
  view: 'Direct panoramic view over the Lemmenjoki River',
  headline: {
    en: 'Authentic Lappish food and warm family hospitality overlooking the river.',
    fi: 'Aitoja lapin makuja ja lämmintä saamelaisvieraanvaraisuutta jokimaisemassa.',
    de: 'Authentische lappländische Küche und herzliche Gastfreundschaft mit Flussblick.'
  },
  description: {
    en: 'Ahkun Tupa’s 75-seat café-restaurant has served travelers, local gold prospectors, and river explorers since 1955. From our panoramic windows, enjoy sweeping views over the Lemmenjoki River while our skilled cooks prepare traditional Lappish delicacies and wholesome home-cooked meals.',
    fi: 'Ahkun Tuvan viihtyisä 75-paikkainen, A-oikeuksin varustettu kahvila-ravintola tarjoaa suussa sulavia lapin herkkuja ja maistuvaa kotiruokaa. Ikkunoistamme avautuu upea maisema Lemmenjoelle. Ravintolamme palvelee erinomaisesti myös retkeilijöitä ja ryhmiä.',
    de: 'Das gemütliche 75-Plätze-Restaurant von Ahkun Tupa mit Schanklizenz serviert seit 1955 lappländische Spezialitäten und herzhafte Hausmannskost mit weitem Blick über das Wasser des Lemmenjoki.'
  },
  specialties: {
    en: [
      'Traditional sautéed reindeer with mashed potatoes & lingonberries (poronkäristys)',
      'Rich Arctic salmon soup with local rye bread (lohikeitto)',
      'Freshly home-baked Finnish sweet pies and pastries (vastaleivotut piirakat)',
      'Steaming campfire coffee and cloudberry delicacies',
      'Breakfast, half-board, and full-board catering for hikers and groups'
    ],
    fi: [
      'Perinteinen poronkäristys pottuvoilla ja puolukkahillolla',
      'Kermainen lohikeitto ja tuore talon leipä',
      'Uunituoreet, vastaleivotut marjapiirakat ja leivonnaiset',
      'Aito pannukahvi ja Lapin marjaherkut',
      'Aamupala, puolihoidon ja täysihoidon ateriapaketit retkeilijöille ja ryhmille'
    ],
    de: [
      'Traditionelles Rentiergeschnetzeltes mit Kartoffelpüree und Preiselbeeren (poronkäristys)',
      'Cremige finnische Lachssuppe mit Roggenbrot (lohikeitto)',
      'Ofenfrische Beerenkuchen und finnisches Hefegebäck',
      'Frisch gebrühter Pfannenkaffee und Moltebeeren-Desserts',
      'Frühstück, Halb- und Vollpension für Wanderer und Reisegruppen'
    ]
  },
  provisionsNote: {
    en: 'Small hiking snacks and provisions available for purchase. (Nearest full supermarket is 45 km away in Inari village).',
    fi: 'Pientä retkievästä ostettavissa ravintolastamme. (Lähin ruokakauppa sijaitsee 45 km päässä Inarissa).',
    de: 'Kleine Wandersnacks und Proviant im Restaurant erhältlich. (Der nächste Supermarkt liegt 45 km entfernt im Dorf Inari).'
  }
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    category: 'river',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1400&auto=format&fit=crop',
    title: {
      en: 'Traditional Riverboat on Lemmenjoki',
      fi: 'Perinteinen Jokivene Lemmenjoella',
      de: 'Traditionelles Holzflussboot auf dem Lemmenjoki'
    },
    caption: {
      en: 'Cruising the canyon waters towards Ravadas Falls in Lemmenjoki National Park.',
      fi: 'Jokiveneristeily kansallispuiston kanjonissa kohti Ravadas-putouksia.',
      de: 'Flussbootsfahrt durch die Schlucht des Nationalparks zu den Ravadas-Fällen.'
    },
    alt: 'Traditional long wooden riverboat navigating a clear northern river canyon'
  },
  {
    id: 'g2',
    category: 'cabins',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1400&auto=format&fit=crop',
    title: {
      en: 'Kelo-Log Cabin Fireplace',
      fi: 'Kelomökin Avotakka',
      de: 'Offener Kamin in der Kelo-Blockhütte'
    },
    caption: {
      en: 'Warm crackling hearth in the traditional log cabins across the river.',
      fi: 'Avotakan lämpöä joen toisella puolella sijaitsevassa kelomökissä.',
      de: 'Wohlige Kaminwärme in den urigen Kelo-Hütten am anderen Flussufer.'
    },
    alt: 'Cozy log cabin interior with stone fireplace in Finnish Lapland'
  },
  {
    id: 'g3',
    category: 'wilderness',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop',
    title: {
      en: 'Aerial View of Lemmenjoki Valley',
      fi: 'Ilmakuva Lemmenjoen Laaksosta',
      de: 'Luftaufnahme des Lemmenjoki-Tals'
    },
    caption: {
      en: 'Pristine ancient pine forest flanking the calm river corridor.',
      fi: 'Ikimetsää ja erämaan rauhaa Lemmenjoen rannoilla.',
      de: 'Unberührter Taigawald entlang des weiten Flusslaufs.'
    },
    alt: 'Aerial perspective of winding Lapland river in boreal forest'
  },
  {
    id: 'g4',
    category: 'activities',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5703bc225?q=80&w=1400&auto=format&fit=crop',
    title: {
      en: 'Gold Panning at Historic Claims',
      fi: 'Kullanhuuhdontaa Aidoilla Kultamailla',
      de: 'Goldwaschen an historischen Claim-Plätzen'
    },
    caption: {
      en: 'Washing river gravel with traditional wooden gold pans to uncover native gold.',
      fi: 'Perinteistä kullanhuuhdontaa vaskoolilla Lemmenjoen kultamailla.',
      de: 'Goldwaschen mit traditioneller Pfanne im Flusssand von Lemmenjoki.'
    },
    alt: 'Hands panning river gravel in water searching for gold flakes'
  },
  {
    id: 'g5',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1400&auto=format&fit=crop',
    title: {
      en: 'Ahkun Tupa Restaurant Courtyard',
      fi: 'Ahkun Tuvan Ravintolan Pihapiiri',
      de: 'Gaststube und Hof von Ahkun Tupa'
    },
    caption: {
      en: 'Lappish hospitality, fresh home-baked pies, and panoramic river views since 1955.',
      fi: 'Lappilaista vieraanvaraisuutta, tuoreita piirakoita ja jokimaisemaa vuodesta 1955.',
      de: 'Lappländische Gastlichkeit, frische Beerenkuchen und Flussblick seit 1955.'
    },
    alt: 'Traditional Scandinavian timber lodge building surrounded by spruce trees'
  },
  {
    id: 'g6',
    category: 'winter',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1400&auto=format&fit=crop',
    title: {
      en: 'Winter Solitude & Snow-Covered Spruces',
      fi: 'Talven Hiljaisuus ja Lumikuuset',
      de: 'Winterstille und verschneite Fichten'
    },
    caption: {
      en: 'Lemmenjoki in winter: polar twilight, deep snow, and tranquil northern silence.',
      fi: 'Lemmenjoen talvi: kaamosajan valo, puhdas lumi ja koskematon luonto.',
      de: 'Lemmenjoki im Winter: tief verschneite Wildnis und Polarlichter.'
    },
    alt: 'Snow covered spruce trees in Finnish Lapland during winter twilight'
  }
];
