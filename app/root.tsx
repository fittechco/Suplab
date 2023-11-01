
import { Seo, ShopifySalesChannel, useNonce } from '@shopify/hydrogen';
import { defer, type SerializeFrom, type LinksFunction, type LoaderArgs } from '@shopify/remix-oxygen';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  useMatches,
  useRouteError,
  useLoaderData,
  ScrollRestoration,
  isRouteErrorResponse,
  type ShouldRevalidateFunction,
  useNavigation,
  useLocation,
  useNavigate,
} from '@remix-run/react';
import type { CustomerAccessToken } from '@shopify/hydrogen/storefront-api-types';
import type { HydrogenSession } from '../server';
import appStyles from './styles/app.css';
import tailwindCss from './styles/tailwind.css';
import Layout from './layout/Layout';
import type { App } from './api/type';
import { create } from 'zustand';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { CartProvider } from './components/CartProvider';
import CartDrawer from './components/CartDrawer';
import RoutesLoader from './components/RoutesLoader';
import { usePageAnalytics } from './utils';
import CTAButton from './components/CTAButton';
import { seoPayload } from './ft-lib/seo.server';
import { useAnalytics } from './ft-lib/hooks/useAnalytics';

// This is important to avoid re-fetching root queries on sub-navigations
export const shouldRevalidate: ShouldRevalidateFunction = ({
  formMethod,
  currentUrl,
  nextUrl,
}) => {
  // revalidate when a mutation is performed e.g add to cart, login...
  if (formMethod && formMethod !== 'GET') {
    return true;
  }

  // revalidate when manually revalidating via useRevalidator
  if (currentUrl.toString() === nextUrl.toString()) {
    return true;
  }

  return false;
};

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwindCss },
    { rel: 'stylesheet', href: appStyles },
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    // getting font from google fonts
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
      as: 'font',
      crossOrigin: 'anonymous',
      type: 'font/woff2',
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css',
    },
  ];
}
export const useRootLoaderData = () => {
  const [root] = useMatches();
  return root?.data as SerializeFrom<typeof loader>;
};

export async function loader({ context, request }: LoaderArgs) {
  const { storefront, session } = context;
  const customerAccessToken = await session.get('customerAccessToken');
  const publicStoreDomain = context.env.PUBLIC_STORE_DOMAIN;

  // validate the customer access token is valid
  const { isLoggedIn, headers } = await validateCustomerAccessToken(
    customerAccessToken,
    session,
  );
  // defer the footer query (below the fold)
  const footerPromise = storefront.query(FOOTER_QUERY, {
    cache: storefront.CacheLong(),
    variables: {
      footerMenuHandle: 'footer', // Adjust to your footer menu handle
    },
  });

  const layout = await storefront.query(LAYOUT_QUERY, {
    cache: storefront.CacheLong(),
  });

  // await the header query (above the fold)
  const headerPromise = storefront.query(HEADER_QUERY, {
    cache: storefront.CacheLong(),
  });

  const seo = seoPayload.root({
    shop: layout.shop,
    url: request.url,
  })

  return defer(
    {
      shop: layout,
      seo,
      footer: await footerPromise,
      header: await headerPromise,
      selectedLocale: storefront.i18n,
      analytics: {
        shopId: layout.shop.id,
        shopifySalesChannel: ShopifySalesChannel.hydrogen,
      },
      isLoggedIn,
      publicStoreDomain,
    },
    { headers },
  );
}

export const UseShopStore = create<
  App.Shopify.Layout & {
    showCart: boolean;
    routesLoader: boolean;
  }
>((set: any) => ({
  shop: null as any,
  footer: null as any,
  header: null as any,
  showCart: false,
  routesLoader: true,
}));

export const queryClient = new QueryClient();

