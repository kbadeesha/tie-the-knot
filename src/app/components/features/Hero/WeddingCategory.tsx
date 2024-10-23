import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { categories } from "../../../data/ListItems"; // Ensure this path is correct
import TTKCustomSelectionList from "../../TTKCustomSelectionList";

const TTKWeddingCategories: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // For tracking selected category
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  const handleOnChange = (value: string) => {
    setSelectedCategory(value);
    console.log(value);
    if (value) {
      window.location.href = `/pages/vendor/${value}`;
    }
  };
  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      // Detect if we need to show/hide the left and right arrows
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1); // Fix for the right arrow
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      checkScrollPosition(); // Check on load
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
          onClick={() => scroll("left")}
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
            borderRadius: "50%", // Make the button round
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "black",
            },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      )}
      <Box
        ref={scrollRef}
        sx={{
          padding: "20px",
          display: "flex",
          overflowX: "auto", // Allow horizontal scrolling
          whiteSpace: "nowrap", // Prevent wrapping
          scrollbarWidth: "none", // Hide scrollbar (Firefox)
          "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar (Chrome, Safari)
          },
        }}
      >
        <TTKCustomSelectionList
          options={categories}
          selectedValue={selectedCategory}
          onChange={handleOnChange} // Handle selection
          type="gif_icon"
        />
      </Box>

      {showRightArrow && (
        <IconButton
          onClick={() => scroll("right")}
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
            borderRadius: "50%", // Make the button round
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
