import { ITranslations } from "@rustling-pines/typesafe-locale-generator";

// Utility to generate translation method types based on keys
export type GetTranslationType<TKeys> = {
    [K in keyof TKeys]: () => string;
};

// Internal state to store the active locale
let activeLocale: string = 'en-us'; // Default locale

// Function to set the active locale with type safety
// Enforcing explicit generic usage in setLocale
export const setLocale = <Locales extends string>() => {
    return (locale: Locales) => {
        activeLocale = locale;
    };
};

// Function to get the active locale
export const getLocale = <Locales extends string>(): Locales => {
    return activeLocale as Locales;
};

// Generate `t` dynamically based on translations and keys
export const createT = <TKeys extends Record<string, string>, Locales extends string>(
    translations: ITranslations<Locales>[],
    keys: TKeys
): GetTranslationType<TKeys> => {
    const t: Partial<GetTranslationType<TKeys>> = {};
    for (const translation of translations) {
        const key = translation.key as keyof TKeys;
        if (key in keys) {
            t[key] = () => translation[activeLocale as Locales] || translation['en-us' as Locales]; // Fallback to 'en-us'
        }
    }
    return t as GetTranslationType<TKeys>;
};