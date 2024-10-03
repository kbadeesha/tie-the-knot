// app/components/common/TTKPagination.tsx

import * as React from 'react';
import { 
  Box, 
  IconButton, 
  Typography, 
  useMediaQuery, 
  useTheme,
  styled 
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

interface TTKPaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

// Styled components for the pagination elements
const PaginationContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '16px', 
  padding: '8px', 
  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  borderRadius: '4px', 
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', 
});

const PageInfo = styled(Typography)({
  margin: '0 16px', 
  fontSize: '14px', 
});

const StyledIconButton = styled(IconButton)({
  padding: '6px', 
  borderRadius: '4px', 
  '& svg': { 
    fontSize: '1.2rem', 
  },
  '&:disabled': { 
    opacity: 0.5, 
    cursor: 'default', 
  },
});

const TTKPagination: React.FC<TTKPaginationProps> = ({ count, page, onChange }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handlePrevPage = (event: React.ChangeEvent<unknown>) => { // Add event parameter
    onChange(event, Math.max(1, page - 1)); 
  };

  const handleNextPage = (event: React.ChangeEvent<unknown>) => { // Add event parameter
    onChange(event, Math.min(count, page + 1)); 
  };

  return (
    <PaginationContainer>
      <StyledIconButton onClick={handlePrevPage} disabled={page === 1}>
        <NavigateBeforeIcon />
      </StyledIconButton>

      {isSmallScreen ? (
        <PageInfo variant="body2">{page} of {count}</PageInfo>
      ) : (
        <PageInfo variant="body2">
          Page {page} of {count}
        </PageInfo>
      )}

      <StyledIconButton onClick={handleNextPage} disabled={page === count}>
        <NavigateNextIcon />
      </StyledIconButton>
    </PaginationContainer>
  );
};

export default TTKPagination;