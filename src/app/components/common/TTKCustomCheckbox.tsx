import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { SxProps } from "@mui/material";
import { Controller } from "react-hook-form";

interface TTKCustomCheckboxProps {
  label: string;
  name: string;
  checked: boolean;
  customOnChange?: any;
  disabled?: boolean;
  className?: string;
  sx?: SxProps;
  control: any;
}

const TTKCustomCheckbox: React.FC<TTKCustomCheckboxProps> = ({
  label,
  name,
  control,
  checked,
  customOnChange,
  disabled = false,
  className,
  sx = {},
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl className={className} sx={sx}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={value}
                  onChange={(e) => {
                    onChange(e);
                    if (customOnChange) customOnChange(e);
                  }}
                  disabled={disabled}
                  className="text-blue-500 hover:text-blue-600"
                />
              }
              label={label}
            />
          </FormGroup>
          {error && (
            <FormHelperText
              sx={{
                color: "red",
              }}
            >
              {error.message}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default TTKCustomCheckbox;
