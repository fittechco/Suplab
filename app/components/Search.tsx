import { Link, useFetcher } from '@remix-run/react';
import SearchController from 'app/ft-lib/ft-server/controllers/SearchController';
import { Colors } from 'app/ft-lib/shared';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { SearchProductsQuery } from 'storefrontapi.generated';
import _ from 'lodash';
import ProductCard from './ProductCard';
import StorefrontApi from '../api/storefront';
import { loader as searchLoader } from '../routes/search';

type Props = {
  setShowSearch: (show: boolean) => void;
  showSearch: boolean;
};

export default function Search(props: Props) {
  const fetcher = useFetcher<typeof searchLoader>();
  const [searchedProducts, setSearchedProducts] = useState<
    SearchProductsQuery['products']['nodes']
  >(fetcher.data?.nodes || []);
  const [animate, setAnimate] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const [isRequesting, setIsRequesting] = useState(false);
  const [isEmpty, setIsEmpty] = useState<boolean>();
  const prevFetcherData = useRef<SearchProductsQuery['products']['nodes']>([]);
  // implementing search with debounce and useMemo in order to avoid unnecessary re-renders and save the reference to the debounced function
  const handleSearchProducts = useMemo(() => {
    return _.debounce((query: string) => {

      fetcher.load(`/search?q=${query}`)
    }, 100, { leading: false, trailing: true });
  }, []);

  useEffect(() => {
    // if the user click outside the search container, close the search
    const closeOnAnimationEnd = () => {
      if (searchContainerRef.current != null) {
        searchContainerRef.current.ontransitionend = () => {
          props.setShowSearch(false);
        };
      }
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        closeOnAnimationEnd();
        setAnimate(false);
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (props.showSearch === true) {
      setAnimate(true);
    }
    return () => {
      setAnimate(false);
    };
  }, [props.showSearch]);

  useEffect(() => {
    if (fetcher.state != "idle") {
      setIsRequesting(true);
    } else {
      setIsRequesting(false);
    }
    // if fetcher data value doesnt change, we return
    if (fetcher.data == null || _.isEqual(fetcher.data.nodes, prevFetcherData.current)) {
      return
    }
    // updating the previous fetcher data value
    prevFetcherData.current = fetcher.data?.nodes || [];
    if (fetcher.data.nodes.length === 0) {
      setIsEmpty(true);
      setSearchedProducts(fetcher.data.nodes);
    } else {
      setIsEmpty(false);
      setSearchedProducts(fetcher.data.nodes);
    }
  }, [fetcher]);

  console.log(fetcher.data, 'fetcher data');
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        width: '100%',
        height: '100%',
        zIndex: 100,
        background: 'rgba(250, 249, 246, 0.10)',
        paddingTop: 90,
        opacity: animate ? 1 : 0,
        transition: 'all 0.3s ease-in-out',
      }}
      className="search-container backdrop-blur-sm md:px-5 md:container"
    >
      <div
        ref={searchContainerRef}
        style={{
          height: '100%',
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 100,
          borderRadius: '24px 24px 0px 0px',
          border: '0.5px solid #93C147',
          background: 'rgba(250, 249, 246, 0.90)',
          transition: 'all 0.2s ease-in-out',
          transform: animate ? 'translateY(0%)' : 'translateY(100%)',
        }}
        className="search-wrapper flex flex-col gap-4 items-start pt-5 backdrop-blur "
      >
        <div className="searchBar w-full px-5 relative">
          <input
            ref={(ref) => {
              if (ref != null) {
                ref.focus();
              }
            }}
            style={{
              color: Colors.secondary,
              fontWeight: 500,
              fontSize: 16,
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid',
              borderColor: Colors.secondaryLight,
            }}
            onChange={async (e) => {
              if (e.target.value.length === 0) {
                setIsEmpty(false);
                setSearchedProducts([]);
                return;
              }
              fetcher.load(`/search?q=${e.target.value}`)
            }}
            className="font-mainFont w-full placeholder:text-[#696968] h-12 focus:outline-none px-0 py-2 "
            type="text"
            placeholder="Search products..."
          />
          {isRequesting && (
            <div
              style={{
                color: Colors.secondary,
                position: 'absolute',
              }}
              className="spinner right-6 bottom-4"
            >
              <div className="lds-dual-ring "></div>
            </div>
          )}
        </div>
        {searchedProducts.length > 0 && (
          <h3
            style={{
              color: Colors.secondary,
              fontWeight: 700,
              fontSize: 16,
            }}
            className="ft-text-main w-full text-center "
          >
            {searchedProducts.length} Products found
          </h3>
        )}
        {isEmpty === true && (
          <h3
            style={{
              color: Colors.secondary,
              fontWeight: 700,
              fontSize: 16,
            }}
            className="ft-text-main w-full text-center "
          >
            No Products were found
          </h3>
        )}
        <div
          style={{
            // height: 500,
            overflowY: 'scroll',
            width: '100%',
          }}
          className="search-result-container custom-scroll grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-5 px-5"
        >
          {searchedProducts.map((product) => {
            return (
              <div
                key={product.id}
                onClick={() => {
                  props.setShowSearch(false);
                }}
                className="h-fit"
              >
                <ProductCard
                  style={{
                    height: 260,
                  }}
                  product={product}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
