import {Link} from '@remix-run/react';
import {Colors} from '../ft-lib/shared';
import type {
  ShopLayoutQuery,
  HeaderQuery,
  FooterQuery,
} from 'storefrontapi.generated';
import {Image} from '@shopify/hydrogen';
import FTicons from '../ft-lib/FTicon';
import {useState, useEffect} from 'react';

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
              <Image
                data={props.layout.shop.brand?.logo!.image}
                className="w-28 md:w-36"
                sizes="150px"
              />
            )}
          </Link>
          <div className="shop-name__text flex gap-2 ml-2">
            <FTicons
              fill={Colors.secondary}
              style={{
                stroke: Colors.secondary,
                width: 32,
                height: 32,
              }}
              name="instagram"
            />
            <FTicons
              fill="none"
              style={{
                stroke: Colors.secondary,
                width: 32,
                height: 32,
              }}
              name="tiktok"
            />
          </div>
        </div>
        {isMobile ? (
          <div className="menus-Container w-full mb-4">
            {props.layout.footer.menu?.items.map((menu, index) => {
              return (
                <div key={menu.title} className="menu flex flex-col gap-2">
                  <div className="title font-bold flex justify-between w-full">
                    <p className="uppercase">{menu.title}</p>
                    <button
                      onClick={() => toggleOpen(index)}
                      className="open-menu-button"
                    >
                      <FTicons
                        name={openMenu === index ? 'minus' : 'plus'}
                        style={{
                          width: '24px',
                          height: '24px',
                        }}
                        fill={Colors.secondary}
                      />
                    </button>
                  </div>
                  {openMenu === index && (
                    <div className="links flex flex-col gap-2">
                      {menu.items.map((item, itemIndex) => {
                        const itemRoute = new URL(item.url || '').pathname;
                        return (
                          <Link key={itemRoute + itemIndex} to={itemRoute}>
                            {item.title}
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
          © 2023 | Suplab | All Rights Reserved
        </p>
        <p
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
          Developed By FitTech
        </p>
      </div>
    </div>
  );
};

export default Footer;
