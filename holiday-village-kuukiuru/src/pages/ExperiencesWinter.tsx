import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Snowflake, Flame, CalendarCheck, Check, Sparkles } from 'lucide-react';

export const ExperiencesWinter: React.FC = () => {
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
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-nordic-pine font-medium">
            <Snowflake className="w-4 h-4 text-nordic-pine" />
            <span>Winter in Lapland</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-nordic-charcoal font-normal">
            Snow, Solitude & Arctic Fells
          </h1>
          <p className="text-base sm:text-lg text-nordic-muted leading-relaxed max-w-3xl">
            Winter at Kuukiuru is defined by profound stillness. Snow blankets the pine forest, the Kemijoki River freezes into a wide pathway of ice, and the clean northern air refreshes mind and body.
          </p>
        </div>

        <div className="lg:col-span-4 bg-nordic-forest text-nordic-snow p-6 rounded-2xl shadow-xl space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-nordic-lake">
            Winter Resort Base
          </div>
          <h3 className="font-serif text-2xl font-normal">
            Between Pyhä & Kemijärvi
          </h3>
          <p className="text-xs text-nordic-snow/80 leading-relaxed">
            Enjoy quiet, affordable cabin lodgings away from crowded tourist centers while remaining only 25 minutes from the ski lifts and illuminated trails of Pyhä.
          </p>
          <Link
            to="/reservations"
            className="w-full inline-flex items-center justify-center gap-2 bg-nordic-cabin hover:bg-[#8D4430] text-nordic-snow py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Enquire for Winter Dates</span>
          </Link>
        </div>
      </div>

      {/* Feature visual banner */}
      <div className="rounded-3xl overflow-hidden aspect-[21/9] shadow-lg relative">
        <img
          src="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1600&auto=format&fit=crop"
          alt="Lapland winter forest with snow covered spruces"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 text-white max-w-lg">
          <span className="font-mono text-xs uppercase tracking-widest text-nordic-lake">Boreal Twilight</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal">The Quiet Magic of Kaamos</h3>
        </div>
      </div>

      {/* Core Activities Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="bg-nordic-snow p-8 rounded-2xl border border-nordic-border space-y-4">
          <h3 className="font-serif text-2xl text-nordic-charcoal font-normal">
            Cross-Country & Fell Skiing
          </h3>
          <p className="text-xs text-nordic-muted leading-relaxed">
            Glide along scenic river tracks right outside your door or venture to Pyhä-Luosto National Park (28 km) for 150+ km of groomed, illuminated cross-country tracks and downhill fell skiing.
          </p>
          <ul className="space-y-2 text-xs text-nordic-charcoal pt-2 border-t border-nordic-border">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-nordic-pine shrink-0" />
              <span>Free ski equipment storage in resort</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-nordic-pine shrink-0" />
              <span>Drying rooms in duplex cottages</span>
            </li>
          </ul>
        </div>

        <div className="bg-nordic-snow p-8 rounded-2xl border border-nordic-border space-y-4">
          <h3 className="font-serif text-2xl text-nordic-charcoal font-normal">
            Snowmobile Trail Access
          </h3>
          <p className="text-xs text-nordic-muted leading-relaxed">
            Kemijoki River valley connects to expansive regional snowmobile trail networks spanning Kemijärvi, Pyhä, and Sodankylä across marked wilderness routes.
          </p>
          <ul className="space-y-2 text-xs text-nordic-charcoal pt-2 border-t border-nordic-border">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-nordic-pine shrink-0" />
              <span>Winter parking for transport rigs</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-nordic-pine shrink-0" />
              <span>Direct river ice trail connection</span>
            </li>
          </ul>
        </div>

        <div className="bg-nordic-snow p-8 rounded-2xl border border-nordic-border space-y-4">
          <h3 className="font-serif text-2xl text-nordic-charcoal font-normal">
            Riverside Sauna & Snow Dip
          </h3>
          <p className="text-xs text-nordic-muted leading-relaxed">
            Experience traditional Finnish löyly in the wood-heated riverside sauna, followed by stepping out onto the crisp snow beneath the starry Lapland sky.
          </p>
          <ul className="space-y-2 text-xs text-nordic-charcoal pt-2 border-t border-nordic-border">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-nordic-pine shrink-0" />
              <span>Wood-heated sauna rental (max 4 persons)</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-nordic-pine shrink-0" />
              <span>Authentic birch firewood heating</span>
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
};
