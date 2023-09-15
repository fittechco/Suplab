import React from 'react';
import arrayToObject from '~/ft-lib/ArrayToObject';
import { Colors } from '~/ft-lib/shared';
import { App } from '../../api/type';

interface HeroSectionProps {
  section: App.HomePageTemplate.HeroSection;
}

const Hero = ({ section }: HeroSectionProps) => {
  const fields = arrayToObject({ array: section.fields });
  const isMobile = window.innerWidth <= 768;
  const [image, setImage] = React.useState<string | null>(null)

  return (
    <div
      key={section.type}
      style={{
        height: '100vh',
      }}
      className="heroSection w-full flex md:flex-row md:container mx-auto"
    >
      {/* HeroHeader content */}
      <div className="heroHeader md:w-1/2 w-full flex flex-col gap-5 md:gap-8 py-4 z-10 justify-end md:justify-center max-md:container ">
        {fields.headline.value != null && (
          <div
            style={{
              color: Colors.third,
            }}
            className="header md:text-3xl lg:text-5xl tracking-wide italic font-bold text-2xl uppercase"
          >
            {fields.headline.value}
          </div>
        )}
        {fields.sub_headline.value != null && (
          <div
            style={{
              color: Colors.secondary,
            }}
            className="subHeader text-base md:text-lg"
          >
            {fields.sub_headline.value}
          </div>
        )}
        {fields.button_text != null && (
          <div
            style={{
              backgroundColor: Colors.third,
              color: Colors.primary,
            }}
            //on click go to shop page 
            onClick={() => { window.location.href = '/collection' }}
            className="btn px-4 py-2 rounded-2xl text-main text-center md:w-fit w-full font-bold text-xl capitalize"
          >
            {fields.button_text.value}
          </div>
        )}
      </div>

      {/* HeroMedia content */}
      <div className="heroMedia md:w-1/2 flex justify-center items-center md:relative w-full absolute h-full">
        {fields.desktop_image != null && (
          <div className="relative w-full h-full max-md:hidden flex items-center">
            <img
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              className="w-full h-full max-w-full md:max-h-[600px] lg:max-h-full"
              // src={fields.desktop_image.reference.image.url}
              src="https://image.dummyjson.com/150"
              alt="no img Available"
            />
            <div className="shadow-overlay absolute inset-0 bg-black opacity-50 md:hidden"></div>
          </div>
        )}
        {fields.mobile_image != null && (
          <div className="relative w-full h-full md:hidden">
            <img
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              className="w-full h-full max-w-full"
              src={fields.mobile_image.reference.image.url}
              alt="no img Available"
            />
            <div className="shadow-overlay absolute inset-0 bg-black/30 md:hidden"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
