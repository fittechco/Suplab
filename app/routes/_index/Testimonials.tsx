import {useEffect, useState} from 'react';
import {App} from '../../api/type';
import arrayToObject from '../../ft-lib/ArrayToObject';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import beforeAndAfter from '../../../public/before&after.png';

interface TestimonialsSectionProps {
  section: App.HomePageTemplate.TestimonialsSection;
}

const Testimonials = ({section}: TestimonialsSectionProps) => {
  const fields = arrayToObject({array: section.fields});
  const [spaceBetween, setSpaceBetween] = useState(10);
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide index

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

    const swiperInstance = new Swiper('.swiper-container', {
      spaceBetween: spaceBetween,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChange: () => {
          setCurrentSlide(swiperInstance.activeIndex);
        },
      },
    });

    return () => {
      window.removeEventListener('resize', updateSpaceBetween);
      // swiperInstance.destroy();
    };
  }, [spaceBetween]);

  return (
    <div
      key={section.type}
      style={{
        marginTop: '40px',
        overflow: 'hidden',
      }}
      className="testimonialsSection w-full !container mx-auto"
    >
      <p className="ft-text-main text-3xl mb-10">{fields.title.value}</p>
      <div className="testimonialsSection__testimonials relative swiper-container">
        <div className="swiper-wrapper">
          {fields.testimonials.references.nodes.map((testimonial, index) => {
            const testimonialFields = arrayToObject({
              array: testimonial.fields,
            });
            const beforeImage =
              testimonialFields.before_image?.reference?.image?.url;
            const afterImage =
              testimonialFields.after_image?.reference?.image?.url;

            const isFirstSlide = index === 0;
            const isLastSlide =
              index === fields.testimonials.references.nodes.length - 1;

            return (
              <div
                key={index}
                style={{
                  width: '315px',
                  marginLeft: isFirstSlide ? 'auto' : '0',
                  marginRight: isLastSlide ? 'auto' : '0',
                }}
                className="swiper-slide"
              >
                <div
                  className="testimonialsSection__testimonial"
                  style={{
                    width: '315px',
                    height: '441.29px',
                    borderRadius: '17.419px',
                    boxShadow:
                      '0px 8.70968px 13.06452px 0px rgba(0, 0, 0, 0.16)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}
                >
                  <div className="lightgray 50% / cover no-repeat flex">
                    <img
                      style={{
                        height: '441.29px',
                        borderRight: '1px solid rgba(255, 255, 255, 0.40)',
                        borderTopLeftRadius: '17.419px',
                        borderBottomLeftRadius: '17.419px',
                      }}
                      className="w-1/2 h-full"
                      src={testimonialFields.before_image.reference.image.url}
                      alt=""
                    />
                    <img
                      style={{
                        height: '441.29px',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.40)',
                        borderTopRightRadius: '17.419px',
                        borderBottomRightRadius: '17.419px',
                      }}
                      className="w-1/2 h-full"
                      src={testimonialFields.after_image.reference.image.url}
                      alt=""
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      width: '291.774px',
                      padding: '8px',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-start',
                      borderRadius: '17.419px',
                      background: 'rgba(250, 249, 246, 0.60)',
                      backdropFilter: 'blur(3.6290323734283447px)',
                      marginBottom: '15px',
                      margin: '12px',
                      position: 'absolute',
                    }}
                    className="testimonial__content"
                  >
                    <p
                      style={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        lineHeight: '24px',
                        color: '#FFFFFF',
                      }}
                    >
                      {testimonialFields.name.value}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF',
                      }}
                    >
                      {testimonialFields.description.value}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={`swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 md:hidden ${
            currentSlide === 0 ? 'hidden' : 'flex'
          }`}
        >
          {/* Only show Prev button if not on the first slide */}
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
        <div
          className={`swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 md:hidden ${
            currentSlide === fields.testimonials.references.nodes.length - 1
              ? 'hidden'
              : 'flex'
          }`}
        >
          {/* Only show Next button if not on the last slide */}
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
  );
};

export default Testimonials;
