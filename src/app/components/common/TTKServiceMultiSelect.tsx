import React from "react";
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
  label,
  description,
  onChange,
  options,
  selectedServices,
}) => {
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
      {/* Label and Description Section */}
      <Box mb={2}>
        <Typography variant="h6">{label}</Typography>
        {description && <Typography variant="body2" color="textSecondary">{description}</Typography>}
      </Box>

      {/* Service Selection Buttons */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {options.map((service) => (
          <ServiceButton
            key={service.value}
            service={service}
            isSelected={selectedServices.includes(service.value)}
            onClick={handleSelect}
          />
        ))}
      </Box>
    </Box>
  );
};

// Custom Service Button Component
interface ServiceButtonProps {
  service: { value: string; label: string };
  isSelected: boolean;
  onClick: (service: string) => void;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ service, isSelected, onClick }) => (
  <Button
    onClick={() => onClick(service.value)}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "5px 15px",
      backgroundColor: isSelected ? "#ffffff" : "#ffffff", // selected background
      color: isSelected ? "black" : "black", // selected text color
      border: isSelected ? "3px solid #000000" : "1px solid #d1d1d1", // border color
      boxShadow: isSelected ? "0 5px 15px rgba(63, 81, 181, 0.2)" : "none",
      "&:hover": {
        backgroundColor: isSelected ? "#e0e0e0" : "#e0e0e0", // hover color
      },
      transition: "background-color 0.3s, box-shadow 0.3s",
      borderRadius: "20px",
      minWidth: "auto",
      height: "36px",
      margin: "5px",
    }}
  >
    <span>{service.label}</span>
    {isSelected && <CheckIcon sx={{ marginLeft: 1, fontSize: "18px" }} />}
  </Button>
);

export default TTKServiceMultiSelect;
