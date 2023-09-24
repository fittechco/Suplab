import React, { useEffect, useRef, useState } from 'react'
import { App } from '../api/type'
import Header from './Header/Header'
import Footer from './Footer'
import { FooterQuery, HeaderQuery, ShopLayoutQuery, } from 'storefrontapi.generated'
type Props = {
    children: React.ReactNode
    layout: {
        shop: ShopLayoutQuery["shop"]
        header: HeaderQuery
        footer: FooterQuery
    }
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