import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/ui/SectionHeader';
import { VerificationBadge } from '../components/ui/VerificationBadge';
import { BUSINESS_CONFIG, ACCOMMODATIONS, ACTIVITIES } from '../data/contentConfig';
import { 
  CalendarCheck, 
  ArrowRight, 
  Compass, 
  Flame, 
  Snowflake, 
  Sun, 
  Waves, 
  Trees, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* =========================================================================
          HERO SECTION — Cinematic Scandinavian Editorial
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-nordic-forest text-nordic-snow pt-12 pb-20">
        
        {/* Layered Background Imagery with Subtle Tone Blend */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=2000&auto=format&fit=crop"
            alt="Scenic Finnish Lapland winter boreal forest and pristine Kemijoki river"
            className="w-full h-full object-cover object-center opacity-45 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nordic-forest via-nordic-forest/40 to-transparent" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-nordic-forest/30 to-nordic-forest/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 pt-8">
          
          {/* Metadata pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nordic-snow/10 backdrop-blur-md border border-nordic-snow/20 text-[11px] font-mono tracking-[0.2em] uppercase text-nordic-lake">
            <span className="w-1.5 h-1.5 rounded-full bg-nordic-lake animate-pulse" />
            <span>Kemijärvi · Finnish Lapland · Riverside Retreat</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-nordic-snow leading-[1.08] max-w-4xl mx-auto">
            Find your place in the <span className="italic text-nordic-lake font-normal">quiet</span> of Lapland.
          </h1>

          {/* Supporting Copy */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-nordic-snow/90 font-light leading-relaxed">
            Woodland accommodation, riverside moments and year-round experiences in the heart of Finnish Lapland.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <Link
              to="/reservations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-nordic-cabin hover:bg-[#8D4430] text-nordic-snow px-8 py-4 rounded-full text-xs font-semibold tracking-[0.16em] uppercase transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Make a Reservation Enquiry</span>
            </Link>

            <Link
              to="/accommodation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-nordic-snow/15 hover:bg-nordic-snow/25 backdrop-blur-md text-nordic-snow border border-nordic-snow/30 px-7 py-4 rounded-full text-xs font-semibold tracking-[0.16em] uppercase transition-all hover:-translate-y-0.5"
            >
              <span>Explore Accommodation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Restrained Key Highlights */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-nordic-snow/20 text-xs">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-nordic-lake">Setting</span>
              <p className="font-medium text-nordic-snow">River Kemijoki Bank</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-nordic-lake">Location</span>
              <p className="font-medium text-nordic-snow">Between Kemijärvi & Pyhä</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-nordic-lake">Tradition</span>
              <p className="font-medium text-nordic-snow">Riverside Wood Sauna</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-nordic-lake">Heritage</span>
              <p className="font-medium text-nordic-snow">Welcoming Guests Since 1986</p>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION C — INTRODUCTION
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-nordic-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                tag="Welcome to Kuura"
                title="A place to slow down, explore and stay awhile."
                description="Situated along the peaceful banks of the Kemijoki River in the Kemijärvi fell region, Kuura Riverside Resort welcomes travelers seeking authentic northern tranquility, starry polar skies, and genuine wilderness comfort."
              />
              <p className="text-nordic-muted text-base leading-relaxed">
                Positioned near the pristine fells of Pyhä and Luosto, the resort provides an unhurried sanctuary where Finnish sauna culture, vast boreal forests, and the gentle rhythm of the river replace the noise of modern life.
              </p>
              
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2.5 text-nordic-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-nordic-pine shrink-0" />
                  <span>Autonomous Duplex Timber Cottages</span>
                </div>
                <div className="flex items-center gap-2.5 text-nordic-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-nordic-pine shrink-0" />
                  <span>Authentic Riverside Wood-Heated Sauna</span>
                </div>
                <div className="flex items-center gap-2.5 text-nordic-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-nordic-pine shrink-0" />
                  <span>Licensed River Fishing & Boat Hire</span>
                </div>
                <div className="flex items-center gap-2.5 text-nordic-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-nordic-pine shrink-0" />
                  <span>Cozy 40-Seat Finnish Café & Kota Hearth</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/location"
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase font-semibold text-nordic-forest hover:text-nordic-cabin transition-colors"
                >
                  <span>Read about our Lapland location & travel routes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
                    alt="Authentic Finnish timber cabin in snowy Lapland forest"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Overlaid architectural caption badge */}
                <div className="absolute -bottom-6 -left-4 sm:left-6 bg-nordic-snow p-4 sm:p-5 rounded-xl shadow-lg border border-nordic-border max-w-xs">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-nordic-pine block font-semibold">
                    Finnish Boreal Architecture
                  </span>
                  <p className="text-xs text-nordic-charcoal mt-1">
                    Warm timber construction with private saunas, stone fireplaces, and direct forest tracks.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION D — ACCOMMODATION PREVIEW
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-nordic-surface border-y border-nordic-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeader
              tag="Stay with us"
              title="Accommodations for every journey."
              description="From autonomous duplex cottages with private saunas to scenic riverside camping pitches, discover verified lodging tailored to your style of travel."
            />
            <Link
              to="/accommodation"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold text-nordic-forest hover:text-nordic-cabin shrink-0"
            >
              <span>View all specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACCOMMODATIONS.map((unit) => (
              <div
                key={unit.id}
                className="bg-nordic-snow rounded-2xl overflow-hidden border border-nordic-border flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={unit.images.hero}
                      alt={unit.images.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {unit.badge && (
                        <span className="bg-nordic-forest/90 text-nordic-snow text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-sm">
                          {unit.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-nordic-muted">
                        {unit.category === 'cottages' ? 'Duplex Cottage' : unit.category === 'rooms' ? 'Lodge Rooms' : 'Camping Grounds'}
                      </span>
                      <VerificationBadge status={unit.verificationStatus} />
                    </div>

                    <h3 className="font-serif text-2xl font-normal text-nordic-charcoal group-hover:text-nordic-cabin transition-colors">
                      {unit.name}
                    </h3>

                    <p className="text-xs text-nordic-muted leading-relaxed">
                      {unit.subtitle}
                    </p>

                    <div className="pt-2 border-t border-nordic-border/70 space-y-1.5 text-xs text-nordic-charcoal">
                      <div className="flex items-center justify-between">
                        <span className="text-nordic-muted">Capacity:</span>
                        <span className="font-medium">{unit.capacityAdults} adults {unit.capacityChildren > 0 ? `+ ${unit.capacityChildren} children` : ''}</span>
                      </div>
                      {unit.areaM2 && (
                        <div className="flex items-center justify-between">
                          <span className="text-nordic-muted">Floor area:</span>
                          <span className="font-medium">{unit.areaM2} m²</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-3">
                  <div className="text-[11px] font-mono text-nordic-pine font-medium">
                    {unit.seasonalRatesNote}
                  </div>
                  <Link
                    to={`/accommodation/${unit.slug}`}
                    className="w-full block text-center bg-nordic-surface hover:bg-nordic-border/60 text-nordic-charcoal py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    View Details & Specs
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION E — SEASONAL EXPERIENCES (WINTER & SUMMER SPLIT)
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-nordic-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <SectionHeader
            tag="The rhythm of Lapland"
            title="Two distinct worlds."
            italicWord="One river valley."
            description="The Kemijoki River transforms throughout the year. From the crisp silence of snow-laden spruce forests to 24 hours of golden Midnight Sun, explore genuine seasonal recreation."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Winter Experience Card */}
            <div className="bg-nordic-forest text-nordic-snow rounded-3xl overflow-hidden shadow-xl border border-[#375344] flex flex-col justify-between group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
                  alt="Winter in Finnish Lapland with deep snow and forest ski trails"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-nordic-snow/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 text-nordic-snow">
                  <Snowflake className="w-3.5 h-3.5 text-nordic-lake" />
                  <span>Winter in Lapland</span>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-normal text-nordic-snow">
                    Snowfields, Fell Skiing & Frozen Silence
                  </h3>
                  <p className="text-sm text-nordic-snow/80 leading-relaxed">
                    Winter recreation at Kuura centers on pristine nature: glide along peaceful forest ski tracks, embark on snowmobile routes across frozen river plains, and warm up by an open hearth.
                  </p>
                </div>

                <ul className="space-y-2 text-xs text-nordic-snow/90">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-nordic-lake" />
                    <span>Immediate proximity to Pyhä & Luosto ski resorts (28–48 km)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-nordic-lake" />
                    <span>Free on-site sport equipment storage & drying rooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-nordic-lake" />
                    <span>Authentic firewood sauna on the snowy riverbank</span>
                  </li>
                </ul>

                <Link
                  to="/experiences/winter"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-nordic-lake hover:text-nordic-snow font-semibold pt-2"
                >
                  <span>Explore Winter Experiences</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Summer Experience Card */}
            <div className="bg-[#2D4539] text-nordic-snow rounded-3xl overflow-hidden shadow-xl border border-[#3d5e4d] flex flex-col justify-between group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop"
                  alt="Summer canoeing and boating under the midnight sun on Kemijoki river"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-nordic-snow/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 text-nordic-snow">
                  <Sun className="w-3.5 h-3.5 text-nordic-cabin" />
                  <span>Summer on the Kemijoki</span>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-normal text-nordic-snow">
                    Midnight Sun, Boating & River Fishing
                  </h3>
                  <p className="text-sm text-nordic-snow/80 leading-relaxed">
                    Summer brings continuous daylight and gentle river breezes. Paddle canoes into secluded bays, cast for grayling with permits obtained on site, or forage for golden cloudberries in late summer.
                  </p>
                </div>

                <ul className="space-y-2 text-xs text-nordic-snow/90">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-nordic-cabin" />
                    <span>Canoe, motorboat, and pedal hydrocycle rentals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-nordic-cabin" />
                    <span>Fishing licences sold directly on property with guest berth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-nordic-cabin" />
                    <span>Everyman’s Right foraging for wild berries and forest mushrooms</span>
                  </li>
                </ul>

                <Link
                  to="/experiences/summer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-nordic-lake hover:text-nordic-snow font-semibold pt-2"
                >
                  <span>Explore Summer Experiences</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION F — THE SAUNA EXPERIENCE
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#1F332A] text-nordic-snow relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <SectionHeader
                tag="Sanctuary of Heat & Water"
                title="The authentic Finnish sauna ritual."
                description="For centuries, the Finnish sauna has been a place for physical cleansing, contemplation, and peaceful renewal. At Kuura, the experience is anchored directly on the banks of the Kemijoki River."
                dark={true}
              />

              <div className="space-y-4 pt-2 text-sm text-nordic-snow/85">
                <div className="p-4 rounded-xl bg-nordic-snow/5 border border-nordic-snow/10 space-y-1">
                  <div className="font-semibold text-nordic-lake flex items-center gap-2 text-xs font-mono uppercase">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Wood-Fired Riverside Sauna</span>
                  </div>
                  <p className="text-xs text-nordic-snow/80">
                    Heated with birch logs right beside the water, complete with a private dock for swimming in summer or stepping into the snow in winter. Max 4 persons.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-nordic-snow/5 border border-nordic-snow/10 space-y-1">
                  <div className="font-semibold text-nordic-lake flex items-center gap-2 text-xs font-mono uppercase">
                    <Waves className="w-3.5 h-3.5" />
                    <span>Main 30 m² Complex</span>
                  </div>
                  <p className="text-xs text-nordic-snow/80">
                    Spacious traditional sauna facility with washing and relaxation areas for post-sauna cooling.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/sauna-and-relaxation"
                  className="inline-flex items-center gap-2 bg-nordic-cabin hover:bg-[#8D4430] text-nordic-snow px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <span>Learn About the Sauna Ritual</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop"
                    alt="Traditional Finnish wooden sauna interior with ladle and löyly steam"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
                    alt="Kemijoki river water and pristine Lapland swimming dock"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION G — ACTIVITIES HIGHLIGHTS
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-nordic-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeader
              tag="Wilderness & Leisure"
              title="Verified property activities."
              description="Kuura offers outdoor pursuits directly from the property grounds as well as seamless connections to regional trails."
            />
            <Link
              to="/experiences"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold text-nordic-forest hover:text-nordic-cabin shrink-0"
            >
              <span>Explore all activities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACTIVITIES.slice(0, 4).map((activity) => (
              <div
                key={activity.id}
                className="bg-nordic-snow rounded-xl overflow-hidden border border-nordic-border hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-nordic-forest/80 backdrop-blur-sm text-nordic-snow text-[10px] font-mono uppercase px-2 py-0.5 rounded">
                      {activity.season}
                    </span>
                  </div>
                  <div className="p-5 space-y-2">
                    <h4 className="font-serif text-xl font-normal text-nordic-charcoal">
                      {activity.title}
                    </h4>
                    <p className="text-xs text-nordic-muted leading-relaxed">
                      {activity.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="text-[11px] font-mono text-nordic-pine">
                    {activity.verifiedEquipment[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION H — GALLERY PREVIEW
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-nordic-surface border-t border-nordic-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeader
              tag="Visual Storytelling"
              title="Glimpses of Kuura."
              description="A curated preview of life on the Kemijoki River across both seasons."
            />
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold text-nordic-forest hover:text-nordic-cabin shrink-0"
            >
              <span>Enter Full Gallery Lightbox</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden aspect-square shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=800&auto=format&fit=crop"
                alt="Lapland winter scenery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop"
                alt="Timber cabin illuminated in snow"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
                alt="Kemijoki river aerial view"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop"
                alt="Canoeing in northern summer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION I — LOCATION PREVIEW
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-nordic-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-nordic-snow rounded-3xl p-8 sm:p-12 border border-nordic-border shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block font-mono text-[11px] tracking-[0.22em] uppercase font-medium text-nordic-cabin">
                Lapland Geography
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-nordic-charcoal font-normal">
                Easily accessible wilderness in Eastern Lapland.
              </h3>
              <p className="text-sm text-nordic-muted leading-relaxed">
                Located in the scenic Kemijoki river valley along Jokitie, 28 km from Kemijärvi railway station and within easy driving range of both Rovaniemi (118 km) and Kittilä (112 km) airports.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-3 rounded-lg bg-nordic-surface border border-nordic-border">
                  <span className="text-[10px] font-mono text-nordic-muted block">Kemijärvi</span>
                  <span className="font-semibold text-nordic-charcoal">28 km (25 min)</span>
                </div>
                <div className="p-3 rounded-lg bg-nordic-surface border border-nordic-border">
                  <span className="text-[10px] font-mono text-nordic-muted block">Pyhä Ski Fell</span>
                  <span className="font-semibold text-nordic-charcoal">30 km (25 min)</span>
                </div>
                <div className="p-3 rounded-lg bg-nordic-surface border border-nordic-border">
                  <span className="text-[10px] font-mono text-nordic-muted block">Rovaniemi Airport</span>
                  <span className="font-semibold text-nordic-charcoal">118 km (1h 20m)</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/location"
                  className="inline-flex items-center gap-2 bg-nordic-forest hover:bg-nordic-pine text-nordic-snow px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>View Travel & Route Guide</span>
                </Link>
                <a
                  href={BUSINESS_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-nordic-surface hover:bg-nordic-border/70 text-nordic-charcoal px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-nordic-border shadow-md aspect-square bg-nordic-surface relative flex items-center justify-center p-6 text-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-nordic-forest text-nordic-snow mx-auto flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-nordic-charcoal">{BUSINESS_CONFIG.name}</h4>
                    <p className="text-xs text-nordic-muted mt-1">{BUSINESS_CONFIG.location.address}, {BUSINESS_CONFIG.location.postalCode} {BUSINESS_CONFIG.location.municipality}, Finland</p>
                  </div>
                  <div className="text-[11px] font-mono text-nordic-pine bg-nordic-snow px-3 py-1.5 rounded-md inline-block border border-nordic-border">
                    66.8623° N, 27.2458° E
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION J — FINAL CTA
          ========================================================================= */}
      <section className="py-24 bg-nordic-forest text-nordic-snow relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-nordic-lake font-medium block">
            Escape to the North
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight text-nordic-snow">
            Your Lapland stay starts here.
          </h2>
          <p className="text-base sm:text-lg text-nordic-snow/80 max-w-2xl mx-auto font-light leading-relaxed">
            Whether booking an autonomous timber cottage with private sauna or pitching your camper along the Kemijoki shoreline, experience true Nordic quiet.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/accommodation"
              className="w-full sm:w-auto bg-nordic-snow text-nordic-forest hover:bg-nordic-lake transition-colors px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider shadow-xl"
            >
              Explore Accommodation
            </Link>
            <Link
              to="/reservations"
              className="w-full sm:w-auto bg-nordic-cabin hover:bg-[#8D4430] text-nordic-snow transition-colors px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider shadow-xl flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Make a Reservation Enquiry</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
