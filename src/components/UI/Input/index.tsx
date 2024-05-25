'use client';

import classNames from 'classnames';

import { WarnIcon } from '@/icons';
import s from './Input.module.scss';

export const Input = ({
   onChange,
   value = '',
   disabled = false,
   label = '',
   size = 'm',
   type = 'primary',
   className = '',
   error = '',
   position,
}: TInputProps) => {
   return (
      <div
         className={classNames(s.inputWrapper, s[size], s[type], s[position], className)}
      >
         {label && <label className={s.label}>{label}</label>}

         <input
            onChange={onChange}
            value={value}
            disabled={disabled}
            className={s.input}
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
