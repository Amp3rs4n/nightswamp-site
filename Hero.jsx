import React from 'react';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <section className="relative z-10 text-center py-20 px-4">
      <h1 className="text-5xl font-bold mb-4">{t('hero.title')}</h1>
      <p className="text-xl mb-6">{t('hero.tagline')}</p>
      <a href="https://discord.gg/yourinvite" className="bg-accent px-6 py-2 rounded-full text-black font-semibold">
        {t('hero.button')}
      </a>
      <div className="mt-4">
        <button onClick={() => i18n.changeLanguage('en')} className="mr-2">EN</button>
        <button onClick={() => i18n.changeLanguage('uk')}>УК</button>
      </div>
    </section>
  );
}

export default Hero;
