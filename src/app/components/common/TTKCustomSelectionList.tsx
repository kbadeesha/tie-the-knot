import React, { useState } from "react";
import { FormControl, FormGroup, SxProps, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import { grey } from "@mui/material/colors";

interface Option {
  label: string;
  value: string;
  icon?: JSX.Element;
  staticIcon?: any;
  animatedIcon?: any;
  type?: string;
}

interface TTKCustomSelectionListProps {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
  sx?: SxProps;
  type?: string;
  error?: string; // Error message passed from Controller
  name: string;
  control?: any; // Control for form handling
}

export const TTKCustomSelectionList: React.FC<TTKCustomSelectionListProps> = ({
  options,
  selectedValue,
  onChange,
  disabled = false,
  className,
  sx = {},
  type,
  error,
  name,
  control,
}) => {
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);

  const theme = {
    palette: {
      primary: {
        main: grey[900],
      },
    },
  };

  const customSx: SxProps = {
    width: "100%",
    marginBottom: "16px",
    position: "relative",
    "& .MuiOutlinedInput-root": {
      borderRadius: "15px",
      transition: "border-color 0.4s",
      "& fieldset": {
        borderColor: theme.palette.primary.main,
        transition: "border-color 0.4s",
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
        animation: "fadeIn 0.6s ease-in",
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

  const handleButtonClick = (value: string) => {
    if (!disabled) {
      onChange(value); // Notify parent of the selected value
    }
  };

  return (
    <FormControl
      component="fieldset"
      className={className}
      sx={customSx}
      error={!!error} // Show error styles when there is an error
    >
      <FormGroup>
        <div
          style={{
            display: "flex",
            flexDirection: type === "gif_icon" ? "row" : "column",
            justifyContent: type === "gif_icon" ? "center" : "unset",
            gap: type === "gif_icon" ? "55px" : "0",
          }}
        >
          {options.map((option) =>
            type === "gif_icon" ? (
              <div
                key={option.value}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <button
                  onClick={() => handleButtonClick(option.value)}
                  onMouseEnter={() => setHoveredValue(option.value)}
                  onMouseLeave={() => setHoveredValue(null)}
                  disabled={disabled}
                  style={{
                    background:
                      selectedValue === option.value ? "#ffffff" : "#ffffff",
                    color:
                      selectedValue === option.value ? "#ffffff" : "#ffffff",
                    borderRadius: "10px",
                    padding: "5px",
                    cursor: disabled ? "not-allowed" : "pointer",
                    width: "50px",
                    height: "50px",
                    outline: "none",
                    transition: "background 0.3s, transform 0.3s",
                    transform:
                      selectedValue === option.value
                        ? "scale(1.05)"
                        : "scale(1)",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={
                      hoveredValue === option.value && option.animatedIcon
                        ? option.animatedIcon
                        : option.staticIcon
                    }
                    alt={option.label}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </button>
                <div style={{ textAlign: "center", marginTop: "5px" }}>
                  {option.label}
                </div>
              </div>
            ) : (
              <button
                key={option.value}
                onClick={() => handleButtonClick(option.value)}
                disabled={disabled}
                style={{
                  display: "flex",
                  alignItems: "center",
                  background:
                    selectedValue === option.value ? "#000000" : "#ffffff",
                  color: selectedValue === option.value ? "#ffffff" : "#000000",
                  border: "1px solid #ccc",
                  borderRadius: "15px",
                  padding: "10px",
                  cursor: disabled ? "not-allowed" : "pointer",
                  marginBottom: "8px",
                  width: "100%",
                  outline: "none",
                  transition: "background 0.3s, transform 0.3s",
                  transform:
                    selectedValue === option.value ? "scale(1.02)" : "scale(1)",
                }}
              >
                {option.icon}
                <span style={{ marginLeft: "8px" }}>{option.label}</span>
              </button>
            )
          )}
        </div>
        {error && <FormHelperText>{error}</FormHelperText>}{" "}
        {/* Show error message */}
      </FormGroup>
    </FormControl>
  );
};

// Wrap this component inside Controller for form handling

interface TTKCustomSelectionListWrapperProps {
  name: string;
  control: any; // You can replace 'any' with the type of the 'control' prop, e.g., 'Control<FormData>'
  options: { label: string; value: string; [key: string]: any }[]; // Type for options, assuming each option has a label and value
  label: string;
  type?: string;
  selectedValue: string;
  
}

export const TTKCustomSelectionListWrapper: React.FC<
  TTKCustomSelectionListWrapperProps
> = ({
  name,
  control,
  options,
  label,
  type = "default", // Default type if not provided
  selectedValue, // Destructure selectedValue here
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TTKCustomSelectionList
          options={options}
          selectedValue={value || selectedValue} // Pass selectedValue here
          onChange={onChange}
          error={error?.message}
          name={name}
          control={control}
          type={type}
        />
      )}
    />
  );
};
