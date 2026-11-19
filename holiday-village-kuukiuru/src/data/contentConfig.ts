import { AccommodationUnit, ActivityItem, GalleryPhoto } from '../types';

export const BUSINESS_CONFIG = {
  name: 'Holiday Village Kuukiuru',
  tagline: 'Quiet Finnish Lapland Retreat on the River Kemijoki',
  establishedYear: 1986,
  location: {
    address: 'Kuukiuruntie 13',
    postalCode: '98360',
    village: 'Vuostimo',
    municipality: 'Kemijärvi',
    region: 'Lapland',
    country: 'Finland',
    coordinates: {
      lat: 66.8623,
      lng: 27.2458,
    },
    setting: 'Directly alongside the Kemijoki River, situated between the municipalities of Kemijärvi and Sodankylä, adjacent to the Pyhä-Luosto national park and ski fell region.',
    googleMapsUrl: 'https://maps.google.com/?q=Kuukiuruntie+13,+98360+Kemij%C3%A4rvi,+Finland',
  },
  contact: {
    primaryPhone: '+358 (0) 400-199-184',
    secondaryPhone: '+7 (911) 320-04-08',
    email: 'kuukiuru@gmail.com',
    confirmationStatus: 'Verified from official property records; demonstration inquiries are simulated and not routed without explicit client agreement.',
  },
  timings: {
    checkIn: 'From 16:00',
    checkOut: 'Until 12:00',
    operatingSeasons: 'Year-round hospitality (High winter & Midnight sun summer)',
  },
  distances: [
    { destination: 'Kemijärvi Town Center & Station', distance: '30 km', approxTime: '25 min drive' },
    { destination: 'Pyhä Ski Resort & National Park', distance: '28 km', approxTime: '25 min drive' },
    { destination: 'Luosto Fell & Amethyst Mine', distance: '48 km', approxTime: '40 min drive' },
    { destination: 'Rovaniemi Airport (RVN) & Santa Village', distance: '115 km', approxTime: '1h 20m drive' },
    { destination: 'Kittilä Airport (KTT)', distance: '110 km', approxTime: '1h 25m drive' },
    { destination: 'Helsinki (Direct Sleeper Train to Kemijärvi)', distance: '910 km', approxTime: '11.5 hours overnight train' },
  ],
  ratesDisclaimer: 'Historical rates recorded in original archives range between 45€ and 170€ per night depending on unit and season. For current seasonal rates and confirmed availability, please submit an enquiry or contact reception directly.',
  conceptNotice: {
    agency: 'NOVA Digital Studio',
    bannerText: 'Independent website redesign concept by NOVA Digital Studio. Not the official website of Holiday Village Kuukiuru and not affiliated with or endorsed by the property.',
    isDemonstrationOnly: true,
  }
};

