import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';
import it from './locales/it.json';

const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  },
  it: {
    translation: it
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    
    detection: {
      // Prefer route's <html lang> (from Base/BaseEs/BaseIt) so URL controls language,
      // then fall back to any previously chosen language in localStorage, then navigator.
      order: ['htmlTag', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;