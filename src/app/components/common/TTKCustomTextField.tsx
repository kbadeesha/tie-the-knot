import React from 'react';
import { TextField, InputAdornment, OutlinedTextFieldProps } from '@mui/material';

// Define the prop types for TTKCustomTextField, extending OutlinedTextFieldProps
interface TTKCustomTextFieldProps extends OutlinedTextFieldProps {
  startAdornment?: React.ReactNode; // Optional start adornment
}

// Functional component with declared props interface
const TTKCustomTextField: React.FC<TTKCustomTextFieldProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  startAdornment,
  ...props
}) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: startAdornment ? (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ) : undefined, // Add startAdornment if provided
      }}
      {...props}
    />
  );
};

export default TTKCustomTextField;
