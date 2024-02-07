import {Script, Seo, ShopifySalesChannel, useNonce} from '@shopify/hydrogen';
import {
  defer,
  type SerializeFrom,
  type LinksFunction,
  type LoaderFunctionArgs,
  redirect,
  redirectDocument,
} from '@shopify/remix-oxygen';
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
  useNavigate,
} from '@remix-run/react';
import type {
  CustomerAccessToken,
  LanguageCode,
} from '@shopify/hydrogen/storefront-api-types';
import appStyles from './styles/app.css';
import tailwindCss from './styles/tailwind.css';
import Layout from './layout/Layout';
import type {App} from './api/type';
import {create} from 'zustand';
import {QueryClient, QueryClientProvider} from 'react-query';
import {useEffect, useState} from 'react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import {CartProvider} from './components/CartProvider';
import CartDrawer from './components/CartDrawer';
import RoutesLoader from './components/RoutesLoader';
import CTAButton from './components/CTAButton';
import {seoPayload} from './ft-lib/seo.server';
import {UseAnalytics} from './ft-lib/hooks/useAnalytics';
import {type HydrogenSession} from './lib/session.server';
import * as gtag from '~/app/ft-lib/google-utils';
import Hotjar from '@hotjar/browser';
import {ExternalScripts} from './ft-lib/ExternalScripts';
import {LanguageSelectorPopup} from './layout/LanguageSelectorPopup';
import {getCookie, getCookieFromHeader} from './ft-lib/cookie-utils';
import {DEFAULT_LOCALE, getLocaleFromRequest} from './ft-lib/utils';
import {countries} from './ft-lib/data/countries';

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
const siteId = 3733122;
const hotjarVersion = 6;
export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: tailwindCss},
    {rel: 'stylesheet', href: appStyles},
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
};

export const useRootLoaderData = () => {
  const [root] = useMatches();
  return root?.data as SerializeFrom<typeof loader>;
};

export async function loader({context, request}: LoaderFunctionArgs) {
  const {storefront, session} = context;
  const customerAccessToken = await session.get('customerAccessToken');
  const publicStoreDomain = context.env.PUBLIC_STORE_DOMAIN;
  const locale = storefront.i18n;
  const cookie = request.headers.get('cookie');

  // validate the customer access token is valid
  const {isLoggedIn, headers} = await validateCustomerAccessToken(
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
  });

  return defer(
    {
      shop: layout,
      seo,
      footer: await footerPromise,
      header: await headerPromise,
      gaTrackingId: context.env.GA_TRACKING_ID,
      selectedLocale: storefront.i18n,
      // selectedLocale: getLocaleFromRequest(request),
      analytics: {
        shopId: layout.shop.id,
        shopifySalesChannel: ShopifySalesChannel.hydrogen,
      },
      isLoggedIn,
      publicStoreDomain,
      locale,
    },
    {headers},
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
  locale: null as any,
}));

export const queryClient = new QueryClient();

export default function App() {
  const nonce = useNonce();
  const navigation = useNavigation();
  const data = useLoaderData<typeof loader>();
  const gTrackId = 'G-BXXRW595RC';
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  UseAnalytics(true);

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
      if (navigation.location.search != '') {
        return;
      }
      UseShopStore.setState({routesLoader: true});
    } else {
      UseShopStore.setState({routesLoader: false});
    }
  }, [navigation]);

  useEffect(() => {
    const savedLanguage = getCookie('preferredLanguage');
    if (savedLanguage == null) {
      setTimeout(() => {
        setShowLanguageSelector(true);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    gtag.pageview(location.pathname, gTrackId);
  }, []);
  const locale = data.selectedLocale ?? DEFAULT_LOCALE;

  const isArabic = locale.language.toLowerCase() === 'ar' ? true : false;

  return (
    <html lang={locale.language} dir={`${isArabic ? 'rtl' : 'ltr'}`}>
      {/* <html lang={locale.language}> */}
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Seo />
        <Meta />
        <Links />
        {process.env.NODE_ENV == 'development' ? null : (
          <>
            <Script
              nonce={nonce}
              dangerouslySetInnerHTML={{
                __html: `
                (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:3733122,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                `,
              }}
            />
            <script id="g-tag-manajer" nonce={nonce} />
          </>
        )}
      </head>

      <QueryClientProvider client={queryClient}>
        <body>
          {process.env.NODE_ENV == 'development' ? null : (
            <>
              <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${gTrackId}`}
              />
              <Script
                nonce={nonce}
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-BXXRW595RC');
                `,
                }}
              />
            </>
          )}
          <CartProvider>
            <Layout
              layout={{
                shop: data.shop.shop,
                header: data.header,
                footer: data.footer,
              }}
              // key={`${locale.language}-${locale.country}`}
            >
              <Outlet />
              {showLanguageSelector && (
                <LanguageSelectorPopup
                  setshowLanguageSelectorShow={setShowLanguageSelector}
                />
              )}
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

  // the return type from the loader and its being wrapped in Awaited in order to remove the promise type
  // const data = root.data as Awaited<ReturnType<typeof loader>>['data'];

  return (
    <html lang="EN">
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
          <div className="flex flex-col justify-center items-center h-full w-full">
            <h1 className="ft-text-main">{`${errorStatus} ${
              errorStatus === 404 ? 'Page not found' : errorMessage
            }`}</h1>

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
    return {isLoggedIn, headers};
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

  return {isLoggedIn, headers};
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
 query Header (
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
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
