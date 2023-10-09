import React from 'react'
import { Colors } from '~/app/ft-lib/shared'
import logoImage from "../../../public/suplabLogo.png"

export default function ProductSkeleton() {
    return (
        <div
            style={{
                border: `1px solid rgb(240, 238, 232)`,
                borderRadius: 12,
                height: '100%',
                width: 'auto',
            }}
            className='product-card-sekeleton flex flex-col gap-3'>
            <div
                style={{
                    borderRadius: 12,
                }}
                className="placeholder-skeleton  z-10 md:h-[260px] h-[200px] w-full max-md:h-[200px] max-md:w-[200px]">
                <div className="placeholder-image flex justify-center items-center h-full w-full">
                    <img
                        src={logoImage}
                        className="object-contain w-20 h-20"
                    />
                </div>
            </div>
            <div
                style={{
                }}
                className="flex flex-col p-1 gap-1">
                <div
                    style={{
                        color: Colors.secondaryDark,
                        height: '1.25rem',
                        width: '90%',
                    }}
                    className='product-card-title-skeleton placeholder-skeleton rounded-full' />
                <div
                    style={{
                        color: Colors.secondaryDark,
                        height: '1.25rem',
                        width: '60%',
                    }}
                    className='product-card-price-skeleton placeholder-skeleton rounded-full' />
            </div>


        </div>
    )
}
