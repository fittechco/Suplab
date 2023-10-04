import { Money, CartForm } from "@shopify/hydrogen"
import Acordion from "app/components/Acordion"
import CTAButton from "app/components/CTAButton"
import Quantity from "app/components/Quantity"
import { Colors } from "app/ft-lib/shared"
import { UseShopStore } from "app/root"
import { useEffect, useState } from "react"
import { ProductQuery } from "storefrontapi.generated"
import ProductOptions from "./ProductOptions"

type Props = {
    selectedVariant: NonNullable<ProductQuery["product"]>["variants"]["nodes"][0]
    product: NonNullable<ProductQuery["product"]>
    isTop?: boolean
}

export default function ProductForm(props: Props) {
    const { product, selectedVariant } = props
    const [quantity, setQuantity] = useState(1)
    useEffect(() => {
        console.log(selectedVariant, "selectedVariant")
    }, [selectedVariant])
    return (
        <div className='product-form flex flex-col gap-5 w-full'>
            <span
                style={{
                    backgroundColor: Colors.secondaryLight,
                    color: Colors.textSecondary,
                }}
                className='p-1 text-sm w-fit rounded-md'>{product.vendor}</span>
            <div>
                <div className='product-title'>
                    <h1 className='text-2xl font-bold'>{product.title}</h1>
                </div>
                <div className='product-price'>
                    <Money
                        data={product.priceRange.minVariantPrice}
                        className='text-xl font-bold'
                    />
                </div>
            </div>
            <ProductOptions selectedVariant={selectedVariant} options={product.options} />
            <Quantity
                onChange={(value) => {
                    setQuantity(value);
                }}
                max={selectedVariant?.quantityAvailable ?? 0}
                value={quantity} />
            <div className='flex items-center w-full'>
                <CartForm
                    route="/cart"
                    inputs={{
                        lines: [
                            {
                                merchandiseId: selectedVariant.id,
                                quantity: quantity,
                                attributes: selectedVariant.selectedOptions.map((option) => {
                                    return {
                                        key: option.name,
                                        value: option.value,
                                    };
                                })

                            },
                        ],
                    }}
                    action={CartForm.ACTIONS.LinesAdd}
                >
                    {(fetcher) => {
                        // we want to open the cart drawer if the user clicks on the add to cart button and the line is added successfully
                        return (
                            <>
                                <CTAButton
                                    disabled={
                                        !selectedVariant.availableForSale ??
                                        fetcher.state !== 'idle'
                                    }
                                    fullWidth
                                    onClick={() => {
                                        if (fetcher.state === 'idle') {
                                            UseShopStore.setState({ showCart: true })
                                        }
                                    }}
                                >
                                    {fetcher.state !== "idle" ? (
                                        <div className='lds-dual-ring'></div>
                                    ) :
                                        selectedVariant?.availableForSale
                                            ? 'Add to cart'
                                            : 'Sold out'}

                                </CTAButton>
                            </>
                        )
                    }

                    }
                </CartForm>

            </div>
            <Acordion title='Description' details={product.description} />
            <Acordion title='Shipping Info' details={"Shipping info goes here"} />
        </div>
    )
}
