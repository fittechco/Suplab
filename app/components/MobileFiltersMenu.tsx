import {Colors} from '../ft-lib/shared';
import {cn} from '~/app/lib/utils';
import BottomDrawer from './BottomDrawer';
import MobileFilterOption from './MobileFilterOption';
import {Slider} from './ui/slider';
import {useLocation, useNavigation, useSearchParams} from '@remix-run/react';
import {Fragment} from 'react';

type Props = {
  show: boolean;
  setShow: (show: boolean) => void;
};

const filters = [
  {
    param: 'brand',
    options: [
      {
        value: 'brand-1',
        label: 'brand 1',
      },
      {
        value: 'brand-2',
        label: 'brand 2',
      },
    ],
  },
  {
    param: 'color',
    options: [
      {
        value: 'color-1',
        label: 'color 1',
      },
      {
        value: 'color-2',
        label: 'color 2',
      },
      {
        value: 'color-3',
        label: 'color 3',
      },
      {
        value: 'color-4',
        label: 'color 4',
      },
    ],
  },
  {
    param: 'size',
    options: [
      {
        value: 'size-1',
        label: 'size 1',
      },
      {
        value: 'size-2',
        label: 'size 2',
      },
    ],
  },
];

export default function MobileFiltersMenu(props: Props) {
  const {pathname, search} = useLocation();
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();

  const removeDash = (s: string) => s.replace(/\-/g, ' ');

  const searchedParams = Array.from(searchParams.entries())
    .filter(([key]) => key !== 'min' && key !== 'max')
    .map((param) => {
      const [key, value] = param;
      // console.log('key', key, 'value', value, param);

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

        {filters.map((filter) => (
          <Fragment key={filter.param}>
            <div className="filtersGroup flex flex-col gap-3">
              <h4 className="filtersTitle text-[#4A4A49] text-bold text-lg">
                {filter.param}
              </h4>
              <div
                className="filtersWrapper grid grid-cols-3 gap-5"
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
