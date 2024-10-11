import React from "react";
import { FormControl, FormGroup, SxProps } from "@mui/material";

// Option interface, which now includes an icon as well
interface Option {
  label: string;
  value: string;
  icon: JSX.Element;
}

interface TTKCustomSelectionListProps {
  options: Option[]; // Array of options with label, value, and icon
  selectedValue: string; // Currently selected value
  onChange: (value: string) => void; // Callback for when the selection changes
  disabled?: boolean; // Optional prop to disable the entire group
  className?: string; // Optional className for styling
  sx?: SxProps; // Optional sx prop for MUI styles
}

const TTKCustomSelectionList: React.FC<TTKCustomSelectionListProps> = ({
  options,
  selectedValue,
  onChange,
  disabled = false,
  className,
  sx = {},
}) => {
  const handleButtonClick = (value: string) => {
    if (!disabled) {
      onChange(value); // Notify parent of the selected value
    }
  };

  return (
    <FormControl component="fieldset" className={className} sx={sx}>
      <FormGroup>
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleButtonClick(option.value)}
            disabled={disabled}
            style={{
              display: "flex",
              alignItems: "center",
              background:
                selectedValue === option.value ? "#000000" : "#ffffff", // Black for selected
              color: selectedValue === option.value ? "#ffffff" : "#000000", // White text for selected
              border: "1px solid #ccc",
              borderRadius: "15px",
              padding: "10px",
              cursor: disabled ? "not-allowed" : "pointer",
              marginBottom: "8px",
              width: "100%",
              outline: "none",
              transition: "background 0.3s, transform 0.3s", // Add transform for scaling
              transform:
                selectedValue === option.value ? "scale(1.02)" : "scale(1)", // Scale when selected
            }}
          >
            {option.icon}
            <span style={{ marginLeft: "8px" }}>{option.label}</span>
          </button>
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default TTKCustomSelectionList;
