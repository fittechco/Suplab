import Storelogo from "~/public/suplabLogo.png"
import { UseShopStore } from "../root";
import { useEffect, useRef } from "react";

function RoutesLoader() {
    const routesLoader = UseShopStore((state) => state.routesLoader);
    const routesLoaderRef = useRef<HTMLDivElement | null>(null);
    // useEffect(() => {
    //     if (routesLoaderRef.current == null) {
    //         return;
    //     }
    //     if (routesLoader === true) {
    //         routesLoaderRef.current.style.zIndex = '9999';
    //     } else {
    //         setTimeout(() => {
    //             if (routesLoaderRef.current == null) {
    //                 return;
    //             }
    //             routesLoaderRef.current.style.zIndex = '-1';
    //         }, 1)
    //     }
    // }, [routesLoader]);

    return (
        <div
            ref={routesLoaderRef}
            style={{
                opacity: routesLoader ? 1 : 0,
                transition: 'all 0.3s ease',
                zIndex: routesLoader ? 9999 : -1,
            }}
            className="loader-container fixed top-0 left-0 w-full h-full">
            <div className="loader">
                <img src={Storelogo} alt="Store Logo" className="store-logo" />
            </div>
        </div>
    );
}

export default RoutesLoader;