"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import VendorList from "../../../components/features/Vendors/VendorList";
import VendorFilter from "../../../components/features/Vendors/VendorFilter";
import { Vendor } from "../../../types/vendor";
import { Option } from "../../../types/option";
import { Box } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CakeIcon from "@mui/icons-material/Cake";
import VideocamIcon from "@mui/icons-material/Videocam";
import WineBarIcon from "@mui/icons-material/WineBar";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import ChairIcon from "@mui/icons-material/Chair";
import vendorsData from "../../../data/vendors.json";
import { FilterCategory, FilterValues } from "@/app/types/filter";
import VendorFilterSection from "@/app/components/features/Vendors/VendorFilterSection";
import { filterCategories } from "@/app/data/filterCategories";

const VendorsPage: React.FC = () => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [filteredVendors, setFilteredVendors] = useState<Vendor[]>([]);
  const [leftFilterCategories, setLeftFilterCategories] = useState<
    FilterCategory[]
  >(filterCategories["venue"]);
  const [filterValues, setFilterValues] = useState<FilterValues>({
    type: "",
    location: null, // Initialize as null
    price: "",
    capacity: "",
    minPrice: null,
    maxPrice: null,
  });

  useEffect(() => {
    const mockVendors: Vendor[] = vendorsData;
    setVendors(mockVendors);
    setFilteredVendors(mockVendors);
    const initialLeftFilters = filterCategories["venue"];
    setLeftFilterCategories(initialLeftFilters);
  }, []);

  const vendorTypes: Option[] = [
    { value: "venue", label: "Venues", icon: ChairIcon },
    { value: "photographer", label: "Photographers", icon: CameraAltIcon },
    {
      value: "beauty",
      label: "Beauty Professionals",
      icon: FaceRetouchingNaturalIcon,
    },
    { value: "dj", label: "Bands & DJs", icon: MusicNoteIcon },
    { value: "florist", label: "Florists", icon: LocalFloristIcon },
    { value: "caterer", label: "Caterers", icon: RestaurantIcon },
    { value: "planner", label: "Wedding Planners", icon: CalendarMonthIcon },
    { value: "cake", label: "Cakes & Desserts", icon: CakeIcon },
    { value: "videographer", label: "Videographers", icon: VideocamIcon },
    { value: "bar", label: "Bar Services & Beverages", icon: WineBarIcon },
  ];

  const vendorLocations: Option[] = [
    { value: "Colombo", label: "Colombo" },
    { value: "Kandy", label: "Kandy" },
    { value: "Galle", label: "Galle" },
    { value: "Negombo", label: "Negombo" },
    { value: "Jaffna", label: "Jaffna" },
  ];

  const handleFilterChange = (filters: FilterValues) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      ...filters,
    }));

    if (filters.type) {
      const newLeftFilters = filterCategories[filters.type] || [];
      setLeftFilterCategories(newLeftFilters);
    }

    const filteredVendors = vendors.filter((vendor) => {
      let match = true;

      if (filters.type) {
        match = match && vendor.type === filters.type;
      }

      if (filters.location) {
        match = match && vendor.location === filters.location; // Ensure filters.location is handled as a string
      }

      if (filters.minPrice !== null && filters.maxPrice !== null) {
        match =
          match &&
          vendor.startingPrice >= filters.minPrice &&
          vendor.startingPrice <= filters.maxPrice;
      }

      return match;
    });

    setFilteredVendors(filteredVendors);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 4,
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 2,
          }}
        >
          <VendorFilter
            onFilterChange={(value) =>
              handleFilterChange({
                type: value,
                location: null,
                price: "",
                capacity: "",
                minPrice: null,
                maxPrice: null,
              })
            }
            options={vendorTypes}
            placeholder="Select Vendor Type"
            startAdornment={<StoreIcon />}
          />
          <VendorFilter
            onFilterChange={(value) =>
              handleFilterChange({
                location: value,
                type: "",
                price: "",
                capacity: "",
                minPrice: null,
                maxPrice: null,
              })
            }
            options={vendorLocations}
            placeholder="Select Vendor Location"
            startAdornment={<LocationOnIcon />}
          />
        </Box>

        <Box sx={{ display: "flex", mt: 2 }}>
          <Box
            sx={{
              width: "25%",
              mr: 4,
              bgcolor: "white",
              boxShadow: 2,
              borderRadius: 2,
              p: 2,
            }}
          >
            <VendorFilterSection
              onFilterChange={handleFilterChange}
              vendorType={filterValues.type}
              filterCategories={leftFilterCategories}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              bgcolor: "white",
              boxShadow: 2,
              borderRadius: 2,
              p: 2,
            }}
          >
            <VendorList vendors={filteredVendors} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VendorsPage;
