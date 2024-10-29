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

interface VendorFilterSectionProps {
  onFilterChange: (filters: any) => void;
  vendorType: string | null;
  filterCategories: { name: string }[];
}

const VendorFilterSection: React.FC<VendorFilterSectionProps> = ({
  onFilterChange,
  vendorType,
  filterCategories,
}) => {
  const [expandedCategories, setExpandedCategories] = useState<{
    [key: string]: boolean;
  }>({});

  const handleCategoryClick = (categoryName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
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

  const getFilterCategories = (vendorType: string | null) => {
    switch (vendorType) {
      case "photographer":
        return [
          { name: "Price" },
          { name: "Availability" },
          { name: "Rating" },
        ];
      case "caterer":
        return [
          { name: "Price" },
          { name: "Cuisine Type" },
          { name: "Availability" },
        ];
      case "venue":
        return [
          { name: "Price" },
          { name: "Location" },
          { name: "Capacity" },
          { name: "Availability" },
        ];
      default:
        return [{ name: "Price" }, { name: "Availability" }];
    }
  };

  const categories = getFilterCategories(vendorType);

  const renderFilterComponent = (categoryName: string) => {
    switch (categoryName) {
      case "Price":
        return <TTKPriceFilter onFilterChange={handlePriceFilterChange} />;
      case "Availability":
        return (
          <TTKAvailabilityFilter
            onFilterChange={(selectedDates) =>
              handleDateFilterChange(selectedDates)
            }
          />
        );
      case "Included":
        return (
          <TTKIncludedFilter onFilterChange={handleIncludedFilterChange} />
        );
      case "Rating":
        return <div>Rating filter goes here</div>;
      case "Cuisine Type":
        return <div>Cuisine Type filter goes here</div>;
      case "Location":
        return <div>Location filter goes here</div>;
      case "Capacity":
        return <div>Capacity filter goes here</div>;
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
