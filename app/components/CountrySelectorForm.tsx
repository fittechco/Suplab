import type {JsonifyObject} from 'type-fest/source/jsonify';
import type {I18nLocale} from '~/server';
import type {CountriesKey} from '../ft-lib/data/countries';
import {countries} from '../ft-lib/data/countries';
import {Form, useLocation} from '@remix-run/react';
import {saveLanguagePreferenceCookie} from '../ft-lib/cookie-utils';

type SelectorForm = {
  countryKey: CountriesKey;
  selectedLocale: JsonifyObject<I18nLocale>;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export function CountrySelectorForm(props: SelectorForm) {
  const {countryKey, selectedLocale, onFormSubmit} = props;
  const locale = countries[countryKey];
  const {pathname, search} = useLocation();
  const strippedPathname = pathname.startsWith(selectedLocale.pathPrefix)
    ? pathname.replace(selectedLocale.pathPrefix, '')
    : pathname;

  return (
    <Form
      method="post"
      action={`${strippedPathname}${search}`}
      onSubmit={(e) => {
        saveLanguagePreferenceCookie(locale.language);
        if (selectedLocale.language === locale.language) {
          e.preventDefault();
        }
        onFormSubmit(e);
      }}
    >
      <input type="hidden" name="language" value={locale.language} />
      <input type="hidden" name="country" value={locale.country} />
      <input type="hidden" name="path" value={`${strippedPathname}${search}`} />
      <button
        className="text-center p-2 hover:bg-neutral-200 w-full"
        type="submit"
      >
        {locale.label}
      </button>
    </Form>
  );
}
