import { UseShopStore } from "../root";
import logoImage from "../../public/suplabLogo.png"
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactImageMagnify from 'react-image-magnify';
import resizeImage from "./resizeImages";

function Placeholder(props: {
    style?: React.CSSProperties
}) {
    const shop = UseShopStore(state => state.shop);
    const { style } = props;
    return (
        <div
            style={style}
            className="placeholder-skeleton h-full z-10">
            <div className="placeholder-image flex justify-center items-center">
                <img
                    src={logoImage}
                    className="object-contain w-20 h-20"
                />
            </div>
        </div>
    );
}


type Props = {
    src: string
    style?: React.CSSProperties
    alt: string
    className?: string
    zoom?: boolean
}

function LazyImage(props: Props) {
    const { src, } = props;
    const style = {
        ...props.style,
        overflow: 'hidden',
        // border: `1px solid ${Colors.bg}`,
    }
    return (
        <div className=' h-full w-full flex items-center justify-center'>
            <LazyLoadImage
                style={{
                    ...style,
                }}
                src={src}
                alt={props.alt}
                placeholder={<Placeholder style={style} />}
                className={`lazy ${props.className} bg-transparent z-20 relative`}
            />
        </div>
    );
}

export default LazyImage; 