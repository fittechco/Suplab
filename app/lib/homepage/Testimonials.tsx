import {useEffect, useState, useRef} from 'react';
import type {App} from '../../api/type';
import arrayToObject from '../../ft-lib/ArrayToObject';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import {Colors} from 'app/ft-lib/shared';
import LazyImage from '~/app/ft-lib/LazyImage';
import resizeImage from '~/app/ft-lib/resizeImages';
import FTicons from '~/app/ft-lib/FTicon';
import FTSwiper from '~/app/ft-lib/Swiper';
import {useRootLoaderData} from '~/app/root';

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
      {fields.title != null && fields.testimonials != null && (
        <p className="section-heading ft-text-main md:text-3xl text-2xl mb-10">
          {fields.title.value}
        </p>
      )}
      <FTSwiper
        navigation
        options={{
          spaceBetween: 20,
          slidesPerView: 1.25,
          breakpoints: {
            768: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
            1024: {
              spaceBetween: 20,
              slidesPerView: 4,
            },
          },
        }}
      >
        {fields.testimonials != null &&
          fields.testimonials.references?.nodes?.map((testimonial, index) => {
            const testimonialFields = arrayToObject({
              array: testimonial.fields,
            });
            let isLastSlide = null;
            if (fields.testimonials != null && fields) {
              isLastSlide =
                index === fields.testimonials.references.nodes.length - 1;
            }
            return (
              <div
                key={testimonial.id}
                style={{}}
                className="swiper-slide rounded-2xl overflow-hidden"
              >
                <div
                  style={{
                    aspectRatio: '1/1',
                  }}
                  className="testimonialsSection__testimonial flex justify-center items-end w-full h-72 md:h-80"
                >
                  <div className="lightgray / cover no-repeat flex h-full w-full">
                    {testimonialFields.before_image != null && (
                      <LazyImage
                        alt="Suplab Supplements Store Lebanon Testimonial"
                        style={{
                          width:
                            testimonialFields.after_image != null
                              ? '50%'
                              : '100%',
                        }}
                        className="h-full w-full object-fill"
                        src={resizeImage(
                          testimonialFields.before_image.reference.image.url,
                          400,
                        )}
                      />
                    )}
                    {testimonialFields.after_image?.value != null && (
                      <LazyImage
                        alt="Suplab Supplements Store Lebanon Testimonial"
                        style={{}}
                        className="w-1/2 h-full object-fill"
                        src={resizeImage(
                          testimonialFields.after_image.reference.image.url,
                          400,
                        )}
                      />
                    )}
                  </div>
                  <div
                    style={{
                      background: 'rgba(250, 249, 246, 0.60)',
                    }}
                    className="testimonial__content absolute flex p-2 flex-col justify-end items-start mb-[15px] m-3 backdrop-blur-sm"
                  >
                    {testimonialFields.name != null && (
                      <p
                        style={{
                          fontFamily: 'Roboto Condensed',
                          fontStyle: 'normal',
                          fontWeight: 'bold',
                          fontSize: '20px',
                          lineHeight: '24px',
                        }}
                      >
                        {testimonialFields.name.value}
                      </p>
                    )}
                    {testimonialFields.description != null && (
                      <p
                        style={{
                          fontFamily: 'Roboto Condensed',
                          fontStyle: 'normal',
                          fontWeight: 'normal',
                          fontSize: '14px',
                          lineHeight: '17px',
                        }}
                      >
                        {testimonialFields.description.value}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </FTSwiper>
    </div>
  );
};

export default Testimonials;
