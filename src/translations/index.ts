import { ITranslations } from '@rustling-pines/ts-to-json';
import { WelcomeTranslations } from './welcome.t';
import { GoodByeTranslation } from './goodbye.t';
import { LoginTranslation } from './login.t';

export const locales = ['en-us', 'fr', 'de', 'es'] as const;
export type Locales = typeof locales[number];

/**
 *  { key: 'Goodbye', 'en-us': 'Goodbye', fr: 'Au revoir' },
    ❌ Missing 'de' will trigger a TypeScript error
 */
export const translations: ITranslations<Locales>[] = [
    WelcomeTranslations,
    GoodByeTranslation,
    LoginTranslation,

];