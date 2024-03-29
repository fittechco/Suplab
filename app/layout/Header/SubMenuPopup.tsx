import {Link} from '@remix-run/react';
import {useCallback, useEffect, useRef} from 'react';
import {Colors} from '../../ft-lib/shared';
import type {App} from '../../api/type';
import LazyImage from '~/app/ft-lib/LazyImage';
import resizeImage from '~/app/ft-lib/resizeImages';
import arrayToObject from '~/app/ft-lib/ArrayToObject';
import type {GetCollectionQuery} from '~/storefrontapi.generated';
import {useRootLoaderData} from '~/app/root';

export default function SubMenuPopup(props: {
  items: App.Shopify.Item[];
  isTop: boolean;
  showSub: boolean;
  offers: App.HomePageTemplate.OffersSection | null;
  bestSellers: GetCollectionQuery | null;
  setSubItems: (items: App.Shopify.Item[]) => void;
  setShowSub: (showSub: boolean) => void;
}) {
  const rootData = useRootLoaderData();
  const {locale} = rootData;
  const {showSub, setShowSub} = props;
  const ar = locale.language.toLowerCase() === 'ar' ? 'ar' : '';
  const {setSubItems} = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const offerFields = arrayToObject({array: props.offers?.fields || []});
  const offersImage = offerFields.offers_collection?.reference.image?.url;
  const firstRender = useRef(true);

  const isArabic = locale.language.toLowerCase() === 'ar' ? true : false;

  const handleMouseEnter = useCallback(() => {
    if (containerRef.current != null) {
      setShowSub(true);
    }
  }, [setShowSub]);

  const handleMouseLeave = useCallback(() => {
    setShowSub(false);
  }, [setShowSub]);

  return (
    <div
      onMouseEnter={() => {
        if (containerRef.current != null) {
          handleMouseEnter();
        }
      }}
      onMouseLeave={() => {
        if (containerRef.current != null) {
          handleMouseLeave();
        }
      }}
    >
      <div
        ref={containerRef}
        style={{
          zIndex: props.showSub ? 100 : -1,
          width: '100%',
          height: showSub ? containerRef.current?.scrollHeight : '0px',
          transition: 'all 0.3s ease-in-out',
        }}
        className="nav-menu__sub flex justify-between overflow-hidden origin-center ease-in-out gap-5 z-10 "
      >
        <div className="m-5 wrapper transition-none relative h-fit flex flex-wrap justify-start items-start rounded-b-3xl gap-5 w-1/2">
          {props.items.map((subItem, index) => {
            // todo - fix this
            const subPathname = new URL(subItem.url || '').pathname;
            return (
              <div
                key={subItem.title}
                className="nav-menu-Item-container space-y-2 flex flex-wrap flex-col justify-start items-start"
              >
                <Link
                  style={{
                    color: Colors.secondary,
                    fontWeight: 600,
                    fontSize: '15px',
                  }}
                  className="nav-menu__sub_item flex ft-text-main"
                  to={`${subPathname}`}
                >
                  {subItem.title}
                </Link>
                <div className="nav-submenus-container flex flex-col space-y-2">
                  {subItem.items?.map((subSubItem) => {
                    // todo - fix this
                    const subSubPathname = new URL(subSubItem.url || '')
                      .pathname;
                    return (
                      <Link
                        key={subSubItem.title}
                        to={subSubPathname}
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                        }}
                        className="nav-menu__sub_item text-base  capitalize"
                      >
                        {subSubItem.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="header-featured-collections m-5 h-fit flex flex-col items-end space-y-4 w-1/2">
          {offersImage != null && (
            <Link
              to={`/collections/product-offers`}
              style={{
                width: 370,
                height: 180,
                borderRadius: 24,
                overflow: 'hidden',
              }}
              className="featured-collectio-1 relative  card-shadow block"
            >
              <LazyImage
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                src={resizeImage(offersImage, 400)}
                alt={
                  offerFields.offers_collection?.reference.title ||
                  'Supplements Offers'
                }
              />
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  padding: '20px',
                  fontSize: '24px',
                  borderRadius: 24,
                  maxWidth: 370,
                  zIndex: 100,
                  color: Colors.textSecondary,
                }}
                className="flex justify-start items-end bg-black/40 ft-text-main"
              >
                {isArabic ? 'عروض' : 'Offers'}
              </div>
            </Link>
          )}

          {props.bestSellers?.collection?.image && (
            <Link
              to={`/collections/${props.bestSellers?.collection?.handle}`}
              className="featured-collectio-1 relative card-shadow block rounded-3xl"
            >
              <LazyImage
                style={{
                  width: 370,
                  height: 180,
                  borderRadius: 24,
                  overflow: 'hidden',
                  objectFit: 'cover',
                }}
                src={resizeImage(
                  props.bestSellers?.collection?.image?.url,
                  400,
                )}
                alt={props.bestSellers?.collection?.title}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  height: '100%',
                  padding: '20px',
                  fontSize: '24px',
                  width: 370,
                  borderRadius: 24,
                  zIndex: 100,
                  color: Colors.textSecondary,
                }}
                className="flex justify-start items-end ft-text-main bg-black/40"
              >
                ${isArabic ? 'الأكثر مبيعا' : 'Best Sellers'}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
