import { ptTranslation } from './translations/pt';
import { enTranslation } from './translations/en';
import { esTranslation } from './translations/es';
import { Language, Translation } from './types';

export const translations: Record<Language, Translation> = {
  pt: ptTranslation,
  en: enTranslation,
  es: esTranslation,
};

export const SUPPORTED_LANGUAGES: Array<{
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}> = [
  { code: 'pt', name: 'Portuguese (Brazil)', nativeName: 'Português (Brasil)', flag: '🇧🇷' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
];

export const DEFAULT_LANGUAGE: Language = 'pt';