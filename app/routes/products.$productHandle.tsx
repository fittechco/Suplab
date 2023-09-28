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
import { Image, Money } from '@shopify/hydrogen';
import FTicons from 'app/ft-lib/Icon';
import Quantity from 'app/components/Quantity';

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
  const [quantity, setQuantity] = useState(1);
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
        bulletActiveClass: 'swiper-pagination-bullet-active-product-page',
        renderBullet: function (index, className) {
          return `<span class="${className} !opacity-50"></span>`;
        }
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
      className="offersSection w-full !container mx-auto "
    >
      <div className="offersSection__offers relative w-full space-y-5 ">
        <div
          style={{
            position: "sticky",
            top: 0,
          }}
          className='product-image-container'>
          <div ref={swiperContainer} className="swiper-container relative">
            <div className="swiper-wrapper">
              {product.images.nodes.map((image, index) => {
                return (
                  <div style={{

                  }} key={index} className="swiper-slide product-image__slide">
                    <div
                      className="card-shadow "
                      style={{
                        height: "75vh",
                        width: "100%",
                        borderRadius: '24px',
                        background: '#707070',
                      }}
                    >
                      <Image
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
        </div>

        <div
          style={{
            backgroundColor: Colors.offWhite,
            borderRadius: '24px',
          }}
          className='box space-y-4 shadow-lg'>
          <div style={{
            position: "sticky",
          }} className='cta-button top-32'>
            <button
              style={{
                background: Colors.primary,
                borderRadius: '9999px',
                width: '100%',
                color: Colors.textSecondary,
              }}
              className='text-2xl px-3.5 py-1.5 rounded-lg ft-text-main'>Add to cart</button>
          </div>
          <div className='product-details'>
            <h1 className='text-2xl ft-text-main'>{product.title}</h1>
            <Money className='text-2xl font-bold uppercase' data={product.variants.nodes[0].price} withoutTrailingZeros />
          </div>
          <Quantity onChange={(value) => {
            setQuantity(value)
          }}
            value={quantity}
          />
          <div className='options flex flex-col gap-5'>
            {product.options.map((option, index) => {
              return (
                <div key={index} className='option flex flex-col'>
                  <h1 className='text-xl font-bold uppercase'>{option.name}</h1>
                  <div className='values flex gap-3 flex-wrap mt-2'>
                    {option.values.map((value, index) => {
                      return (
                        <div
                          style={{
                            background: Colors.secondary,
                            color: Colors.textSecondary,
                            borderRadius: '9999px',
                          }}
                          key={index} className='value px-3 py-1'>
                          <p className='text-sm font-medium capitalize tracking-wider'>{value}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div >
  );
};

export default ProductPage;
