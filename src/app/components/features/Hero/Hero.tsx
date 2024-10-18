// src/components/Hero.tsx

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "../../../../styles/pages/hero.css";
import TTKWeddingCategories from "./WeddingCategory";

const Hero: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: "100vh", // Adjust as needed
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="/assets/video/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Vide opacity
            zIndex: 0,
          }}
        />

        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            color: "white",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className="text-4xl sm:text-6xl font-bold hero-heading"
            sx={{
              marginTop: "5rem",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Wedding planning starts here
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            className="text-xl sm:text-2xl justify-center hero-subheading"
            sx={{
              marginTop: "1rem",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            From venues and save the dates to a free wedding website, a registry
            and even your cake — Tie The Knot is here for all the days along the
            way
          </Typography>
        </Container>
      </Box>
      <TTKWeddingCategories />{" "}
      {/* This will display the categories right after the Hero section */}
    </>
  );
};

export default Hero;
