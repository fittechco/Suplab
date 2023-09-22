import React from 'react';
import arrayToObject from '../../ft-lib/ArrayToObject';
import { Colors } from '../../ft-lib/shared';
import { App } from '../../api/type';

interface HeroSectionProps {
  section: App.HomePageTemplate.HeroSection;
}

const Hero = ({ section }: HeroSectionProps) => {
  console.log(section);
  const fields = arrayToObject({ array: section.fields });
  const isMobile = window.innerWidth <= 768;
  const [image, setImage] = React.useState<string | null>(null)

  const backgroundImageSrc = isMobile
    ? fields.mobile_image.reference.image.url
    : fields.desktop_image.reference.image.url;



  return (
    <div
      key={section.type}
      style={{
        height: '680xpx',
        width: "100%",
      }}
      className="hero-section-container w-full !container mx-auto"
    >
      <div
        style={{
          borderRadius: "24px",
          boxShadow: "0px 6px 9px 0px rgba(0, 0, 0, 0.16)",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
        className='flex md:flex-row justify-start items-end   relative'>
        <img className='w-full h-full object-cover' src={backgroundImageSrc} alt="" />
        <div
          style={{
            position: "absolute",
          }}
          className="heroHeader md:w-1/2 w-full flex flex-col gap-5 md:gap-8 z-10 justify-end md:justify-center container">
          {fields.headline.value != null && (
            <div
              style={{
                color: Colors.main,
              }}
              className="header md:text-3xl lg:text-5xl tracking-wide italic font-bold text-2xl uppercase"
            >

              {fields.headline.value}
            </div>
          )}
          {fields.sub_headline.value != null && (
            <div
              style={{
                color: Colors.main,
              }}
              className="subHeader text-base md:text-lg"
            >
            </div>
          )}
          {fields.button_text != null && (
            <div
              style={{
                backgroundColor: Colors.primary,
                color: Colors.main,
              }}
              onClick={() => { window.location.href = '/shop' }}
              className="btn px-4 py-2 rounded-2xl text-main text-center md:w-fit w-full font-bold text-xl capitalize"
            >
              {fields.button_text.value}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
