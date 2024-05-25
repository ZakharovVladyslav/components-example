type TType = "primary" | "secondary" | "tertiary";
type TSize = "small" | "medium" | "large";
type TPosition = "left" | "right" | "center";

type TIconedButtonProps = {
   size?: TSize;
   type?: TType;
   className?: string;
   icon: ReactNode;
   onClick: VoidFunction;
   disabled?: boolean;
   position?: TPosition;
};
