import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section className="z-10 relative py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">{t('about.heading')}</h2>
      <p className="max-w-2xl mx-auto">{t('about.text')}</p>
    </section>
  );
}

export default About;
