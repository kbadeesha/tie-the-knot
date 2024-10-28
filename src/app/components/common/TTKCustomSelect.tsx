import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { SxProps } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

interface TTKCustomSelectProps {
  name: string;
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: { label: string; value: string; icon: string }[];
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  sx?: SxProps;
  required?: boolean;
}

const TTKCustomSelect: React.FC<TTKCustomSelectProps> = ({
  name,
  label,
  value,
  onChange,
  options,
  disabled = false,
  className,
  fullWidth = false,
  sx = {},
  ...otherProps
}) => {
  return (
    <FormControl
      className={className}
      fullWidth={fullWidth}
      sx={sx}
      variant="outlined"
    >
      <InputLabel>{label}</InputLabel>
      <Select
        {...otherProps}
        name={name}
        value={value}
        onChange={(event) => onChange(event as SelectChangeEvent<string>)}
        disabled={disabled}
        label={label}
        className="border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500"
        renderValue={(selectedValue) => {
          const selectedOption = options.find(
            (option) => option.value === selectedValue
          );
          return selectedOption ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={selectedOption.icon}
                alt={`${selectedOption.label} icon`}
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              {selectedOption.label}
            </div>
          ) : null;
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            className="flex items-center"
          >
            <img
              src={option.icon}
              alt={`${option.label} icon`}
              style={{ width: 20, height: 20, marginRight: 8 }}
            />
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TTKCustomSelect;
