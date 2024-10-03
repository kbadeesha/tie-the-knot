// app/components/common/TTKCarouselComponent.tsx
import * as React from "react";
import { useState, useEffect } from "react";
import { Box, IconButton, styled } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

interface TTKCarouselComponentProps {
  images: string[];
}

// Styled components for carousel controls
const StyledIconButton = styled(IconButton)({
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  color: "white",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  borderRadius: "50%",
});

const TTKCarouselComponent: React.FC<TTKCarouselComponentProps> = ({
  images,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextImage, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%", // Take full width of parent
        height: "100%", // Take full height of parent
        overflow: "hidden",
        ":hover .carousel-control": {
          opacity: 1,
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image}
          alt={`Image ${index + 1}`}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            transition: "opacity 0.3s ease-in-out",
            display: index === currentImageIndex ? "block" : "none",
          }}
        />
      ))}

      {isHovered && (
        <>
          <StyledIconButton
            className="carousel-control"
            sx={{
              position: "absolute",
              top: "50%",
              left: 8,
              transform: "translateY(-50%)",
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
            }}
            onClick={handlePrevImage}
          >
            <NavigateBeforeIcon />
          </StyledIconButton>
          <StyledIconButton
            className="carousel-control"
            sx={{
              position: "absolute",
              top: "50%",
              right: 8,
              transform: "translateY(-50%)",
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
            }}
            onClick={handleNextImage}
          >
            <NavigateNextIcon />
          </StyledIconButton>
        </>
      )}

      <Box
        sx={{
          position: "absolute",
          bottom: 8,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: index === currentImageIndex ? "white" : "gray",
              mx: 0.5,
              cursor: "pointer",
            }}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TTKCarouselComponent;
