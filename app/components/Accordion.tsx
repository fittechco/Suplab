import { Image } from '@shopify/hydrogen';
import FTicons from 'app/ft-lib/FTicon';
import { Colors } from 'app/ft-lib/shared';
import React, { useRef, useState } from 'react';
import type { Image as ImageType } from '@shopify/hydrogen/storefront-api-types'
import LazyImage from '../ft-lib/LazyImage';
import resizeImage from '../ft-lib/resizeImages';

type Props = {
  title: string;
  details: string;
  image?: Pick<ImageType, "url" | "width" | "altText" | "height">;
};

function Accordion(props: Props) {
  const [showAcordion, setShowAcordion] = useState(false);
  const accordionRef = useRef<HTMLParagraphElement | null>(null);

  return (
    <div
      style={{
        borderColor: Colors.secondary,
        overflow: 'hidden',
      }}
      className="product-description border-b-2 fade-border"
    >
      <div
        onClick={() => {
          setShowAcordion(!showAcordion);
        }}
        className="flex justify-between items-center py-1 cursor-pointer"
      >
        <h1 className="text-xl md:text-2xl font-bold uppercase">
          {props.title}
        </h1>
        <FTicons
          className="md:w-6 md:h-6 w-5 h-5"
          fill={Colors.secondary}
          name={showAcordion === true ? 'minus' : 'plus'}
        />
      </div>
      <div
        style={{
          height: showAcordion ? accordionRef.current?.scrollHeight : '0px',
          marginBlock: showAcordion ? '0.5rem' : '0px',
          transition: 'all 0.3s ease-in-out',
        }}
        ref={accordionRef}
        className="overflow-hidden">
        {props.image != null && (
          <div className='flex justify-center w-full'>
            <LazyImage
              className='max-w-full max-h-full w-full aspect-square'
              src={resizeImage(props.image.url, 600)}
            />
          </div>)}
        {props.details != null && (<p
          style={{
            color: Colors.text,
          }}
          className="text-sm font-secondaryFont font-medium"
        >
          {props.details}
        </p>)
        }
      </div>
    </div >
  );
}

export default Accordion;
