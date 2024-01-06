import { Link } from '@remix-run/react';
import { Colors } from '../ft-lib/shared';
import type {
  ShopLayoutQuery,
  HeaderQuery,
  FooterQuery,
} from 'storefrontapi.generated';
import { Image } from '@shopify/hydrogen';
import FTicons from '../ft-lib/FTicon';
import { useState, useEffect } from 'react';
import LazyImage from '../ft-lib/LazyImage';

type Props = {
  layout: {
    shop: ShopLayoutQuery['shop'];
    header: HeaderQuery;
    footer: FooterQuery;
  };
};

const Footer = (props: Props) => {
  const [openMenu, setOpenMenu] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect the window width and set the isMobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleOpen = (index: number) => {
    setOpenMenu(openMenu === index ? -1 : index);
  };

  if (props.layout == null) {
    return null;
  }

  return (
    <div
      style={{
        backgroundColor: Colors.offWhite,
        width: '100%',
      }}
      className="footer h-fit max-md:p-5 md:h-72"
    >
      <div className="container h-full w-full flex flex-col md:flex-row gap-14 md:gap-20 mt-7 md:items-start items-center text-ellipsis tracking-wider justify-between">
        <div className="shop-name flex flex-col md:items-start items-center gap-3">
          <Link
            to={'/'}
            style={{
              color: Colors.secondary,
              fontWeight: 700,
            }}
            className="header__logo mr-auto flex items-center p-3"
          >
            {props.layout.shop?.brand?.logo?.image != null && (
              <LazyImage
                src={props.layout.shop.brand?.logo.image.url}
                className="w-28 md:w-36"
                width={96}
                height={128}
                alt="Suplab Supplements Store"
              />
            )}
          </Link>
          <div className="shop-name__text flex gap-2 ml-2">
            <Link to={`https://www.instagram.com/suplab_nutrition`} target='_blank'>
              <FTicons
                fill={Colors.secondary}
                style={{
                  stroke: Colors.secondary,
                  width: 32,
                  height: 32,
                }}
                icon="instagram"
              />
            </Link>
            <Link to={`https://www.tiktok.com/@suplabnutrition`} target='_blank'>
              <FTicons
                fill="none"
                style={{
                  stroke: Colors.secondary,
                  width: 32,
                  height: 32,
                }}
                icon="tiktok"
              />
            </Link>
          </div>
        </div>
        {isMobile ? (
          <div className="menus-Container w-full mb-4">
            {props.layout.footer.menu?.items.map((menu, index) => {
              return (
                <div key={menu.title} className="menu flex flex-col gap-2">
                  <div
                    onClick={() => toggleOpen(index)}
                    className="title font-bold flex justify-between w-full">
                    <p className="uppercase">{menu.title}</p>
                    <button
                      onClick={() => toggleOpen(index)}
                      className="open-menu-button"
                    >
                      <FTicons
                        icon={openMenu === index ? 'minus' : 'plus'}
                        style={{
                          width: '24px',
                          height: '24px',
                        }}
                        fill={Colors.secondary}
                      />
                    </button>
                  </div>
                  {openMenu === index && (
                    <div className="flex flex-col gap-2">
                      {menu.items.map((item, itemIndex) => {
                        const itemRoute = new URL(item.url || '').pathname;
                        return (
                          <Link className='links' key={itemRoute + itemIndex} to={itemRoute}>
                            <p>{item.title}</p>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                  <div className="footerDivider" />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="menus-Container flex gap-6">
            {props.layout.footer.menu?.items.map((menu, index) => {
              return (
                <div key={menu.title} className="menu flex flex-col gap-2">
                  <div className="title font-bold">{menu.title}</div>
                  <div className="links flex flex-col gap-2">
                    {menu.items.map((item, index) => {
                      const itemRoute = new URL(item.url || '').pathname;
                      return (
                        <Link key={itemRoute + index} to={itemRoute}>
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="text-center pb-10">
        <p
          style={{
            color: Colors.secondaryDark,
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            marginBottom: '8px',
          }}
        >
          © {new Date().getFullYear()} | Suplab Supplements Store Lebanon | All Rights Reserved
        </p>
        <Link
          to={"https://almoe.co/"}
          target="_blank"
          style={{
            color: Colors.secondaryDark,
            fontFamily: 'Roboto Condensed',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 'normal',
            letterSpacing: '0.32px',
            textTransform: 'uppercase',
          }}
        >
          Developed By Almoe
        </Link>
      </div>
    </div>
  );
};

export default Footer;
