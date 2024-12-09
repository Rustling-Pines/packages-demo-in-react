import { ITranslations } from "@rustling-pines/typesafe-locale-generator";
import { Locales } from "..";
import { KEYS } from "../keys";

export const LoginMessage: ITranslations<Locales> = {
    key: KEYS.LOGIN,
    'en-us': 'Login',
    fr: 'Connexion',
    de: 'Anmelden',
    in: 'लॉगिन',
    jp: 'ログイン',
    ko: '',
}