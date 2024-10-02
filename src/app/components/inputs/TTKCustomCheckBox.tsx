import React from "react";
import { Checkbox, FormControlLabel, FormControl, FormGroup } from "@mui/material";
import { SxProps } from "@mui/material";

interface TTKCustomCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  sx?: SxProps;
}

const TTKCustomCheckbox: React.FC<TTKCustomCheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  className,
  sx = {},
}) => {
  return (
    <FormControl className={className} sx={sx}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={onChange}
              disabled={disabled}
              className="text-blue-500 hover:text-blue-600"
            />
          }
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};

export default TTKCustomCheckbox;