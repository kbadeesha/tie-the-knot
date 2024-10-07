// app/components/common/TTKCustomCheckbox.tsx
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { SxProps, FormControlLabel } from "@mui/material";

interface TTKCustomCheckboxProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "default";
  size?: "small" | "medium" | "large";
  sx?: SxProps;
  value?: string
}

const TTKCustomCheckbox: React.FC<TTKCustomCheckboxProps> = ({
  checked,
  onChange,
  label,
  disabled,
  color = "primary",
  size = "medium",
  sx = {},
  value,
  ...otherProps
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          color={color}
          size={size}
          value={value} 
          sx={sx}
          {...otherProps}
        />
      }
      label={label}
    />
  );
};

export default TTKCustomCheckbox;