import {
  Link,
  useFetcher,
  useLocation,
  useNavigation,
  useSearchParams,
} from '@remix-run/react';
import { Colors } from 'app/ft-lib/shared';
import { useEffect } from 'react';
import type { ProductByHandleQuery } from 'storefrontapi.generated';
import { countries } from '~/app/ft-lib/data/countries';
import { UseShopStore, useRootLoaderData } from '~/app/root';
import type { loader as productPageLoader } from "../../routes/($locale).products.$productHandle"
// removing the undefined type from the following line

type Props = {
  options: NonNullable<ProductByHandleQuery['productByHandle']>['options'];
  selectedVariant:
  | NonNullable<
    ProductByHandleQuery['productByHandle']
  >['variants']['nodes'][0]
  | null;
};

type ProductPageLoader = ReturnType<typeof productPageLoader>;

export default function ProductOptions(props: Props) {
  const { options } = props;
  const { pathname, search } = useLocation();
  const [currentSearchParams] = useSearchParams();
  const navigation = useNavigation();
  const fetcher = useFetcher<ProductPageLoader>();

  // useEffect(() => {
  //   // if pathname container has a country prefix then we need to remove it
  //   if (fetcher.data || fetcher.state === 'loading') return;
  //   let newPathname = pathname;
  //   const countriesPrefixes = Object.keys(countries).map((key) => countries[key].pathPrefix);
  //   const urlCountryPrefix = countriesPrefixes.find((prefix) => {
  //     console.log(prefix, "prefix");
  //     return pathname.includes(prefix.toLocaleLowerCase())
  //   });
  //   if (urlCountryPrefix != null) {
  //     // remove the country prefix from the 
  //     newPathname = pathname.replace(`/${urlCountryPrefix}`, "");
  //   }
  //   fetcher.load(newPathname)
  // }, [fetcher, pathname]);

  // const internationalProduct = fetcher.data?.data.product


  const rootData = useRootLoaderData();
  const { locale } = rootData;
  const isArabic = locale.language.toLowerCase() === 'ar' ? true : false;

  const paramsWithDefaults = (() => {
    const defaultParams = new URLSearchParams(currentSearchParams);

    if (props.selectedVariant == null) {
      return defaultParams;
    }

    for (const selectedOption of props.selectedVariant.selectedOptions) {
      const { name, value } = selectedOption;
      if (currentSearchParams.has(name) === false) {
        defaultParams.set(name, value);
      }
    }
    return defaultParams;
  })();

  const searchParams = navigation.location
    ? new URLSearchParams(navigation.location.search)
    : paramsWithDefaults;

  return (
    <div
      className={`options flex flex-col gap-5 ${isArabic ? 'arAlignItems' : 'enAlignItems'
        }`}
    >
      {options.map((option, index) => {
        const currentOptionVal = searchParams.get(option.name);
        return (
          <div key={option.name} className="option  flex flex-col">
            <h1
              className={`text-xl font-bold uppercase ${isArabic ? 'arTextAlignItems' : 'enTextAlignItems'
                }`}
            >
              {option.name}
            </h1>
            <div
              className={`values flex gap-3 flex-wrap mt-2 ${isArabic ? 'arFlexDirection' : 'enFlexDirection'
                }`}
            >
              {option.values.map((value, index) => {
                const linkParams = new URLSearchParams(search);
                linkParams.set(option.name, value);
                const isSelected = currentOptionVal === value;
                return (
                  <Link
                    className="value px-3 py-1"
                    style={{
                      background: isSelected
                        ? Colors.primaryLight
                        : Colors.secondary,
                      color: isSelected
                        ? Colors.textSecondary
                        : Colors.textSecondary,
                      borderRadius: '9999px',
                    }}
                    preventScrollReset
                    key={value}
                    to={`${pathname}?${linkParams.toString()}`}
                  >
                    <p className="text-sm md:text-base font-medium capitalize tracking-wider">
                      {value}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
