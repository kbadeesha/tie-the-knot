import * as React from 'react';
import { Typography } from '@mui/material';

const QuickResponder: React.FC = () => (
  <Typography variant="caption" sx={{ ml: 1, backgroundColor: 'green', color: 'white', p: '2px 8px', borderRadius: 1 }}>
    Quick responder
  </Typography>
);

export default QuickResponder;