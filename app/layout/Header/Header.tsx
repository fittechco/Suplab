import {AnalyticsPageType, Image} from '@shopify/hydrogen';
import {useCallback, useEffect, useRef, useState} from 'react';
import type {App} from '../../api/type';
import {createPortal} from 'react-dom';
import MobileNav from '../MobileNav';
import SubMenuPopup from './SubMenuPopup';
import FTicons from 'app/ft-lib/FTicon';
import {Colors} from 'app/ft-lib/shared';
import type {loader as offersLoader} from '~/app/routes/($locale).offers';
import type {
  FooterQuery,
  HeaderQuery,
  ShopLayoutQuery,
} from 'storefrontapi.generated';
import Search from 'app/components/Search';
import {UseShopStore, useRootLoaderData} from '~/app/root';
import {useCart} from '~/app/components/CartProvider';
import {Link, useFetcher, useLoaderData, useParams} from '@remix-run/react';
import LazyImage from '~/app/ft-lib/LazyImage';
import resizeImage from '~/app/ft-lib/resizeImages';
import type {loader as collectionLoader} from '~/app/routes/($locale).collections.$collectionHandle';
import {CountrySelector} from '~/app/components/CountrySelector';
import {RemixLink} from '~/app/components/RemixLink';
import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {json} from '@shopify/remix-oxygen';
import {handleRouteLocalization} from '~/app/ft-lib/handleLocalization';

const GetBestSellers = () => {
  const fetcher = useFetcher<typeof collectionLoader>();
  useEffect(() => {
    if (fetcher.state === 'idle' && !fetcher.data) {
      fetcher.load('/collections/best-sellers?localize=false');
    }
  }, [fetcher]);
  return fetcher.data;
};

type Props = {
  layout: {
    shop: ShopLayoutQuery['shop'];
    header: HeaderQuery;
    footer: FooterQuery;
  };
};

export async function loader({context, params, request}: LoaderFunctionArgs) {
  const {language} = context.storefront.i18n;

  if (
    params.locale &&
    params.locale.toLowerCase() !== `${language}`.toLowerCase()
  ) {
    // If the locale URL param is defined, yet we still are on `EN`
    // the the locale param must be invalid, send to the 404 page
    throw new Response(null, {status: 404});
  }

  handleRouteLocalization({
    request,
    locale: context.storefront.i18n,
  });
  const storefront = await context.storefront.query(AnnouncementBarQuery, {
    cache: {
      maxAge: 60 * 60 * 24,
      staleWhileRevalidate: 60 * 60,
      // 60 * 60 * 24 is 24 hours in seconds
      // one hour is 60 * 60
    },
  });

  const {metaobject} = storefront;
  return metaobject;
}

