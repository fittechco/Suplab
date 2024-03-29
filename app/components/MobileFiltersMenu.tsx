import {cn} from '~/app/lib/tailwindUtils';
import BottomDrawer from './BottomDrawer';
import MobileFilterOption from './MobileFilterOption';
import {PriceSlider} from './ui/PriceSlider';
import {useNavigation, useSearchParams} from '@remix-run/react';
import {Fragment} from 'react';
import {useRootLoaderData} from '../root';

type filters = {param: string; options: {label: string; value: string}[]}[];

type Props = {
  show: boolean;
  setShow: (show: boolean) => void;
  filters: filters;
  minPrice: number;
  maxPrice: number;
};

const SearchedParams = (props: {filters: filters}) => {
  const [searchParams] = useSearchParams();
  const {filters} = props;
  const searchedParamsWithoutMinMax = Array.from(searchParams.entries()).filter(
    ([key]) => key !== 'min' && key !== 'max' && key,
  );

  return (
    <>
      <div className="filter-header flex flex-col w-full gap-4">
        <div
          className="selectedFiltersContainer grid grid-cols-3 gap-5 mt-6 sticky top-0"
          style={{
            rowGap: '0.75rem',
          }}
        >
          {searchedParamsWithoutMinMax.map((param) => {
            const [key, value] = param;
            // check if key is in filters
            const keyExists = filters.some((filter) => filter.param === key);
            if (keyExists === false) {
              return null;
            }
            const labels = filters.map((filter) => {
              if (filter.param === key) {
                const option = filter.options.find(
                  (option) => option.value === value,
                );
                return option?.label;
              }
              return null;
            });
            const label = labels.filter(Boolean).join(', ');

            return (
              <MobileFilterOption
                key={key}
                param={key}
                label={label}
                value={value}
                isSelected={true}
                hasX={true}
              />
            );
          })}
        </div>
      </div>
      <HorizontalRule />
    </>
  );
};

export default function MobileFiltersMenu(props: Props) {
  const [currentSearchParams] = useSearchParams();
  const filters = props.filters;
  const navigation = useNavigation();
  const searchParams = navigation.location
    ? new URLSearchParams(navigation.location.search)
    : currentSearchParams;

  const rootData = useRootLoaderData();
  const {locale} = rootData;
  const isArabic = locale.language.toLowerCase() === 'ar' ? true : false;

  const headerTitle = isArabic ? 'فلتر' : 'Filters';

  return (
    <BottomDrawer
      closeIcon
      headerTitle={headerTitle}
      show={props.show}
      setShow={props.setShow}
    >
      <div className="filtersContainer h-full w-full px-[5%] flex flex-col gap-4 uppercase">
        <SearchedParams filters={filters} />
        <div className="filters flex flex-col gap-4 pb-4 overflow-y-auto h-full">
          <div className="filtersGroup flex flex-col gap-3">
            <h4 className="filtersTitle text-[#4A4A49] text-bold text-lg">
              Price
            </h4>
            <div className="filtersWrapper flex justify-between">
              <span className="text-sm">Min: ${props.minPrice}</span>
              <span className="text-sm">Max: ${props.maxPrice}</span>
            </div>
            <PriceSlider className="min-w-[250px]" />
          </div>

          <HorizontalRule classNames="" />

          {filters.map((filter) => (
            <Fragment key={filter.param}>
              <div className="filtersGroup flex flex-col gap-3">
                <h4 className="filtersTitle text-[#4A4A49] text-bold text-lg">
                  {filter.param}
                </h4>
                <div
                  className="filtersWrapper grid grid-cols-3 gap-3"
                  style={{
                    rowGap: '0.75rem',
                  }}
                >
                  {filter.options.map((option) => {
                    const currentOptionVal = searchParams.get(filter.param);
                    const isSelected = currentOptionVal === option.value;
                    return (
                      <MobileFilterOption
                        key={option.value}
                        param={filter.param}
                        label={option.label}
                        value={option.value}
                        isSelected={isSelected}
                      />
                    );
                  })}
                </div>
              </div>
              <HorizontalRule />
            </Fragment>
          ))}
        </div>
      </div>
    </BottomDrawer>
  );
}

const HorizontalRule = ({classNames}: {classNames?: string}) => (
  <div
    className={cn('horizontalRule w-full h-[1px] p-[1px]', classNames)}
    style={{
      background:
        'linear-gradient(to left, transparent 0%, #4A4A49 50%, transparent 100%)',
    }}
  />
);
