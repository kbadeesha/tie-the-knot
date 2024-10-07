// app/components/features/Vendors/CapacityFilter.tsx

import * as React from 'react';
import { useState } from 'react';
import { 
  Box, 
  Typography, 
  FormControlLabel, 
  FormGroup 
} from '@mui/material';
import TTKCustomCheckbox from './TTKCustomCheckbox';


interface TTKCapacityFilterProps {
  onFilterChange: (selectedCapacities: string[]) => void;
}

const TTKCapacityFilter: React.FC<TTKCapacityFilterProps> = ({ onFilterChange }) => {
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);

  const handleCapacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedCapacities([...selectedCapacities, value]);
    } else {
      setSelectedCapacities(selectedCapacities.filter(item => item !== value));
    }
  };

  React.useEffect(() => {
    onFilterChange(selectedCapacities);
  }, [selectedCapacities, onFilterChange]);

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="subtitle1" gutterBottom>
        Capacity
      </Typography>
      <FormGroup>
        <FormControlLabel 
          control={<TTKCustomCheckbox value="upTo50" onChange={handleCapacityChange} />} 
          label="Up to 50" 
        />
        <FormControlLabel 
          control={<TTKCustomCheckbox value="50-100" onChange={handleCapacityChange} />} 
          label="50-100" 
        />
        <FormControlLabel 
          control={<TTKCustomCheckbox value="100-150" onChange={handleCapacityChange} />} 
          label="100-150" 
        />
        {/* Add more FormControlLabel components for other capacity ranges */}
      </FormGroup>
    </Box>
  );
};

export default TTKCapacityFilter;