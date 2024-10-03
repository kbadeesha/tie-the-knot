// app/components/features/Vendors/VendorListItem.tsx

import * as React from "react";
import { Vendor } from "../../../types/vendor";
import { useRouter } from "next/navigation";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import VendorInfo from "./VendorInfo"; // Import VendorInfo component
import VendorDetails from "./VendorDetails"; // Import VendorDetails component
import TTKCarouselComponent from "../../common/TTKCarouselComponent";

interface VendorListItemProps {
  vendor: Vendor;
}

const VendorListItem: React.FC<VendorListItemProps> = ({ vendor }) => {
  const router = useRouter();

  const handleClick = () => {
    // Remove the leading slash from the URL
    router.push(`vendors/${vendor.id}`); 
  };
  return (
    <ListItemButton
      onClick={handleClick}
      sx={{
        p: 2,
        minHeight: 200,
        m: 2,
        border: "1px solid rgba(0, 0, 0, 0.12)", // Use a lighter border with rgba
        borderRadius: 2, // Add rounded corners
        transition: "box-shadow 0.3s ease", // Add a transition for a smooth hover effect
        "&:hover": {
          boxShadow: 3, // Add a subtle box shadow on hover
        },
      }}
    >
      {" "}
      {/* Increased minHeight */}
      <ListItemIcon
        sx={{ minWidth: 300, height: 200 }}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Increased minWidth */}
        <TTKCarouselComponent images={vendor.images} />
      </ListItemIcon>
      <ListItemText
        primary={<VendorInfo vendor={vendor} />}
        secondary={<VendorDetails vendor={vendor} />}
        sx={{ ml: 2 }}
      />
    </ListItemButton>
  );
};

export default VendorListItem;
