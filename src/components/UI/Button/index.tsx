"use client";

import classNames from "classnames";
import { MouseEvent } from "react";

import s from "./Button.module.scss";

export const Button = ({
   size = "medium",
   type = "primary",
   className = "",
   children,
   onClick,
   disabled = false,
   position = "center",
}: TButtonProps) => {
   const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onClick();
   };

   return (
      <button
         className={classNames(
            s.button,
            s[size],
            s[type],
            s[position],
            className
         )}
         onClick={handleClick}
         disabled={disabled}
      >
         {children}
      </button>
   );
};
