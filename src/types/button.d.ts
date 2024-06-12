type TButtonVariant = 'primary';
type TButtonType = 'button' | 'submit';
type TButtonSize = 'm';

type TButtonProps = {
   type?: TButtonType;
   size?: TButtonSize;
   variant?: TButtonVariant;
   className?: string;
   children: ReactNode;
   onClick: VoidFunction;
   disabled?: boolean;
   label?: string;
   id?: string;
   position?: EPosition;
};
