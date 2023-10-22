import React from 'react';
import arrayToObject from '../../ft-lib/ArrayToObject';
import { Colors } from '../../ft-lib/shared';
import type { App } from '../../api/type';
import { Image } from '@shopify/hydrogen';
import Link from '~/app/components/Link';

interface HeroSectionProps {
  section: App.HomePageTemplate.HeroSection;
}

const Hero = ({ section }: HeroSectionProps) => {
  const fields = arrayToObject({ array: section.fields });
  const isMobile = window.innerWidth <= 768;
  const [image, setImage] = React.useState<string | null>(null);

  const backgroundImageSrc = isMobile
    ? fields.mobile_image?.reference.image.url
    : fields.desktop_image?.reference.image.url;

  return (
    <div
      key={section.type}
      style={{
        height: '680px',
      }}
      className="hero-section-container w-full !container mx-auto"
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
        <Image
          sizes='100%, 800px'
          className="w-full h-full object-cover"
          src={backgroundImageSrc}
          alt=""
        />
        <div
          style={{
            position: 'absolute',
          }}
          className="heroHeader w-full flex flex-col gap-5 md:gap-4 z-10 justify-end md:justify-center container mb-8 mb:mb-0"
        >
          {fields.headline != null && (
            <h1
              style={{
                color: Colors.textSecondary,
                width: '90%',
                fontSize: '34px',
              }}
              className="header md:text-3xl lg:text-5xl tracking-wide font-bold text-2xl uppercase"
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
