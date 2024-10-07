
import React from 'react';
import { FaFacebook, FaInstagram, FaGlobe, FaTiktok } from 'react-icons/fa';

interface Socials {
  facebook?: string | null;
  instagram?: string | null;
  website?: string | null;
  tiktok?: string | null;
}

interface VendorSocialsProps {
  socials: Socials;
}

const VendorSocials: React.FC<VendorSocialsProps> = ({ socials }) => {
  return (
    <div className="flex space-x-4 mt-2 mb-4">
      {socials.facebook && (
        <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-gray-600 cursor-pointer hover:text-gray-800" />
        </a>
      )}

      {socials.instagram && (
        <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-600 cursor-pointer hover:text-gray-800" />
        </a>
      )}

      {socials.website && (
        <a href={socials.website} target="_blank" rel="noopener noreferrer">
          <FaGlobe className="text-gray-600 cursor-pointer hover:text-gray-800" />
        </a>
      )}

      {socials.tiktok && (
        <a href={socials.tiktok} target="_blank" rel="noopener noreferrer">
          <FaTiktok className="text-gray-600 cursor-pointer hover:text-gray-800" />
        </a>
      )}
    </div>
  );
};

export default VendorSocials;
