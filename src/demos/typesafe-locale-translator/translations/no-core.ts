import { setLocale, t } from ".";

// Generate the `t` object dynamically
export default function Test() {
    setLocale('en-us')
    console.log('Calling', t.WELCOME(), t.CANCEL(), t.GOODBYE());
}
