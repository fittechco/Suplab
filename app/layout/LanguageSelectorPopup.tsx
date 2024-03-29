import React, {useCallback, useEffect, useRef} from 'react';
import {Colors} from '../ft-lib/shared';
import {saveLanguagePreferenceCookie, setCookie} from '../ft-lib/cookie-utils';
import type {LanguageCode} from '@shopify/hydrogen/storefront-api-types';
import {useNavigate} from '@remix-run/react';
import {CountrySelectorForm} from '../components/CountrySelectorForm';
import {countries} from '../ft-lib/data/countries';
import {useRootLoaderData} from '../root';

type LanguageSelectorPopupProps = {
  // show: boolean;
  setshowLanguageSelectorShow: (show: boolean) => void;
};
export function LanguageSelectorPopup(props: LanguageSelectorPopupProps) {
  const root = useRootLoaderData();
  const selectedLocale = root.locale;
  const [show, setShow] = React.useState(false);
  const languageSelectorWrapper = useRef<HTMLDivElement>(null);
  const languageSelectorPopupContainer = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 300);
  }, []);

  const closeLanguageSelectorPopupContainer = useCallback(() => {
    setShow(false);
    setTimeout(() => {
      props.setshowLanguageSelectorShow(false);
    }, 300);
  }, [props]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageSelectorWrapper.current != null &&
        !languageSelectorWrapper.current.contains(event.target as Node)
      ) {
        closeLanguageSelectorPopupContainer();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeLanguageSelectorPopupContainer]);

  const handleLanguageSelectorPopupContainerClick = (
    language: LanguageCode,
  ) => {
    saveLanguagePreferenceCookie(language);
    localStorage.setItem('preferredLanguage', language);
    closeLanguageSelectorPopupContainer();
    navigate(`/${language.toLocaleLowerCase()}`);
  };
  const englishLocale = countries.default;
  const arabicLocale = countries['/ar'];

  return (
    <div
      style={{
        zIndex: 200,
        opacity: show ? 1 : 0,
        transition: 'all 0.3s ease',
        display: show ? 'block' : 'none',
      }}
      ref={languageSelectorPopupContainer}
      className="language-selector-popup  fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-xl"
    >
      <div className="language-selector-popup container flex justify-center items-center w-full h-full">
        <div
          ref={languageSelectorWrapper}
          style={{
            background: Colors.offWhite,
            transform: show === true ? `translateY(0)` : `translateY(20vh)`,
            transition: 'all 0.3s ease',
          }}
          className="language-selector-wrapper flex flex-col w-full md:max-w-xs items-center justify-center rounded-3xl p-5 gap-5"
        >
          <div
            style={{
              color: Colors.text,
            }}
            className="header md:text-2xl tracking-[0.02rem] font-bold text-3xl uppercase"
          >
            Pick a language
          </div>
          <div className="flex flex-row w-full gap-5 items-center justify-center">
            <div
              style={{
                backgroundColor: Colors.primary,
                color: Colors.textSecondary,
              }}
              className="btn px-4 py-2 rounded-full text-main text-center w-fit font-bold text-xl capitalize"
            >
              <CountrySelectorForm
                countryKey={'default'}
                onFormSubmit={(e) => {
                  saveLanguagePreferenceCookie(englishLocale.language);
                  setShow(false);
                }}
                // selectedLocale={englishLocale}
                selectedLocale={selectedLocale}
              />
            </div>
            <div
              style={{
                border: `1px solid ${Colors.primary}`,
                color: Colors.primary,
              }}
              className="btn px-4 py-2 rounded-full text-main text-center w-fit font-bold text-xl capitalize"
            >
              <CountrySelectorForm
                countryKey={'/ar'}
                onFormSubmit={(e) => {
                  saveLanguagePreferenceCookie(arabicLocale.language);
                  setShow(false);
                }}
                // selectedLocale={arabicLocale}
                selectedLocale={selectedLocale}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
