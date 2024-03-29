// import Link from '../../components/Link';
import {Link} from '@remix-run/react';
import type {App} from 'app/api/type';
import FTicons from 'app/ft-lib/FTicon';
import {Colors} from 'app/ft-lib/shared';
import {useEffect, useRef, useState} from 'react';
import {HeaderQuery} from 'storefrontapi.generated';
import {RemixLink} from '~/app/components/RemixLink';

type MobileNavItemProps = {
  menu: App.Shopify.Item;
  style?: React.CSSProperties;
  setIsOpen: (isOpen: boolean) => void;
};

export default function MobileNavItem(props: MobileNavItemProps) {
  const [isShowingSub, setIsShowingSub] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [navItemHeight, setNavItemHeight] = useState(0);
  const itemHeight = 41.6;
  const hasSubItems = props.menu.items != null && props.menu.items?.length > 0;
  const itemColor = isShowingSub ? Colors.offBlack : Colors.secondary;
  const handleItemClick = () => {
    if (hasSubItems === true) {
      setIsShowingSub(!isShowingSub);
    }
  };
  const navItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const navItem = navItemRef.current;
    if (navItem == null) return;

    const observer = new MutationObserver((mutation) => {
      mutation.forEach((item) => {
        //   for every mutation we check if the mutation is a childList mutation
        // then with the nodes length we calculate the height of the menu and set it to the state
        if (item.type !== 'childList') {
          return;
        }

        if (item.addedNodes.length === 0) {
          // check the target is navItem if its not we decrease the height of the menu by the height of the navItem
          if (item.target !== navItem) {
            const navItemHeight = item.removedNodes.length * itemHeight;
            return setNavItemHeight((prev) => prev - navItemHeight);
          }
          return setNavItemHeight(0);
        }
        const navItemHeight = item.addedNodes.length * itemHeight;
        setNavItemHeight((prev) => prev + navItemHeight);
      });
    });

    observer.observe(navItem, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setAnimate(true);
  }, []);

  if (props.menu == null) {
    // todo: add a skeleton loader
    return <div>Loading...</div>;
  }

  const url = new URL(props.menu.url || '').pathname;
  // console.log(url, 'from mobile nav item');

  return (
    <div
      style={{
        textDecoration: 'none',
        color: Colors.text,
        width: '100%',
        height: 'auto',
        borderBottom: `1.6px solid ${itemColor}`,
        ...props.style,
      }}
      className={`navMenu font-mainFont mobile-nav-item ${
        animate === true ? 'show-mobile-nav-item' : 'hide-mobile-nav-item'
      } `}
    >
      <div
        onClick={handleItemClick}
        className="flex justify-between items-center py-2"
      >
        {hasSubItems === true || props.menu.url == null ? (
          <div
            style={{
              textDecoration: 'none',
              color: itemColor,
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
            }}
            className="navMenu__title text-base  ft-text-main"
          >
            {props.menu.title}
          </div>
        ) : (
          <Link
            // routeLoader
            onClick={() => props.setIsOpen(false)}
            style={{
              textDecoration: 'none',
              color: itemColor,
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
            }}
            className="navMenu__title text-base  ft-text-main w-full"
            // todo - create a Link component that handles this
            to={url}
          >
            {props.menu.title}
          </Link>
        )}
        {hasSubItems === true && (
          <FTicons
            style={{
              transform: isShowingSub ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
              transformOrigin: 'center center',
              width: '1.1rem',
              height: '1.1rem',
              opacity: isShowingSub ? 1 : 0.8,
            }}
            className="navMenu__icon"
            fill={Colors.secondary}
            icon="chev-down"
          />
        )}
      </div>
      {hasSubItems === true && (
        <div
          ref={navItemRef}
          style={{
            textDecoration: 'none',
            color: Colors.text,
            width: '100%',
            transition: 'all 0.3s ease',
            opacity: isShowingSub === true ? 1 : 0,
            height: navItemHeight,
            overflow: 'hidden',
          }}
          className={`navMenu__items  pl-4  `}
        >
          {isShowingSub &&
            props.menu.items?.map((item, index) => (
              <MobileNavItem
                style={{
                  borderTop: `1.6px solid ${itemColor}`,
                  transition: `all 0.4s ease ${index * 0.1}s`,
                  borderBottom: 'none',
                }}
                setIsOpen={props.setIsOpen}
                key={item.title}
                menu={item}
              />
            ))}
        </div>
      )}
    </div>
  );
}
