import { Link } from '@remix-run/react'
import { Colors } from 'app/ft-lib/shared'
import React from 'react'
import { ProductQuery } from 'storefrontapi.generated'

type Props = {
    product: ProductQuery["product"]
}
export default function ProductCard(props: Props) {
    const { product } = props
    if (!product) {
        // todo - implement skeleton loader
        return <div>Loading...</div>
    }
    return (
        <Link
            to={`products/${product.handle}`}
            style={{
            }}
            key={product.id} className='search-result-item flex flex-col gap-2 h-fit'>
            <div
                style={{
                    backgroundColor: "#E8E7E3",
                    borderRadius: 12,
                    overflow: "hidden",
                }}
                className='h-[240px] md:h-[280px]'>
                <img
                    style={{
                        height: "100%",
                        width: "100%",
                    }}
                    src={product.images.nodes[0].url} className='w-full h-full object-cover' alt="" />
            </div>
            <div className='flex flex-col'>
                <p style={{
                    color: Colors.secondaryDark,
                    fontWeight: 700,
                }} className='text-sm'>{product.title}</p>
                <p
                    style={{
                        color: Colors.secondary,
                        fontWeight: 600,
                    }}
                    className='text-[14px] font-mainFontBold'>{product.priceRange.minVariantPrice.amount}{" "} {product.priceRange.minVariantPrice.currencyCode}</p>
            </div>
        </Link>
    )
}
