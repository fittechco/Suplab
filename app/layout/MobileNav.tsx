import { Link } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import FTicons from "~/ft-lib/Icon";
import { Colors } from "~/ft-lib/shared";
import { App } from "../api/type";
import { UseShopStore } from "~/root";

type MobileNavItemProps = {
    menu: App.Shopify.Layout["header"]["items"][0];
    style?: React.CSSProperties;
}
function MobileNavItem(props: MobileNavItemProps) {
    const [showSub, setShowSub] = useState(false);
    const itemColor = showSub ? Colors.offBlack : Colors.secondary;
    const handleItemClick = () => {
        setShowSub(!showSub);
    };

    return (
        <div
            style={{
                textDecoration: 'none',
                color: Colors.text,
                width: '100%',
                height: 'fit-content',
                transition: 'all 0.5s ease',
                borderBottom: `1.6px solid ${itemColor}`,
                ...props.style,
            }}
            className={`navMenu font-mainFont  ${showSub ? 'space-y-3' : 'space-y-0'} py-2 `}
        >
            <div
                onClick={handleItemClick}
                className="flex justify-between items-center"
            >
                <Link
                    style={{
                        textDecoration: 'none',
                        color: itemColor,
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                    }}
                    className="navMenu__title text-base ft-text-main"
                    to={props.menu.url}
                >
                    {props.menu.title}
                </Link>
                {/* {props.menu.items?.length > 0 && ( */}
                {true && (
                    <FTicons
                        style={{
                            transform: showSub ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease',
                            transformOrigin: 'center center',
                            width: '1.1rem',
                            height: '1.1rem',
                            opacity: showSub ? 1 : 0.8,
                        }}
                        className="navMenu__icon"
                        fill={Colors.secondary}
                        name="chev-down"
                    />
                )}
            </div>
            {props.menu.items?.length > 0 && (
                <div
                    style={{
                        textDecoration: 'none',
                        color: Colors.text,
                        width: '100%',
                        transition: 'all 0.3s ease',
                        opacity: showSub ? 1 : 0,
                        height: showSub ? 'auto' : '0',
                        overflow: 'hidden',
                    }}
                    className="navMenu__items space-y-2 ml-2"
                >
                    {props.menu.items?.map((item, index) => (
                        <MobileNavItem style={{
                            transform: showSub ? 'translateY(0)' : 'translateY(-60%)',
                            opacity: showSub ? 1 : 0,
                            transitionDelay: `${index * 0.1}s`,
                        }} key={index} menu={item} />
                    ))}
                </div>
            )}
        </div>
    );
}


type Props = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
export default function MobileNav(props: Props) {
    const header = UseShopStore((state) => state.header);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (props.isOpen === true) {
            setAnimate(true);
        }
    }, [props.isOpen]);
    console.log(header, "layout");


    return (
        <div style={{
            height: "100%",
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 102,
            backgroundColor: Colors.bg,
            margin: 0,
            transform: animate ? "translateX(0%)" : "translateX(-100%)",
        }} className='mobileNav transition-all ease-in-out duration-500 md:hidden'>
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    overflowY: "scroll",
                }}
                className='mobileNav__container flex flex-col gap-5 justify-start items-start p-3'>
                <div className="navHeader w-full flex justify-end">
                    <div
                        onClick={() => {
                            setAnimate(false);
                            setTimeout(() => {
                                props.setIsOpen(false);
                            }, 500);
                        }}
                        className='navHeader__close'>
                        <FTicons
                            fill={"none"}
                            style={{
                                stroke: Colors.secondary,
                                width: "28px",
                                height: "28px",
                            }} name='close' />
                    </div>
                </div>
                <div className='navMenus space-y-6 w-full '>
                    {header?.items?.map((menu, index) => {
                        console.log(menu, "menu");
                        return (
                            <MobileNavItem
                                key={index}
                                menu={menu} />
                        )
                    })}
                </div>
            </div>
        </div >
    )
}