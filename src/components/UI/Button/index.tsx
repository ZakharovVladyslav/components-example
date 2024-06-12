'use client';

import classNames from 'classnames';
import { MouseEvent } from 'react';

import s from './button.module.scss';
import { IconedButton } from './iconed-button';

export const Button = ({
   size = 'm',
   variant = 'primary',
   type = 'button',
   className,
   children,
   onClick,
   disabled = false,
   label,
   id,
   position,
}: TButtonProps) => {
   const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onClick();
   };

   return (
      <div
         className={classNames(
            s.buttonWrapper,
            s[position],
            s[size],
            s[type],
            s[variant],
            className,
         )}
      >
         {label && <label className={s.label}>{label}</label>}

         <button
            className={s.button}
            type={type}
            onClick={handleClick}
            disabled={disabled}
            id={id && id}
         >
            {children}
         </button>
      </div>
   );
};

Button.Iconed = IconedButton;
