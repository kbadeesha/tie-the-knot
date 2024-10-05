// app/components/features/Vendors/VendorList.tsx

import React, { useState } from 'react';
import List from '@mui/material/List';
import VendorListItem from './VendorListItem'; // Import VendorListItem
import { Vendor } from '../../../types/vendor';
import TTKPagination from '../../common/TTKPagination';

interface VendorListProps {
  vendors: Vendor[];
}

const VendorList: React.FC<VendorListProps> = ({ vendors }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const vendorsPerPage = 10; 

  const indexOfLastVendor = currentPage * vendorsPerPage;
  const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
  const currentVendors   = vendors.slice(indexOfFirstVendor, indexOfLastVendor);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  
  return (
    <div>

      <List>
      {currentVendors.map((vendor) => ( // Use currentVendors instead of vendors
          <VendorListItem key={vendor.id} vendor={vendor} /> 
        ))}
  
      </List>
        <TTKPagination 
        count={Math.ceil(vendors.length / vendorsPerPage)} 
        page={currentPage} 
        onChange={handlePageChange} 
      />
    </div>
  );
};

export default VendorList;