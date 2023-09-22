import { Link } from "@remix-run/react";
import { useRef, useEffect } from "react";
import { Colors } from "../../ft-lib/shared";
import { App } from "../../api/type";

export default function SubMenuPopup(props: { items: App.Shopify.NavMenu["items"], isTop: boolean, showSub: boolean }) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            style={{
                zIndex: props.showSub ? 100 : -1,
                width: '100%',
                height: 'fit-content',
                transition: "all 0.3s ease-in-out",
            }}
            className='nav-menu__sub flex justify-between min-h-[30vh] origin-center ease-in-out  z-10 p-5'>
            <div
                className='wrapper  transition-none h-full relative flex justify-center items-start  rounded-b-3xl  gap-16 '>
                {props.items.map((subItem, index) => {
                    const subPathname = new URL(subItem.url).pathname;
                    return (
                        <div
                            key={subItem.title}
                            className='nav-menu-Item-container space-y-2 flex flex-col justify-start items-start'>
                            <div
                                style={{
                                    color: Colors.secondary,
                                    fontWeight: 600,
                                    fontSize: "15px"
                                }}
                                className='nav-menu__sub_item  ft-text-main'>
                                {subItem.title}
                            </div>
                            <div className="nav-submenus-container flex flex-col space-y-2">
                                {subItem.items?.map((subSubItem) => {
                                    const subSubPathname = new URL(subSubItem.url).pathname;
                                    return (
                                        <Link
                                            key={subSubItem.title}
                                            to={subSubPathname}
                                            style={{
                                                fontWeight: 500,
                                                fontSize: 15
                                            }}
                                            className='nav-menu__sub_item text-base  capitalize'>
                                            {subSubItem.title}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="header-featured-collections space-y-4">
                <div
                    style={{
                        width: 370,
                        height: 180,
                        borderRadius: 12,
                        overflow: "hidden",
                    }}
                    className="featured-collectio-1 relative card-shadow">
                    <img
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        src="https://cdn.shopify.com/s/files/1/0814/6046/1881/products/ed93ff84-6899-417d-bbc2-ca55e5b4157b.__CR0_0_970_600_PT0_SX970_V1.png?v=1694640158" />
                    <div style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        padding: "20px",
                        fontSize: "20px",
                        color: Colors.textSecondary,
                    }} className="flex justify-start items-end ft-text-main">
                        Featured Collection
                    </div>
                </div>
                <div
                    style={{
                        width: 370,
                        height: 180,
                        borderRadius: 12,
                        overflow: "hidden",
                    }}
                    className="featured-collectio-1 relative card-shadow">
                    <img
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        src="https://cdn.shopify.com/s/files/1/0814/6046/1881/files/61WjOJxw6CL._AC_SX679.jpg?v=1694899573" />
                    <div style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        padding: "20px",
                        fontSize: "20px",
                        color: Colors.textSecondary,
                    }} className="flex justify-start items-end ft-text-main">
                        Featured Collection
                    </div>
                </div>
            </div >
        </div >
    )
}