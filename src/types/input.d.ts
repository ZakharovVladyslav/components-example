type TInputSize = 'm';
type TInputVariant = 'primary';
type TInputType = 'text' | 'password' | 'email' | 'number' | 'tel';

type TInputProps = {
   label?: string;
   onChange: ChangeEventHandler<HTMLInputElement>;
   value: string;
   size?: TInputSize;
   variant?: TInputVariant;
   type?: TInputType;
   disabled?: boolean;
   className?: string;
   error?: string;
   position?: EPosition;
   id?: string;
};
