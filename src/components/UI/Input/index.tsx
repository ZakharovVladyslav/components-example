'use client';

import classNames from 'classnames';

import { WarnIcon } from '@/icons';

import { IconedInput } from './iconed-input';

import s from './Input.module.scss';

export const Input = ({
   onChange,
   value,
   disabled = false,
   label,
   size = 'm',
   variant = 'primary',
   type = 'text',
   className,
   error,
   position,
   id,
}: TInputProps) => {
   return (
      <div
         className={classNames(
            s.inputWrapper,
            s[size],
            s[variant],
            s[type],
            s[position],
            className,
         )}
      >
         {label && <label className={s.label}>{label}</label>}

         <input
            onChange={onChange}
            value={value}
            disabled={disabled}
            className={s.input}
            id={id && id}
         />

         <div className={s.errorWrapper}>
            {error && (
               <>
                  <WarnIcon className={s.icon} />
                  <span className={s.error}>{error}</span>
               </>
            )}
         </div>
      </div>
   );
};

Input.Iconed = IconedInput;
