import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {App} from '../../api/type';
import arrayToObject from '../../ft-lib/ArrayToObject';
import beforeAndAfter from '../../../public/before&after.png';

interface TestimonialsSectionProps {
  section: App.HomePageTemplate.TestimonialsSection;
}

const Testimonials = ({section}: TestimonialsSectionProps) => {
  const fields = arrayToObject({array: section.fields});

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
      <div className="testimonialsSection__testimonials relative">
        <Swiper
          spaceBetween={25}
          slidesPerView={'auto'}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
        >
          {fields.testimonials.references.nodes.map((testimonial, index) => {
            const testimonialFields = arrayToObject({
              array: testimonial.fields,
            });
            const beforeImage =
              testimonialFields.before_image?.reference?.image?.url;
            const afterImage =
              testimonialFields.after_image?.reference?.image?.url;

            return (
              <SwiperSlide
                key={index}
                style={{
                  width: '315px',
                }}
              >
                <div
                  className="testimonialsSection__testimonial"
                  style={{
                    height: '441.29px',
                    borderRadius: '17.419px',
                    background: `url(${beforeAndAfter}), lightgray 50% / cover no-repeat`,
                    boxShadow:
                      '0px 8.70968px 13.06452px 0px rgba(0, 0, 0, 0.16)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      width: '291.774px',
                      padding: '8px',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-start',
                      gap: '5.806px',
                      borderRadius: '17.419px',
                      background: 'rgba(250, 249, 246, 0.60)',
                      backdropFilter: 'blur(3.6290323734283447px)',
                      marginBottom: '15px',
                      margin: '12px',
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
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 md:hidden flex">
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
        </div> */}
        {/* <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 md:hidden flex">
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
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
