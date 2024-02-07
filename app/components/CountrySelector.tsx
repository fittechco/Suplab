import type {CountriesKey} from '../ft-lib/data/countries';
import {countries} from '../ft-lib/data/countries';
import {useRootLoaderData} from '../root';
import {saveLanguagePreferenceCookie} from '../ft-lib/cookie-utils';
import {useEffect, useRef, useState} from 'react';
import {Colors} from '../ft-lib/shared';
import {CountrySelectorForm} from './CountrySelectorForm';

export function CountrySelector() {
  const root = useRootLoaderData();
  const selectedLocale = root.locale;
  const [showSelector, setShowSelector] = useState(false);
  const countrySelectorConatainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countrySelectorConatainer.current &&
        !countrySelectorConatainer.current.contains(event.target as Node) &&
        showSelector === true
      ) {
        setShowSelector(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSelector]);

  return (
    <div
      ref={countrySelectorConatainer}
      className="country-selector-conatainer relative"
    >
      <div onClick={() => setShowSelector(!showSelector)}>
        {selectedLocale.language}
      </div>
      {showSelector === true && (
        <div
          style={{
            backgroundColor: Colors.offWhite,
          }}
          className="absolute top-full left-0 border-t flex flex-col bg-contrast max-h-36 rounded overflow-hidden"
        >
          {countries &&
            Object.keys(countries).map((countryKey) => {
              const locale = countries[countryKey as CountriesKey];
              const hreflang = `${locale.language}-${locale.country}`;
              return (
                <CountrySelectorForm
                  countryKey={countryKey as CountriesKey}
                  selectedLocale={selectedLocale}
                  onFormSubmit={(e) => {
                    saveLanguagePreferenceCookie(locale.language);
                    setShowSelector(false);
                  }}
                  key={hreflang}
                />
              );
            })}
        </div>
      )}
    </div>
  );
}
