import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

interface TTKServiceMultiSelectProps {
  label: string;
  description?: string;
  onChange: (selectedServices: string[], label: string) => void;
  options: {
    value: string;
    label: string;
  }[];
  selectedServices: string[];
}

const TTKServiceMultiSelect: React.FC<TTKServiceMultiSelectProps> = ({
  options,
  label,
  description,
  onChange,
  selectedServices,
}) => {
  // const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Handle button click for selecting/deselecting items
  const handleSelect = (service: string) => {
    const updatedSelectedServices = selectedServices.includes(service)
      ? selectedServices.filter((item) => item !== service)
      : [...selectedServices, service];

    onChange(updatedSelectedServices, label); // Pass the updated selected services to onChange
  };

  if (!options || options.length === 0) {
    return <Typography variant="body1">No services available.</Typography>;
  }

  return (
    <Box>
      <div className="mb-5">
        <Typography variant="h6">{label}</Typography>
        <p>{description}</p>
      </div>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {options.map((service) => (
          <Button
            key={service.value}
            onClick={() => handleSelect(service.value)} // Handle toggle on click
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5px 15px",
              backgroundColor: selectedServices.includes(service.value)
                ? "#ffffff" // selected background
                : "#ffffff", // default background
              color: selectedServices.includes(service.value)
                ? "black" //selected text color
                : "black", // default text color
              border: selectedServices.includes(service.value)
                ? "3px solid #000000" //selected border color
                : "1px solid #d1d1d1", // default border color
              boxShadow: selectedServices.includes(service.value)
                ? "0 5px 15px rgba(63, 81, 181, 0.2)"
                : "none",
              "&:hover": {
                backgroundColor: selectedServices.includes(service.value)
                  ? "#e0e0e0" //selected hover
                  : "#e0e0e0", // default hover effect
              },
              transition: "background-color 0.3s, box-shadow 0.3s",
              borderRadius: "20px",
              minWidth: "auto",
              height: "36px",
              margin: "5px",
            }}
          >
            <span>{service.label}</span>
            {selectedServices.includes(service.value) && (
              <CheckIcon sx={{ marginLeft: 1, fontSize: "18px" }} />
            )}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default TTKServiceMultiSelect;
