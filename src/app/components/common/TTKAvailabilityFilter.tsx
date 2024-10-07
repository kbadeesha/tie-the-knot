import * as React from "react";
import { useState } from "react";
import { Box, Stack } from "@mui/material";

import TTKCustomButton from "./TTKCustomButton";
import TTKCustomCalender from "./TTKCustomCalender";

interface TTKAvailabilityFilterProps {
  onFilterChange: (selectedDates: Date[]) => void;
}

const TTKAvailabilityFilter: React.FC<TTKAvailabilityFilterProps> = ({ onFilterChange }) => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const handleDateChange = (dates: Date[]) => {
    setSelectedDates(dates);
  };

  const handleClear = () => {
    setSelectedDates([]);
    onFilterChange([]);
  };

  const handleApply = () => {
    onFilterChange(selectedDates);
  };

  return (
    <Box sx={{ mt: 2, p: 2 }}>
      <Stack spacing={2}>
        <TTKCustomCalender 
          selectedDates={selectedDates} 
          onDateChange={handleDateChange} 
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <TTKCustomButton variant="text" onClick={handleClear} sx={{ color: 'gray' }}>
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

export default TTKAvailabilityFilter;