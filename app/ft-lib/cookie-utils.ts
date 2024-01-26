import type { LanguageCode } from "@shopify/hydrogen/storefront-api-types";

export function getCookie(name: string) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

export function getCookieFromHeader(args: { cookieName: "preferredLanguage", headerCookie: string | null }) {
    const { cookieName, headerCookie } = args;
    if (headerCookie == null) return null;
    const nameEQ = cookieName + "=";
    const ca = headerCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

export function setCookie(name: "preferredLanguage", value: string, days: number) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function saveLanguagePreferenceCookie(value: LanguageCode) {
    const selectedLanguage = value
    setCookie('preferredLanguage', selectedLanguage, 365); // Save for 365 days
}
