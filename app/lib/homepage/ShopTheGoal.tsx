import {useEffect, useState, useRef} from 'react';
import type {App} from '../../api/type';
import arrayToObject from '../../ft-lib/ArrayToObject';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import LazyImage from '~/app/ft-lib/LazyImage';
import resizeImage from '~/app/ft-lib/resizeImages';
import {Colors} from '~/app/ft-lib/shared';
import {Link} from '@remix-run/react';
import FTSwiper from '~/app/ft-lib/Swiper';
import {useRootLoaderData} from '~/app/root';

interface ShopTheGoalSectionProps {
  section: App.HomePageTemplate.ShopTheGoalSection;
}

const ShopTheGoal = ({section}: ShopTheGoalSectionProps) => {
  const fields = arrayToObject({array: section.fields});

  const rootData = useRootLoaderData();
  const {locale} = rootData;
  const isArabic = locale.language.toLowerCase() === 'ar' ? true : false;

  if (fields.shop_the_goal_collections == null) {
    return null;
  }

  return (
    <div
      key={section.type}
      style={{
        marginTop: '40px',
        overflow: 'hidden',
      }}
      className="shopTheGoalSection w-full container mx-auto"
    >
      {fields.title != null && fields.shop_the_goal_collections != null && (
        <p
          // className="section-heading ft-text-main md:text-3xl text-2xl mb-10 md:text-start text-center"
          className={`section-heading ft-text-main md:text-3xl text-2xl mb-10 text-center ${
            isArabic ? 'md:text-end' : 'md:text-start'
          }`}
        >
          {fields.title.value}
        </p>
      )}
      <FTSwiper
        navigation
        childrenNumber={fields.shop_the_goal_list?.references.nodes.length}
        options={{
          spaceBetween: 10,
          slidesPerView: 1,
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
        {fields.shop_the_goal_list &&
          fields.shop_the_goal_list.references.nodes.map(
            (shopTheGoal, index) => {
              const goalFields = arrayToObject({array: shopTheGoal.fields});
              return (
                <div key={fields.title?.key} className="swiper-slide">
                  <div className="shopTheGoalSection__shopTheGoal flex flex-col justify-center items-center rounded-3xl">
                    <div
                      style={{
                        boxShadow:
                          '0px 8.70968px 13.06452px 0px rgba(0, 0, 0, 0.16)',
                      }}
                      className="flex justify-center items-end mb-3 rounded-3xl cover no-repeat w-full h-[400px]"
                    >
                      {goalFields.goal_image != null && (
                        <LazyImage
                          alt={
                            'Supplemnents for ' +
                            goalFields.goal_image?.reference.image.url
                          }
                          src={resizeImage(
                            goalFields.goal_image.reference.image.url,
                            600,
                          )}
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
                                color: Colors.secondary,
                              }}
                              className="flex justify-center items-start gap-3 md:text-2xl text-xl ft-text-main text-center"
                            >
                              {goalFields.goal_title.value}
                            </h3>
                          </div>
                        </div>
                      )}
                    </div>
                    {fields.button_text && (
                      <Link
                        to={`collections/${goalFields.url_handle?.value}`}
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
                          {fields.button_text.value}
                        </p>
                      </Link>
                    )}
                  </div>
                </div>
              );
            },
          )}
      </FTSwiper>
    </div>
  );
};

export default ShopTheGoal;
