import React, {useEffect, useRef, useState} from 'react';
import {LoaderArgs, json} from '@shopify/remix-oxygen';
import type {App} from '../../api/type';
import {useLoaderData} from '@remix-run/react';
import arrayToObject from '../../ft-lib/ArrayToObject';
import Swiper from 'swiper';
import {Pagination, Autoplay} from 'swiper/modules';


interface PromotionSectionProps {
  section: App.HomePageTemplate.PromotionsSection;
}

const Promotion = ({section}: PromotionSectionProps) => {
  const fields = arrayToObject({array: section.fields});
  const isMobile = window.innerWidth <= 768;
  const [image, setImage] = React.useState<string | null>(null);

  const swiperContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (swiperContainer.current == null) {
      return;
    }
    const swiper = new Swiper(swiperContainer.current, {
      spaceBetween: 35,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
      },
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
        bulletActiveClass: 'swiper-pagination-bullet-active-product-page',
        renderBullet(index, className) {
          return `<span class="${className} !opacity-50"></span>`;
        },
      },
      autoplay: {
        delay: 5000
      },
      loop: true,
      modules: [Pagination, Autoplay],
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
      className="promotionSection container mx-auto md:h-[300px] h-[250px] overflow-hidden"
      ref={swiperContainer}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '12px',
          boxShadow: '0px 6px 9px 0px rgba(0, 0, 0, 0.16)',
        }}
        className="swiper-wrapper flex md:flex-row justify-start items-end relative"
      > 
        {fields.promotions?.references.nodes.map((promotion, index) => {
          const promotionFields = arrayToObject({array: promotion.fields});
          const imageUrl = isMobile
            ? promotionFields.mobile_image?.reference.image.url
            : promotionFields.desktop_image?.reference.image.url;
          return (
            <div
              key={promotion.id}
              className="swiper-slide w-full h-full"
              >
            <img
              src={imageUrl}
              alt="img"
              className="w-full h-full rounded-xl"
            />
            </div>
          );
        })}
      <div className="swiper-pagination" />
      </div>
    </div>
  );
};

export default Promotion;
