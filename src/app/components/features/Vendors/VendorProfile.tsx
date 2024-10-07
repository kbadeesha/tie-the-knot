import { Vendor } from "@/app/types/vendor";
import { Container, Typography } from "@mui/material";
import React from "react";
import TTKCustomButton from "../../TTKCustomButton";
import { FaFacebook, FaGlobe, FaInstagram, FaTiktok } from "react-icons/fa";
import VendorSocials from "./VendorSocials";
interface VendorProfileProps {
  vendorData: Vendor; // Define vendorData type as Vendor
}
const VendorProfile: React.FC<VendorProfileProps> = ({ vendorData }) => {
  return (
    <Container
      maxWidth="lg"
      className=" px-4"
      style={{ margin: "16px", padding: "0 16px" }}
    >
      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Profile Picture and Basic Info */}
        <div className="flex flex-col items-center text-center">
          <Typography variant="h6" gutterBottom className="font-bold ">
            About {vendorData.name}
          </Typography>
          <img
            src={vendorData.logo}
            alt="Shutter & Sound"
            className="rounded-full w-40 h-40 object-cover"
          />
          <Typography variant="h6" className="font-bold mt-4">
            {vendorData.name}
          </Typography>
          {/* Social Icons */}
          <VendorSocials socials={vendorData.socials} />

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
        <div className="col-span-2 mt-4">
          <Typography variant="body2" className="mb-4 ">
            {vendorData.description}
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default VendorProfile;
