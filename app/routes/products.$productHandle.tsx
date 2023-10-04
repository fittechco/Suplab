import { useEffect, useRef, useState } from 'react';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import { LoaderArgs } from '@shopify/remix-oxygen';
import ProductController from 'app/ft-lib/ft-server/controllers/ProductController';
import invariant from 'tiny-invariant';
import { useLoaderData } from '@remix-run/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { Colors } from 'app/ft-lib/shared';
import { Image } from '@shopify/hydrogen';
import { useQuery } from 'react-query';
import ProductsSwiper from 'app/components/ProductsSwiper';
import MobileProductDetails from 'app/lib/productPage/MobileProductDetails';
import ProductForm from 'app/lib/productPage/ProductForm';

export async function loader({ context, params, request }: LoaderArgs) {
  const productHandle = params.productHandle;
  const searchParams = new URL(request.url).searchParams  // get the search params from the url;
  const selectedOptions: { name: string, value: string }[] = []
  searchParams.forEach((value, key) => {
    selectedOptions.push({
      name: key,
      value: value
    })
  })
  invariant(productHandle != null, 'productHandle is required');
  const product = await ProductController.getProductByHandle({ handle: productHandle, selectedOptions });
  const selectedVariant =
    product.selectedVariant ?? product?.variants?.nodes[0];
  console.log(product.selectedVariant, "product.selectedVariant");
  return {
    product: product,
    selectedVariant: selectedVariant,
  }
}

const ProductPage = () => {
  const [swiperConfig, setSwiperConfig] = useState<{
    spaceBetween: number;
    slidesPerView: number;
  }>({
    spaceBetween: 10,
    slidesPerView: 1,
  });
  const { product, selectedVariant } = useLoaderData<typeof loader>();
  const swiperContainer = useRef<HTMLDivElement | null>(null);
  const [quantity, setQuantity] = useState(1);
  const productRecommendations = useQuery('productRecommendations', () => {
    return ProductController.getProductRecommendations({ productId: product.id });
  });
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const updateScrollDirection = () => {
      window.scrollY > 0 ? setIsTop(false) : setIsTop(true);
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, []);

  useEffect(() => {
    productRecommendations.refetch();
    if (swiperContainer.current == null) {
      return;

    }
    const swiper = new Swiper(swiperContainer.current, {
      spaceBetween: 10,
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
      if (swiper != null) {
        swiper.destroy();
      }
    };
  }, [product.images.nodes.length]);


  if (product == null) {
    return null;
  }

  return (
    <div
      style={{
        marginTop: '40px',
      }}
      className="Product-container w-full mx-auto">
      <div className="Product-wrapper w-full md:flex md:gap-5 md:container mx-auto">
        <div
          style={{
            zIndex: 1,
            maxHeight: "calc(100vh - 100px)",
          }}
          className='product-image-container md:max-w-3xl w-full md:w-[60%] justify-center md:flex max-md:sticky max-md:top-0'>
          <div
            style={{
            }}
            ref={swiperContainer} className="swiper-container max-md:h-[70vh] aspect-square  w-full max-md:px-5  md:w-auto overflow-hidden relative">
            <div className="swiper-wrapper">
              {product.images.nodes.map((image, index) => {
                return (
                  <div key={index} className="swiper-slide">
                    <div
                      className="max-md:card-shadow"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: '24px',
                        background: Colors.bg,
                      }}
                    >
                      <Image
                        style={{
                          objectFit: "cover",
                          height: "100%",
                          width: "auto",
                          margin: "auto",
                          borderRadius: '24px',
                        }}
                        sizes='100%, 800px'
                        // aspectRatio='0.77/1'
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
        <div className='max-md:hidden'>
          <ProductForm selectedVariant={selectedVariant} product={product} />
        </div>
        <MobileProductDetails selectedVariant={selectedVariant} isTop={isTop} product={product} />
      </div>
      <div
        style={{
          backgroundColor: Colors.bg,
          zIndex: 10,
          position: "relative",
        }}>
        <div className='recommended-prducts py-5 relative'>
          {productRecommendations.data != null && (
            <ProductsSwiper title='Similar Products' products={productRecommendations.data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;