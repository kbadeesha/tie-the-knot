import React from "react";
import { Radio, FormControlLabel, FormControl, FormGroup } from "@mui/material";
import { SxProps } from "@mui/material";

interface TTKCustomRadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  sx?: SxProps;
}

const TTKCustomRadioButton: React.FC<TTKCustomRadioButtonProps> = ({
  label,
  value,
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
            <Radio
              checked={checked}
              onChange={onChange}
              value={value}
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

export default TTKCustomRadioButton;
