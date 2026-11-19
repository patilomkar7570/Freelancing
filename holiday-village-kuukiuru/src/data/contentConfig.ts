import { AccommodationUnit, ActivityItem, GalleryPhoto } from '../types';

export const BUSINESS_CONFIG = {
  name: 'Kuura Riverside Resort',
  brandShort: 'KUURA',
  tagline: 'Nordic Wilderness & Riverside Cabins in Finnish Lapland',
  establishedYear: 1992,
  location: {
    address: 'Jokitie 24',
    postalCode: '98360',
    village: 'Kemijoki Valley',
    municipality: 'Kemijärvi',
    region: 'Lapland',
    country: 'Finland',
    coordinates: {
      lat: 66.8623,
      lng: 27.2458,
    },
    setting: 'Situated directly along the Kemijoki River amidst boreal pine forests in Finnish Lapland, near the Pyhä-Luosto fell region.',
    googleMapsUrl: 'https://maps.google.com/?q=Kemij%C3%A4rvi,+Lapland,+Finland',
  },
  contact: {
    primaryPhone: '+358 16 888 2400',
    secondaryPhone: '+358 40 555 7890',
    email: 'stay@kuuraresort.fi',
    confirmationStatus: 'Concept demonstration directory — all details and communications are illustrative simulations.',
  },
  timings: {
    checkIn: 'From 16:00',
    checkOut: 'Until 12:00',
    operatingSeasons: 'Year-round hospitality (Arctic winter & Midnight sun summer)',
  },
  distances: [
    { destination: 'Kemijärvi Railway Station', distance: '28 km', approxTime: '25 min drive' },
    { destination: 'Pyhä Fell & National Park', distance: '30 km', approxTime: '25 min drive' },
    { destination: 'Luosto Fell & Amethyst Mine', distance: '46 km', approxTime: '40 min drive' },
    { destination: 'Rovaniemi Airport (RVN)', distance: '118 km', approxTime: '1h 20m drive' },
    { destination: 'Kittilä Airport (KTT)', distance: '112 km', approxTime: '1h 25m drive' },
    { destination: 'Helsinki (Direct Overnight Train)', distance: '910 km', approxTime: '11.5 hours sleeper train' },
  ],
  ratesDisclaimer: 'Seasonal rates are subject to seasonal schedules. For current availability, seasonal offers, and direct inquiries, please submit an enquiry form or contact our front desk.',
  conceptNotice: {
    agency: 'NOVA Digital Studio',
    bannerText: 'Demonstration concept by NOVA Digital Studio. Kuura Riverside Resort is a fictional hospitality redesign concept.',
    isDemonstrationOnly: true,
  }
};

