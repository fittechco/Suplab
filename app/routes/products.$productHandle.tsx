import { Suspense, useEffect, useRef, useState } from 'react';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import { defer, redirect, type LoaderArgs } from '@shopify/remix-oxygen';
import ProductController from 'app/ft-lib/ft-server/controllers/ProductController';
import invariant from 'tiny-invariant';
import { Await, useLoaderData, useNavigation } from '@remix-run/react';
import { Pagination, Thumbs, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css';
import { Colors } from 'app/ft-lib/shared';
import ProductsSwiper from 'app/components/ProductsSwiper';
import ProductForm from 'app/lib/productPage/ProductForm';
import ProductTabs from '../lib/productPage/ProductTabs';
import resizeImage from '../ft-lib/resizeImages';
import LazyImage from '../ft-lib/LazyImage';
import { UseShopStore } from '../root';
import { seoPayload } from '../ft-lib/seo.server';
import ProductReviews from '../lib/productPage/ProductReviews';
import JudgeMeService from '../ft-lib/apps/JudgeMe';
import { Review } from 'schema-dts';

export async function loader({ context, params, request }: LoaderArgs) {
  const productHandle = params.productHandle;
  const searchParams = new URL(request.url).searchParams; // get the search params from the urll;
  const selectedOptions: { name: string; value: string }[] = [];
  const PC = new ProductController({ storefront: context.storefront });
  searchParams.forEach((value, key) => {
    selectedOptions.push({
      name: key,
      value,
    });
  });
  invariant(productHandle != null, 'productHandle is required');
  const product = await PC.getProductByHandle({
    handle: productHandle,
    selectedOptions,
  });
  const recommendedProducts = PC.getProductRecommendations({ productId: product.id });
  const productMetafields = PC.getProductMetafields({
    productId: product.id,
  });
  if (!product.selectedVariant) {
    const searchParams = new URLSearchParams(new URL(request.url).search);
    const firstVariant = product.variants.nodes[0];

    for (const option of firstVariant.selectedOptions) {
      searchParams.set(option.name, option.value);
    }

    throw redirect(
      `/products/${product!.handle}?${searchParams.toString()}`,
      302, // Make sure to use a 302, because the first variant is subject to change
    );
  }

  const judgeMeApi = new JudgeMeService()
  const externalId = product.id.split('/').pop();
  invariant(externalId != null, 'externalId is required');
  const reviews = judgeMeApi.getProductReviewWidget(externalId)
  const widgetSettings = judgeMeApi.getWidgetSettings()

  const selectedVariant =
    product.selectedVariant ?? product?.variants?.nodes[0];
  // we will difer the fetching of the recommendations
  // to the client side

  const seo = seoPayload.product({
    product,
    selectedVariant,
    url: request.url,
  });

  return defer({
    recommendedProducts,
    widgetSettings,
    product,
    reviews,
    selectedVariant,
    productMetafields,
    seo,
    analytics: {
      pageType: 'product',
    }
  })
}

const ProductPage = () => {
  const { product, reviews, widgetSettings, selectedVariant, recommendedProducts, productMetafields } = useLoaderData<typeof loader>();
  const swiperContainer = useRef<HTMLDivElement | null>(null);
  const thumbsSwiperRef = useRef<HTMLDivElement | null>(null);
  const [isTop, setIsTop] = useState(true);
  const navigation = useNavigation();
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
  useEffect(() => {
    const updateScrollDirection = () => {
      window.scrollY > 0 ? setIsTop(false) : setIsTop(true);
    };
    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, []);


  useEffect(() => {
    if (swiperContainer.current == null) {
      return;
    }
    const swiper = new Swiper(swiperContainer.current, {
      spaceBetween: 10,
      slidesPerView: 1,
      modules: [Pagination, Thumbs, FreeMode],
      // show other images on the side so the user can select differenet images
      thumbs: {
        swiper: thumbsSwiper,
      },
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
        bulletActiveClass: 'swiper-pagination-bullet-active-product-page',
        renderBullet(index, className) {
          return `<span class="${className} !opacity-50"></span>`;
        },
      },
    });

    return () => {
      if (swiper != null) {
        swiper.destroy();
      }
    };
  }, [thumbsSwiper]);

  useEffect(() => {
    const thumbsSwiperReference = thumbsSwiperRef.current
    if (thumbsSwiperReference == null) {
      return;
    }
    const swiper = new Swiper(thumbsSwiperReference, {
      modules: [Pagination, Thumbs, FreeMode, Navigation],
      direction: 'vertical',
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    setThumbsSwiper(swiper);
    return () => {
      if (swiper != null) {
        swiper.destroy();
      }
    };
  }, [product.images.nodes]);

  useEffect(() => {
    if (navigation.state === 'idle') {
      UseShopStore.setState({ routesLoader: false })
    }
  }, [navigation.state]);


  if (product == null) {
    return null;
  }

  return (
    <div
      style={{
        marginTop: '40px',
      }}
      className="Product-container space-y-5 w-full mx-auto"
    >
      <div className="Product-wrapper w-full md:flex md:gap-5 md:container mx-auto">
        <div
          style={{
            zIndex: 1,
            maxHeight: 'calc(100vh - 100px)',
          }}
          className="product-image-container md:max-w-3xl w-full md:w-[60%] justify-center md:flex max-md:sticky max-md:top-0"
        >
          <div
            ref={thumbsSwiperRef}
            className="swiper-container h-full w-[20%] aspect-square max-md:px-5  overflow-hidden relative mr-2 max-md:hidden"
          >
            <div className="swiper-wrapper">
              {product.images.nodes.map((image, index) => {
                return (
                  <div key={image.url} className="swiper-slide cursor-pointer">
                    <div
                      className="max-md:card-shadow"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '24px',
                        background: Colors.bg,
                      }}
                    >
                      <LazyImage
                        alt='product image'
                        style={{
                          objectFit: 'cover',
                          height: '100%',
                          width: 'auto',
                          margin: 'auto',
                          borderRadius: '24px',
                        }}
                        className=""
                        src={resizeImage(image.url, 1000)} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="swiper-button-prev swiper-button-prev-vertical" />
            <div className="swiper-button-next swiper-button-next-vertical" />
          </div>
          <div
            ref={swiperContainer}
            className="swiper-container max-md:h-[70vh] aspect-square  w-full max-md:px-5  md:w-[80%] overflow-hidden relative"
          >
            <div className="swiper-wrapper">
              {product.images.nodes.map((image, index) => {
                return (
                  <div key={image.url} className="swiper-slide">
                    <div
                      className="max-md:card-shadow"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '24px',
                        background: Colors.bg,
                      }}
                    >
                      <LazyImage
                        alt='product image'
                        style={{
                          objectFit: 'contain',
                          height: '100%',
                          width: '100%',
                          maxWidth: '100%',
                          margin: 'auto',
                          borderRadius: '24px',
                        }}
                        className=""
                        src={resizeImage(image.url, 1000)} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
        <div
          style={{
            zIndex: 10,
            position: 'relative',
          }}
          className='box space-y-4  px-5 py-5 mobile-white-box md:w-[40%] rounded-t-3xl'>
          <ProductForm
            isTop={isTop}
            selectedVariant={selectedVariant}
            product={product}
          />
          <div className="mobile-product-tabs md:hidden">
            <Suspense >
              <Await resolve={productMetafields}>
                {productMetafields => {
                  return (
                    <ProductTabs product={productMetafields} />
                  )
                }}
              </Await>
            </Suspense>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: Colors.bg,
          zIndex: 10,
          position: 'relative',
        }}
        className='md:space-y-5 '
      >
        <div className="product-tabs max-md:hidden">
          <Suspense>
            <Await resolve={productMetafields}>
              {productMetafields => {
                return (
                  <ProductTabs product={productMetafields} />
                )
              }}
            </Await>
          </Suspense>
        </div>
        <div className='product-reviews'>
          <ProductReviews widgetSettings={widgetSettings} product={product} reviewWidget={reviews} />
        </div>
        <div className='className="recommended-prducts relative"'>
          <Suspense fallback={
            <ProductsSwiper
              title="Similar Products"
              products={null}
            />}>
            <Await resolve={recommendedProducts}>
              {(productRecommendations) => {
                return (
                  <ProductsSwiper
                    title="Similar Products"
                    products={productRecommendations}
                  />
                );
              }}
            </Await>
          </Suspense>
        </div>
      </div>

    </div>
  );
};

export default ProductPage;
