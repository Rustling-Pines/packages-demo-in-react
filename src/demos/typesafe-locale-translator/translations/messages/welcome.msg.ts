import { ITranslations } from "@rustling-pines/typesafe-locale-generator";
import { Locales } from "..";
import { KEYS } from "../keys";

export const WelcomeMessage: ITranslations<Locales> = {
    key: KEYS.WELCOME,
    'en-us': 'Welcome',
    fr: 'Bienvenue',
    de: 'Willkommen',
    in: 'स्वागत हे',
    jp: 'ようこそ',
    ko: '',
}