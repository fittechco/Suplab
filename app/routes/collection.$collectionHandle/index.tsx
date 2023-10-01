import React, {useEffect, useState} from 'react';
import {useLoaderData} from '@remix-run/react';
import {LoaderArgs, json} from '@shopify/remix-oxygen';
import {App} from '../../api/type';
import Hero from '../_index/Hero';
import ProductCard from 'app/components/ProductCard';

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

  return (
    <div>
      {/* <Hero /> */}
      <main className="flex flex-col px-[2.6vw] py-3 my-9">
        <div className="filtersContainer flex">
          
        </div>
        <div className="productsGrid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
