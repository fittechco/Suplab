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
    console.log(cookie, "cookie");
    const preferredLanguage = getCookieFromHeader({
        cookieName: 'preferredLanguage',
        headerCookie: cookie,
    });
    console.log(preferredLanguage, "preferredLanguage");

    console.log(locale.language, "locale.language");
    if (preferredLanguage != null && preferredLanguage == locale.language) {
        const newUrl = new URL(`${request.url}`);
        // if the url contains a country code, replace it with the new one
        const countriesPrefixes = Object.keys(countries).map((key) => countries[key].pathPrefix);
        const urlCountryPrefix = countriesPrefixes.find((prefix) => {
            console.log(prefix, "prefix");
            return newUrl.pathname.includes(prefix.toLocaleLowerCase())
        });
        if (urlCountryPrefix != null) {
            console.log("urlCountryPrefix", urlCountryPrefix);
            newUrl.pathname = newUrl.pathname.replace(`/${urlCountryPrefix.toLowerCase()}`, `/${preferredLanguage.toLowerCase()}`);
        }
        else {
            newUrl.pathname = `${newUrl.pathname}`;
        }
        // console.log(newUrl, "newUrl");
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
            console.log(prefix, "prefix");
            return newUrl.pathname.includes(prefix.toLocaleLowerCase())
        });
        if (urlCountryPrefix != null) {
            console.log("urlCountryPrefix", urlCountryPrefix);
            newUrl.pathname = newUrl.pathname.replace(`/${urlCountryPrefix.toLowerCase()}`, `/${preferredLanguage.toLowerCase()}`);
        }
        else {
            newUrl.pathname = `/${preferredLanguage.toLocaleLowerCase()}${newUrl.pathname}`;
        }
        console.log(newUrl.toString(), "newUrl");
        return redirect(newUrl.toString(), 302);
    }
}