import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import _ from "lodash"
import { cn } from '~/app/lib/utils';
import { useLocation, useNavigate, useNavigation, useSearchParams } from '@remix-run/react';
import { useMemo, useRef } from 'react';

const sliderThumbClasses =
  'block h-[20px] w-[10px] ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-50 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300  rounded-md border border-[#696968] bg-[#2C2C2B]';

const PriceSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [currentSearchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const defaultParams = new URLSearchParams(currentSearchParams);
  const maxPrice = useRef(props.max);
  const minPrice = useRef(props.min);

  const searchParams = navigation.location
    ? new URLSearchParams(navigation.location.search)
    : defaultParams;

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex w-full touch-none select-none items-center',
        className,
      )}
      defaultValue={[
        parseInt(searchParams.get('min') ?? '0'),
        props.max ?? parseInt(searchParams.get('max') ?? '100'),
      ]}
      max={maxPrice.current}
      min={minPrice.current}
      step={1}
      onValueChange={(value) => {
        const [min, max] = value;
        // Format the values as an object
        const priceFilter = { price: { min, max } };
        const linkValue = JSON.stringify(priceFilter)
        const linkParams = new URLSearchParams(search);
        linkParams.set('price', linkValue);
        navigate(`${pathname}?${linkParams.toString()}`, {
          preventScrollReset: true,
        });

      }}
    >
      {/* <SliderPrimitive.Track className="relative h-2 w-1/2 grow overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800"> */}
      <SliderPrimitive.Track className="relative cursor-pointer h-2 w-full grow overflow-hidden rounded-full bg-[#4A4A49]">
        <SliderPrimitive.Range className="absolute h-full #4A4A49" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={
          'cursor-pointer block h-[20px] w-[10px] transition-colors focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-50 dark:bg-neutral-950 dark:ring-offset-neutral-950 rounded-md border border-[#696968] bg-[#2C2C2B]'
        }
      />

      <SliderPrimitive.Thumb
        className={
          'cursor-pointer block h-[20px] w-[10px] transition-colors focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-50 dark:bg-neutral-950 dark:ring-offset-neutral-950 rounded-md border border-[#696968] bg-[#2C2C2B]'
        }
      />
    </SliderPrimitive.Root>
  );
});
PriceSlider.displayName = SliderPrimitive.Root.displayName;

export { PriceSlider };
