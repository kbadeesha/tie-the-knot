import React from "react";
import {
  TextField,
  TextFieldProps,
  InputAdornment,
  IconButton,
  useTheme,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { SxProps } from "@mui/material";
import { passwordStrengthValidation } from "../../utils/passwordStrengthValidation";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { grey, red } from "@mui/material/colors";

interface TTKCustomTextFieldProps extends Omit<TextFieldProps, "variant"> {
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
  const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      },
    },
  });
  const [passwordValidation, setPasswordValidation] = React.useState({
    strength: "",
    color: "gray",
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (otherProps.type === "password") {
      const validation = passwordStrengthValidation(value);
      setPasswordValidation({
        strength: validation.strength,
        color: value ? validation.color : "gray",
      });
    }
    if (otherProps.onChange) {
      otherProps.onChange(event);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const customSx: SxProps = {
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
        animation: "glow 1s infinite alternate",
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
    "@keyframes glow": {
      "100%": {
        boxShadow: `0 5px 15px rgba(0, 0, 0, 0.8)`,
      },
    },
    ...sx, // Spread additional styles
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <TextField
          label={label}
          variant="outlined"
          className={`border-gray-300 focus:outline-none ${className}`}
          sx={customSx}
          InputProps={{
            endAdornment: otherProps.type === "password" && (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...otherProps}
          onChange={handleChange}
        />
        {otherProps.type === "password" && (
          <span
            style={{
              marginTop: "8px",
              display: "block",
              color: passwordValidation.color,
              fontSize: "12px",
            }}
          >
            {otherProps.value !== "" &&
              passwordValidation.strength + " Password"}
          </span>
        )}
      </ThemeProvider>
    </>
  );
};

export default TTKCustomTextField;
