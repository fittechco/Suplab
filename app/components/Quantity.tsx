import FTicons from 'app/ft-lib/Icon'
import { Colors } from 'app/ft-lib/shared'
import React from 'react'

type Props = {
    value: number,
    onChange: (value: number) => void
}

export default function Quantity(props: Props) {
    const { value, onChange } = props
    return (
        <div
            className='quantity w-fit flex items-center '
            style={{
                backgroundColor: Colors.secondary,
                borderRadius: '9999px',
            }} >
            <div
                onClick={() => {
                    if (value > 1) {
                        onChange(value - 1)
                    }
                }}
                className='plus h-full flex items-center py-3 px-6 '>
                <FTicons style={{
                    width: 24,
                    height: 24
                }} fill={Colors.offWhite} name='minus' />
            </div>

            <div
                className='quantity-number text-xl border-l border-r bold py-3 px-6'
                style={{
                    color: Colors.textSecondary,
                    borderColor: Colors.secondaryLight
                }}
            >{value}</div>
            <div
                onClick={() => {
                    onChange(value + 1)
                }}
                className='plus h-full flex items-center py-3 px-6 '>
                <FTicons style={{
                    width: 24,
                    height: 24
                }} fill={Colors.offWhite} name='plus' />
            </div>
        </div>
    )
}
