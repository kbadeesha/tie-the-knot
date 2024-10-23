import React from "react";
import {
  TextField,
  TextFieldProps,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { SxProps } from "@mui/material";
import { passwordStrengthValidation } from "../utils/passwordStrengthValidation";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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

  return (
    <>
      <TextField
        label={label}
        variant="outlined"
        // type={showPassword ? "text" : "password"} // password visibility
        className={`border-gray-300 focus:outline-none ${className}`}
        sx={{
          ...sx,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: passwordValidation.color,
            },
            "&:hover fieldset": {
              borderColor: passwordValidation.color,
            },
            "&.Mui-focused fieldset": {
              borderColor: passwordValidation.color,
            },
          },
        }}
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
          {otherProps.value != "" && passwordValidation.strength + " Password"}
        </span>
      )}
    </>
  );
};

export default TTKCustomTextField;
