import {Colors} from '../ft-lib/shared';
import {cn} from '~/app/lib/utils';
import BottomDrawer from './BottomDrawer';
import MobileFilterOption from './MobileFilterOption';
import {Slider} from './ui/slider';
import {useLocation, useNavigation, useSearchParams} from '@remix-run/react';
import {Fragment} from 'react';
import {VariantOptionFilter} from '@shopify/hydrogen/storefront-api-types';

type Props = {
  show: boolean;
  setShow: (show: boolean) => void;
  filters: {name: string; options: VariantOptionFilter[]}[];
};

export default function MobileFiltersMenu(props: Props) {
  console.log('props.filters', props.filters);
  const {pathname, search} = useLocation();
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();

  const removeDash = (s: string) => s.replace(/\-/g, ' ');

  const searchedParams = Array.from(searchParams.entries())
    .filter(([key]) => key !== 'min' && key !== 'max')
    .map((param) => {
      const [key, value] = param;
      console.log('key', key, 'value', value, param);

      return (
        <MobileFilterOption
          key={key}
          param={key}
          label={removeDash(value)}
          value={value}
          isSelected={true}
          hasX={true}
        />
      );
    });

  return (
    <BottomDrawer show={props.show} setShow={props.setShow}>
      <div className="filtersContainer h-full w-full px-[5%] flex flex-col uppercase">
        <h2 className="filtersTitle text-[#4A4A49] text-bold text-2xl">
          Filters
        </h2>

        <div
          className="selectedFiltersContainer grid grid-cols-3 gap-5 mt-6"
          style={{
            rowGap: '0.75rem',
          }}
        >
          {/* {Array.from(searchParams.entries())
            .filter(([key]) => key !== 'min' && key !== 'max')
            .map((param) => {
              const [key, value] = Object.entries(param)[0];
              return (
                <MobileFilterOption
                  key={key}
                  param={key}
                  label={removeDash(value)}
                  value={value}
                  isSelected={true}
                />
              );
            })} */}
          {searchedParams}
        </div>

        {searchedParams.length > 0 && <HorizontalRule />}

        <div className="filtersGroup flex flex-col gap-3">
          <h4 className="filtersTitle text-[#4A4A49] text-bold text-lg">
            Price
          </h4>
          <div className="filtersWrapper flex justify-between">
            <Slider className="min-w-[250px]" />
          </div>
        </div>

        <HorizontalRule classNames="mt-4" />

        {props.filters.map((filter) => (
          <Fragment key={filter.name}>
            <div className="filtersGroup flex flex-col gap-3">
              <h4 className="filtersTitle text-[#4A4A49] text-bold text-lg">
                {filter.name}
              </h4>
              <div
                className="filtersWrapper grid grid-cols-3 gap-5"
                style={{
                  rowGap: '0.75rem',
                }}
              >
                {filter.options.map((option) => {
                  const currentOptionVal = searchParams.get(filter.name);
                  const isSelected = currentOptionVal === option.value;
                  return (
                    <MobileFilterOption
                      key={option.value}
                      param={filter.name}
                      label={option.name}
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
    </BottomDrawer>
  );
}

const HorizontalRule = ({classNames}: {classNames?: string}) => (
  <div
    className={cn('horizontalRule w-full h-[1px] mt-3 mb-5', classNames)}
    style={{
      background:
        'linear-gradient(to left, transparent 0%, #4A4A49 50%, transparent 100%)',
    }}
  ></div>
);
