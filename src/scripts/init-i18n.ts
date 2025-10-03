// Client-side i18n initialization
import i18n from '../i18n/config';

// Ensure i18n language matches the URL prefix immediately on page load
if (typeof window !== 'undefined') {
  const path = window.location.pathname;
  let language: 'en' | 'es' | 'it' = 'en';
  if (path.startsWith('/es')) language = 'es';
  else if (path.startsWith('/it')) language = 'it';

  // Directly set language on the shared i18n instance
  i18n.changeLanguage(language);
}
