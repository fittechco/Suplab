import {
  Link,
  useFetcher,
  useLocation,
  useNavigation,
  useSearchParams,
} from '@remix-run/react';
import {Colors} from 'app/ft-lib/shared';
import {useEffect} from 'react';
import type {ProductByHandleQuery} from 'storefrontapi.generated';
import {countries} from '~/app/ft-lib/data/countries';
import {UseShopStore, useRootLoaderData} from '~/app/root';
import type {loader as productPageLoader} from '../../routes/($locale).products.$productHandle';
// removing the undefined type from the following line

type Props = {
  options: NonNullable<ProductByHandleQuery['productByHandle']>['options'];
  noLocaleOptions: NonNullable<
    ProductByHandleQuery['productByHandle']
  >['options'];
  selectedVariant:
    | NonNullable<
        ProductByHandleQuery['productByHandle']
      >['variants']['nodes'][0]
    | null;
};

type ProductPageLoader = ReturnType<typeof productPageLoader>;

export default function ProductOptions(props: Props) {
  const {options, noLocaleOptions} = props;
  const {pathname, search} = useLocation();
  const [currentSearchParams] = useSearchParams();
  const navigation = useNavigation();
  const fetcher = useFetcher<ProductPageLoader>();

  const paramsWithDefaults = (() => {
    const defaultParams = new URLSearchParams(currentSearchParams);

    if (props.selectedVariant == null) {
      return defaultParams;
    }

    for (const selectedOption of props.selectedVariant.selectedOptions) {
      const {name, value} = selectedOption;
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
      className="options flex flex-col gap-5"
    >
      {options.map((option, index) => {
        let currentOptionVal = searchParams.get(option.name);
        return (
          <div key={option.name} className="option  flex flex-col">
            <h1
              className="text-xl font-bold uppercase"
            >
              {option.name}
            </h1>
            <div
              className="values flex gap-3 flex-wrap mt-2"
            >
              {option.values.map((value, index) => {
                const linkParams = new URLSearchParams(search);

                const noLocaleOption = noLocaleOptions.find(
                  (noLocaleOption) => noLocaleOption.values[index] === value,
                );

                const optionName = noLocaleOption?.name ?? option.name;

                currentOptionVal = searchParams.get(optionName);

                linkParams.set(optionName, value);
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
