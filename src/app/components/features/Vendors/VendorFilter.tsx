// app/components/features/Vendors/VendorFilter.tsx

import * as React from "react";
import Box from "@mui/material/Box";
import { Option } from "../../../types/option";
import TTKSearchableDropdown from "../../common/TTKSearchableDropdown";

interface VendorFilterProps {
  onFilterChange: (value: string | null) => void;
  options: Option[];
  placeholder: string;
  startAdornment?: React.ReactNode; // Add startAdornment prop
}

const VendorFilter: React.FC<VendorFilterProps> = ({
  onFilterChange,
  options,
  placeholder,
  startAdornment, // Use startAdornment prop
}) => {
  return (
    <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
      <TTKSearchableDropdown
        placeholder={placeholder}
        options={options}
        onSelect={onFilterChange}
        startAdornment={startAdornment} // Pass startAdornment to TTKSearchableDropdown
        sx={{ width: 250 }}
      />
    </Box>
  );
};

export default VendorFilter;