import {
  Link,
  useLocation,
  useNavigation,
  useSearchParams,
} from '@remix-run/react';
import { Colors } from 'app/ft-lib/shared';
import type { ProductByHandleQuery } from 'storefrontapi.generated';
import { UseShopStore } from '~/app/root';

// removing the undefined type from the following line



type Props = {
  options: NonNullable<ProductByHandleQuery['productByHandle']>['options'];
  selectedVariant:
  | NonNullable<
    ProductByHandleQuery['productByHandle']
  >['variants']['nodes'][0]
  | null;
};
export default function ProductOptions(props: Props) {
  const { options } = props;
  const { pathname, search } = useLocation();
  const [currentSearchParams] = useSearchParams();
  const navigation = useNavigation();


  const paramsWithDefaults = (() => {
    const defaultParams = new URLSearchParams(currentSearchParams);

    if (props.selectedVariant == null) {
      return defaultParams;
    }

    for (const { name, value } of props.selectedVariant.selectedOptions) {
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
    <div className="options flex flex-col gap-5">
      {options.map((option, index) => {
        const currentOptionVal = searchParams.get(option.name);
        return (
          <div key={option.name} className="option  flex flex-col">
            <h1 className="text-xl font-bold uppercase">{option.name}</h1>
            <div className="values flex gap-3 flex-wrap mt-2">
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
