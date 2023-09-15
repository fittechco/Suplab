import { CSSProperties, MouseEventHandler } from "react"

export default function FTicons(
    { name,
        handle,
        className,
        style,
        fill
    }: {
        name: "lecture"
        | "search"
        | "revenue"
        | "events"
        | "stats"
        | "plus"
        | "shortArrow"
        | "notification"
        | "close"
        | "filter"
        | "options"
        | "profile"
        | "statistics"
        | "info"
        | "edit"
        | "trash"
        | "nav"
        | "expenses"
        | "income"
        | "referal"
        | "leftArrow"
        | "indexLine"
        | "cart"
        | "chev-down"
        | "bag"
        handle?: MouseEventHandler | undefined
        className?: string
        style?: CSSProperties
        fill?: string
    }
) {
    switch (name) {
        case "bag":
            return (
                <svg
                    style={style}
                    fill={fill}
                    width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 6H16.5C16.5 4.80653 16.0259 3.66193 15.182 2.81802C14.3381 1.97411 13.1935 1.5 12 1.5C10.8065 1.5 9.66193 1.97411 8.81802 2.81802C7.97411 3.66193 7.5 4.80653 7.5 6H3.75C3.35218 6 2.97064 6.15804 2.68934 6.43934C2.40804 6.72064 2.25 7.10218 2.25 7.5V18.75C2.25 19.1478 2.40804 19.5294 2.68934 19.8107C2.97064 20.092 3.35218 20.25 3.75 20.25H20.25C20.6478 20.25 21.0294 20.092 21.3107 19.8107C21.592 19.5294 21.75 19.1478 21.75 18.75V7.5C21.75 7.10218 21.592 6.72064 21.3107 6.43934C21.0294 6.15804 20.6478 6 20.25 6ZM12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6H9C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3ZM20.25 18.75H3.75V7.5H7.5V9C7.5 9.19891 7.57902 9.38968 7.71967 9.53033C7.86032 9.67098 8.05109 9.75 8.25 9.75C8.44891 9.75 8.63968 9.67098 8.78033 9.53033C8.92098 9.38968 9 9.19891 9 9V7.5H15V9C15 9.19891 15.079 9.38968 15.2197 9.53033C15.3603 9.67098 15.5511 9.75 15.75 9.75C15.9489 9.75 16.1397 9.67098 16.2803 9.53033C16.421 9.38968 16.5 9.19891 16.5 9V7.5H20.25V18.75Z" fill="#4A4A49" />
                </svg>


            )
        case "cart":
            return (
                <svg
                    style={style}
                    width="32" height="33" viewBox="0 0 32 33" fill={fill} xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.7675 7.85875C27.6736 7.74642 27.5562 7.65607 27.4236 7.59408C27.291 7.53209 27.1464 7.49998 27 7.5H6.835L6.22375 4.1425C6.14003 3.68167 5.89723 3.26484 5.53767 2.96468C5.17812 2.66452 4.72462 2.50007 4.25625 2.5H2C1.73478 2.5 1.48043 2.60536 1.29289 2.79289C1.10536 2.98043 1 3.23478 1 3.5C1 3.76522 1.10536 4.01957 1.29289 4.20711C1.48043 4.39464 1.73478 4.5 2 4.5H4.25L7.445 22.0362C7.53911 22.5563 7.76895 23.0423 8.11125 23.445C7.63881 23.8863 7.29781 24.4498 7.12607 25.073C6.95433 25.6962 6.95856 26.3549 7.13829 26.9759C7.31801 27.5968 7.66622 28.1559 8.14428 28.5911C8.62235 29.0263 9.2116 29.3205 9.8467 29.4412C10.4818 29.562 11.1379 29.5044 11.7423 29.275C12.3467 29.0456 12.8758 28.6533 13.2708 28.1416C13.6658 27.6299 13.9114 27.0187 13.9804 26.3759C14.0493 25.7332 13.9388 25.0838 13.6613 24.5H19.3388C19.115 24.9684 18.9993 25.481 19 26C19 26.6922 19.2053 27.3689 19.5899 27.9445C19.9744 28.5201 20.5211 28.9687 21.1606 29.2336C21.8002 29.4985 22.5039 29.5678 23.1828 29.4327C23.8618 29.2977 24.4854 28.9644 24.9749 28.4749C25.4644 27.9854 25.7977 27.3617 25.9328 26.6828C26.0678 26.0039 25.9985 25.3001 25.7336 24.6606C25.4687 24.0211 25.0201 23.4744 24.4445 23.0899C23.8689 22.7053 23.1922 22.5 22.5 22.5H10.3963C10.1621 22.5 9.93532 22.4177 9.75554 22.2677C9.57576 22.1176 9.45436 21.9092 9.4125 21.6787L9.01625 19.5H23.5163C24.2188 19.4999 24.8991 19.2532 25.4384 18.803C25.9777 18.3527 26.3419 17.7275 26.4675 17.0362L27.9875 8.67875C28.0132 8.5343 28.0069 8.38596 27.9688 8.24424C27.9308 8.10253 27.8621 7.97092 27.7675 7.85875ZM12 26C12 26.2967 11.912 26.5867 11.7472 26.8334C11.5824 27.08 11.3481 27.2723 11.074 27.3858C10.7999 27.4993 10.4983 27.5291 10.2074 27.4712C9.91639 27.4133 9.64912 27.2704 9.43934 27.0607C9.22956 26.8509 9.0867 26.5836 9.02882 26.2926C8.97094 26.0017 9.00065 25.7001 9.11418 25.426C9.22771 25.1519 9.41997 24.9176 9.66665 24.7528C9.91332 24.588 10.2033 24.5 10.5 24.5C10.8978 24.5 11.2794 24.658 11.5607 24.9393C11.842 25.2206 12 25.6022 12 26ZM24 26C24 26.2967 23.912 26.5867 23.7472 26.8334C23.5824 27.08 23.3481 27.2723 23.074 27.3858C22.7999 27.4993 22.4983 27.5291 22.2074 27.4712C21.9164 27.4133 21.6491 27.2704 21.4393 27.0607C21.2296 26.8509 21.0867 26.5836 21.0288 26.2926C20.9709 26.0017 21.0007 25.7001 21.1142 25.426C21.2277 25.1519 21.42 24.9176 21.6666 24.7528C21.9133 24.588 22.2033 24.5 22.5 24.5C22.8978 24.5 23.2794 24.658 23.5607 24.9393C23.842 25.2206 24 25.6022 24 26ZM24.5 16.6787C24.458 16.9098 24.3361 17.1187 24.1555 17.2689C23.975 17.419 23.7473 17.5008 23.5125 17.5H8.6525L7.19875 9.5H25.8013L24.5 16.6787Z" fill="inherit" />
                </svg>
            )
        case "chev-down":
            return (
                <svg
                    style={style}
                    fill={fill}
                    width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3519 4.136C14.1644 3.94853 13.9101 3.84321 13.6449 3.84321C13.3798 3.84321 13.1255 3.94853 12.9379 4.136L7.98793 9.086L3.03793 4.136C2.84933 3.95384 2.59672 3.85305 2.33453 3.85533C2.07233 3.8576 1.82152 3.96277 1.63611 4.14818C1.4507 4.33359 1.34553 4.5844 1.34325 4.8466C1.34098 5.1088 1.44177 5.3614 1.62393 5.55L7.28093 11.207C7.46846 11.3945 7.72276 11.4998 7.98793 11.4998C8.25309 11.4998 8.5074 11.3945 8.69493 11.207L14.3519 5.55C14.5394 5.36247 14.6447 5.10816 14.6447 4.843C14.6447 4.57784 14.5394 4.32353 14.3519 4.136Z" fill="#202020" />
                </svg>
            )
        case "lecture":
            return (
                <svg style={style} className={`${className} flex-shrink-0`} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-inherit" d="M41 34C42.0609 34 43.0783 33.5786 43.8284 32.8284C44.5786 32.0783 45 31.0609 45 30V8C45 6.93913 44.5786 5.92172 43.8284 5.17157C43.0783 4.42143 42.0609 4 41 4H19.92C20.62 5.22 21 6.6 21 8H41V30H23V34M31 14V18H19V44H15V32H11V44H7V28H4V18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H31ZM17 8C17 9.06087 16.5786 10.0783 15.8284 10.8284C15.0783 11.5786 14.0609 12 13 12C11.9391 12 10.9217 11.5786 10.1716 10.8284C9.42143 10.0783 9 9.06087 9 8C9 6.93913 9.42143 5.92172 10.1716 5.17157C10.9217 4.42143 11.9391 4 13 4C14.0609 4 15.0783 4.42143 15.8284 5.17157C16.5786 5.92172 17 6.93913 17 8Z" />
                </svg>
            )
        case "search":
            return (
                <svg style={style} className={className} width="24" height="24" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-inherit" d="M18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.371 4.888 14.113C3.62933 12.8543 3 11.3167 3 9.5C3 7.68333 3.62933 6.14567 4.888 4.887C6.146 3.629 7.68333 3 9.5 3C11.3167 3 12.8543 3.629 14.113 4.887C15.371 6.14567 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.325 18.925C20.5083 19.1083 20.6 19.3333 20.6 19.6C20.6 19.8667 20.5 20.1 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5627 11.8127 14 10.75 14 9.5C14 8.25 13.5627 7.18733 12.688 6.312C11.8127 5.43733 10.75 5 9.5 5C8.25 5 7.18733 5.43733 6.312 6.312C5.43733 7.18733 5 8.25 5 9.5C5 10.75 5.43733 11.8127 6.312 12.688C7.18733 13.5627 8.25 14 9.5 14Z" fill="" />
                </svg>
            )
        case "revenue":
            return (
                <svg style={style} className={`${className} flex-shrink-0`} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.24 19.76C33.1155 18.6355 31.5903 18.0037 30 18.0037C28.4097 18.0037 26.8845 18.6355 25.76 19.76C24.6355 20.8845 24.0037 22.4097 24.0037 24C24.0037 25.5903 24.6355 27.1155 25.76 28.24C26.3168 28.7968 26.9778 29.2385 27.7053 29.5398C28.4328 29.8412 29.2126 29.9963 30 29.9963C30.7874 29.9963 31.5672 29.8412 32.2947 29.5398C33.0222 29.2385 33.6832 28.7968 34.24 28.24C34.7968 27.6832 35.2385 27.0222 35.5398 26.2947C35.8412 25.5672 35.9963 24.7874 35.9963 24C35.9963 23.2126 35.8412 22.4328 35.5398 21.7053C35.2385 20.9778 34.7968 20.3168 34.24 19.76ZM14 12V36H46V12H14ZM42 28C40.94 28 39.92 28.42 39.18 29.18C38.42 29.92 38 30.94 38 32H22C22 30.94 21.58 29.92 20.82 29.18C20.08 28.42 19.06 28 18 28V20C19.06 20 20.08 19.58 20.82 18.82C21.58 18.08 22 17.06 22 16H38C38 17.06 38.42 18.08 39.18 18.82C39.92 19.58 40.94 20 42 20V28ZM10 16H6C4.9 16 4 15.1 4 14C4 12.9 4.9 12 6 12H10V16ZM10 26H4C2.9 26 2 25.1 2 24C2 22.9 2.9 22 4 22H10V26ZM10 36H2C0.896 36 0 35.1 0 34C0 32.9 0.896 32 2 32H10V36Z" fill="#F1F0F0" />
                </svg>

            )
        case "events":
            return (
                <svg style={style} className={`${className} flex-shrink-0`} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 44V40H38V20H10V28H6V12C6 10.9 6.392 9.958 7.176 9.174C7.96 8.39 8.90133 7.99867 10 8H12V4H16V8H32V4H36V8H38C39.1 8 40.042 8.392 40.826 9.176C41.61 9.96 42.0013 10.9013 42 12V40C42 41.1 41.608 42.042 40.824 42.826C40.04 43.61 39.0987 44.0013 38 44H30ZM16 48L13.2 45.2L18.35 40H2V36H18.35L13.2 30.8L16 28L26 38L16 48Z" fill="#F1F0F0" />
                </svg>

            )
        case "stats":
            return (
                <svg style={style} className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 34H14V20H18V34ZM26 34H22V14H26V34ZM34 34H30V26H34V34ZM38 38H10V10H38V38.2M38 6H10C7.8 6 6 7.8 6 10V38C6 40.2 7.8 42 10 42H38C40.2 42 42 40.2 42 38V10C42 7.8 40.2 6 38 6Z" fill="#757575" />
                    <line x1="38" y1="40.1213" x2="39.1213" y2="39" stroke="#757575" strokeWidth="3" strokeLinecap="round" />
                </svg>
            )
        case "plus":
            return (
                <svg style={style} className={`${className}`} width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.5 57C35.65 57 34.938 56.712 34.364 56.136C33.788 55.562 33.5 54.85 33.5 54V39H18.5C17.65 39 16.937 38.712 16.361 38.136C15.787 37.562 15.5 36.85 15.5 36C15.5 35.15 15.787 34.437 16.361 33.861C16.937 33.287 17.65 33 18.5 33H33.5V18C33.5 17.15 33.788 16.437 34.364 15.861C34.938 15.287 35.65 15 36.5 15C37.35 15 38.063 15.287 38.639 15.861C39.213 16.437 39.5 17.15 39.5 18V33H54.5C55.35 33 56.062 33.287 56.636 33.861C57.212 34.437 57.5 35.15 57.5 36C57.5 36.85 57.212 37.562 56.636 38.136C56.062 38.712 55.35 39 54.5 39H39.5V54C39.5 54.85 39.213 55.562 38.639 56.136C38.063 56.712 37.35 57 36.5 57Z" fill="#F1F0F0" />
                </svg>

            )
        case "shortArrow":
            return (
                <svg style={style} className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14.975C11.8667 14.975 11.7377 14.95 11.613 14.9C11.4877 14.85 11.3833 14.7834 11.3 14.7L6.69999 10.1C6.51665 9.91672 6.42499 9.68338 6.42499 9.40005C6.42499 9.11671 6.51665 8.88338 6.69999 8.70005C6.88332 8.51672 7.11665 8.42505 7.39999 8.42505C7.68332 8.42505 7.91665 8.51672 8.09999 8.70005L12 12.6L15.9 8.70005C16.0833 8.51672 16.3167 8.42505 16.6 8.42505C16.8833 8.42505 17.1167 8.51672 17.3 8.70005C17.4833 8.88338 17.575 9.11671 17.575 9.40005C17.575 9.68338 17.4833 9.91672 17.3 10.1L12.7 14.7C12.6 14.8 12.4917 14.8707 12.375 14.912C12.2583 14.954 12.1333 14.975 12 14.975Z" fill="black" />
                </svg>
            )
        case "notification":
            return (
                <svg style={style} className={`${className}`} onMouseEnter={handle} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6667 35H23.3333C23.3333 36.8333 21.8333 38.3333 20 38.3333C18.1667 38.3333 16.6667 36.8333 16.6667 35ZM35 31.6667V33.3333H5V31.6667L8.33333 28.3333V18.3333C8.33333 13.1667 11.6667 8.66667 16.6667 7.16667V6.66667C16.6667 4.83333 18.1667 3.33333 20 3.33333C21.8333 3.33333 23.3333 4.83333 23.3333 6.66667V7.16667C28.3333 8.66667 31.6667 13.1667 31.6667 18.3333V28.3333L35 31.6667ZM28.3333 18.3333C28.3333 13.6667 24.6667 10 20 10C15.3333 10 11.6667 13.6667 11.6667 18.3333V30H28.3333V18.3333Z" fill="#745AA0" />
                </svg>
            )
        case "close":
            return (
                <svg style={style} className={` ${className} cursor-pointer `} width="24" height="24" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
                    <path className="stroke-inherit " d="M6.75806 17.243L12.0011 12L17.2441 17.243M17.2441 6.757L12.0001 12L6.75806 6.757" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            )
        case "filter":
            return (
                <svg style={style} className={`${className}`} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 18.5H13C13.55 18.5 14 18.05 14 17.5C14 16.95 13.55 16.5 13 16.5H11C10.45 16.5 10 16.95 10 17.5C10 18.05 10.45 18.5 11 18.5ZM3 7.5C3 8.05 3.45 8.5 4 8.5H20C20.55 8.5 21 8.05 21 7.5C21 6.95 20.55 6.5 20 6.5H4C3.45 6.5 3 6.95 3 7.5ZM7 13.5H17C17.55 13.5 18 13.05 18 12.5C18 11.95 17.55 11.5 17 11.5H7C6.45 11.5 6 11.95 6 12.5C6 13.05 6.45 13.5 7 13.5Z" fill="#F1F0F0" />
                </svg>
            )
        case "options":
            return (
                <svg style={style} className={`${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-inherit" d="M9.11233 21.0094V20.372C9.12639 20.3204 9.14983 20.2735 9.1592 20.222C9.36545 18.8813 10.4811 17.8219 11.7889 17.7329C13.2514 17.6298 14.4889 18.4641 14.892 19.8235C14.9436 20.0016 14.9811 20.1891 15.0279 20.3719V21.0094C15.0139 21.0516 14.9904 21.0891 14.9857 21.136C14.7842 22.3735 13.8936 23.3157 12.6748 23.5828C12.5811 23.6016 12.4873 23.6297 12.3936 23.6532H11.7561C11.7139 23.6391 11.6717 23.6157 11.6295 23.611C10.4107 23.4141 9.48264 22.5469 9.20137 21.3422C9.17324 21.225 9.14045 21.1172 9.11233 21.0094ZM15.028 2.99072L15.0279 3.62827C15.0139 3.67983 14.9904 3.72671 14.9857 3.77827C14.7748 5.12827 13.6545 6.18296 12.3326 6.26733C10.8748 6.36108 9.64199 5.51733 9.24355 4.15327C9.19199 3.97981 9.15449 3.80171 9.1123 3.62825V2.99075C9.12637 2.94856 9.1498 2.91106 9.15918 2.86887C9.38418 1.65012 10.092 0.853247 11.2732 0.47356C11.4279 0.421997 11.592 0.393872 11.7514 0.351685H12.3889C12.4311 0.365747 12.4732 0.389185 12.5154 0.393872C13.7389 0.595435 14.6623 1.45793 14.9436 2.66262C14.9717 2.77512 14.9998 2.88293 15.028 2.99072ZM15.0279 11.6814V12.3189C15.0139 12.3704 14.9904 12.4173 14.9811 12.4689C14.7701 13.8142 13.6076 14.897 12.2951 14.9532C10.8186 15.0189 9.56699 14.1282 9.21543 12.7548C9.17793 12.6095 9.14512 12.4642 9.1123 12.3189V11.6814C9.12637 11.6298 9.1498 11.5829 9.15918 11.5314C9.36543 10.1861 10.5326 9.10322 11.8451 9.04231C13.3217 8.972 14.5732 9.86731 14.9248 11.2407C14.9623 11.3907 14.9951 11.5361 15.0279 11.6814Z" fill="#745AA0" />
                </svg>
            )
        case "profile":
            return (
                <svg style={style} className={`${className}`} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-inherit" d="M56.95 13.15L32.95 5.15C32.3326 4.94943 31.6675 4.94943 31.05 5.15L7.10004 13.125H7.05004L6.92504 13.175L6.77504 13.25L6.60004 13.325L6.50004 13.375L6.35004 13.475L6.27504 13.525L6.12504 13.625C6.12504 13.6383 6.11977 13.651 6.11039 13.6604C6.10102 13.6697 6.0883 13.675 6.07504 13.675L5.90004 13.825C5.90004 13.8316 5.89741 13.838 5.89272 13.8427C5.88803 13.8474 5.88167 13.85 5.87504 13.85L5.70004 14.05L5.65004 14.125C5.62393 14.1418 5.60157 14.1637 5.58436 14.1895C5.56715 14.2154 5.55547 14.2445 5.55004 14.275L5.47504 14.35L5.40004 14.475C5.37504 14.525 5.35004 14.55 5.35004 14.575L5.27504 14.725L5.22504 14.825L5.15004 15.05C5.13311 15.0806 5.12449 15.1151 5.12504 15.15C5.09725 15.2046 5.08027 15.264 5.07504 15.325C5.07504 15.35 5.05004 15.4 5.05004 15.425C5.05004 15.45 5.02504 15.55 5.02504 15.6V15.7C5.00199 15.7982 4.99356 15.8993 5.00004 16V36C5.00004 36.7956 5.31611 37.5587 5.87872 38.1213C6.44133 38.6839 7.20439 39 8.00004 39C8.79569 39 9.55875 38.6839 10.1214 38.1213C10.684 37.5587 11 36.7956 11 36V20.15L16.925 22.15C15.0958 25.6542 14.5469 29.687 15.3729 33.5527C16.199 37.4183 18.3483 40.8745 21.45 43.325C17.2062 45.2993 13.6025 48.4266 11.05 52.35C10.8334 52.6799 10.6838 53.0493 10.6099 53.4371C10.5359 53.8248 10.5391 54.2234 10.6192 54.6099C10.6993 54.9964 10.8547 55.3634 11.0766 55.6898C11.2986 56.0163 11.5826 56.2958 11.9125 56.5125C12.2425 56.7292 12.6119 56.8788 12.9996 56.9527C13.3874 57.0266 13.7859 57.0234 14.1724 56.9433C14.5589 56.8632 14.9259 56.7078 15.2524 56.4859C15.5788 56.264 15.8584 55.9799 16.075 55.65C17.7965 52.9929 20.1554 50.8088 22.9369 49.2966C25.7184 47.7844 28.8341 46.9922 32 46.9922C35.166 46.9922 38.2817 47.7844 41.0632 49.2966C43.8447 50.8088 46.2036 52.9929 47.925 55.65C48.2017 56.066 48.5771 56.4071 49.0177 56.6427C49.4583 56.8782 49.9504 57.001 50.45 57C51.0261 57.001 51.5902 56.8361 52.075 56.525C52.7429 56.0859 53.2098 55.4003 53.3737 54.618C53.5377 53.8357 53.3853 53.0203 52.95 52.35C50.3976 48.4266 46.7939 45.2993 42.55 43.325C45.6518 40.8745 47.8011 37.4183 48.6271 33.5527C49.4532 29.687 48.9043 25.6542 47.075 22.15L56.95 18.85C57.5502 18.6527 58.0728 18.271 58.4433 17.7592C58.8138 17.2475 59.0133 16.6318 59.0133 16C59.0133 15.3682 58.8138 14.7525 58.4433 14.2408C58.0728 13.729 57.5502 13.3473 56.95 13.15ZM32 11.15L46.525 16L41.325 17.725L32 20.85L22.675 17.725L17.475 16L32 11.15ZM43 30C42.9983 31.7072 42.5992 33.3907 41.8344 34.917C41.0695 36.4433 39.9599 37.7706 38.5933 38.7939C37.2267 39.8173 35.6407 40.5084 33.9608 40.8127C32.2809 41.1171 30.5532 41.0262 28.9145 40.5473C27.2758 40.0684 25.7711 39.2147 24.5194 38.0537C23.2677 36.8926 22.3035 35.4562 21.703 33.8581C21.1025 32.2599 20.8822 30.5439 21.0596 28.8459C21.237 27.1479 21.8072 25.5145 22.725 24.075L31.05 26.85C31.6675 27.0506 32.3326 27.0506 32.95 26.85L41.275 24.075C42.4075 25.8432 43.0064 27.9003 43 30Z" fill="black" />
                </svg>
            )
        case "statistics":
            return (
                <svg style={style} className={`${className}`} width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_646_7712)">
                        <path d="M5.83316 49.274L1.21094 45.7558L15.4332 21.8026L23.9665 32.2822L35.3443 12.8202L43.0954 25.0213C42.005 25.0712 40.9734 25.209 40.0006 25.4345C39.0278 25.6601 38.0683 25.9715 37.122 26.3687L35.5576 23.8985L24.7487 42.3874L16.1443 31.833L5.83316 49.274ZM59.7354 63.7208L50.8465 54.364C49.8983 55.0627 48.8431 55.5866 47.6806 55.936C46.5182 56.2853 45.3216 56.4599 44.0909 56.4599C40.5354 56.4599 37.5127 55.1495 35.0228 52.5286C32.533 49.9077 31.289 46.727 31.2909 42.9863C31.2909 39.2436 32.5359 36.0618 35.0257 33.4409C37.5155 30.82 40.5373 29.5106 44.0909 29.5126C47.6465 29.5126 50.6692 30.823 53.159 33.4439C55.6489 36.0648 56.8928 39.2456 56.8909 42.9863C56.8909 44.2837 56.725 45.5443 56.3932 46.7679C56.0613 47.9915 55.5635 49.1263 54.8998 50.1722L63.7887 59.4541L59.7354 63.7208ZM44.0909 50.4716C46.082 50.4716 47.765 49.7481 49.1398 48.3009C50.5146 46.8537 51.202 45.0822 51.202 42.9863C51.202 40.8904 50.5146 39.1188 49.1398 37.6716C47.765 36.2245 46.082 35.5009 44.0909 35.5009C42.0998 35.5009 40.4169 36.2245 39.042 37.6716C37.6672 39.1188 36.9798 40.8904 36.9798 42.9863C36.9798 45.0822 37.6672 46.8537 39.042 48.3009C40.4169 49.7481 42.0998 50.4716 44.0909 50.4716ZM50.4198 26.5184C49.5191 26.1192 48.5823 25.7948 47.6095 25.5453C46.6367 25.2958 45.6298 25.1461 44.5887 25.0962L59.1665 0.843567L63.7887 4.3617L50.4198 26.5184Z" fill="#5C487F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_646_7712">
                            <rect width="64" height="64" fill="white" transform="translate(0.5 0.5)" />
                        </clipPath>
                    </defs>
                </svg>

            )
        case "info":
            return (
                <svg style={style} className={`${className}`} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-inherit" d="M32.0002 45.3333C32.7557 45.3333 33.3895 45.0773 33.9015 44.5653C34.4135 44.0533 34.6686 43.4204 34.6668 42.6667V31.9333C34.6668 31.1778 34.4108 30.5556 33.8988 30.0667C33.3868 29.5778 32.7539 29.3333 32.0002 29.3333C31.2446 29.3333 30.6108 29.5893 30.0988 30.1013C29.5868 30.6133 29.3317 31.2462 29.3335 32V42.7333C29.3335 43.4889 29.5895 44.1111 30.1015 44.6C30.6135 45.0889 31.2464 45.3333 32.0002 45.3333ZM32.0002 24C32.7557 24 33.3895 23.744 33.9015 23.232C34.4135 22.72 34.6686 22.0871 34.6668 21.3333C34.6668 20.5778 34.4108 19.944 33.8988 19.432C33.3868 18.92 32.7539 18.6649 32.0002 18.6667C31.2446 18.6667 30.6108 18.9227 30.0988 19.4347C29.5868 19.9467 29.3317 20.5796 29.3335 21.3333C29.3335 22.0889 29.5895 22.7227 30.1015 23.2347C30.6135 23.7467 31.2464 24.0018 32.0002 24ZM32.0002 58.6667C28.3113 58.6667 24.8446 57.9662 21.6002 56.5653C18.3557 55.1644 15.5335 53.2649 13.1335 50.8667C10.7335 48.4667 8.83394 45.6444 7.43483 42.4C6.03572 39.1555 5.33527 35.6889 5.3335 32C5.3335 28.3111 6.03394 24.8444 7.43483 21.6C8.83572 18.3556 10.7353 15.5333 13.1335 13.1333C15.5335 10.7333 18.3557 8.83377 21.6002 7.43466C24.8446 6.03555 28.3113 5.33511 32.0002 5.33333C35.6891 5.33333 39.1557 6.03377 42.4002 7.43466C45.6446 8.83555 48.4668 10.7351 50.8668 13.1333C53.2668 15.5333 55.1673 18.3556 56.5682 21.6C57.969 24.8444 58.6686 28.3111 58.6668 32C58.6668 35.6889 57.9664 39.1555 56.5655 42.4C55.1646 45.6444 53.2651 48.4667 50.8668 50.8667C48.4668 53.2667 45.6446 55.1671 42.4002 56.568C39.1557 57.9689 35.6891 58.6684 32.0002 58.6667Z" fill="#5C487F" />
                </svg>
            )
        case "edit":
            return (
                <svg style={style} className={`${className}`} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-inherit" d="M6.66634 36.7083C5.74967 36.7083 4.96467 36.3817 4.31134 35.7283C3.65912 35.0761 3.33301 34.2917 3.33301 33.375V10.0417C3.33301 9.125 3.65912 8.34 4.31134 7.68667C4.96467 7.03444 5.74967 6.70833 6.66634 6.70833H21.5413L18.208 10.0417H6.66634V33.375H29.9997V21.7917L33.333 18.4583V33.375C33.333 34.2917 33.0069 35.0761 32.3547 35.7283C31.7013 36.3817 30.9163 36.7083 29.9997 36.7083H6.66634ZM25.2913 7.66667L27.6663 10L16.6663 21V23.375H18.9997L30.0413 12.3333L32.4163 14.6667L20.4163 26.7083H13.333V19.625L25.2913 7.66667ZM32.4163 14.6667L25.2913 7.66667L29.458 3.5C30.1247 2.83333 30.9236 2.5 31.8547 2.5C32.7847 2.5 33.5691 2.83333 34.208 3.5L36.5413 5.875C37.1802 6.51389 37.4997 7.29167 37.4997 8.20833C37.4997 9.125 37.1802 9.90278 36.5413 10.5417L32.4163 14.6667Z" fill="#745AA0" />
                </svg>


            )
        case "trash":
            return (
                <svg style={style} onClick={handle} className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-inherit" d="M9.99967 31.6667C9.99967 33.5 11.4997 35 13.333 35H26.6663C28.4997 35 29.9997 33.5 29.9997 31.6667V11.6667H9.99967V31.6667ZM13.333 15H26.6663V31.6667H13.333V15ZM25.833 6.66667L24.1663 5H15.833L14.1663 6.66667H8.33301V10H31.6663V6.66667H25.833Z" fill="#D43A3A" />
                </svg>


            )
        case "nav":
            return (
                <svg style={style} className={`${className}`} width="28" height="28" viewBox="0 0 28 28" fill={fill} xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-inherit" d="M3.49997 19.8333H24.5C24.7973 19.8337 25.0833 19.9475 25.2996 20.1517C25.5158 20.3558 25.6459 20.6348 25.6633 20.9316C25.6808 21.2285 25.5842 21.5208 25.3933 21.7488C25.2025 21.9768 24.9317 22.1234 24.6365 22.1585L24.5 22.1667H3.49997C3.20261 22.1663 2.9166 22.0525 2.70037 21.8484C2.48415 21.6442 2.35403 21.3652 2.3366 21.0684C2.31917 20.7715 2.41576 20.4792 2.60661 20.2512C2.79747 20.0232 3.06819 19.8766 3.36347 19.8415L3.49997 19.8333ZM3.49997 12.8333L24.5 12.831C24.7973 12.8313 25.0833 12.9452 25.2996 13.1493C25.5158 13.3535 25.6459 13.6325 25.6633 13.9293C25.6808 14.2262 25.5842 14.5185 25.3933 14.7465C25.2025 14.9745 24.9317 15.1211 24.6365 15.1562L24.5 15.1643L3.49997 15.1667C3.20261 15.1663 2.9166 15.0525 2.70037 14.8484C2.48415 14.6442 2.35403 14.3652 2.3366 14.0684C2.31917 13.7715 2.41576 13.4792 2.60661 13.2512C2.79747 13.0232 3.06819 12.8766 3.36347 12.8415L3.49997 12.8333ZM3.49997 5.83334H24.5C24.7973 5.83367 25.0833 5.94754 25.2996 6.15167C25.5158 6.3558 25.6459 6.63479 25.6633 6.93164C25.6808 7.22849 25.5842 7.52079 25.3933 7.74881C25.2025 7.97684 24.9317 8.12339 24.6365 8.15851L24.5 8.16668H3.49997C3.20261 8.16635 2.9166 8.05248 2.70037 7.84835C2.48415 7.64422 2.35403 7.36523 2.3366 7.06838C2.31917 6.77153 2.41576 6.47923 2.60661 6.25121C2.79747 6.02318 3.06819 5.87663 3.36347 5.84151L3.49997 5.83334Z" fill="#745AA0" />
                </svg>

            )

        case "expenses":
            return (
                <svg style={style} className={`${className}`} width="64" height="38" viewBox="0 0 64 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_732_12235)">
                        <path className="fill-inherit" d="M58.8387 0H5.16129C3.79452 0.00657112 2.48566 0.535465 1.5192 1.47173C0.552738 2.40799 0.0067831 3.67594 0 5V33C0.0067831 34.3241 0.552738 35.592 1.5192 36.5283C2.48566 37.4645 3.79452 37.9934 5.16129 38H58.8387C60.2055 37.9934 61.5143 37.4645 62.4808 36.5283C63.4473 35.592 63.9932 34.3241 64 33V5C63.9932 3.67594 63.4473 2.40799 62.4808 1.47173C61.5143 0.535465 60.2055 0.00657112 58.8387 0ZM22.8645 32L7.76774 19L22.8645 6H41.1355L56.2323 19L41.1355 32H22.8645ZM57.8064 12.325L50.4774 6H57.8064V12.325ZM13.5226 6L6.19355 12.325V6H13.5226ZM6.19355 25.675L13.5226 32H6.19355V25.675ZM50.4774 32L57.8064 25.675V32H50.4774ZM32 9C29.9584 9 27.9626 9.58649 26.2651 10.6853C24.5675 11.7841 23.2445 13.3459 22.4632 15.1732C21.6819 17.0004 21.4775 19.0111 21.8758 20.9509C22.2741 22.8907 23.2572 24.6725 24.7008 26.0711C26.1445 27.4696 27.9838 28.422 29.9862 28.8079C31.9885 29.1937 34.0641 28.9957 35.9503 28.2388C37.8365 27.4819 39.4487 26.2002 40.5829 24.5557C41.7172 22.9112 42.3226 20.9778 42.3226 19C42.3226 16.3478 41.235 13.8043 39.2992 11.9289C37.3633 10.0536 34.7377 9 32 9ZM32 23C31.1834 23 30.385 22.7654 29.706 22.3259C29.027 21.8864 28.4978 21.2616 28.1853 20.5307C27.8728 19.7998 27.791 18.9956 27.9503 18.2196C28.1096 17.4437 28.5029 16.731 29.0803 16.1716C29.6578 15.6122 30.3935 15.2312 31.1945 15.0769C31.9954 14.9225 32.8256 15.0017 33.5801 15.3045C34.3346 15.6072 34.9795 16.1199 35.4332 16.7777C35.8869 17.4355 36.129 18.2089 36.129 19C36.129 20.0609 35.694 21.0783 34.9197 21.8284C34.1453 22.5786 33.0951 23 32 23Z" fill="#745AA0" />
                    </g>
                    <defs>
                        <clipPath id="clip0_732_12235">
                            <rect width="64" height="38" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            )

        case "income":
            return (
                <svg style={style} className={`${className}`} width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_732_12238)">
                        <path className="fill-inherit" d="M30.3485 55.2333H35.9485V51.2333C38.6152 50.7533 40.9085 49.7133 42.8285 48.1133C44.7485 46.5133 45.7085 44.14 45.7085 40.9933C45.7085 38.7533 45.0685 36.7 43.7885 34.8333C42.5085 32.9667 39.9485 31.34 36.1085 29.9533C32.9085 28.8867 30.6952 27.9533 29.4685 27.1533C28.2418 26.3533 27.6285 25.26 27.6285 23.8733C27.6285 22.4867 28.1224 21.3933 29.1101 20.5933C30.0978 19.7933 31.524 19.3933 33.3885 19.3933C35.0952 19.3933 36.4285 19.8061 37.3885 20.6317C38.3485 21.4573 39.0418 22.4845 39.4685 23.7133L44.5885 21.6333C44.0018 19.7667 42.9224 18.14 41.3501 16.7533C39.7778 15.3667 38.0306 14.5933 36.1085 14.4333V10.4333H30.5085V14.4333C27.8418 15.02 25.7618 16.1933 24.2685 17.9533C22.7752 19.7133 22.0285 21.6867 22.0285 23.8733C22.0285 26.38 22.7624 28.4067 24.2301 29.9533C25.6978 31.5 28.004 32.8333 31.1485 33.9533C34.5085 35.18 36.8424 36.2733 38.1501 37.2333C39.4578 38.1933 40.1106 39.4467 40.1085 40.9933C40.1085 42.7533 39.4813 44.0472 38.2269 44.8749C36.9725 45.7027 35.4664 46.1155 33.7085 46.1133C31.9485 46.1133 30.388 45.5672 29.0269 44.4749C27.6658 43.3827 26.6664 41.7421 26.0285 39.5533L20.7485 41.6333C21.4952 44.1933 22.6557 46.2605 24.2301 47.8349C25.8045 49.4093 27.844 50.4888 30.3485 51.0733V55.2333ZM33.2285 64.8333C28.8018 64.8333 24.6418 63.9928 20.7485 62.3117C16.8552 60.6307 13.4685 58.3512 10.5885 55.4733C7.70852 52.5933 5.42905 49.2067 3.75012 45.3133C2.07118 41.42 1.23065 37.26 1.22852 32.8333C1.22852 28.4067 2.06905 24.2467 3.75012 20.3533C5.43118 16.46 7.71065 13.0733 10.5885 10.1933C13.4685 7.31333 16.8552 5.03386 20.7485 3.35493C24.6418 1.676 28.8018 0.835462 33.2285 0.833328C37.6552 0.833328 41.8152 1.67386 45.7085 3.35493C49.6018 5.036 52.9885 7.31546 55.8685 10.1933C58.7485 13.0733 61.029 16.46 62.7101 20.3533C64.3912 24.2467 65.2306 28.4067 65.2285 32.8333C65.2285 37.26 64.388 41.42 62.7069 45.3133C61.0258 49.2067 58.7464 52.5933 55.8685 55.4733C52.9885 58.3533 49.6018 60.6339 45.7085 62.3149C41.8152 63.996 37.6552 64.8355 33.2285 64.8333ZM33.2285 58.4333C40.3752 58.4333 46.4285 55.9533 51.3885 50.9933C56.3485 46.0333 58.8285 39.98 58.8285 32.8333C58.8285 25.6867 56.3485 19.6333 51.3885 14.6733C46.4285 9.71333 40.3752 7.23333 33.2285 7.23333C26.0818 7.23333 20.0285 9.71333 15.0685 14.6733C10.1085 19.6333 7.62852 25.6867 7.62852 32.8333C7.62852 39.98 10.1085 46.0333 15.0685 50.9933C20.0285 55.9533 26.0818 58.4333 33.2285 58.4333Z" fill="#745AA0" />
                    </g>
                    <defs>
                        <clipPath id="clip0_732_12238">
                            <rect width="65" height="65" fill="white" transform="translate(0.833008 0.5)" />
                        </clipPath>
                    </defs>
                </svg>

            )
        case "referal":
            return (
                <svg style={style} className={`${className}`} width="64" height="38" viewBox="0 0 64 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_732_12244)">
                        <path className="fill-inherit" d="M43.3776 16.306C48.0994 16.306 51.8825 12.7327 51.8825 8.30598C51.8825 3.87932 48.0994 0.305984 43.3776 0.305984C38.6558 0.305984 34.8443 3.87932 34.8443 8.30598C34.8443 12.7327 38.6558 16.306 43.3776 16.306ZM20.622 16.306C25.3438 16.306 29.1269 12.7327 29.1269 8.30598C29.1269 3.87932 25.3438 0.305984 20.622 0.305984C15.9003 0.305984 12.0887 3.87932 12.0887 8.30598C12.0887 12.7327 15.9003 16.306 20.622 16.306ZM20.622 21.6393C13.9945 21.6393 0.710938 24.7593 0.710938 30.9727V34.9727C0.710938 36.4393 1.99094 37.6393 3.55538 37.6393H37.6887C39.2532 37.6393 40.5332 36.4393 40.5332 34.9727V30.9727C40.5332 24.7593 27.2496 21.6393 20.622 21.6393ZM43.3776 21.6393C42.5527 21.6393 41.614 21.6927 40.6185 21.7727C40.6754 21.7993 40.7038 21.8527 40.7323 21.8793C43.9749 24.0927 46.222 27.0527 46.222 30.9727V34.9727C46.222 35.906 46.0229 36.8127 45.71 37.6393H60.4443C62.0087 37.6393 63.2887 36.4393 63.2887 34.9727V30.9727C63.2887 24.7593 50.0052 21.6393 43.3776 21.6393Z" fill="#745AA0" />
                    </g>
                    <defs>
                        <clipPath id="clip0_732_12244">
                            <rect width="64" height="38" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            )
        case "leftArrow":
            return (
                <svg style={style} className={`${className}`} width="40" height="37" viewBox="0 0 40 37" fill={fill} xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-inherit" d="M18.125 30.6667L7.12499 19.6667C6.95832 19.5 6.83999 19.3195 6.76999 19.125C6.69999 18.9306 6.66554 18.7222 6.66665 18.5C6.66665 18.2778 6.70165 18.0695 6.77165 17.875C6.84165 17.6806 6.95943 17.5 7.12499 17.3334L18.125 6.33335C18.4305 6.0278 18.8128 5.86835 19.2717 5.85502C19.7305 5.84169 20.1261 6.00113 20.4583 6.33335C20.7917 6.63891 20.9655 7.02113 20.98 7.48002C20.9944 7.93891 20.8344 8.33446 20.5 8.66669L12.3333 16.8334H30.9583C31.4305 16.8334 31.8267 16.9934 32.1467 17.3134C32.4667 17.6334 32.6261 18.0289 32.625 18.5C32.625 18.9722 32.4655 19.3684 32.1467 19.6884C31.8278 20.0084 31.4317 20.1678 30.9583 20.1667H12.3333L20.5 28.3334C20.8055 28.6389 20.9655 29.0278 20.98 29.5C20.9944 29.9722 20.8344 30.3611 20.5 30.6667C20.1944 31 19.8055 31.1667 19.3333 31.1667C18.8611 31.1667 18.4583 31 18.125 30.6667Z" fill="#F1F0F0" />
                </svg>
            )

        case "indexLine":
            return (
                <svg style={style} className={`${className}`} width="76" height="24" viewBox="0 0 76 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_dd_475_8364)">
                        <rect x="6" y="6" width="64" height="12" rx="6" fill="url(#paint0_linear_475_8364)" shapeRendering="crispEdges" />
                    </g>
                    <defs>
                        <filter id="filter0_dd_475_8364" x="0" y="0" width="76" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="-1" dy="1" />
                            <feGaussianBlur stdDeviation="2.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_475_8364" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="1" dy="-1" />
                            <feGaussianBlur stdDeviation="2.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow_475_8364" result="effect2_dropShadow_475_8364" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_475_8364" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_475_8364" x1="37.5717" y1="4.90244" x2="37.5717" y2="18.0732" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#E1DBEB" stopOpacity="0.9" />
                            <stop offset="1" stopColor="#EDEDED" />
                            <stop offset="1" stopColor="#EDEDED" />
                        </linearGradient>
                    </defs>
                </svg>

            )

        default:
            return (
                <h1>none</h1>
            )

    }
}