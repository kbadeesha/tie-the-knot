// app/pages/vendors/[vendorId]/page.tsx
"use client";
import * as React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Vendor } from "../../../types/vendor";
import VendorProfile from "@/app/components/features/Vendors/VendorProfile";

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
      name: "Shutter & Sound",
      type: "photographer",
      location: "Colombo",
      rating: 4.5,
      tagline: "Your dream wedding starts here",
      quickResponder: true,
      images: ["/assets/img/vendor_1.jpg", "/assets/img/vendor_2.jpg"],
      logo: "/assets/img/vendor_avatar.png",
      address: "123 Main Street, Colombo",
      startingPrice: 5000,
      description:
        "Hi! Courtney here (that's me on the left!). Shutter and Sound is the brainchild of renowned wedding videographer Ryan Geldermann. Ryan began his wedding videography career in 2010 in Los Angeles and quickly became recognized as one of the top videographers in the U.S.. After relocating to DC and still receiving countless inquiries from all corners of the country, Ryan decided to recruit and train a few talented friends so he could continue offering the quality wedding videography he’s known for in SoCal and eventually over 10 cities. Shutter and Sound is a very small group of filmmakers dedicated to turning your big day into a work of art.Unlike similar companies, we do not book every couple that inquires, then scramble to hire random contractors to film those weddings. While that may result in more revenue for those companies, it also ultimately results in unpredictable and inconsistent quality. Instead, our team consists of a very select few photographers and videographers that shoot all the weddings. They are trained in our style so you (and we) can be confident that what you see on our website is what you will receive. We are a tight-knit family obsessed with quality control and customer service.A spacious and elegant venue for your dream wedding.",
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
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
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
      <VendorProfile vendorData={vendor} />
    </Container>
  );
};

export default VendorPage;
