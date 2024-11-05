import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

interface TTKServiceMultiSelectProps {
  options: string[]; // List of services or options
}

const TTKServiceMultiSelect: React.FC<TTKServiceMultiSelectProps> = ({
  options,
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Handle button click for selecting/deselecting items
  const handleSelect = (service: string) => {
    setSelectedServices(
      (prevSelected) =>
        prevSelected.includes(service)
          ? prevSelected.filter((item) => item !== service) // Deselect if already selected
          : [...prevSelected, service] // Select if not already selected
    );
  };

  if (!options || options.length === 0) {
    return <Typography variant="body1">No services available.</Typography>;
  }

  return (
    <Box>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Select Your Services
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {options.map((service) => (
          <Button
            key={service}
            onClick={() => handleSelect(service)} // Handle toggle on click
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5px 15px", // Smaller padding for a more compact look
              backgroundColor: selectedServices.includes(service)
                ? "#000000" // black background when selected
                : "#ffffff", // Light background when not selected
              color: selectedServices.includes(service) ? "white" : "black",
              border: "1px solid #d1d1d1", // Lighter border color
              boxShadow: selectedServices.includes(service)
                ? "0 4px 10px rgba(63, 81, 181, 0.2)" // Shadow when selected
                : "none",
              "&:hover": {
                backgroundColor: selectedServices.includes(service)
                  ? "gray" //selected hover
                  : "#e0e0e0", // Hover effect
              },
              transition: "background-color 0.3s, box-shadow 0.3s",
              borderRadius: "20px", // A lower border-radius for subtle rounding
              minWidth: "auto", // Allow buttons to be more flexible in width
              height: "36px", // Consistent height similar to LinkedIn's style
              margin: "5px", // Spacing between each button for better alignment
            }}
          >
            <span>{service}</span>
            {selectedServices.includes(service) && (
              <CheckIcon sx={{ marginLeft: 1, fontSize: "18px" }} />
            )}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default TTKServiceMultiSelect;
