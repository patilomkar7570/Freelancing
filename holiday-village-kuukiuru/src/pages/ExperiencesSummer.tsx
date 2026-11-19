import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sun, CalendarCheck, Check, Waves, Fish, Compass } from 'lucide-react';

export const ExperiencesSummer: React.FC = () => {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Back link */}
      <div>
        <Link
          to="/experiences"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-nordic-muted hover:text-nordic-charcoal transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Experiences</span>
        </Link>
      </div>

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-nordic-cabin font-medium">
            <Sun className="w-4 h-4 text-nordic-cabin" />
            <span>Summer on the Kemijoki</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-nordic-charcoal font-normal">
            Midnight Sun, Boating & River Life
          </h1>
          <p className="text-base sm:text-lg text-nordic-muted leading-relaxed max-w-3xl">
            When the sun refuses to set, Lapland awakens with gentle light and endless hours of outdoor freedom. Paddle across calm river channels, fish from the resort’s private pier, or pick golden cloudberries in the forest.
          </p>
        </div>

        <div className="lg:col-span-4 bg-[#EAE8DE] p-6 rounded-2xl border border-nordic-border space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-nordic-forest">
            River Life & Rentals
          </div>
          <h3 className="font-serif text-2xl text-nordic-charcoal font-normal">
            Shoreline Pier & Watercraft
          </h3>
          <p className="text-xs text-nordic-muted leading-relaxed">
            Fishing licences, canoes, motorized boats, pedal hydrocycles, and bicycles are available directly on site for resident guests.
          </p>
          <Link
            to="/reservations"
            className="w-full inline-flex items-center justify-center gap-2 bg-nordic-forest hover:bg-nordic-pine text-nordic-snow py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Enquire for Summer Dates</span>
          </Link>
        </div>
      </div>

      {/* Feature visual banner */}
      <div className="rounded-3xl overflow-hidden aspect-[21/9] shadow-lg relative">
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop"
          alt="Summer canoeing under the golden midnight sun in Finnish Lapland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 text-white max-w-lg">
          <span className="font-mono text-xs uppercase tracking-widest text-nordic-lake">24 Hours of Daylight</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal">The Golden Glow of Kemijoki</h3>
        </div>
      </div>

      {/* Activities Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="bg-nordic-snow p-8 rounded-2xl border border-nordic-border space-y-4">
          <h3 className="font-serif text-2xl text-nordic-charcoal font-normal flex items-center gap-2">
            <Fish className="w-5 h-5 text-nordic-forest" />
            <span>Kemijoki River Fishing</span>
          </h3>
          <p className="text-xs text-nordic-muted leading-relaxed">
            Famed for pike, perch, grayling, and trout. Guests can fish directly from the riverbank or head out on a boat onto quiet eddies and islands.
          </p>
          <ul className="space-y-2 text-xs text-nordic-charcoal pt-2 border-t border-nordic-border">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-nordic-pine shrink-0" />
              <span>Official licences sold directly on property</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-nordic-pine shrink-0" />
              <span>Private shoreline dock & boat berths</span>
            </li>
          </ul>
        </div>

        <div className="bg-nordic-snow p-8 rounded-2xl border border-nordic-border space-y-4">
          <h3 className="font-serif text-2xl text-nordic-charcoal font-normal flex items-center gap-2">
            <Waves className="w-5 h-5 text-nordic-forest" />
            <span>Watercraft & Boating</span>
          </h3>
          <p className="text-xs text-nordic-muted leading-relaxed">
            Glide silently along the water in a canoe, explore with motorboats, or enjoy fun pedal hydrocycles suitable for families with children.
          </p>
          <ul className="space-y-2 text-xs text-nordic-charcoal pt-2 border-t border-nordic-border">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-nordic-pine shrink-0" />
              <span>Canoes, motorboats & hydrocycles for hire</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-nordic-pine shrink-0" />
              <span>Safety gear and paddles included</span>
            </li>
          </ul>
        </div>

        <div className="bg-nordic-snow p-8 rounded-2xl border border-nordic-border space-y-4">
          <h3 className="font-serif text-2xl text-nordic-charcoal font-normal flex items-center gap-2">
            <Compass className="w-5 h-5 text-nordic-forest" />
            <span>Foraging, Cycling & Minigolf</span>
          </h3>
          <p className="text-xs text-nordic-muted leading-relaxed">
            Bicycle rentals for exploring quiet country lanes through Vuostimo village, on-site miniature golf, and late-summer wild berry picking.
          </p>
          <ul className="space-y-2 text-xs text-nordic-charcoal pt-2 border-t border-nordic-border">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-nordic-pine shrink-0" />
              <span>Bicycle hire & miniature golf on site</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-nordic-pine shrink-0" />
              <span>Cloudberry & mushroom foraging in forests</span>
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
};
