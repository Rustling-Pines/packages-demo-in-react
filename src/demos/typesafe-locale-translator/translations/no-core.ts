import { Locales, translations } from ".";
import { createTranslationMethods } from "../../typesafe-i18n-test";
import { KEYS } from "./keys";

// Generate the `t` object dynamically
export default function Test() {
    const t = createTranslationMethods<typeof KEYS, Locales>(translations, KEYS);
    console.log('Generated t object:', t);
    console.log('Calling t.CANCEL:', t.CANCEL(), t.GOODBYE());
}
