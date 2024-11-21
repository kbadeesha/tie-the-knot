import React from "react";
import {
  TextField,
  TextFieldProps,
  InputAdornment,
  IconButton,
  createTheme,
} from "@mui/material";
import { SxProps } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { grey } from "@mui/material/colors";
import { Controller } from "react-hook-form";

interface TTKCustomTextFieldProps extends Omit<TextFieldProps, "variant"> {
  label: string;
  name: string;
  control: any;
  className?: string;
  sx?: SxProps;
  customOnChange?: any;
  endAdornment?: React.ReactNode;
  endAdornmentOnclick?: any;
}

const TTKCustomTextField: React.FC<TTKCustomTextFieldProps> = ({
  label,
  className,
  sx,
  name,
  control,
  customOnChange,
  endAdornment,
  endAdornmentOnclick,
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
    width: "100%",
    marginBottom: "16px",
    position: "relative",
    "& .MuiOutlinedInput-root": {
      borderRadius: "15px",
      transition: "border-color 0.4s",
      "& fieldset": {
        borderColor: theme.palette.common.black,
        transition: "border-color 0.4s",
      },
      "&:hover fieldset": {
        borderColor: theme.palette.common.black,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.common.black,
        animation: "fadeIn 0.6s ease-in",
      },
      "& .MuiInputLabel-outlined": {
        color: "#2e2e2e",
        fontWeight: "bold",
        "&.Mui-focused": {
          color: "red",
          fontWeight: "bold",
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
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <TextField
              label={label}
              value={value || ""}
              variant="outlined"
              className={`border-gray-300 focus:outline-none ${className}`}
              sx={customSx}
              InputProps={{
                endAdornment: (
                  <span onClick={endAdornmentOnclick}>
                    <InputAdornment position="end">
                      {endAdornment}
                    </InputAdornment>
                  </span>
                ),
              }}
              onChange={(e) => {
                onChange(e);
                if (customOnChange) customOnChange(e);
              }}
              helperText={error ? error.message : null}
              error={!!error}
              {...otherProps}
            />
          </>
        )}
      />
    </>
  );
};

export default TTKCustomTextField;
