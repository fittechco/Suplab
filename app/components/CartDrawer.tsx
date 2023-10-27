
import { Money } from '@shopify/hydrogen';
import { useCart } from './CartProvider';
import FTicons from 'app/ft-lib/FTicon';
import { Colors } from 'app/ft-lib/shared';
import { useCallback, useEffect, useRef, useState } from 'react';
import { UseShopStore } from 'app/root';
import CTAButton from './CTAButton';
import { Link, useNavigate } from '@remix-run/react';
import LineItem from '../lib/cart/LineItem';


const CartForm = (props: {
  animate: boolean
  closeCart: () => void
}) => {
  const { closeCart } = props;
  const cart = useCart();
  const navigate = useNavigate();

  const isLinesEmpty =
    cart == null ||
    cart.lines.nodes.length === 0 ||
    cart.lines.nodes.length === null;

  return (
    <div className="cart-wrapper flex flex-col py-3 md:py-5 space-y-3 md:space-y-5 h-full">
      {cart == null || isLinesEmpty === true ? (
        <div className="h-full uppercase flex flex-col gap-3 md:gap-5 justify-center items-center font-bold text-2xl">
          your cart is empty
          <CTAButton
            onClick={() => {
              closeCart();
              navigate('/collections/all');
            }}
            className="md:text-xl"
          >
            Continue Shopping
          </CTAButton>
        </div>
      ) : (
        <>
          <div className="cart-header flex items-center justify-between px-3 md:px-5">
            <div className="cart-header-title">
              <h1 className="text-2xl ft-text-main">Your Bag</h1>
            </div>
            <button
              onClick={() => {
                closeCart();
              }}
              className="cart-header-close"
            >
              <FTicons
                icon="close"
                style={{
                  width: 20,
                  height: 20,
                  cursor: 'pointer',
                }}
              />
            </button>
          </div>
          <div
            style={{
              borderBlock: '1px solid',
              borderColor: Colors.primary,
            }}
            className="cart-body flex flex-col custom-scroll gap-3 md:gap-5 h-full overflow-y-auto  p-3 md:p-5"
          >
            {cart.lines.nodes.map((lineItem, index) => {
              return <LineItem key={lineItem.id} lineItem={lineItem} />;
            })}
          </div>
          <div
            style={{}}
            className="cart-summary space-y-3 md:space-y-5 px-3 md:px-5"
          >
            <div className="total-price flex gap-1 font-bold text-xl">
              <h3 className="">Total:</h3>
              <Money data={cart.cost.totalAmount}></Money>
              <div
                style={{
                  borderColor: Colors.secondaryLight,
                }}
                className="border-l text-lg font-medium pl-1"
              >
                {`${cart.lines.nodes.length} ${cart.lines.nodes.length > 1 ? 'items' : 'item'
                  }`}
              </div>
            </div>
            <div className="check-out">
              <Link to={cart.checkoutUrl} className="w-full">
                <CTAButton
                  fullWidth
                  onClick={() => {
                    closeCart();
                  }}
                  className="w-full"
                >
                  Check Out
                </CTAButton>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
};

export default function CartDrawer() {
  const showCart = UseShopStore((state) => state.showCart);
  const handleClickOutside = useCallback(
    () => {
      UseShopStore.setState({ showCart: false });
    },
    [],);


  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        right: '0',
        width: '100%',
        height: '100%',
        zIndex: 100,
        opacity: showCart ? 1 : 0,
        transition: 'all 0.3s ease-in-out',
      }}
      className={`cart-container 
        ${showCart === true ? 'md:translate-x-0 translate-y-0' : 'md:translate-x-full md:translate-y-0 translate-x-0 translate-y-full'}
        flex justify-end items-end md:items-center`}
    >
      <div style={{
        position: 'fixed',
        top: '0',
        right: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(250, 249, 246, 0.10)',
        zIndex: showCart === true ? 10 : -1,
        opacity: showCart ? 1 : 0,
        transition: showCart ? 'all 0.3s ease-in-out' : 'none',
        transitionDelay: showCart ? '0.3s' : '0s',
      }}
        className='backdrop-blur-sm'
        onClick={() => {
          handleClickOutside()
        }}
      ></div>
      <div
        style={{
          width: 420,
          zIndex: 20,
          height: '90%',
          background: 'rgba(250, 249, 246, 0.90)',
          borderRadius: '24px 0px 0px 24px',
          border: '0.5px solid #93C147',
          transition: 'all 0.2s ease-in-out',
          // transform: showCart ? 'translateX(0%)' : 'translateX(100%)',
        }}
        className="cart-slider backdrop-blur max-md:hidden">
        <CartForm
          animate={showCart}
          closeCart={() => {
            UseShopStore.setState({ showCart: false });
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: '90%',
          zIndex: 20,
          background: 'rgba(250, 249, 246, 0.90)',
          borderRadius: '24px 24px 0px 0px',
          border: '0.5px solid #93C147',
          transition: 'all 0.2s ease-in-out',
        }}
        className="cart-slider backdrop-blur md:hidden">
        <CartForm
          animate={showCart}
          closeCart={() => {
            UseShopStore.setState({ showCart: false });
          }}
        />
      </div>
    </div>
  );
}
