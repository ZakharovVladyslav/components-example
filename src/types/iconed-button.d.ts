type TType = 'primary' | 'secondary' | 'tertiary';
type TSize = 'small' | 'medium' | 'large';
type TIconPosition = 'left' | 'right';

type TIconedButtonProps = {
   size?: TSize;
   type?: TType;
   className?: string;
   icon: ReactNode;
   iconPosition?: TIconPosition;
   onClick: VoidFunction;
   disabled?: boolean;
   position?: EPosition;
   label?: string;
};
