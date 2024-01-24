import {Image} from '@shopify/hydrogen';
import FTicons from 'app/ft-lib/FTicon';
import {Colors} from 'app/ft-lib/shared';
import React, {useRef, useState} from 'react';
import type {Image as ImageType} from '@shopify/hydrogen/storefront-api-types';
import LazyImage from '../ft-lib/LazyImage';
import resizeImage from '../ft-lib/resizeImages';
import {useRootLoaderData} from '../root';

type Props = {
  title: string;
  details: string;
  image?: Pick<ImageType, 'url' | 'width' | 'altText' | 'height'>;
};

function Accordion(props: Props) {
  const [showAcordion, setShowAcordion] = useState(false);
  const accordionRef = useRef<HTMLParagraphElement | null>(null);

  const rootData = useRootLoaderData();
  const {locale} = rootData;
  const isArabic = locale.language.toLowerCase() === 'ar' ? true : false;

  return (
    <div
      style={{
        borderColor: Colors.secondary,
        overflow: 'hidden',
      }}
      className="product-description w-full"
    >
      <div
        onClick={() => {
          setShowAcordion(!showAcordion);
        }}
        className={`flex justify-between items-center py-1 cursor-pointer ${
          isArabic ? 'arFlexDirection' : 'enFlexDirection'
        }`}
      >
        <h1
          className={`text-lg md:text-xl font-bold capitalize ${
            isArabic ? 'arTextAlignItems' : 'enTextAlignItems'
          }`}
        >
          {props.title}
        </h1>
        <FTicons
          className="md:w-6 md:h-6 w-5 h-5 flex-shrink-0"
          fill={Colors.secondary}
          icon={showAcordion === true ? 'minus' : 'plus'}
        />
      </div>
      <div
        style={{
          height: showAcordion ? accordionRef.current?.scrollHeight : '0px',
          marginBlock: showAcordion ? '0.5rem' : '0px',
          transition: 'all 0.3s ease-in-out',
        }}
        ref={accordionRef}
        className="overflow-hidden"
      >
        {props.image != null && (
          <div className="flex justify-center w-full">
            <LazyImage
              alt={props.title}
              className="max-w-full max-h-full w-full aspect-square"
              src={resizeImage(props.image.url, 600)}
            />
          </div>
        )}
        {props.details != null && (
          <p
            style={{
              color: Colors.text,
            }}
            className={`text-sm md:text-base font-secondaryFont font-medium whitespace-pre-line ${
              isArabic ? 'arTextAlignItems' : 'enTextAlignItems'
            }`}
          >
            {props.details}
          </p>
        )}
      </div>
      <div className="fadeBorder" />
    </div>
  );
}

export default Accordion;
