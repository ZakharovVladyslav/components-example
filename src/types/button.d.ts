type TType = "primary" | "secondary" | "tertiary";
type TSize = "small" | "medium" | "large";
type TPosition = "left" | "right" | "center";

type TButtonProps = {
   size?: TSize;
   type?: TType;
   className?: string;
   children: ReactNode;
   onClick: VoidFunction;
   disabled?: boolean;
   position?: TPosition;
};
