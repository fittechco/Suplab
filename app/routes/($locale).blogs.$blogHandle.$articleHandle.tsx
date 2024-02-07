import {
  type ActionFunctionArgs,
  json,
  redirect,
  type LinksFunction,
  type LoaderFunctionArgs,
} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {Link} from 'react-router-dom';
import {
  AnalyticsPageType,
  getPaginationVariables,
  Image,
} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';
import {PageHeader, Section} from '../components/Text';
import {seoPayload} from '../ft-lib/seo.server';
import {routeHeaders} from '../ft-lib/cache';
import styles from '../styles/custom-font.css';
import type {Blog, Collection} from '@shopify/hydrogen/storefront-api-types';
import {RemixLink} from '../components/RemixLink';
import {Colors} from '../ft-lib/shared';
import {Text} from '../ft-lib/Text';
import FeaturedCollections, {
  type FeaturedCollectionsProps,
} from '../lib/blogs/FeaturedCollections';
import {COLLECTION_QUERY} from './($locale).collections.$collectionHandle';
import ProductController from '../ft-lib/ft-server/controllers/ProductController';
import arrayToObject from '../ft-lib/ArrayToObject';
import type {ProductQuery} from '~/storefrontapi.generated';
import {useRootLoaderData, UseShopStore} from '../root';
import LazyImage from '../ft-lib/LazyImage';
import resizeImage from '../ft-lib/resizeImages';
import {COLLECTION_REF} from './($locale)._index';

type Metafield = {
  referenceCollectionRefs?: {
    nodes: {
      node: Collection; // Assuming a Collection type is defined
    }[];
  };
};

export const headers = routeHeaders;

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}];
};

export async function action({request}: ActionFunctionArgs) {
  // Read form data
  const formData = await request.formData();
  const language = formData.get('language');
  const newUrl = new URL(request.url);

  // Redirect to the appropriate locale path with preserved path (note we are in the about route)
  if (language === 'EN') {
    // check if a prefix exist in the url then remove it
    if (newUrl.pathname.includes('/ar')) {
      newUrl.pathname = newUrl.pathname.replace('/ar', '');
    }
    return redirect(newUrl.toString(), 302);
  } else if (language === 'AR') {
    // check if a prefix exist in the url then remove it
    if (newUrl.pathname.includes('/en')) {
      newUrl.pathname = newUrl.pathname.replace('/en', '');
    }
    newUrl.pathname = `/ar${newUrl.pathname}`;
    return redirect(newUrl.toString(), 302);
  }
}

export async function loader({request, params, context}: LoaderFunctionArgs) {
  const {language, country} = context.storefront.i18n;

  invariant(params.blogHandle, 'Missing Blog handle');
  invariant(params.articleHandle, 'Missing Article handle');

  const BlogHandle = params.blogHandle;
  const ArticleHandle = params.articleHandle;

  const {blog} = await context.storefront.query<{
    blog: Blog;
  }>(ARTICLE_QUERY, {
    variables: {
      blogHandle: BlogHandle,
      articleHandle: ArticleHandle,
      language,
    },
  });

  if (blog?.articleByHandle == null) {
    throw new Response(null, {status: 404});
  }
  const offer = blog.articleByHandle.metafields.find(
    (metafield) => metafield?.key === 'offer',
  );

  const featuredCollectionProducts = blog.articleByHandle.metafields.find(
    (metafield) => metafield?.key === 'featured_collection_products',
  );

  if (blog?.articleByHandle == null) {
    throw new Response(null, {status: 404});
  }

  const article = blog.articleByHandle;
  const blogTitle = blog.title;

  const formattedDate = new Intl.DateTimeFormat(`${language}`, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article?.publishedAt));

  const seo = seoPayload.article({article, url: request.url});

  return json({
    featuredCollectionProducts,
    offer,
    blogTitle,
    article,
    formattedDate,
    seo,
    analytics: {
      pageType: AnalyticsPageType.article,
    },
  });
}

export default function Article() {
  const {blogTitle, article, formattedDate, offer, featuredCollectionProducts} =
    useLoaderData<typeof loader>();

  const articleOffer = offer?.reference;

  const typedArticleOffer = articleOffer as {
    title: string;
    handle: string;
    description: string;
    priceRange: {minVariantPrice: {amount: string; currencyCode: string}};
    images: {nodes: any[]};
  };

  const articleFeaturedCollectionProducts =
    featuredCollectionProducts?.references?.nodes;

  const {title, image, contentHtml, author} = article;

  return (
    <div className="!container">
      {image && (
        <Image
          data={image}
          className="w-full md:h-[78vh] mx-auto mt-1 md:mt-0 rounded-[24px]"
          sizes="50vw"
          loading="eager"
        />
      )}
      <div className="w-full md:flex md:justify-between md:items-start mt-6">
        <div className="md:w-[55%]">
          <Text
            type="h2"
            className="article-title max-w-5xl"
            style={{color: Colors.secondary}}
          >
            {title}
          </Text>

          <div className="flex md:flex-row md:justify-between flex-col mt-4">
            <div className="w-full">
              <Text
                type="p"
                style={{
                  color: Colors.offBlack,
                }}
                className="article mt-10 blog-p-text"
              >
                <span dangerouslySetInnerHTML={{__html: contentHtml}} />
              </Text>
            </div>
          </div>
        </div>
        {typedArticleOffer != null && (
          <div className="offers-section md:w-[40%] mt-[40px]">
            <Link
              to={`/products/${typedArticleOffer.handle}`}
              onClick={() => {
                UseShopStore.setState({});
              }}
            >
              {typedArticleOffer.images != null && (
                <LazyImage
                  alt={typedArticleOffer.title}
                  className="object-fill rounded-3xl w-full"
                  src={typedArticleOffer.images.nodes[0].url}
                />
              )}
            </Link>
          </div>
        )}
      </div>
      {articleFeaturedCollectionProducts && (
        <div className="featured-collections-products">
          <FeaturedCollections
            collectionProducts={
              articleFeaturedCollectionProducts as FeaturedCollectionsProps[]
            }
          />
        </div>
      )}
    </div>
  );
}

const ARTICLE_QUERY = `#graphql
  query ArticleDetails(
    $language: LanguageCode
    $articleHandle: String!
    $blogHandle: String!
  ) @inContext(language: $language) {
    blog(handle: $blogHandle) {
      title
      articleByHandle(handle: $articleHandle) {
        title
        contentHtml
        publishedAt
        author: authorV2 {
          name
        }
        image {
          id
          altText
          url
          width
          height
        }
        seo {
          description
          title
        }
        metafields(
          identifiers: [
            {namespace: "custom", key: "offer"},
            {namespace: "custom", key: "featured_collection_products"}
          ]
        ) {
          id
          key
          value
          references: references(first: 10) {
            nodes {
              ... on Collection {
                ...CollectionRef
                products(first: 10) {
                  nodes {
                    title
                    handle
                    id
                    description
                    priceRange{
                      minVariantPrice{
                        amount
                        currencyCode
                      }
                      }
                        variants(first: 1) {
                          nodes {
                            quantityAvailable
                            id
                            title
                            availableForSale
                            price {
                              currencyCode
                              amount
                            }
                            compareAtPrice {
                              currencyCode
                              amount
                            }
                            selectedOptions {
                              name
                              value
                            }
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
          reference {
              ... on Product {
                title
                handle
                description
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 20) {
                  nodes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
    ${COLLECTION_REF}
  `;
