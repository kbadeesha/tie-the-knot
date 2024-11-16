"use client";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import TTKCustomSelectionList from "../../common/TTKCustomSelectionList";
import { FaHeart, FaShoppingCart, FaCalendarAlt } from "react-icons/fa";
import gif_planner from "../../../../../public/assets/gifs/planner.gif";
import gif_coins from "../../../../../public/assets/gifs/coins.gif";
import gif_romance from "../../../../../public/assets/gifs/romance.gif";

const RolePick = () => {
  const userType = [
    {
      label: "Bride/Groom",
      value: "bride_groom",
      icon: <FaHeart />,
      staticIcon:
        "https://img.icons8.com/?size=100&id=g0HxdO4qN9bN&format=png&color=000000", // Replace with appropriate static image
      animatedIcon: gif_romance.src, // No animation for this option
    },
    {
      label: "Planner",
      value: "planner",
      icon: <FaShoppingCart />,
      staticIcon:
        "https://img.icons8.com/?size=100&id=txE3iVQ7RBlC&format=png&color=000000", // Static image for Vendor
      animatedIcon: gif_planner.src, // Animated GIF for Vendor
    },
    {
      label: "Vendor",
      value: "vendor",
      icon: <FaCalendarAlt />,
      staticIcon:
        "https://img.icons8.com/?size=100&id=FybqHF0kXl1z&format=png&color=000000", // Static image placeholder
      animatedIcon: gif_coins.src, // Animated GIF for Planner
    },
  ];
  const handleOnChange = (value: string) => {
    setSelectedOptionUserType(value);
    console.log(value);

    if (value === "planner") {
      window.location.href = "/pages/onboarding/planner";
    } else if (value === "vendor") {
      window.location.href = "/pages/onboarding/vendor";
    } else {
      window.location.href = "/pages/onboarding/couple";
    }
  };
  const [selectedOptionUserType, setSelectedOptionUserType] =
    useState<string>("");

  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-screen">
      <Box
        sx={{
          height: "100%",
          borderRadius: 2,
          boxShadow: "md",
          bgcolor: "background.paper",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" className="font-bold">
              Welcome!
            </Typography>
            <Typography variant="h4" align="center" className="font-bold mb-12">
              Who Are You in the Wedding Planning Journey?
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className="text-gray-500 mb-4"
            >
              Select your role in the wedding planning process to help us
              personalize your experience.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TTKCustomSelectionList
              type="gif_icon"
              options={userType}
              selectedValue={selectedOptionUserType}
              onChange={handleOnChange}
              className="w-full"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RolePick;
