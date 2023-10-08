import FTicons from 'app/ft-lib/FTicon';
import {Colors} from 'app/ft-lib/shared';
import React from 'react';

type Props = {
  value: number;
  onChange: (value: number) => void;
  size?: 'sm' | 'md';
  isUpdating?: boolean;
  max?: number;
};

export default function Quantity(props: Props) {
  const {value, onChange} = props;
  const size = props.size === 'sm' ? 14 : 16;
  const sizeClass = props.size === 'sm' ? 'px-5 py-2.5' : 'px-6 py-3';
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
        type="submit"
        onClick={() => {
          if (value > 1) {
            onChange(value - 1);
          }
        }}
        className={`${sizeClass} minus h-full flex items-center  cursor-pointer`}
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
        type="submit"
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
    </div>
  );
}
