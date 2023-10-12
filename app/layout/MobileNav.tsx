import { useEffect, useState } from 'react';
import FTicons from '../ft-lib/FTicon';
import { Colors } from '../ft-lib/shared';
import { UseShopStore } from '../root';
import { ON_METAOBJECT } from 'app/routes/_index';
import MobileNavItem from './Header/MobileNavItem';
import Offer from 'app/components/FtOffers';
import { Link, useNavigation } from '@remix-run/react';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function MobileNav(props: Props) {
  const header = UseShopStore((state) => state.header);
  const [animate, setAnimate] = useState(false);
  const footer = UseShopStore((state) => state.footer);
  const navigation = useNavigation()
  useEffect(() => {
    if (props.isOpen === true) {
      setAnimate(true);
    }
  }, [props.isOpen]);

  useEffect(() => {
    if (navigation.state === "loading") {
      props.setIsOpen(false)
    }
  }, [navigation, props]);

  if (header?.menu?.items == null) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 102,
        backgroundColor: Colors.bg,
        margin: 0,
        transform: animate ? 'translateX(0%)' : 'translateX(-100%)',
      }}
      className="mobileNav transition-all ease-in-out duration-500 md:hidden"
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          overflowY: 'auto',
        }}
        className="mobileNav__container  flex flex-col gap-5  justify-between"
      >
        <div className='flex flex-col gap-5'>
          <div className="navHeader w-full flex justify-end px-5">
            <div
              onClick={() => {
                setAnimate(false);
                setTimeout(() => {
                  props.setIsOpen(false);
                }, 500);
              }}
              style={{}}
              className={`navHeader__close my-2 mobile-nav-item ${animate === true ? 'show-mobile-nav-item' : 'hide-mobile-nav-item'
                }`}
            >
              <FTicons
                fill={'none'}
                style={{
                  stroke: Colors.secondary,
                  width: 16,
                  height: 16,
                }}
                name="close"
              />
            </div>
          </div>
          <div className="navMenus space-y-6 w-full px-5">
            {header.menu?.items?.map((menu, index) => {
              return (
                <MobileNavItem
                  style={{
                    transitionDelay: `${index * 0.2}s`,
                  }}
                  setIsOpen={props.setIsOpen}
                  key={menu.id}
                  menu={menu}
                />
              );
            })}
          </div>

          <div
            style={{}}
            className={`offers-container overflow-hidden flex-shrink-0`}
          >
            <div
              style={{
                transitionDelay: `${header?.menu.items.length * 0.2}s`,
              }}
              className={`offers-wrapper mobile-nav-item ${animate === true ? 'show-mobile-nav-item' : 'hide-mobile-nav-item'
                }`}
            >
              <Offer />
            </div>
          </div>
        </div>
        <div
          style={{}}
          className="footer-menus / flex flex-col gap-3 / px-5 text-base w-full"
        >
          {footer.menu?.items.map((menu, index) => {

            return (
              <Link
                key={menu.id}
                style={{
                  fontWeight: '400',
                  transitionDelay: `${((header.menu?.items.length || 0) + 1) * 0.2 + index * 0.2
                    }s`,
                }}
                className={`font-mainFont mobile-nav-item ${animate === true
                  ? 'show-mobile-nav-item'
                  : 'hide-mobile-nav-item'
                  }`}
                // todo - fix this create a Link component that handles this
                to={menu.url || ''}
              >
                {menu.title}
              </Link>
            );
          })}
          <div className="social-media-container w-full">
            <div
              style={{
                borderTop: `1px solid ${Colors.secondary}`,
                transitionDelay: `${(header.menu.items.length + 1) * 0.2 +
                  (footer.menu?.items.length || 1) * 0.2
                  }`,
                width: '100%',
                paddingBlock: '1rem',
              }}
              className={`social-media-wrapper flex justify-center items-center gap-5 mobile-nav-item
                         ${animate === true
                  ? 'show-mobile-nav-item'
                  : 'hide-mobile-nav-item'
                }`}
            >
              <FTicons
                style={{
                  width: '24px',
                  height: '24px',
                }}
                name="instagram"
              />
              <FTicons
                style={{
                  width: '24px',
                  height: '24px',
                }}
                name="tiktok"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const LAYOUT_QUERY = `#graphql
  query MobileLayout {
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
` as const;
