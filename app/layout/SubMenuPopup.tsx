import { Link } from "@remix-run/react";
import { useRef, useEffect } from "react";
import { Colors } from "~/ft-lib/shared";
import { App } from "../api/type";

export default function SubMenuPopup(props: { items: App.Shopify.NavMenu["items"], isTop: boolean, showSub: boolean }) {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const container = containerRef.current;
        if (container === null) {
            return
        }
        if (props.showSub === true) {
            container.style.display = "block";
            container.style.pointerEvents = "auto";
            setTimeout(() => {
                container.style.opacity = "1";
                container.style.transform = "translateX(-50%)";
            }, 10);
        } else {
            container.style.transform = "translateX(100%)";
            container.style.pointerEvents = "none !important";
            container.style.opacity = "0";
            setTimeout(() => {
                container.style.transform = "translateX(-100%)";
                container.style.pointerEvents = "none";
            }, 180);
        }
    }, [props.showSub]);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: '100%',
                zIndex: props.showSub ? 100 : -1,
                width: '100%',
                left: "50%",
                backgroundColor: "rgba(69, 69, 69, 0.75)",
                boxShadow: "0px 6px 9px 0px rgba(0, 0, 0, 0.13)",
                borderRadius: "0 0 30px 30px",
                backdropFilter: "blur(7px)",
                transition: "all 0.3s ease-in-out",
                opacity: 0,
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            className='nav-menu__sub min-h-[30vh] origin-center  ease-in-out  z-10'>
            <div
                className='wrapper  transition-none h-full relative flex justify-center items-start  rounded-b-3xl p-5 gap-16 '>
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
                                }}
                                className='nav-menu__sub_item text-sm tracking-widest lg:text-base transition-all ease-out duration-300 uppercase'>
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
                                                fontWeight: 400,
                                            }}
                                            className='nav-menu__sub_item text-base text-neutral-200 hover:text-white  tracking-wide transition-all ease-out duration-300 capitalize'>
                                            {subSubItem.title}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div >
    )
}