import { Link } from '@remix-run/react';
import { useCallback, useEffect, useRef, useState } from 'react'
import { App } from '../../api/type';
import { createPortal } from 'react-dom';
import MobileNav, { OFFERS_QUERY } from '../MobileNav';
import SubMenuPopup from './SubMenuPopup';
import FTicons from 'app/ft-lib/Icon';
import { Colors } from 'app/ft-lib/shared';
import { QueryClient } from 'react-query';
import StorefrontApi from 'app/api/storefront';
import type { FooterQuery, HeaderQuery, SearchProductsQuery, ShopLayoutQuery } from 'storefrontapi.generated';
import SearchController from 'app/ft-lib/ft-server/controllers/SearchController';

type Props = {
   layout: {
      shop: ShopLayoutQuery["shop"]
      header: HeaderQuery
      footer: FooterQuery
   }
}


const queryClient = new QueryClient()



function Header(props: Props) {
   const { header } = props.layout
   const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
   const [isTop, setIsTop] = useState(true);
   const [subItems, setSubItems] = useState<App.Shopify.Item[]>([]);
   const headerRef = useRef<HTMLDivElement>(null);
   const [isOpen, setIsOpen] = useState(false);
   const [showSub, setShowSub] = useState(false);
   const [searchedProducts, setSearchedProducts] = useState<SearchProductsQuery["products"]["nodes"]>([])

   queryClient.prefetchQuery('offers', async () => {
      const res = await StorefrontApi.storeFront().query(OFFERS_QUERY)
      return res.metaobject
   })

   useEffect(() => {
      let lastScrollY = window.scrollY;
      const updateScrollDirection = () => {
         window.scrollY > 200 ? setIsTop(false) : setIsTop(true);
         const scrollY = window.scrollY;
         const direction = scrollY > lastScrollY ? "down" : "up";
         if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
            setScrollDirection(direction);
            direction === "down" && setShowSub(false)
         }
         lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
         window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
   }, [scrollDirection]);

   const handleMouseEnter = useCallback(() => {
      setShowSub(true)
      console.log(headerRef.current?.scrollHeight, "headerRef.current?.offsetHeight");


      if (headerRef.current != null) {
         headerRef.current.style.height = headerRef.current?.scrollHeight + "px";
      }
   }, [])

   const handleMouseLeave = useCallback(() => {
      setShowSub(false)
      if (headerRef.current != null) {
         if (headerRef.current != null) {
            headerRef.current.style.height = "80px";
         }
         headerRef.current.ontransitionend = () => {
            if (showSub === false) {
               setSubItems([])
            }
         }
      }
   }, [showSub])


   // creating a mutation observer to detect when the sub header is added and change the height of the header based on it 

   // const handleOpenCart = () => {
   //   const cartId = localStorage.getItem("cartId");
   //   if (!cartId) {
   //     cartController.createCart().then((res) => {
   //       if (res.error) {
   //         console.error(res.error);
   //       } else {
   //         localStorage.setItem("cartId", res.id);
   //         UseShopStore.getState().setCart(res);
   //         setIsOpen(true);
   //       }
   //     });
   //   } else {
   //     cartController.getCart({ cartId }).then((res) => {
   //       if (res.error) {
   //         console.error(res.error);
   //       } else {
   //         UseShopStore.getState().setCart(res);
   //         setIsOpen(true);
   //       }
   //     });
   //   }
   // }


   return (
      <>
         <header
            style={{
               width: '100%',
               position: 'fixed',
               transform: scrollDirection === "down" ? "translateY(-100%)" : "translateY(0%)",
               top: 0,
               left: 0,
               right: 0,
               zIndex: 100,
            }}
            className="header-container transition-all ease-in-out duration-300 md:container mx-auto">
            <div
               ref={headerRef}
               style={{
                  border: "1px solid rgba(174, 209, 118, 0.70)",
                  borderRadius: "0px 0px 12px 12px",
                  background: "rgba(250, 249, 246, 0.80)",
                  backdropFilter: "blur(2.5px)",
                  transition: "all 0.3s ease",
                  height: 80,
                  overflow: "hidden",
               }} className='header-wrapper'>
               <div
                  style={{
                     height: 80,
                  }}
                  className=" flex items-center max-md:justify-between  py-2 px-5 sm:px-6">
                  <div
                     style={{
                        color: Colors.secondary,
                        fontWeight: 700,
                     }}
                     className="header__logo mr-auto flex items-center">
                     <img src={props.layout.shop.brand?.logo!.image?.url} className='w-24 md:w-32' alt='Logo' />
                  </div>
                  <div className='navmenusContainer flex   items-center justify-center  max-md:hidden h-full'>
                     {props.layout.header.menu?.items.map((item) => {
                        // todo: fix this
                        const pathname = new URL(item.url || "").pathname;
                        return (
                           <div
                              onMouseEnter={
                                 () => {
                                    if (item.items?.length > 0) {
                                       setSubItems(item.items)
                                       handleMouseEnter()
                                    }
                                 }
                              }
                              onMouseLeave={() => {
                                 if (item.items.length > 0 && headerRef.current != null) {
                                    handleMouseLeave()
                                 }
                              }}
                              key={item.title} className='nav-menu h-full flex items-center justify-center cursor-pointer relative px-4 ft-text-main'>
                              <Link
                                 style={{
                                    color: Colors.text,
                                    fontWeight: "700"
                                 }}
                                 to={pathname}

                                 className='navmenusContainer_item ft-text-main text-sm lg:text-base uppercase transition-all ease-out duration-300'>
                                 {item.title}
                              </Link>

                           </div>
                        );
                     })}
                  </div>
                  <div className='icons flex gap-3 items-center justify-end ml-auto'>
                     <div className='icons_item'>
                        <FTicons style={{
                           color: "white",
                           width: "24px",
                           height: "24px"
                        }} fill={Colors.secondary}
                           className='transition-all ease-out duration-300'
                           name='search' />
                     </div>
                     <div className='icons_item'>
                        {/* <button onClick={() => handleOpenCart()} className="cursor-pointer"> */}
                        <FTicons
                           fill={Colors.secondary}
                           style={{
                              width: "24px",
                              height: "24px",
                           }}
                           name='bag' />
                        {/* </button> */}
                     </div>
                     <div
                        onClick={() => setIsOpen(true)}
                        className='icons_item md:hidden'>
                        <FTicons
                           fill={Colors.secondary}
                           style={{
                              width: "24px",
                              height: "24px",
                           }} name='nav' />
                     </div>
                  </div>
               </div>
               <div
                  onMouseEnter={() => {
                     if (headerRef.current != null) {
                        handleMouseEnter()
                     }
                  }}
                  onMouseLeave={() => {
                     if (headerRef.current != null) {
                        handleMouseLeave()
                     }
                  }}
               >
                  <SubMenuPopup showSub={showSub} isTop={isTop} items={subItems} />
               </div>
            </div>

            {isOpen && createPortal(
               <MobileNav
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
               />,
               document.body
            )
            }
         </header >
         <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 100,
            backgroundColor: "rgba(0,0,0,0.5)",
            background: "rgba(200, 200, 200, 0.40)",
            backdropFilter: "blur(2.5px)",

         }} className='search-container hidden justify-center items-end'>
            <div
               style={{
                  height: 667,
                  width: "100%",
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 100,
                  borderRadius: "24px 24px 0px 0px",
                  border: "0.5px solid #AED176",
                  background: "rgba(147, 193, 71, 0.70)",
                  marginBottom: -160,
               }}
               className='search-wrapper flex flex-col gap-4 items-start p-5'>
               <div className='searchBar w-full'>
                  <input
                     style={{
                        color: Colors.secondary,
                        fontWeight: 700,
                        fontSize: 14,
                        background: "transparent",
                        border: "none",
                        borderBottom: "1px solid",
                        borderColor: Colors.secondaryLight,
                     }}
                     onChange={async (e) => {
                        const res = await SearchController.searchProducts({ query: e.target.value })
                        setSearchedProducts(res.nodes)
                        console.log(res);
                     }}
                     className='ft-text-main w-full placeholder:text-[#696968] h-12 focus:outline-none px-0 py-2 '
                     type="text" placeholder='Search' />
               </div>
            </div>
         </div >
      </>

   )
}

export default Header