import { Money, CartForm, Image } from "@shopify/hydrogen";
import type { CartLine, ComponentizableCartLine } from "@shopify/hydrogen/storefront-api-types";
import { useState } from "react";
import Quantity from "~/app/components/Quantity";
import FTicons from "~/app/ft-lib/FTicon";
import LazyImage from "~/app/ft-lib/LazyImage";
import resizeImage from "~/app/ft-lib/resizeImages";
import { Colors } from "~/app/ft-lib/shared";

export default function LineItem(props: { lineItem: CartLine | ComponentizableCartLine }) {
    const { lineItem } = props;
    const [quantity, setQuantity] = useState(lineItem.quantity);
    return (
        <div
            style={{
                height: 160,
                width: '100%',
                overflow: 'hidden',
                borderRadius: 12,
                background: 'rgba(250, 249, 246, 0.90)',
                border: '0.5px solid #93C147',
            }}
            className="cart-item flex justify-between gap-3 p-3 flex-shrink-0"
        >
            <div className="cart-item-details flex flex-col justify-between">
                <div className="cart-item-title">
                    <h1
                        style={{
                            color: Colors.text,
                        }}
                        className="text-base font-bold"
                    >
                        {lineItem.merchandise.product.title}
                    </h1>
                    <h2
                        style={{
                            color: Colors.textThird,
                        }}
                        className="text-xs"
                    >
                        {lineItem.merchandise.title}
                    </h2>
                </div>
                <div className="cart-item-price text-base">
                    <Money data={lineItem.merchandise.price} />
                </div>
                <div className="line-item-form flex gap-3 items-center">
                    <CartForm
                        route="/cart"
                        inputs={{
                            lines: [
                                {
                                    merchandiseId: lineItem.merchandise.id,
                                    quantity,
                                    id: lineItem.id,
                                },
                            ],
                        }}
                        action={CartForm.ACTIONS.LinesUpdate}
                    >
                        {(fetcher) => (
                            <>
                                <Quantity
                                    size="sm"
                                    onChange={(value) => {
                                        setQuantity(value);
                                    }}
                                    value={lineItem.quantity}
                                    isUpdating={fetcher.state !== 'idle' ? true : false}
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
                                    borderRadius: '100%',
                                    width: 40,
                                    height: 40,
                                    border: '0.5px solid',
                                    borderColor: Colors.secondaryLight,
                                }}
                                className="delete-line-item flex items-center justify-center relative"
                            >
                                <>
                                    <div
                                        style={{
                                            background: 'rgba(250, 249, 246, 0.70)',
                                            borderRadius: '9999px',
                                            opacity: fetcher.state !== 'idle' ? 1 : 0,
                                            transition: 'all 0.2s ease-in-out',
                                            zIndex: fetcher.state !== 'idle' ? 100 : -1,
                                        }}
                                        className="spinner-container absolute top-0 left-0 w-full h-full flex items-center justify-center"
                                    >
                                        {fetcher.state !== 'idle' && (
                                            <div
                                                style={{
                                                    width: 20,
                                                    height: 20,
                                                }}
                                                className={`lds-dual-ring`}
                                            />
                                        )}
                                    </div>
                                    <FTicons
                                        name="trash"
                                        fill={Colors.secondary}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            cursor: 'pointer',
                                        }}
                                    />
                                </>
                            </button>
                        )}
                    </CartForm>
                </div>
            </div>
            <div
                style={{
                    borderRadius: 12,
                    aspectRatio: '0.77/1',
                    overflow: 'hidden',
                    height: '100%',
                }}
                className="cart-item-image "
            >
                {lineItem.merchandise.image != null && (
                    <LazyImage
                        className="object-cover h-full"
                        src={resizeImage(lineItem.merchandise.image.url, 300)}
                    />
                )}
            </div>
        </div>
    );
}