export const ACCOMMODATIONS: AccommodationUnit[] = [
  {
    id: 'duplex-cottages',
    slug: 'cottages',
    name: 'Duplex Riverside Cottages',
    category: 'cottages',
    subtitle: 'Autonomous timber cottages with private sauna, fireplace and river terrace',
    description: 'Generously proportioned 45 m² authentic Finnish duplex cottages designed for families and small groups who value quiet autonomy, wood warmth, and instant wilderness access.',
    areaM2: 45,
    capacityAdults: 4,
    capacityChildren: 2,
    roomsDescription: 'Two separate living and sleeping rooms, fully equipped modern kitchen, private shower, lavatory, authentic electric sauna, and outdoor terrace overlooking pine woodland.',
    verifiedAmenities: [
      'Private built-in Finnish sauna',
      'Atmospheric wood fireplace',
      'Private outdoor veranda / terrace',
      'Fully equipped kitchen with dishwasher',
      'Drying room for ski apparel and outdoor gear',
      'Electric underfloor heating',
      'Refrigerator & microwave oven',
      'Television and dining table',
      'High-speed complimentary Wi-Fi'
    ],
    additionalFeatures: [
      'Linen & towel packages available upon request',
      'Direct walking trail to the Kemijoki shoreline',
      'Complimentary winter electrical car-heating hookup'
    ],
    seasonalRatesNote: 'Contact us for current rates (Historical archive reference: 90€ – 150€ / night).',
    verificationStatus: 'verified_from_official_records',
    badge: 'Most Popular',
    images: {
      hero: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop', // Cozy Scandinavian timber cabin in snowy forest
      gallery: [
        'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop', // Warm wood cabin interior fireplace
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop', // Modern clean bedroom with Nordic design
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop'  // Sauna relaxation atmosphere
      ],
      alt: 'Concept photography representing authentic Finnish duplex timber cottage in Lapland forest'
    }
  },
  {
    id: 'main-hotel-rooms',
    slug: 'rooms',
    name: 'Main Building Hotel Rooms & Apartments',
    category: 'rooms',
    subtitle: 'From compact twin rooms to 55 m² panoramic river-view family apartments',
    description: 'Located in the historic central timber building, offering flexible configurations ranging from cozy solo/couple base rooms to grand panoramic river apartments with open fireplaces.',
    capacityAdults: 5,
    capacityChildren: 2,
    roomsDescription: 'Multiple wing configurations across Ground and First Floors, or reserve the entire main lodge (up to 12 adults + 5 children).',
    verifiedAmenities: [
      'River-facing panoramic windows (select suites)',
      'Underfloor heating & open brick fireplaces (select apartments)',
      'Complete private kitchens with dishwasher & microwave (select units)',
      'Central heating and thermal insulation',
      'High-speed Wi-Fi throughout building',
      'Dedicated ski & equipment storage room'
    ],
    additionalFeatures: [
      'Ground Floor Right: 55 m², 5 adults + 2 children, fireplace, full kitchen, river view',
      'First Floor Left: 42 m², 4 adults + 2 children, 2 rooms, kitchen & dishwasher',
      'First Floor Right: 23 m², 2 adults + 1 child, cozy fireplace & direct river view',
      'Ground Floor Left: 6 m², 2 adults, compact budget room with washstand and shared facilities',
      'Full lodge buyout available for groups up to 17 guests total'
    ],
    seasonalRatesNote: 'Contact us for current rates (Historical archive reference: 45€ – 170€ / night).',
    verificationStatus: 'verified_from_official_records',
    badge: 'Flexible Layouts',
    images: {
      hero: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop', // Boutique lodge overlooking Lapland river
      gallery: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop', // Scandinavian minimalist hotel room
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop', // Warm wood suite interior
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop'  // Bright bedroom morning light
      ],
      alt: 'Concept photography representing boutique Scandinavian hotel apartments and timber lodge suites'
    }
  },
  {
    id: 'camping-motorhome',
    slug: 'camping',
    name: 'Riverside Camping & Motorhome Grounds',
    category: 'camping',
    subtitle: 'Scenic shoreline pitches for campervans, caravans, and tent explorers',
    description: 'Immerse directly into northern nature along the Kemijoki riverbank. Featuring reinforced seasonal pitches for motorhomes, tranquil tent sites in pine glades, and full access to service buildings.',
    capacityAdults: 6,
    capacityChildren: 4,
    roomsDescription: 'Level marked electrical caravan pitches and grass wilderness tent areas with direct water access.',
    verifiedAmenities: [
      'Seasonal electrical hookups for motorhomes & caravans',
      'Direct access to Kemijoki river shoreline & private boat dock',
      'Access to central service building with WC, showers & dishwashing',
      'Shared Finnish kota shelter with open-fire barbecue',
      'Waste disposal and fresh drinking water station',
      'Complimentary Wi-Fi in common hub areas'
    ],
    additionalFeatures: [
      '5th consecutive night free for campers (verified traditional property perk)',
      'Long-term seasonal tourist parking packages available',
      'Convenient boat launch berth directly adjacent to pitches'
    ],
    seasonalRatesNote: 'Contact us for current rates (Traditional long-term parking approx. 35€ / month).',
    verificationStatus: 'verified_from_official_records',
    badge: 'Waterfront Pitches',
    images: {
      hero: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1600&auto=format&fit=crop', // Camper van pitched beside quiet Nordic lake/river at sunset
      gallery: [
        'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop', // Camping tent in Scandinavian pine forest
        'https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=1200&auto=format&fit=crop', // Riverside campfire at dusk
        'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1200&auto=format&fit=crop'  // Peaceful morning by calm Lapland water
      ],
      alt: 'Concept photography representing camper van and tent camping on the Kemijoki riverfront'
    }
  }
];

