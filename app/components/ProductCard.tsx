import { Link } from '@remix-run/react'
import { Image, Money } from '@shopify/hydrogen'
import { Colors } from 'app/ft-lib/shared'
import React from 'react'
import { ProductQuery } from 'storefrontapi.generated'

type Props = {
    product: ProductQuery["product"]
    style?: React.CSSProperties
}
export default function ProductCard(props: Props) {
    const { product } = props
    if (!product) {
        // todo - implement skeleton loader
        return <div>Loading...</div>
    }
    return (
        <Link
            relative='path'
            to={`/products/${product.handle}`}
            style={{
                border: `1px solid rgb(240, 238, 232)`,
                borderRadius: 12,
            }}
            key={product.id} className='search-result-item flex flex-col gap-2 h-fit p-1'>
            <div
                style={{
                    backgroundColor: Colors.offWhite,
                    borderRadius: 12,
                    overflow: "hidden",
                    height: 300,
                    ...props.style
                }}
                className=''>
                <Image
                    style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "auto",
                        margin: "auto",
                        borderRadius: '24px',
                    }}
                    sizes='100%, 800px'
                    aspectRatio='0.77/1'
                    className=""
                    src={product.images.nodes[0].url}
                />
            </div>
            <div className='flex flex-col'>
                <p style={{
                    color: Colors.secondaryDark,
                    fontWeight: 700,
                }} className='text-base'>{product.title}</p>
                <Money style={{
                    color: Colors.secondary,
                }}
                    className='font-mainFont font-bold text-base'
                    data={product.priceRange.minVariantPrice}
                    withoutTrailingZeros />

            </div>
        </Link>
    )
}
