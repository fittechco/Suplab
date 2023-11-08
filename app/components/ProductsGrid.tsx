import React from 'react'
import type { App } from '../api/type'
import { Pagination } from '@shopify/hydrogen'
import { Colors } from '../ft-lib/shared'
import type { GetCollectionQuery } from '~/storefrontapi.generated'
import ProductCard from './ProductCard'
import ProductSkeleton from '../lib/skeleton/ProductSkeleton'

type Props = {
    collection: GetCollectionQuery["collection"]
}

export default function ProductsGrid(props: Props) {
    if (props.collection == null) {
        return (
            <div className="productsGrid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-9">
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
            </div>
        );
    }
    return (
        <Pagination connection={props.collection?.products}>
            {({ nodes, NextLink, isLoading }) => {
                return (
                    <>
                        <div className="productsGrid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-9">
                            {nodes.map((product, index) => {
                                if (product == null) {
                                    return null;
                                }
                                return (
                                    <div
                                        key={product.id}
                                        className=""
                                    >
                                        <ProductCard product={product} />
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex items-center justify-center mt-6">
                            <NextLink
                                style={{
                                    background: Colors.primary,
                                    borderRadius: '9999px',
                                    color: Colors.textSecondary,
                                }}
                                className="text-2xl md:text-2xl text-center px-3.5 py-1.5 rounded-lg ft-text-main max-md:w-full w-80 flex items-center justify-center">
                                {isLoading === true ? (
                                    <div className="lds-dual-ring lds-dual-ring-white !w-8 !h-8" />
                                )
                                    : 'Load more'}
                            </NextLink>
                        </div>
                    </>
                )
            }}
        </Pagination>
    )
}
