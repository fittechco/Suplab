import { Money } from '@shopify/hydrogen'
import Acordion from 'app/components/Acordion'
import Quantity from 'app/components/Quantity'
import { Colors } from 'app/ft-lib/shared'
import React from 'react'
import type { ProductQuery } from 'storefrontapi.generated'
import ProductOptions from './ProductOptions'
import CTAButton from 'app/components/CTAButton'

type Props = {
    product: NonNullable<ProductQuery["product"]>
    isTop: boolean
    selectedVariant: NonNullable<ProductQuery["product"]>["variants"]["nodes"][0]
}

export default function MobileProductDetails(props: Props) {
    const { product } = props
    const [quantity, setQuantity] = React.useState(1)
    return (
        <div
            style={{
                zIndex: 10,
                position: "relative",
            }}
            className='box md:hidden space-y-4 shadow-lg px-5 py-5 white-background-blur rounded-t-3xl '>
            <div className='product-details'>
                <h1 className='text-2xl ft-text-main'>{product.title}</h1>
                <Money className='text-2xl font-bold uppercase' data={product.variants.nodes[0].price} withoutTrailingZeros />
            </div>
            <Quantity onChange={(value) => {
                setQuantity(value)
            }}
                value={quantity}
            />
            <ProductOptions selectedVariant={props.selectedVariant} options={product.options} />
            <div style={{
                position: "sticky",
                bottom: "0%",
                display: props.isTop ? "none" : "block",
            }} className='cta-button '>
                <CTAButton fullWidth text='Add to cart' />
            </div>
            <div className='product-details-accordion space-y-4'>
                <Acordion
                    title="Description"
                    details={product.description} />
                <Acordion title='Shop Info' details={"Shiping info goes here"} />

            </div>
        </div>
    )
}
