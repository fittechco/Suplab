import { useEffect, useState } from 'react';
import { Colors } from '../ft-lib/shared';
import { Link, useSearchParams, useLocation } from '@remix-run/react';

type Props = {
  param: string | null;
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

  const { pathname, search } = useLocation();

  const linkParams = new URLSearchParams(search);

  if (param === null) {
    return null;
  }

  if (hasX === true) {
    linkParams.delete(param)
  } else {
    linkParams.set(param, value)
  }

  return (
    <div className="gridItemWrapper w-full flex items-center justify-center">
      <Link
        className="filterOption p-2 font-bold text-[11px]  md:py-3 md:text-lg
         w-full rounded-full text-center whitespace-nowrap cursor-pointer
          border-none outline-transparent uppercase flex items-center justify-center "
        style={{
          backgroundColor: isSelected
            ? Colors.primary
            : Colors.secondary,
          color: Colors.textSecondary,
        }}
        to={`${pathname}?${linkParams.toString()}`}
        preventScrollReset
      >
        <span className="leading-normal flex items-center w-full justify-center gap-1 whitespace-pre-wrap">
          {label} {hasX && <XIcon strokeColor={Colors.textSecondary} />}
        </span>
      </Link>
    </div>
  );
}

const XIcon = ({ strokeColor }: { strokeColor?: string }) => (
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
