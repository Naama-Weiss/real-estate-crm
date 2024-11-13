import heLocale from '../locales/he';
import enLocale from '../locales/en';
import roLocale from '../locales/ro';

const locales = {
  he: heLocale,
  en: enLocale,
  ro: roLocale
};

export const getLocale = (lang) => locales[lang] || locales.he;