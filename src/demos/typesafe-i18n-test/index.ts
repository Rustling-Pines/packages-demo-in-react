import { ITranslations } from "@rustling-pines/typesafe-locale-generator";

// Active locale (defaulting to the first locale)
let activeLocale: string;

// Function to set the active locale
const setLocale = <Locales extends string>(locale: Locales) => {
    if (!activeLocale) {
        throw new Error(`Invalid locale: ${locale}`);
    }
    activeLocale = locale;
};

// Function to get the active locale
const getLocale = () => {
    return activeLocale;
};

// Utility to generate translation method types based on keys
export type GetTranslationType<TKeys> = {
    [K in keyof TKeys]: (placeholders?: Record<string, string>) => string;
};

// Main function to create translation utilities
export const createT = <
    TKeys extends Record<string, string>,
    Locales extends string
>(
    translations: ITranslations<Locales>[],
    keys: TKeys,
    locales: readonly Locales[]
): {
    t: GetTranslationType<TKeys>;
    setLocale: (locale: Locales) => void;
    getLocale: () => Locales;
} => {
    const t: Partial<GetTranslationType<TKeys>> = {};

    for (const translation of translations) {
        const key = translation.key as keyof TKeys;
        if (key in keys) {
            t[key] = (placeholders) => {
                const localeValue = translation[activeLocale as Locales] || "";
                if (!placeholders) return localeValue;
                return localeValue.replace(
                    /\{(.*?)\}/g,
                    (_, placeholder) => placeholders[placeholder] || ""
                );
            };
        }
    }

    // Initialize the default locale
    activeLocale = locales[0];

    return {
        t: t as GetTranslationType<TKeys>,
        setLocale: (locale: Locales) => setLocale(locale),
        getLocale: () => activeLocale as Locales,
    };
};