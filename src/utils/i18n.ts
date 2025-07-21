export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'en';

export async function getTranslations(lang: keyof typeof languages) {
  switch (lang) {
    case 'en':
      return (await import('../../public/assets/i18n/en.json')).default;
    case 'es':
    default:
      return (await import('../../public/assets/i18n/es.json')).default;
  }
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}