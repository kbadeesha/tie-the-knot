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
    | "warning";
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
  const blackAndWhiteStyles: SxProps = {
    backgroundColor: variant === "contained" ? "black" : "transparent",
    color: variant === "contained" ? "white" : "black",
    borderColor: "black",
    "&:hover": {
      backgroundColor: variant === "contained" ? "gray" : "black",
      color: variant === "contained" ? "white" : "white",
    },
  };

  return (
    <Button
      variant={variant}
      onClick={onClick}
      href={href}
      size={size}
      disabled={disabled}
      startIcon={iconPosition === "start" ? icon : undefined}
      endIcon={iconPosition === "end" ? icon : undefined}
      className={`${className} m-1`}
      type={type}
      fullWidth={fullWidth}
      sx={{ ...sx, ...blackAndWhiteStyles }}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default TTKCustomButton;