export const ACCOMMODATIONS: AccommodationUnit[] = [
  {
    id: 'duplex-cottages',
    slug: 'cottages',
    name: 'Duplex Riverside Cottages',
    category: 'cottages',
    subtitle: 'Independent timber cottages with private sauna, stone fireplace and forest terrace',
    description: 'Generously proportioned 48 m² authentic Finnish timber duplex cottages designed for families and small groups who value peaceful autonomy, natural wood warmth, and direct river access.',
    areaM2: 48,
    capacityAdults: 4,
    capacityChildren: 2,
    roomsDescription: 'Two separate living and sleeping rooms, fully equipped modern kitchen, private shower, lavatory, authentic electric sauna, and outdoor terrace overlooking pine woodland.',
    verifiedAmenities: [
      'Private built-in Finnish sauna',
      'Atmospheric wood-burning fireplace',
      'Private outdoor veranda overlooking nature',
      'Fully equipped kitchen with dishwasher',
      'Drying cabinet for outdoor and winter gear',
      'Electric underfloor heating',
      'Refrigerator & microwave oven',
      'Smart television and dining area',
      'High-speed complimentary Wi-Fi'
    ],
    additionalFeatures: [
      'Linen & towel packages available upon request',
      'Direct walking trail to the river shoreline',
      'Winter electrical vehicle heating hookup'
    ],
    seasonalRatesNote: 'Contact us for current seasonal rates.',
    verificationStatus: 'verified_from_official_records',
    badge: 'Most Popular',
    images: {
      hero: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: 'Atmospheric Scandinavian timber duplex cabin in snowy Lapland forest'
    }
  },
  {
    id: 'main-hotel-rooms',
    slug: 'rooms',
    name: 'Lodge Rooms & Panoramic Suites',
    category: 'rooms',
    subtitle: 'From compact twin suites to 55 m² panoramic river-view apartments',
    description: 'Located in the central timber lodge, offering flexible configurations ranging from cozy couple retreats to grand panoramic river suites with private fireplaces.',
    capacityAdults: 5,
    capacityChildren: 2,
    roomsDescription: 'Multiple wing configurations across Ground and First Floors, or reserve the entire main lodge (up to 16 guests total).',
    verifiedAmenities: [
      'River-facing panoramic windows (select suites)',
      'Underfloor heating & open fireplaces (select suites)',
      'Complete private kitchens with dishwasher & microwave',
      'Central heating and natural thermal insulation',
      'High-speed Wi-Fi throughout building',
      'Dedicated ski & outdoor equipment storage'
    ],
    additionalFeatures: [
      'Riverside Family Suite: 55 m², 5 adults + 2 children, fireplace, full kitchen, river view',
      'Woodland Loft Suite: 42 m², 4 adults + 2 children, 2 rooms, kitchen & dishwasher',
      'Riverside Twin Suite: 24 m², 2 adults + 1 child, fireplace & water view',
      'Compact Forest Base: 12 m², 2 adults, private washstand and shared facilities',
      'Full lodge buyout available for groups up to 16 guests total'
    ],
    seasonalRatesNote: 'Contact us for current seasonal rates.',
    verificationStatus: 'verified_from_official_records',
    badge: 'Flexible Layouts',
    images: {
      hero: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: 'Scandinavian boutique lodge suites and panoramic river view rooms'
    }
  },
  {
    id: 'camping-motorhome',
    slug: 'camping',
    name: 'Riverside Camping & Motorhome Grounds',
    category: 'camping',
    subtitle: 'Scenic shoreline pitches for campervans, caravans, and wilderness tents',
    description: 'Immerse directly into northern nature along the Kemijoki riverbank. Featuring reinforced seasonal pitches for motorhomes, tranquil tent sites in pine glades, and full access to modern service buildings.',
    capacityAdults: 6,
    capacityChildren: 4,
    roomsDescription: 'Level marked electrical caravan pitches and grass wilderness tent areas with direct water access.',
    verifiedAmenities: [
      'Seasonal electrical hookups for motorhomes & caravans',
      'Direct access to Kemijoki shoreline & private boat dock',
      'Access to central service building with WC, showers & dishwashing',
      'Shared Finnish kota shelter with open-fire barbecue',
      'Waste disposal and fresh drinking water station',
      'Complimentary Wi-Fi in common hub areas'
    ],
    additionalFeatures: [
      'Complimentary 5th night promotion for extended camping guests',
      'Seasonal monthly tourist parking packages available',
      'Convenient boat launch berth directly adjacent to pitches'
    ],
    seasonalRatesNote: 'Contact us for seasonal pitch rates.',
    verificationStatus: 'verified_from_official_records',
    badge: 'Waterfront Pitches',
    images: {
      hero: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1600&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: 'Camper van and tent camping on the Kemijoki riverfront'
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
    summary: 'Glide along riverside forest tracks or venture 25 minutes to the fells of Pyhä and Luosto.',
    description: 'Lapland winter offers tranquil forest trails starting right from your cabin door, with immediate proximity to Pyhä-Luosto National Park ski lifts and world-class illuminated cross-country tracks.',
    verifiedEquipment: ['Complimentary guest ski storage room', 'Drying cabinet for gear in cottages'],
    locationNote: 'Direct forest access; Pyhä ski resort 30 km away.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'snowmobiling',
    title: 'Snowmobile Safaris & Wilderness Trails',
    season: 'winter',
    category: 'snow',
    summary: 'Traverse frozen river plains and snow-dusted fell forests across regional trail networks.',
    description: 'Experience exhilarating rides through pristine Lapland snowfields. The Kemijoki river valley connects to expansive regional snowmobile trail networks spanning marked wilderness routes.',
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
    verifiedEquipment: ['Wood-fired sauna sessions (up to 4 persons)', 'Main 30 m² sauna complex'],
    locationNote: 'Directly on the riverbank with private dock.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop'
  },

  // Summer
  {
    id: 'kemijoki-fishing',
    title: 'Kemijoki River Fishing',
    season: 'summer',
    category: 'water',
    summary: 'Pike, perch, trout and grayling fishing along one of Lapland’s most storied waterways.',
    description: 'The Kemijoki River is famed for its rich fisheries. Guests can fish directly from the property shoreline pier or take a boat onto the calm waters.',
    verifiedEquipment: ['Fishing permits guidance and assistance', 'Guest boat berth and pier'],
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
    description: 'Explore the Kemijoki at your own pace. The resort provides access to watercraft rentals including canoes, motorized skiffs, and pedal hydrocycles suitable for all ages.',
    verifiedEquipment: ['Canoe hire', 'Motorboat rental', 'Pedal hydrocycles', 'Life jackets & safety gear'],
    locationNote: 'Launches directly from the private pier.',
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
    locationNote: 'Surrounding pine and birch boreal forests.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'cycling-minigolf',
    title: 'Forest Cycling & On-Site Mini Golf',
    season: 'summer',
    category: 'leisure',
    summary: 'Family recreation featuring bicycle hire and an on-site miniature golf course.',
    description: 'Cycle scenic country lanes through surrounding woodlands or enjoy leisurely afternoons on the resort’s dedicated miniature golf greens alongside the children’s playground.',
    verifiedEquipment: ['Bicycle hiring service', 'Miniature golf course & putters', 'Children’s playground'],
    locationNote: 'On-site grounds and quiet forest lanes.',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1200&auto=format&fit=crop'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'First Snow over the River',
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
    title: 'Aerial View of the River Bend',
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
  title: 'The Finnish Sauna Tradition at Kuura',
  headline: 'Where heat, river water, and silence restore the spirit.',
  introduction: 'In Finland, the sauna is not an amenity — it is a sanctuary. At Kuura Riverside Resort, authentic sauna culture is embraced beside the cool flowing waters of the Kemijoki.',
  facilities: [
    {
      name: 'Riverside Wood-Fired Sauna',
      capacity: 'Up to 4 persons',
      description: 'Perched directly on the riverbank, heated by seasoned birch firewood. Features a direct wooden boardwalk leading to the private swimming dock and guest berth for a refreshing dip.',
      verificationNote: 'Authentic wood-heated riverside sauna facility.'
    },
    {
      name: 'Main Sauna Complex',
      capacity: 'Up to 6 persons (30 m² floor plan)',
      description: 'Generously proportioned 30 m² traditional Finnish sauna facility with comfortable washing rooms and wood relaxation lounges.',
      verificationNote: 'Spacious central sauna facility.'
    },
    {
      name: 'Private In-Cabin Saunas',
      capacity: '2 to 4 persons',
      description: 'Every duplex cottage includes its own built-in electric sauna for spontaneous warmth after a day in the snow or on the river.',
      verificationNote: 'Standard feature in all duplex cottages.'
    }
  ],
  etiquette: [
    'Traditional birch wood heating releases gentle, moist löyly steam.',
    'Swim or dip directly into the pristine river water between löyly rounds.',
    'Towels and fresh seat linen available upon request.',
    'Private bookings ensure complete seclusion for your travel party.'
  ]
};

export const CAFE_DETAILS = {
  title: 'Cozy Finnish Timber Café & Kota Gatherings',
  headline: 'Authentic Lapland hospitality, hot berry juice, and crackling campfires.',
  capacity: 'Up to 40 guests for private gatherings, retreats & celebrations',
  confirmationStatus: 'Demonstration concept facilities.',
  description: 'The resort’s cozy timber café serves as a warm social hearth. Whether enjoying a cup of freshly brewed coffee, gathering with friends after a winter trek, or hosting a milestone celebration, our timber hall welcomes you with genuine northern warmth.',
  features: [
    {
      title: 'Cozy Finnish Timber Café',
      text: 'Seating up to 40 guests in traditional Finnish lodge decor, suitable for private events, family gatherings, and company retreats.'
    },
    {
      title: 'Traditional Tent-Kota Shelter',
      text: 'Authentic Lappish octagonal wooden kota equipped with an open central hearth for slow campfire cooking, grilling, and storytelling.'
    },
    {
      title: 'Outdoor Barbecue & Children’s Area',
      text: 'Resort-wide barbecue spots and a dedicated children’s grill right next to the equipped playground.'
    },
    {
      title: 'Hospitable Northern Welcome',
      text: 'Our personnel are delighted to brew you a steaming cup of coffee and share insider guidance on the valley.'
    }
  ],
  cateringNote: 'Food service, custom celebratory menus, and group catering arrangements are tailored upon preliminary request.'
};
