import { Form, useLocation, useNavigate } from '@remix-run/react';
import { countries } from '../ft-lib/data/countries';
import { useRootLoaderData } from '../root';
import { saveLanguagePreferenceCookie } from '../ft-lib/cookie-utils';
import { useEffect, useRef, useState } from 'react';
import { Colors } from '../ft-lib/shared';

export function CountrySelector() {
  const root = useRootLoaderData();

  const selectedLocale = root.locale;
  const { pathname, search } = useLocation();
  const [showSelector, setShowSelector] = useState(false);
  const countrySelectorConatainer = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const strippedPathname = pathname.startsWith(selectedLocale.pathPrefix)
    ? pathname.replace(selectedLocale.pathPrefix, '')
    : pathname;

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
      className='country-selector-conatainer relative'
    >
      <summary
        onClick={() => setShowSelector(!showSelector)}
      >{selectedLocale.language}</summary>
      {showSelector === true && (
        <div
          style={{
            backgroundColor: Colors.offWhite,
          }}
          className="absolute top-full left-0 border-t flex flex-col bg-contrast max-h-36 rounded overflow-hidden">
          {countries &&
            Object.keys(countries).map((countryKey) => {
              const locale = countries[countryKey];
              const hreflang = `${locale.language}-${locale.country}`;
              const actionPath =
                locale.language === 'AR' ? '/ar' : selectedLocale.pathPrefix;
              console.log(`${strippedPathname}${search}`);
              return (
                <Form
                  method="post"
                  action={`${strippedPathname}${search}`}
                  onSubmit={(e) => {
                    saveLanguagePreferenceCookie(locale.language);
                    setShowSelector(false);
                    // navigate(`${actionPath}${strippedPathname}${search}`);
                  }}
                  key={hreflang}
                >
                  <input type="hidden" name="language" value={locale.language} />
                  <input type="hidden" name="country" value={locale.country} />
                  <input
                    type="hidden"
                    name="path"
                    value={`${strippedPathname}${search}`} // Use stripped path
                  />
                  <button
                    className='text-center p-2 hover:bg-neutral-200 w-full'
                    type="submit">{locale.label}</button>
                </Form>
              );
            })}
        </div>
      )}
    </div>
  );
}
