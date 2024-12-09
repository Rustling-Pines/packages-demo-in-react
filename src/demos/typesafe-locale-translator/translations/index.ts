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
import { createT } from "../../typesafe-i18n-test";


export const locales = ['en-us', 'fr', 'de', 'in', 'jp', 'ko'] as const;
export type Locales = typeof locales[number];

export const translations: ITranslations<Locales>[] = [
    GoodbyeMessage,
    LoginMessage,
    LogoutMessage,
    SaveSuccessMessage,
    SuccessMessage,
    WelcomeMessage,
    OkMessage,
    CancelMessage
];

// Generate and export the `t` object
createT(translations, KEYS);