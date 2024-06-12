type TIconedInputSize = 'm';
type TIconedInputVariant = 'primary';
type TIconedInputType = 'text' | 'password' | 'email' | 'number' | 'tel';
type TIconedInputIconPosition = 'left' | 'right';
type TIconedInputIconProps = {
   className?: string;
};

type TIconedInputProps = {
   label?: string;
   onChange: ChangeEventHandler<HTMLInputElement>;
   value: string;
   size?: TIconedInputSize;
   variant?: TIconedInputVariant;
   type?: TIconedInputType;
   disabled?: boolean;
   className?: string;
   error?: string;
   id?: string;
   icon: FC<TIconedInputIconProps>;
   iconPosition?: TIconedInputIconPosition;
   position?: EPosition;
};
