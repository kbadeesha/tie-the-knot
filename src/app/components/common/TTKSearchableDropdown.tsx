import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Popper, { PopperProps } from '@mui/material/Popper';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Paper, SxProps } from '@mui/material';
import { Option } from '@/app/types/option';

// Interface for option objects with optional icon


// Custom Popper to add gap between input and dropdown
const CustomPopper = (props: PopperProps) => {
  return (
    <Popper
      {...props}
      style={{ ...props.style, marginTop: '8px !important' }} // Ensure the gap is applied
      placement="bottom-start"
      disablePortal={true} // Ensures Popper stays within DOM hierarchy
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [0, 8], // Another way to enforce the gap
          },
        },
      ]}
    />
  );
};

// Props for SearchableDropdown
interface SearchableDropdownProps {
  placeholder: string;
  options: Option[];
  onSelect: (value: string) => void;
  onSearch?: (inputValue: string) => void;
  startAdornment?: React.ReactNode;
  sx?: SxProps;
}

const TTKSearchableDropdown: React.FC<SearchableDropdownProps> = ({
  placeholder,
  options,
  onSelect,
  onSearch,
  startAdornment,
  sx,
}) => {
  const handleInputChange = (event: React.SyntheticEvent, newInputValue: string) => {
    if (onSearch) {
      onSearch(newInputValue); // Optional callback for searching
    }
  };

  const handleSelect = (event: React.SyntheticEvent, value: Option | string | null) => {
    if (typeof value === 'string') {
      onSelect(value);
    } else if (value) {
      onSelect(value.value);
    }
  };

  return (
    <Autocomplete
      id="searchable-dropdown"
      freeSolo
      options={options}
      getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
      onChange={handleSelect}
      onInputChange={handleInputChange}
      sx={sx}
      PopperComponent={CustomPopper} // Adding the custom popper for spacing
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                {startAdornment ? startAdornment : <SearchIcon />}
              </InputAdornment>
            ),
          }}
        />
      )}
      renderOption={(props, option) => (
        <ListItem {...props}>
          {option.icon && (
            <ListItemIcon>
              <option.icon /> {/* Rendering the optional icon */}
            </ListItemIcon>
          )}
          <ListItemText primary={option.label} />
        </ListItem>
      )}
      PaperComponent={(props) => (
        <Paper
          {...props}
          elevation={3} // Adds a shadow to the options box
          sx={{  
            // Target the listbox element within the Paper
            '& .MuiAutocomplete-listbox': { 
              '&::-webkit-scrollbar': { 
                width: 0, // Completely hide the scrollbar for WebKit browsers
                height: 0
              },
              '&::-webkit-scrollbar-track': {
                background: 'transparent'
              },
              msOverflowStyle: 'none' /* IE and Edge */,
              scrollbarWidth: 'none' /* Firefox */,
            },
            // ... other Paper styles ...
          }}
          style={{
            border: '1px solid #ccc', // Adds a border
            borderRadius: '8px', // Rounded corners for the dropdown list
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Adds subtle box shadow
          }}
        />
      )}
      disablePortal
    />
  );
};

export default TTKSearchableDropdown;
