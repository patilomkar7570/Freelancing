import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Lightbox } from '../components/ui/Lightbox';
import { GALLERY_PHOTOS, UI_TRANSLATIONS } from '../data/contentConfig';
import { Camera, Maximize2, Sparkles } from 'lucide-react';

export const Gallery: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: { en: 'All Photographs', fi: 'Kaikki Kuvat', de: 'Alle Fotos' } },
    { id: 'river', label: { en: 'River & Rapids', fi: 'Joki & Putoukset', de: 'Fluss & Fälle' } },
    { id: 'cabins', label: { en: 'Kelo Cabins & Lodges', fi: 'Kelomökit & Majoitus', de: 'Kelo-Hütten' } },
    { id: 'activities', label: { en: 'Gold & Wilderness', fi: 'Kullanhuuhdonta & Luonto', de: 'Gold & Wildnis' } },
    { id: 'restaurant', label: { en: 'Restaurant & Hospitality', fi: 'Ravintola & Perinteet', de: 'Restaurant & Hof' } },
    { id: 'winter', label: { en: 'Winter & Snow', fi: 'Talvi & Lumi', de: 'Winter & Schnee' } },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-0">
      
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-ahkun-forest text-ahkun-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop"
            alt="Lemmenjoki landscape"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ahkun-white/10 backdrop-blur-md border border-ahkun-white/20 text-[11px] font-mono tracking-[0.2em] uppercase text-ahkun-river">
            <Camera className="w-3.5 h-3.5" />
            <span>{UI_TRANSLATIONS.nav.gallery[language]}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-ahkun-white">
            {language === 'fi' && (
              <>Kuvia Lemmenjoen <span className="italic text-ahkun-river">luonnosta</span></>
            )}
            {language === 'en' && (
              <>Photographs of <span className="italic text-ahkun-river">Lemmenjoki</span></>
            )}
            {language === 'de' && (
              <>Eindrücke aus <span className="italic text-ahkun-river">Lemmenjoki</span></>
            )}
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-ahkun-white/80 font-light leading-relaxed">
            {language === 'fi'
              ? 'Tutustu Lemmenjoen upeisiin jokikanjoneihin, perinteisiin kelomökkeihin, Ravadas-putouksiin ja aitoon kultaperinteeseen.'
              : language === 'de'
              ? 'Entdecken Sie den Fluss-Canyon von Lemmenjoki, traditionelle Kelo-Blockhütten, die Ravadas-Wasserfälle und das historische Goldgräbertum.'
              : 'Explore the stunning river canyons of Lemmenjoki, traditional kelo log cabins, Ravadas Falls, and historic Lapland gold mining.'}
          </p>
        </div>
      </section>

      {/* Filter Buttons & Grid */}
      <section className="py-16 lg:py-24 bg-ahkun-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                    isActive 
                      ? 'bg-ahkun-forest text-ahkun-white shadow-md' 
                      : 'bg-ahkun-white text-ahkun-charcoal border border-ahkun-border hover:bg-ahkun-border'
                  }`}
                >
                  {cat.label[language]}
                </button>
              );
            })}
          </div>

          {/* Photo Masonry/Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPhotos.map((photo, idx) => {
              const titleText = typeof photo.title === 'string' ? photo.title : photo.title[language];
              const captionText = typeof photo.caption === 'string' ? photo.caption : photo.caption[language];

              return (
                <div
                  key={photo.id}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative bg-ahkun-white rounded-2xl overflow-hidden border border-ahkun-border shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.alt || titleText}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ahkun-forest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-ahkun-charcoal/60 backdrop-blur-md text-ahkun-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-ahkun-charcoal/60 backdrop-blur-md text-ahkun-white text-[10px] font-mono tracking-widest uppercase">
                        {photo.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                    <h3 className="font-serif text-lg font-normal text-ahkun-charcoal group-hover:text-ahkun-forest transition-colors">
                      {titleText}
                    </h3>
                    <p className="text-xs text-ahkun-muted line-clamp-2 leading-relaxed">
                      {captionText}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={filteredPhotos}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(i) => setLightboxIndex(i)}
        />
      )}

    </div>
  );
};
