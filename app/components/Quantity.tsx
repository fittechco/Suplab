import FTicons from 'app/ft-lib/FTicon';
import { Colors } from 'app/ft-lib/shared';
import React, { useEffect, useState } from 'react';

type Props = {
  value: number;
  onChange: (value: number) => void;
  size?: 'sm' | 'md';
  isUpdating?: boolean;
  max?: number | null;
};

export default function Quantity(props: Props) {
  const { value, onChange } = props;
  const size = props.size === 'sm' ? 14 : 16;
  const sizeClass = props.size === 'sm' ? 'px-5 py-2.5' : 'px-6 py-3';
  const [minusDisabled, setMinusDisabled] = useState(value === 1);
  const [plusDisabled, setPlusDisabled] = useState(value === props.max);

  useEffect(() => {
    if (value === 1) {
      setMinusDisabled(true);
    } else {
      setMinusDisabled(false);
    }
  }, [value]);

  useEffect(() => {
    if (props.max != null && value === props.max) {
      setPlusDisabled(true);
    } else {
      setPlusDisabled(false);
    }
  }, [value]);
  return (
    <div
      className="quantity w-fit flex items-center relative"
      style={{
        backgroundColor: Colors.secondary,
        borderRadius: '9999px',
      }}
    >
      <div
        style={{
          background: 'rgba(250, 249, 246, 0.70)',
          borderRadius: '9999px',
          opacity: props.isUpdating === true ? 1 : 0,
          transition: 'all 0.2s ease-in-out',
          zIndex: props.isUpdating === true ? 100 : -1,
        }}
        className="spinner-container absolute top-0 left-0 w-full h-full flex items-center justify-center"
      >
        {props.isUpdating === true && (
          <div
            style={{
              width: size,
              height: size,
            }}
            className={`lds-dual-ring`}
          />
        )}
      </div>
      <button
        style={{
          opacity: value === 1 ? 0.5 : 1,
        }}
        type="submit"
        disabled={minusDisabled}
        onClick={() => {
          if (value > 1) {
            onChange(value - 1);
          }
        }}
        className={`${sizeClass} minus h-full flex items-center cursor-pointer`}
      >
        <FTicons
          style={{
            width: size,
            height: size,
          }}
          fill={Colors.offWhite}
          name="minus"
        />
      </button>

      <div
        className={`quantity-number flex items-center justify-center border-l border-r bold ${sizeClass}`}
        style={{
          color: Colors.textSecondary,
          borderColor: Colors.secondaryLight,
          fontSize: size,
        }}
      >
        {value}
      </div>
      <button
        style={{
          opacity: value === props.max ? 0.5 : 1,
        }}
        type="submit"
        disabled={plusDisabled}
        onClick={() => {
          if (props.max != null && value < props.max) {
            onChange(value + 1);
          } else if (props.max == null) {
            onChange(value + 1);
          }
        }}
        className={`${sizeClass} plus h-full flex items-center  cursor-pointer`}
      >
        <FTicons
          style={{
            width: size,
            height: size,
          }}
          fill={Colors.offWhite}
          name="plus"
        />
      </button>
    </div >
  );
}
