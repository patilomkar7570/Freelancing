import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/contentConfig';
import { Lightbox } from '../components/ui/Lightbox';
import { Sparkles, Maximize2 } from 'lucide-react';

type CategoryFilter = 'all' | 'winter' | 'summer' | 'aerial' | 'accommodation' | 'sauna' | 'activities';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const filteredPhotos = GALLERY_PHOTOS.filter(photo => {
    if (activeFilter === 'all') return true;
    return photo.category === activeFilter;
  });

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block font-mono text-[11px] tracking-[0.24em] uppercase font-medium text-nordic-cabin">
          Visual Archives
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-nordic-charcoal">
          Photo Gallery
        </h1>
        <p className="text-base sm:text-lg text-nordic-muted leading-relaxed">
          Explore the seasonal moods of Holiday Village Kuukiuru along the Kemijoki River — from deep arctic winter to the golden midnight sun.
        </p>

        {/* Conceptual disclaimer banner */}
        <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-nordic-surface border border-nordic-border text-xs text-nordic-muted max-w-xl text-left">
          <Sparkles className="w-4 h-4 text-nordic-pine shrink-0" />
          <span>
            Curated concept photography representing Finnish Lapland hospitality. Replaceable image slots prepared for verified client imagery upon official approval.
          </span>
        </div>

        {/* Category Filters */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'winter', label: 'Winter' },
            { id: 'summer', label: 'Summer' },
            { id: 'accommodation', label: 'Accommodation' },
            { id: 'sauna', label: 'Sauna' },
            { id: 'aerial', label: 'Aerial & Nature' },
            { id: 'activities', label: 'Activities' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as CategoryFilter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeFilter === tab.id
                  ? 'bg-nordic-forest text-nordic-snow shadow-sm'
                  : 'bg-nordic-surface text-nordic-charcoal hover:bg-nordic-border'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(index)}
            className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-nordic-surface cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img
              src={photo.image}
              alt={photo.alt || photo.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            
            {/* Hover overlay with caption & expand icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
              <span className="font-mono text-[10px] uppercase tracking-widest text-nordic-lake">
                {photo.category}
              </span>
              <h3 className="font-serif text-xl font-normal mt-1">
                {photo.title}
              </h3>
              <p className="text-xs text-white/80 line-clamp-2 mt-1">
                {photo.caption}
              </p>
              <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        photos={filteredPhotos}
        currentIndex={selectedPhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setSelectedPhotoIndex(newIdx)}
      />

    </div>
  );
};
