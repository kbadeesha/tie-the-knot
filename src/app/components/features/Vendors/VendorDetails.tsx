import * as React from 'react';
import { Vendor } from '../../../types/vendor';
import { Stack, Divider } from '@mui/material';

import TTKCustomButton from '../../common/TTKCustomButton';
import VendorRating from './VendorRating';


interface VendorDetailsProps {
  vendor: Vendor;
}

const VendorDetails: React.FC<VendorDetailsProps> = ({ vendor }) => (
  <Stack direction="row" alignItems="center" spacing={1}>
    <VendorRating rating={vendor.rating} /> 
    <Divider orientation="vertical" flexItem />
    <TTKCustomButton variant="outlined">View Profile</TTKCustomButton>
  </Stack>
);

export default VendorDetails;