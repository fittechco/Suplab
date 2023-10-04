import FTicons from 'app/ft-lib/FTicon'
import { Colors } from 'app/ft-lib/shared'
import React, { useRef, useState } from 'react'

type Props = {
    title: string
    details: string
}

function Acordion(props: Props) {
    const [showAcordion, setShowAcordion] = useState(false);
    const accordionRef = useRef<HTMLParagraphElement | null>(null);

    return (
        <div
            style={{
                borderColor: Colors.secondary,
                overflow: 'hidden',
            }}
            className='product-description border-b-2 fade-border'>
            <div
                onClick={() => {
                    setShowAcordion(!showAcordion);
                }}
                className='flex justify-between items-center py-1 cursor-pointer'>
                <h1 className='text-xl md:text-2xl font-bold uppercase'>{props.title}</h1>
                <FTicons
                    className='md:w-6 md:h-6 w-5 h-5'
                    fill={Colors.secondary}
                    name={showAcordion === true ? "minus" : 'plus'} />
            </div>
            <p
                ref={accordionRef}
                style={{
                    color: Colors.text,
                    height: showAcordion ? accordionRef.current?.scrollHeight : '0px',
                    marginBlock: showAcordion ? '0.5rem' : '0px',
                    transition: 'all 0.3s ease-in-out',
                }}
                className='text-sm font-secondaryFont font-medium'>{props.details}</p>
        </div>
    )
}

export default Acordion