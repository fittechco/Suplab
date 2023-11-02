import { useEffect, useRef, useState } from 'react';
import { useFetcher, useLoaderData, useLocation, useNavigation, useSearchParams } from '@remix-run/react';
import { type LoaderFunctionArgs, json } from '@shopify/remix-oxygen';
import ProductCard from 'app/components/ProductCard';
import { PriceSlider } from '~/app/components/ui/PriceSlider';
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
import StorefrontApi from '../api/storefront';
import { seoPayload } from '../ft-lib/seo.server';
import _ from 'lodash';
import { AnalyticsPageType, Pagination, getPaginationVariables } from '@shopify/hydrogen';
import { COLLECTIONFRAGMENT } from '../ft-lib/ft-server/services/collectionService';
import { PRODUCTFRAGMENT } from '../ft-lib/ft-server/services/productService';

export async function loader({ context, params, request }: LoaderFunctionArgs) {
  const collectionHandle = params.collectionHandle;
  invariant(collectionHandle, 'Collection handle is required');
  const PC = new ProductController({ storefront: context.storefront });
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 10,
  });
  const searchParams = new URL(request.url).searchParams;

  let minPrice = 0;
  let maxPrice = 100;

  if (searchParams.has('price')) {
    const priceParam = JSON.parse(searchParams.get('price')!) as { price: { min: number; max: number } };

    minPrice = priceParam.price.min;
    maxPrice = priceParam.price.max;
  }

  const dynamicFilters: any = [];
  searchParams.forEach((value, param) => {
    if (param === 'cursor' || param === 'direction') {
      return;
    }
    const parsedValue = JSON.parse(value) as string;
    dynamicFilters.push(parsedValue);
  });

  const availableFilters = await PC.getAvailableFilters({
    handle: collectionHandle,
  });

  const availableDynamicFilters = extractAvailableFilters(
    availableFilters.products.filters,
  );

  const { collection } = await context.storefront.query(COLLECTION_QUERY, {
    cache: {
      maxAge: 60 * 60 * 24,
    },
    variables: {
      handle: collectionHandle,
      filters: dynamicFilters,
      ...paginationVariables,
    }
  });

  invariant(collection, 'Collection not found');

  const seo = seoPayload.collection({
    collection,
    url: request.url,
  })

  // set the max price to the max price of the collection
  maxPrice = collection.products.nodes.reduce((acc, node) => {
    return Math.max(acc, parseFloat(node.priceRange.maxVariantPrice.amount));
  }, 0);

  minPrice = collection.products.nodes.reduce((acc, node) => {
    return Math.min(acc, parseFloat(node.priceRange.minVariantPrice.amount));
  }, maxPrice);

  return json({
    collection,
    availableFilters: availableDynamicFilters,
    maxPrice,
    minPrice,
    seo,
    analytics: {
      pageType: AnalyticsPageType.collection,
      collectionHandle,
      resourceId: collection.id,
    },
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
  const [currentSearchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigation();
  const defaultParams = new URLSearchParams(currentSearchParams);
  const filtersData = data.availableFilters.filter(
    (filter: any) => filter.param !== 'Price',
  );
  let minPrice = data.minPrice;
  let maxPrice = data.maxPrice;

  const searchParams = navigation.location
    ? new URLSearchParams(navigation.location.search)
    : defaultParams;


  const toggleFiltersMenu = () => {
    setShowMobileFilters((prev) => !prev);
  };
  if (data.collection === null) {
    return <div>Loading...</div>;
  }

  if (searchParams.has('price') === true) {
    const priceParam = searchParams.get('price')
    invariant(priceParam, 'Price param is required');
    const price = JSON.parse(priceParam) as { price: { min: number; max: number } };
    maxPrice = price.price.max;
    minPrice = price.price.min;
  }

  return (
    <div>
      <main className="flex flex-col relative container">
        {data.collection.image != null && (
          <div className="collectionHero__Section w-full mx-auto md:h-[470px] h-[215px]">
            <div
              style={{
                borderRadius: '24px',
                boxShadow: '0px 6px 9px 0px rgba(0, 0, 0, 0.16)',
              }}
              className="collectionHero__Section__Image flex w-full h-full overflow-hidden md:flex-row justify-start items-end relative"
            >
              {data.collection.image != null && (
                <LazyImage
                  alt='collection image'
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
          </div>
        )}
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
            <div className="flex justify-between">
              <span className="text-sm">Min: ${minPrice}</span>
              <span className="text-sm">Max: ${maxPrice}</span>
            </div>
            <PriceSlider min={minPrice} max={maxPrice} className="min-w-[250px]" />
          </div>
        </div>
        {/* <div className="productsGrid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-9"> */}
        <Pagination connection={data.collection.products}>
          {({ nodes, NextLink, isLoading }) => {
            return (
              <>
                <div className="productsGrid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-9">
                  {nodes.map((product, index) => {
                    if (product == null) {
                      return null;
                    }
                    return (
                      <div
                        key={product.id}
                        className=""
                      >
                        <ProductCard product={product} />
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-center mt-6">
                  <NextLink
                    style={{
                      background: Colors.primary,
                      borderRadius: '9999px',
                      color: Colors.textSecondary,
                    }}
                    className="text-2xl md:text-2xl text-center px-3.5 py-1.5 rounded-lg ft-text-main max-md:w-full w-80 flex items-center justify-center">
                    {isLoading === true ? (
                      <div className="lds-dual-ring lds-dual-ring-white !w-8 !h-8" />
                    )
                      : 'Load more'}
                  </NextLink>
                </div>
              </>
            )
          }}
        </Pagination>
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
            minPrice={minPrice}
            maxPrice={maxPrice}
          />,
          document.body,
        )}
    </div>
  );
}

export default Collection;


const COLLECTION_QUERY = `#graphql
  query GetCollection(
    $handle: String!
    $filters: [ProductFilter!] 
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) {
    collection(handle: $handle) {
      ...Collection
      id
      handle
      title
      image {
        url
      }
      description
      products(
        first: $first,
        last: $last,
        filters: $filters,
        before: $startCursor,
        after: $endCursor
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
        nodes {
          ...ProductFragment
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          availableForSale
          productType
          vendor
          variants(first: 10) {
            nodes {
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
  }
  ${COLLECTIONFRAGMENT}
  ${PRODUCTFRAGMENT}
`;