export default function App() {
  const nonce = useNonce();
  const navigation = useNavigation();
  const data = useLoaderData<typeof loader>();
  const location = useLocation();
  const lastLocationKey = useRef('');

  useAnalytics(true);

  useEffect(() => {
    UseShopStore.setState({
      shop: data.shop.shop,
      footer: data.footer,
      header: data.header,
    });
  }, [data]);

  // checking if the app navigation is not idle
  useEffect(() => {
    if (navigation.state === 'loading') {
      if (navigation.location.search != "") {
        return
      }
      UseShopStore.setState({ routesLoader: true });
    } else {
      UseShopStore.setState({ routesLoader: false });
    }
  }, [navigation]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Seo />
        <Meta />
        <Links />
      </head>
      <QueryClientProvider client={queryClient}>
        <body>
          <CartProvider>
            <Layout
              layout={{
                shop: data.shop.shop,
                header: data.header,
                footer: data.footer,
              }}
            >
              <Outlet />
            </Layout>
            <CartDrawer />
            <RoutesLoader />
            <ScrollRestoration nonce={nonce} />
            <Scripts nonce={nonce} />
            <LiveReload nonce={nonce} />
          </CartProvider>
        </body>
      </QueryClientProvider>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const [root] = useMatches();
  const nonce = useNonce();
  let errorMessage = 'Unknown error';
  let errorStatus = 500;

  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message ?? error.data;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }
  const navigate = useNavigate();
  console.log(error, "errorMessage");
  // the return type from the loader and its being wrapped in Awaited in order to remove the promise type
  const data = root.data as Awaited<ReturnType<typeof loader>>["data"];

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Seo />
        <Meta />
        <Links />
      </head>
      <body className="container">
        {/* <Layout
          layout={}
        > */}
        <div className="route-error w-full h-screen">
          <div className='flex flex-col justify-center items-center h-full w-full'>
            <h1 className='ft-text-main'>{`${errorStatus} ${errorStatus === 404 ? "Page not found" : errorMessage}`}</h1>

            <CTAButton
              onClick={() => {
                navigate('/collections/all');
              }}
              className="md:text-xl"
            >
              Continue Shopping
            </CTAButton>
          </div>

        </div>
        {/* </Layout> */}
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
        <LiveReload nonce={nonce} />
      </body>
    </html>
  );
}

/**
 * Validates the customer access token and returns a boolean and headers
 * @see https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken
 *
 * @example
 * ```ts
 * //
 * const {isLoggedIn, headers} = await validateCustomerAccessToken(
 *  customerAccessToken,
 *  session,
 *  );
 *  ```
 *  */
async function validateCustomerAccessToken(
  customerAccessToken: CustomerAccessToken,
  session: HydrogenSession,
) {
  let isLoggedIn = false;
  const headers = new Headers();
  if (!customerAccessToken?.accessToken || !customerAccessToken?.expiresAt) {
    return { isLoggedIn, headers };
  }
  const expiresAt = new Date(customerAccessToken.expiresAt);
  const dateNow = new Date();
  const customerAccessTokenExpired = expiresAt < dateNow;
  if (customerAccessTokenExpired) {
    session.unset('customerAccessToken');
    headers.append('Set-Cookie', await session.commit());
  } else {
    isLoggedIn = true;
  }

  return { isLoggedIn, headers };
}

const MENU_FRAGMENT = `#graphql
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url 
  }
  fragment ChildMenuItem on MenuItem {
    ...MenuItem
  }
  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      ...ChildMenuItem
    }
  }
  fragment Menu on Menu {
    id
    items {
      ...ParentMenuItem
    }
  }
  
` as const;

const HEADER_QUERY = `#graphql
 query Header {
  menu(handle: "main-menu") {
    title
    id
    handle
    items{
      id
      title
      url
      items {
        id
        title
        url
        items {
          id
          title
          url
          items {
            id
            title
            url
          }
        }
      }
    }
  }
}
` as const;

const FOOTER_QUERY = `#graphql
  query Footer(
    $country: CountryCode
    $footerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    menu(handle: $footerMenuHandle) {
      ...Menu
    }
  }
  ${MENU_FRAGMENT}
` as const;

const LAYOUT_QUERY = `#graphql
  query ShopLayout {
    shop {
      ...Shop
    }
  }

  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
` as const;
