import React, { useEffect, useState } from 'react';
import { useLoaderData, useSearchParams } from '@remix-run/react';
import { LoaderArgs, json } from '@shopify/remix-oxygen';
import { App } from '../api/type';
import Hero from './_index/Hero';
import ProductCard from 'app/components/ProductCard';
import { Slider } from '~/app/components/ui/slider';
import { Select } from '~/app/components/ui/select';
import Dropdown from '~/app/components/Dropdown';
import FilterIcon from '~/app/components/FilterIcon';
import invariant from 'tiny-invariant';

export type Shop = {
  name: string;
};

// todo add hero image to storefront
// todo design for select options
// todo go to collections page dynamically
// todo bottom drawer
// todo invariant

const dropdowns = [
  {
    placeholder: 'brands',
    param: 'brand',
    options: [
      {
        value: 'brand-1',
        label: 'brand 1',
      },
      {
        value: 'brand-2',
        label: 'brand 2',
      },
    ],
  },
  {
    placeholder: 'flavors',
    param: 'flavor',
    options: [
      {
        value: 'flavor-1',
        label: 'flavor 1',
      },
      {
        value: 'flavor-2',
        label: 'flavor 2',
      },
    ],
  },
  {
    placeholder: 'dietary requirements',
    param: 'dietary',
    options: [
      {
        value: 'dietary-1',
        label: 'dietary 1',
      },
      {
        value: 'dietary-2',
        label: 'dietary 2',
      },
    ],
  },
];

export async function loader({ context, params }: LoaderArgs) {
  const { collectionHandle } = params;

  invariant(collectionHandle, 'Collection handle is required');

  const result = await context.storefront.query(COLLECTIONQUERY, {
    variables: { handle: collectionHandle },
  });
  const collection = result.collection;
  console.log('collection', collection);
  return json({
    collection,
  });
}

function Collection() {
  const data = useLoaderData<typeof loader>();
  console.log('collections', data);

  if (!data.collection) {
    return <div>Loading...</div>;
  }

  const heroProps = {
    type: 'hero_section',
    fields: [],
  };

  return (
    <div>
      {/* <Hero /> */}
      <main className="flex flex-col relative container">
        <div className="filtersContainer  lg:flex py-3 my-9 gap-10 items-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
          {dropdowns.map((dropdown) => (
            <Dropdown
              key={dropdown.param}
              placeholder={dropdown.placeholder}
              param={dropdown.param}
              options={dropdown.options}
            />
          ))}

          <div className="sliderContainer w-1/4 flex flex-col gap-2 justify-center">
            <h4 className="sliderTitle uppercase text-2xl text-bold">Price</h4>
            <Slider className="min-w-[250px]" />
          </div>
        </div>
        <div className="productsGrid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.collection.products.nodes.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div
          className="mobileFilterMenuTrigger h-[38px] w-[38px] bg-main sticky bottom-3 left-5 z-50 flex lg:hidden items-center justify-center rounded-full shadow-md"
          style={{
            backgroundColor: 'rgba(74, 74, 73, 0.60)',
          }}
        >
          <FilterIcon />
        </div>
      </main>

      {/* <Hero />p
      <Collections />
      <ProductList /> */}
    </div>
  );
}

export default Collection;

const COLLECTIONQUERY = `#graphql
query GetCollection($handle: String!) {
  collection(handle: $handle) {
    id
    title
    image {
      url
    }
    description
    products(first: 10) {
      nodes {
        id 
        title
        handle
        images(first: 5) {
          nodes {
            url
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
`;
