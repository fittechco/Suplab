import {Form, useMatches, useLocation, useFetcher} from '@remix-run/react';
import {useEffect, useState} from 'react';
import type {I18nLocale} from '../ft-lib/type';
import {countries} from '../ft-lib/data/countries';

export function CountrySelector() {
  const [root] = useMatches();

  const selectedLocale = root.data.selectedLocale;
  const {pathname, search} = useLocation();

  const [availableCountries, setAvailableCountries] = useState<I18nLocale[]>(
    [],
  );

  useEffect(() => {
    setAvailableCountries(Object.values(countries));
  }, []);

  const strippedPathname = pathname.startsWith(selectedLocale.pathPrefix)
    ? pathname.replace(selectedLocale.pathPrefix, '')
    : pathname;

  return (
    <details>
      <summary>{selectedLocale.label}</summary>
      <div className="overflow-auto border-t py-2 bg-contrast w-full max-h-36">
        {countries &&
          Object.keys(countries).map((countryKey) => {
            const locale = countries[countryKey];
            const hreflang = `${locale.language}-${locale.country}`;
            const actionPath =
              locale.language === 'AR' ? '/ar' : selectedLocale.pathPrefix;

            return (
              <Form
                method="post"
                action={`${actionPath}${strippedPathname}${search}`}
                key={hreflang}
              >
                <input type="hidden" name="language" value={locale.language} />
                <input type="hidden" name="country" value={locale.country} />
                <input
                  type="hidden"
                  name="path"
                  value={`${strippedPathname}${search}`} // Use stripped path
                />
                <button type="submit">{locale.label}</button>
              </Form>
            );
          })}
      </div>
    </details>
  );
}
