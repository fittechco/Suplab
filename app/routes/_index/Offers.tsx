import {useEffect, useState, useRef} from 'react';
import {App} from '../../api/type';
import arrayToObject from '../../ft-lib/ArrayToObject';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import {Colors} from 'app/ft-lib/shared';
import {Navigation} from 'swiper/modules';

interface OffersSectionProps {
  section: App.HomePageTemplate.OffersSection;
}

const Offers = ({section}: OffersSectionProps) => {
  const fields = arrayToObject({array: section.fields});
  const swiperContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (swiperContainer.current == null) {
      return;
    }
    const swiper = new Swiper(swiperContainer.current, {
      spaceBetween: 20,
      slidesPerView: 1.05,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
          slidesPerView: 2.5,
        },
      },
      modules: [Navigation],
    });

    return () => {
      if (swiper != null) {
        swiper.destroy();
      }
    };
  }, []);

  return (
    <div
      key={section.type}
      style={{
        marginTop: '40px',
        overflow: 'hidden',
      }}
      className="offersSection w-full !container mx-auto"
    >
      <div className="flex items-center justify-between mb-10">
        {fields.title != null && (
          <p className="ft-text-main md:text-3xl text-2xl">
            {fields.title.value}
          </p>
        )}
        {fields.button_text != null && (
          <button
            style={{
              backgroundColor: Colors.primary,
              color: Colors.textSecondary,
            }}
            className="ft-text-main btn px-4 py-2 rounded-full text-main text-center w-fit font-bold text-xl capitalize"
          >
            {fields.button_text.value}
          </button>
        )}
      </div>
      <div className="offersSection__offers relative">
        <div ref={swiperContainer} className="swiper-container">
          <div className="swiper-wrapper">
            {fields.offers.references.nodes.map((offer, index) => {
              const offerfields = arrayToObject({array: offer.fields});
              return (
                <div key={index} className="swiper-slide w-fit h-fit">
                  {offerfields.image.reference?.image != null && (
                    <img
                      className="object-fill rounded-3xl"
                      src={offerfields.image.reference.image.url}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/1.5 md:hidden flex"></div>
          <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/1.5 md:hidden flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
