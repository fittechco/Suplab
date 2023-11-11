import React from 'react';
import arrayToObject from '../../ft-lib/ArrayToObject';
import { Colors } from '../../ft-lib/shared';
import type { App } from '../../api/type';
import { Image } from '@shopify/hydrogen';
import Link from '~/app/components/Link';
import LazyImage from '~/app/ft-lib/LazyImage';
import resizeImage from '~/app/ft-lib/resizeImages';

interface HeroSectionProps {
  section: App.HomePageTemplate.HeroSection;
}

const Hero = ({ section }: HeroSectionProps) => {
  const fields = arrayToObject({ array: section.fields });
  const isMobile = window.innerWidth <= 768;


  const mobileUrl = fields.mobile_image?.reference.image.url
  const desktopUrl = fields.desktop_image?.reference.image.url

  if (mobileUrl == null || desktopUrl == null) {
    return null
  }

  return (
    <div
      key={section.type}
      style={{
      }}
      className="hero-section-container w-full h-[70vh] md:h-[80vh] !container mx-auto transition-all ease-in-out duration-300"
    >
      <div
        style={{
          borderRadius: '24px',
          boxShadow: '0px 6px 9px 0px rgba(0, 0, 0, 0.16)',
          height: '100%',
          width: '100%',
          overflow: 'hidden',
        }}
        className="flex md:flex-row justify-start items-end relative"
      >
        <LazyImage
          style={{
            borderRadius: '24px',

          }}
          className="desktop-image w-full h-full object-cover max-sm:hidden"
          containerClassName='desktop-image-conatiner max-sm:hidden'
          src={resizeImage(desktopUrl, 1200)}
          alt={fields.desktop_image?.key || 'hero image'}
        />
        <LazyImage
          style={{
            borderRadius: '24px',
          }}
          className="mobile-image w-full h-full object-cover md:hidden "
          containerClassName='mobile-image-conatiner md:hidden'
          src={resizeImage(mobileUrl, 1200)}
          alt={fields.mobile_image?.key || 'hero image'}
        />
        <div
          className='layer bg-black opacity-[55%] absolute top-0 left-0 w-full h-full z-20 rounded-3xl' />
        <div
          style={{
            position: 'absolute',
          }}
          className="heroHeader w-full flex flex-col gap-3 md:gap-4 z-20 justify-end md:justify-center container mb-8 mb:mb-0"
        >
          {fields.headline != null && (
            <h1
              style={{
                color: Colors.textSecondary,
              }}
              className="header md:text-4xl lg:text-5xl tracking-[0.02rem] font-bold text-3xl uppercase"
            >
              {fields.headline.value}
            </h1>
          )}
          {fields.sub_headline != null && (
            <div
              style={{
                color: Colors.textSecondary,
                width: '80%',
              }}
              className="subHeader text-base md:text-lg max-w-xs"
            >
              {fields.sub_headline.value}
            </div>
          )}
          {fields.button_text != null && (
            <Link
              style={{
                backgroundColor: Colors.primary,
                color: Colors.textSecondary,
              }}
              to={"/collections/all"}
              className="btn px-4 py-2 rounded-full text-main text-center w-fit font-bold text-xl capitalize"
            >
              {fields.button_text.value}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
