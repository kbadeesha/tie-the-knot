// app/pages/vendors/[vendorId]/page.tsx
"use client";
import * as React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Vendor } from "../../../types/vendor";
import TTKGallery from "@/app/components/common/TTKGallery";
import TTKVideoPlayer from "@/app/components/common/TTKVideoPlayer";


const VendorPage: React.FC = () => {
  const { vendorId } = useParams();
  const [vendor, setVendor] = useState<Vendor | null>(null);

  // useEffect(() => {
  //   const fetchVendor = async () => {
  //     try {
  //       // Replace with your actual API endpoint
  //       const response = await fetch(`/api/vendors/${vendorId}`);
  //       const data = await response.json();
  //       setVendor(data);
  //     } catch (error) {
  //       console.error('Error fetching vendor:', error);
  //     }
  //   };

  //   if (vendorId) {
  //     fetchVendor();
  //   }
  // }, [vendorId]);

  useEffect(() => {
    // Mock vendor data (replace with your actual API call later)
    const mockVendor = {
      id: vendorId as string,
      name: "Mock Venue",
      type: "venue",
      location: "Colombo",
      rating: 4.5,
      tagline: "Your dream wedding starts here",
      quickResponder: true,
      images: [
        "/assets/img/vendor_1.jpg",
        "/assets/img/vendor_2.jpg",
        "/assets/img/vendor_1.jpg",
        "/assets/img/vendor_portrait.jpg",
        "/assets/img/vendor_2.jpg",
        "/assets/img/vendor_1.jpg",
        "/assets/img/vendor_2.jpg",
      ],
      address: "123 Main Street, Colombo",
      startingPrice: 5000,
      description: "A spacious and elegant venue for your dream wedding.",
      feedbacks: [
        {
          comment:
            "Amazing venue! We had our reception here and it was perfect.",
          clientName: "John Doe",
          daysAgo: 14,
        },
      ],
    };
    setVendor(mockVendor);
  }, [vendorId]);

  if (!vendor) {
    return <div>Loading vendor...</div>;
  }

  return (
    <Container maxWidth="xl" sx={{ marginTop: 4 }}>
      <TTKGallery images={vendor.images} />
   
      <Typography variant="h4" gutterBottom>
        {vendor.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Type: {vendor.type}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Location: {vendor.location}
      </Typography>
      {/* Add more vendor details here */}
      <TTKVideoPlayer videoUrl="/assets/video/hero.mp4" /> 

    </Container>
  );
};

export default VendorPage;
