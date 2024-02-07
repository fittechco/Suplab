import type {I18nLocale} from '~/server';
import {getCookieFromHeader} from './cookie-utils';
import type {CountriesKey} from './data/countries';
import {countries} from './data/countries';
import {redirect} from '@shopify/remix-oxygen';

// export function handleRouteLocalization(args: {
//     request: Request;
//     locale: I18nLocale
// }) {
//     const { request, locale } = args;
//     const cookie = request.headers.get('cookie');
//     const preferredLanguage = getCookieFromHeader({
//         cookieName: 'preferredLanguage',
//         headerCookie: cookie,
//     });
//     const searchParams = new URL(request.url).searchParams;

//   // if the current route is not collection dont localize the route
//   if(searchParams.has('localize') == true) {
//     return;
//   }

//     if (preferredLanguage != null && preferredLanguage == locale.language) {
//         const newUrl = new URL(`${request.url}`);
//         // if the url contains a country code, replace it with the new one
//         const countriesPrefixes = Object.keys(countries).map((key) => countries[key as CountriesKey].pathPrefix);
//         const urlCountryPrefix = countriesPrefixes.find((prefix) => {
//             return newUrl.pathname.includes(`/${prefix.toLocaleLowerCase()}`)
//         });
//         if (urlCountryPrefix != null) {
//             newUrl.pathname = newUrl.pathname.replace(`/${urlCountryPrefix.toLowerCase()}`, `/${preferredLanguage.toLowerCase()}`);
//         }
//         else {
//             newUrl.pathname =  `/${preferredLanguage.toLocaleLowerCase()}${newUrl.pathname}`;
//         }
//         return redirect(newUrl.toString(), 302);
//     }

//     if (preferredLanguage != null && preferredLanguage !== locale.language) {
//         // add /preferredLanguage to the url
//         // redirect to the new url
//         // redirectDocument(`${request.url}${preferredLanguage.toLocaleLowerCase()}`);
//         const newUrl = new URL(`${request.url}`);
//         // if the url contains a country code, replace it with the new one
//         const countriesPrefixes = Object.keys(countries).map((key) => countries[key as CountriesKey].pathPrefix);
//         const urlCountryPrefix = countriesPrefixes.find((prefix) => {
//             return newUrl.pathname.includes(prefix.toLocaleLowerCase())
//         });

//         if (urlCountryPrefix != null) {
//             newUrl.pathname = newUrl.pathname.replace(`/${urlCountryPrefix.toLowerCase()}`, `/${preferredLanguage.toLowerCase()}`);
//         }
//         else {
//             newUrl.pathname = `/${preferredLanguage.toLocaleLowerCase()}${newUrl.pathname}`;
//         }
//         throw redirect(newUrl.toString(), 302);
//     }
// }
export function handleRouteLocalization(args: {
  request: Request;
  locale: I18nLocale;
}) {
  const {request, locale} = args;
  const url = new URL(request.url);
  const cookie = request.headers.get('cookie');
  const preferredLanguage = getCookieFromHeader({
    cookieName: 'preferredLanguage',
    headerCookie: cookie,
  });

  // Early return if localization is not necessary or already correct
  if (!preferredLanguage || locale.language === preferredLanguage) {
    return; // No redirect needed as the preferred language matches the current locale
  }

  const pathWithoutLocale = url.pathname.replace(/^\/[a-z]{2}(\/|$)/, '/'); // Removes the locale prefix if present
  const newPathname = `/${preferredLanguage.toLowerCase()}${pathWithoutLocale}`;

  if (url.pathname !== newPathname) {
    url.pathname = newPathname;
    throw redirect(url.toString(), 302);
  }
}
