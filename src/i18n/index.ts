import en from './en.json';
import zh from './zh.json';

const translations = { en, zh } as const;

export type Locale = keyof typeof translations;
export const locales: Locale[] = ['en', 'zh'];
export const defaultLocale: Locale = 'en';

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: unknown = translations[locale];
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  return typeof value === 'string' ? value : key;
}

export function getLocalePath(locale: Locale, path: string = ''): string {
  return `/${locale}${path ? `/${path}` : ''}`;
}

export function switchLocale(currentLocale: Locale, currentPath: string): string {
  const newLocale = currentLocale === 'en' ? 'zh' : 'en';
  const pathWithoutLocale = currentPath.replace(/^\/(en|zh)/, '');
  return `/${newLocale}${pathWithoutLocale}`;
}
