// app/components/common/TTKIncludedFilter.tsx

import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Stack,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material';
import TTKCustomCheckbox from './TTKCustomCheckbox';
import TTKCustomButton from './TTKCustomButton';

interface TTKIncludedFilterProps {
  onFilterChange: (includedOptions: string[]) => void;
}

const options = [
  { value: 'all-inclusive', label: 'All-inclusive', description: 'The venue takes care of it all - food and beverage, rentals, the works!' },
  { value: 'select-services', label: 'Select services', description: 'The venue will provide the space, plus a few extras. Check the venue for specifics.' },
  { value: 'raw-space', label: 'Raw space', description: 'The venue will provide just the space. You\'ll bring in your own caterer and vendors.' },
];

const TTKIncludedFilter: React.FC<TTKIncludedFilterProps> = ({
  onFilterChange,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedOptions((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((option) => option !== value),
    );
  };

  const handleClear = () => {
    setSelectedOptions([]);
    onFilterChange([]);
  };

  const handleApply = () => {
    onFilterChange(selectedOptions);
  };

  return (
    <Box sx={{ mt: 2, p: 2 }}>
      <FormGroup>
        {options.map((option) => (
          <React.Fragment key={option.value}>
            <FormControlLabel
              control={
                <TTKCustomCheckbox
                  value={option.value}
                  checked={selectedOptions.includes(option.value)}
                  onChange={handleChange}
                />
              }
              label={option.label}
            />
            {/* Always render the description */}
            <FormHelperText>{option.description}</FormHelperText> 
          </React.Fragment>
        ))}
      </FormGroup>
      <Stack spacing={2} direction="row" sx={{ justifyContent: 'flex-end' }}>
        <TTKCustomButton variant="text" onClick={handleClear} sx={{ color: 'gray' }}>
          Clear
        </TTKCustomButton>
        <TTKCustomButton variant="contained" onClick={handleApply}>
          Apply
        </TTKCustomButton>
      </Stack>
    </Box>
  );
};

export default TTKIncludedFilter;