type TInputSize = 's' | 'm';
type TInputType = 'primary';

type TInputProps = {
   label?: string;
   onChange: ChangeEventHandler<HTMLInputElement>;
   value: string;
   size?: TInputSize;
   type?: TInputType;
   disabled?: boolean;
   className?: string;
   error?: string;
   position?: EPosition;
}
