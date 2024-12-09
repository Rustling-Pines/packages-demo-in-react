import { setAppLocale, t } from ".";

// Generate the `t` object dynamically
export default function Test() {
    setAppLocale('jp')
    console.log('Calling', t.WELCOME(), t.CANCEL(), t.GOODBYE());
}
