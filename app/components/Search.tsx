import {Link} from '@remix-run/react';
import SearchController from 'app/ft-lib/ft-server/controllers/SearchController';
import {Colors} from 'app/ft-lib/shared';
import {useEffect, useMemo, useRef, useState} from 'react';
import type {SearchProductsQuery} from 'storefrontapi.generated';
// import _ from "lodash";
import ProductCard from './ProductCard';
import BottomDrawer from './BottomDrawer';

type Props = {
  setShowSearch: (show: boolean) => void;
  showSearch: boolean;
};

export default function Search(props: Props) {
  const [searchedProducts, setSearchedProducts] = useState<
    SearchProductsQuery['products']['nodes']
  >([]);
  const [animate, setAnimate] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const [isRequesting, setIsRequesting] = useState(false);
  const [isEmpty, setIsEmpty] = useState<boolean>();
  // implementing search with debounce and useMemo in order to avoid unnecessary re-renders and save the reference to the debounced function
  // const handleSearchProducts = useMemo(() => {
  //   return _.debounce(async (query: string) => {
  //     if (query.length === 0) {
  //       setIsEmpty(false)
  //       setSearchedProducts([])
  //       setIsRequesting(false)
  //       return
  //     }
  //     const res = await SearchController.searchProducts({ query })
  //     if (res.nodes.length === 0) {
  //       setIsEmpty(true)
  //     }
  //     setSearchedProducts(res.nodes)
  //   }, 100)
  // }, [])

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

  return (
    <BottomDrawer setShow={props.setShowSearch} show={props.showSearch}>
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
          // onChange={async (e) => {
          //   setIsRequesting(true)
          //   await handleSearchProducts(e.target.value)
          //   setIsRequesting(false)
          // }}
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
    </BottomDrawer>
  );
}
