import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  createTheme,
  ThemeProvider,
  SxProps,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { Controller } from "react-hook-form";
import { grey } from "@mui/material/colors";

interface TTKCustomSelectProps {
  name: string;
  label: string;
  control: any; // Passed by react-hook-form
  options: { label: string; value: string; staticIcon: string }[];
  className?: string;
  sx?: SxProps;
  required?: boolean;
  fullWidth?: boolean;
  customOnChange?: (event: SelectChangeEvent<string>) => void;
}

const TTKCustomSelect: React.FC<TTKCustomSelectProps> = ({
  name,
  label,
  control,
  options,
  className,
  sx = {},
  required = false,
  fullWidth = false,
  customOnChange,
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
        animation: "fadeIn 0.6s ease-in", // Glow effect on focus
      },
      "& .MuiInputLabel-outlined": {
        color: "#2e2e2e", // Label color
        fontWeight: "bold",
        "&.Mui-focused": {
          color: "red", // Focused label color
        },
      },
    },
    "@keyframes fadeIn": {
      "0%": {
        opacity: `0`,
      },
      "100%": {
        opacity: `1`,
      },
    },
    ...sx, // Spread additional styles
  };

  return (
    <ThemeProvider theme={theme}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl
            fullWidth={fullWidth}
            sx={customSx}
            variant="outlined"
            className={className}
            error={!!error}
            required={required}
          >
            <InputLabel>{label}</InputLabel>
            <Select
              {...otherProps}
              value={value || ""}
              onChange={(e) => {
                onChange(e);
                if (customOnChange) customOnChange(e); // Call the custom onChange handler
              }}
              label={label}
            >
              {options.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  className="flex items-center"
                >
                  <img
                    src={option.staticIcon}
                    alt={`${option.label} staticIcon`}
                    style={{ width: 20, height: 20, marginRight: 8 }}
                  />
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {error && <FormHelperText>{error.message}</FormHelperText>}
          </FormControl>
        )}
      />
    </ThemeProvider>
  );
};

export default TTKCustomSelect;
