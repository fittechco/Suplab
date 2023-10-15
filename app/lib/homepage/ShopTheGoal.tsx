import { useEffect, useState, useRef } from 'react';
import type { App } from '../../api/type';
import arrayToObject from '../../ft-lib/ArrayToObject';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import LazyImage from '~/app/ft-lib/LazyImage';
import resizeImage from '~/app/ft-lib/resizeImages';
import { Colors } from '~/app/ft-lib/shared';

interface ShopTheGoalSectionProps {
  section: App.HomePageTemplate.ShopTheGoalSection;
}

const ShopTheGoal = ({ section }: ShopTheGoalSectionProps) => {
  const fields = arrayToObject({ array: section.fields });
  const swiperContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (swiperContainer.current == null) {
      return;
    }
    const swiper = new Swiper(swiperContainer.current, {
      spaceBetween: 20,
      slidesPerView: 1.25,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
          slidesPerView: 4,
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
      className="shopTheGoalSection w-full container mx-auto"
    >
      {fields.title != null && fields.shop_the_goals != null && (
        <p className="ft-text-main md:text-3xl text-2xl mb-10 text-center md:text-start">
          {fields.title.value}
        </p>
      )}
      <div
        ref={swiperContainer}
        className="shopTheGoalSection__benefits relative swiper-container"
      >
        <div className="swiper-wrapper flex">
          {fields.shop_the_goals && fields.shop_the_goals.references.nodes.map((shopTheGoal, index) => {
            const goalFields = arrayToObject({ array: shopTheGoal.fields });
            const goalImage = goalFields.goal_image?.reference?.image?.url;
            return (
              <div key={shopTheGoal.id} className="swiper-slide">
                <div className="shopTheGoalSection__shopTheGoal flex flex-col justify-center items-center rounded-3xl">
                  <div
                    style={{
                      boxShadow:
                        '0px 8.70968px 13.06452px 0px rgba(0, 0, 0, 0.16)',
                    }}
                    className="flex justify-center items-end mb-3 rounded-3xl cover no-repeat w-full h-[360px]"
                  >
                    {goalImage && (
                      <LazyImage
                        src={resizeImage(goalImage, 600)}
                        className="h-full w-full rounded-3xl object-cover"
                      />
                    )}
                    {goalFields.goal_title && (
                      <div className="absolute flex w-full rounded-xl mb-6 z-50">
                        <div
                          style={{
                            padding: '9.43px 0px',
                            background: 'rgba(250, 249, 246, 0.60)',
                          }}
                          className="flex w-full justify-center gap-3 backdrop-blur-sm"
                        >
                          <h3
                            style={{
                              fontWeight: '700',
                              textTransform: 'uppercase',
                              color: Colors.secondary
                            }}
                            className="flex justify-center items-start gap-3 md:text-2xl text-xl ft-text-main"
                          >
                            {goalFields.goal_title.value}
                          </h3>
                        </div>
                      </div>
                    )}
                  </div>
                  {goalFields.button_text && (
                    <button
                      style={{
                        padding: '7.072px 16.502px',
                        background: 'var(--Main-Color, #93C147)',
                        boxShadow:
                          '0px 4.71483px 8.25095px 0px rgba(0, 0, 0, 0.10)',
                        backdropFilter: 'blur(2.946768045425415px)',
                      }}
                      className="flex w-full justify-center items-start gap-3 rounded-[30px]"
                    >
                      <p
                        style={{
                          color: 'var(--Off-White, #FAF9F6)',
                          fontFamily: 'Roboto Condensed',
                          fontSize: '23.574px',
                          fontStyle: 'normal',
                          fontWeight: 700,
                          lineHeight: 'normal',
                          letterSpacing: '0.471px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {goalFields.button_text.value}
                      </p>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 md:hidden flex">
          <button className="swiper-button-prev-icon"></button>
        </div>
        <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 md:hidden flex">
          <button className="swiper-button-next-icon"></button>
        </div>
      </div>
    </div>
  );
};

export default ShopTheGoal;
