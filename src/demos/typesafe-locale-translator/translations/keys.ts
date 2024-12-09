// Define keys for translations
export const KEYS = {
    CANCEL: 'CANCEL',
    GOODBYE: 'GOODBYE',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    OK: 'OK',
    SAVE_SUCCESS: 'SAVE_SUCCESS',
    SUCCESS: 'SUCCESS',
    WELCOME: 'WELCOME',
} as const;

// Derive a type for the keys
export type TKeys = typeof KEYS[keyof typeof KEYS];