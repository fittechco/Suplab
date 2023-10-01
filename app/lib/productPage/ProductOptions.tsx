import { Colors } from 'app/ft-lib/shared'
import React from 'react'
import { ProductByHandleQuery, ProductQuery } from 'storefrontapi.generated'


// removing the undefined type from the following line 



type Props = {
    options: NonNullable<ProductByHandleQuery["productByHandle"]>["options"]
}
export default function ProductOptions(props: Props) {
    const { options } = props
    return (
        <div className='options flex flex-col gap-5'>
            {options.map((option, index) => {
                return (
                    <div key={index} className='option  flex flex-col'>
                        <h1 className='text-xl font-bold uppercase'>{option.name}</h1>
                        <div className='values flex gap-3 flex-wrap mt-2'>
                            {option.values.map((value, index) => {
                                return (
                                    <div
                                        style={{
                                            background: Colors.secondary,
                                            color: Colors.textSecondary,
                                            borderRadius: '9999px',
                                        }}
                                        key={index} className='value px-3 py-1'>
                                        <p className='text-sm md:text-base font-medium capitalize tracking-wider'>{value}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
