'use client';

import classNames from 'classnames';
import { MouseEvent } from 'react';

import s from './IconedButton.module.scss';

export const IconedButton = ({
   size = 'medium',
   type = 'primary',
   className = '',
   icon,
   onClick,
   disabled = false,
   position = 'center',
   label = '',
}: TIconedButtonProps) => {
   const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onClick();
   };

   return (
      <button
         className={classNames(s.button, s[size], s[type], s[position], className)}
         onClick={handleClick}
         disabled={disabled}
      >
         {icon} {label && <span className={s.label}>{label}</span>}
      </button>
   );
};
