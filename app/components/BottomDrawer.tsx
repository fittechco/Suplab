import { Link } from "@remix-run/react";
import { useEffect, useMemo, useRef, useState } from "react";
import FTicons from "../ft-lib/FTicon";

type Props = {
  setShow: (show: boolean) => void
  show: boolean
  children: React.ReactNode
  headerTitle?: string
  closeIcon?: boolean
}

export default function BottomDrawer(props: Props) {
  const [animate, setAnimate] = useState(false)
  const drawerRef = useRef<HTMLDivElement | null>(null)

  const closeOnAnimationEnd = () => {
    if (drawerRef.current != null) {
      drawerRef.current.ontransitionend = () => {
        props.setShow(false)
      }
    }
  }

  const closeDrawer = () => {
    closeOnAnimationEnd()
    setAnimate(false)
  }

  useEffect(() => {
    // if the user click outside the search container, close the search

    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        closeDrawer()
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
      paddingTop: 90,
      opacity: animate ? 1 : 0,
      transition: "all 0.3s ease-in-out",
    }} className='search-container md:px-5 md:container backdrop-blur-sm'>
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
          transition: "all 0.2s ease-in-out",
          transform: animate ? "translateY(0%)" : "translateY(100%)",
        }}
        className='search-wrapper flex flex-col items-start pt-5 backdrop-blur '>
        <div className="drawer-header container flex justify-between items-center w-full">
          {props.headerTitle != null && <h2 className="drawer-title text-[#4A4A49] text-bold text-2xl">
            {props.headerTitle}
          </h2>}
          {props.closeIcon != null &&
            <div className="drawer-close-icon" onClick={() => closeDrawer()}><FTicons icon="close" className="close-icon" /></div>
          }        </div>
        {props.children}
      </div>
    </div >
  )
}
