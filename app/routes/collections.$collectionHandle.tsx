import React, {useEffect, useState} from 'react';
import {useLoaderData, useSearchParams} from '@remix-run/react';
import {LoaderArgs, json} from '@shopify/remix-oxygen';
import {App} from '../api/type';
import Hero from './_index/Hero';
import ProductCard from 'app/components/ProductCard';
import {Slider} from '~/app/components/ui/slider';
import {Select} from '~/app/components/ui/select';
import Dropdown from '~/app/components/Dropdown';
import FilterIcon from '~/app/components/FilterIcon';
import invariant from 'tiny-invariant';
import MobileFiltersMenu from '../components/MobileFiltersMenu';
import { createPortal } from 'react-dom';
import {Colors} from '../ft-lib/shared';
import {
  SelectedOption,
  VariantOptionFilter,
  Product,
  ProductFilter,
} from '@shopify/hydrogen/storefront-api-types';
import {ProductQuery} from '../../storefrontapi.generated';
import ProductController from '../ft-lib/ft-server/controllers/ProductController';

export type Shop = {
  name: string;
};

export async function loader({ context, params, request }: LoaderArgs) {
  const collectionHandle = params.collectionHandle;
  console.log('collectionHandle', collectionHandle);

  invariant(collectionHandle, 'Collection handle is required');

  const searchParams = new URL(request.url).searchParams;

  const dynamicFilters: any = [];

  searchParams.forEach((value, param) => {
    try {
      const parsedValue = JSON.parse(value);
      console.log('parsedValue', parsedValue);
      dynamicFilters.push(parsedValue);
    } catch (error) {
      dynamicFilters.push({ [param]: value });
    }
  });

  const availableFilters = await ProductController.getAvailableFilters({
    handle: collectionHandle,
  });

  console.log('availableFilters', availableFilters);

  const availableDynamicFilters = extractAvailableFilters(
    availableFilters.products.filters
  );

  console.log('availableDynamicFilters', availableDynamicFilters);

  const collection = await ProductController.getFilteredProducts({
    handle: collectionHandle,
    filters: dynamicFilters,
  });

  console.log('dynamicFilters', dynamicFilters);

  console.log('collection', collection);

  return json({
    collection: collection,
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

  const filtersData = data.availableFilters;
  console.log('filtersData', filtersData);

  if (!data.collection) {
    return <div>Loading...</div>;
  }

  const toggleFiltersMenu = () => {
    setShowMobileFilters((prev) => !prev);
  };

  return (
    <div>
      <main className="flex flex-col relative container">
        <div className="collectionHero__Section w-full mx-auto md:h-[470px] h-[215px]">
          <div
            style={{
              borderRadius: '24px',
              boxShadow: '0px 6px 9px 0px rgba(0, 0, 0, 0.16)',
            }}
            className="collectionHero__Section__Image flex w-full h-full overflow-hidden md:flex-row justify-start items-end relative"
          >
            {data.collection.image != null && (
              <img
                className="w-full h-full object-cover"
                src={data.collection.image?.url}
                alt={data.collection.title}
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
          {data.collection.products.nodes.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

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
          document.body,
        )}
    </div>
  );
}

export default Collection;
