import { CartForm, Image, Money } from '@shopify/hydrogen'
import { useCart } from './CartProvider'
import FTicons from 'app/ft-lib/FTicon'
import { Colors } from 'app/ft-lib/shared'
import Quantity from './Quantity'
import { Cart, CartLine, ComponentizableCartLine } from '@shopify/hydrogen/storefront-api-types'
import { useEffect, useRef, useState } from 'react'
import { UseShopStore } from 'app/root'
import CTAButton from './CTAButton'
import { Link, useNavigate } from '@remix-run/react'


// type RootLoaderFunction = typeof loader
// this is the type of the data returned from the root loader
// type RootLoaderReturnType = ReturnType<RootLoaderFunction>
// this is the type of the data returned from the root loader without the promise wrapper
// type RootLoaderData = RootLoaderReturnType extends Promise<infer T> ? T : never

function LineItem(props: {
    lineItem: CartLine | ComponentizableCartLine
}) {
    const { lineItem } = props
    const [quantity, setQuantity] = useState(lineItem.quantity)
    return (
        <div
            style={{
                height: 160,
                width: "100%",
                overflow: "hidden",
                borderRadius: 12,
                background: "rgba(250, 249, 246, 0.90)",
                border: "0.5px solid #93C147",
            }}
            className='cart-item flex justify-between gap-3 p-3 flex-shrink-0'>
            <div className='cart-item-details flex flex-col justify-between'>
                <div className='cart-item-title'>
                    <h1
                        style={{
                            color: Colors.text
                        }}
                        className='text-base font-bold'>{lineItem.merchandise.product.title}</h1>
                    <h2
                        style={{
                            color: Colors.textThird

                        }}
                        className='text-xs'>{lineItem.merchandise.title}</h2>
                </div>
                <div className='cart-item-price text-base'>
                    <Money data={lineItem.merchandise.price} />
                </div>
                <div className='line-item-form flex gap-3 items-center'>

                    <CartForm
                        route="/cart"
                        inputs={{
                            lines: [
                                {
                                    merchandiseId: lineItem.merchandise.id,
                                    quantity: quantity,
                                    id: lineItem.id,
                                },
                            ],
                        }}
                        action={CartForm.ACTIONS.LinesUpdate}
                    >
                        {(fetcher) => (
                            <>
                                <Quantity
                                    size='sm'
                                    onChange={(value) => {
                                        setQuantity(value)
                                    }} value={lineItem.quantity}
                                    isUpdating={fetcher.state !== "idle" ? true : false}
                                />
                            </>
                        )}
                    </CartForm>
                    <CartForm
                        route="/cart"
                        inputs={{
                            lineIds: [lineItem.id],
                        }}
                        action={CartForm.ACTIONS.LinesRemove}
                    >
                        {(fetcher) => (
                            <button
                                style={{
                                    borderRadius: "100%",
                                    width: 40,
                                    height: 40,
                                    border: "0.5px solid",
                                    borderColor: Colors.secondaryLight,
                                }}
                                className='delete-line-item flex items-center justify-center relative'>
                                <>
                                    <div
                                        style={{
                                            background: "rgba(250, 249, 246, 0.70)",
                                            borderRadius: '9999px',
                                            opacity: fetcher.state !== "idle" ? 1 : 0,
                                            transition: "all 0.2s ease-in-out",
                                            zIndex: fetcher.state !== "idle" ? 100 : -1,
                                        }}
                                        className='spinner-container absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                                        {fetcher.state !== "idle"
                                            &&
                                            <div
                                                style={{
                                                    width: 20,
                                                    height: 20,
                                                }}
                                                className={`lds-dual-ring`} />
                                        }
                                    </div>
                                    <FTicons name='trash'
                                        fill={Colors.secondary}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            cursor: "pointer"
                                        }} />
                                </>
                            </button>
                        )}

                    </CartForm>
                </div>
            </div>
            <div
                style={{
                    borderRadius: 12,
                    aspectRatio: "0.77/1",
                    overflow: "hidden",
                    height: "100%",
                }}
                className='cart-item-image '>
                {lineItem.merchandise.image != null && (
                    <Image className='object-cover h-full' sizes='300' data={lineItem.merchandise.image} />
                )}
            </div>
        </div>
    )
}

