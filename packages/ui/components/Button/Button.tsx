import {
  ReactNode,
  ButtonHTMLAttributes,
  useCallback,
  MouseEvent,
  FC,
} from "react";
import { PrimaryButton, SecondaryButton } from "./Button.styles";

type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variantMapping: Record<ButtonVariant, FC<ButtonProps>> = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
};

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const handleOnClick = useCallback(
    (e: MouseEvent) => {
      if (onClick) {
        onClick(e);
      }
    },
    [onClick]
  );

  const CurrentVariant = variantMapping[variant];

  return (
    <CurrentVariant onClick={handleOnClick} type={type} {...props}>
      {children}
    </CurrentVariant>
  );
}
