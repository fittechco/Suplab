import type { I18nLocale } from "~/server";
import { getCookieFromHeader } from "./cookie-utils";
import { countries } from "./data/countries";
import { redirect } from "@shopify/remix-oxygen";

export function handleRouteLocalization(args: {
    request: Request;
    locale: I18nLocale
}) {
    const { request, locale } = args;
    const cookie = request.headers.get('cookie');
    const preferredLanguage = getCookieFromHeader({
        cookieName: 'preferredLanguage',
        headerCookie: cookie,
    });

    if (preferredLanguage != null && preferredLanguage == locale.language) {
        const newUrl = new URL(`${request.url}`);
        // if the url contains a country code, replace it with the new one
        const countriesPrefixes = Object.keys(countries).map((key) => countries[key].pathPrefix);
        const urlCountryPrefix = countriesPrefixes.find((prefix) => {
            return newUrl.pathname.includes(prefix.toLocaleLowerCase())
        });
        if (urlCountryPrefix != null) {
            newUrl.pathname = newUrl.pathname.replace(`/${urlCountryPrefix.toLowerCase()}`, `/${preferredLanguage.toLowerCase()}`);
        }
        else {
            newUrl.pathname = `${newUrl.pathname}`;
        }
        return redirect(newUrl.toString(), 302);
    }

    if (preferredLanguage != null && preferredLanguage != locale.language) {
        // add /preferredLanguage to the url
        // redirect to the new url
        // redirectDocument(`${request.url}${preferredLanguage.toLocaleLowerCase()}`);
        const newUrl = new URL(`${request.url}`);
        // if the url contains a country code, replace it with the new one
        const countriesPrefixes = Object.keys(countries).map((key) => countries[key].pathPrefix);
        const urlCountryPrefix = countriesPrefixes.find((prefix) => {
            return newUrl.pathname.includes(prefix.toLocaleLowerCase())
        });
        if (urlCountryPrefix != null) {
            newUrl.pathname = newUrl.pathname.replace(`/${urlCountryPrefix.toLowerCase()}`, `/${preferredLanguage.toLowerCase()}`);
        }
        else {
            newUrl.pathname = `/${preferredLanguage.toLocaleLowerCase()}${newUrl.pathname}`;
        }
        return redirect(newUrl.toString(), 302);
    }
}