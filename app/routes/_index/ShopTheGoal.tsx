import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {App} from '../../api/type';
import arrayToObject from '../../ft-lib/ArrayToObject';

interface ShopTheGoalSectionProps {
  section: App.HomePageTemplate.ShopTheGoalSection;
}

const ShopTheGoal = ({section}: ShopTheGoalSectionProps) => {
  const fields = arrayToObject({array: section.fields});

  return (
    <div
      key={section.type}
      style={{
        marginTop: '40px',
        overflow: 'hidden',
      }}
      className="shopTheGoalSection w-full container mx-auto"
    >
      <p className="ft-text-main text-3xl mb-10">{fields.title.value}</p>
      <div className="shopTheGoalSection__benefits relative">
        <Swiper
          spaceBetween={25}
          slidesPerView={'auto'}
          // navigation={{
          //   prevEl: '.swiper-button-prev',
          //   nextEl: '.swiper-button-next',
          // }}
        >
          {fields.shop_the_goals.references.nodes.map((shopTheGoal, index) => {
            const goalFields = arrayToObject({array: shopTheGoal.fields});
            const goalImage = goalFields.goal_image?.reference?.image?.url;
            return (
              <SwiperSlide
                key={index}
                style={{
                  width: '315px',
                }}
              >
                <div
                  className="shopTheGoalSection__shopTheGoal"
                  style={{
                    width: '100%',
                    height: '441.29px',
                    borderRadius: '17.419px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '310px',
                      height: '441.29px',
                      borderRadius: '17.419px',
                      background: `url(${goalImage}), lightgray 50% / cover no-repeat`,
                      boxShadow:
                        '0px 8.70968px 13.06452px 0px rgba(0, 0, 0, 0.16)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                      marginBottom: '12px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        width: '100%',
                        marginBottom: '25px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          width: '100%',
                          padding: '9.43px 0px',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '11.787px',
                          background: 'rgba(250, 249, 246, 0.60)',
                          backdropFilter: 'blur(2.946768045425415px)',
                        }}
                      >
                        <p
                          style={{
                            display: 'flex',
                            width: '310px',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            gap: '11.787px',
                            fontFamily: 'Roboto Condensed',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: 'normal',
                            letterSpacing: '0.48px',
                            textTransform: 'uppercase',
                          }}
                        >
                          {goalFields.goal_title.value}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    style={{
                      display: 'flex',
                      width: '310px',
                      padding: '7.072px 16.502px',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      gap: '11.787px',
                      borderRadius: '30.646px',
                      background: 'var(--Main-Color, #93C147)',
                      boxShadow:
                        '0px 4.71483px 8.25095px 0px rgba(0, 0, 0, 0.10)',
                      backdropFilter: 'blur(2.946768045425415px)',
                    }}
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

export default ShopTheGoal;
