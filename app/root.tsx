import { Script, useNonce } from '@shopify/hydrogen';
import { defer, LinksFunction, type LoaderArgs } from '@shopify/remix-oxygen';
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
} from '@remix-run/react';
import type { CustomerAccessToken } from '@shopify/hydrogen/storefront-api-types';
import type { HydrogenSession } from '../server';
import resetStyles from './styles/reset.css';
import appStyles from './styles/app.css';
import tailwindCss from './styles/tailwind.css';
import Layout from './layout/Layout';
import type { App } from './api/type';
import { create } from 'zustand';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';


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

export function links() {
  return [
    { rel: 'stylesheet', href: tailwindCss },
    { rel: 'stylesheet', href: resetStyles },
    { rel: 'stylesheet', href: appStyles },
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    // getting font from google fonts
    {
      rel: 'preconnect',
      href: '"https://fonts.googleapis.com',
    },
    // {
    //   rel: 'stylesheet',
    //   type: 'text/css',
    //   href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap',
    // },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
  ]
}
export async function loader({ context }: LoaderArgs) {
  const { storefront, session, cart } = context;
  const customerAccessToken = await session.get('customerAccessToken');
  const publicStoreDomain = context.env.PUBLIC_STORE_DOMAIN;

  // validate the customer access token is valid
  const { isLoggedIn, headers } = await validateCustomerAccessToken(
    customerAccessToken,
    session,
  );

  // defer the cart query by not awaiting it
  const cartPromise = cart.get();


  // defer the footer query (below the fold)
  const footerPromise = storefront.query(FOOTER_QUERY, {
    cache: storefront.CacheLong(),
    variables: {
      footerMenuHandle: 'footer', // Adjust to your footer menu handle
    },
  });


  const layout = storefront.query(LAYOUT_QUERY, {
    cache: storefront.CacheLong(),
  });

  // await the header query (above the fold)
  const headerPromise = storefront.query(HEADER_QUERY, {
    cache: storefront.CacheLong(),
  });

  return defer(
    {
      cart: cartPromise,
      shop: await layout,
      footer: await footerPromise,
      header: await headerPromise,
      isLoggedIn,
      publicStoreDomain,
    },
    { headers },
  );
}

export const UseShopStore = create<App.Shopify.Layout>((set: any) => ({
  shop: null as any,
  footer: null as any,
  header: null as any,
}
))

const queryClient = new QueryClient()

export default function App() {
  const nonce = useNonce();
  const data = useLoaderData<typeof loader>();

  useEffect(() => {
    UseShopStore.setState({
      shop: data.shop.shop,
      footer: data.footer,
      header: data.header,
    })
  }, [data])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <QueryClientProvider client={queryClient}>
        <body>
          <Layout
            layout={{
              shop: data.shop.shop,
              header: data.header,
              footer: data.footer,
            }}
          >
            <Outlet />
          </Layout>
          <ScrollRestoration nonce={nonce} />
          <Scripts nonce={nonce} />
          <LiveReload nonce={nonce} />
        </body>
      </QueryClientProvider>
    </html >
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

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout {...root.data}>
          <div className="route-error">
            <h1>Oops</h1>
            <h2>{errorStatus}</h2>
            {errorMessage && (
              <fieldset>
                <pre>{errorMessage}</pre>
              </fieldset>
            )}
          </div>
        </Layout>
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
    handle
    items{
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
` as const

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
  }
` as const