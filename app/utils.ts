import { useLocation, useMatches } from '@remix-run/react';
import type { SelectedOption } from '@shopify/hydrogen/storefront-api-types';
import { useMemo } from 'react';

export function useVariantUrl(
  handle: string,
  selectedOptions: SelectedOption[],
) {
  const { pathname } = useLocation();

  return useMemo(() => {
    return getVariantUrl({
      handle,
      pathname,
      searchParams: new URLSearchParams(),
      selectedOptions,
    });
  }, [handle, selectedOptions, pathname]);
}

export function getVariantUrl({
  handle,
  pathname,
  searchParams,
  selectedOptions,
}: {
  handle: string;
  pathname: string;
  searchParams: URLSearchParams;
  selectedOptions: SelectedOption[];
}) {
  const match = /(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(pathname);
  const isLocalePathname = match && match.length > 0;

  const path = isLocalePathname
    ? `${match![0]}products/${handle}`
    : `/products/${handle}`;

  selectedOptions.forEach((option) => {
    searchParams.set(option.name, option.value);
  });

  const searchString = searchParams.toString();

  return path + (searchString ? '?' + searchParams.toString() : '');
}

export function usePageAnalytics() {
  const matches = useMatches();

  const analyticsFromMatches = useMemo(() => {
    const data: Record<string, unknown> = {};

    matches.forEach((event) => {
      const eventData = event?.data;
      if (eventData) {
        eventData['analytics'] && Object.assign(data, eventData['analytics']);
      }
    });

    return data;
  }, [matches]);

  return analyticsFromMatches;
}
