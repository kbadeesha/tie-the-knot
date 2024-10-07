import * as React from "react";
import { Vendor } from "../../../types/vendor";
import { Stack, Divider, Typography, Box } from "@mui/material";
import VendorRating from "./VendorRating";

interface VendorDetailsProps {
  vendor: Vendor;
  children?: React.ReactNode;
}

const VendorDetails: React.FC<VendorDetailsProps> = ({ vendor, children }) => (
  <Stack spacing={0.5}>
    <Stack direction="row" alignItems="center" spacing={1}>
      <VendorRating rating={vendor.rating} />
      <Divider orientation="vertical" flexItem />
      <Typography variant="body2" color="text.secondary">
        {vendor.address}
      </Typography>
    </Stack>
    <Box
      sx={{
        maxHeight: 60,
        overflow: "hidden",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        msOverflowStyle: "none" /* IE and Edge */,
        scrollbarWidth: "none" /* Firefox */,
        display: "flex", // Add this to make the Box a flex container
        justifyContent: "space-between", // Now this will work
         textAlign: 'justify'
      }}
      onMouseOver={(e) => (e.currentTarget.style.overflow = "auto")}
      onMouseOut={(e) => (e.currentTarget.style.overflow = "hidden")}
    >
      <Typography variant="body2" color="text.secondary">
        {vendor.description}
      </Typography>
    </Box>
    {children}
  </Stack>
);

export default VendorDetails;
