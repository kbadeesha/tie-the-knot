import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Button from "@mui/material/Button";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { useState } from "react";


interface TTKGalleryProps {
  images: string[];
}

const TTKGallery: React.FC<TTKGalleryProps> = ({ images }) => {
  const totalImages = images.length;
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClick = (index: number) => {
    setIndex(index);
    setOpen(true);
  };

  const slides = images.map((image) => ({ src: image }));
  console.log(slides);

  // Calculate image dimensions based on a base width
  const baseWidth = 320; // Slightly reduced base width
  const baseHeight = 213; 

  const NextJsImage = ({ src, width, height }: any) => (
    <Image
      src={src}
      alt="gallery image"
      width={width}
      height={height}
      sizes="(min-width: 1024px) 80vw, 100vw" // Adjust sizes as needed
    />
  );

  return (
    <div>
      <Box
        sx={{
          display: "grid",
          // Adjust column widths to account for the double gap
          gridTemplateColumns: "1.375fr 0.5fr 1fr 1fr",
          gridTemplateRows: "repeat(2, 1fr)",
          "& .MuiImageListItem-root": {
            borderRadius: "12px",
            overflow: "hidden",
          },
        }}
      >
        {/* 1st Image (2x2) */}
        <Box sx={{ gridArea: "1 / 1 / 3 / 3" }}>
          <Image
            src={images[0]}
            alt="gallery"
            width={baseWidth * 2}
            height={baseHeight * 2}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ borderRadius: "12px" }}
          />
        </Box>

        {/* 2nd Image (1x1) */}
        <Box sx={{ gridArea: "1 / 3 / 2 / 4" }}>
          <Image
            src={images[1]}
            alt="gallery"
            width={baseWidth}
            height={baseHeight}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ borderRadius: "12px" }}
          />
        </Box>

        {/* 3rd Image (1x1) */}
        <Box sx={{ gridArea: "2 / 3 / 3 / 4" }}>
          <Image
            src={images[2]}
            alt="gallery"
            width={baseWidth}
            height={baseHeight}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ borderRadius: "12px" }}
          />
        </Box>

        {/* 4th Image (1x2) */}
        <Box
          sx={{
            gridArea: "1 / 4 / 3 / 5",
            position: "relative", // To position the button inside
          }}
        >
          <Image
            src={images[3]}
            alt="gallery"
            width={baseWidth}
            height={baseHeight * 2}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ borderRadius: "12px" }}
          />

          {/* "View All" Button */}
          <Button
            variant="contained"
            onClick={() => handleClick(0)}
            sx={{
              position: "absolute",
              bottom: 20, // Adjust spacing from bottom as needed
              right: 80, // Adjust spacing from right as needed
              borderRadius: 25,
              padding: "10px 20px",
              backgroundColor: "#1e88e5",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            View All ({totalImages}+)
          </Button>
        </Box>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={ images.map((image) => ({ src: image }))} 
          index={index}
          plugins={[Thumbnails, Zoom]}
          render={{
            slide: NextJsImage,
            thumbnail: NextJsImage,
          }}
        />
      </Box>
    </div>
  );
};

export default TTKGallery;
