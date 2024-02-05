import {
  type ActionFunctionArgs,
  json,
  redirect,
  type LoaderFunctionArgs,
} from '@shopify/remix-oxygen';
import {Link, useLoaderData} from '@remix-run/react';
import {AnalyticsPageType, flattenConnection, Image} from '@shopify/hydrogen';
import {getImageLoadingPriority, PAGINATION_SIZE} from '../ft-lib/const';
import {seoPayload} from '../ft-lib/seo.server';
import {CACHE_SHORT, routeHeaders} from '../ft-lib/cache';
import {PageHeader, Section} from '../components/Text';
import {Grid} from '../components/Grid';
import {RemixLink} from '../components/RemixLink';
import type {Article, Blog} from '@shopify/hydrogen/storefront-api-types';
import {Colors} from '../ft-lib/shared';
import {Text} from '../ft-lib/Text';
import ArticleCard from '../components/ArticleCard';
import {useRootLoaderData} from '../root';

export const headers = routeHeaders;

export async function action({request, params}: ActionFunctionArgs) {
  // Read form data
  const formData = await request.formData();
  const language = formData.get('language');
  const blogsHandle = params.blogsHandle;

  // Redirect to the appropriate locale path with preserved path (note we are in the about route)
  if (language === 'EN') {
    return redirect(`/blogs/${blogsHandle}`, 302);
  } else if (language === 'AR') {
    return redirect(`/ar/blogs/${blogsHandle}`, 302);
  }
}

export const loader = async ({
  request,
  context: {storefront},
  params,
}: LoaderFunctionArgs) => {
  const {language, country} = storefront.i18n;
  const BLOG_HANDLE = params.blogsHandle;
  const {blog} = await storefront.query<{
    blog: Blog;
  }>(BLOGS_QUERY_BY_TYPE, {
    variables: {
      blogHandle: BLOG_HANDLE,
      pageBy: PAGINATION_SIZE,
      language,
    },
  });

  if (blog?.articles == null) {
    throw new Response('Not found', {status: 404});
  }

  const articles = flattenConnection(blog.articles).map((article: Article) => {
    const {publishedAt} = article;
    return {
      ...article,
      publishedAt: new Intl.DateTimeFormat(`${language}`, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(publishedAt)),
    };
  });

  const seo = seoPayload.blog({
    blog,
    url: request.url,
  });

  return json(
    {
      articles,
      seo,
      analytics: {
        pageType: AnalyticsPageType.blog,
      },
    },
    {
      headers: {
        'Cache-Control': CACHE_SHORT,
      },
    },
  );
};

export default function Blog() {
  const {articles} = useLoaderData<typeof loader>();
  console.log(articles);
  const BLOG_HANDLE = articles[0].blog.handle;

  const rootData = useRootLoaderData();
  const {locale} = rootData;
  const isArabic = locale.language.toLowerCase() === 'ar' ? true : false;

  return (
    <div
      className={`!container mb-4 flex flex-col ${
        isArabic ? 'arAlignItems' : 'enAlignItems'
      }`}
    >
      <Text
        type="h2"
        style={{
          color: Colors.secondary,
        }}
        className="w-fit max-md:!text-3xl uppercase mb-6"
      >
        {BLOG_HANDLE}
      </Text>
      {articles.length === 0 && (
        <div className="w-full h-[80vh] flex items-center justify-center">
          <Text type="h1" style={{color: Colors.secondary}}>
            {isArabic ? 'المقالات قريبا!' : 'Articles Coming Soon!'}
          </Text>
        </div>
      )}
      <Grid as="ol" layout="blog">
        {articles.map((article, i) => (
          <ArticleCard
            blogHandle={BLOG_HANDLE.toLowerCase()}
            article={article as Article}
            key={article.id}
            loading={getImageLoadingPriority(i, 2)}
          />
        ))}
      </Grid>
    </div>
  );
}

const BLOGS_QUERY_BY_TYPE = `#graphql
query Blog(
  $language: LanguageCode
  $blogHandle: String!
  $pageBy: Int!
  $cursor: String
) @inContext(language: $language) {
  blog(handle: $blogHandle) {
    title
    seo {
      title
      description
    }
    articles(first: $pageBy, after: $cursor) {
      edges {
        node {
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
          blog {
            handle
          }
        }
      }
    }
  }
}
`;
