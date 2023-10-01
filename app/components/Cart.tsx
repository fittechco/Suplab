import React from 'react'

type Props = {
    showCart: boolean
    setShowCart: (show: boolean) => void
}

export default function Cart(props: Props) {
    return (
        <div style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1000
        }} className='cart-container'>
            <div className='cart-slider'>

            </div>
        </div>
    )
}
