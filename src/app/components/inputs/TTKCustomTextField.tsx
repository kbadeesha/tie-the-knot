import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { SxProps } from "@mui/material";

interface TTKCustomTextFieldProps extends Omit<TextFieldProps, 'variant'> {
  label: string;
  className?: string;
  sx?: SxProps;
}

const TTKCustomTextField: React.FC<TTKCustomTextFieldProps> = ({
  label,
  className,
  sx,
  ...otherProps
}) => {
  return (
    <TextField
      label={label}
      variant="outlined" // You can change this to "filled" or "standard" as needed
      className={`border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      sx={sx}
      {...otherProps}
    />
  );
};

export default TTKCustomTextField;