export const ACTIVITIES: ActivityItem[] = [
  // Winter
  {
    id: 'cross-country-skiing',
    title: 'Cross-Country & Fell Skiing',
    season: 'winter',
    category: 'snow',
    summary: 'Glide along riverside forest tracks or venture 25 minutes to the slopes of Pyhä and Luosto.',
    description: 'Lapland winter at Kuukiuru offers tranquil forest trails starting right from your cabin door, with immediate proximity to Pyhä-Luosto National Park ski lifts and world-class illuminated cross-country tracks.',
    verifiedEquipment: ['Complimentary guest ski storage room', 'Drying room for gear in cottages'],
    locationNote: 'Direct forest access; Pyhä ski resort 28 km away.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'snowmobiling',
    title: 'Snowmobile Safaris & Wilderness Trails',
    season: 'winter',
    category: 'snow',
    summary: 'Traverse frozen river plains and snow-dusted fell forests across regional trail networks.',
    description: 'Experience exhilarating rides through pristine Lapland snowfields. The Kemijoki river valley connects to expansive regional snowmobile trail networks spanning Kemijärvi, Pyhä, and Sodankylä.',
    verifiedEquipment: ['Designated winter transport parking', 'Equipment storage facilities'],
    locationNote: 'Direct river trail access connecting to regional tracks.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'winter-sauna',
    title: 'Traditional Wood Sauna & Snow Dip',
    season: 'winter',
    category: 'leisure',
    summary: 'Invigorating Finnish löyly on the riverbank followed by a roll in the powdery Lapland snow.',
    description: 'A hallmark of Finnish wellbeing: warm up by the crackling wood stove of the authentic riverside sauna, then step out beneath the starry polar sky or northern twilight.',
    verifiedEquipment: ['Rent of firewood sauna (up to 4 persons)', 'Main 30 m² sauna complex'],
    locationNote: 'Directly on the Kemijoki riverbank with private dock.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop'
  },

  // Summer
  {
    id: 'kemijoki-fishing',
    title: 'Kemijoki River Fishing',
    season: 'summer',
    category: 'water',
    summary: 'Pike, perch, trout and grayling fishing along one of Lapland’s most storied waterways.',
    description: 'The Kemijoki River is famed for its rich fisheries. Guests can fish directly from the property’s shoreline pier or take a boat onto the calm waters.',
    verifiedEquipment: ['Official fishing licences sold directly on site', 'Guest boat berth and pier'],
    locationNote: 'Property shoreline and river channels.',
    requiresPermitOrFee: true,
    image: 'https://images.unsplash.com/photo-1508873696983-2df5703bc225?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'canoeing-boating',
    title: 'Canoeing, Motorboats & Hydrocycles',
    season: 'summer',
    category: 'water',
    summary: 'Navigate serene river channels, hidden islands, and quiet bays under the Midnight Sun.',
    description: 'Explore the Kemijoki at your own pace. The holiday village provides access to watercraft rentals including canoes, motorized skiffs, and pedal hydrocycles suitable for all ages.',
    verifiedEquipment: ['Canoe hire', 'Motorboat rental', 'Pedal hydrocycles', 'Life jackets & safety gear'],
    locationNote: 'Launches directly from the Kuukiuru private pier.',
    requiresPermitOrFee: true,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'foraging-hiking',
    title: 'Berry & Mushroom Foraging Hikes',
    season: 'summer',
    category: 'forest',
    summary: 'Harvest cloudberries, lingonberries, blueberries, and wild forest mushrooms under Everyman’s Right.',
    description: 'Lapland forests produce an extraordinary abundance of wild superfoods in late summer and autumn. Golden cloudberries ripen on nearby peatlands, while crisp chanterelles and porcini carpet the pine woods.',
    verifiedEquipment: ['Marked walking trails directly from property', 'Everyman’s Right (Jokamiehenoikeus)'],
    locationNote: 'Surrounding Kemijärvi and Vuostimo pine forests.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'cycling-minigolf',
    title: 'Forest Cycling & On-Site Mini Golf',
    season: 'summer',
    category: 'leisure',
    summary: 'Family recreation featuring bicycle hire and an on-site miniature golf course.',
    description: 'Cycle scenic country lanes through Vuostimo village or enjoy leisurely afternoons on the resort’s dedicated miniature golf greens alongside the children’s playground.',
    verifiedEquipment: ['Bicycle hiring service', 'Miniature golf course & putters', 'Children’s playground'],
    locationNote: 'On-site grounds and village roads.',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1200&auto=format&fit=crop'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'First Snow over the Kemijoki',
    category: 'winter',
    season: 'winter',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1400&auto=format&fit=crop',
    caption: 'Soft twilight settling over snow-laden spruces along the Kemijoki riverbank.',
    alt: 'Lapland winter forest with snow covered spruces'
  },
  {
    id: 'g2',
    title: 'Cozy Timber Cabin Glow',
    category: 'accommodation',
    season: 'winter',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1400&auto=format&fit=crop',
    caption: 'Warm amber light emanating from private duplex cabins into the polar night.',
    alt: 'Wooden cabin in snowy Finnish Lapland illuminated at night'
  },
  {
    id: 'g3',
    title: 'Aerial View of the Kemijoki Bend',
    category: 'aerial',
    season: 'summer',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop',
    caption: 'Panoramic aerial perspective of the Kemijoki winding through ancient boreal wilderness.',
    alt: 'Breathtaking aerial view of northern river and boreal forest'
  },
  {
    id: 'g4',
    title: 'Lakeside Sauna Ritual',
    category: 'sauna',
    season: 'summer',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1400&auto=format&fit=crop',
    caption: 'The authentic Finnish löyly ritual in the wood-fired riverside sauna house.',
    alt: 'Traditional Finnish wood-heated sauna bench and bucket'
  },
  {
    id: 'g5',
    title: 'Midnight Sun on the Water',
    category: 'summer',
    season: 'summer',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop',
    caption: 'Eternal daylight casting golden reflections across calm river waters in July.',
    alt: 'Calm water surface illuminated by the golden Finnish midnight sun'
  },
  {
    id: 'g6',
    title: 'Canoeing the Silent Backwaters',
    category: 'activities',
    season: 'summer',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1400&auto=format&fit=crop',
    caption: 'Paddling peaceful river channels surrounded by pure northern air and silence.',
    alt: 'Red canoe gliding across quiet forested river water'
  },
  {
    id: 'g7',
    title: 'Warm Hearth & Cabin Living',
    category: 'accommodation',
    season: 'winter',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1400&auto=format&fit=crop',
    caption: 'Rustic stone fireplace and natural timber interiors in the duplex living quarters.',
    alt: 'Cozy living room with burning fireplace and timber beams'
  },
  {
    id: 'g8',
    title: 'Riverside Camper Haven',
    category: 'nature',
    season: 'summer',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1400&auto=format&fit=crop',
    caption: 'Motorhome pitches situated right on the grass shoreline with undisturbed views.',
    alt: 'Camper van parked at scenic lakeside spot in northern wilderness'
  },
  {
    id: 'g9',
    title: 'The Polar Night & Northern Star',
    category: 'winter',
    season: 'winter',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop',
    caption: 'Pristine deep snow under a crystal-clear Lapland sky.',
    alt: 'Deep snow and snowy birch trees under twilight sky'
  }
];

