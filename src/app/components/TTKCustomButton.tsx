import React from "react";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/material";

interface TTKCustomButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "contained" | "outlined" | "text";
  color?:
    | "primary"
    | "secondary"
    | "inherit"
    | "success"
    | "error"
    | "info"
    | "warning"; // Removed custom colors
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  icon?: React.ReactElement;
  className?: string;
  type?: "button" | "reset" | "submit";
  iconPosition?: "start" | "end";
  fullWidth?: boolean;
  sx?: SxProps;
}

const TTKCustomButton: React.FC<TTKCustomButtonProps> = ({
  children,
  variant = "contained",
  color = "primary",
  onClick,
  size = "medium",
  disabled,
  href,
  icon,
  className,
  type = "button",
  iconPosition = "end",
  fullWidth,
  sx = {},
  ...otherProps
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      href={href}
      size={size}
      disabled={disabled}
      startIcon={iconPosition === "start" ? icon : undefined}
      endIcon={iconPosition === "end" ? icon : undefined}
      className={`${className} m-1`}
      type={type}
      sx={sx}
      fullWidth={fullWidth}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default TTKCustomButton;