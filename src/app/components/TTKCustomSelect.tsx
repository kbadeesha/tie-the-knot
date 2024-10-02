import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { SxProps } from "@mui/material";
import { SelectChangeEvent } from '@mui/material/Select';

interface TTKCustomSelectProps {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: { label: string; value: string }[];
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  sx?: SxProps;
}

const TTKCustomSelect: React.FC<TTKCustomSelectProps> = ({
  label,
  value,
  onChange,
  options,
  disabled = false,
  className,
  fullWidth = false,
  sx = {},
}) => {
  return (
    <FormControl className={className} fullWidth={fullWidth} sx={sx} variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        disabled={disabled}
        label={label}
        className="border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TTKCustomSelect;
