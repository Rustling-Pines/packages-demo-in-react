import { ITranslations } from "@rustling-pines/typesafe-locale-generator";

import { GoodbyeMessage } from "./messages/goodbye.msg";
import { LoginMessage } from "./messages/login.msg";
import { LogoutMessage } from "./messages/logout.msg";
import { SaveSuccessMessage } from "./messages/save-success.msg";
import { SuccessMessage } from "./messages/success.msg";
import { WelcomeMessage } from "./messages/welcome.msg";
import { OkMessage } from "./messages/ok.msg";
import { CancelMessage } from "./messages/cancel.msg";
import { KEYS, TKeys } from "./keys";
import { createT, setLocale } from "../../typesafe-i18n-test";


export const locales = ['en-us', 'fr', 'de', 'in', 'jp', 'ko'] as const;
export type Locales = typeof locales[number];

const translations: ITranslations<Locales>[] = [
    
    GoodbyeMessage,
    LoginMessage,
    LogoutMessage,
    SaveSuccessMessage,
    SuccessMessage,
    WelcomeMessage,
    OkMessage,
    CancelMessage
];
export default translations;

// Generate and export `t` with type safety
export const t = createT(translations, KEYS);
// Usage of setLocale with enforced generic
export const setAppLocale = setLocale<Locales>();