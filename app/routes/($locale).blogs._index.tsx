import {
  type ActionFunctionArgs,
  json,
  redirect,
  type LoaderFunctionArgs,
} from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';
import { AnalyticsPageType, flattenConnection, Image } from '@shopify/hydrogen';
import { getImageLoadingPriority, PAGINATION_SIZE } from '../ft-lib/const';
import { seoPayload } from '../ft-lib/seo.server';
import { routeHeaders } from '../ft-lib/cache';
// import type {ArticleFragment} from 'storefrontapi.generated';
import { PageHeader, Section } from '../components/Text';
import { Grid } from '../components/Grid';
import { RemixLink } from '../components/RemixLink';
import Link from '../components/Link';
import type { Article, Blog } from '@shopify/hydrogen/storefront-api-types';
import type { FTSwiperOptions } from '../ft-lib/Swiper';
import FTSwiper from '../ft-lib/Swiper';
import { Colors } from '../ft-lib/shared';
import { Text } from '../ft-lib/Text';
import ArticleCard from '../components/ArticleCard';
import { useRootLoaderData } from '../root';

const BLOG_HANDLES = [
  'general',
  'supplements',
  'physiotherapy',
  'nutrition',
] as const;

export const headers = routeHeaders;

export async function action({ request }: ActionFunctionArgs) {
  // Read form data
  const formData = await request.formData();
  const language = formData.get('language');
  // const country = formData.get('country');
  // const search = formData.get('search');

  // Redirect to the appropriate locale path with preserved path (note we are in the about route)
  if (language === 'EN') {
    return redirect('/blogs', 302);
  } else if (language === 'AR') {
    return redirect('/ar/blogs', 302);
  }
}

export const loader = async ({
  request,
  context: { storefront },
}: LoaderFunctionArgs) => {
  const { language, country } = storefront.i18n;

  const blogs = await Promise.all(
    BLOG_HANDLES.map((handle) => {
      return storefront.query<{
        blog: Blog;
      }>(BLOGS_QUERY, {
        variables: {
          pageBy: PAGINATION_SIZE,
          language,
          blogHandle: handle,
        },
      });
    }),
  );

  const articlesByType = blogs.map((blogData) => {
    const { blog } = blogData;
    if (blog == null) {
      throw new Response('Not found', { status: 404 });
    }
    const articles = flattenConnection(blog.articles).map(
      (article: Article) => {
        const { publishedAt } = article;
        return {
          ...article,
          publishedAt: new Intl.DateTimeFormat(`${language}`, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(new Date(publishedAt)),
        };
      },
    );

    return {
      type: blog.handle,
      articles,
      seo: seoPayload.blog({ blog, url: request.url }),
      analytics: {
        pageType: AnalyticsPageType.blog,
      },
    };
  });

  return json({ articlesByType });
};

export default function Blogs() {
  const { articlesByType } = useLoaderData<typeof loader>();

  const rootData = useRootLoaderData();
  const { locale } = rootData;
  const isArabic = locale.language.toLowerCase() === 'ar' ? true : false;

  const swiperOptions: FTSwiperOptions = {
    slidesPerView: 1.01,
    spaceBetween: 20,
    navigation: false,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  const blogsWithData = articlesByType.filter(
    (blogData) => blogData.articles.length > 0,
  );

  return (
    <>
      {blogsWithData.map((blogData, i) => (
        <div key={blogData.type} className="w-full px-5 py-4">
          <div
            className={`flex justify-between mb-6 ${isArabic ? 'arFlexDirection' : 'enFlexDirection'
              }`}
          >
            <Text
              type="h2"
              style={{
                color: Colors.secondary,
              }}
              className="w-fit max-md:!text-3xl uppercase"
            >
              {blogData.type}
            </Text>
            <div className="flex items-center justify-center px-[6px] py-[14px] gap-[10px]">
              <Link
                to={`/blogs/${blogData.type.toLowerCase()}`}
                style={{
                  color: Colors.offWhite,
                  backgroundColor: Colors.primary,
                  boxShadow: '0px 4px 7px 0px rgba(0, 0, 0, 0.10)',
                  backdropFilter: 'blur(2.5px)',
                  fontWeight: 700,
                }}
                className="w-fit px-4 py-2 rounded-[26px] gap-[10px] uppercase"
              >
                {isArabic ? 'شاهد المزيد' : 'See More'}
              </Link>
            </div>
          </div>
          <FTSwiper options={swiperOptions}>
            {blogData.articles.map((article, j) => (
              <div key={article.id} className="swiper-slide">
                <ArticleCard
                  blogHandle={blogData.type.toLowerCase()}
                  article={article}
                  loading={getImageLoadingPriority(i * PAGINATION_SIZE + j, 2)}
                />
              </div>
            ))}
          </FTSwiper>
        </div>
      ))}
    </>
  );
}

const BLOGS_QUERY = `#graphql
query BlogIndex(
  $language: LanguageCode
  $blogHandle: String!
  $pageBy: Int!
  $cursor: String
) @inContext(language: $language) {
  blog(handle: $blogHandle) {
    handle
    title
    seo {
      title
      description
    }
    articles(first: $pageBy, after: $cursor) {
      edges {
        node {
          ...Article
        }
      }
    }
  }
}

fragment Article on Article {
  author: authorV2 {
    name
  }
  contentHtml
  handle
  id
  image {
    id
    altText
    url
    width
    height
  }
  publishedAt
  title
}
`;
