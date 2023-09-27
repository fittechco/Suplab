import { useEffect, useRef, useState } from 'react';
import { App } from '../api/type';
import arrayToObject from "../ft-lib/ArrayToObject";
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import { LoaderArgs } from '@shopify/remix-oxygen';
import ProductController from 'app/ft-lib/ft-server/controllers/ProductController';
import invariant from 'tiny-invariant';
import { useLoaderData } from '@remix-run/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { Colors } from 'app/ft-lib/shared';

export async function loader({ context, params }: LoaderArgs) {
  const productHandle = params.productHandle;
  console.log(productHandle);
  invariant(productHandle != null, 'productHandle is required');
  const product = await ProductController.getProductByHandle({ handle: productHandle });
  return {
    product: product,
  }
}

const ProductPage = () => {
  const [spaceBetween, setSpaceBetween] = useState(10);
  const { product } = useLoaderData<typeof loader>();
  const swiperContainer = useRef<HTMLDivElement | null>(null);
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
    if (swiperContainer.current == null) {
      return;
    }
    const swiper = new Swiper(swiperContainer.current, {
      spaceBetween: spaceBetween,
      modules: [Pagination],
      slidesPerView: 1,
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
      }
    });

    return () => {
      window.removeEventListener('resize', updateSpaceBetween);

      if (swiper != null) {
        swiper.destroy();
      }
    };
  }, [spaceBetween]);

  if (product == null) {
    return null;
  }

  return (
    <div
      style={{
        marginTop: '40px',
        overflow: 'hidden',
      }}
      className="offersSection w-full !container mx-auto"
    >
      <div className="offersSection__offers relative w-full">
        <div ref={swiperContainer} className="swiper-container">
          <div className="swiper-wrapper">
            {product.images.nodes.map((image, index) => {
              return (
                <div style={{

                }} key={index} className="swiper-slide product-image__slide">
                  <div
                    className=" card-shadow "
                    style={{
                      height: "70vh",
                      width: "100%",
                      borderRadius: '24px',
                      background: '#707070',
                    }}
                  >
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: '24px',
                      }}
                      className=""
                      src={image.url}
                    />
                  </div>
                </div>
              );
            }
            )}
          </div>
          <div className="swiper-pagination" />
        </div>
        <div className='cta-button'>
          <button
            style={{
              background: Colors.primary,
              borderRadius: '9999px',
              width: '100%',
            }}
            className='font-mainFont text-2xl text-white px-3.5 py-1.5 rounded-lg'>Add to cart</button>
        </div>
      </div>
    </div >
  );
};

export default ProductPage;
