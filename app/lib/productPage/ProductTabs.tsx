import { Image } from '@shopify/hydrogen'
import type { Image as ImageType } from '@shopify/hydrogen/storefront-api-types'
import React, { useState } from 'react'
import Accordion from '~/app/components/Accordion'
import LazyImage from '~/app/ft-lib/LazyImage'
import resizeImage from '~/app/ft-lib/resizeImages'
import type { ProductMetafieldsQuery } from '~/storefrontapi.generated'

type Props = {
    product: ProductMetafieldsQuery["product"] | null
}
function TabHeading(props: { title: string, setSelectedTabIndex: () => void, isSelected: boolean }) {
    const { title, isSelected, setSelectedTabIndex } = props
    return (
        <button
            onClick={() => {
                setSelectedTabIndex()
            }}
            className={`${isSelected && "faded-borders"} relative p-2`}
        >
            <h3
                className={`product-tabs-title capitalize font-bold text-2xl`}>
                {title}
            </h3>
        </button>
    )
}

export default function ProductTabs(props: Props) {
    const { product } = props
    const metafields = product?.metafields
    const [selectedTabIndex, setSelectedTabIndex] = useState(metafields?.length ?? 0)
    if (metafields == null) {
        return null
    }
    return (
        <div className='product-tabs md:container space-y-5'>
            <div className='mobile-accordions flex flex-col gap-5 md:hidden'>
                <Accordion title={"Description"} details={product?.description || ""} />
                {metafields.map((metafield, index) => {
                    if (metafield == null) {
                        return null
                    }
                    let image: Pick<ImageType, "url" | "width" | "altText" | "height"> = null as any as ImageType
                    let value = metafield.value
                    if (metafield.reference != null) {
                        metafield.reference.fields.forEach(field => {
                            if (field.reference != null && field.reference.image != null) {
                                image = field.reference.image
                            } else {
                                value = field.value ?? ""
                            }
                        })
                    }
                    return (
                        <Accordion key={metafield.id} title={metafield.key} details={value} image={image} />
                    )
                })}
            </div>
            <div className='product-tabs-titles flex justify-center gap-5 max-md:hidden'>
                <TabHeading title="description" isSelected={selectedTabIndex === metafields.length} setSelectedTabIndex={() => {
                    setSelectedTabIndex(metafields.length)
                }} />
                {metafields.map((metafield, index) => {
                    const isSelected = index === selectedTabIndex
                    if (metafield == null) {
                        return null
                    }
                    return (
                        <TabHeading key={metafield.id} title={metafield.key} isSelected={isSelected} setSelectedTabIndex={() => {
                            setSelectedTabIndex(index)
                        }}
                        />
                    )
                })}
            </div>
            <div
                style={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: "12px",
                    boxShadow: "0px 2px 11px 0px rgba(0, 0, 0, 0.16) inset",

                }}
                className="product-tabs-values md:p-5 md:min-h-[420px] max-md:hidden h-full w-full">
                {metafields.map((metafield, index) => {
                    if (metafield == null || index !== selectedTabIndex) {
                        return null
                    }
                    let image: Pick<ImageType, "url" | "width" | "altText" | "height"> = null as any as ImageType
                    let value = metafield.value
                    if (metafield.reference != null) {
                        metafield.reference.fields.forEach(field => {
                            if (field.reference != null && field.reference.image != null) {
                                image = field.reference.image
                            } else {
                                value = field.value ?? ""
                            }
                        })
                    }
                    return (
                        <div
                            key={metafield.id}
                            className='product-tabs-value flex gap-3 h-full w-full'
                        >
                            {image != null &&
                                <LazyImage
                                    alt='product image'
                                    className="product-tabs-image aspect-square h-96"
                                    src={resizeImage(image.url, 600)}
                                />}
                            {value != null && <p className=''>{value}</p>}
                        </div>
                    )
                })}
                {selectedTabIndex === metafields.length && (
                    <div className='product-tabs-value'>
                        <p className=''>{product?.description}</p>
                    </div>
                )}
            </div>
        </div >
    )
}
