import * as React from 'react';
import { Vendor } from '../../../types/vendor';
import { Typography, Stack } from '@mui/material';
import QuickResponder from './QuickResponder';

interface VendorInfoProps {
  vendor: Vendor;
}

const VendorInfo: React.FC<VendorInfoProps> = ({ vendor }) => (
  <Stack spacing={0.5}>
    <Typography variant="h6" component="div">
      {vendor.name}
      {vendor.quickResponder && <QuickResponder />} 
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {vendor.tagline} 
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {vendor.location}
    </Typography>
  </Stack>
);

export default VendorInfo;