export default function CartDrawer() {
    const showCart = UseShopStore(state => state.showCart)
    const [animate, setAnimate] = useState(false)
    const cartSliderRef = useRef<HTMLDivElement | null>(null)
    const cart = useCart()
    const cartLinesRef = useRef<number | null>(cart?.lines.nodes.length ?? null)
    const navigate = useNavigate()

    useEffect(() => {
        if (showCart === true) {
            setAnimate(true)
        }
        return () => {
            setAnimate(false)
        }
    }, [showCart])

    useEffect(() => {
        // if the user click outside the search container, close the search
        const closeOnAnimationEnd = () => {
            if (cartSliderRef.current != null) {
                cartSliderRef.current.ontransitionend = () => {
                    UseShopStore.setState({ showCart: false })
                }
            }
        }
        const handleClickOutside = (event: MouseEvent) => {
            if (cartSliderRef.current && !cartSliderRef.current.contains(event.target as Node)) {
                closeOnAnimationEnd()
                setAnimate(false)
                document.removeEventListener("mousedown", handleClickOutside);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showCart])

    if (cart == null || showCart === false) {
        return null
    }
    const isLinesEmpty = cart.lines.nodes.length === 0 || cart.lines.nodes.length === null
    return (
        <div style={{
            position: "fixed",
            top: "0",
            right: "0",
            width: "100%",
            height: "100%",
            background: "rgba(250, 249, 246, 0.10)",
            zIndex: 1000,
            opacity: animate ? 1 : 0,
            transition: "all 0.3s ease-in-out",
        }} className='cart-container backdrop-blur-sm flex justify-end items-center'>
            <div
                ref={cartSliderRef}
                style={{
                    width: 420,
                    height: "90%",
                    background: "rgba(250, 249, 246, 0.90)",
                    borderRadius: "24px 0px 0px 24px",
                    border: "0.5px solid #93C147",
                    transition: "all 0.2s ease-in-out",
                    transform: animate ? "translateX(0%)" : "translateX(100%)",
                }}
                className='cart-slider backdrop-blur'>
                <div className='cart-wrapper flex flex-col py-3 md:py-5 space-y-3 md:space-y-5 h-full'>
                    {isLinesEmpty === true ? (
                        <div className="h-full uppercase flex flex-col gap-3 md:gap-5 justify-center items-center font-bold text-2xl">
                            your cart is empty
                            <CTAButton
                                onClick={() => {
                                    setAnimate(false)
                                    if (cartSliderRef.current != null) {
                                        cartSliderRef.current.ontransitionend = () => {
                                            UseShopStore.setState({ showCart: false })
                                        }
                                    }
                                    navigate("/collections/all")
                                }}
                                className='md:text-xl'
                            >Continue Shopping</CTAButton>
                        </div>
                    ) : (
                        <>
                            <div className='cart-header flex items-center justify-between px-3 md:px-5'>
                                <div className='cart-header-title'>
                                    <h1 className='text-2xl ft-text-main'>Your Bag</h1>
                                </div>
                                <div
                                    onClick={() => {
                                        setAnimate(false)
                                        if (cartSliderRef.current != null) {
                                            cartSliderRef.current.ontransitionend = () => {
                                                UseShopStore.setState({ showCart: false })
                                            }
                                        }
                                    }}
                                    className='cart-header-close'>
                                    <FTicons name='close' style={{
                                        width: 20,
                                        height: 20,
                                        cursor: "pointer"
                                    }} />
                                </div>
                            </div>
                            <div
                                style={{
                                    borderBlock: "1px solid",
                                    borderColor: Colors.primary,
                                }}
                                className='cart-body flex flex-col custom-scroll gap-3 md:gap-5 h-full overflow-y-auto  p-3 md:p-5'>
                                {
                                    cart.lines.nodes.map((lineItem, index) => {
                                        return (
                                            <LineItem key={lineItem.id} lineItem={lineItem} />
                                        )
                                    })
                                }
                            </div>
                            <div
                                style={{
                                }}
                                className="cart-summary space-y-3 md:space-y-5 px-3 md:px-5">
                                <div className="total-price flex gap-1 font-bold text-xl">
                                    <h3 className=''>Total:</h3>
                                    <Money data={cart.cost.totalAmount}></Money>
                                    <div
                                        style={{
                                            borderColor: Colors.secondaryLight
                                        }}
                                        className='border-l text-lg font-medium pl-1'>
                                        {`${cart.lines.nodes.length} ${cart.lines.nodes.length > 1 ? "items" : "item"}`}
                                    </div>
                                </div>
                                <div className="check-out">
                                    <Link
                                        to={cart.checkoutUrl}
                                        className='w-full'>
                                        <CTAButton
                                            fullWidth
                                            onClick={() => {
                                                setAnimate(false)
                                                if (cartSliderRef.current != null) {
                                                    cartSliderRef.current.ontransitionend = () => {
                                                        UseShopStore.setState({ showCart: false })
                                                    }
                                                }
                                            }}
                                            className='w-full'
                                        >Check Out</CTAButton>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div >
        </div >
    )
}
