import React, { useEffect, useCallback } from 'react';
import { GalleryPhoto } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface LightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const { language } = useLanguage();
  const currentPhoto = photos[currentIndex];

  const handleNext = useCallback(() => {
    if (currentIndex < photos.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0); // loop
    }
  }, [currentIndex, photos.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(photos.length - 1);
    }
  }, [currentIndex, photos.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Prevent background body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !currentPhoto) return null;

  const titleText = typeof currentPhoto.title === 'string' 
    ? currentPhoto.title 
    : (currentPhoto.title?.[language] || currentPhoto.title?.en || '');

  const captionText = typeof currentPhoto.caption === 'string'
    ? currentPhoto.caption
    : (currentPhoto.caption?.[language] || currentPhoto.caption?.en || '');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
    >
      {/* Top action bar */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-4">
        <span className="font-mono text-xs text-ahkun-white/70">
          {currentIndex + 1} / {photos.length}
        </span>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ahkun-river"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ahkun-river z-50"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ahkun-river z-50"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center text-center">
        <div className="relative overflow-hidden rounded-lg shadow-2xl max-h-[70vh]">
          <img
            src={currentPhoto.image}
            alt={currentPhoto.alt || titleText}
            className="w-auto h-auto max-h-[70vh] max-w-full object-contain mx-auto transition-all duration-300"
          />
        </div>

        {/* Caption & metadata */}
        <div className="mt-4 max-w-xl text-center px-4 space-y-1.5">
          <div className="flex items-center justify-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ahkun-river bg-white/10 px-2 py-0.5 rounded">
              {currentPhoto.category}
            </span>
            <span className="font-serif text-lg text-white font-medium">
              {titleText}
            </span>
          </div>
          {captionText && (
            <p className="text-xs text-ahkun-white/80 leading-relaxed">
              {captionText}
            </p>
          )}
          <p className="text-[10px] text-white/50 flex items-center justify-center gap-1 font-mono pt-1">
            <Sparkles className="w-3 h-3 text-ahkun-river" />
            <span>Concept visual placeholder · Official imagery to be integrated upon verified approval</span>
          </p>
        </div>
      </div>
    </div>
  );
};
