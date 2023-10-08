import { Link } from "@remix-run/react";
import SearchController from "app/ft-lib/ft-server/controllers/SearchController";
import { Colors } from "app/ft-lib/shared";
import { useEffect, useMemo, useRef, useState } from "react";
import type { SearchProductsQuery } from "storefrontapi.generated";
// import _ from "lodash";
import ProductCard from "./ProductCard";

type Props = {
  setShow: (show: boolean) => void
  show: boolean
  children: React.ReactNode
}

export default function BottomDrawer(props: Props) {
  const [animate, setAnimate] = useState(false)
  const drawerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // if the user click outside the search container, close the search
    const closeOnAnimationEnd = () => {
      if (drawerRef.current != null) {
        drawerRef.current.ontransitionend = () => {
          props.setShow(false)
        }
      }
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        closeOnAnimationEnd()
        setAnimate(false)
        document.removeEventListener("mousedown", handleClickOutside);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [])

  useEffect(() => {
    if (props.show === true) {
      setAnimate(true)
    }
    return () => {
      setAnimate(false)
    }
  }, [props.show])

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      margin: "auto",
      width: "100%",
      height: "100%",
      zIndex: 100,
      background: "rgba(250, 249, 246, 0.10)",
      // background: "rgba(200, 200, 200, 0.40)",
      paddingTop: 90,
      opacity: animate ? 1 : 0,
      transition: "all 0.3s ease-in-out",
      backdropFilter: "blur(2.5px)",
    }} className='search-container md:px-5 md:container'>
      <div
        ref={drawerRef}
        style={{
          height: "100%",
          width: "100%",
          overflow: "hidden",
          position: "relative",
          zIndex: 100,
          borderRadius: "24px 24px 0px 0px",
          border: "0.5px solid #93C147",
          background: "rgba(250, 249, 246, 0.90)",
          // background: "hsla(45, 29%, 97%, 0.4)",
          transition: "all 0.2s ease-in-out",
          transform: animate ? "translateY(0%)" : "translateY(100%)",
        }}
        className='search-wrapper flex flex-col gap-4 items-start pt-5 backdrop-blur '>
          {props.children}
        </div>
    </div >
  )
}
