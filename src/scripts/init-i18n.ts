// Client-side i18n initialization
import '../i18n/config';

// Ensure i18n is initialized before React components
if (typeof window !== 'undefined') {
  // Check if we're on a Spanish route
  const isSpanishRoute = window.location.pathname.startsWith('/es');
  
  // Initialize with the appropriate language
  const language = isSpanishRoute ? 'es' : 'en';
  
  // Wait for i18next to be available
  const initLanguage = () => {
    if (window.i18next) {
      window.i18next.changeLanguage(language);
    } else {
      // Retry if i18next is not ready yet
      setTimeout(initLanguage, 10);
    }
  };
  
  initLanguage();
}

// Make i18next available globally for debugging
declare global {
  interface Window {
    i18next?: any;
  }
}