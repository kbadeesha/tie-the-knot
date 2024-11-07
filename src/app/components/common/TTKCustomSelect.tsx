import React from "react";
import { FormControl, InputLabel, Select, MenuItem, InputAdornment, IconButton } from "@mui/material";
import { SxProps } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

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
  const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      },
    },
  });

  const customSx: SxProps = {
    position: "relative",
    "& .MuiOutlinedInput-root": {
      borderRadius: "15px", // Make the border rounded
      transition: "border-color 0.4s",
      "& fieldset": {
        borderColor: theme.palette.common.black, // Black border
        transition: "border-color 0.4s",
      },
      "&:hover fieldset": {
        borderColor: theme.palette.common.black, // Border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.common.black, // Focused state border color
        animation: "glow 1s infinite alternate", // Glow effect on focus
      },
      "& .MuiInputLabel-outlined": {
        color: "#2e2e2e", // Label color
        fontWeight: "bold",
        "&.Mui-focused": {
          color: "red", // Focused label color
        },
      },
    },
    "@keyframes glow": {
      "100%": {
        boxShadow: `0 5px 15px rgba(0, 0, 0, 0.8)`,
      },
    },
    ...sx, // Spread additional styles passed from parent
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl
        fullWidth={fullWidth}
        sx={customSx}
        variant="outlined"
        className={className}
      >
        <InputLabel>{label}</InputLabel>
        <Select
          {...otherProps}
          name={name}
          value={value}
          onChange={(event) => onChange(event as SelectChangeEvent<string>)}
          label={label}
          disabled={disabled}
          className="border-gray-300 focus:outline-none"
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
    </ThemeProvider>
  );
};

export default TTKCustomSelect;
