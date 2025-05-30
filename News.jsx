import React from 'react';
import { useTranslation } from 'react-i18next';

function News() {
  const { t } = useTranslation();

  return (
    <section className="z-10 relative py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">{t('news.heading')}</h2>
      <div className="space-y-4">
        <div className="bg-white bg-opacity-5 p-4 rounded">
          <h3 className="font-semibold">{t('news.item1_title')}</h3>
          <p>{t('news.item1_body')}</p>
        </div>
      </div>
    </section>
  );
}

export default News;
