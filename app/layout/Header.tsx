import { Link } from '@remix-run/react';
import React, { useEffect, useRef, useState } from 'react'
import { App } from '../api/type';
import { createPortal } from 'react-dom';
import MobileNav from './MobileNav';
import SubMenuPopup from './SubMenuPopup';
import FTicons from 'app/ft-lib/Icon';
import { Colors } from 'app/ft-lib/shared';

type Props = {
   layout: App.Shopify.Layout
}

function Header(props: Props) {
   const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
   const [isTop, setIsTop] = useState(true);
   const headerRef = useRef<HTMLDivElement>(null);
   const [isOpen, setIsOpen] = useState(false);
   const [showSub, setShowSub] = useState(false);

   useEffect(() => {
      let lastScrollY = window.scrollY;
      const updateScrollDirection = () => {
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

   useEffect(() => {
      const checkTop = () => {
         window.scrollY > 200 ? setIsTop(false) : setIsTop(true);
      }
      window.addEventListener("scroll", checkTop);
      return () => {
         window.removeEventListener("scroll", checkTop);
      }
   }, []);

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
      <header
         style={{
            // backgroundColor: "rgba(250, 249, 246, 0.80)" + (isTop ? "00" : "ff"),
            width: '100%',
            position: 'fixed',
            transform: scrollDirection === "down" ? "translateY(-100%)" : "translateY(0%)",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
         }}
         ref={headerRef}
         className="header-container transition-all ease-in-out duration-300 md:container   mx-auto">
         <div
            style={{
               border: "1px solid rgba(174, 209, 118, 0.70)",
               borderRadius: "0px 0px 12px 12px",
               background: "rgba(250, 249, 246, 0.80)",
               backdropFilter: "blur(2.5px)",
               height: 'fit-content',
            }}
            className=" flex items-center max-md:justify-between  py-2 px-4">
            <div
               style={{
                  color: Colors.secondary,
                  fontWeight: 700,
               }}
               className="header__logo mr-auto font-mainFont uppercase flex items-center texl-lg md:text-lg lg:text-2xl italic">
               {/* {props.layout.shop.name.replace("leb", "")} */}
               <img src={props.layout.shop?.brand!.logo!.image?.url} className='w-24 md:w-32' alt='Logo' />
            </div>
            <div className='navmenusContainer flex   items-center justify-center  max-md:hidden h-full'>
               {props.layout.header.items.map((item) => {
                  const pathname = new URL(item.url).pathname;
                  return (
                     <div
                        onMouseEnter={
                           () => {
                              if (item.items.length > 0) {
                                 setShowSub(true)
                              }
                           }
                        }
                        onMouseLeave={() => {
                           if (item.items.length > 0) {
                              setShowSub(false)
                           }
                        }}
                        key={item.title} className='nav-menu h-full flex items-center justify-center cursor-pointer relative px-4 ft-text-main'>
                        <Link
                           style={{
                              color: Colors.text,
                              fontWeight: "700"
                           }}
                           to={pathname}

                           className='navmenusContainer_item  text-sm lg:text-base uppercase transition-all ease-out duration-300'>
                           {item.title}
                        </Link>

                        {item.items.length > 0 &&
                           <SubMenuPopup showSub={showSub} isTop={isTop} items={item.items} />
                        }

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
         {isOpen && createPortal(
            <MobileNav
               setIsOpen={setIsOpen}
               isOpen={isOpen}
            />,
            document.body
         )
         }
      </header >

   )
}

export default Header