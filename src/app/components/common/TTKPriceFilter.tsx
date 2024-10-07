// app/components/features/Vendors/TTKPriceFilter.tsx

import * as React from "react";
import { useState } from "react";
import { Box, Stack, InputAdornment } from "@mui/material";
import TTKCustomTextField from "./TTKCustomTextField";
import TTKCustomButton from "./TTKCustomButton";

interface TTKPriceFilterProps {
  onFilterChange: (minPrice: number | null, maxPrice: number | null) => void;
}

const TTKPriceFilter: React.FC<TTKPriceFilterProps> = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value ? parseFloat(event.target.value) : null;
    setMinPrice(value);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value ? parseFloat(event.target.value) : null;
    setMaxPrice(value);
  };

  const handleClear = () => {
    setMinPrice(null);
    setMaxPrice(null);
    onFilterChange(null, null);
  };

  const handleApply = () => {
    onFilterChange(minPrice, maxPrice);
  };

  return (
    <Box sx={{ mt: 2 ,p:2 }}>
    
      <Stack spacing={2}>
        <TTKCustomTextField
          label="Minimum"
          variant="outlined"
          type="number"
          value={minPrice === null ? "" : minPrice}
          onChange={handleMinPriceChange}
          startAdornment="$"
          placeholder="enter minimum price"
        />
        <TTKCustomTextField
          variant="outlined"
           placeholder="enter maximum price"
          label="Maximum"
          type="number"
          value={maxPrice === null ? "" : maxPrice}
          onChange={handleMaxPriceChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
       <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}> {/* Align buttons to the right */}
          <TTKCustomButton variant="text" onClick={handleClear} sx={{ color: 'gray' }}> {/* Gray color for "Clear" button */}
            Clear
          </TTKCustomButton>
          <TTKCustomButton variant="contained" onClick={handleApply}>
            Apply
          </TTKCustomButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default TTKPriceFilter;
