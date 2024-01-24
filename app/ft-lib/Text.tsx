import React from 'react'
import { Colors } from './shared'

type Props = {
    children: React.ReactNode
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "p" | "p2" | "p3"
    className?: string
    style?: React.CSSProperties
}
export const Text = (props: Props) => {
    const { children, type, className, style } = props
    switch (type) {
        case "h1":
            return (
                <h1
                    style={style}
                    className={`${className} header text-[44px] md:text-6xl lg:text-7xl font-bold capitalize leading-tight`}
                >
                    {children}
                </h1>
            )
        case "h2":
            return (
                <h2 className={`${className} text-4xl md:text-[44px] lg:text-6xl font-bold  capitalize leading-tight`} style={style}>
                    {children}
                </h2>
            )
        case "h3":
            return (
                <h3 className={`${className}  text-3xl md:text-4xl lg:text-[44px] font-bold capitalize leading-tight`} style={style}>
                    {children}
                </h3>
            )
        case "h4":
            return (
                <h4 className={`${className} text-2xl md:text-3xl lg:text-4xl font-bold capitalize leading-tight`} style={style}>
                    {children}
                </h4>
            )
        case "h5":
            return (
                <h4 className={`${className} text-2xl lg:text-3xl font-bold capitalize leading-tight`} style={style}>
                    {children}
                </h4>
            )
        case "h6":
            return (
                <h5 className={`${className} text-lg md:text-xl lg:text-2xl  font-bold capitalize leading-tight`} style={style}>
                    {children}
                </h5>
            )
        case "h7":
            return (
                <h6 className={`${className} text-base md:text-lg lg:text-xl  font-bold capitalize leading-tight`} style={style}>
                    {children}
                </h6>
            )
        case "p":
            return (
                <p className={`${className} text-xl md:text-2xl !leading-normal `} style={style}>
                    {children}
                </p>
            )
        case "p2":
            return (
                <p className={`${className} text-lg md:text-xl lg:text-2xl !leading-normal`} style={style}>
                    {children}
                </p>
            )
        case "p3":
            return (
                <p className={`${className} text-base md:text-lg lg:text-xl !leading-normal`} style={style}>
                    {children}
                </p>
            )
        default:
            return (
                <h1 className={`${className} text-5xl font-bold`} style={style}>
                    {children}
                </h1>
            )
    }
}
