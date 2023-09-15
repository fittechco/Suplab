import React, { useEffect, useRef, useState } from 'react'
import { App } from '../api/type'
import Header from './Header'
import Footer from './Footer'
type Props = {
    children: React.ReactNode
    layout: App.Shopify.Layout
}

const Layout = (props: Props) => {
    return (
        <div className=''>
            <Header layout={props.layout} />
            <div className="content">
                {props.children}
            </div>
            <Footer layout={props.layout} />
        </div>
    )
}

export default Layout