export const SAUNA_DETAILS = {
  title: 'The Finnish Sauna Tradition at Kuukiuru',
  headline: 'Where heat, river water, and silence restore the spirit.',
  introduction: 'In Finland, the sauna is not an amenity — it is a sanctuary. At Holiday Village Kuukiuru, sauna culture has been nurtured since 1986 beside the cool flowing waters of the Kemijoki.',
  facilities: [
    {
      name: 'Riverside Wood-Fired Sauna',
      capacity: 'Up to 4 persons',
      description: 'Perched directly on the riverbank, heated by seasoned birch firewood. Features a direct wooden boardwalk leading to the private swimming dock and guest berth for a refreshing dip.',
      verificationNote: 'Recorded in official property facilities (max 4 persons, firewood rental).'
    },
    {
      name: 'Main Sauna Complex',
      capacity: 'Up to 4 persons (30 m² floor plan)',
      description: 'Generously proportioned 30 m² traditional Finnish sauna facility with comfortable washing rooms and wood relaxation lounges.',
      verificationNote: 'Recorded in official property facilities (30 m² space, rent per session).'
    },
    {
      name: 'Private In-Cabin Saunas',
      capacity: '2 to 4 persons',
      description: 'Every duplex cottage includes its own built-in electric sauna for spontaneous warmth after a day in the snow or on the river.',
      verificationNote: 'Standard feature in all 45 m² duplex cottages.'
    }
  ],
  etiquette: [
    'Traditional birch wood heating releases gentle, moist löyly steam.',
    'Swim or dip directly into the pristine Kemijoki River between löyly rounds.',
    'Towels and fresh seat linen available upon request.',
    'Private bookings ensure complete seclusion for your travel party.'
  ]
};

export const CAFE_DETAILS = {
  title: 'Cozy Finnish Café & Timber Kota Gatherings',
  headline: 'Authentic Lapland hospitality, hot berry juice, and crackling campfires.',
  capacity: 'Up to 40 guests for celebrations, jubilees & corporate events',
  confirmationStatus: 'Verified from official property records (café for up to 40 persons).',
  description: 'The property’s cozy Finnish-style café serves as a warm social hearth. Whether enjoying a cup of freshly brewed coffee, gathering with friends after a winter trek, or hosting a milestone celebration, our timber hall welcomes you with genuine northern warmth.',
  features: [
    {
      title: 'Cozy Finnish Timber Café',
      text: 'Seating up to 40 guests in traditional Finnish lodge decor, suitable for private events, family jubilees, and company retreats.'
    },
    {
      title: 'Traditional Tent-Kota Shelter',
      text: 'Authentic Lappish octagonal wooden kota equipped with an open central hearth for slow campfire cooking, grilling, and storytelling.'
    },
    {
      title: 'Outdoor Barbecue & Children’s Area',
      text: 'Property-wide barbecue spots and a dedicated children’s grill right next to the equipped playground.'
    },
    {
      title: 'Hospitable Northern Welcome',
      text: 'As the local hosts have noted since 1986, our personnel are delighted to brew you a steaming cup of coffee and share insider guidance on the valley.'
    }
  ],
  cateringNote: 'Food service, custom celebratory menus, and group catering arrangements are tailored upon preliminary request.'
};
