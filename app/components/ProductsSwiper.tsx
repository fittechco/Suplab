import React, { useEffect, useRef, useState } from 'react'
import { ProductQuery, ProductRecommendationsQuery } from 'storefrontapi.generated'
import ProductCard from './ProductCard';
import Swiper from 'swiper';
import 'swiper/css/scrollbar';
import { Scrollbar, Mousewheel } from "swiper/modules"
type Props = {
    products: NonNullable<ProductRecommendationsQuery["productRecommendations"]>,
    title: string
}

export default function ProductsSwiper(props: Props) {
    const swiperContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (swiperContainer.current == null) {
            return;
        }
        const swiper = new Swiper(swiperContainer.current, {
            slidesPerView: 1.5,
            spaceBetween: 20,
            mousewheel: true,
            modules: [Scrollbar, Mousewheel],
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            },
        }
        );

        return () => {
            if (swiper != null) {
                swiper.destroy();
            }
        };
    }, []);
    return (
        <div
            className='space-y-4'>
            <h3 className='ft-text-main text-2xl  container'>{props.title}</h3>
            <div ref={swiperContainer} className="swiper-container overflow-hidden container">
                <div className="swiper-wrapper">
                    {props.products.map((product, index) => {
                        return (
                            <div key={index} className="swiper-slide overflow-hidden">
                                <ProductCard product={product} />
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    )
}
