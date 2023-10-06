import {useEffect, useState} from 'react';
import {Colors} from '../ft-lib/shared';
import {Link, useSearchParams} from '@remix-run/react';

type Props = {
  param: string;
  label: string;
  value: string;
  isSelected: boolean;
};

export default function MobileFilterOption({
  param,
  label,
  value,
  isSelected,
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
        className="filterOption p-2 font-bold text-xs min-w-[106px] md:py-3 md:text-lg w-full rounded-full text-center whitespace-nowrap cursor-pointer border-none outline-transparent uppercase"
        style={{
          backgroundColor: isSelected
            ? Colors.primary
            : Colors.offBlackSecondary,
          color: Colors.textSecondary,
        }}
        onClick={handleClick}
      >
        <span>{label}</span>
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
