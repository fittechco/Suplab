import React, {useEffect, useState} from 'react';
import {useLoaderData, useSearchParams} from '@remix-run/react';
import {LoaderArgs, json} from '@shopify/remix-oxygen';
import {App} from '../../api/type';
import Hero from '../_index/Hero';
import ProductCard from 'app/components/ProductCard';
import {Slider} from '~/app/components/ui/slider';
import {Select} from '~/app/components/ui/select';
import Dropdown from '~/app/components/Dropdown';

export type Shop = {
  name: string;
};

export async function loader({context, params}: LoaderArgs) {
  console.log(params);
  const storefront = await context.storefront.query(SHOPQUERY);
  const {metaobject} = storefront;
  return json({
    metaobject,
  });
}

function Collection() {
  const data = useLoaderData<typeof loader>();
  const [shop, setShop] = useState<Shop | null>(null);
  console.log('collections', data);

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      {/* <Hero /> */}
      <main className="flex flex-col px-[2.6vw]">
        <div className="filtersContainer flex py-3 my-9 gap-10 items-center">
          <Dropdown
            placeholder="brands"
            param="brand"
            options={[
              {
                value: 'brand-1',
                label: 'brand 1',
              },
              {
                value: 'brand-2',
                label: 'brand 2',
              },
            ]}
          />
          <Dropdown
            placeholder="flavors"
            param="flavor"
            options={[
              {
                value: 'flavor-1',
                label: 'flavor 1',
              },
              {
                value: 'flavor-2',
                label: 'flavor 2',
              },
            ]}
          />
          <Dropdown
            placeholder="dietary requirements"
            param="dietary"
            options={[
              {
                value: 'dietary-1',
                label: 'dietary 1',
              },
              {
                value: 'dietary-2',
                label: 'dietary 2',
              },
            ]}
          />
          <div className="sliderContainer w-1/4 flex flex-col gap-2 justify-center">
            <h4 className="sliderTitle uppercase text-2xl text-bold">Price</h4>
            <Slider className="" />
          </div>
        </div>
        <div className="productsGrid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>

      {/* <Hero />p
      <Collections />
      <ProductList /> */}
    </div>
  );
}

export default Collection;

const SHOPQUERY = `#graphql
query Metaobjects{
  metaobject(handle: {handle: "homepage", type: "page"}) {
    fields {
      type
      key
      value
      references(first: 20) {
        nodes {
          ... on Metaobject {
            type
            fields {
              key
              value
              type
              references(first: 20) {
                nodes {
                  ... on Metaobject {
                    type
                    fields {
                      key
                      value
                      type
                    }
                  }
                }
              }
              reference {
                ... on MediaImage {
                  image {
                    url
                  }
                }
                ... on Collection {
                  handle
                  title
                  products(first: 20) {
                    nodes {
                      title
                      handle
                      description
                      priceRange{
                        minVariantPrice{
                          amount
                          currencyCode
                        }
                        }
                      images(first: 20) {
                        nodes {
                          url
                        }
                      }
                      featuredImage {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
          __typename
        }
      }
    }
  }
}
`;
