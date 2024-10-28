// app/pages/vendors/page.tsx
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
import vendorsData from '../../../data/vendors.json';
import { FilterCategory, FilterValues } from "@/app/types/filter";
import VendorFilterSection from "@/app/components/features/Vendors/VendorFilterSection";
import { filterCategories } from "@/app/data/filterCategories";

const VendorsPage: React.FC = () => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [filteredVendors, setFilteredVendors] = useState<Vendor[]>([]);
  const [leftFilterCategories, setLeftFilterCategories] = useState<FilterCategory[]>(
    filterCategories['venue'] // Initialize with venue filters
  );
  const [filterValues, setFilterValues] = useState({
    // Make sure this is defined
    type: "",
    location: "",
    price: "",
    capacity:"",
    minPrice: null,
    maxPrice: null
  });

  // Fetch vendor data (replace with your actual data fetching logic)
  // useEffect(() => {
  //   const fetchVendors = async () => {
  //     try {
  //       const response = await fetch('/api/vendors'); // Replace with your API endpoint
  //       const data = await response.json();
  //       setVendors(data);
  //       setFilteredVendors(data);
  //     } catch (error) {
  //       console.error('Error fetching vendors:', error);
  //     }
  //   };

  //   fetchVendors();
  // }, []);

  useEffect(() => {
    const mockVendors: Vendor[] = vendorsData; // Use the imported data
    setVendors(mockVendors);
    setFilteredVendors(mockVendors);
     // Initialize left filter options
     const initialLeftFilters = filterCategories["venue"];
     setLeftFilterCategories(initialLeftFilters);
  }, []);

  // Define vendor types and locations for the filters
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

  const handleFilterChange = (field: keyof FilterValues, value: string | null) => {
    // 1. Update filterValues state
    setFilterValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));

    // 2. Update left filter categories when type filter changes
    if (field === 'type') {
      const newLeftFilters = value ? filterCategories[value] : [];
      setLeftFilterCategories(newLeftFilters);
    }

    // 3. Apply filtering logic
    const filteredVendors = vendors.filter((vendor) => {
      let match = true;

      if (filterValues.type) {
        match = match && vendor.type === filterValues.type;
      }

      if (filterValues.location) {
        match = match && vendor.location === filterValues.location;
      }

      // Add other filtering conditions here based on newFilterValues
      // Example for price filter:
      if (filterValues.price) {
        const [minPrice, maxPrice] = filterValues.price.split("-").map(Number);
        match =
          match &&
          vendor.startingPrice >= minPrice &&
          vendor.startingPrice <= maxPrice;
      }

      // ... add filtering for other dynamic filters (availability, photographyStyle, etc.)

      return match;
    });

    setFilteredVendors(filteredVendors);
  };


  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      mt: 4, 
      // bgcolor: '#f5f5f5', 
      minHeight: '100vh',
      width: '100%' 
    }}>
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column' }}> 
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2 }}> {/* Use Box with flexbox */}
          <VendorFilter
            onFilterChange={(value) => handleFilterChange('type', value)}
            options={vendorTypes}
            placeholder="Select Vendor Type"
            startAdornment={<StoreIcon />}
          />
          <VendorFilter
            onFilterChange={(value) => handleFilterChange('location', value)}
            options={vendorLocations}
            placeholder="Select Vendor Location"
            startAdornment={<LocationOnIcon />}
          />
        </Box>

        <Box sx={{ display: 'flex', mt: 2 }}> {/* Use Box with flexbox */}
          {/* Left filter section */}
          <Box sx={{ 
            width: '25%', // 1/4 width for left filters
            mr: 4, 
            bgcolor: 'white', 
            boxShadow: 2, 
            borderRadius: 2, 
            p: 2
          }}>
            <VendorFilterSection
              onFilterChange={handleFilterChange}
              filterCategories={leftFilterCategories}
            />
          </Box>

          {/* Vendor list section */}
          <Box sx={{ 
            flex: 1, // Take remaining space
            bgcolor: 'white', 
            boxShadow: 2, 
            borderRadius: 2, 
            p: 2 
          }}>
            <VendorList vendors={filteredVendors} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VendorsPage;
