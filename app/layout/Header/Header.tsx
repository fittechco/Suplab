import { Image } from '@shopify/hydrogen';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { App } from '../../api/type';
import { createPortal } from 'react-dom';
import MobileNav from '../MobileNav';
import SubMenuPopup from './SubMenuPopup';
import FTicons from 'app/ft-lib/FTicon';
import { Colors } from 'app/ft-lib/shared';
import type { loader as offersLoader } from '~/app/routes/offers';
import type {
  FooterQuery,
  HeaderQuery,
  ShopLayoutQuery,
} from 'storefrontapi.generated';
import Search from 'app/components/Search';
import { UseShopStore } from '~/app/root';
import { useCart } from '~/app/components/CartProvider';
import { Link, useFetcher } from '@remix-run/react';
import LazyImage from '~/app/ft-lib/LazyImage';
import resizeImage from '~/app/ft-lib/resizeImages';
import type { loader as collectionLoader } from '~/app/routes/collections.$collectionHandle';

const GetBestSellers = () => {
  const fetcher = useFetcher<typeof collectionLoader>();
  useEffect(() => {
    if (fetcher.state === 'idle' && !fetcher.data) {
      fetcher.load("/collections/best-sellers")
    }
  }, [fetcher]);
  return fetcher.data
}

type Props = {
  layout: {
    shop: ShopLayoutQuery['shop'];
    header: HeaderQuery;
    footer: FooterQuery;
  };
};

function Header(props: Props) {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [isTop, setIsTop] = useState(true);
  const [subItems, setSubItems] = useState<App.Shopify.Item[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const cart = useCart();
  const fetcher = useFetcher<typeof offersLoader>();
  const bestSellersCollection = GetBestSellers()

  useEffect(() => {
    if (fetcher.state === 'idle' && !fetcher.data) {
      fetcher.load("/offers")
    }
  }, [fetcher])

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
    if (headerRef.current != null) {
      headerRef.current.style.height = headerRef.current?.scrollHeight + 'px';
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowSub(false);
    if (headerRef.current != null) {
      if (headerRef.current != null) {
        headerRef.current.style.height = '80px';
      }
      headerRef.current.ontransitionend = () => {
        if (showSub === false) {
          setSubItems([]);
        }
      };
    }
  }, [showSub]);

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
      className="header-container transition-all ease-in-out duration-300 md:container mx-auto"
    >
      <div
        ref={headerRef}
        style={{
          borderRadius: '0px 0px 12px 12px',
          transition: 'all 0.3s ease',
          height: 80,
          overflow: 'hidden',
        }}
        className="header-wrapper white-background-blur "
      >
        <div
          style={{
            height: 80,
          }}
          className=" flex items-center max-md:justify-between  py-2 px-5 sm:px-6"
        >
          <Link
            to={'/'}
            style={{
              color: Colors.secondary,
              fontWeight: 700,
            }}
            className="header__logo mr-auto flex items-center"
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
          <div className="navmenusContainer flex   items-center justify-center  max-lg:hidden h-full">
            {props.layout.header.menu?.items.map((item) => {
              // todo: fix this
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
                  )
                  }

                </div>
              );
            })}
          </div>
          <div className="icons flex gap-3 items-center justify-end ml-auto">
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
                  UseShopStore.setState({ showCart: true });
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
        <div
          onMouseEnter={() => {
            if (headerRef.current != null) {
              handleMouseEnter();
            }
          }}
          onMouseLeave={() => {
            if (headerRef.current != null) {
              handleMouseLeave();
            }
          }}
        >
          <SubMenuPopup bestSellers={bestSellersCollection || null} offers={fetcher.data || null} showSub={showSub} isTop={isTop} items={subItems} />
        </div>
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
