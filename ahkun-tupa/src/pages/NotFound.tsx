import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Compass, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  const { language, getLocalizedPath } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-ahkun-bg text-ahkun-charcoal px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-ahkun-forest/10 text-ahkun-forest flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-ahkun-timber">
            404 · Error
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-ahkun-charcoal">
            {language === 'fi' ? 'Sivua ei löytynyt' : language === 'de' ? 'Seite nicht gefunden' : 'Page Not Found'}
          </h1>
          <p className="text-sm text-ahkun-muted">
            {language === 'fi'
              ? 'Etsimääsi sivua ei löydy erämaasta. Palaa etusivulle tai tutustu majoitusvaihtoehtoihin.'
              : language === 'de'
              ? 'Die gesuchte Seite konnte nicht gefunden werden. Kehren Sie zur Startseite zurück.'
              : 'The path you are looking for has wandered off into the wilderness. Return to our home page.'}
          </p>
        </div>

        <div className="pt-2">
          <Link
            to={getLocalizedPath('')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-ahkun-forest text-ahkun-white text-xs font-medium uppercase tracking-wider hover:bg-ahkun-pine transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'fi' ? 'Palaa etusivulle' : language === 'de' ? 'Zur Startseite' : 'Return to Home'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
