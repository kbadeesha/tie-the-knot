import * as React from 'react';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { styled } from '@mui/material/styles';

interface VendorRatingProps {
  rating: number;
}

interface StyledStarProps extends React.ComponentProps<typeof StarIcon> {
  fillPercentage: number;
}

// Custom StyledStar to handle partial filling
const StyledStar = styled('div')<StyledStarProps>(({ fillPercentage }) => ({
  position: 'relative',
  width: 24, // Size of the star icon
  height: 24,
  display: 'inline-block',
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
    fill: 'gold',
  },
  '.full-star': {
    clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`, // Clip star according to percentage
  },
}));

const VendorRating: React.FC<VendorRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const fillPercentage = (rating - fullStars) * 100; // Calculate the fill percentage for partial star

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        // Fully filled star
        stars.push(
          <StyledStar key={i} fillPercentage={100}>
            <StarIcon />
          </StyledStar>
        );
      } else if (i === fullStars && fillPercentage > 0) {
        // Partially filled star
        stars.push(
          <StyledStar key={i} fillPercentage={fillPercentage}>
            <StarIcon className="full-star" />
            <StarBorderIcon />
          </StyledStar>
        );
      } else {
        // Empty star
        stars.push(
          <StyledStar key={i} fillPercentage={0}>
            <StarBorderIcon />
          </StyledStar>
        );
      }
    }
    return stars;
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {renderStars()}
      <Typography variant="body2" ml={0.5}>
        {rating.toFixed(1)}
      </Typography>
    </Box>
  );
};

export default VendorRating;
