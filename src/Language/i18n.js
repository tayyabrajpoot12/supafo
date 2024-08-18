import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import enTranslations from './english.json';
import arTranslations from './arabic.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: enTranslations,
    },
    ar: {
      translation: arTranslations,
    },
  },
});

export default i18n;
