import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import {cn} from '~/app/lib/utils';
import {useSearchParams} from '@remix-run/react';

const sliderThumbClasses =
  'block h-[20px] w-[10px] ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-50 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300  rounded-md border border-[#696968] bg-[#2C2C2B]';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({className, ...props}, ref) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex w-full touch-none select-none items-center',
        className,
      )}
      {...props}
      defaultValue={[
        parseInt(searchParams.get('min') ?? '25'),
        parseInt(searchParams.get('max') ?? '75'),
      ]}
      step={1}
      min={0}
      max={100}
      onValueChange={(value) => {
        setSearchParams(
          (prev) => {
            prev.set('min', value[0].toString());
            prev.set('max', value[1].toString());
            return prev;
          },
          {
            replace: true,
          },
        );
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
Slider.displayName = SliderPrimitive.Root.displayName;

export {Slider};
