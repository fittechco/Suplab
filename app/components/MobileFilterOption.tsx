import {useEffect, useState} from 'react';
import {Colors} from '../ft-lib/shared';
import {Link, useSearchParams} from '@remix-run/react';

type Props = {
  param: string;
  label: string;
  value: string;
  isSelected: boolean;
  hasX?: boolean;
};

export default function MobileFilterOption({
  param,
  label,
  value,
  isSelected,
  hasX = false,
}: Props) {
  // const [isSelected, setIsSelected] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   if (!selected) {
  //     if (searchParams.get(param) === value) {
  //       setIsSelected(true);
  //     }
  //   } else if (selected) {
  //     if (searchParams.get(param) !== value) {
  //       setIsSelected(false);
  //     }
  //   }
  // }, [searchParams]);

  const handleClick = () => {
    const currentOptionVal = searchParams.get(param);
    if (isSelected) {
      setSearchParams((prev) => {
        prev.delete(param);
        return prev;
      });
    } else {
      setSearchParams((prev) => {
        prev.set(param, value);
        return prev;
      });
    }
  };

  return (
    <div className="gridItemWrapper w-full flex items-center justify-center">
      <button
        className="filterOption p-2 font-bold text-xs min-w-[106px] md:py-3 md:text-lg w-full rounded-full text-center whitespace-nowrap cursor-pointer border-none outline-transparent uppercase flex items-center justify-center"
        style={{
          backgroundColor: isSelected
            ? Colors.primary
            : Colors.offBlackSecondary,
          color: Colors.textSecondary,
        }}
        onClick={handleClick}
      >
        <span className="leading-normal w-fit flex items-center justify-center gap-1">
          {label} {hasX && <XIcon strokeColor={Colors.textSecondary} />}
        </span>
      </button>
      {/* <Link
        className="filterOption p-2 font-bold text-xs min-w-[106px] md:py-3 md:text-lg w-full rounded-full text-center whitespace-nowrap cursor-pointer border-none outline-transparent uppercase"
        style={{
          backgroundColor: isSelected
            ? Colors.primary
            : Colors.offBlackSecondary,
          color:  Colors.textSecondary,
        }}
        onClick={handleClick}
      >
        <span>{label}</span>
      </Link> */}
    </div>
  );
}

const XIcon = ({strokeColor}: {strokeColor?: string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 9 10"
    fill="none"
    fontSizeAdjust={0.5}
  >
    <path
      d="M1.16667 1.66675L7.83334 8.33341M1.16667 8.33341L7.83334 1.66675"
      stroke={strokeColor || "#4A4A49"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
