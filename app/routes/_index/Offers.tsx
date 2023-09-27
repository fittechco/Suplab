import { useEffect, useState } from 'react';
import { App } from '../../api/type';
import arrayToObject from '../../ft-lib/ArrayToObject';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';

interface OffersSectionProps {
  section: App.HomePageTemplate.OffersSection;
}

const Offers = ({ section }: OffersSectionProps) => {
  const fields = arrayToObject({ array: section.fields });
  const [spaceBetween, setSpaceBetween] = useState(10);
  let swiperInstance: { destroy: () => void };

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

      if (swiperInstance) {
        swiperInstance.destroy();
      }
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
      <p className="ft-text-main text-3xl mb-10">{fields.title.value}</p>
      <div className="offersSection__offers relative">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {fields.offers.references.nodes.map((offer, index) => {
              const offerfields = arrayToObject({ array: offer.fields });
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
          <div className="swiper-button-prev">Previous</div>
          <div className="swiper-button-next">Next</div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
