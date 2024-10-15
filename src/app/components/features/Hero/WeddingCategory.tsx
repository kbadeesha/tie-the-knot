import React, { useRef, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { categories } from "../../../data/ListItems"; // Ensure this path is correct

const TTKWeddingCategories: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollInterval, setScrollInterval] = useState<number | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -20 : 20;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToStart = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      checkScrollPosition(); // Update arrow visibility after scrolling
    }
  };

  const scrollToEnd = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: "smooth",
      });
      setTimeout(checkScrollPosition, 100); // Update arrow visibility after scrolling
    }
  };

  const startAutoScroll = (direction: "left" | "right") => {
    const intervalId = window.setInterval(() => scroll(direction), 50);
    setScrollInterval(intervalId);
  };

  const stopAutoScroll = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", checkScrollPosition);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  return (
    <Box sx={{ textAlign: "center", mt: 4, position: "relative" }}>
      <Typography variant="h5" gutterBottom>
        Explore wedding vendors by category
      </Typography>

      {showLeftArrow && (
        <IconButton
          onClick={scrollToStart} // Jump to start
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            backgroundColor: "rgba(0,0,0,0.4)",
            color: "white",
            width: 50,
            height: 50,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.6)",
            },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      )}

      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          justifyContent: "center", // Center the items
          whiteSpace: "nowrap",
          scrollBehavior: "smooth",
          "scrollbar-width": "none", // Hide scrollbar for Firefox
          "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Chrome/Safari
        }}
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            sx={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              mx: 2,
              minWidth: "80px", // Optional: set a minimum width to prevent squishing
            }}
          >
            <IconButton
              sx={{
                backgroundColor: "#000000",
                color: "white",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            >
              {category.icon}
            </IconButton>
            <Typography sx={{ marginTop: "10px", color: "black" }}>
              {category.name}
            </Typography>
          </Box>
        ))}
      </Box>

      {showRightArrow && (
        <IconButton
          onClick={scrollToEnd} // Jump to end
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            backgroundColor: "rgba(0,0,0,0.4)",
            color: "white",
            width: 50,
            height: 50,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.6)",
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default TTKWeddingCategories;