function Header(props: Props) {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [isTop, setIsTop] = useState(true);
  const [subItems, setSubItems] = useState<App.Shopify.Item[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const announcementRef = useRef<HTMLDivElement>(null);
  const [showSearch, setShowSearch] = useState(false);
  const cart = useCart();
  const fetcher = useFetcher<typeof offersLoader>();
  const bestSellersCollection = GetBestSellers();

  const rootData = useRootLoaderData();
  const {locale} = rootData;
  const isArabic = locale.language.toLowerCase() === 'ar' ? true : false;

  const ar = isArabic ? 'ar' : '';

  useEffect(() => {
    if (fetcher.state === 'idle' && !fetcher.data) {
      fetcher.load('/offers');
    }
  }, [fetcher]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDirection = () => {
      window.scrollY > 200 ? setIsTop(false) : setIsTop(true);
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
        direction === 'down' && setShowSub(false);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  const handleMouseEnter = useCallback(() => {
    setShowSub(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowSub(false);
  }, []);

  // creating a mutation observer to detect when the sub header is added and change the height of the header based on it

  if (props.layout == null) {
    return null;
  }

  return (
    <header
      style={{
        width: '100%',
        position: 'fixed',
        transform:
          scrollDirection === 'down' ? 'translateY(-100%)' : 'translateY(0%)',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
      className="header-container flex flex-col transition-all ease-in-out duration-300 md:container mx-auto"
    >
      <div
        ref={announcementRef}
        style={{
          background: Colors.primary,
          color: Colors.offWhite,
          marginTop:
            isTop === true
              ? 0
              : `-${announcementRef.current?.scrollHeight || 0}px`,
          transition: 'all 0.3s ease',
        }}
        className="announcement-bar text-sm md:text-sm tracking-[0.02rem] font-bold  uppercase w-full flex items-center justify-center py-1"
      >
        {isArabic
          ? 'توصيل مجاني للطلبات فوق $ ١٠٠'
          : 'Free Delivery on Orders Over $100'}
      </div>
      <div
        ref={headerRef}
        style={{
          borderRadius: '0px 0px 12px 12px',
          transition: 'all 0.3s ease',
        }}
        className="header-wrapper white-background-blur "
      >
        <div
          style={{
            height: 80,
          }}
          className="flex items-center max-md:justify-between max-md:py-2 px-5 sm:px-6"
        >
          <Link
            to={ar}
            style={{
              color: Colors.secondary,
              fontWeight: 700,
            }}
            className={`header__logo flex items-center ${
              isArabic ? 'ml-auto' : 'mr-auto'
            }`}
          >
            {props.layout.shop?.brand?.logo?.image != null && (
              <LazyImage
                alt="Suplab Supplements Store"
                width={96}
                height={128}
                src={resizeImage(props.layout.shop.brand?.logo!.image.url, 300)}
                className="w-24 md:w-32"
              />
            )}
          </Link>
          <div className="navmenusContainer flex items-center justify-center max-lg:hidden h-full">
            {props.layout.header.menu?.items.map((item) => {
              const pathname = new URL(item.url || '').pathname;
              const hasChildren = item.items?.length > 0;
              return (
                <div
                  onMouseEnter={() => {
                    if (item.items?.length > 0) {
                      setSubItems(item.items);
                      handleMouseEnter();
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.items.length > 0 && headerRef.current != null) {
                      handleMouseLeave();
                    }
                  }}
                  key={item.title}
                  className="nav-menu h-full flex items-center justify-center cursor-pointer relative px-4 ft-text-main"
                >
                  {hasChildren === true ? (
                    <div
                      style={{
                        color: Colors.text,
                        fontWeight: '700',
                      }}
                      className="navmenusContainer_item-with-children ft-text-main text-sm lg:text-base uppercase transition-all ease-out duration-300"
                    >
                      {item.title}
                    </div>
                  ) : (
                    <Link
                      style={{
                        color: Colors.text,
                        fontWeight: '700',
                      }}
                      to={pathname}
                      className="navmenusContainer_item ft-text-main text-sm lg:text-base uppercase transition-all ease-out duration-300"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
          <div
            className={`icons flex gap-3 items-center justify-end ${
              isArabic ? 'mr-auto' : 'ml-auto'
            }`}
          >
            <CountrySelector />
            <button
              onClick={() => setShowSearch(true)}
              className="icons_item cursor-pointer"
            >
              <FTicons
                style={{
                  color: 'white',
                  width: '24px',
                  height: '24px',
                }}
                fill={Colors.secondary}
                className="transition-all ease-out duration-300"
                icon="search"
              />
            </button>
            <div className="icons_item cursor-pointer">
              <button
                onClick={() => {
                  UseShopStore.setState({showCart: true});
                }}
                className="cursor-pointer flex items-center justify-center relative"
              >
                <FTicons
                  fill={Colors.secondary}
                  style={{
                    width: '24px',
                    height: '24px',
                  }}
                  icon="bag"
                />
                <span
                  style={{
                    color: Colors.secondary,
                    fontWeight: 700,
                    fontSize: '10px',
                    position: 'absolute',
                    bottom: '-5px',
                    right: '-5px',
                    background: Colors.primary,
                    borderRadius: '50%',
                    width: '16px',
                    height: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  className="ml-1"
                >
                  {cart?.totalQuantity || 0}
                </span>
              </button>
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="icons_item lg:hidden cursor-pointer"
            >
              <FTicons
                fill={Colors.secondary}
                style={{
                  width: '24px',
                  height: '24px',
                }}
                icon="nav"
              />
            </button>
          </div>
        </div>

        <SubMenuPopup
          setSubItems={setSubItems}
          bestSellers={bestSellersCollection || null}
          offers={fetcher.data || null}
          showSub={showSub}
          isTop={isTop}
          items={subItems}
          setShowSub={setShowSub}
        />
      </div>

      {isOpen &&
        createPortal(
          <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />,
          document.body,
        )}
      {showSearch === true &&
        createPortal(
          <Search showSearch={showSearch} setShowSearch={setShowSearch} />,
          document.body,
        )}
    </header>
  );
}

export default Header;

const ON_ANNOUNCEMENTBAR_METAOBJECT = `#graphql
fragment AnnouncementBarMetaobject on Metaobject {
  type
  handle
  fields {
    key
    value
    type
    references(first: 20) {
      nodes {
        ... on Metaobject {
          id
          type
          handle
          fields {
            key
            value
            type
            reference{
              ... on MediaImage {
                image {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

const AnnouncementBarQuery = `#graphqls
  query AnnouncementBar ($country: CountryCode, $language: LanguageCode) 
    @inContext(country: $country, language: $language){
    metaobject(handle: {handle: "announcement-bar-section", type: "announcement_bar_section"}) {
      fields {
        type
        key
        value
        references(first: 20) {
          nodes {
            ... on Metaobject {
            ...AnnouncementBarMetaobject
            }
            __typename
          }
        }
      }
    }
  }
${ON_ANNOUNCEMENTBAR_METAOBJECT}
`;
