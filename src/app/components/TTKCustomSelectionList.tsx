import React, { useState } from "react";
import { FormControl, FormGroup, SxProps } from "@mui/material";

interface Option {
  label: string;
  value: string;
  icon?: JSX.Element; // For regular icon option
  staticIcon?: any; // URL for static image (for gif_icon type)
  animatedIcon?: any; // URL for animated GIF (for gif_icon type)
  type?: string;
}

interface TTKCustomSelectionListProps {
  options: Option[]; // Array of options with label, value, icon/staticIcon/animatedIcon
  selectedValue: string; // Currently selected value
  onChange: (value: string) => void; // Callback for when the selection changes
  disabled?: boolean; // Optional prop to disable the entire group
  className?: string; // Optional className for styling
  sx?: SxProps; // Optional sx prop for MUI styles
  type?: string; // Type to determine which render logic to use (default or gif_icon)
}

const TTKCustomSelectionList: React.FC<TTKCustomSelectionListProps> = ({
  options,
  selectedValue,
  onChange,
  disabled = false,
  className,
  sx = {},
  type,
}) => {
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);

  const handleButtonClick = (value: string) => {
    if (!disabled) {
      onChange(value); // Notify parent of the selected value
    }
  };

  return (
    <FormControl component="fieldset" className={className} sx={sx}>
      <FormGroup
        style={{
          display: "flex",
          flexDirection: type === "gif_icon" ? "row" : "column", // Display in row for gif_icon, column otherwise
          justifyContent: type === "gif_icon" ? "center" : "unset",
          gap: type === "gif_icon" ? "55px" : "0", // Add some space between buttons if it's gif_icon type
        }}
      >
        {options.map((option) =>
          type === "gif_icon" ? (
            // Render GIF buttons when type === "gif_icon"
            <div
              key={option.value}
              style={{
                display: "flex",
                flexDirection: "column", // Stack the button and label vertically
                alignItems: "center", // Center-align the button and label
                gap: "5px", // Optional: Add some space between the button and label
              }}
            >
              <button
                key={option.value}
                onClick={() => handleButtonClick(option.value)}
                onMouseEnter={() => setHoveredValue(option.value)}
                onMouseLeave={() => setHoveredValue(null)}
                disabled={disabled}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                    selectedValue === option.value ? "#ffffff" : "#ffffff", // Black for selected
                  color: selectedValue === option.value ? "#ffffff" : "#ffffff", // White text for selected
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "10px",
                  cursor: disabled ? "not-allowed" : "pointer",
                  width: "100px", // Square size for gif_icon type
                  height: "100px", // Square size for gif_icon type
                  outline: "none",
                  transition: "background 0.3s, transform 0.3s",
                  transform:
                    selectedValue === option.value ? "scale(1.05)" : "scale(1)", // Scale when selected
                  overflow: "hidden",
                }}
              >
                <img
                  src={
                    hoveredValue === option.value && option.animatedIcon
                      ? option.animatedIcon // Show animated GIF on hover
                      : option.staticIcon // Show static image otherwise
                  }
                  alt={option.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Ensure the image covers the button
                  }}
                />
              </button>
              <div style={{ textAlign: "center", marginTop: "5px" }}>
                {option.label}
              </div>{" "}
              {/* Label below the button */}
            </div>
          ) : (
            // Render regular buttons when type is not gif_icon
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
          )
        )}
      </FormGroup>
    </FormControl>
  );
};

export default TTKCustomSelectionList;
