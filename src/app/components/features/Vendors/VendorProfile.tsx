import { Vendor } from "@/app/types/vendor";
import { Container, Typography } from "@mui/material";
import React from "react";
import TTKCustomButton from "../../TTKCustomButton";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
interface VendorProfileProps {
  vendorData: Vendor; // Define vendorData type as Vendor
}
const VendorProfile: React.FC<VendorProfileProps> = ({ vendorData }) => {
  return (
    <Container maxWidth="lg" className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Profile Picture and Basic Info */}
        <div className="flex flex-col items-center">
          <img
            src={vendorData.logo}
            alt="Shutter & Sound"
            className="rounded-full object-cover"
          />
          <Typography variant="h5" className="font-bold">
            {vendorData.name}
          </Typography>
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4">
            <FaFacebook className="text-gray-600 cursor-pointer hover:text-gray-800" />
            <FaInstagram className="text-gray-600 cursor-pointer hover:text-gray-800" />
            <FaPinterest className="text-gray-600 cursor-pointer hover:text-gray-800" />
          </div>
          {/* Get a Quote Button */}
          <TTKCustomButton
            type="submit"
            variant="contained"
            color="primary"
            className="bg-black text-white px-6 py-2"
          >
            Get a quote
          </TTKCustomButton>
        </div>

        {/* Right Column - Vendor Description */}
        <div className="col-span-2">
          <Typography variant="h4" gutterBottom className="font-bold">
            About {vendorData.name}
          </Typography>
          <Typography variant="body2" className="mb-4">
            {vendorData.description}
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default VendorProfile;
