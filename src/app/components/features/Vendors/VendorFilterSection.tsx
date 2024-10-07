import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import TTKPriceFilter from "../../common/TTKPriceFilter";
import TTKAvailabilityFilter from "../../common/TTKAvailabilityFilter";
import TTKIncludedFilter from "../../common/TTKIncludedFilter";

// Import other filter components like TTKAvailabilityFilter, etc.

interface VendorFilterSectionProps {
  onFilterChange: (filters: any) => void;
  vendorType: string; // Decide filters based on vendor type
}

const VendorFilterSection: React.FC<VendorFilterSectionProps> = ({
  onFilterChange,
  vendorType,
}) => {
  const [expandedCategories, setExpandedCategories] = useState<{
    [key: string]: boolean;
  }>({});

  const handleCategoryClick = (categoryName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName], // Toggle the specific category
    }));
  };
  const handlePriceFilterChange = (
    minPrice: number | null,
    maxPrice: number | null
  ) => {
    onFilterChange({ minPrice, maxPrice });
  };

  const handleDateFilterChange = (selectedDates: Date[]) => {
    onFilterChange({ selectedDates });
  };

  const handleIncludedFilterChange = (includedOptions: string[]) => {
    onFilterChange({ includedOptions });
  };

  // Function to return filter categories based on vendor type
  const getFilterCategories = (vendorType: string) => {
    switch (vendorType) {
      case "Photography":
        return [
          { name: "Price" },
          { name: "Availability" },
          { name: "Rating" },
          // Add more Photography-specific filters
        ];
      case "Catering":
        return [
          { name: "Price" },
          { name: "Cuisine Type" }, // Custom filter for Catering
          { name: "Availability" },
          // Add more Catering-specific filters
        ];
      case "Venue":
        return [
          { name: "Price" },
          { name: "Location" }, // Custom filter for Venue
          { name: "Capacity" },
          { name: "Availability" },
          // Add more Venue-specific filters
        ];
      // Add more cases for other vendor types
      default:
        return [{ name: "Price" }, { name: "Availability" } ,{ name: "Included" }]; // Default filter categories
    }
  };

  // Use vendor-specific filters
  const filterCategories = getFilterCategories(vendorType);

  // Switch-case to render filter component based on category
  const renderFilterComponent = (categoryName: string) => {
    switch (categoryName) {
      case "Price":
        return <TTKPriceFilter onFilterChange={handlePriceFilterChange} />;
      case "Availability":
        // return <TTKAvailabilityFilter onFilterChange={...} />;
        return (
          <TTKAvailabilityFilter
            onFilterChange={(selectedDates) => {
              // Assuming your FilterValues interface has a 'selectedDates' property
              handleDateFilterChange(selectedDates);
            }}
          />
        ); // Placeholder

      case "Included":
        return (
          <TTKIncludedFilter onFilterChange={handleIncludedFilterChange} />
        );

      case "Rating":
        // return <TTKRatingFilter onFilterChange={...} />;
        return <div>Rating filter goes here</div>; // Placeholder
      case "Cuisine Type":
        // return <TTKCuisineTypeFilter onFilterChange={...} />;
        return <div>Cuisine Type filter goes here</div>; // Placeholder
      case "Location":
        // return <TTKLocationFilter onFilterChange={...} />;
        return <div>Location filter goes here</div>; // Placeholder
      case "Capacity":
        // return <TTKCapacityFilter onFilterChange={...} />;
        return <div>Capacity filter goes here</div>; // Placeholder
      // Add more cases for other filters
      default:
        return null;
    }
  };

  return (
    <Box>
      <List>
        {filterCategories.map((category) => (
          <div key={category.name}>
            <ListItemButton onClick={() => handleCategoryClick(category.name)}>
              <ListItemText primary={category.name} />
              {expandedCategories[category.name] ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )}
            </ListItemButton>
            <Collapse
              in={expandedCategories[category.name]}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {renderFilterComponent(category.name)}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Box>
  );
};

export default VendorFilterSection;
