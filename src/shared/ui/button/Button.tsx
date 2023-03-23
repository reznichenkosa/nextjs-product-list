import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./Button.module.css";

type ButtonSize = "small" | "normal" | "big";

type ButtonVariant = "default" | "success" | "danger" | "ghost";

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isFullWidth?: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = "default",
  size = "normal",
  isFullWidth = false,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={cn(styles.button, styles[variant], styles[size], {
        [styles.fullWidth]: isFullWidth,
      })}
    >
      {children}
    </button>
  );
};
