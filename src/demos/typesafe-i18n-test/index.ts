import { ITranslations } from "@rustling-pines/typesafe-locale-generator";

// Utility to generate translation method types based on keys
export type GetTranslationType<TKeys> = {
    [K in keyof TKeys]: () => string;
};

// Export a helper for the client to use
export const getKeyType = <TKeys>() => {
    return {} as GetTranslationType<TKeys>;
};

export const createTranslationMethods = <
    TKeys extends Record<string, string>,
    Locales extends string
>(
    translations: ITranslations<Locales>[],
    keys: TKeys
): { [K in keyof TKeys]: () => string } => {
    const t: Partial<{ [K in keyof TKeys]: () => string }> = {};

    for (const key in keys) {
        const translation = translations.find((t) => t.key === keys[key]);
        if (translation) {
            t[key] = () => translation['en-us' as Locales]; // Explicitly type 'en-us' as a valid locale
        } else {
            console.warn(`Key ${key} not found in KEYS or translations.`);
        }
    }

    return t as { [K in keyof TKeys]: () => string };
};


let t: Record<string, () => string> = {};

export const createT = <TKeys extends Record<string, string>, Locales extends string>(
    translations: ITranslations<Locales>[],
    keys: TKeys
): void => {
    const tempT: Partial<Record<keyof TKeys, () => string>> = {};
    for (const translation of translations) {
        const key = translation.key as keyof TKeys;
        if (key in keys) {
            tempT[key] = () => translation['en-us' as Locales];
        }
    }
    t = tempT as Record<keyof TKeys, () => string>;
};

export { t };