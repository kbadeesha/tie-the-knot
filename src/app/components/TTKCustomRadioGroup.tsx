import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormGroup,
  SxProps,
} from "@mui/material";

interface Option {
  label: string;
  value: string;
}

interface TTKCustomRadioGroupProps {
  options: Option[];                // Array of options with label and value
  selectedValue: string;            // Currently selected value
  onChange: (value: string) => void; // Callback for when the selection changes
  disabled?: boolean;               // Optional prop to disable the entire group
  className?: string;               // Optional className for styling
  sx?: SxProps;                     // Optional sx prop for MUI styles
}

const TTKCustomRadioGroup: React.FC<TTKCustomRadioGroupProps> = ({
  options,
  selectedValue,
  onChange,
  disabled = false,
  className,
  sx = {},
}) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);  // Notify parent of the selected value
  };

  return (
    <FormControl component="fieldset" className={className} sx={sx}>
      <FormGroup>
        <RadioGroup value={selectedValue} onChange={handleRadioChange}>
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={
                <Radio
                  checked={selectedValue === option.value}
                  onChange={handleRadioChange}
                  disabled={disabled}
                  className="text-blue-500 hover:text-blue-600"
                />
              }
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormGroup>
    </FormControl>
  );
};

export default TTKCustomRadioGroup;
