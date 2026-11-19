import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-nordic-surface flex items-center justify-center text-nordic-cabin mx-auto">
        <Compass className="w-8 h-8" />
      </div>
      
      <span className="font-mono text-xs uppercase tracking-widest text-nordic-pine font-medium block">
        Error 404 · Path Not Found
      </span>

      <h1 className="font-serif text-4xl sm:text-5xl font-normal text-nordic-charcoal">
        Lost in the Northern Forest
      </h1>

      <p className="text-sm text-nordic-muted max-w-md mx-auto leading-relaxed">
        The route you are looking for has wandered into the deep Lapland woods. Follow the river back to safety.
      </p>

      <div className="pt-4 flex items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-nordic-forest hover:bg-nordic-pine text-nordic-snow px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          to="/accommodation"
          className="inline-flex items-center gap-2 bg-nordic-surface hover:bg-nordic-border text-nordic-charcoal px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
        >
          <span>Explore Accommodation</span>
        </Link>
      </div>
    </div>
  );
};
