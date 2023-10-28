import { useEffect, useRef, useState } from 'react';
import type { ProductQuery } from 'storefrontapi.generated';
import Swiper from 'swiper';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';
import FTicons from './FTicon';
import { SwiperOptions } from 'swiper/types/swiper-options';
type Props = {
    children?: React.ReactNode;
    options?: SwiperOptions | undefined
    navigation?: boolean
};

export default function FTSwiper(props: Props) {
    const swiperContainer = useRef<HTMLDivElement & {
        swiper?: Swiper
    } | null>(null);
    const nextElRef = useRef<HTMLDivElement | null>(null);
    const prevElRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (swiperContainer.current == null) {
            return;
        }
        const swiper = new Swiper(swiperContainer.current, {

            modules: [Navigation],
            on: {
                activeIndexChange: function (swiper) {
                    if (swiper?.slides.length == null) {
                        return;
                    }
                    if (swiper.activeIndex === swiper.slides.length - 1) {
                        nextElRef.current?.style.setProperty('opacity', '0.5');
                    } else {
                        nextElRef.current?.style.setProperty('opacity', '1');
                    }
                    if (swiper.activeIndex === 0) {
                        prevElRef.current?.style.setProperty('opacity', '0.5');

                    } else {
                        prevElRef.current?.style.setProperty('opacity', '1');
                    }
                }
            },
            ...props.options
        });
        console.log(swiperContainer.current.swiper, "swiperContainer.current.swiper");

        return () => {
            if (swiper != null) {
                swiper.destroy();
            }
        };
    }, []);


    return (
        <div
            ref={swiperContainer}
            className="swiper-container relative"

        >
            <div className="swiper-wrapper">
                {props.children}
            </div>
            {props.navigation === true && (
                <>
                    <div
                        style={{ opacity: 0.5 }}
                        ref={prevElRef}
                        onClick={() => swiperContainer.current?.swiper?.slidePrev()}
                        className={`swiper-button absolute left-0 top-1/2 transform -translate-y-1/2 md:hidden z-10`}
                    >
                        <FTicons icon='chev-left' className='w-8 h-8' />
                    </div>
                    <div
                        ref={nextElRef}
                        onClick={() => swiperContainer.current?.swiper?.slideNext()}
                        className={`swiper-button absolute right-0 top-1/2 transform -translate-y-1/2 md:hidden z-10 `}
                    >
                        <FTicons icon='chev-right' className='w-8 h-8' />
                    </div>
                </>
            )}
        </div>
    );
}
