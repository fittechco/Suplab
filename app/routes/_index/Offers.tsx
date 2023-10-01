import {useEffect, useState} from 'react';
import {App} from '../../api/type';
import arrayToObject from '../../ft-lib/ArrayToObject';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import {Colors} from 'app/ft-lib/shared';

interface OffersSectionProps {
  section: App.HomePageTemplate.OffersSection;
}

const Offers = ({section}: OffersSectionProps) => {
  const fields = arrayToObject({array: section.fields});
  const [spaceBetween, setSpaceBetween] = useState(10);
  let swiperInstance;

  const updateSpaceBetween = () => {
    if (window.innerWidth >= 769) {
      setSpaceBetween(25);
    } else {
      setSpaceBetween(10);
    }
  };

  useEffect(() => {
    updateSpaceBetween();
    window.addEventListener('resize', updateSpaceBetween);

    swiperInstance = new Swiper('.swiper-container', {
      spaceBetween: spaceBetween,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return () => {
      window.removeEventListener('resize', updateSpaceBetween);
    };
  }, [spaceBetween]);

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
        <p className="ft-text-main text-3xl">{fields.title.value}</p>
        <button
          style={{
            backgroundColor: Colors.primary,
            color: Colors.textSecondary,
          }}
          className="ft-text-main btn px-4 py-2 rounded-full text-main text-center w-fit font-bold text-xl capitalize"
        >
          {fields.button_text.value}
        </button>
      </div>
      <div className="offersSection__offers relative">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {fields.offers.references.nodes.map((offer, index) => {
              const offerfields = arrayToObject({array: offer.fields});
              return (
                <div key={index} className="swiper-slide">
                  <div
                    className="offer card-shadow offersSection__slide"
                    style={{
                      borderRadius: '24px',
                      background: '#707070',
                    }}
                  >
                    {offerfields.image.reference?.image != null && (
                      <img
                        style={{
                          borderRadius: '24px',
                        }}
                        src={offerfields.image.reference.image.url}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 md:hidden flex">
            <button
              className="swiper-button-prev-icon text-4xl"
              style={{
                borderRadius: '33px',
                border: '1px solid rgba(148, 148, 148, 0.40)',
                background: 'rgba(255, 255, 255, 0.40)',
                backdropFilter: 'blur(2.5px)',
                display: 'flex',
                width: '39px',
                height: '39px',
                padding: '9px 12px 8.222px 13px',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: '0',
              }}
            >
              &larr;
            </button>
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 md:hidden flex">
            <button
              className="swiper-button-next-icon text-4xl"
              style={{
                borderRadius: '33px',
                border: '1px solid rgba(148, 148, 148, 0.40)',
                background: 'rgba(255, 255, 255, 0.40)',
                backdropFilter: 'blur(2.5px)',
                display: 'flex',
                width: '39px',
                height: '39px',
                padding: '9px 12px 8.222px 13px',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: '0',
              }}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
