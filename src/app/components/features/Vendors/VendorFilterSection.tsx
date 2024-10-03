// app/components/features/Vendors/VendorFilterSection.tsx

import * as React from 'react';
import { useState } from 'react';
import { 
  List, 
  ListItemButton, 
  ListItemText, 
  Collapse,
  Typography 
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import TTKSearchableDropdown from '../../common/TTKSearchableDropdown';
import { FilterCategory, FilterValues } from '@/app/types/filter';


interface VendorFilterSectionProps {
  onFilterChange: (filters: FilterValues) => void;
  filterCategories: FilterCategory[];
}

const VendorFilterSection: React.FC<VendorFilterSectionProps> = ({ onFilterChange, filterCategories }) => {
  const [filterValues, setFilterValues] = useState<FilterValues>({
    type: '',
    location: '',
    price: '',
    // ... other initial filter values
  });
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleFilterChange = (filterKey: string, value: string | null) => {
    // 1. Update the filterValues state
    setFilterValues((prevFilterValues) => ({ 
      ...prevFilterValues,
      [filterKey]: value,
    }));

    // 2. Pass the updated filterValues object to onFilterChange
    onFilterChange({ ...filterValues, [filterKey]: value }); 
  };

  const handleCategoryClick = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <List>
      {filterCategories.map((category) => (
        <div key={category.name}>
          <ListItemButton onClick={() => handleCategoryClick(category.name)}>
            <ListItemText primary={category.name} />
            {expandedCategory === category.name ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={expandedCategory === category.name} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {category.type === 'dropdown' ? (
                <TTKSearchableDropdown
                  options={category.options}
                  placeholder={`Select ${category.name}`}
                  onSelect={(value) => handleFilterChange(category.filterKey, value)}
                  sx={{ width: 250, ml: 4 }}
                />
              ) : (
                category.options.map((option) => (
                  <ListItemButton 
                    key={option.value} 
                    sx={{ pl: 8 }}
                    onClick={() => handleFilterChange(category.filterKey, option.value)}
                  >
                    <ListItemText 
                      primary={
                        <Typography variant="body2">
                          {option.label}
                        </Typography>
                      } 
                    />
                  </ListItemButton>
                ))
              )}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default VendorFilterSection;