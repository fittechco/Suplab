import { useEffect, useRef, useState } from 'react';
import { useLoaderData } from '@remix-run/react';
import { type LoaderArgs, json } from '@shopify/remix-oxygen';
import ProductCard from 'app/components/ProductCard';
import { Slider } from '~/app/components/ui/slider';
import Dropdown from '~/app/components/Dropdown';
import FilterIcon from '~/app/components/FilterIcon';
import invariant from 'tiny-invariant';
import MobileFiltersMenu from '../components/MobileFiltersMenu';
import { createPortal } from 'react-dom';
import { Colors } from '../ft-lib/shared';
import ProductController from '../ft-lib/ft-server/controllers/ProductController';
import LazyImage from '../ft-lib/LazyImage';
import resizeImage from '../ft-lib/resizeImages';
import type { App } from '../api/type';


export async function loader({ context, params, request }: LoaderArgs) {
  const collectionHandle = params.collectionHandle;
  invariant(collectionHandle, 'Collection handle is required');

  const searchParams = new URL(request.url).searchParams;

  const dynamicFilters: any = [];

  searchParams.forEach((value, param) => {
    if (param === 'cursor') {
      return
    }
    const parsedValue = JSON.parse(value) as string;
    dynamicFilters.push(parsedValue);
  });

  const availableFilters = await ProductController.getAvailableFilters({
    handle: collectionHandle,
  });

  const availableDynamicFilters = extractAvailableFilters(
    availableFilters.products.filters
  );

  const collection = await ProductController.getFilteredProducts({
    handle: collectionHandle,
    filters: dynamicFilters,
    cursor: null
  });
  return json({
    collection,
    availableFilters: availableDynamicFilters,
  });
}

const extractAvailableFilters = (filters: any) => {
  return filters.map((filter: any) => {
    return {
      param: filter.label,
      options: filter.values.map((option: any) => ({
        value: option.input,
        label: option.label,
      })),
    };
  });
};

function Collection() {
  const data = useLoaderData<typeof loader>();
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);
  const filtersData = data.availableFilters.filter((filter: any) => filter.param !== 'Price');
  const lastProductRef = useRef<HTMLDivElement | null>(null);
  const [products, setProducts] = useState<App.Shopify.Storefront.Product[]>(data.collection.products.nodes);
  const [hasNextPage, setHasNextPage] = useState<boolean>(data.collection.products.pageInfo.hasNextPage);
  const [cursor, setCursor] = useState<string | null>(data.collection.products.pageInfo.endCursor || null);

  useEffect(() => {
    if (lastProductRef.current == null) {
      return
    }
    const observer = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting === true && hasNextPage === true && cursor != null) {
        console.log("Load more products");
        console.log(hasNextPage, cursor);
        const productsAfterCursor = await ProductController.getFilteredProducts({
          handle: data.collection.handle,
          filters: [],
          cursor
        })
        console.log(productsAfterCursor, 'productsAfterCursor');
        setHasNextPage(productsAfterCursor.products.pageInfo.hasNextPage);
        setCursor(productsAfterCursor.products.pageInfo.endCursor ?? null)
        setProducts([...products, ...productsAfterCursor.products.nodes]);
      }
    });
    observer.observe(lastProductRef.current);
  }, [cursor, data.collection.handle, data.collection.products, hasNextPage, products]);

  useEffect(() => {
    setProducts(data.collection.products.nodes);
    setHasNextPage(data.collection.products.pageInfo.hasNextPage);
    setCursor(data.collection.products.pageInfo.endCursor ?? null);
  }, [data.collection.products]);

  const toggleFiltersMenu = () => {
    setShowMobileFilters((prev) => !prev);
  };
  console.log(products.length, 'products.length');
  if (data.collection === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <main className="flex flex-col relative container">
        <div className="collectionHero__Section w-full mx-auto md:h-[470px] h-[215px]">
          {data.collection.image != null && (
            <div
              style={{
                borderRadius: '24px',
                boxShadow: '0px 6px 9px 0px rgba(0, 0, 0, 0.16)',
              }}
              className="collectionHero__Section__Image flex w-full h-full overflow-hidden md:flex-row justify-start items-end relative"
            >
              {data.collection.image != null && (
                <LazyImage
                  className="w-full h-full object-cover"
                  src={resizeImage(data.collection.image?.url, 800)}
                />
              )}
              <div className="heroHeader absolute w-full flex flex-col gap-0 md:gap-4 z-10 justify-end md:justify-center container mb-8 mb:mb-0">
                {data.collection.title != null && (
                  <div
                    style={{
                      color: Colors.textSecondary,
                      width: '90%',
                      fontSize: '34px',
                    }}
                    className="header md:text-3xl lg:text-5xl tracking-wide font-bold text-2xl uppercase"
                  >
                    {data.collection.title}
                  </div>
                )}
                {data.collection.description != null && (
                  <div
                    style={{
                      color: Colors.textSecondary,
                      width: '80%',
                    }}
                    className="subHeader text-base md:text-lg"
                  >
                    {data.collection.description}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="filtersContainer hidden lg:flex py-3 my-9 gap-10 items-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
          {filtersData.map((filter: any) => (
            <Dropdown
              key={filter.param}
              placeholder={filter.param}
              param={filter.param}
              options={filter.options.map((option: any) => ({
                label: option.label,
                value: option.value,
              }))}
            />
          ))}
          <div className="sliderContainer w-1/4 flex flex-col gap-2 justify-center">
            <h4 className="sliderTitle uppercase text-2xl text-bold">Price</h4>
            <Slider className="min-w-[250px]" />
          </div>
        </div>
        <div className="productsGrid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-9">
          {products.map((product, index) => {
            if (product == null) {
              return null
            }
            return (
              <div
                ref={(ref) => {
                  if (data.collection.products.nodes.length === index + 1) {
                    lastProductRef.current = ref;
                  }
                }}
                key={product.id} className=''>
                <ProductCard product={product} />
              </div>
            )
          })}
        </div>
        {
          hasNextPage === true && (
            <div
              style={{
                color: Colors.textSecondary,
                width: '80%',
              }}
              className="loading-more loader ft-text-main text-2xl">
              Loading
            </div>
          )
        }
        <div
          className="mobileFilterMenuTrigger h-[50px] w-[50px] bg-main sticky bottom-3 left-5 z-50 my-3 flex lg:hidden items-center justify-center rounded-full shadow-md cursor-pointer hover:scale-105 transition-all"
          style={{
            backgroundColor: 'rgba(74, 74, 73, 0.60)',
            transitionDuration: '0.2s',
          }}
          onClick={toggleFiltersMenu}
        >
          <FilterIcon />
        </div>
      </main>
      {showMobileFilters === true &&
        createPortal(
          <MobileFiltersMenu
            show={showMobileFilters}
            setShow={setShowMobileFilters}
            filters={filtersData}
          />,
          document.body
        )}
    </div>
  );
}

export default Collection;
