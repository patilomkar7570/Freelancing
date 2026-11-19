import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ACTIVITIES } from '../data/contentConfig';
import { Snowflake, Sun, Compass, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export const ExperiencesOverview: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'winter' | 'summer'>('all');

  const filteredActivities = ACTIVITIES.filter(a => {
    if (filter === 'all') return true;
    return a.season === filter || a.season === 'year-round';
  });

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block font-mono text-[11px] tracking-[0.24em] uppercase font-medium text-nordic-cabin">
          Active Recreation & Traditional Rest
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-nordic-charcoal">
          Experiences in Finnish Lapland
        </h1>
        <p className="text-base sm:text-lg text-nordic-muted leading-relaxed">
          From tranquil winter ski tracks to 24-hour summer daylight on the Kemijoki River, discover authentic Lapland wilderness grounded in nature, silence, and outdoor recreation.
        </p>

        {/* Season Filter Pills */}
        <div className="pt-4 flex items-center justify-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
              filter === 'all'
                ? 'bg-nordic-forest text-nordic-snow'
                : 'bg-nordic-surface text-nordic-charcoal hover:bg-nordic-border'
            }`}
          >
            All Experiences
          </button>
          <button
            onClick={() => setFilter('winter')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
              filter === 'winter'
                ? 'bg-nordic-forest text-nordic-snow'
                : 'bg-nordic-surface text-nordic-charcoal hover:bg-nordic-border'
            }`}
          >
            <Snowflake className="w-3.5 h-3.5" />
            <span>Winter Only</span>
          </button>
          <button
            onClick={() => setFilter('summer')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
              filter === 'summer'
                ? 'bg-nordic-forest text-nordic-snow'
                : 'bg-nordic-surface text-nordic-charcoal hover:bg-nordic-border'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Summer Only</span>
          </button>
        </div>
      </div>

      {/* Two Season Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-nordic-snow p-8 rounded-3xl border border-nordic-border space-y-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 text-nordic-lake text-xs font-mono uppercase font-semibold">
            <Snowflake className="w-4 h-4 text-nordic-pine" />
            <span>Winter Season Focus</span>
          </div>
          <h2 className="font-serif text-3xl font-normal text-nordic-charcoal">
            Snow, Skiing & Northern Silence
          </h2>
          <p className="text-xs text-nordic-muted leading-relaxed">
            Glide through silent spruce forests, link up with regional snowmobile routes, and warm up by our wood sauna. Located only 28 km from Pyhä Ski Resort.
          </p>
          <Link
            to="/experiences/winter"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-nordic-forest hover:text-nordic-cabin font-semibold pt-2"
          >
            <span>Dedicated Winter Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="bg-nordic-snow p-8 rounded-3xl border border-nordic-border space-y-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 text-nordic-cabin text-xs font-mono uppercase font-semibold">
            <Sun className="w-4 h-4" />
            <span>Summer Season Focus</span>
          </div>
          <h2 className="font-serif text-3xl font-normal text-nordic-charcoal">
            Midnight Sun, Boating & River Life
          </h2>
          <p className="text-xs text-nordic-muted leading-relaxed">
            Pristine Kemijoki River waters, canoe and motorboat rentals, licensed grayling fishing, and late-summer foraging for cloudberries and forest mushrooms.
          </p>
          <Link
            to="/experiences/summer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-nordic-forest hover:text-nordic-cabin font-semibold pt-2"
          >
            <span>Dedicated Summer Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Activity Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredActivities.map((activity) => (
          <div
            key={activity.id}
            className="bg-nordic-snow rounded-2xl overflow-hidden border border-nordic-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-nordic-forest/90 text-nordic-snow text-[10px] font-mono uppercase px-2.5 py-1 rounded backdrop-blur-sm">
                  {activity.season}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-serif text-2xl font-normal text-nordic-charcoal group-hover:text-nordic-cabin transition-colors">
                  {activity.title}
                </h3>
                <p className="text-xs text-nordic-muted leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-2 border-t border-nordic-border/70 mt-4">
              <span className="text-[10px] font-mono uppercase text-nordic-forest block font-semibold">
                Equipment & Access:
              </span>
              <ul className="space-y-1 text-xs text-nordic-charcoal">
                {activity.verifiedEquipment.map((eq, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-nordic-pine shrink-0" />
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
