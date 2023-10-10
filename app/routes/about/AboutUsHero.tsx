import React from 'react';
import arrayToObject from '../../ft-lib/ArrayToObject';
import { Colors } from '../../ft-lib/shared';
import { App } from '../../api/type';

interface AboutUsHeroSectionProps {
  section: App.AboutPageTemplate.AboutUsHeroSection;
}

const AboutUsHero = ({ section }: AboutUsHeroSectionProps) => {
  console.log(section);
  const fields = arrayToObject({ array: section.fields });
  const isMobile = window.innerWidth <= 768;
    const [image, setImage] = React.useState<string | null>(null)

    const backgroundImageSrc = isMobile
      ? fields.mobile_image.reference.image.url
      : fields.desktop_image.reference.image.url;
  
  return (
    <div
    // style={{
    //     height: '680px',
    // }}
    className="hero-section-container w-full md:h-[550px] h-[500px] !container mx-auto"
    >
        <div style={{
            borderRadius: "24px",
            boxShadow: "0px 6px 9px 0px rgba(0, 0, 0, 0.16)",
        }}
        className='flex w-full h-full overflow-hidden md:flex-row justify-start items-end relative'>
            <img className='w-full h-full object-cover' src={backgroundImageSrc} alt="" />
            <div
          className="heroHeader absolute w-full flex flex-col gap-5 md:gap-4 z-10 justify-end md:justify-center container mb-8 mb:mb-0">
          {fields.headline != null && (
            <div
              style={{
                color: Colors.textSecondary,
                width: "90%",
                fontSize: "34px"
              }}
              className="header md:text-3xl lg:text-5xl tracking-wide font-bold text-2xl uppercase"
            >
              {fields.headline.value}
            </div>
          )}
          {fields.sub_headline != null && (
            <div
              style={{
                color: Colors.textSecondary,
                width: "80%"
              }}
              className="subHeader text-base md:text-lg"
            >
              {fields.sub_headline.value}
            </div>
          )}
          {fields.button_text != null && (
            <div
              style={{
                backgroundColor: Colors.primary,
                color: Colors.textSecondary,
              }}
              onClick={() => { window.location.href = '/shop' }}
              className="btn px-4 py-2 rounded-full text-main text-center w-fit font-bold text-xl capitalize"
            >
              {fields.button_text.value}
            </div>
          )}
          </div>
        </div>
    </div>
  )
}

export default AboutUsHero;