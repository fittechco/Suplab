import { Link } from '@remix-run/react'
import { Colors } from '../ft-lib/shared'
import type { ShopLayoutQuery, HeaderQuery, FooterQuery } from 'storefrontapi.generated'

type Props = {
    layout: {
        shop: ShopLayoutQuery["shop"]
        header: HeaderQuery
        footer: FooterQuery
    }
}

const Footer = (props: Props) => {
    return (
        <div
            style={{
                backgroundColor: Colors.offWhite,
                width: '100%',
            }}
            className="footer h-fit max-md:p-5 md:h-72">
            <div className="container h-full w-full flex flex-col md:flex-row gap-14 md:gap-20 items-center text-ellipsis tracking-wider justify-between">
                <div className="shop-name flex items-center gap-3">
                    <Link style={{
                        color: Colors.secondary,
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        fontStyle: 'italic',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                    }} to="/">{props.layout.shop?.name}</Link>
                </div>
                <div className='menus-Container flex gap-6'>
                    {
                        props.layout.footer.menu?.items.map((menu, index) => {
                            return (
                                <div key={menu.title} className="menu flex flex-col gap-2">
                                    <div className="title font-bold">{menu.title}</div>
                                    <div className="links flex flex-col gap-2">
                                        {menu.items.map((item, index) => {
                                            const itemRoute = new URL(item.url || "").pathname
                                            return (
                                                <Link key={itemRoute + index} to={itemRoute}>{item.title}</Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer